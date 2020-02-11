import React, { useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import TopNavbar from '../../component/TopNavbar'
import { NavLink, useHistory } from "react-router-dom";

const sectionStyle = {
  paddingTop: 75,
  paddingLeft: 5,
  paddingRight: 5
}

export default function CommentManageService(){

  const history = useHistory();

  useEffect(() => {

    
  }, [])

  const topNavbarFixedIcons = [
    { iconStr: "Backward", clickHandler: () => history.push("/URL-Register") },
    { iconStr: "User Info Edit", clickHandler: () => history.push("/UserEdit") }
  ];

  return (
    <>
      <TopNavbar icons={topNavbarFixedIcons} />
      <Container id={"themed-container"} fluid={"sm"}>
        <section className="mt-1" style={sectionStyle}>
        <div className="row">
          <div className="col-md-3" style={{marginBottom: 15}}>
            <div id="AnalysisButtons" className="list-group">
              <a id="Analysis-recentComments" href="#" className="list-group-item sideButton active">Recently Created Comments</a>
              <a id="Analysis-positiveness" href="#" className="list-group-item sideButton">Good rated posts</a>
              <a id="Analysis-popularness" href="#" className="list-group-item sideButton">Hot Posting Analysis</a>
              <a id="Analysis-postsSortingByCommentsNumber" href="#" className="list-group-item sideButton">Posts with many comments</a>
            </div>
          </div>

          <div id="ServiceSection" className="col-md-9" style={{display: 'none'}}>
          </div>
        </div>
      </section>
    </Container>
  </>
  )
}
