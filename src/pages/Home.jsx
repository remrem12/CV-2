import React from "react";
import Seo from "../components/Seo";
import { MDBContainer, MDBRow, MDBTypo, MDBCol, MDBBadge, MDBBtn } from "mdbreact";


const Home = () => (
  <>
    <Seo content="Nghia - Personal Porfolio" />
    <MDBContainer className='home-page'>
      <MDBRow center className='home-container'>
        <MDBCol lg='4' md='6' sm='6'>
          <div className="avatar"></div>
        </MDBCol>
        <MDBCol lg='6' md='6' sm='12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="intro text-center mt-4">
            <MDBTypo tag='h1' variant="h1-responsive" className='font-weight-bold cyan-text'>Nghia Bui Huu</MDBTypo>
            <MDBBadge pill>
              <MDBTypo tag='h6' variant="h6-responsive" className='mb-0'>Frontend Developer</MDBTypo>
            </MDBBadge>
            <div className="intro-text text-left my-4">
              I'm a Computer Science student and have basic knowledge about web development. <br/>
              Looking forward to working in a professional environment. <br/>
              To apply my knowledge into practical use. <br/>
              To learn and improve my technique and other skills.
            </div>
            <MDBBtn outline className='my-2' tag='a' href='/files/NghiaBuiHuu-CV.pdf' download >Download CV</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>
);

export default Home;
