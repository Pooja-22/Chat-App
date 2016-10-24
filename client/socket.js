/**
 * Created by pooja on 21/10/16.
 */

export const socket = io.connect('http://localhost:3000');
import * as chatAction from './actions/action.js';

export function register(dispatch) {
    socket.on('typing', user => {
            dispatch(chatAction.typing(user));
        }
    );
    socket.on('stop typing', user => {
            dispatch(chatAction.stopTyping(user));
        }
    );
    socket.on('chat', (data) => {
        dispatch(chatAction.messageReceived(data));
    });
}