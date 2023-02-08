const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { items } = req.body
    
    const transformeditems = items.map(item => ({
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image], 
            },
        }
        
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 0,
                  currency: 'usd',
                },
                display_name: 'Free shipping',
                // Delivers between 5-7 business days
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 5,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 7,
                  },
                }
              }
            },
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 1500,
                  currency: 'usd',
                },
                display_name: 'Next day air',
                // Delivers in exactly 1 business day
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 1,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 1,
                  },
                }
              }
            },
          ],
        shipping_address_collection: {
            allowed_countries: ["US"],
        },
        line_items: transformeditems,
        mode: 'payment',
        success_url: `${process.env.HOST}`,
        cancel_url: `${process.env.HOST}/checkout`,
    })

    res.status(200).json({ id: session.id })
}