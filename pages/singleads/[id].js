import  {useRouter}  from "next/router"
import Head from "next/head";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default (props) => {
    const router=useRouter();
    function getById(id,data){
        for(let i=0;i<data.length;i++){
            if(data[i]._id==id){
                return data[i];
            }
        }
    }
    var slider=getById(router.query.id,props.Slider)

    return (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>

    
            <div className="h-auto w-full overflow-hidden  flex flex-col items-center">
                {console.log(slider)}
                <div className=" h-auto w-100% rounded-md flex justify-center flex-col ">
                    <img className='object-fill rounded-md w-full' src={slider.images[0]}/>
                <h1 className='font-bold text-xl md:text-2xl xl:text-3xl p-4 self-end'>{slider.title}</h1>
                <p className='text-lg xl:text-2xl md:text-xl p-4 self-end '>{slider.details}</p>
                <div className='flex flex-row text-xl font-bold text-blue-600 p-4 self-end'>
                    <h3>{slider.location}</h3>
                </div>
                <h4 className='text-xl font-bold text-green-600 p-4 self-end'>{slider.price}د.ع</h4>
                </div>
          </div>
          </main>
        </>
      );
    }
    export async function getServerSideProps(context) {
       
        const resSlider=await fetch('http://app.almalk.org:3000/diamond-ads');
        const dataSlider=await resSlider.json();
       
      return {
        props: {
          Slider:dataSlider.diamondAds,
        }, // will be passed to the page component as props
      }
    }
