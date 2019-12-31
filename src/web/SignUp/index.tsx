import React, { useState } from "react";
import { Alert, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./SignUp.css";

export default function SignUp() {

  const [alertVisble, setAlertVisible] = useState<boolean>(true);
  const [ID, setID] = useState<string>("");
  const [PW, setPW] = useState<string>("");
  const [PWConfirm, setPWConfirm] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Address, setAddress] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(event: React.SyntheticEvent<HTMLInputElement>){
    return function (setter: (str: string) => (void)) {
      setter(event.currentTarget.value);
    }
  }

  return(
    <div>
      <Alert color="light" isOpen={alertVisble} toggle={() => setAlertVisible(false)}>
        <strong>* </strong> 란은 필수입니다.
      </Alert>
      <Form>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input value={ID} onChange={e => handleChange(e)(setID)} type="text" name="ID" id="ID" placeholder={"4글자 이상 20자 미만으로 입력하세요."}/>
        </FormGroup>
        <FormGroup>
          <Label for="PW">PW</Label>
          <Input value={PW} onChange={e => handleChange(e)(setPW)} type="password" name="PW" id="PW" placeholder={"4글자 이상 20자 미만으로 입력하세요."}/>
        </FormGroup>
        <FormGroup>
          <Label for="PW_Confirm">PW Confirm</Label>
          <Input value={PWConfirm} onChange={e => handleChange(e)(setPWConfirm)} type="password" name="PW_Confirm" id="PW_Confirm" />
        </FormGroup>
        <FormGroup>
          <Input value={LastName} onChange={e => handleChange(e)(setLastName)} type="text" name="LastName" id="LastName" placeholder={"성"} />
        </FormGroup>
        <FormGroup>
          <Input value={FirstName} onChange={e => handleChange(e)(setFirstName)} type="text" name="FirstName" id="FirstName" placeholder={"이름"} />
        </FormGroup>
        <FormGroup>
          <Label for="Email">이메일 주소</Label>
          <Input value={Email} onChange={e => handleChange(e)(setEmail)} type="email" name="PW_Confirm" id="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="Address">주소</Label>
          <Input value={Address} onChange={e => handleChange(e)(setAddress)} type="text" name="Address" id="Address" />
        </FormGroup>
        <FormGroup>
          <Label for="PhoneNumber">핸드폰 번호</Label>
          <Input value={PhoneNumber} onChange={e => handleChange(e)(setPhoneNumber)} type="email" name="PW_Confirm" id="Email" />
        </FormGroup>
        <Button color={"primary"} type={"submit"} onClick={handleSubmit}>
          가입
        </Button>
      </Form>
    </div>
  );
}