import React, {useState} from "react";
import { Container, Jumbotron, Button } from "reactstrap";
import { useLocalStorage } from "../../LocalStorage";
import axios from "axios";
import API from "../API";

const style = {
  JumbotronStyle : {
    marginTop: 15,
    width: "100%",
    paddingTop: 10,
    paddingBottom: 25
  }
}

function entry({ token, blogTitle, blogURL, blogID }) {  

  const deleteService = () => {
    const formData = new FormData();
    formData.append("token", token);
    formData.append("blogID", blogID);

    const headerConfig = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .post(API.URLRegister_Delete, formData, headerConfig)
      .then(res => {
        alert("서비스가 성공적으로 삭제되었습니다!");
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Jumbotron id={blogID} style={style.JumbotronStyle}>
      <Container style={{ textAlign: "left" }}>
        <h1 className="display-3">{blogTitle}</h1>
        <hr />
        <p className="lead">{blogURL}</p>
        <Button color="primary" style={{ marginRight: 10 }}>
          댓글 분석 페이지로 이동
        </Button>
        <Button color="danger" onClick={deleteService}>
          서비스 삭제
        </Button>
      </Container>
    </Jumbotron>
  );
}

export default entry;
