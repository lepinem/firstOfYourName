// TriviaBut.js

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import "./tb_styles.css"

export default class TriviaBut extends Component {
  constructor(){
    super()
    this.state={
      showBox: false
    }
  }

  _handleToggle = (event) => {
    this.setState({
      showBox: !this.state.showBox
    })
  }

  render(){
    return(
      <div className="triviaButton">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>


<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
  }
}
