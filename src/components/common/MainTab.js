import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import GuideContainer from '../../containers/Guide';

class TabComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                <Link to="/dashboard/guide" >
                    <button style={{ float: 'left', width: '33%', height: '50px' }}>
                        보험 가이드
                    </button>
                </Link>
                <Link to="/dashboard/process" >
                    <button style={{ float: 'left', width: '33%', height: '50px' }}>
                        보험 처리
                    </button>
                </Link>
                <Link to="/dashboard/question" >
                    <button style={{ float: 'left', width: '33%', height: '50px' }}>
                        질문 게시판
                    </button>
                </Link>
            </div>
        );
    }
}

export default TabComponent;