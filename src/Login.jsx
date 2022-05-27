import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menssage, setMenssage] = useState("");
  const onLoginClick = async () => {
    console.log(email, password)
    const response = await fetch(
      `http://localhost:5000/users?email=${email}&password=${password}`,
      { method: "GET" }
    );
    const body = await response.json();
    console.log(body);
    if (body.length > 0) {
      setMenssage(<span className="text-success">Sucessfuly logged-in</span>);
    } else {
      setMenssage(
        <span className="text-danger">Invalid login, please try again</span>
      );
    }
  };
  return (
    <div>
      <h4 className="m-1 p-2 border-bottom">Login</h4>
      <div className="form-group form-row">
        <label className="m-1 p-1 col-lg-4">Email:</label>
        <input
          type="text"
          className="m-1 p-1 form-control"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-group form-row mt-2">
        <label className="m-1 p-1 col-lg-4">Password:</label>
        <input
          type="password"
          className="m-1 p-1 form-control"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="text-end">
        {menssage}
        <button className="btn btn-primary m-2" onClick={onLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
