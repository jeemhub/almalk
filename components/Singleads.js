import Link from 'next/link';

const Singleads = ({ imageUrl, title, price, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col max-w-xl min-w-16 max-h-xl min-h-md">
      <img src={imageUrl} alt={title} className="mb-4 rounded-md " />
      <div className='px-4 w-full flex flex-col h-full flex flex-col'>
    
      {/* <Link href={`/singleads/645bf91f2cf7b90b0f71e600`}>
        <a className="text-black bg-white w-full border border-solid border-2 hover:bg-[#f2e719] hover:text-black hover:font-bold  cursor-pointer  px-4 py-2 rounded text-center self-end ">
          View Details
        </a>
      </Link> */}
      </div>
      <h3 className="text-xl font-semibold mb-2 cursor-default">{title}</h3>
      <p className="text-gray-600 mb-4 cursor-default font-medium text-green-700">{price}</p>
    <Link href={`/info/${id}`}>
      <a className='text-black bg-white w-full border border-solid border-2 hover:bg-[#f2e719] hover:text-black hover:font-bold  cursor-pointer  px-4 py-2 text-center '>
      View Details
      </a>
    </Link>
    </div>
  );
};

export default Singleads;