import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, Card, CardContent, Typography, InputAdornment, Icon} from '@material-ui/core';
import classNames from 'classnames';
import {FuseAnimate, TextFieldFormsy} from '@fuse';
import Formsy from 'formsy-react';
import * as Actions from 'auth/store/actions';

const styles = theme => ({
    root : {
        background    : "url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",
        backgroundSize: 'cover'
    },
    intro: {
        color: '#ffffff'
    },
    card : {
        width   : '100%',
        maxWidth: 400
    }
});

class Register extends Component {
    state = {
        canSubmit: false
    }

    enableButton = () => {
        this.setState({canSubmit: true});
    }

    disableButton = () => {
        this.setState({canSubmit: false});
    }

    onSubmit = (model) => {
        this.props.submitRegister(model);
    }

    render() {
        const {classes} = this.props;
        const {canSubmit} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0")}>
                <div
                    className={classNames(classes.intro, "flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")}>

                    <FuseAnimate animation="transition.expandIn">
                        <img className="w-128 mb-32" src="assets/images/logos/fuse.svg" alt="logo"/>
                    </FuseAnimate>

                    <FuseAnimate animation="transition.slideUpIn" delay={300}>
                        <Typography variant="h3" color="inherit" className="font-light">
                            Welcome to the Penny Wiser!
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate delay={400}>
                        <Typography variant="subtitle1" color="inherit" className="max-w-512 mt-16">
                            Platform that helps to split and track bills amongst parties
                        </Typography>
                    </FuseAnimate>
                </div>
                <FuseAnimate animation={{translateX: [0, '100%']}}>
                    <Card className={classNames(classes.card, "mx-auto m-16 md:m-0")}>
                        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
                            <Typography variant="h6" className="text-center md:w-full mb-20">CREATE AN ACCOUNT</Typography>
                            <Formsy
                                className="flex flex-col justify-center w-full"
                                onValid={this.enableButton}
                                onInvalid={this.disableButton}
                                onValidSubmit={this.onSubmit}
                            >
                                <TextFieldFormsy
                                    className="mb-16"
                                    type="text"
                                    name="firstName"
                                    label="First Name"
                                    validations={{
                                        minLength: 3
                                    }}
                                    validationErrors={{
                                        minLength: "Min character length is 3"
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" colour="action">person</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    autoComplete="off"
                                    className="mb-16"
                                    type="text"
                                    name="lastName"
                                    label="Last Name"
                                    validations={{
                                        minLength: 3
                                    }}
                                    validationErrors={{
                                        minLength: "Min character length is 3"
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" colour="action">person</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    className="mb-16"
                                    type="email"
                                    name="email"
                                    label="Email"
                                    validations="isEmail"
                                    validationErrors={{
                                        isEmail: "Please enter a valid email"
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" colour="action">email</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="password"
                                    label="Password"
                                    validations={{
                                        minLength: 6
                                    }}
                                    validationErrors={{
                                        minLength: "Min character length is 6"
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" colour="action">vpn_key</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <TextFieldFormsy
                                    className="mb-16"
                                    type="password"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    validations={{
                                        equalsField: "password"
                                    }}
                                    validationErrors={{
                                        equalsField: "Passwords do not match"
                                    }}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><Icon className="text-20" colour="action">vpn_key</Icon></InputAdornment>
                                    }}
                                    variant="outlined"
                                    required
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="w-full mx-auto mt-16 normal-case"
                                    aria-label="LOG IN"
                                    disabled={!canSubmit}
                                    value="legacy"
                                >
                                    Register
                                </Button>
                            </Formsy>
                            <div className="flex flex-col items-center justify-center pt-32">
                                <span className="font-medium">Already have an account?</span>
                                <Link className="font-medium" to="/login">Login</Link>
                            </div>
                        </CardContent>
                    </Card>
                </FuseAnimate>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitRegister: Actions.submitRegister
    }, dispatch);
}

function mapStateToProps({auth}) {
    return {
        register: auth.register,
        user: auth.user
    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Register)));