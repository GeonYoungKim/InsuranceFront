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
            idFlag: false,
            id: "",
        };

    }

    handleSubmit = () => {
        let url = "http://localhost:8080/email/send";
        if (this.state.name != undefined && this.state.email != undefined) {
            let validationInput = document.getElementById("validation");
            validationInput.disabled = false;
            axios.post(url, {
                name: this.state.name,
                email: this.state.email
            })
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    mailInvalidate = () => {
        let url = "http://localhost:8080/email/check";
        if (this.state.validation != undefined && this.state.email != undefined) {
            axios.post(url, {
                email: this.state.email,
                validation: this.state.validation
            })
                .then((response) => {
                    if (response.status === 200) {
                        if (response.data === false) {
                            alert("인증번호가 일치하지 않습니다. 재발송하시기 바랍니다.");
                        } else {
                            this.setState({
                                ...this.state, idFlag: true,
                                id: response.data
                            })
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }


    render() {
        let screen = null;
        if (this.state.idFlag === false) {
            screen =
                <div style={{ border: "1px solid #BDBDBD", width: "100%", height: "100%" }}>
                    <div id="needs-validation" noValidate style={{ paddingTop: "30px", paddingLeft: "30px", paddingRight: "30px" }}>
                        <div className="form-group row">
                            <div class="fi--fc--header col-12">
                                <h2>아이디 찾기</h2>
                                <hr style={{ border: "solid 1.5px black" }} />
                            </div>

                            <div className="col-12 input input-id">
                                <input className="form-control" onChange={this.handleChange} type="text" name="name" placeholder="이름" required autoFocus />
                            </div>
                            <div className="col-12 form-inline">
                                <div className="input" >
                                    <input className="form-control" onChange={this.handleChange} type="text" name="email" placeholder="이메일" required style={{ width: "96%" }} />
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <button name="search" onClick={this.handleSubmit} className="btn btn-secondary" style={{ width: "60px" }} >발송</button>
                                </div>
                            </div>
                            <div className="col-12 input">
                                <input className="form-control" onChange={this.handleChange} type="text" name="validation" id="validation" placeholder="확인 번호" required disabled />
                            </div>
                            <div className="col-12 button-group" style={{ padding: "10px" }}>
                                <button className="btn btn-primary btn-login" onClick={this.mailInvalidate}>
                                    확인 <img className="icon" src={loginicon} alt="login" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
        } else {
            screen = <div style={{ border: "1px solid #BDBDBD", width: "100%", height: "100%" }}>
                
                <div id="needs-validation" noValidate style={{ paddingTop: "5%", paddingLeft: "5%", paddingRight: "5%" }}>
                    <div className="form-group row">
                        <div class="fi--fc--header col-15" style={{margin:"auto"}}>
                            <h3 style={{ textAlign: "center",margin:"auto" }}>귀하의 아이디 = {this.state.id}입니다.</h3>
                            <hr style={{ border: "solid 1.5px black" }} />
                        </div>
                        <div className="col-12 form-inline" style={{margin:"auto"}}>
                            <div style={{width:"50%"}}>
                                <button className="btn btn-secondary btn-search" style={{width:"150px"}}><Link to="/"><div>로그인 하기</div> </Link></button>
                            </div>
                            <div style={{width:"50%"}}>
                                <button className="btn btn-secondary btn-search"  style={{width:"150px"}}><Link to="/findPassword"><div>비밀번호 찾기</div> </Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        return (
            <div>
                {screen}
            </div>
        );
    }
}

export default Form;