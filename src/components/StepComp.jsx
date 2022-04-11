import React,{useState} from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ConnectStep from './ConnectStep';
import './StepComp.css'

const StepComp = ({steps,active}) => {
  
  return (
    <div className="steps__div">
    <Stepper activeStep={active}  connector={<ConnectStep step={steps}/>}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      </div>
  )
}

export default StepComp