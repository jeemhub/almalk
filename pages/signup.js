import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Loader from '../components/Loader';
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function Testsignup() {
    const router=useRouter()
    
    const { t, i18n } = useTranslation();
    const [loader , setLoader]=useState(false);
    const [error , setError]=useState(false);
    const [serverMSG,setServerMSG]=useState('');
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    re_password:'',
    username: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendData = async () => {
        setError(false);
        setServerMSG('');
        setLoader(true);
        try {
           //console.log("formData")
           //console.log(formData)
            const response = await fetch('https://almalik-application.onrender.com/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if(response){
                setLoader(false);
            }
            var data=await response.json();
            // Handle the response as needed
             //console.log('Data sent successfully!', data);
                Cookies.set("id", data.id);
                Cookies.set("username", data.username);
                Cookies.set("email", data.email);
                router.push('/signin')
            
        } catch (error) {
            console.error('Error sending data:', error);
        }
  };
if(loader){
    return(<Loader/>)
}
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center my-16 ">
        <div className="flex flex-col p-12 items-center justify-center rounded-md shadow-md bg-white relative md:w-2/6">
                 <div className="text-center text-6xl font-semibold flex justify-center items-center   ">
                   <img className='w-20 text-center' alt='logo' src='/Images/logowithoutbg.png'/>
                 </div>
                 {error?(<h1 className='rounded-md p-4 bg-red-400 text-red-700 font-bold w-full text-center'>{serverMSG}</h1>):(<></>)}
        <label className="block mb-1  font-semibold self-start">{t("YourName")}</label>
        <input
        className="focus:outline-none foucus:shadow-sm focus:border-[#f1b51f] p-4 border-solid  border rounded-md mb-4 w-full"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Name"
      />
          <label className="block mb-1  font-semibold self-start">
                    {t("MobileNumberOrEmail")}
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
        <label className="block mb-1  font-semibold self-start">
                  rewrite password
                  </label>
      <input
      className="focus:outline-none foucus:shadow-sm focus:border-[#f1b51f] p-4 border-solid  border rounded-md mb-4 w-full"
        type="password"
        name="re_password"
        value={formData.re_password}
        onChange={handleInputChange}
        placeholder="rewrite Password"
      />
      <label className="block mb-1  font-semibold self-start">{t("Invite Code ")}</label>
      <input
      className="focus:outline-none foucus:shadow-sm focus:border-[#f1b51f] p-4 border-solid  border rounded-md mb-4 w-full"
        type="text"
        name="inviteCode"
        // value={formData.inviteCode}
        // onChange={handleInputChange}
        placeholder="Invite Code"
      />
   
      <button
         onClick={sendData}
                className="mt-4 w-full bg-[#1c505e] border-gray-500 hover:bg-white text-[#f1b51f] hover:text-[#1c505e] hover:border-2 hover:border-[#1c505e]  font-semibold py-3 rounded-md  tracking-wide"
              >
                {t("Continue")}
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">{t("OR")}</p>
              </div>

              <button className="flex-1 w-full my-2 hover:text-[#c45500] px-2 py-4 text-sm font-semibold  bg-white border border-gray-500 rounded-lg  hover:bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid"
                  className="inline w-5 h-5 ml-[-21px] text-gray-700 fill-current"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  />
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  />
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  />
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  />
                </svg>
                <span className="ml-3 ">{t("ContinueWithGoogle")}</span>
              </button>

              <button className="flex-1 hover:text-[#c45500] px-2 py-4 text-sm font-semibold border border-gray-500 bg-white  rounded-lg w-full  hover:bg-indigo-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Ebene 1"
                  viewBox="0 0 1024 1024"
                  width="24"
                  height="24"
                  className="inline w-5 h-5 text-gray-700 fill-current"
                >
                  <path
                    fill="#1877f2"
                    d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                  />
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  />
                </svg>

                <span className="ml-3 hover:text-[#c45500]">
                  {t("ContinueWithFacebook")}
                </span>
              </button>
            
      </div>
     
    </div>
  );

}
