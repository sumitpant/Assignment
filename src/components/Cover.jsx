import React from 'react'
import ButttonComp from './sharedComp/ButttonComp'
import CardCom from './sharedComp/CardCom'
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
const Cover = ({change}) => {
  const cardStyle={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:'10px',
    flexWrap: 'wrap',
  }
  return (
    <div>
      <div style={cardStyle}>
      <CardCom icon ={<PersonIcon/>} title ={"For myself"} subtitle={"Write better. Thinnk more clearly .Stay organized."}/>
        <CardCom  icon ={<GroupIcon/>} title ={"With my team"} subtitle= {"Wikis , docs, tasks & projects ,all in one place. "}/>
      </div>
 
        <ButttonComp change ={change}/>
    </div>
  )
}

export default Cover