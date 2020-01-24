import React, { useState, useRef, useEffect, createRef } from "react";
import { Alert, Form, FormGroup, Label, Input, Button, ButtonGroup, Container } from "reactstrap";
import axios from "axios";
import "./SignUp.css";
import _ from "underscore";
import API from "../API";
import { useHistory } from "react-router";
import * as R from "ramda";
import TopNavbar from '../../component/TopNavbar'

export default function SignUp() {

  const history = useHistory();

  const IDRef = createRef<HTMLInputElement>();
  const PWRef = createRef<HTMLInputElement>();
  const PWConfirmRef = createRef<HTMLInputElement>();
  const LastNameRef = createRef<HTMLInputElement>();
  const FirstNameRef = createRef<HTMLInputElement>();
  const EmailRef = createRef<HTMLInputElement>();
  const AddressRef = createRef<HTMLInputElement>();
  const PhoneNumberRef = createRef<HTMLInputElement>();

  const [Gender, setGender] = useState<string>("");
  const [ProfileImage, setProfileImage] = useState({ preview: '', raw: '' });
  const [AlertVisble, setAlertVisible] = useState<boolean>(true);

  const allInputRefs : Map<string, any> =
    new Map([
      ["ID", IDRef], 
      ["PW", PWRef], 
      ["PW_Confirm", PWConfirmRef], 
      ["LastName", LastNameRef], 
      ["FirstName", FirstNameRef], 
      ["Email", EmailRef],
      ["Address", AddressRef],
      ["PhoneNumber", PhoneNumberRef]
    ]);
    
  useEffect(() => {
    IDRef.current!.focus();
  }, []);

  const handleOnKeyPress = e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      let end = false;

      try {
        allInputRefs.forEach(inputRef => {
          if (end) {
            allInputRefs.get(inputRef.current.name).current.focus();
            throw new Error("break");
          }
          e.target.name === inputRef.current.name && (end = true);
        });
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  };

  const validateForm = () => {
    return (
      IDRef.current!.value.length > 0 &&
      PWRef.current!.value.length > 0 &&
      PWRef.current!.value === PWConfirmRef.current!.value
    );
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
      allInputRefs.forEach((inputRef) => {
        formData.append(inputRef.current.name, inputRef.current.value);
      });

      formData.append('Gender', Gender);
      formData.append('ProfileImage', ProfileImage.raw);

      axios.post(API.SignUp, formData, headerConfig)
        .then(res => {
          if(res.data.SUCCESS) {
            alert('You have successfully joined the membership!');
            history.push('/SignIn');
          }
          else if (res.data.DUP_ENTRY) {
            alert('Duplicate ID!');
          }
          else if(res.data.FILE_SIZE_OVER) {
            alert('File size exceeded 16MB.');
          }
        });
      return true;
    };
    validateForm() && signUp() || alert("The information given does not match");
  }

  const handleChange = R.curry((
    eventMatcher: (e: any) => (any),
    setter: (target: any) => (void),
    event: any) =>
      R.compose(setter, eventMatcher)(event)
  );

  const handleStringChange = handleChange(e => e.currentTarget.value);

  const handleGenderChange = handleChange(e => e.currentTarget.innerHTML);

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
          <strong>* </strong> marked forms are required
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
              onKeyDown={handleOnKeyPress}
              type={"text"}
              name={"ID"}
              id={"ID"}
              placeholder={"Please enter at least 4 characters and no more than 20 characters."}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"PW"}>PW</Label>
            <Input
              innerRef={PWRef}
              onKeyDown={handleOnKeyPress}
              type={"password"}
              name={"PW"}
              id={"PW"}
              placeholder={"Please enter at least 4 characters and no more than 20 characters."}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"PW_Confirm"}>PW Confirm</Label>
            <Input
              innerRef={PWConfirmRef}
              onKeyDown={handleOnKeyPress}
              type={"password"}
              name={"PW_Confirm"}
              id={"PW_Confirm"}
              placeholder={"Confirm your password"}
            />
          </FormGroup>
          <Label>Name</Label>
          <FormGroup>
            <Input
              innerRef={LastNameRef}
              onKeyDown={handleOnKeyPress}
              type={"text"}
              name={"LastName"}
              id={"LastName"}
              placeholder={"Last Name"}
            />
          </FormGroup>
          <FormGroup>
            <Input
              innerRef={FirstNameRef}
              onKeyDown={handleOnKeyPress}
              type={"text"}
              name={"FirstName"}
              id={"FirstName"}
              placeholder={"First Name"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"Email"}>Email</Label>
            <Input
              innerRef={EmailRef}
              onKeyDown={handleOnKeyPress}
              type={"email"}
              name={"Email"}
              id={"Email"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"Address"}>Address</Label>
            <Input
              innerRef={AddressRef}
              onKeyDown={handleOnKeyPress}
              type={"text"}
              name={"Address"}
              id={"Address"}
            />
          </FormGroup>
          <FormGroup>
            <Label for={"PhoneNumber"}>Phone number</Label>
            <Input
              innerRef={PhoneNumberRef}
              onKeyDown={handleOnKeyPress}
              type={"text"}
              name={"PhoneNumber"}
              id={"PhoneNumber"}
            />
          </FormGroup>
          <FormGroup>
            <ButtonGroup>
              <Label for={"Gender"} style={{marginRight: 10}}>Gender</Label>
              <Button onClick={handleGenderChange(setGender)}>Man</Button>
              <Button onClick={handleGenderChange(setGender)}>Woman</Button>
            </ButtonGroup>
          </FormGroup>
          <Button color={"primary"} type={"submit"} onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}