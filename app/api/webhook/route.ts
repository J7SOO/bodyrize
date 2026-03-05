import Stripe from "stripe"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import fs from "fs"
import path from "path"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request){

const body = await req.text()

const sig = req.headers.get("stripe-signature")!

const event = stripe.webhooks.constructEvent(
body,
sig,
process.env.STRIPE_WEBHOOK_SECRET!
)

if(event.type === "checkout.session.completed"){

const session:any = event.data.object

const email = session.customer_email

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
}

})

let programme = "prise-salle.pdf"

const filePath = path.join(process.cwd(),"public","programmes",programme)

await transporter.sendMail({

from:"BodyRize",

to:email,

subject:"Ton programme BodyRize 🔥",

text:"Merci pour ton achat ! Voici ton programme.",

attachments:[
{
filename:"programme-bodyrize.pdf",
path:filePath
}
]

})

}

return NextResponse.json({received:true})

}