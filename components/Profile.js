import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import profileimage from "../public/Images/profileimage.png";
import Image from "next/image";
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTranslation } from 'react-i18next';
import FormData from 'form-data';
import Loader from './Loader';
import styles from "../styles/Loader.module.css";
export default function Profile() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const profile = useSelector((state) => state.auth.profile);
  const [userdata, setuserdata] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setloading] = useState(false);
 

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
    setloading(true);
     const form = new FormData();
    form.append('picture', file);
    setFile(null)
    //  const response = await fetch(`${process.env.API_URL}/user/picture`, {
    //   method: 'POST',
    //   headers: {
    //     'x-access-token': JSON.parse(token),
    //   },
    //   body: form,
    // });
    // const data=await response.json();
    //  //console.log(data)
    setloading(false)
    router.reload(window.location.pathname);
  };
  function showphoto(){
    
    if (!userdata || !userdata.picture){
      return(
      <Image
      width={200}
      height={200}
      className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
      src={profileimage}
      alt="Profile Picture"
      /> )
    }else{
      if(loading){
        return(
          <Image
          width={200}
          height={200}
          className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover brightness-50"
          src={`https://codellab.s3.amazonaws.com/${userdata.picture}`}
          alt="Profile Picture"
          /> 
        )
      }
      return(
        <Image
        width={200}
        height={200}
        className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover"
        src={`https://codellab.s3.amazonaws.com/${userdata.picture}`}
        alt="Profile Picture"
        /> 
        
        
        )
    }
    
  }
  useEffect(() => {
     //console.log(profile)
  
    // if (token) {
    //   const getdata = async () => {
    //     const res = await fetch(`https://almalik-application.onrender.com/api/profiles/${userId}`, {
    //       method: "GET",
    //       credentials: 'include',
    //     });
    //     const data = await res.json();
    //     setuserdata(data.data);
    //      //console.log("response data : " )
    //      //console.log(data.data)
    //      //console.log("useState userdata : ")
    //      //console.log(userdata)
    //     const decodedToken = jwt.decode(Cookies.get("token"));
    //      //console.log('decode token')
    //      //console.log(decodedToken)
    //   };
    //   getdata();
      
    // } else {
    //   router.push("/signin");
    // }

  }, [profile]);

  return (
    <>

      <div className="mx-auto max-w-md  sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 my-8">
          <div className="flex-shrink-0 relative ">
        {loading &&
          <div className="flex justify-center items-center h-24 w-32 pl-16 pt-20 md:h-32 md:w-32 absolute z-50">
        <div>
          <div className={styles.circleLoader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>  </div>
          }
          {showphoto()}
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
            <h1 className="text-3xl md:text-4xl font-bold">{profile && userdata.first_name}{profile && userdata.last_name}</h1>
     
            <p className="text-gray-500 text-sm md:text-lg">
              {profile ? `Phone : ${profile.phone_number}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile ? `address : ${profile.address}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile ? `city : ${profile.city}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile
                ? `store credit : ${profile.store_credit}`
                : ""}
            </p>
        
          </div>
          {/* pc */}
          <div className="flex-grow hidden md:block">
            <h1 className="text-3xl md:text-4xl font-bold m-4 ">{profile && profile.first_name + profile.last_name}</h1>
            <div className='bg-white rounded h-auto w-auto shadow-xl p-4 m-4 '>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile ? `Phone : ${profile.phone_number}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile ? `city : ${profile.city}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile ? `address : ${profile.address}` : ""}
            </p>
            <p className="text-gray-500 text-sm md:text-lg">
              {profile
                ? `store credit : ${profile.store_credit}`
                : ""}
            </p>
            </div>
     
          </div>
        </div>
      </div>
    </>
  );
}
