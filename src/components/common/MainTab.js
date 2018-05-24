import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import GuideContainer from '../../containers/Guide';

class TabComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TabProvider defaultTab="one">
                    <TabList style={{marginTop:"50px"}}>
                        <Tab style={{ width: "33%",height:"50px", backgroundColor: "#07f5e6" }} tabFor="one">보험 가이드</Tab>
                        <Tab style={{ width: "33%", height:"50px", backgroundColor: "#D8D8D8" }} tabFor="two">보험 처리</Tab>
                        <Tab style={{ width: "33%",height:"50px", backgroundColor: "#D8D8D8" }} tabFor="three">질문 게시판</Tab>
                    </TabList>
                    <br />
                    <div className="wrapper" >
                    <TabPanel tabId="one">
                            <GuideContainer/>
                    </TabPanel>
                    <TabPanel tabId="two">
                            보험 양식
                    </TabPanel>
                    <TabPanel tabId="three">
                            보험 처리
                    </TabPanel>
                    </div>
            </TabProvider>

        );
    }
}

export default TabComponent;