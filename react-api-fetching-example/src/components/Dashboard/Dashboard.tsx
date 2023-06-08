import moment from "moment/moment";
import { useEffect, useState } from "react";
import useRequest from "../../hooks/request.hook";
import Endpoints from "../../constants/endpoints.constant";

const Dashboard = () => {
  const [userData, setUserData] = useState<any>({});

  const makeRequest = useRequest({ baseURL: Endpoints.randomUser });

  useEffect(() => {
    fetchUserData();
    const interval = setInterval(fetchUserData, 15000);

    return () => clearInterval(interval);
  }, []);

  const fetchUserData = async () => {
    try {
      const { data } = await makeRequest.get("/");

      setUserData(data.results[0]);
    } catch (e) {}
  };

  return (
    <div
      className="flex flex-col gap-4 w-full p-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="flex flex-col rounded-lg">
        <div className="rounded-tr-lg rounded-tl-lg min-h-[20vh] sm:h-32 md:h-40 bg-secondaryBlue w-full"></div>
        <div className="rounded-br-lg rounded-bl-lg min-h-[240px] p-4 md:p-10 flex flex-col gap-8 bg-white">
          <div className="flex items-center justify-center w-32 h-32 rounded-full -mt-24 bg-white">
            <img
              src={userData?.picture?.large}
              alt=""
              className="w-28 h-28 rounded-full"
            />
          </div>
          <h1 className="text-primaryBlue font-bold text-3xl">
            {userData?.name?.title}. {userData?.name?.first}{" "}
            {userData?.name?.last}
          </h1>
          <div className="flex gap-5 text-sm">
            <div className="flex flex-col gap-6 font-semibold text-primaryBlue">
              <p>Gender:</p>
              <p>Date of Birth:</p>
              <p>Age:</p>
              <p>Email:</p>
              <p>Phone No:</p>
            </div>
            <div className="flex flex-col gap-6">
              <p className="capitalize">{userData?.gender}</p>
              <p>{moment(userData?.dob?.date).format("MMM Do,  YYYY")}</p>
              <p>{userData?.dob?.age} years old</p>
              <p className="w-[60%] sm:w-fit truncate">{userData?.email}</p>
              <p>{userData?.phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg min-h-[240px] p-4 md:p-10 text-xs md:text-sm flex flex-col gap-8 bg-white">
        <h1 className="text-primaryBlue font-bold text-3xl">Location</h1>
        <div className="flex gap-5 text-sm">
          <div className="flex flex-col gap-6 font-semibold text-primaryBlue">
            <p>Address:</p>
            <p>City:</p>
            <p>State:</p>
            <p>Country:</p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="capitalize">
              {userData?.location?.street?.number},{" "}
              {userData?.location?.street?.name}
            </p>
            <p className="capitalize">{userData?.location?.city}</p>
            <p className="capitalize">{userData?.location?.state}</p>
            <p className="capitalize">{userData?.location?.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
