import React, { Component } from 'react';
import loginicon from '../../../img/icon--login.svg';
import LoginFormCss from '../css/Form.css';
import { relative } from 'path';


class Form extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{border:"1px solid #BDBDBD",width:"100%",height:"100%"}}>
                <form onSubmit={this.handleSubmit} id="needs-validation" noValidate style={{paddingTop:"30px",paddingLeft:"30px",paddingRight:"30px"}}>
                    <div className="form-group row">
                        <div class="fi--fc--header col-12">
                            <h2>로그인</h2>
                            <hr style={{border:"solid 1.5px black"}}/>
                        </div>
                        
                        <div className="col-12 input input-id" style={{padding:"10px"}}>
                            <input className="form-control" type="text" name="user" placeholder="회원 아이디" required autoFocus />
                        </div>
                        <div className="col-12 input input-password" style={{padding:"10px"}}>
                            <input className="form-control" type="password" name="password" placeholder="회원 비밀번호" required />
                        </div>
                        <div className="col-12 button-group" style={{padding:"10px"}}>
                            <button type="submit" className="btn btn-primary btn-login">
                                로그인하기 <img className="icon" src={loginicon} alt="login" /> 
                            </button>
                        </div>
                    </div>
                    
                </form>
                <div className="form-inline" style={{textAlign:"center"}}>
                    <div style={{width:"33.3%",height:"40px",border:"1px solid #BDBDBD"}}><button className="btn btn-primary btn-login" style={{width:"100%",height:"100%"}} >아이디 찾기</button></div>
                    <div style={{width:"33.3%",height:"40px",border:"1px solid #BDBDBD"}}><button className="btn btn-primary btn-login" style={{width:"100%",height:"100%"}} >비밀번호 찾기</button></div>
                    <div style={{width:"33.3%",height:"40px",border:"1px solid #BDBDBD"}}><button className="btn btn-primary btn-login" style={{width:"100%",height:"100%"}} onClick="" >회원가입</button></div>
                </div>
            </div>
        );
    }
}

export default Form;