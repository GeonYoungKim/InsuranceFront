import React, { Component } from 'react';
import axios from 'axios';
import { relative } from 'path';
import loginicon from '../../../img/icon--login.svg';
import LoginFormCss from '../css/Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone:"",
            name:"",
            id:"",
            password:"",
            birth:"",

        };

    }

    phoneCheck = (p) => {
        p = p.split('-').join('');

        var regPhone = /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/;

        return regPhone.test(p);

    }

    birthCheck = (birth) => {
        birth = birth.split('-').join('');
        var pattern = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
        return pattern.test(birth);
    }

    idCheck = (id,sign) => {
        const url='http://localhost:8080/user/'+id;
        axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                if(response.data === false){
                    alert("아이디가 존재합니다.");
                }else{
                    sign();
                }
            }
        })
        .catch((error) => {
                console.log(error);
        })
    }

    sign = () =>{
        const url='http://localhost:8080/user/create';
        axios.post(url)
        .then((response) => {
            if (response.status === 200) {
                console.log("성공");
            }
        })
        .catch((error) => {
                console.log(error);
        })
    }


    check = () => {
        if (this.phoneCheck(this.state.phone) === false) {
            alert("핸드폰 번호 형식이 맞지 않습니다.");
        }

        if (this.birthCheck(this.state.birth) === false) {
            alert("생년월일의 형식이 잘못되었습니다.");
            return;
        }

        this.idCheck(this.state.id,this.sign);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <div style={{ border: "1px solid #BDBDBD", width: "100%", height: "100%" }}>
                <div id="needs-validation" noValidate style={{ paddingTop: "30px", paddingLeft: "30px", paddingRight: "30px" }}>
                    <div className="form-group row">
                        <div class="fi--fc--header col-12">
                            <h2>회원가입</h2>
                            <hr style={{ border: "solid 1.5px black" }} />
                        </div>

                        <div className="col-12 input input-id" style={{ padding: "10px" }}>
                            <input className="form-control" type="text" name="id" placeholder="아이디" onChange={this.handleChange} required autoFocus />
                        </div>
                        <div className="col-12 input input-password" style={{ padding: "10px" }}>
                            <input className="form-control" type="password" name="password" placeholder="비밀번호" onChange={this.handleChange} required />
                        </div>
                        <div className="col-12 input input-password" style={{ padding: "10px" }}>
                            <input className="form-control" type="text" name="name" placeholder="이름" onChange={this.handleChange} required />
                        </div>
                        <div className="col-12 input input-password" style={{ padding: "10px" }}>
                            <input className="form-control" type="text" name="birth" placeholder="생년월일" onChange={this.handleChange} required />
                        </div>
                        <div className="col-12 input input-password" style={{ padding: "10px" }}>
                            <input className="form-control" type="text" name="phone" placeholder="핸드폰번호" onChange={this.handleChange} required />
                        </div>
                        <div className="col-12 button-group" style={{ padding: "10px" }}>
                            <button className="btn btn-primary btn-login" onClick={this.check}>
                                회원가입 <img className="icon" src={loginicon} alt="login" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Form;