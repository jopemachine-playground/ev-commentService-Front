import React, { useState } from "react";
import { Button, FormGroup } from "reactstrap";
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

        <form action="php-Action/SignInAction.php" onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label>ID </label>
              <input type="text" name="ID" className="ID form-control" placeholder="ID를 입력하세요" required />
          </div>

          <div className="form-group">
            <label>PW </label>
            <input type="password" name="PW" className="PW form-control" placeholder="비밀번호를 입력하세요" required />
          </div>

          <button type="submit" className="btn btn-dark btn-block" >로그인</button>
        </form>
      </section>
    </div>
  );
}
