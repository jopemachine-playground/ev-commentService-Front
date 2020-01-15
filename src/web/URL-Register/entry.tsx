import React, { Fragment } from "react";
import { Container, Jumbotron } from "reactstrap";

function entry({ blogTitle, blogURL, blogID }) {
    return (
      <Jumbotron id={blogID} fluid>
        <Container fluid>
          <h1 className="display-3">{blogTitle}</h1>
          <p className="lead">{blogURL}</p>
        </Container>
      </Jumbotron>
    );
}

export default entry;
