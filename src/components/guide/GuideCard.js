import React, { Component } from 'react';
import { TabProvider, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Card, CardBody, CardHeader, CardFooter } from "react-simple-card";
import axios from 'axios';
import previewImage from '../../img/preview.jpg';
import downloadImage from '../../img/download.jpg';
import { stringify } from 'querystring';

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
            <section className="col-12" style={{ paddingTop: '0px', height: window.innerHeight, width: '100%', border: '1px solid black', marginLeft: '140px' }}>
                {this.props.guideData.map((json) =>
                    <Card style={{ float: 'left', width: '33.3%', height: '33%', border: '1px solid black', marginTop: '2px' }}>
                        <CardHeader><b style={{ margin: 'auto' }}>{json.guideNo}. {json.guideTitle}</b></CardHeader>
                        {json.guideContents.map((contentJson) => (contentJson.no != 0) ? <CardBody><font style={{ textAlign: 'left' }}>{contentJson.no}. {contentJson.content}</font><br /></CardBody> : null)}
                        {json.guideFiles.map((fileJson) => (fileJson.no != 0) ? <CardFooter><font style={{ textAlign: 'left' }}> - {fileJson.title}</font><img style={{ marginLeft: '15px' }} src={previewImage} /><img style={{ marginLeft: '15px' }} onClick={() => this.download(json.kind_company_id, json.guideNo, fileJson.no,fileJson.title)} src={downloadImage} /><br /></CardFooter> : null)}
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