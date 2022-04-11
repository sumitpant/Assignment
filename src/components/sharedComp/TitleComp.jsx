import React from 'react'
import Cover from '../Cover'
import RegForm from './RegForm'


const TitleComp = ({title ,subtitle ,active ,change}) => {
  const stylesub ={
    color:'grey',
    fontWeight:400,
    marginLeft:'50px'
  }
  const styletitle ={
    margin:0
  }
  const header ={
      marginBottom:20
  } 
  const titleComp={
    width:'35%'
  }
  
  return (
    <div style={titleComp}>
        <div style={header}>
        <h2 style ={styletitle}>{title}</h2>
        <small style={stylesub}>{subtitle}</small>
        </div>
        <div>
          {
            active ===-1?<RegForm label1={"Full Name"} label2={"Display Name"} change ={change}  active={active}/>:null
          }
          {
          active===0? <RegForm label1={"WorkSpace Name"} label2={"WorkSpaceUrl"} change ={change} active={active}/> :null
          }
          {
          active ===1 ? <Cover change ={change}/>:null
          }
            
        </div>
    </div>
  )
}

export default TitleComp