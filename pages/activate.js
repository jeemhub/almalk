import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ActivatePage = () => {
  const router = useRouter();

  useEffect(() => {
    const { uid, token } = extractUidAndToken();

    const activateAccount = async () => {
      if (uid && token) {
        const response = await fetch('https://almalik-application.onrender.com/api/users/activation/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
          "uid":uid , 
          "token":token 
        }),
        });

        if (response.status === 204) {
          alert('Account activation successful');
          router.push('/');
        } else {
          alert('Account activation failed');
          // Handle other response statuses or error conditions
        }
      } else {
        alert('Invalid activation URL');
      }
    };

    activateAccount();
  }, [router]);

  const extractUidAndToken = () => {
    const urlParts = router.asPath.split('http://localhost:3000//activate/')[1].split('/');
    const uid = urlParts[0];
    const token = urlParts[1];
     //console.log(uid)
     //console.log(token)
    return { uid, token };
  };

  return null; // This page doesn't need any visible content
};

export default ActivatePage;
