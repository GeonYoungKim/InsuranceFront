import React, { Component } from 'react';
import MainTab from '../components/common/js/MainTab';
import Header from '../components/common/js/Header';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: true,
            hasError: false
        };
    }

    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    }

    render() {
        const data = this.state.listDataFromChild;
        const jobName = (this.props.match.params.job === undefined) ? "main" : this.props.match.params.job;
        const view = (this.props.match.params.view === undefined) ? "" : this.props.match.params.view;
        const id = (this.props.match.params.id === undefined) ? "" : this.props.match.params.id;


        let screen = null;
        

        return (
            <main>
                <div className="main-wrap">
                    <Header />
                    <MainTab />
                    <section className="section-container" style={{paddingTop:'10px',margin:'auto'}}>
                        {screen}
                    </section>
                </div>
            </main>
        );
    }
}


export default Dashboard;