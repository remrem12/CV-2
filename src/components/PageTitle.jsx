import React from 'react'
// import { MDBJumbotron, MDBContainer } from "mdbreact";

const PageTitle = ({ title, subtitle }) => (
  <div className="page-title">
    <h1 className='cyan-text'>{subtitle}</h1>
    <span>{title}</span>
  </div>
)

export default PageTitle