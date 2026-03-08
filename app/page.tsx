"use client"

import { useState } from "react"

export default function Home() {

const [email,setEmail] = useState("")
const [objectif,setObjectif] = useState("")

async function envoyerProgramme(){

await fetch("/api/send-programme",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email,
objectif:objectif
})
})

window.location.href="https://buy.stripe.com/8x29AT1nH3Pc5AYcbw6kg00"

}

return (

<div style={{
minHeight:"100vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
background:"black",
color:"white",
gap:"25px",
fontFamily:"Arial"
}}>

<h1 style={{
fontSize:"48px",
fontWeight:"bold",
color:"#ff2d2d"
}}>
BODYRIZE
</h1>

<p style={{fontSize:"18px"}}>
Transforme ton corps avec un programme personnalisé
</p>

<input
type="email"
placeholder="Ton email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
padding:"14px",
borderRadius:"10px",
border:"none",
width:"260px"
}}
/>

<select
value={objectif}
onChange={(e)=>setObjectif(e.target.value)}
style={{
padding:"14px",
borderRadius:"10px",
border:"none",
width:"260px"
}}
>

<option value="">Choisir ton objectif</option>
<option value="perte">Perte de poids</option>
<option value="prise">Prise de masse</option>

</select>

<button
onClick={envoyerProgramme}
style={{
padding:"16px 35px",
background:"#ff2d2d",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
fontSize:"16px",
cursor:"pointer"
}}
>

Générer mon programme

</button>

</div>

)

}