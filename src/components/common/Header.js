import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import logo from '../../img/logo.jpg';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="form-inline" style={{ marginTop: "10px", width: "100%" ,height:"60px"}}>
                <div style={{ width: "33%",paddingTop:"40px" }}>
                    <img className="nc--bl--image" src={logo} alt="brand logo" style={{ marginLeft:"10px",width: "120px", height: "80px" }} />
                </div>
                <div style={{ width: "33%",textAlign:"center",marginTop:"20px" }}>
                    <h1 style={{color:"blue"}}>간편한 보험처리 사이트</h1>
                </div>
                <div style={{ width: "33%",textAlign:"right",marginRight:"10px",marginTop:"20px" }}>
                    <button style={{backgroundColor:"blue",color:"white"}}>
                        로그인
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;