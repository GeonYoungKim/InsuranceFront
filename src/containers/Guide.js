import React, { Component } from 'react';
import SelectInsuranceKind from '../components/guide/SelectInsuranceKind';
import axios from 'axios';
import SelectInsuranceCompany from '../components/guide/SelectInsuranceCompany';

class GuideContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kindListData:[],
            companyListData:[],
        }
    }

    componentDidMount = () => {
        const url='http://localhost:8080/guide/kind';
        axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                
                this.setState({
                    kindListData:response.data
                })
            }
        })
        .catch((error) => {
                console.log(error);
        })


    }

    selectCompany = (value) => {
        const url='http://localhost:8080/guide/company/'+value;
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        kindListData:JSON.parse(response.data)
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        
        let companyScreen=(this.state.companyListData.length==0)?null:<SelectInsuranceCompany/>;
        
        return (
            <div>
                <SelectInsuranceKind selectCompany={this.selectCompany} test="1" kindData={this.state.kindListData}/>
                {companyScreen}
            </div>
        );
    }
}

export default GuideContainer;
