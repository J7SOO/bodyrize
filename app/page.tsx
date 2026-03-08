"use client"

import { useState } from "react"

export default function Home() {

const [menu,setMenu] = useState(false)
const [faq,setFaq] = useState<number | null>(null)

return (

<>
<main
style={{
height:"100vh",
backgroundImage:"url('/hero.jpg')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
alignItems:"center",
justifyContent:"center",
position:"relative",
fontFamily:"Impact, Arial Black, sans-serif"
}}
>

<div
style={{
position:"fixed",
top:"30px",
left:"50%",
transform:"translateX(-50%)",
width:"90%",
maxWidth:"1100px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"18px 40px",
background:"rgba(0,0,0,0.65)",
backdropFilter:"blur(10px)",
borderRadius:"14px",
color:"white",
zIndex:1000
}}
>

<div style={{position:"relative"}}>

<div
style={{
cursor:"pointer",
fontSize:"20px",
fontWeight:"800",
letterSpacing:"3px"
}}
onMouseEnter={()=>setMenu(true)}
> 
MENU▾
</div>

{menu && (

<div
style={{
position:"absolute",
top:"60px",
left:"0",
background:"rgba(0,0,0,0.95)",
padding:"25px",
borderRadius:"12px",
display:"flex",
flexDirection:"column",
gap:"18px",
minWidth:"220px",
boxShadow:"0 10px 40px rgba(0,0,0,0.7)"
}}
onMouseLeave={()=>setMenu(false)}
>

<a href="/formules" style={{color:"white",textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>FORMULES</a>
<a href="/accessoires" style={{color:"white",textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>ACCESSOIRES</a>
<a href="/apropos" style={{color:"white",textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>À PROPOS</a>
<a href="/contact" style={{color:"white",textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>CONTACT</a>

</div>

)}

</div>

<div
style={{
fontSize:"28px",
fontWeight:"900",
letterSpacing:"4px",
textShadow:"0 0 10px rgba(255,0,0,0.6)"
}}
> 
BODYRIZE
</div>

</div>

<div
style={{
position:"absolute",
inset:0,
background:"rgba(0,0,0,0.55)"
}}
/>

<div
style={{
position:"relative",
textAlign:"center",
color:"white"
}}
>

<h1
style={{
fontSize:"clamp(70px,9vw,120px)",
fontWeight:"900",
letterSpacing:"8px",
marginBottom:"10px",
textShadow:"0 0 25px rgba(255,0,0,0.8)"
}}
> 
BODYRIZE
</h1>

<p
style={{
fontSize:"28px",
letterSpacing:"4px",
opacity:0.9
}}
> 
TRANSFORMETON CORPS
</p>

<a href="https://buy.stripe.com/8x29AT1nH3Pc5AYcbw6kg00">

<button
style={{
marginTop:"40px",
padding:"20px 45px",
fontSize:"22px",
fontWeight:"900",
background:"linear-gradient(90deg,#ff0000,#b30000)",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer",
boxShadow:"0 10px 35px rgba(255,0,0,0.7)",
letterSpacing:"2px"
}}
>

GÉNÉRER MON PROGRAMME

</button>

</a>

</div>

</main>

<section
style={{
background:"#0a0a0a",
color:"white",
padding:"120px 20px"
}}
>

<h2
style={{
textAlign:"center",
fontSize:"52px",
letterSpacing:"5px",
marginBottom:"70px",
textShadow:"0 0 15px rgba(255,0,0,0.6)"
}}
> 
FAQ
</h2>

<div
style={{
maxWidth:"900px",
margin:"auto",
display:"flex",
flexDirection:"column",
gap:"20px"
}}
>

{[
{
q:"Le programme est-il vraiment personnalisé ?",
a:"Oui. Chaque programme BODYRIZE est généré selon ton objectif, ton niveau et ton rythme d'entraînement."
},
{
q:"En combien de temps voir des résultats ?",
a:"Avec de la régularité et une bonne alimentation, les premiers résultats apparaissent généralement après quelques semaines."
},
{
q:"Puis-je m'entraîner à la maison ?",
a:"Oui. Si tu choisis entraînement à domicile, ton programme sera adapté avec des exercices au poids du corps."
},
{
q:"Comment vais-je recevoir mon programme ?",
a:"Ton programme BODYRIZE est généré automatiquement et envoyé par email sous forme de PDF détaillé."
}
].map((item,i)=>{

const index=i+1
const active=faq===index

return(

<div
key={index}
style={{
background:"#141414",
border:"1px solid #2a2a2a",
borderRadius:"12px",
overflow:"hidden",
cursor:"pointer"
}}
onClick={()=>setFaq(active?null:index)}
>

<div
style={{
padding:"25px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}
>

<h3 style={{fontSize:"22px"}}>
{item.q}
</h3>

<span
style={{
fontSize:"28px",
color:"#ff0000"
}}
> 
{active?"−":"+"}
</span>

</div>

<div
style={{
maxHeight:active?"200px":"0px",
overflow:"hidden",
transition:"all 0.4s ease",
padding:active?"0 25px 25px 25px":"0 25px",
opacity:active?1:0.6
}}
>

<p style={{opacity:"0.8"}}>
{item.a}
</p>

</div>

</div>

)

})}

</div>

</section>

</>
)
}