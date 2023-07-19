import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import CurrencyInput from 'react-currency-input-field';
import { useSelector,useDispatch } from "react-redux";
import { Form } from 'formik';


const ItemForm = () => {
    const token = useSelector((state) => state.auth.token);
    const userId = useSelector((state) => state.auth.userId);
    const refresh = useSelector((state) => state.auth.refresh);
    const profile = useSelector((state) => state.auth.profile);
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [details, setdetails] = useState("");
    const [isOwner, setIsOwned] = useState(false);
    const [price, setPrice] = useState(null);
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState("");
    const [currency, setCurrency] = useState("");
    const [category, setCategory] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [phone, setPhone] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState(null);
    const [requiredFields, setRequiredFields] = useState(null);
    const [inputValues, setInputValues] = useState({});
    const [loadding, setLoadding] = useState(false)
    const { isLoading, isLogged,userToken } = useSelector((state) => state.user);
    const [isError, setIsError] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const filesArray = Array.from(event.target.files);
    setSelectedFiles(filesArray);
    setImages(filesArray);
     //console.log(selectedFiles);
  };
  JSON.st

  async function handleUpload(ad_id,bearerToken){
       //console.log('ad_id : '+ ad_id);

    if (selectedFiles.length > 0) {
         //console.log(selectedFiles)
        
       const formData = new FormData();
      formData.append('file', selectedFiles);
      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });
      const res=await fetch(`https://almalik-application.onrender.com/api/ads/ad/upload-images/${ad_id}`, {
        method: 'POST',
        headers: {
            "Authorization": bearerToken,
        },
        body: formData,
      });
      const data=await res.json();
        //console.log(data);
    }
  };


    const regexExp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;


 

    const handleCategoryChange = (event) => {
            const categoryId = event.target.value;
            const category2 = categoryList.find((c) => c.name === categoryId);
            setCategory(category2.name);
            setCategoryID(category2.id);
            //  //console.log(categoryID);
            //  //console.log(category);
        // const fieldName = category2.requiredFields[0].fieldName;
        // setRequiredFields(fieldName);
    };

    const validate = () => {
        
        const newErrors = {};

        if (!title) {
            newErrors.title = "Title is required";
        }
        if (!phone) {
            newErrors.phone = "Phone Number is required";
           
        }
        if(isError){
            newErrors.phoneLength = "Phone number must be at least 10 numbers"
        }
        if (!images.length) {
            newErrors.images = "At least one image is required";
        }
        if (images.length > 10) {
            newErrors.images = "The Number of Images must be less than or equal 10";
        }
        if (!details) {
            newErrors.details = "details is required";
        }
        if (!price) {
            newErrors.price = "Price is required";
        }
        if (!location) {
            newErrors.location = "Location is required";
        }
        if (!status) {
            newErrors.status = "Status is required";
        }
        if (!currency) {
            newErrors.currency = "Currency is required";
        }
        if (!category) {
            newErrors.category = "Category is required";
        }

        // if (Object.keys(inputValues).length === 0) {
        //     // //console.log("inputValues.keys",inputValues.keys)
        //     newErrors.inputValues = "At least one field must be entered";
        // }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    async function refreshToken(){

    }
    useEffect(() => {
         //console.log('category:');
         //console.log(category);
         //console.log('categoryID:');
         //console.log(categoryID);
        if (!token) {
            router.push("/signin");
        }
        const geCategories = async () => {
            const response = await fetch(`https://almalik-application.onrender.com/api/ads/ad-categories/`);
            const data = await response.clone().json();
            setCategoryList(data);
        };

        geCategories();



    }, [category]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        if (token) {
            var formData ={ 
                title:title,
                description: details,
                user: profile.id,
                price: price,
                type: "39b7be18-4ccd-4adb-8171-376e515754a5",
                category: categoryID,
                ad_status: "PENDING",
                item_status: status
              
        }
       postData(formData);
       // test(formData,token);
        }
        async function test(formData,token){
        
           const res=await fetch("https://almalik-application.onrender.com/api/ads/" , {
            method:'POST',
            headers: {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5Njc0OTc3LCJpYXQiOjE2ODk2NzQ2NzcsImp0aSI6ImJhMGQ0YTIwZGU2MDQ4MzRiMzc1ODk0YjM2YjQ2ZTY4IiwidXNlcl9pZCI6ImQ5N2Q0MTRmLWEyZGItNDFkMS05MjA2LTA4NjBiYWRhYzgzNiJ9.BHaXvLHFXEEsy0Ri-Thbltg888QeZxqcxz7R15J0Slg'
            },
            body: 
            {    
                    title: "robot620",
                    description: "fdsfsdv sgfsd",
                    user: "d93d248f-3b9a-4b08-8e27-364d86c87ba8",
                    price: "25000",
                    type: "39b7be18-4ccd-4adb-8171-376e515754a5",
                    category:"bf0b1800-6d57-41f3-b2a3-198b3a2dfc20",
                    item_status:"NEW",
                    ad_status:"PENDING"
                    
                
            }
            ,
           })
           const data=await res.json();
            //console.log(data);

        }
            // const formData = new FormData();
            // formData.append("title", title);
            // formData.append("price", price);
            // formData.append("location", location);
            // formData.append("details", details);
            // formData.append("isOwner", isOwner);
            // formData.append("status", status);
            // formData.append("category", category);
            // formData.append("phone", phone);
            // formData.append("currency", currency);
            // formData.append("requiredFields", requiredFields ? JSON.stringify(requiredFields.map((fieldName) => ({
            //     fieldName,
            //     fieldValue: inputValues[fieldName],
            // }))) : [])
            // for (const image of images) {
            //     formData.append("images", image);
            // }
            // setLoadding(true)
           
            async function postData(formData) {

                try {
                    Cookies.set('access',token);
                    Cookies.set('refresh',refresh);

                    var bearerToken="Bearer "+token;
                     //console.log(token)
                    const res = await fetch("https://almalik-application.onrender.com/api/ads/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": bearerToken,
                        },
                        body: JSON.stringify(formData),
                    });

                     //console.log("Response status:", res.status);
                     //console.log("Response headers:", res.headers);
                    const data = await res.json();
                     //console.log("Response body:", data);

                    if (res.status === 401) {
                        setLoadding(false);
                        setError("You have to be logged in");
                         //console.log("res.status == 401")
                    }
                    if(res.status === 200){
                        var ad_id = data.id;
                        handleUpload(ad_id,bearerToken);
                        // var resImg =await fetch(`https://almalik-application.onrender.com/api/ads/ad/upload-images/${ad_id}`, {
                        //     method: "POST",
                        //     headers: {
                        //       "Content-Type": "application/json",
                        //       "Authorization": bearerToken,
                        //     },
                        //     body: JSON.stringify({images}), // Assuming the API expects a JSON payload
                        //   });
                        //   const dataImg= await  resImg.json();
                        //   if (res.status === 401) {
                        //     setLoadding(false);
                        //     setError("You have to be logged in");
                        //      //console.log("res.status == 401")
                        // }
                        //  //console.log('res.status');
                        //  //console.log(res.status);
                        //  //console.log('\n');
                        //  //console.log('res.dataIMG');
                        //  //console.log(dataImg);

                    }
                } catch (error) {
                    setLoadding(false);
                    console.error("error", error);
                     //console.log("catch error")
                }
            };

        //     postData();
        // } else {
        //     setError("You have to be logged in");
        //     router.push("/signin");
        // }
    };

    return (
        <>
            {loadding ? (<>
                <Loader />
            </>) : <>

                <form
                    className="w-[50%] mobile:w-[90%] mx-auto shadow-lg bg-white p-7 mt-10 mobile:mt-16 mb-10  rounded-lg"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <div
                            className="p-4 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                            role="alert"
                        >
                            <span className="font-medium"> {error}</span>
                        </div>
                    )}
                    <div className="mb-6 text-2xl text-center font-bold">
                        {t("Publishnewitem")}
                    </div>






                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="title"
                            >
                                {t("productname")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.title ? " border-red-500" : ""
                                    }`}
                                id="title"
                                type="text"
                                value={regexExp.test(title) ? '' : title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs italic">{errors.title}</p>
                            )}
                        </div>
                        <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="price"
                            >
                                {t("Price")}
                            </label>

                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.price ? " border-red-500" : ""
                                }`}
                                id="price"
                                defaultValue={price}
                                
                                // onChange={(event) => setPrice(event.target.value)}
                                onChange={(event) => setPrice(event.target.value)}

                                />
                            {/* <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.price ? " border-red-500" : ""
                                    }`}
                                id="price"
                                type="number"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            /> */}
                            {errors.price && (
                                <p className="text-red-500 text-xs italic">{errors.price}</p>
                            )}
                        </div>
                    </div>






                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">

                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="currency"
                            >
                                {t("Currency")}
                            </label>
                            <select
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.currency ? " border-red-500" : ""
                                    }`}
                                id="currency"
                                value={currency}
                                onChange={(event) => setCurrency(event.target.value)}
                            >
                                <option value="" disabled>
                                    {t("SelectAcurrency")}
                                </option>
                                <option value="USD">USD</option>
                                <option value="IQD">IQD</option>
                            </select>
                            {errors.currency && (
                                <p className="text-red-500 text-xs italic">{errors.currency}</p>
                            )}
                        </div>



                        <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="status"
                            >
                                {t("Status")}
                            </label>
                            <select
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.status ? " border-red-500" : ""
                                    }`}
                                id="status"
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option value="" disabled>
                                    {t("SelectAstatus")}
                                </option>
                                <option value="NEW">{t("New")}</option>
                                <option value="USED">{t("Used")}</option>
                                <option value="SOLD">{t("Sold")}</option>
                            </select>
                            {errors.status && (
                                <p className="text-red-500 text-xs italic">{errors.status}</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="location"
                            >
                                {t("Location")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.location ? " border-red-500" : ""
                                    }`}
                                id="location"
                                type="text"
                                value={location}
                                onChange={(event) => setLocation(event.target.value)}
                            />
                            {errors.location && (
                                <p className="text-red-500 text-xs italic">{errors.location}</p>
                            )}
                        </div>
                        <div className="mb-3  2xl:flex 2xl:justify-center  mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="phone"
                            >
                                {t("Phone Number")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.title ? " border-red-500" : ""
                                    }`}
                                id="phone"
                                type="text"
                                value={phone}
                                onChange={(event) => 
                                {
                                    setPhone(event.target.value);
                                    if (event.target.value.length < 10) {
                                        setIsError(true);
                                       
                                        }else{
                                            setIsError(false);
                                        }
                                    }
                                }
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs italic">{errors.phone}</p>
                            )}
                            {errors.phoneLength && (
                                <p className="text-red-500 text-xs italic">{errors.phoneLength}</p>
                            )}
                        </div>
                    </div>


                    <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:ml-5 2xl:flex-col 2xl:w-[45%]">
                        <label
                            className="block font-medium mb-2 text-gray-700"
                            htmlFor="category"
                        >
                            {t("Category")}
                        </label>
                        <select
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left ${errors.currency ? " border-red-500" : ""
                                }`}
                            id="category"
                            value={category}
                            onChange={handleCategoryChange}
                        >
                            {categoryList.length > 0 ? (
                                <>
                                    <option value="" >
                                        {t("SelectACategory")}

                                    </option>
                                    {categoryList.map((category) => (
                                        <option value={category._id} key={category._id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </>
                            ) : (
                                <></>
                            )}
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-xs italic">{errors.category}</p>
                        )}
                    </div>



                    {requiredFields && (
                        <>
                            
                            <div className={`flex flex-wrap ${requiredFields.length % 2 === 1 ? "justify-end" : ""}`}>
                                {requiredFields.map((cat, index) => (
                                    <div key={index} className={`w-[45%] mobile:w-[100%] mb-3 ${index === requiredFields.length - 1 && requiredFields.length % 2 === 1 ? "mr-auto ml-4 mobile:mx-auto" : "mx-auto"}`}>
                                        <label className="block font-medium mb-2 text-gray-700" htmlFor={cat}>
                                            {t(`${cat}`)}
                                        </label>
                                        <input
                                            className={`border w-full border-gray-500 p-3 rounded-md focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left`}
                                            id={cat}
                                            type="text"
                                            name={cat}
                                            onChange={(e) =>
                                                setInputValues({ ...inputValues, [cat]: e.target.value })
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}






                    <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[95%]">
                        <label
                            className="block font-medium mb-2 text-gray-700"
                            htmlFor="details"
                        >
                            {t("details")}
                        </label>
                        <textarea
                            className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left${errors.details ? " border-red-500" : ""
                                }`}
                            id="details"
                            value={details}
                            onChange={(event) => setdetails(event.target.value)}
                        />
                        {errors.details && (
                            <p className="text-red-500 text-xs italic">{errors.details}</p>
                        )}
                    </div>
                    <div className="mb-3  2xl:flex 2xl:justify-between  2xl:mx-auto  2xl:w-[100%]">
                        <div className="mb-3  2xl:flex 2xl:justify-center  2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <label
                                className="block font-medium mb-2 text-gray-700"
                                htmlFor="images"
                            >
                                {t("Images")}
                            </label>
                            <input
                                className={`border w-full border-gray-500 p-3 rounded-md  focus:border-[#f1b51f] focus:shadow-md focus:outline-none text-left${errors.images ? " border-red-500" : ""
                                    }`}
                                id="images"
                                type="file"
                                multiple
                                onChange={(event)=>handleFileChange(event)}
                            />
                            {errors.images && (
                                <p className="text-red-500 text-xs italic">{errors.images}</p>
                            )}
                        </div>
                        <div className="mb-3 2xl:flex 2xl:justify-center 2x:litems-start 2xl:mx-auto 2xl:flex-col 2xl:w-[45%]">
                            <div>
                                <label
                                    className="block font-medium mb-2 text-gray-700"
                                    htmlFor="isOwner"
                                >
                                    {t("Areyoutheownerofthisitem")}
                                </label>
                                       {/* start toggle switcher */}
                        <div className="">
                        <div className="flex">
                            <label className="inline-flex relative items-center mr-5 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only peer"
                                    checked={isOwner}
                                    readOnly
                                />
                                <div
                                    onClick={() => {
                                        setIsOwned(!isOwner); 
                                    }}
                                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                                ></div>
                               
                            </label>
                        </div>
                    </div>
                   {/* end toggle switcher */}
                                {/* <input
                                    className=" mt-1"
                                    id="isOwner"
                                    type="checkbox"
                                    checked={isOwner}
                                    onChange={(event) => setIsOwned(event.target.checked)}
                                /> */}
                            </div>
                        </div>
                    </div>

                    <button
                        className="bg-[#f1b51f] hover:bg-[#b8ae00] mobile:w-full mobile:mx-auto text-[#1c505e] font-bold   py-3 ml-4 px-4 rounded"
                        type="submit"
                    >
                        {t("Publish")}
                    </button>
                </form>
            </>}


        </>
    );
};

export default ItemForm;
