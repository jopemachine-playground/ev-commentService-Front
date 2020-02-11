import React from "react";
import { Container, Jumbotron, Button } from "reactstrap";
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

function entry({ token, blogTitle, blogURL, blogID, history }) {  

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
        alert("The service was deleted successfully.");
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
        <Button
          color="primary"
          onClick={() => {
            history.push("/CommentManagementService");
          }}
          style={{ marginRight: 10 }}
        >
          Go to comment analysis page
        </Button>
        <Button color="danger" onClick={deleteService}>
          Delete service
        </Button>
      </Container>
    </Jumbotron>
  );
}

export default entry;
