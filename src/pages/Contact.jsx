import React from 'react'
import Seo from '../components/Seo'
import PageTitle from "../components/PageTitle";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import Social from '../components/Social'

const Contact = () => (
  <>
    <Seo content='Contact'/>
    <MDBContainer className='contact-page'>
    <PageTitle 
      title = 'Contact'
      subtitle = 'Get in touch'
    />
      <MDBRow className='contact-content mt-4' center>
        <MDBCol md='5' sm='10' className='my-5 contact-block'>
          <div className="contact-item">
            <MDBIcon far icon="envelope" size='3x'/>
            <div className="contact-info">
              <div className="contact-name">Gmail</div>
              <div className="contact-value">buihuunghia.10hlvc@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">
            <MDBIcon fab icon="linkedin" size='3x'/>
            <div className="contact-info">
              <div className="contact-name">LinkedIn</div>
              <div className="contact-value">https://linkedin.com/in/bhnghia</div>
            </div>
          </div>
          <div className="contact-item">
            <MDBIcon icon="mobile" size='3x'/>
            <div className="contact-info">
              <div className="contact-name">Phone</div>
              <div className="contact-value">0935590436</div>
            </div>
          </div>
          <div className="contact-item">
            <MDBIcon icon="map-marker-alt" size='3x'/>
            <div className="contact-info">
              <div className="contact-name">Location</div>
              <div className="contact-value">HCM City</div>
            </div>
          </div>


          <div className="contact-social">
            <Social/>
          </div>
        </MDBCol>
        
        <MDBCol md='7' sm='12' className='my-5 map'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.023472317976!2d106.66299887526401!3d10.753289103164466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efb7d184b87%3A0xab92c1d33fffeb7!2zUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1594814247007!5m2!1svi!2s" 
            title='map'
            style={{border: 0}} 
          ></iframe>  
        </MDBCol>

      </MDBRow>
    </MDBContainer>
  </>
)

export default Contact