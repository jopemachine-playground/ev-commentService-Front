import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./SignIn.css";

export default function SignIn() {

  const [ID, setID] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function validateForm() {
    return ID.length > 0 && password.length > 0;
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
            <Label for="ID">ID: </Label>
            <Input type="text" name="ID" id="ID" placeholder={"write your ID"}></Input>
          </FormGroup>
          <FormGroup>
            <Label for="PW">PW: </Label>
            <Input type="password" name="PW" id="PW" placeholder={"write your PW"}></Input>
          </FormGroup>
        </Form>

        <Button type="submit" className="btn btn-dark btn-block">
          로그인
        </Button>
      </section>
    </div>
  );
}
