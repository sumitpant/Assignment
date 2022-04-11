import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/action';
import Button from "@mui/material/Button";
const ButttonComp = ({change ,name}) => {
  const dispatch = useDispatch();
    const stepForward = () => {
      if(name){
        dispatch(addUser(name));
      }
      
        change();
      };
  return (
    <Button variant="contained" disableElevation onClick={stepForward}>
    Create WorkSpace
  </Button>
  )
}

export default ButttonComp