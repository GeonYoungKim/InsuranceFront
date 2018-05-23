import React, { Component } from 'react';
import SelectInsurance from '../components/common/SelectInsurance';
import axios from 'axios';

class GuideContainer extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount = () => {
        const url = 'http://localhost:8080';

        axios.post(url)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    search = (value) => {
        console.log(value);
    }
    render() {
        return (
            <div>
                <SelectInsurance search={this.search} />
            </div>
        );
    }
}

export default GuideContainer;
