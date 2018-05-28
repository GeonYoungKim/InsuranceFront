import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Card, CardBody, CardHeader,CardFooter } from "react-simple-card";
import previewImage from '../../img/preview.jpg';
import downloadImage from '../../img/download.jpg';

class GuideCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let screen = null;

        if (this.props.guideData != null) {
            screen =
                <section className="col-12" style={{ paddingTop: '0px', height: window.innerHeight, width: '100%', border: '1px solid black', marginLeft: '140px' }}>
                    {this.props.guideData.map((json) => 
                        <Card style={{float: 'left',width:'33.3%',height:'33%'}}>
                            <CardHeader><b style={{margin:'auto'}}>{json.guideNo}. {json.guideTitle}</b></CardHeader>
                             {json.guideContents.map((json)=>(json.no!=0)?<CardBody><font style={{textAlign:'left'}}>{json.no}. {json.content}</font><br/></CardBody>:null)}
                             {json.guideFiles.map((json)=>(json.no!=0)?<CardFooter><font style={{textAlign:'left'}}> - {json.title}</font><img style={{marginLeft:'15px'}} src={previewImage}/><img style={{marginLeft:'15px'}} src={downloadImage}/><br/></CardFooter>:null)}
                        </Card>
                    )}
                </section>
        }

        return (
            <div className="form-group row sc--table-row">
                <div className="col-9 sc--table-col">
                    <div className="row">
                        {screen}
                    </div>
                </div>
            </div>
        );
    }
}

export default GuideCard;