import React, { useEffect, useRef, useState } from "react";
import HomePage from "./HomePage";

function SignUp() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const [showHome, setShowHome] = useState(false);
  const [sign, setSign] = useState(false);
  const localSignUp = localStorage.getItem("auther");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setSign(true);
    }
  });
  const HandleSignUp = (event) => {
    event.preventDefault();
    if (
      firstname.current.value &&
      lastname.current.value &&
      email.current.value &&
      password.current.value &&
      confirmpassword.current.value
    ) {
      if (password.current.value === confirmpassword.current.value) {
        console.log(
          firstname.current.value,
          lastname.current.value,
          email.current.value,
          password.current.value
        );
        localStorage.setItem("firstname", firstname.current.value);
        localStorage.setItem("lastname", lastname.current.value);
        localStorage.setItem(
          "name",
          firstname.current.value + " " + lastname.current.value
        );
        localStorage.setItem("email", email.current.value);
        localStorage.setItem("password", password.current.value);
        localStorage.setItem("auther", email.current.value);
        //   alert("account created successfuly");
        window.location.reload();
      } else {
        alert("confirm password not match");
      }
    } else {
      alert("Please Fill out This all input Fields");
    }
  };
  const HandleSignIn = (event) => {
    event.preventDefault();
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      console.log(email.current.value, password.current.value);
      localStorage.setItem("auther", email.current.value);
      //   alert("account created successfuly");
      window.location.reload();
    } else {
      alert(`${localPassword} Password Not match`);
    }
  };
  return (
    <>
      {showHome ? (
        <HomePage />
      ) : sign ? (
        <div class="form-main">
          <div class="main-wrapper">
            <h2 class="form-head">Hello. {localName}</h2>
            <form class="form-wrapper">
              <div class="form-card">
                <input
                  class="form-input"
                  type="email"
                  name="email"
                  required="required"
                  ref={email}
                />
                <label class="form-label" for="email">
                  Email
                </label>
              </div>

              <div class="form-card">
                <input
                  class="form-input"
                  type="password"
                  name="full_name"
                  required="required"
                  ref={password}
                />
                <label class="form-label" for="full_name">
                  Password
                </label>
              </div>

              <div className="d-flex">
                <div className="btn-wrap">
                  <button onClick={HandleSignIn}> login </button>
                </div>
                <div className="btn-wrap-singup">
                  <button> Sign Up </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div class="form-main">
          <div class="main-wrapper">
            <h2 class="form-head">Sign Up</h2>
            <form class="form-wrapper">
              <div class="form-card-dflex">
                <div class="form-card">
                  <input
                    class="form-input"
                    type="text"
                    name="full_name"
                    required="required"
                    ref={firstname}
                  />
                  <label class="form-label" for="full_name">
                    First name
                  </label>
                </div>
                <div class="form-card">
                  <input
                    class="form-input"
                    type="text"
                    name="full_name"
                    required="required"
                    ref={lastname}
                  />
                  <label class="form-label" for="full_name">
                    Last Name
                  </label>
                </div>
              </div>

              <div class="form-card">
                <input
                  class="form-input"
                  type="email"
                  name="email"
                  required="required"
                  ref={email}
                />
                <label class="form-label" for="email">
                  Email
                </label>
              </div>

              <div class="form-card">
                <input
                  class="form-input"
                  type="password"
                  name="full_name"
                  required="required"
                  ref={password}
                />
                <label class="form-label" for="full_name">
                  Password
                </label>
              </div>

              <div class="form-card">
                <input
                  class="form-input"
                  type="password"
                  name="full_name"
                  required="required"
                  ref={confirmpassword}
                />
                <label class="form-label" for="full_name">
                  confirm password
                </label>
              </div>

              <div className="d-flex">
                <div className="btn-wrap">
                  <button onClick={HandleSignUp}> Submit </button>
                </div>
                <div className="btn-wrap-singup">
                  <button> Login </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
