/**
 * Created by pooja on 22/10/16.
 */

import axios from 'axios';
import {browserHistory} from 'react-router';
import {loadMessages} from './chat.action';
import {setCookie} from '../services/utilService';
import {USER_EXISTS} from '../constants';

/**
 * Create a user
 * @param userName
 * @returns {function()}
 */

export function signUp(userName) {
    return (dispatch) => {
        if (!userName)
            dispatch(user("Please enter username"));
        else {
            axios({
                method: 'post',
                url: '/api/user',
                data: {
                    userName: userName
                }
            }).then((response) => {
                if (response.data._id) {
                    dispatch(user(""));
                    dispatchAction(response)
                }
            }).catch((err) => {
                dispatch(user("User already exist"));
            });
        };
    }
}

/**
 * User login
 * @param userName
 * @returns {function()}
 */

export function login(userName) {
    return (dispatch) => {
        if (!userName)
            dispatch(user("Please enter username"));
        else {
            axios({
                method: 'get',
                url: '/api/user',
                params: {
                    userName: userName
                }
            }).then((response) => {
                if (response.data._id) {
                    dispatch(user(""));
                    dispatchAction(response)
                }
                else
                    dispatch(user("User doesn't exist"));
            }).catch((err) => {
                dispatch(user("User doesn't exist"));
            });
        }
    };
}

/**
 * get current user
 * @param id
 * @returns {function()}
 */

export function getUser(id) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/user',
            params: {
                _id: id
            }
        }).then((response) => {
            if (response) {
                dispatch(user(""));
                dispatch(loadMessages(response.data.userName, response.data._id));
            }
            else
                dispatch(user("Please try again later"));
        }).catch((err) => {
            dispatch(user("Please try again later"));
        });
    };

}

/**
 * return message on basis of existence of user
 * @param message
 * @returns {{type, message: *}}
 */

export function user(message) {
    return {
        type: USER_EXISTS,
        message
    }
}

/**
 * Set cookies, redirect to home & load all messages
 * @param response
 */

function dispatchAction(response) {
    setCookie('token', response.data._id);
    browserHistory.push({
        pathname: '/home'
    });
    dispatch(loadMessages(response.data.userName, response.data._id));
}