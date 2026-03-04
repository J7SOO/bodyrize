export default function Success(){

return(

<div style={{
height:"100vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
background:"#000",
color:"white",
fontFamily:"Arial",
textAlign:"center"
}}>

<h1 style={{fontSize:"50px",marginBottom:"20px"}}>
PAIEMENT VALIDÉ ✅
</h1>

<p style={{fontSize:"22px",opacity:"0.8",marginBottom:"40px"}}>
Ton programme BODYRIZE est prêt.
</p>

<a href="/formulaire">

<button style={{
padding:"18px 40px",
fontSize:"20px",
background:"#ff0000",
border:"none",
borderRadius:"8px",
color:"white",
cursor:"pointer"
}}>

Remplir mon formulaire

</button>

</a>

</div>

)

}