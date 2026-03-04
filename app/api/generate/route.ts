import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import fs from "fs"
import path from "path"
import puppeteer from "puppeteer"

export async function POST(req: Request) {

const data = await req.json()

const id = Date.now()

const html = `
<html>
<head>

<style>

body{
font-family:Arial;
background:#eeeeee;
padding:20px;
}

.container{
background:white;
padding:40px;
max-width:800px;
margin:auto;
}

.logo{
text-align:center;
margin-bottom:20px;
}

.logo img{
width:120px;
}

.title{
text-align:center;
font-size:32px;
font-weight:bold;
margin-bottom:20px;
}

.info{
text-align:center;
margin-bottom:30px;
}

.day{
background:#c40000;
color:white;
padding:10px;
font-weight:bold;
margin-top:30px;
}

.exercise{
display:flex;
gap:20px;
margin-top:15px;
align-items:center;
}

.exercise img{
width:110px;
}

.exercise-title{
font-weight:bold;
font-size:18px;
}

</style>

</head>

<body>

<div class="container">

<div class="logo">
<img src="http://localhost:3000/logo/logo.png"/>
</div>

<div class="title">
Programme BODYRIZE
</div>

<div class="info">
<strong>${data.nom}</strong><br>
Objectif : ${data.objectif}<br>
Niveau : ${data.niveau}<br>
Séances : ${data.seances}
</div>


<div class="day">Lundi — Pecs / Dos</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/pecs/developer-coucher.png"/>
<div>
<div class="exercise-title">Développé couché</div>
4 séries — 8 reps
</div>
</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/dos/traction.png"/>
<div>
<div class="exercise-title">Tractions</div>
4 séries — 8 reps
</div>
</div>


<div class="day">Mardi — Bras / Épaules</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/bras/curl-barre.png"/>
<div>
<div class="exercise-title">Curl barre</div>
4 séries — 10 reps
</div>
</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/epaule/elevation-laterale.png"/>
<div>
<div class="exercise-title">Élévation latérale</div>
4 séries — 12 reps
</div>
</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/epaule/elevation-posterieure.png"/>
<div>
<div class="exercise-title">Élévation postérieure</div>
4 séries — 12 reps
</div>
</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/epaule/oiseau-poulie.png"/>
<div>
<div class="exercise-title">Oiseau poulie</div>
4 séries — 12 reps
</div>
</div>


<div class="day">Jeudi — Jambes / Cardio</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/jambe/squat.png"/>
<div>
<div class="exercise-title">Squat</div>
4 séries — 10 reps
</div>
</div>

<div class="exercise">
<img src="http://localhost:3000/exercices/cardio/tapis.png"/>
<div>
<div class="exercise-title">Course tapis</div>
15 minutes
</div>
</div>

</div>

</body>
</html>
`

const browser = await puppeteer.launch()

const page = await browser.newPage()

await page.setContent(html)

const pdf = await page.pdf({
format:"A4",
margin:{top:"20px",bottom:"20px",left:"20px",right:"20px"}
})

await browser.close()

const filePath = path.join(process.cwd(),"public","programmes",`programme-${id}.pdf`)

fs.writeFileSync(filePath,pdf)

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS
},

tls:{
rejectUnauthorized:false
}

})

await transporter.sendMail({

from:`BODYRIZE <${process.env.EMAIL_USER}>`,
to:data.email,
subject:"Ton programme BODYRIZE 🔥",

html:`

<h2>Ton programme est prêt 💪</h2>

<a href="http://localhost:3000/programmes/programme-${id}.pdf">
Télécharger ton programme
</a>

`

})

return NextResponse.json({success:true})

}