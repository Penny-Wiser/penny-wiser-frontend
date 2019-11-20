import Register from './Register';
import {authRoles} from 'auth';

export const RegisterConfig = {
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
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/register',
            component: Register
        }
    ]
};