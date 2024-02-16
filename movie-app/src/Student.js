import React, { Component } from 'react'

export class Student extends Component {
  render() {
    const {stuname, marks}=this.props;
    return (
     <>
     <h1>hello {stuname}</h1>
     <p>You have secured {marks} %</p>
     <hr/>
     </>
    )
  }
}

export default Student