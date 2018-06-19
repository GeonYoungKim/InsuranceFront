import React, { Component } from 'react';
import Header from '../components/common/js/Header';
import Form from '../components/signup/js/Form';

class FindId extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <main className="main-container">
                <Header />
                <div className="main-wrap sign-forms" style={{ marginTop: "3%" }}>
                    <section className="section-container sign-in-form">
                        <div className="sign-in-container">
                            <div className="container">
                                <Form />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default FindId;