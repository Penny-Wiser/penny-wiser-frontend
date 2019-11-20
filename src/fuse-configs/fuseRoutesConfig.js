import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse/index';
import {LoginConfig} from 'main/content/login/LoginConfig';
import {RegisterConfig} from 'main/content/register/RegisterConfig';

const routeConfigs = [
    LoginConfig,
    RegisterConfig
];

export const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/login"/>
    }
];
