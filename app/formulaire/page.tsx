"use client"

import { useState } from "react"

export default function Formulaire(){

const [objectif,setObjectif] = useState("")
const [lieu,setLieu] = useState("")
const [age,setAge] = useState("")
const [poids,setPoids] = useState("")
const [nom,setNom] = useState("")
const [prenom,setPrenom] = useState("")
const [description,setDescription] = useState("")

const titreStyle = {
textAlign:"center",
fontSize:"26px",
fontWeight:"900",
letterSpacing:"2px",
borderBottom:"2px solid white",
paddingBottom:"10px",
marginBottom:"25px"
}

return(

<div style={{
minHeight:"100vh",
backgroundImage:"url('/gym-bg.jpg')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
flexDirection:"column",
alignItems:"center",
paddingBottom:"80px"
}}>

<h1 style={{
marginTop:"90px",
color:"white",
fontSize:"50px",
fontWeight:"900",
letterSpacing:"4px",
textShadow:"0px 5px 20px rgba(0,0,0,0.9)"
}}>
CRÉE TON PROGRAMME
</h1>



<div style={{marginTop:"50px",display:"flex",gap:"40px"}}>

{/* OBJECTIF */}

<div style={{
width:"260px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>OBJECTIF</h2>

<div style={{display:"flex",flexDirection:"column",gap:"18px"}}>

<div
onClick={()=>setObjectif("prise")}
style={{
border:"2px solid white",
padding:"16px",
cursor:"pointer",
textAlign:"center",
fontSize:"20px",
fontWeight:"800",
background: objectif==="prise" ? "#b91c1c" : "transparent"
}}
onMouseEnter={(e)=>e.currentTarget.style.boxShadow="0 0 15px red"}
onMouseLeave={(e)=>e.currentTarget.style.boxShadow="none"}
> 
🔥 PRISE DE MASSE
</div>

<div
onClick={()=>setObjectif("perte")}
style={{
border:"2px solid white",
padding:"16px",
cursor:"pointer",
textAlign:"center",
fontSize:"20px",
fontWeight:"800",
background: objectif==="perte" ? "#b91c1c" : "transparent"
}}
onMouseEnter={(e)=>e.currentTarget.style.boxShadow="0 0 15px red"}
onMouseLeave={(e)=>e.currentTarget.style.boxShadow="none"}
> 
🔥 PERTE DE POIDS
</div>

</div>
</div>



{/* LIEU */}

<div style={{
width:"260px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>LIEU</h2>

<div style={{display:"flex",flexDirection:"column",gap:"18px"}}>

<div
onClick={()=>setLieu("salle")}
style={{
border:"2px solid white",
padding:"16px",
cursor:"pointer",
textAlign:"center",
fontSize:"20px",
fontWeight:"800",
background: lieu==="salle" ? "#b91c1c" : "transparent"
}}
onMouseEnter={(e)=>e.currentTarget.style.boxShadow="0 0 15px red"}
onMouseLeave={(e)=>e.currentTarget.style.boxShadow="none"}
> 
🏋️ SALLE
</div>

<div
onClick={()=>setLieu("maison")}
style={{
border:"2px solid white",
padding:"16px",
cursor:"pointer",
textAlign:"center",
fontSize:"20px",
fontWeight:"800",
background: lieu==="maison" ? "#b91c1c" : "transparent"
}}
onMouseEnter={(e)=>e.currentTarget.style.boxShadow="0 0 15px red"}
onMouseLeave={(e)=>e.currentTarget.style.boxShadow="none"}
> 
🏠 MAISON
</div>

</div>
</div>

</div>



{/* AGE POIDS */}

<div style={{marginTop:"40px",display:"flex",gap:"40px"}}>

<div style={{
width:"260px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>ÂGE</h2>

<input
value={age}
onChange={(e)=>setAge(e.target.value)}
placeholder="Ton âge"
style={{width:"100%",padding:"12px"}}
/>

</div>


<div style={{
width:"260px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>POIDS</h2>

<input
value={poids}
onChange={(e)=>setPoids(e.target.value)}
placeholder="Ton poids"
style={{width:"100%",padding:"12px"}}
/>

</div>

</div>



{/* NOM PRENOM */}

<div style={{marginTop:"40px",display:"flex",gap:"40px"}}>

<div style={{
width:"260px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>NOM</h2>

<input
value={nom}
onChange={(e)=>setNom(e.target.value)}
placeholder="Nom"
style={{width:"100%",padding:"12px"}}
/>

</div>


<div style={{
width:"260px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>PRÉNOM</h2>

<input
value={prenom}
onChange={(e)=>setPrenom(e.target.value)}
placeholder="Prénom"
style={{width:"100%",padding:"12px"}}
/>

</div>

</div>



{/* DESCRIPTION */}

<div style={{
marginTop:"40px",
width:"560px",
padding:"25px",
border:"2px solid white",
background:"rgba(0,0,0,0.75)",
color:"white"
}}>

<h2 style={titreStyle}>OBJECTIF PERSONNEL</h2>

<textarea
value={description}
onChange={(e)=>setDescription(e.target.value)}
placeholder="Explique ton objectif..."
style={{
width:"100%",
height:"120px",
padding:"15px"
}}
/>

</div>



{/* BOUTON */}

<div style={{
marginTop:"50px",
display:"flex",
justifyContent:"center"
}}>

<button
style={{
background:"#b91c1c",
color:"white",
border:"none",
padding:"18px 60px",
fontSize:"22px",
fontWeight:"900",
letterSpacing:"2px",
cursor:"pointer",
transition:"0.2s"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.boxShadow="0 0 25px red"
}}

onMouseLeave={(e)=>{
e.currentTarget.style.boxShadow="none"
}}

> 
🔥 GÉNÉRER MON PROGRAMME
</button>

</div>


</div>

)
}