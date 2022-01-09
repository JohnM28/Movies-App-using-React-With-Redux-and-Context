import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './forms.css'


const Form1 = () => {
  const [Form1, setForm1] = useState({
    email: "",
    pass: "",
  });

  const [Form1Errors, setForm1Errors] = useState({
    emailErr: null,
    passErr: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Form1);
  };

  const emailValid = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        )
  }

  const eye = <FontAwesomeIcon icon={faEye} />;

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibilty = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setForm1({
        ...Form1,
        email: e.target.value,
      });


      setForm1Errors({
        ...Form1Errors,
        emailErr:
          e.target.value.length === 0
            ? "This Field is required"
            : !emailValid(e.target.value)
            ? "Please check the format"
            : null,
      });
    } else if (e.target.name === "pass") {
      setForm1({
        ...Form1,
        pass: e.target.value,
      });
      setForm1Errors({
        ...Form1Errors,
        passErr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 8
            ? "Length must not be less than 8"
            : null,
      });
    }
  };

  return (
      <div className={"container-fluid bg-dark"}>
    <div className="container text-white">
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3 text-white">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <div className="input-icon-container">
          <input
            type="text"
            className="form-control"
            placeholder="email"
            name="email"
            value={Form1.email}
            onChange={(e) => handleChange(e)}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          </div>
          <div>
            <small className="text-danger">{Form1Errors.emailErr}</small>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <div className="input-icon-container">
            <input
                type={passwordShown ? "text" : "password"}
                name="pass"
                className={`form-control ${
                    Form1Errors.passErr ? "border-danger" : ""
                }`}
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                value={Form1.pass}
                id="exampleInputPassword1"
            />
            <i onClick={togglePasswordVisibilty}> &nbsp; {eye}</i>
          </div>
          <small className="text-danger">{Form1Errors.passErr}</small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
      </div>
  );
};

export default Form1;
