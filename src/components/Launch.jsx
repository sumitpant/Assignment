import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useSelector} from 'react-redux'
import ButttonComp from './sharedComp/ButttonComp';
import './Launch.css'

const Launch = ({change}) => {
  const username = useSelector(state=>state.username)
  
  return (
    <div className="launchdiv">
        <div className="checkicon">
            <CheckCircleIcon fontSize="large"/>
        </div>
        <div className="check_div">
            <h2>Congratulations, {username}!</h2>
            <small> You have completed onboarding , you can start using Eden.</small>
        </div>
        <ButttonComp change={change}/>
    </div>
  )
}

export default Launch