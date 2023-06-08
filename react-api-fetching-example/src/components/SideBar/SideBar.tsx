import { dummyMenuItems } from "../../constants/index.constants";

const SideBar = () => (
  <div className="hidden md:flex bg-white md:w-64 my-4 ml-4 rounded-lg p-4 md:pt-36">
    <div className="md:flex md:flex-col w-full hidden gap-4">
      <div className="w-full rounded-md cursor-pointer text-sm p-4 font-semibold text-white bg-primaryBlue">
        {dummyMenuItems[0]}
      </div>
      {dummyMenuItems.slice(1).map((item) => (
        <div className="w-full rounded-md cursor-pointer text-sm p-4 font-semibold hover:bg-blue-50">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default SideBar;
