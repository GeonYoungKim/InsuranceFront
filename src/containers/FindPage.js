import React, { Component } from 'react';



class FindPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main-container">
                
                <div className="main-wrap sign-forms" style={{ marginTop: "3%" }}>
                    <section className="section-container sign-in-form">
                        <div className="sign-in-container">
                            <div className="container">
                                귀하의 아이디 : {this.props.id}입니다.
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

export default FindPage;