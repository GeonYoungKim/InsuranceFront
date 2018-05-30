import React, { Component } from 'react';
import {Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

import LoginFormCss from '../css/LoginForm.css';


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Card style={{width:"700px"}}>
                <CardHeader>로그인</CardHeader>
                <CardBody></CardBody>
                <CardFooter></CardFooter>
            </Card>
        );
    }
}

export default LoginForm;