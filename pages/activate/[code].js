// pages/activate.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ActivatePage = () => {
  const router = useRouter();
  const code = router.query.code;

//   useEffect(() => {
//     const activateAccount = async () => {
//       const response = await fetch('/api/activate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ uid, token }),
//       });

//       if (response.status === 204) {
//         alert('Account activation successful');
//         router.push('/');
//       } else {
//         // Handle other response statuses or error conditions
//       }
//     };

//     if (uid && token) {
//       activateAccount();
//     }
//   }, [uid, token, router]);

  return (<>
 
  </>); // This page doesn't need any visible content
};

export default ActivatePage;
