import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Productfeed from '../components/Productfeed'
import Homeproducts from '../components/Homeproducts'
import Signin from '../components/Signin'
import Onecateg from './../components/Onecateg';
import Productslider from './../components/Productslider';


export default function Home( { electroniccat, jewelerycat, electroniccatnolim } ) {
  console.log(electroniccatnolim)
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Almalek</title>
        
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        {/* Banner */}
        <Banner />
        {/* home products */}
        
        {/* mobile banner cat */}
          {/* <div className='tablet:hidden flex flex-nowrap overflow-x-scroll gap-0 scrollbar-hide z-40 -mt-[50px] md:-mt-[150px]'>
          <Homeproducts electroniccat={ electroniccat } click={'/categorys/electronics'} typename={"Pc accessories"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ electroniccat } typename={"Pc accessories"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          <Homeproducts electroniccat={ jewelerycat } typename={"Jewelery categures"} />
          </div>
          <div className='tablet:hidden'>
            <Signin />
          </div> */}



      
    {/* pc banner cat */}
    {/* <div className='hidden tablet:grid grid-cols-4 mt-20 gap-4 ml-5 mr-7 tablet:-mt-[100px] lg:-mt-[100px] xl:-mt-[100px]'>
        <Homeproducts electroniccat={ electroniccat } typename={"Pc accessories"} />
        <Homeproducts electroniccat={ jewelerycat } typename={"Shop by Category"} />
        <Onecateg typename={"dress"} title={"Shop now"} src={'/Images/dress.webp'} />
        <Signin />
        
    </div> */}


    {/* pc cat */}
    {/* <div className='hidden tablet:grid grid-cols-4 mt-5 gap-4 ml-5 mr-7'>
        <Onecateg typename={"Electronics"} linked={"/categorys/electronics"} title={"Shop now"} src={'/Images/electronics.webp'} />
        <Onecateg typename={"Tablets"} linked={"/categorys/tablets"} title={"See now"} src={'/Images/tablets.jpg'} />
        <Onecateg typename={"Mobiles"} linked={"/categorys/mobiles"} title={"See all deals"} src={'/Images/mobiles.jpg'} />
        <Onecateg typename={"Headphones"} linked={"/categorys/Headphones"} title={"Shop now"} src={'/Images/headphones.jpg'} />
    </div> */}
    {/* mobile slide cat */}
    {/* <div className='flex overflow-x-scroll scrollbar-hide tablet:hidden mt-5 gap-4 ml-5 mr-7 z-40'>
        <Onecateg typename={"Electronics"} linked={"/categorys/electronics"} title={"Shop now"} src={'/Images/electronics.webp'} />
        <Onecateg typename={"Tablets"} linked={"/categorys/tablets"} title={"See now"} src={'/Images/tablets.jpg'} />
        <Onecateg typename={"Mobiles"} linked={"/categorys/mobiles"} title={"See all deals"} src={'/Images/mobiles.jpg'} />
        <Onecateg typename={"Headphones"} linked={"/categorys/Headphones"} title={"Shop now"} src={'/Images/headphones.jpg'} />
    </div> */}
    {/*slide items */}
    
    
    {/* pc slide cat */}
    
    {/*slide items */}
    <div>
      
    {electroniccatnolim.map((categoryData, index) => {
        return (
         <Productslider key={index} electroniccat={categoryData} title={`${categoryData.category}`} />
          
        );
      })}
    </div>
    {/* <Productslider electroniccat={electroniccatnolim} title={"Highest rating all the time"} /> */}
    
    {/* pc cat */}
    
    {/* slide items */}
    {/* <Productslider electroniccat={electroniccatnolim} title={"Top seeling in Home"} />
    <Productslider electroniccat={electroniccatnolim} title={"Top repurchased"} />
    <Productslider electroniccat={electroniccatnolim} title={"Inspired by your browsing history"} /> */}


    
              
              
  
        
        
        
        
        
        
        
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const products = await fetch('https://fakestoreapi.com/products').then(
  (res) => res.json()
  )

  const electroniccat = await fetch('https://fakestoreapi.com/products/category/electronics?limit=4').then(
    (res) => res.json()
  )

  

  const electroniccatnolim = await fetch('http://ec2-52-23-248-118.compute-1.amazonaws.com:3000/home').then(
    (res) => res.json()
    
  )

  const jewelerycat = await fetch('https://fakestoreapi.com/products/category/jewelery?limit=4').then(
    (res) => res.json()
  )

  return { props: {
    products,
    electroniccat,
    jewelerycat,
    electroniccatnolim,
    
  }}

}
