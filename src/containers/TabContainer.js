import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';


class TabContainer extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TabProvider defaultTab="one">

                <TabList>
                    <Tab tabFor="one">보험 가이드</Tab>
                    <Tab tabFor="two">보험 양식</Tab>
                    <Tab tabFor="three">보험 처리</Tab>
                </TabList>
                <TabPanel tabId="one">
                    보험 가이드
                        </TabPanel>
                <TabPanel tabId="two">
                    보험 양식
                        </TabPanel>
                <TabPanel tabId="three">
                    보험 처리
                        </TabPanel>
            </TabProvider>

        );
    }
}

export default TabContainer;