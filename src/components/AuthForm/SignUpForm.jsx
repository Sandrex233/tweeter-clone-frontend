import React from "react";
import { IoMdMail, IoMdLock } from "react-icons/io";

const SignUpForm = ({ active, onChangeHandler, onSubmitRegister }) => {
  return (
    <div className={`${active === "register" ? "block" : "hidden"}`}>
      <div className="space-y-4">
        <h1 className="text-[#333333] text-lg max-w-xs font-semibold">
          Join thousands of learners from around the world
        </h1>
        <p className="text-[#333333] text-base max-w-xs font-normal">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
      </div>
      <form onSubmit={onSubmitRegister}>
        <div className="flex items-center border border-[#BDBDBD] rounded-md px-3 py-3 w-[21rem] sm:w-[22rem] mb-4 mt-7">
          <div className="mr-2">
            <IoMdMail size={20} className="text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            className="flex-1 focus:outline-none placeholder-[#828282]"
            placeholder="Email"
            autoComplete="email"
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
          className="w-full py-2 bg-[#2F80ED] text-[#FFFFFF] text-base rounded-lg mb-3"
        >
          Start coding now
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
