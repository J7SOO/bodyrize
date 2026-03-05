"use client"

export default function Formulaire(){

function payerBodyrize(){
window.location.href="https://buy.stripe.com/8x29AT1nH3Pc5AYcbw6kg00"
}

function payerBodyboost(){
window.location.href="https://buy.stripe.com/3cI3cv7M52L85AYdfA6kg01"
}

return(

<div style={{
minHeight:"100vh",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
background:"black",
color:"white",
gap:"40px"
}}>

<h1 style={{
fontSize:"42px",
fontWeight:"800"
}}>
CHOISIS TON PROGRAMME
</h1>

<div style={{
display:"flex",
gap:"40px"
}}>

<div style={{
border:"2px solid white",
padding:"30px",
textAlign:"center"
}}>

<h2>BODYRIZE</h2>

<p>Programme sport complet</p>

<h3>12,99€</h3>

<button
onClick={payerBodyrize}
style={{
marginTop:"20px",
padding:"15px",
border:"2px solid red",
background:"transparent",
color:"white",
cursor:"pointer"
}}
>

ACHETER

</button>

</div>

<div style={{
border:"2px solid white",
padding:"30px",
textAlign:"center"
}}>

<h2>BODYBOOST</h2>

<p>Programme + nutrition</p>

<h3>17,99€</h3>

<button
onClick={payerBodyboost}
style={{
marginTop:"20px",
padding:"15px",
border:"2px solid red",
background:"transparent",
color:"white",
cursor:"pointer"
}}
>

ACHETER

</button>

</div>

</div>

</div>

)

}