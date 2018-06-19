import React, { Component } from 'react';
import axios from 'axios';
import { relative } from 'path';
import {
    Redirect,
    Link,
    withRouter
} from 'react-router-dom';
import loginicon from '../../../img/icon--login.svg';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };

    }

    
    render() {
       
        return (
            <div style={{ border: "1px solid #BDBDBD", width: "100%", height: "100%" }}>
                <form onSubmit={this.handleSubmit} id="needs-validation" noValidate style={{ paddingTop: "30px", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="form-group row">
                        <div class="fi--fc--header col-12">
                            <h2>아이디 찾기</h2>
                            <hr style={{ border: "solid 1.5px black" }} />
                        </div>

                        <div className="col-12 input input-id" style={{ padding: "10px" }}>
                            <input className="form-control" type="text" name="name" placeholder="이름" required autoFocus />
                        </div>

                        <div className="form-inline">
                            <div className="col-12 input input-password" style={{ padding: "10px" }}>
                                <input className="form-control" type="password" name="phone" placeholder="인증번호" required />
                            </div>
                            
                        </div>
                        <div className="col-12 input" style={{ padding: "10px" }}>
                            <input className="form-control" type="text" name="phone" placeholder="확인 번호" required />
                        </div>
                        <div className="col-12 button-group" style={{ padding: "10px" }}>
                            <button type="submit" className="btn btn-primary btn-login">
                                아이디 찾기 <img className="icon" src={loginicon} alt="login" />
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

export default Form;