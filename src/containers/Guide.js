import React, { Component } from 'react';
import SelectInsurance from '../components/common/SelectInsurance';





class GuideContainer extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount = ()=>{
        
    }
    search = (value)=>{
        console.log(value);
    }
    render() {
        return (
            <div>
                <SelectInsurance search={this.search}/>
            </div>
        );
    }
}

export default GuideContainer;
