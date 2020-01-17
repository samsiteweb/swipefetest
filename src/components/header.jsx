import React from 'react'
import ShadedBoxes from './shadedBox'

const headerStyle = {
display: 'flex',
flexDirection: 'row',
height: '85.91px',
alignItems: 'center',
justifyContent: 'space-between',
background: '#000000',
padding: '0 20px 0 20px',
}
 const logoBox = {
    width: '122.24px',
    height: '45.45px',
    background: '#464646',
    flexShrink: 0,
 }

 const menuBox = {
  width: '710.41px',
  height: '45.45px',
  background: '#464646',
  flexShrink: 8
}

const spaceBox = {
  flexShrink: 0,
  width: '50%'
  
}
const HeaderComponent = () => {
  return (
    <div style={headerStyle} >
      <ShadedBoxes boxStyles = {logoBox} />
      <div style={spaceBox}></div>
      <ShadedBoxes boxStyles = {menuBox} />
    </div>
  )  
}

export default HeaderComponent;