import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import logo from '../../img/insurance.jpg';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div  style={{ width:"100px",height:"100px"}}>
                <button style={{ top: "50px", right: "50px", position: "absolute" }}>
                   로그인
                </button>
                <div style={{ top: "50px", right: "700px", position: "absolute" }}>
                    <h2 style={{color:"blue"}}>간편한 보험처리 사이트</h2>
                </div>
                <img src={logo} style={{ top: "10px", left: "30px",width:"100px",height:"100px", position: "absolute" }}/>
            </div>
        );
    }
}

export default LoginComponent;