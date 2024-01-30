import { HiUsers } from "react-icons/hi";
import { MdLogout, MdAccountCircle } from "react-icons/md";

export const ProfileDropdown = ({ logout, setComponentToShow }) => {

  const enterGroupChat = () => {
    setComponentToShow("chat");
  };


  return (
    <div className="absolute top-16 right-4 sm:right-10 md:right-12 lg:right-40 mt-2 w-48 bg-white border rounded-lg shadow-md">
      <ul className="py-2">
        <li className="mx-4">
          <div className="flex justify-start items-center pl-4 space-x-2 my-2 py-2  hover:bg-[#F2F2F2] hover:rounded-xl cursor-pointer">
            <MdAccountCircle size={18} className="text-[#4F4F4F]" />
            <p className="text-[#4F4F4F]">My Profile</p>
          </div>
        </li>
        <li className="mx-4">
          <div onClick={enterGroupChat} className="flex justify-start items-center pl-4 space-x-2 my-2 py-2  hover:bg-[#F2F2F2] hover:rounded-xl cursor-pointer">
            <HiUsers className="text-[#4F4F4F]" />
            <p className="text-[#4F4F4F]">Group Chat</p>
          </div>
        </li>
        <li className="border-t mx-4">
          <div onClick={logout} className="flex justify-start items-center pl-4 space-x-2 my-2 py-2 text-red-500 hover:bg-gray-100 hover:rounded-xl cursor-pointer">
            <MdLogout className="" />
            <button>Logout</button>
          </div>
        </li>
      </ul>
    </div>
  );
};
