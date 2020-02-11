import React, { useState, useEffect } from "react";
import RecentCommentsEntry from "./entry";
import axios from "axios";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useHistory } from "react-router";
import API from "../../API";

export default function RecentCommentsView() {
  
  const history = useHistory();
  const [entrys, setEntrys] = useState();
  const [token, setTokenSession] = useLocalStorage("token", null);

  useEffect(() => {
    const formData = new FormData();
    formData.append("token", token);

    const headerConfig = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios
      .post(API.URLRegister_RecentComments, formData, headerConfig)
      .then(res => {
        setEntrys(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
 
  
  return (
    <>
      {entrys &&
        entrys.map((content, index) => (
          <RecentCommentsEntry
            key={index}
            commentsContent={content}
          />
        ))}
    </>
  )
}