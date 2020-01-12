import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { useHistory } from "react-router";
import { useLocalStorage } from "../../LocalStorage";
import _ from "underscore";
import axios from "axios";
import API from "../API";
import R from "ramda";

export default function URLRegister() {

  const history = useHistory();
  const [token, setTokenSession] = useLocalStorage('token', null);

  useEffect(
    () => {
      console.log(token)
      ;
      token === null && history.push("/SignIn");

      const formData = new FormData();
      formData.append('token', token);

      fetch(API.URLRegister, { method: 'post', body: formData})
        .then(res => res.json())
        .then((res) => {
          console.log(res);
        });
    }
    , []);

  return (
    <Container id={"themed-container"} fluid={"sm"}>

    </Container>
  )
}