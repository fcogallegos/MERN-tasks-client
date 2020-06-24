

import { 
    REGISTER_SUCCESSFUL,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESSFUL,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTER_SUCCESSFUL:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }

        case REGISTER_ERROR:
            return {
                ...state,
                token: null,
                message: action.payload
            }

        default: 
            return state;
    }
}