import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './forms.css'


const Form2 = () => {
  const [Form2, setForm2] = useState({
    email: "",
    pass: "",
    userName: "",
    name: "",
    conPass: "",
  });

  const [Form2Errors, setForm2Errors] = useState({
    emailErr: null,
    passErr: null,
    userNameErr: null,
    nameErr: null,
    conPassErr: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Form2);
  };

  const emailValid = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        )
  }

  const hasWhiteSpace = (s) => {
    return /\s/g.test(s);
  }

  const validPass = (pass) => {
    return /[A-Z]/.test(pass) && /[0-9]/.test(pass) && /[!@#$%^&*]/.test(pass)
  }

  const eye = <FontAwesomeIcon icon={faEye}/>;

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibilty = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setForm2({
        ...Form2,
        email: e.target.value,
      });


      setForm2Errors({
        ...Form2Errors,
        emailErr:
            e.target.value.length === 0
                ? "This Field is required"
                : !emailValid(e.target.value)
                    ? "Please check the format"
                    : null,
      });
    }
    else if (e.target.name === "pass") {
      setForm2({
        ...Form2,
        pass: e.target.value,
      });
      setForm2Errors({
        ...Form2Errors,
        passErr:
            e.target.value.length === 0
                ? "This Field is required"
                : !validPass(e.target.value)
                    ? "Password need more diversity"
                : e.target.value.length < 8
            ? "Length must not be less than 8"
                    : null,
      });
    }
    else if (e.target.name === "userName") {
      setForm2({
        ...Form2,
        userName: e.target.value,
      });
      setForm2Errors({
        ...Form2Errors,
        userNameErr:
            e.target.value.length === 0
                ? "This Field is required"
                : hasWhiteSpace(e.target.value)
                    ? "No Spaces Allowed"
                    : null,
      });
    }
    else if (e.target.name === "name") {
      setForm2({
        ...Form2,
        name: e.target.value,
      });
      setForm2Errors({
        ...Form2Errors,
        nameErr:
            e.target.value.length === 0
                ? "This Field is required"
                : null,
      });
    }
    else if (e.target.name === "conPass") {
      setForm2({
        ...Form2,
        conPass: e.target.value,
      });
      setForm2Errors({
        ...Form2Errors,
        conPassErr:
            e.target.value !== Form2.pass
                ? "Doesnt Match"
                    : null,
      });
    }
  }
    ;


    return (
        <div className={"container-fluid bg-dark"}>
        <div className="container text-white">
          <h1>Register</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3 text-white">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <div className="input-icon-container">
                <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    name="name"
                    value={Form2.name}
                    onChange={(e) => handleChange(e)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
              </div>
              <div>
                <small className="text-danger">{Form2Errors.nameErr}</small>
              </div>

            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputEmail1" className="form-label text-white">
                Email
              </label>
              <div className="input-icon-container">
                <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    value={Form2.email}
                    onChange={(e) => handleChange(e)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
              </div>
              <div>
                <small className="text-danger">{Form2Errors.emailErr}</small>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                UserName
              </label>
              <div className="input-icon-container">
                <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    name="userName"
                    value={Form2.userName}
                    onChange={(e) => handleChange(e)}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
              </div>

              <div>
                <small className="text-danger">{Form2Errors.userNameErr}</small>
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
                        Form2Errors.passErr ? "border-danger" : ""
                    }`}
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                    value={Form2.pass}
                    id="exampleInputPassword1"
                />
                <i onClick={togglePasswordVisibilty}> &nbsp; {eye}</i>
              </div>
              <small className="text-danger">{Form2Errors.passErr}</small>
            </div>

            <div className="mb-3">

              <label htmlFor="exampleInputPassword1" className="form-label">
                Repeat Password
              </label>
              <div className="input-icon-container">
                <input
                    type={passwordShown ? "text" : "password"}
                    name="conPass"
                    className={`form-control ${
                        Form2Errors.conPassErr ? "border-danger" : ""
                    }`}
                    placeholder="Password"
                    onChange={(e) => handleChange(e)}
                    value={Form2.conPass}
                    id="exampleInputPassword1"
                />
                <i onClick={togglePasswordVisibilty}> &nbsp; {eye}</i>
              </div>
              <small className="text-danger">{Form2Errors.conPassErr}</small>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        </div>
    );
  };

export default Form2;
