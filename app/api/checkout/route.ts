import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {

const { formule } = await req.json()

let price = 0
let name = ""
let description = ""

if(formule === "bodyrize"){
price = 999
name = "Programme BODYRIZE"
description = "Programme d'entraînement personnalisé"
}

if(formule === "bodyboost"){
price = 1599
name = "Programme BODYBOOST"
description = "Programme + nutrition personnalisée"
}

const session = await stripe.checkout.sessions.create({

payment_method_types:["card"],

line_items:[
{
price_data:{
currency:"eur",
product_data:{
name:name,
description:description,
images:["https://bodyrize.fr/logo.png"]
},
unit_amount:price
},
quantity:1
}
],

mode:"payment",

success_url:`${process.env.NEXT_PUBLIC_URL}/success?formule=${formule}`,

cancel_url:`${process.env.NEXT_PUBLIC_URL}/formules`

})

return NextResponse.json({url:session.url})

}