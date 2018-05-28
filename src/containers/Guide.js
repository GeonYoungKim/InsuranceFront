import React, { Component } from 'react';
import SelectInsuranceKind from '../components/guide/SelectInsuranceKind';
import axios from 'axios';
import SelectInsuranceCompany from '../components/guide/SelectInsuranceCompany';
import GuideCard from '../components/guide/GuideCard';

class GuideContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kindListData:[],
            companyListData:[],
            guideListData:[],
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
                    
                    this.setState({
                        ...this.state,
                        guideListData:response.data
                    }) 
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        console.log(this.state.guideListData);
        let companyScreen=(this.state.companyListData.length==0)?null:<SelectInsuranceCompany selectGuide={this.selectGuide} companyData={this.state.companyListData}/>;
        let guideScreen=(this.state.guideListData.length==0)?null:<GuideCard guideData={this.state.guideListData}/>;
        return (
            <div style={{margin:'auto'}}>
                <SelectInsuranceKind selectCompany={this.selectCompany} test="1" kindData={this.state.kindListData}/>
                {companyScreen}
                {guideScreen}
            </div>
        );
    }
}

export default GuideContainer;
