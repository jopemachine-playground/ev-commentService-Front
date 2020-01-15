import React, {useState, useEffect, useContext} from "react";
import { Container, Jumbotron, Input, Label } from "reactstrap";
import { useHistory } from "react-router";
import { useLocalStorage } from "../../LocalStorage";
import _ from "underscore";
import axios from "axios";
import API from "../API";
import Entry from "./entry";
import TopNavbar from '../../component/TopNavbar'
import { useModal } from "../../component/Modalbox";

export default function URLRegister() {

  const history = useHistory();
  const [token, setTokenSession] = useLocalStorage('token', null);
  const [entrys, setEntrys] = useState([]);
  const [blogURL, setBlogURL] = useState<string>("");
  const [blogTitle, setBlogTitle] = useState<string>("");

  const modal = useModal({
    modalTitle: "새 서비스 추가",
    modalBody: (
      <>
        <p><strong>*</strong> Jekyll 기반의 블로그를 추가해주세요!</p>
        <Label for={"blogTitle"}>Title: </Label>
        <Input
          id={"blogTitle"}
          type={"text"}
          value={blogTitle}
          placeholder={"서비스할 블로그의 Title을 입력하세요."}
          onChange={e => setBlogTitle(e.currentTarget.value)}
          style={{marginBottom: 15}}
        />
        <Label for={"blogURL"}>URL: </Label>
        <Input
          id ={"blogURL"}
          type={"text"}
          value={blogURL}
          placeholder={"서비스할 블로그의 URL을 입력하세요."}
          onChange={e => setBlogURL(e.currentTarget.value)}
        />
      </>
    ),
    yesBtn: "서비스 생성",
    noBtn: "취소",
    yesBtnHandler: () => addService(blogTitle, blogURL)
  });

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

  const addService = (blogTitle: string, blogURL: string) => {
  
  };

  const deleteService = () => {

  };

  return (
    <>
      <TopNavbar icons={[{ iconStr: "Add Service", clickHandler: () => modal.setModal(true) }]} />
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
      {modal.modalRender()}
    </>
  );
}