import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import styles from "../styles/Contactform.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Loader from "../components/Loader";
import { useTranslation } from "react-i18next";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../slice/userSlice";
export default function SignIn() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch()

  //const [error, setError] = useState(null);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, isLogged ,error,status,userToken} = useSelector((state) => state.user);

  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };
  const logIn = (e) => {
    e.preventDefault();
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };
  const ErrorSchema = Yup.object().shape({
    email: Yup.string().required("Please enter your email address"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "password must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
  const handelLogin = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    if (userToken) {
        router.push("/");
    }
}, []);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ErrorSchema}
      onSubmit={(value) => {
        //setLoadding(true)
        dispatch(login(value))
        
        
        // fetch("http://ap.almalk.org:3000/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(value),

        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     if (data.passwordincorrect != null) {
        //       setError(data.passwordincorrect);
        //       setLoadding(false)
        //       console.log(data.error);
        //       console.log("error", error);
        //     } else if (data.message) {
        //       setLoadding(false);
        //       setError(
        //         "There was a problem We cannot find an account with that email addres"
        //       );
        //       console.log(data.error);
        //       console.log("error", error);
        //     } else {
        //       setLoadding(true);

        //       Cookies.set("loggedin", JSON.stringify(data.token));
        //       localStorage.setItem("token", JSON.stringify(data.token));

        //       router.push("/").then(() => setLoadding(false));

        //     }


        //     //console.log("Success:", data);


        //   })
        //   .catch((error) => {
        //     //setError(data.error);
        //     console.error("Error:", error);
        //   });
        // setLoadding(false)
      }}
    >
      {({ errors, touched }) => (
        <div className="h-screen mobile:mt-[100px]  mobile:bg-slate-100 bg-slate-100 mobile:bg-inherit flex justify-center items-center w-full">
          {isLoading ? (<>
            <Loader />
          </>) : (<>
            <Form className="mobile:mt-[-250px] ">
              <div className="bg-white  mobile:bg-white  px-10 py-8 rounded-xl w-screen shadow-md mobile:rounded-2xl mobile:w-[100%]  mobile:bg-inherit mobile:mx-auto max-w-sm">
                <h1 className="text-center text-6xl font-semibold">Logo</h1>

                <div className="space-y-4">
                  <h1 className="text-center text-2xl font-semibold my-4">
                    {t("signout")}
                  </h1>
                  <div className="my-4">
                    {error && (
                      <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        <span className="font-medium"> {error}</span>
                      </div>
                    )}
                    <div>
                      <label className="block mb-1  font-semibold">
                        {t("MobileNumberOrEmail")}
                      </label>
                      <Field
                        type="email"
                        className={
                          touched.email
                            ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.email
                              ? `${styles.invalid}`
                              : `${styles.valid}`
                            } `
                            : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                        }
                        name="email"
                      /* placeholder="Your Name " */
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-700  text-xs">{errors.email}</p>
                      )}
                    </div>
                    <div className="relative">
                      <label className="block mb-1  font-semibold">
                        {t("Password")}
                      </label>
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        className={
                          touched.password
                            ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.password
                              ? `${styles.invalid}`
                              : `${styles.valid}`
                            } `
                            : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                        }
                        name="password"
                      /* placeholder="Your Name " */
                      />
                      <button
                        type="button"
                        onClick={handleToggleClick}
                        className="absolute top-[65%] right-[10px] transform -translate-y-[50%] bg-transparent border-none cursor-pointer"
  
                      >
                        {showPassword ? <RiEyeLine /> : < RiEyeOffLine/>}
                      </button>
                      {touched.password && errors.password && (
                        <p className="text-red-700  text-xs">{errors.password}</p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-[#DB9E43] border-gray-500 hover:bg-[#c98e37]  font-semibold py-3 rounded-md  tracking-wide"
                  >
                    {t("Continue")}
                  </button>
                  <Link href="/resetpassword" className="text-red-500 mt-2">

                    <a className='text-red-500'>{t("Forgotyourpassword")}</a>

                  </Link>

                  <p className="my-2">
                    {t("DontHaveAnAccount")}
                    <Link
                      href="/signup"
                      className="text-[#0000EE] hover:no-underline hover:text-[#c45500]"
                    >
                      <a className='text-blue-700'>{t("signup")}</a>

                    </Link>
                  </p>
                </div>
              </div>
            </Form>

          </>)}

        </div>
      )}
    </Formik>
  );
}
