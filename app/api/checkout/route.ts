import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request){

const data = await req.json()

const { formule,email } = data

let price = 1299

if(formule === "premium"){
price = 1795
}

const session = await stripe.checkout.sessions.create({

payment_method_types:["card"],

line_items:[
{
price_data:{
currency:"eur",
product_data:{
name: formule === "premium"
? "Programme BodyRize + Nutrition"
: "Programme BodyRize"
},
unit_amount:price
},
quantity:1
}
],

mode:"payment",

success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
cancel_url:  `${process.env.NEXT_PUBLIC_SITE_URL}`,

customer_email:email,

})

return NextResponse.json({url:session.url})

}