import React from 'react'
import { MDBIcon, MDBBtn, MDBTooltip } from 'mdbreact'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return(
    <MDBTooltip placement='left'>
      <MDBBtn outline color='transparent'
        onClick = {toggleTheme}
        style = {{
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          padding: '.5rem',
          margin: 'auto',
          color: '#2bbbad'
        }}
      >
        <MDBIcon icon={ isLight ? 'sun' : 'moon' } size='2x'/>
      </MDBBtn>
      <div>{ `Enable ${theme === 'light' ? 'dark' : 'light'} theme` }</div>
    </MDBTooltip>
  )
}

export default Toggle



