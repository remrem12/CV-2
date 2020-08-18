import React from 'react'
import Seo from '../components/Seo'
import PageTitle from "../components/PageTitle";
import { MDBContainer } from 'mdbreact';


const emote = [
  '( · _ · )',
  '\\(o_o)/',
  '(≥o≤)',
  "( ; - ; )"
]

const randomEmote = (emote) => emote[Math.floor(Math.random() * emote.length)]

const Error = () => (
  <>
    <Seo content='Error'/>

    <MDBContainer className='error-page'>
      <PageTitle
        title = 'Error'
        subtitle = 'Page not found'
      />
      <div className="error">
        { randomEmote(emote) }
      </div>
    </MDBContainer>
  </>
)

export default Error