import React, { useState } from "react";
import { Alert, Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import axios from "axios";
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
  const [Gender, setGender] = useState<string>("");
  const [ProfileImage, setProfileImage] = useState();

  const validateForm = () => {
    return ID.length > 0 && PW.length > 0 && PW === PWConfirm;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let signUp = () => {
      axios({
        headers: {'Access-Control-Allow-Origin': '*'},
        method: 'post',
        url: '',
        data: {
          ID, PW, LastName, FirstName, Email, Address, PhoneNumber, Gender, ProfileImage
        }
      });
      return true;
    };
    validateForm() && signUp() || alert("ID나 비밀번호의 형식이 일치하지 않습니다.");
  }

  const handleChange = (eventMatcher: (e: any) => (any)) => {
    return (event: any) => {
      return (setter: (target: any) => (void)) => {
        setter(eventMatcher(event));
      }
    }
  };

  const handleStringChange = handleChange(e => { return e.currentTarget.value });

  const handleImageChange = handleChange(e => { return e.target.files[0] });

  return (
    <Container id={"themed-container"} fluid="sm">
      <Alert color="light" isOpen={alertVisble} toggle={() => setAlertVisible(false)}>
        <strong>* </strong> 란은 필수입니다.
      </Alert>
      <Form>
        <FormGroup>
          <Label for="ID">ID</Label>
          <Input value={ID} onChange={e => handleStringChange(e)(setID)} type={"text"} name={"ID"} id={"ID"} placeholder={"4글자 이상 20자 미만으로 입력하세요."} />
        </FormGroup>
        <FormGroup>
          <Label for="PW">PW</Label>
          <Input value={PW} onChange={e => handleStringChange(e)(setPW)} type={"password"} name={"PW"} id={"PW"} placeholder={"4글자 이상 20자 미만으로 입력하세요."} />
        </FormGroup>
        <FormGroup>
          <Label for="PW_Confirm">PW Confirm</Label>
          <Input value={PWConfirm} onChange={e => handleStringChange(e)(setPWConfirm)} type={"password"} name={"PW_Confirm"} id="PW_Confirm" />
        </FormGroup>
        <Label>
          이름
        </Label>
        <FormGroup>
          <Input value={LastName} onChange={e => handleStringChange(e)(setLastName)} type={"text"} name={"LastName"} id={"LastName"} placeholder={"성"} />
        </FormGroup>
        <FormGroup>
          <Input value={FirstName} onChange={e => handleStringChange(e)(setFirstName)} type={"text"} name={"FirstName"} id={"FirstName"} placeholder={"이름"} />
        </FormGroup>
        <FormGroup>
          <Label for="Email">이메일 주소</Label>
          <Input value={Email} onChange={e => handleStringChange(e)(setEmail)} type={"email"} name={"Email"} id={"Email"} />
        </FormGroup>
        <FormGroup>
          <Label for="Address">주소</Label>
          <Input value={Address} onChange={e => handleStringChange(e)(setAddress)} type={"text"} name={"Address"} id={"Address"} />
        </FormGroup>
        <FormGroup>
          <Label for="PhoneNumber">핸드폰 번호</Label>
          <Input value={PhoneNumber} onChange={e => handleStringChange(e)(setPhoneNumber)} type={"text"} name={"PhoneNumber"} id={"PhoneNumber"} />
        </FormGroup>
        <Button color={"primary"} type={"submit"} onClick={handleSubmit}>
          가입
        </Button>
      </Form>
    </Container>
  );
}