/**
 * Created by pooja on 21/10/16.
 */

import {MESSAGE_RECEIVED, MESSAGE_SENT, MESSAGES_LOADED} from '../constants';
import axios from 'axios';
import {socket} from '../socket';

export function loadMessages(user) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/chat'
        }).then((response) => {
            dispatch(messagesLoaded(user, response.data));
        })
    }
}

export default function messagesLoaded (user, messages) {
    return {
        type : MESSAGES_LOADED,
        state : {
            user : user,
            messages : messages
        }
    }
}

export function sendMessage(message) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/chat',
            data : {
                message : message
            }
        }).then((response) => {
            socket.emit('chat', {message : message})
        })
    }
}

export function messageReceived (message) {
    return {
        type: MESSAGE_RECEIVED,
        message
    }
}








