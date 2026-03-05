import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

const body = await req.json()

const email = body.email
const objectif = body.objectif

let programme = ""

if (objectif === "prise") {
programme = "prise-masse-salle.pdf"
}

if (objectif === "perte") {
programme = "perte-poids-salle.pdf"
}

await resend.emails.send({
from: "Bodyrize <contact@bodyrize.fr>",
to: email,
subject: "Ton programme Bodyrize 💪",
html: "<h2>Ton programme est prêt 💪</h2>",
attachments: [
{
filename: programme,
path: `./programmes/${programme}`
}
]
})

return Response.json({ success: true })

}