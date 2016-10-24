/**
 * Created by pooja on 21/10/16.
 */

import {MESSAGE_RECEIVED, MESSAGES_LOADED, TYPING, STOP_TYPING} from '../constants';
import axios from 'axios';
import {socket} from '../socket';

/**
 * Trigger to load all messages
 * @param userName
 * @param userId
 * @returns {function()}
 */

export function loadMessages() {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/chat'
        }).then((response) => {
            dispatch(messagesLoaded(response.data));
        })
    }
}

/**
 * Trigger when all messages are loaded
 * @param userName
 * @param userId
 * @param messages
 * @returns {{type, state: {user: {userName: *, userId: *}, messages: *}}}
 */

export function messagesLoaded(messages) {
    return {
        type: MESSAGES_LOADED,
        state: {
            messages: messages
        }
    }
}

/**
 * Trigger while sending a message
 * @param message
 * @param user
 * @returns {function()}
 */

export function sendMessage(message, user) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/chat',
            data: {
                text: message,
                from: user,
                time: new Date()
            }
        }).then((response) => {
            socket.emit('chat', {text: message, from: user, time: response.data.time, id: socket.id});
            dispatch(messageReceived({text: message, from: user, time: response.data.time, id: socket.id, isSent: true}))
        })
    }
}

/**
 * Trigger when message is received
 * @param message
 * @returns {{type, message: *}}
 */

export function messageReceived(message) {
    return {
        type: MESSAGE_RECEIVED,
        message
    }
}

/**
 * Trigger when user is typing
 * @param userName
 * @returns {{type, userName: *}}
 */

export function typing(userName) {
    return {
        type: TYPING,
        userName
    }
}

/**
 * Trigger when user stops typing
 * @returns {{type}}
 */

export function stopTyping() {
    return {
        type: STOP_TYPING
    }
}









