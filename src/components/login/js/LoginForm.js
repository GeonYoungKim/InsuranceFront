import React, { Component } from 'react';
import {Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

import LoginFormCss from '../css/LoginForm.css';


class LoginForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Card className="login"style={{width:"700px"}}>
                <CardHeader><font style={{}}>로그인</font></CardHeader>
                <CardBody></CardBody>
                <CardFooter></CardFooter>
            </Card>
        );
    }
}

export default LoginForm;