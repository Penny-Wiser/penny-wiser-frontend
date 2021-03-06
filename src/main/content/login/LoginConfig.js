import Login from './Login';
import {authRoles} from 'auth';

export const LoginConfig = {
    settings: {
        layout: {
            config: {
                toolbar       : {
                    display: false
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    auth    : authRoles.onlyGuest,
    routes: [
        {
            path: '/login',
            component: Login
        }
    ]
};