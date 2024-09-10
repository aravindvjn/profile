import React from 'react'
import Profile from './Profile'
import Body from './Body'

const Main = (props) => {
  return (
    <div className='row main'>
      <Profile/>
      <Body renderPage={props.renderPage}/>
    </div>
  )
}

export default Main
