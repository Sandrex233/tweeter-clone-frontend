import Google from "../../assets/Google.svg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Github from "../../assets/Gihub.svg";

const SocialAuthButtons = ({ active, setActive }) => {
  return (
    <div className="space-y-5">
      <p className="text-sm text-center text-[#828282] mt-4">
        or continue with these social profile
      </p>

      <div className="flex flex-row items-center justify-center space-x-4">
        <img src={Google} alt="google" className="hover:cursor-pointer" />
        <img src={Facebook} alt="facebook" className="hover:cursor-pointer" />
        <img src={Twitter} alt="twitter" className="hover:cursor-pointer" />
        <img src={Github} alt="github" className="hover:cursor-pointer" />
      </div>

      {active === "register" ? (
        <p className="text-sm text-center text-[#828282] mt-5">
          Adready a member?{" "}
          <button
            className="text-[#2F80ED] focus:outline-none hover:underline"
            onClick={() => setActive("login")}
          >
            Login
          </button>
        </p>
      ) : (
        <p className="text-sm text-center text-[#828282] mt-5">
          Don’t have an account yet?{" "}
          <button
            className="text-[#2F80ED] focus:outline-none hover:underline"
            onClick={() => setActive("register")}
          >
            Register
          </button>
        </p>
      )}
    </div>
  );
};

export default SocialAuthButtons;
