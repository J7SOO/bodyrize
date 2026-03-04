"use client"

import { useState } from "react"

export default function Formules() {

const [hover,setHover] = useState<number | null>(null)

const payer = async (formule:string)=>{

const res = await fetch("/api/checkout",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({formule})
})

const data = await res.json()

window.location.href = data.url

}

return (

<main
style={{
minHeight:"100vh",
backgroundImage:"url('/hero.jpg')",
backgroundSize:"cover",
backgroundPosition:"center",
padding:"140px 20px",
fontFamily:"Impact, Arial Black, sans-serif"
}}
>

<div
style={{
maxWidth:"1200px",
margin:"auto",
textAlign:"center",
color:"white"
}}
>

<h1
style={{
fontSize:"60px",
letterSpacing:"5px",
marginBottom:"20px",
textShadow:"0 0 20px rgba(255,0,0,0.7)"
}}
>
CHOISIS TA FORMULE
</h1>

<p
style={{
opacity:"0.9",
marginBottom:"80px",
fontSize:"20px"
}}
>
Transforme ton corps avec un programme BODYRIZE adapté à ton objectif.
</p>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
gap:"40px"
}}
>

{/* BODYRIZE */}

<div
onMouseEnter={()=>setHover(1)}
onMouseLeave={()=>setHover(null)}
style={{
background:"rgba(0,0,0,0.85)",
border:"1px solid #2a2a2a",
borderRadius:"16px",
padding:"45px",
textAlign:"center",
transition:"all 0.35s ease",
transform:hover===1?"scale(1.05)":"scale(1)",
boxShadow:hover===1?"0 0 40px rgba(255,0,0,0.5)":"none"
}}
>

<h2 style={{fontSize:"36px",marginBottom:"20px"}}>
BODYRIZE
</h2>

<p style={{marginBottom:"30px"}}>
Programme d'entraînement personnalisé selon ton objectif.
</p>

<ul style={{listStyle:"none",padding:"0",marginBottom:"35px"}}>

<li>Programme personnalisé</li>
<li>Plan d'entraînement détaillé</li>
<li>PDF envoyé par email</li>

</ul>

<button
onClick={()=>payer("bodyrize")}
style={{
padding:"16px 40px",
fontSize:"18px",
fontWeight:"800",
background:"linear-gradient(90deg,#ff0000,#b30000)",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer",
boxShadow:"0 8px 25px rgba(255,0,0,0.6)"
}}
>

Choisir cette formule

</button>

</div>


{/* BODYBOOST */}

<div
onMouseEnter={()=>setHover(2)}
onMouseLeave={()=>setHover(null)}
style={{
background:"rgba(0,0,0,0.9)",
border:"2px solid #ff0000",
borderRadius:"16px",
padding:"45px",
textAlign:"center",
position:"relative",
transition:"all 0.35s ease",
transform:hover===2?"scale(1.07)":"scale(1)",
boxShadow:hover===2?"0 0 50px rgba(255,0,0,0.7)":"none"
}}
>

<div
style={{
position:"absolute",
top:"-15px",
left:"50%",
transform:"translateX(-50%)",
background:"#ff0000",
padding:"6px 18px",
borderRadius:"20px",
fontSize:"14px",
fontWeight:"700"
}}
>
POPULAIRE
</div>

<h2 style={{fontSize:"36px",marginBottom:"20px"}}>
BODYBOOST
</h2>

<p style={{marginBottom:"30px"}}>
Programme complet BODYRIZE avec nutrition adaptée.
</p>

<ul style={{listStyle:"none",padding:"0",marginBottom:"35px"}}>

<li>Programme personnalisé</li>
<li>Plan nutrition adapté</li>
<li>PDF détaillé envoyé par email</li>
<li>Progression optimisée</li>

</ul>

<button
onClick={()=>payer("bodyboost")}
style={{
padding:"16px 40px",
fontSize:"18px",
fontWeight:"800",
background:"linear-gradient(90deg,#ff0000,#b30000)",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer",
boxShadow:"0 8px 25px rgba(255,0,0,0.7)"
}}
>

Choisir cette formule

</button>

</div>

</div>

</div>

</main>

)

}