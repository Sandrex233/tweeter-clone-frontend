import React from "react";
import { IoMdMail, IoMdLock } from "react-icons/io";

const SignInForm = ({ active, onChangeHandler, onSubmitLogin }) => {
  return (
    <div className={`${active === "login" ? "block" : "hidden"}`}>
      <h1 className="text-[#333333] text-lg max-w-xs font-semibold">Login</h1>
      <form onSubmit={onSubmitLogin}>
        <div className="flex items-center border border-[#BDBDBD] rounded-md px-3 py-3 w-[21rem] sm:w-[22rem] mb-4 mt-7">
          <div className="mr-2">
            <IoMdMail size={20} className="text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            autoComplete="email"
            className="flex-1 focus:outline-none placeholder-[#828282]"
            placeholder="Email"
            required
            onChange={onChangeHandler}
          />
        </div>

        <div className="flex items-center border border-[#BDBDBD] rounded-md px-3 py-3 w-[21rem] sm:w-[22rem] mb-4">
          <div className="mr-2">
            <IoMdLock size={20} className="text-gray-400" />
          </div>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            className="flex-1 focus:outline-none placeholder-[#828282]"
            placeholder="Password"
            required
            onChange={onChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg mb-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
