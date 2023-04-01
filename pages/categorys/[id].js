import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { useTranslation } from "react-i18next";

const ItemList = ({}) => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const ids = router.query.id;
  // const cat = router.query.cat
console.log('ids :',ids)
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    if (ids) {
      // const response = await axios.get(`${process.env.API_URL}/items/category/${ids}/${page}`);
      // setItems(response.data);
      const res=await fetch(`http://ap.almalk.org:3000/items/category/${ids}/${page}`);
      const data=await res.json()
      console.log('data :',data)
      setItems(data);
      console.log('items :',items)
    }
    // if (cat) {
    //   const get_user = await axios.get(`${process.env.API_URL}/items/user/63f66fdcdbeb74a1c13c8e1a`)
    //   setItems(get_user.data);
    // }
    setLoading(false);
  };
  fetchData();
}, [page, ids]);


// function handleClicked(title,images,details,price,currency,location,isOwner,statuss,createdAt,requiredFields) {
//   router.push({
//     pathname: '/adsproduct',
//     query: {
//       title: title,
//       images: images,
//       details: details,
//       price: price,
//       currency:currency,
//       location:location,
//       isOwner:isOwner,
//       status:statuss,
//       createdAt:createdAt,
//       requiredFields:requiredFields
//     }
    
//   })
// }


  return (
    <>
    {/* <Header /> */}
    {loading ? (
      <div className="flex items-center justify-center h-64">
        <div className="text-center text-2xl text-gray-500">{t("Loading")}</div>
      </div>
    ) : (
        <>
        <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="bg-white px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="bg-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
            <th className="bg-white px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
            onClick={()=> router.push(`/adsproduct/${item._id}`)}
            key={item._id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                src={item.images[0]}
                alt={item.title}
                  className="h-12 w-12 object-contain"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap"><a href={`/adsproduct/${item._id}`}>{item.title}</a></td>
              <td className="px-6 py-4 whitespace-nowrap">
              {item.details}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.price} {item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </>
        )}
    <div className='flex mt-8 mb-10'>
      <div className="flex space-x-3 mx-auto">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
          disabled={page === 1}
        >
          {t("PrevPage")}
        </button>
        <button
          onClick={() => items.length === 20 && setPage(page + 1)}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("NextPage")}
        </button>
      </div>
    </div>
</>
  );
};

export default ItemList;
