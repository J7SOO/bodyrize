"use client"

import { useState } from "react"

export default function Formulaire() {

const [form,setForm]=useState({
nom:"",
email:"",
objectif:"",
niveau:"",
seances:"",
lieu:""
})

const selectOption=(name:string,value:string)=>{
setForm({...form,[name]:value})
}

const handleSubmit=async(e:any)=>{
e.preventDefault()

await fetch("/api/generate",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(form)
})

alert("Programme envoyé par email 📩")
}

return(

<main className="page">

<div className="overlay"/>

<div className="formBox">

<h1 className="title">
CRÉER TON PROGRAMME PERSONNALISÉ
</h1>

<form onSubmit={handleSubmit} className="form">

<input
placeholder="Nom"
onChange={(e)=>setForm({...form,nom:e.target.value})}
/>

<input
placeholder="Email"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<h2 className="sectionTitle">OBJECTIF</h2>

<div className="options">

<div
className={`option ${form.objectif==="prise de masse"?"active":""}`}
onClick={()=>selectOption("objectif","prise de masse")}
>
PRISE DE MASSE
</div>

<div
className={`option ${form.objectif==="perte de poids"?"active":""}`}
onClick={()=>selectOption("objectif","perte de poids")}
>
PERTE DE POIDS
</div>

</div>


<h2 className="sectionTitle">NIVEAU</h2>

<div className="options">

<div
className={`option ${form.niveau==="debutant"?"active":""}`}
onClick={()=>selectOption("niveau","debutant")}
>
DÉBUTANT
</div>

<div
className={`option ${form.niveau==="intermediaire"?"active":""}`}
onClick={()=>selectOption("niveau","intermediaire")}
>
INTERMÉDIAIRE
</div>

</div>


<h2 className="sectionTitle">SÉANCES PAR SEMAINE</h2>

<div className="options">

<div
className={`option ${form.seances==="2"?"active":""}`}
onClick={()=>selectOption("seances","2")}
>
2 SÉANCES
</div>

<div
className={`option ${form.seances==="3"?"active":""}`}
onClick={()=>selectOption("seances","3")}
>
3 SÉANCES
</div>

<div
className={`option ${form.seances==="4"?"active":""}`}
onClick={()=>selectOption("seances","4")}
>
4 SÉANCES
</div>

</div>


<h2 className="sectionTitle">LIEU</h2>

<div className="options">

<div
className={`option ${form.lieu==="salle"?"active":""}`}
onClick={()=>selectOption("lieu","salle")}
>
SALLE
</div>

<div
className={`option ${form.lieu==="maison"?"active":""}`}
onClick={()=>selectOption("lieu","maison")}
>
MAISON
</div>

</div>

<button className="btn">
GÉNÉRER MON PROGRAMME
</button>

</form>

</div>


<style jsx>{`

.page{
min-height:100vh;
background:url("/form-bg.jpg");
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
position:relative;
}

.overlay{
position:absolute;
inset:0;
background:rgba(0,0,0,0.75);
}

.formBox{
position:relative;
width:100%;
max-width:750px;
background:rgba(10,10,10,0.9);
padding:60px;
border:1px solid rgba(255,255,255,0.1);
}

.title{
font-size:38px;
text-align:center;
margin-bottom:40px;
font-weight:800;
}

.form{
display:flex;
flex-direction:column;
gap:25px;
}

input{
padding:18px;
background:#111;
border:1px solid #333;
color:white;
}

.sectionTitle{
font-size:22px;
margin-top:20px;
letter-spacing:1px;
}

.options{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
gap:15px;
}

.option{
background:#111;
padding:20px;
text-align:center;
border:1px solid #333;
cursor:pointer;
transition:0.25s;
font-weight:600;
}

.option:hover{
border-color:#ff1a1a;
}

.option.active{
background:#ff1a1a;
border-color:#ff1a1a;
}

.btn{
margin-top:30px;
padding:20px;
background:#ff1a1a;
border:none;
font-weight:700;
cursor:pointer;
font-size:16px;
}

.btn:hover{
box-shadow:0 0 30px red;
}

`}</style>

</main>

)

}