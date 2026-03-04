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

{/* NAVBAR */}

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

{/* MENU */}

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
MENU ▾
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

{/* LOGO */}

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

{/* OVERLAY */}

<div
style={{
position:"absolute",
inset:0,
background:"rgba(0,0,0,0.55)"
}}
/>

{/* HERO */}

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
TRANSFORME TON CORPS
</p>

<a href="/formules">

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


{/* FAQ */}

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
fontSize:"50px",
letterSpacing:"4px",
marginBottom:"60px"
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

{/* QUESTION 1 */}

<div
style={{
background:"#141414",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"25px",
cursor:"pointer"
}}
onClick={()=>setFaq(faq===1?null:1)}
>

<h3 style={{fontSize:"22px"}}>
Le programme est-il vraiment personnalisé ?
</h3>

{faq===1 && (
<p style={{marginTop:"15px",opacity:"0.8"}}>
Oui. Chaque programme BODYRIZE est généré en fonction de tes réponses : ton objectif, ton niveau, ton lieu d'entraînement et le nombre de séances par semaine.
</p>
)}

</div>

{/* QUESTION 2 */}

<div
style={{
background:"#141414",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"25px",
cursor:"pointer"
}}
onClick={()=>setFaq(faq===2?null:2)}
>

<h3 style={{fontSize:"22px"}}>
En combien de temps puis-je voir des résultats ?
</h3>

{faq===2 && (
<p style={{marginTop:"15px",opacity:"0.8"}}>
Avec de la régularité et une bonne alimentation, la majorité des personnes commencent à voir des changements physiques après quelques semaines d'entraînement.
</p>
)}

</div>

{/* QUESTION 3 */}

<div
style={{
background:"#141414",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"25px",
cursor:"pointer"
}}
onClick={()=>setFaq(faq===3?null:3)}
>

<h3 style={{fontSize:"22px"}}>
Puis-je faire le programme à la maison ?
</h3>

{faq===3 && (
<p style={{marginTop:"15px",opacity:"0.8"}}>
Oui. Si tu choisis entraînement à domicile dans le questionnaire, les exercices seront adaptés au poids du corps ou avec peu de matériel.
</p>
)}

</div>

{/* QUESTION 4 */}

<div
style={{
background:"#141414",
border:"1px solid #2a2a2a",
borderRadius:"12px",
padding:"25px",
cursor:"pointer"
}}
onClick={()=>setFaq(faq===4?null:4)}
>

<h3 style={{fontSize:"22px"}}>
Comment vais-je recevoir mon programme ?
</h3>

{faq===4 && (
<p style={{marginTop:"15px",opacity:"0.8"}}>
Une fois le questionnaire rempli, ton programme BODYRIZE est généré automatiquement et envoyé par email sous forme de PDF détaillé.
</p>
)}

</div>

</div>

</section>

</>
)
}