import React, { useEffect, useState } from "react";
import ProfileInfo from "./Profile/ProfileInfo";
import ChangeInfo from "./Profile/ChangeInfo";
import Navbar from "./Navbar";

import { request, setAuthHeader } from "../helpers/axios_helper";

const AuthContent = ({ logout, setComponentToShow }) => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    request("GET", "/user-info", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setAuthHeader(null);
        } else {
          setData(error.response.code);
        }
      });
  }, []);

  const onEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="flex flex-col">
      <Navbar logout={logout} setComponentToShow={setComponentToShow} data={data} />
      <div className="flex flex-col mt-3">
        {edit ? (
          <ChangeInfo onEdit={onEdit} setComponentToShow={setComponentToShow} data={data} />
        ) : (
          <ProfileInfo onEdit={onEdit} data={data} />
        )}
      </div>
    </div>
  );
};

export default AuthContent;
