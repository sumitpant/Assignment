import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./RegForm.css";
import ButttonComp from "./ButttonComp";

const RegForm = ({ label1, label2, change, active }) => {
  const [username, setUsername] = useState();
  const [displayName, setDisplayName] = useState();
  const [workspace, setWorkspace] = useState();
  const [url, setUrl] = useState();
  const changeValue = (e) => {
    if (e.target.name === "displayname") {
      setDisplayName(e.target.value);
    } else if (e.target.name === "email") {
      setUrl(e.target.value);
    } else {
      setUsername(e.target.value);
    }
  };
  const changeValue2 = (e) => {
    setWorkspace(e.target.value);
  };

  return (
    <div className="form">
      <div className="fields">
        <label className="label">{label1}</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          onChange={
            active === -1 ? (e) => changeValue(e) : (e) => changeValue2(e)
          }
          name="username"
        />
      </div>
      <div className="fields">
        <label className="label">{label2}</label>
        {active === -1 ? (
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            onChange={(e) => changeValue(e)}
            name="displayname"
          />
        ) : null}

        {active === 0 ? (
          <div>
            <TextField
              id="outlined-read-only-input"
              variant="outlined"
              defaultValue="www.eden.com"
              size="small"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              type="email"
              name="email"
              onChange={(e) => changeValue(e)}
            />
          </div>
        ) : null}
      </div>
      <ButttonComp change={change} name ={displayName} />
    </div>
  );
};

export default RegForm;
