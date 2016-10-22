/**
 * Created by pooja on 22/10/16.
 */

import axios from 'axios';
import { browserHistory } from 'react-router';
import {loadMessages} from './chat.action';
import {setCookie} from '../services/utilService'

export function login (userName) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/user',
            data : {
                userName : userName
            }
        }).then((response) => {
            setCookie('token', response.data._id);
            browserHistory.push({
                pathname: '/home'
            });
            dispatch(loadMessages(response.data.userName, response.data._id));
        })
    };
    
}

export function getUser (id) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/user',
            params : {
                id : id
            }
        }).then((response) => {
            dispatch(loadMessages(response.data.userName, response.data._id));
        })
    };

}