import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import "./SignIn.css";

export default function SignIn() {

  const [ID, setID] = useState<string>("");
  const [PW, setPW] = useState<string>("");

  function validateForm() {
    return ID.length > 0 && PW.length > 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div>
      <section>
        <p id="Title" className="lead">Login</p>
        <p id="Title-lead" className="lead">감정 분석 댓글 서비스를 이용하기 위해 로그인하세요.</p>
        <Form>
          <FormGroup>
            <Label for={"ID"}>ID: </Label>
            <Input value={ID} onChange={(e: React.SyntheticEvent<HTMLInputElement>) => setID(e.currentTarget.value)} type="text" name="ID" id="ID" placeholder={"write your ID"}></Input>
          </FormGroup>
          <FormGroup>
            <Label for={"PW"}>PW: </Label>
            <Input value={PW} onChange={(e: React.SyntheticEvent<HTMLInputElement>) => setPW(e.currentTarget.value)} type="password" name="PW" id="PW" placeholder={"write your PW"}></Input>
          </FormGroup>
        </Form>

        <Button color={"primary"} type={"submit"} onClick={handleSubmit}>
          로그인
        </Button>
      </section>
    </div>
  );
}


