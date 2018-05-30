import React, { Component } from 'react';
import Header from '../components/common/js/Header';
import LoginForm from '../components/login/js/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <main>
                <div className="main-wrap">
                    <Header />
                    <section className="section-container" style={{ paddingTop: '10px', margin: 'auto' }}>
                        <div style={{ margin: 'auto' }}>
                            <div className="form-group row sc--table-row">
                                <div className="col-9 sc--table-col">
                                    <div className="row">
                                        <div className="col-12" style={{marginLeft:"80%",marginTop: '20%',textAlign: 'center',verticalAlign: 'center'}}>
                                            <LoginForm/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default Login;