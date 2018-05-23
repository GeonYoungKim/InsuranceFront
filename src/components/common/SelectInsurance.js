import React, { Component } from 'react';



class SelectInsurance extends Component {
    constructor(props) {
        super(props);

        this.state={
            hover: false,
        }
    }

    handleClick = (value)=>{
        
        this.props.search(value);
    }
    hoverOn=()=>{
        this.setState({ hover: true });
    }
    hoverOff=()=>{ 
        this.setState({ hover: false });    
    }
    render() {
        return (
            <div className="form-group row sc--table-row">
                <div className="col-9 sc--table-col">
                    <div className="row">
                        <div className="col-12 form-inline" style={{ marginBottom: "10px" }}>
                            <div style={{ width: "33%", textAlign: "right"}}>
                                <span className="mark--required" >*</span> <font style={{cursor:"pointer"}} onClick={()=>this.handleClick("car")}>자동차 보험</font>
                            </div>
                            <div style={{ width: "33%", textAlign: "right"}}>
                                <span className="mark--required">*</span> <font style={{cursor:"pointer"}} onClick={()=>this.handleClick("accident")} >상해보험</font>
                            </div>
                            <div style={{ width: "33%", textAlign: "right"}} >
                                <span className="mark--required">*</span> <font style={{cursor:"pointer"}} onClick={()=>this.handleClick("silver")} >실버보험</font>
                            </div>
                        </div>
                        <div className="col-12 form-inline" style={{ marginBottom: "10px" }}>
                            <div style={{ width: "33%", textAlign: "right"}} >
                                <span className="mark--required">*</span> <font style={{cursor:"pointer"}} onClick={()=>this.handleClick("pension")} >연금보험</font>
                            </div>
                            <div style={{ width: "33%", textAlign: "right"}} >
                                <span className="mark--required">*</span> <font style={{cursor:"pointer"}} onClick={()=>this.handleClick("lifetime")}>종신보험</font>
                            </div>
                            <div style={{ width: "33%", textAlign: "right"}} >
                                <span className="mark--required">*</span> <font style={{cursor:"pointer"}} onClick={()=>this.handleClick("travle")}>여행자보험</font>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectInsurance;
