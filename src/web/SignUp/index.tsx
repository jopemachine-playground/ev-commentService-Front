import React, { useState } from "react";
import { Alert, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./SignUp.css";

export default function SignUp() {

  const [alertVisble, setAlertVisible] = useState<boolean>(true);
  const [ID, setID] = useState<string>("");
  const [PW, setPW] = useState<string>("");
  const [PWConfirm, setPWConfirm] = useState<string>("");

  return(
    <div>
      <Alert color="light" isOpen={alertVisble} toggle={() => setAlertVisible(false)}>
        <strong>* </strong> 란은 필수입니다.
      </Alert>
      <Form>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input type="text" name="ID" id="ID" />
        </FormGroup>
        <FormGroup>
          <Label for="PW">PW</Label>
          <Input type="password" name="PW" id="PW" />
        </FormGroup>
        <FormGroup>
          <Label for="PW_Confirm">PW Confirm</Label>
          <Input type="password" name="PW_Confirm" id="PW_Confirm" />
        </FormGroup>
      </Form>
    </div>
  );
}