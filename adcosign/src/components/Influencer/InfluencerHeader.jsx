import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
  
const InfluencerHeader = (props) => {
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({ Adsrequired: "" });

  const getInfluencerData = async () => {
    const res = await axios.get("influencer/getInfluencer");
    const data = res.data;
    setuserdata(data.data)
    console.log("Logged in user is:- ");
    console.log(userdata);
  }
  useEffect(() => {
    getInfluencerData()
  }, [])

  const logout = async () => {
    try {

      const res = await axios.get('/logout')
      console.log(res.data);
      if (res.data.success == true) {
        navigate('/');
      }
    } catch (err) {

    }

  }
  let menuitemCommoncss =
    "rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer";

  return (
    <div className="h-20 flex items-center justify-between mx-20 w-[screen]">
      <nav className="">
        <p className="font-bold">Influencer  &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        <div className="flex mx-5">
          <FiSettings />
        </div>
        <div class="flex items-center space-x-4">
          <div className="">

          <img class="w-10 h-10 rounded-full group" src={userdata.photo} alt="" />
          <div className="absolute hidden group-hover:block">hello</div>
        </div>
          <div class="font-medium ">
            <div>Hi,{userdata.fname}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHeader;

  {/* <div className="logo">
            <NavLink to="/InfluencerHome">
              <img src={logo} className="h-20 pr-10"></img>
            </NavLink>
          </div> */}
          {/* <nav className="menubar my-auto ">
            <ul className="menu flex items-center text-lg ">
              <li className="menu-item py-3 px-4 visited:text-blue-500 hover:text-blue-500 ease-in duration-300 ">
                <NavLink to="/InfluencerHome">Home</NavLink>
              </li>



              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/InfluencerPendingRequest">Pending Request</NavLink>
              </li>
              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/InfluencerArrivalRequest">Arrival Request</NavLink>
              </li>
              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/InfluencerConsignments">Agreements</NavLink>
              </li>
              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/InfluencerHistory">
                  History
                </NavLink>
              </li>
              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
                <NavLink to="/InfluencerProfile">Profile</NavLink>
              </li> */}

              {/* more items */}
              {/* <div>
                  <div className="group inline-block">
                    <button className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
                      <span className="pr-1 font-semibold flex-1 hover:text-blue-500 cursor-pointer">
                        More
                      </span>
                      <span>
                        <svg
                          className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
                      <NavLink to="/InfluencerProfileEdit">
                        <li className={menuitemCommoncss}>Edit Profile</li>
                      </NavLink>
                      <NavLink to="/InfluencerHistory">
                        <li className={menuitemCommoncss}>History</li>
                      </NavLink>
                      <li className={menuitemCommoncss}>Add Images</li>
                    </ul>
                  </div>
                </div> */}
              {/* <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">

                <li className={menuitemCommoncss} onClick={logout}>Logout</li>

              </li>

            </ul>
          </nav> */}