import React, {useState, useEffect, useContext} from "react";
import { Container, Jumbotron } from "reactstrap";
import { useHistory } from "react-router";
import { useLocalStorage } from "../../LocalStorage";
import _ from "underscore";
import axios from "axios";
import API from "../API";
import Entry from "./entry";
import TopNavbar from '../../component/TopNavbar'

export default function URLRegister() {

  const history = useHistory();
  const [token, setTokenSession] = useLocalStorage('token', null);
  const [entrys, setEntrys] = useState([]);

  useEffect(
    () => {
      const formData = new FormData();
      formData.append('token', token);
 
      const headerConfig = {
        headers: {
          'content-type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
      };

      axios.post(API.URLRegister, formData, headerConfig)
        .then(res => {
          setEntrys([]);
        })
        .catch(err => {
           history.push("/SignIn");
        });
    }
    , []);

  const addService = () => {
    console.log("test");
  };

  const deleteService = () => {

  };

  return (
    <>
      <TopNavbar icons={[{ iconStr: "Add Service", clickHandler: addService }]} />
      <Container id={"themed-container"} fluid={"sm"}>
        {entrys.map((entry, index) => (
          <Entry
            key={index}
            blogTitle={"entry.blogTitle"}
            blogID={""}
            blogURL={""}
          />
        ))}
      </Container>
    </>
  );
}