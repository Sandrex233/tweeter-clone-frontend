import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import logo from "../../assets/devchallenges.svg";

import SocialAuthButtons from "./SocialAuthButtons";

const AuthenticationForm = ({ onLogin, onRegister }) => {
  const [active, setActive] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState({
    onLogin: onLogin,
    onRegister: onRegister,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmitLogin = (e) => {
    state.onLogin(e, email, password);
  };

  const onSubmitRegister = (e) => {
    state.onRegister(e, email, password);
  };

  return (
    <div className="flex justify-center sm:items-center h-screen">
      <div className="w-max sm:border border-[#BDBDBD] rounded-3xl sm:px-10 sm:py-8">
        <img src={logo} alt="logo" className="mb-4 mt-5 sm:mt-0" />
        <SignInForm
          active={active}
          onSubmitLogin={onSubmitLogin}
          onChangeHandler={onChangeHandler}
        />
        <SignUpForm
          active={active}
          onSubmitRegister={onSubmitRegister}
          onChangeHandler={onChangeHandler}
        />
        <SocialAuthButtons active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default AuthenticationForm;
