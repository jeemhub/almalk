import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const ProfilePage = () => {
  const profile = useSelector((state) => state.auth.profile);
  useEffect(() => {
    //console.log(profile)
  }, [profile]);
  return (
    <div className="flex mt-16">
     
      {/* Navbar top */}
     
      {/* End Navbar top */}

      {/* Sidenav */}
      
      {/* End Sidenav */}

      {/* Main */}
      <div className="main ml-32 mt-8 w-4/5">
        <h2 className="text-2xl font-bold mb-4">IDENTITY</h2>
        <div className="card bg-white rounded-lg shadow-md mb-8 py-5 px-10 relative">
          <i className="fa fa-pen fa-xs edit absolute text-gray-400 right-14"></i>
          <table className="text-lg w-4/5 mx-auto">
            <tbody>
              <tr>
                <td className="pr-4">Name</td>
                <td className="pr-2">:</td>
                <td>ImDezCode</td>
              </tr>
              <tr>
                <td className="pr-4">Email</td>
                <td className="pr-2">:</td>
                <td>imdezcode@gmail.com</td>
              </tr>
              <tr>
                <td className="pr-4">Address</td>
                <td className="pr-2">:</td>
                <td>Bali, Indonesia</td>
              </tr>
              <tr>
                <td className="pr-4">Hobbies</td>
                <td className="pr-2">:</td>
                <td>Diving, Reading Book</td>
              </tr>
              <tr>
                <td className="pr-4">Job</td>
                <td className="pr-2">:</td>
                <td>Web Developer</td>
              </tr>
              <tr>
                <td className="pr-4">Skill</td>
                <td className="pr-2">:</td>
                <td>PHP, HTML, CSS, Java</td>
              </tr>
            </tbody>
          </table>
        </div>     
      </div>
      {/* End Main */}
    </div>
  );
};

export default ProfilePage;
