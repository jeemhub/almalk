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
  const cat = router.query.cat
console.log(ids)
useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    if (ids) {
      const response = await axios.get(`${process.env.API_URL}/items/category/${ids}/${page}`);
      setItems(response.data);
    }
    if (cat) {
      const get_user = await axios.get(`${process.env.API_URL}/items/user/63f66fdcdbeb74a1c13c8e1a`)
      setItems(get_user.data);
    }
    setLoading(false);
  };
  fetchData();
}, [page, ids, cat]);


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
    <Header />
    {loading ? (
      <div className="flex items-center justify-center h-64">
        <div className="text-center text-2xl text-gray-500">{t("Loading")}</div>
      </div>
    ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
      {items.map(item => (
        <div key={item._id} className="bg-white rounded-lg shadow-lg p-6" onClick={()=> router.push(`/adsproduct/${item._id}`)}>
          <img className="h-48 w-full object-cover object-center" src={item.images[0]} alt={item.title} />
          <h2 className="mt-2 text-lg font-medium leading-tight text-gray-800"> <a href={`/adsproduct/${item._id}`}>{item.title}</a></h2>
          <p className="mt-2 text-sm font-medium text-gray-700 truncate">{item.details}</p>
          <p className="mt-2 text-sm font-medium text-indigo-500">{item.price} {item.currency}</p>
          
        </div>
      ))}
     
    </div>
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
