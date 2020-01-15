import React, { useState, useRef, useEffect, createRef } from "react";
import { Alert, Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import axios from "axios";
import "./SignUp.css";
import _ from "underscore";
import API from "../API";
import { useHistory } from "react-router";
import * as R from "ramda";
import TopNavbar from '../../component/TopNavbar'

export default function SignUp() {

  const history = useHistory();

  const [AlertVisble, setAlertVisible] = useState<boolean>(true);

  const [ID, setID] = useState<string>("");
  const IDRef = createRef<HTMLInputElement>();
  
  const [PW, setPW] = useState<string>("");
  const [PWConfirm, setPWConfirm] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Address, setAddress] = useState<string >("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [Gender, setGender] = useState<string>("");

  const [ProfileImage, setProfileImage] = useState({ preview: '', raw: '' });

  useEffect(() => {
    IDRef.current!.focus();
  }, []);

  const validateForm = () => {
    return ID.length > 0 && PW.length > 0 && PW === PWConfirm;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let signUp = () => {
      const headerConfig = {
        headers: {
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
      };

      const formData = new FormData();
      formData.append('ID', ID);
      formData.append('PW', PW);
      formData.append('LastName', LastName);
      formData.append('FirstName', FirstName);
      formData.append('Email', Email);
      formData.append('Address', Address);
      formData.append('PhoneNumber', PhoneNumber);
      formData.append('Gender', Gender);
      formData.append('ProfileImage', ProfileImage.raw);

      axios.post(API.SignUpRequest, formData, headerConfig)
        .then(res => {
          if(res.data.SUCCESS) {
            alert('회원가입에 성공하였습니다!');
            history.push('/SignIn');
          }
          else if (res.data.DUP_ENTRY) {
            alert('중복된 ID 입니다.');
          }
          else if(res.data.FILE_SIZE_OVER) {
            alert('파일 크기가 16MB를 초과하였습니다.');
          }
        });

      return true;
    };
    validateForm() && signUp() || alert("ID나 비밀번호의 형식이 일치하지 않습니다.");
  }

  const handleChange = R.curry((
    eventMatcher: (e: any) => (any),
    setter: (target: any) => (void),
    event: any) =>
      R.compose(setter, eventMatcher)(event)
  );

  const handleStringChange = handleChange(e => e.currentTarget.value);

  const handleImageChange = handleChange(
    e => { return { preview: URL.createObjectURL(e.target.files[0]), raw: e.target.files[0]} });

  return (
    <>
      <TopNavbar />
      <Container id={"themed-container"} fluid={"sm"}>
        <Alert
          color={"primary"}
          isOpen={AlertVisble}
          toggle={() => setAlertVisible(false)}
        >
          <strong>* </strong> 란은 필수입니다.
        </Alert>
        {ProfileImage.preview ? (
          <img src={ProfileImage.preview} width={"150"} height={"150"} />
        ) : (
          <>
            <span className={"fa-stack fa-2x mt-3 mb-2"}>
              <i className={"fas fa-circle fa-stack-2x"}></i>
              <i className={"fas fa-store fa-stack-1x fa-inverse"}></i>
            </span>
            <h5 className={"text-center"}>Upload your photo</h5>
          </>
        )}
        <input
          type={"file"}
          id={"upload-button"}
          onChange={handleImageChange(setProfileImage)}
        />
        <Form>
          <FormGroup>
            <Label for={"ID"}>ID</Label>
            <Input
              innerRef={IDRef}
              value={ID}
              onChange={handleStringChange(setID)}
              type={"text"}
              name={"ID"}
              id={"ID"}
              placeholder={"4글자 이상 20자 미만으로 입력하세요."}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"PW"}>PW</Label>
            <Input
              value={PW}
              onChange={handleStringChange(setPW)}
              type={"password"}
              name={"PW"}
              id={"PW"}
              placeholder={"4글자 이상 20자 미만으로 입력하세요."}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"PW_Confirm"}>PW Confirm</Label>
            <Input
              value={PWConfirm}
              onChange={handleStringChange(setPWConfirm)}
              type={"password"}
              name={"PW_Confirm"}
              id={"PW_Confirm"}
              placeholder={"비밀번호를 확인하세요."}
            />
          </FormGroup>
          <Label>이름</Label>
          <FormGroup>
            <Input
              value={LastName}
              onChange={handleStringChange(setLastName)}
              type={"text"}
              name={"LastName"}
              id={"LastName"}
              placeholder={"성"}
            />
          </FormGroup>
          <FormGroup>
            <Input
              value={FirstName}
              onChange={handleStringChange(setFirstName)}
              type={"text"}
              name={"FirstName"}
              id={"FirstName"}
              placeholder={"이름"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"Email"}>이메일 주소</Label>
            <Input
              value={Email}
              onChange={handleStringChange(setEmail)}
              type={"email"}
              name={"Email"}
              id={"Email"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"Address"}>주소</Label>
            <Input
              value={Address}
              onChange={handleStringChange(setAddress)}
              type={"text"}
              name={"Address"}
              id={"Address"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"PhoneNumber"}>핸드폰 번호</Label>
            <Input
              value={PhoneNumber}
              onChange={handleStringChange(setPhoneNumber)}
              type={"text"}
              name={"PhoneNumber"}
              id={"PhoneNumber"}
            />
          </FormGroup>
          <Button color={"primary"} type={"submit"} onClick={handleSubmit}>
            가입
          </Button>
        </Form>
      </Container>
    </>
  );
}