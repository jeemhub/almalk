import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
    const router = useRouter();

    const getPathSegments = () => {
        const path = router.asPath;
        const segments = path.split('/').filter(segment => segment !== '');
      
        return segments.map((segment, index) => {
          let href = '';
          let name = '';
          
          if (/^[A-Za-z]+$/.test(segment)) {
            href = `/${segments.slice(0, index + 1).join('/')}`;
            name = segment;
          } else {
            href = 'home';
            name = null;
          }
          
          return { name, href };
        });
      };
      

    const pathSegments = getPathSegments();

    return (
        <div>
            {/* {pathSegments.map((segment, index) => (
                <span key={index}>
                    <Link href={segment.href}>
                        <a>{segment.name}</a>
                    </Link>
                    {index < pathSegments.length - 1 && ' > '}
                </span>
            ))}
         */}


            <div className='w-full bg-[#f2f2f2] h-[35px] shadow-lg p-2'>
                <div className='w-[1120px] mobile:w-full mx-auto'>
                    <ol className='flex'>


                        {pathSegments.map((segment, index) => (


                            <li key={index}>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00339f" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    <Link  href={segment.href}>
                                    <a className='text-xs text-[#00339f] mr-2'>{segment.name}</a>
                                    </Link>
                                    

                                </div>

                            </li>


                            // <span key={index}>
                            //     <Link href={segment.href}>
                            //         <a>{segment.name}</a>
                            //     </Link>
                            //     {index < pathSegments.length - 1 && ' > '}
                            // </span>
                        ))}

                        {/* <li>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00339f" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>

                                <span className='text-xs text-[#00339f] mr-2'>Home Page</span>
                            </div>

                        </li>
                        <li>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00339f" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                <span className='text-xs text-[#00339f]  mr-2'>Real Estate</span>
                            </div>

                        </li>
                        <li>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00339f" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                <span className='text-xs text-[#00339f]  mr-2'>Plot</span>
                            </div>

                        </li>

                        <li>
                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00339f" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                <span className='text-xs text-[#00339f]  mr-2'>For sale</span>
                            </div>

                        </li> */}
                    </ol>


                </div>
            </div>


                                

        </div>
    );
};

export default Breadcrumbs;
