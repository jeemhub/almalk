import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from '../slice/authSlice';

export default function Testsignup() {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const router=useRouter()
  const currentPath = router.pathname;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [serverMSG, setServerMSG] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    const email = formData.email;
    const password = formData.password;
    dispatch(signIn({ email, password }));
   
  };
  // const sendData = async () => {
  //   setError(false);
  //   setServerMSG("");
  //   setLoader(true);
  //   try {
  //     const response = await fetch(
  //       "https://almalik-application.onrender.com/api/jwt/create",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     if (response) {
  //       setLoader(false);
  //       var data = await response.json();
  //        //console.log("Data sent successfully!", data);
  //       // Handle the response as needed
  //         const decodedToken = jwt.decode(data.access);
  //          //console.log("decodedToken", decodedToken);
  //         Cookies.set("user_id", decodedToken.user_id);
  //         Cookies.set("loggedin", true);
  //         Cookies.set("token", data.access);
        
        
  //     }
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // };
  useEffect(() => {
   
    if(token && (currentPath == '/signin') ){
       //console.log('inside if')

      router.push('/')
    }
  }, [token]);

  if (loader) {
    return <Loader />;
  } else {
    return (
      <div className="h-screen w-full flex flex-col justify-center items-center ">
        <div className="flex flex-col p-12 items-center justify-center rounded-md shadow-md bg-white relative md:w-2/6">
          <div className="text-center text-6xl font-semibold flex justify-center items-center   ">
            <img
              className="w-20 text-center"
              alt="logo"
              src="/Images/logowithoutbg.png"
            />
          </div>
          {error ? (
            <h1 className="rounded-md p-4 bg-red-400 text-red-700 font-bold w-full text-center">
              {serverMSG}
            </h1>
          ) : (
            <></>
          )}
          <label className="block mb-1  font-semibold self-start">
            {t("email")}
          </label>
          <input
            className="focus:outline-none foucus:shadow-sm focus:border-[#f1b51f] p-4 border-solid  border rounded-md mb-4 w-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <label className="block mb-1  font-semibold self-start">
            {t("Password")}
          </label>
          <input
            className="focus:outline-none foucus:shadow-sm focus:border-[#f1b51f] p-4 border-solid  border rounded-md mb-4 w-full"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
          {/* <Link href="/resetpassword" className="text-red-500 mt-2">
            <a className="text-red-500 self-start">{t("Forgotyourpassword")}</a>
          </Link> */}
          <p className="my-2 self-start">
                    {t("DontHaveAnAccount")}
                    <Link
                      href="/signup"
                      className="text-[#0000EE] hover:no-underline hover:text-[#c45500]"
                    >
                      <a className='text-blue-700'>{t("signup")}</a>

                    </Link>
                  </p>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-[#1c505e] border-gray-500 hover:bg-white text-[#f1b51f] hover:text-[#1c505e] hover:border-2 hover:border-[#1c505e]  font-semibold py-3 rounded-md  tracking-wide"
          >
            {t("Continue")}
          </button>
        </div>
        
      </div>
    );
  }
}
