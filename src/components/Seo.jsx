import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ content }) => (
  <Helmet>
    <title>{ content }</title>
    <meta name='description' description={content}/>
  </Helmet>
)

export default Seo