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
                console.log(response);
                this.setState({
                    ...this.state,
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
                    console.log(response);
                    this.setState({
                        ...this.state,
                        companyListData:response.data
                    })                   
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    selectGuide=(kindCompanyId)=>{
        const url='http://localhost:8080/guide/select/'+kindCompanyId;
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        
        let companyScreen=(this.state.companyListData.length==0)?null:<SelectInsuranceCompany selectGuide={this.selectGuide} companyData={this.state.companyListData}/>;
        
        return (
            <div style={{margin:'auto'}}>
                <SelectInsuranceKind selectCompany={this.selectCompany} test="1" kindData={this.state.kindListData}/>
                {companyScreen}
            </div>
        );
    }
}

export default GuideContainer;
