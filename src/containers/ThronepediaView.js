import React, {Component} from "react";

import ThreeColumns from "../components/ThreeColumns";
import ThronepediaNav from "../components/ThronepediaNav"

import ThronepediaHeader from "../components/ThronepediaHeader"
export default class ThronepediaView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(

      <div className={className}>
        <ThronepediaHeader/>
        <ThronepediaNav/>
        <ThreeColumns/>
      </div>
    );
  }
}
