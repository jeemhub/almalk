import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import profileimage from "../public/Images/profileimage.png";
import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const token = Cookies.get("loggedin");
  const [userdata, setuserdata] = useState();
  const [file, setFile] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  const handleFileInputCansel = () => {
    setFile(null);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    const form = new FormData();

    form.append('picture', file);
    try {
      const response = await fetch('http://app.almalk.org:3000/user/picture', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "x-access-token": JSON.parse(token),
        },
        body: form
      });
    
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      const getdata = async () => {
        const res = await fetch("http://app.almalk.org:3000/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": JSON.parse(token),
          },
        });
        const data = await res.json();

        setuserdata(data);
        console.log(data);
      };
      getdata();
    } else {
      router.push("/signin");
    }
  }, [token]);

  return (
    <>
   
      <div className="mx-auto max-w-md  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 my-8">
          <div className="flex-shrink-0 relative ">
            {file && console.log(file)}
            <Image
              className="h-24 w-24 md:h-32 md:w-32 rounded-full"
              src={profileimage}
              alt="Profile Picture"
            />
            {!file && 
            <AiOutlineCamera className="absolute z-20 left-2/3 top-3/4 bg-blue-600 text-white text-5xl cursor-pointer p-2 rounded-full" />
            }
            <form onSubmit={(e)=>{handleFormSubmit(e)}}>
              {!file && 
              <input
              id="file-input"
              type="file"
              name="picture"
              className="z-40 absolute left-2/3 top-3/4 opacity-0 w-12 h-12 cursor-pointer"
              onChange={handleFileInputChange}
              />
            }
            {file &&
            <div className="absolute left-1/3 top-3/4 flex flex-col gap-1 items-center">
              
               <button type="submit" disabled={!file} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 z-40 cursor-pointer">
          Upload
        </button>
          <AiOutlineCloseCircle onClick={()=>{handleFileInputCansel()}} className='text-2xl text-red-600 cursor-pointer'/>
              </div>
              }
            </form>
          </div>

          {/* mobile */}
          <div className="flex-grow self-start pl-10 md:hidden">
            <h1 className="text-3xl md:text-4xl font-bold">Jassim</h1>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata ? userdata.email : "email"}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata ? `Balance : ${userdata.balance}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata
                ? `smallAdsRemaining : ${userdata.smallAdsRemaining}`
                : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata ? `role : ${userdata.role}` : ""}
            </p>
          </div>
          {/* pc */}
          <div className="flex-grow hidden md:block">
            <h1 className="text-3xl md:text-4xl font-bold">Jassim</h1>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata ? userdata.email : "email"}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata ? `Balance : ${userdata.balance}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata
                ? `smallAdsRemaining : ${userdata.smallAdsRemaining}`
                : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {userdata ? `role : ${userdata.role}` : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
