import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Card, CardBody, CardHeader, CardFooter } from "react-simple-card";
import axios from 'axios';
import { stringify } from 'querystring';
import GuideCardCss from './GuideCard.css';
import previewImage from '../../img/preview.jpg';
import downloadImage from '../../img/download.jpg';


class GuideCard extends Component {
    constructor(props) {
        super(props);
    }

    download = (kindCompanyId, guideNo, guideFileNo,jsonTitle) => {
        console.log(jsonTitle);
        axios({
            url: 'http://localhost:8080/file/download',
            params:{
                guide_id:kindCompanyId,
                guide_no:guideNo,
                no:guideFileNo
            },
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            
              console.log(response.headers);
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download',jsonTitle);
            document.body.appendChild(link);
            link.click();
          });
        
    }


render() {
    let screen = null;

    if (this.props.guideData != null) {
        screen =
            <section className="col-12 guide-section" style={{ height: window.innerHeight}}>
                {this.props.guideData.map((json) =>
                <div className="guide-card">
                    <Card >
                        <CardHeader><b style={{ margin: 'auto' }}>{json.guideNo}. {json.guideTitle}</b></CardHeader>
                        {json.guideContents.map((contentJson) => (contentJson.no != 0) ? <CardBody><font className="guide-font">{contentJson.no}. {contentJson.content}</font><br /></CardBody> : null)}
                        {json.guideFiles.map((fileJson) => (fileJson.no != 0) ? <CardFooter><font className="guide-font"> - {fileJson.title}</font><img className="guide-img" src={previewImage} /><img className="guide-img" onClick={() => this.download(json.kind_company_id, json.guideNo, fileJson.no,fileJson.title)} src={downloadImage} /><br /></CardFooter> : null)}
                    </Card>
                </div>
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