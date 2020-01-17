import React from 'react'
import ShadedBoxes from './shadedBox'

const footerStyle = {
display: 'flex',
flexDirection: 'row',
height: '318.53px',
alignItems: 'center',
justifyContent: 'space-between',
background: '#000000',
padding: '0 20px 0 20px',

}
 const firstBox = {
    width: '50%',
    height: '231.11px',
    background: '#464646',
 }

 const secondBox = {
    width: '24%',
  height: '231.11px',
background: '#464646',
}

const thirdBox = {
   width: '24%',
    height: '231.11px',
  background: '#464646',
  }
const FooterComponent = () => {
  return (
    <div style={footerStyle} >
      <ShadedBoxes boxStyles = {firstBox} />
      <ShadedBoxes boxStyles = {secondBox} />
      <ShadedBoxes boxStyles = {thirdBox} />
    </div>
  )  
}

export default FooterComponent;