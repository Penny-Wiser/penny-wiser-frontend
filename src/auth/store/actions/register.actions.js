import * as UserActions from 'auth/store/actions';
import jwtService from 'jwtService';

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export function submitRegister({firstName, lastName, password, email})
{
    return (dispatch) =>
        jwtService.createUser({
            firstName,
            lastName,
            password,
            email
        })
            .then((user) => {
                    dispatch(UserActions.setUserData(user));
                    return dispatch({
                        type: REGISTER_SUCCESS
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : REGISTER_ERROR,
                    payload: error
                });
            });
}