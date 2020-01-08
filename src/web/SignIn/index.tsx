import React, {useEffect, useState} from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./SignIn.css";
import API from "../API";
import axios from "axios";
import { useLocalStorage } from "../../LocalStorage";
import _ from "underscore";
import * as R from "ramda";

export default function SignIn() {

  const history = useHistory();
  const [IDSession, setIDSession] = useLocalStorage('userID','');

  const [ID, setID] = useState<string>("");
  const [PW, setPW] = useState<string>("");

  useEffect(
      () => {
        IDSession !== '' && history.push("/URL-Register");
      }
  , []);

  const validateForm = () => {
    return ID.length > 0 && PW.length > 0;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let signInReq = () => {
      axios({
        headers: {'Access-Control-Allow-Origin': '*'},
        method: 'post',
        url: API.SignInRequest,
        data: { ID, PW }
      })
      .then(res => {
        if(res.data.VALID) {
          setIDSession(ID);
          history.push("/URL-Register");
        }
        else alert("ID나 비밀번호의 형식이 일치하지 않습니다.")
      })
      .catch(function(error){
        console.log(error);
      });
    };

    validateForm() && signInReq();
  }

  const handleChange = R.curry((
    eventMatcher: (e: any) => (any),
    setter: (target: any) => (void),
    event: any) =>
      R.compose(setter, eventMatcher)(event)
  );

  const handleStringChange = handleChange(e => e.currentTarget.value);

  return (
    <Container id={"themed-container"} fluid={"sm"}>
      <section>
        <p id={"LoginTitle"} className={"lead"}>Login</p>
        <p id={"Title-lead"} className={"lead"}>감정 분석 댓글 서비스를 이용하기 위해 로그인하세요.</p>
        <Form>
          <FormGroup>
            <Label for={"ID"}>ID: </Label>
            <Input value={ID} onChange={handleStringChange(setID)} type={"text"} name={"ID"} id={"ID"} placeholder={"write your ID"} />
          </FormGroup>
          <FormGroup>
            <Label for={"PW"}>PW: </Label>
            <Input value={PW} onChange={handleStringChange(setPW)} type={"password"} name={"PW"} id={"PW"} placeholder={"write your PW"} />
          </FormGroup>
        </Form>

        <Button color={"primary"} type={"submit"} onClick={handleSubmit}>
          로그인
        </Button>
        <NavLink id={"AnchorForSignUp"} to={"/SignUp"} activeClassName={"selected"}>
          Sign Up
        </NavLink>
      </section>
    </Container>
  );
}


