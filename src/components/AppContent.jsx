import React, { useEffect, useState } from "react";

import AuthenticationForm from "./AuthForm/AuthenticationForm";
import AuthContent from "./AuthContent";
import ErrorComponent from "./ErrorComponent";

import { request, setAuthHeader } from "../helpers/axios_helper";
import GroupChat from "./GroupChat/GroupChat";

const AppContent = () => {
  const [componentToShow, setComponentToShow] = useState("login");
  const [error, setError] = useState("");

  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");
    if (auth_token !== null && auth_token !== "null") {
      if (componentToShow !== "chat") {
        setComponentToShow("messages");
      }
    }
  }, [componentToShow]);

  const logout = () => {
    setComponentToShow("login");
    setAuthHeader(null);
  };

  const onLogin = (e, email, password) => {
    e.preventDefault();
    request("POST", "/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        setComponentToShow("messages");
      })
      .catch((error) => {
        setAuthHeader(null);
        setComponentToShow("error");
        setError(error);
      });
  };

  const onRegister = (e, email, password) => {
    e.preventDefault();
    request("POST", "/register", {
      email: email,
      password: password,
    })
      .then((response) => {
        setAuthHeader(response.data.token);
        setComponentToShow("messages");
      })
      .catch((error) => {
        setAuthHeader(null);
        setComponentToShow("error");
        setError(error);
      });
  };
  console.log(componentToShow);

  console.log(error);
  return (
    <>
      {componentToShow === "login" && (
        <AuthenticationForm onLogin={onLogin} onRegister={onRegister} />
      )}
      {componentToShow === "messages" && (
        <AuthContent
          setComponentToShow={setComponentToShow}
          logout={logout}
        />
      )}
      {componentToShow === "error" && (
        <ErrorComponent setComponentToShow={setComponentToShow} error={error} />
      )}
      {componentToShow === "chat" && (
        <GroupChat setComponentToShow={setComponentToShow} />
      )}
    </>
  );
};

export default AppContent;
