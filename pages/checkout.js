import React from 'react'
import Header from './../components/Header';
import { useSelector } from 'react-redux';
import { selectItems } from './../slice/cartSlice';
import Checkoutproduct from './../components/Checkoutproduct';
import { useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import axios from 'axios'
function Checkout() {
    const stripePromise = loadStripe(process.env.stripe_public_key);
    const items = useSelector(selectItems)
    let totalprice = 0
    const totals = () => {
    {items.map((item, i) => (
        totalprice += item.price
    ))}
    }
    totals()
    const createcheckout = async () => {
        const stripe = await stripePromise

        const checkoutsession = await axios.post('/api/auth/create-checkout-session', {
            items: items
        })


        const result = await stripe.redirectToCheckout({
            sessionId: checkoutsession.data.id
    })
    
    if(result.error) {
        alert(result.error.message)
    }

    }


  return (
    <div className='bg-[#EAEDED] h-[100vh]'>
        <Header />
        <main className='lg:flex'>
            <div className='flex-grow tablet:m-5 shadow-sm w-[100%] tablet:w-[80%]'>
            <div className='flex flex-col p-5 space-y-5 bg-[#fff]'>
                <h1 className='text-3xl'>{items.length === 0 ? "Your Amazon Cart is empty." : "Shopping Cart"}</h1>
                <div className='text-end text-sm mb-0 text-[#565959] font-semibold border-b border-b-[#DDD]'>Price</div>

                    {items.map((item, i) => (
                        <Checkoutproduct 
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            
                        />
                    ))}
            </div>
            </div>
            <div className='flex flex-grow m-5 shadow-sm h-full'>
            <div className='flex flex-col mx-auto p-5 space-y-10 bg-[#fff]'>
            <div className='text-[#0f1111] text-lg'> 
            Subtotal ({items.length} items):
                <div className='font-bold inline-block ml-1'>${totalprice.toFixed(2)}</div>
            </div>
        <div className="left-0 right-0">
        
        <button role={"link"} onClick={createcheckout} className='mt-5 h-10 flex mx-auto button w-full bg-[#FFD814] border-[#FCD200] hover:bg-[#FCD200] cursor-pointer'><div className='mx-auto text-lg tablet:text-base'>Proceed to checkout</div></button>
        
        </div>
            </div>
            </div>
        </main>
        
    </div>
  )
}

export default Checkout