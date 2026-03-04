"use client"

import Link from "next/link"

export default function Home() {

return (

<main className="home">

<div className="overlay"/>

<section className="hero">

<h1 className="title">
BODYRIZE
</h1>

<p className="subtitle">
Programme fitness personnalisé pour transformer ton physique
</p>

<Link href="/formules" className="cta">
COMMENCER MON PROGRAMME
</Link>

</section>

<style jsx>{`

.home{
min-height:100vh;
background:url("/hero-bg.jpg");
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
position:relative;
}

.overlay{
position:absolute;
inset:0;
background:rgba(0,0,0,0.65);
}

.hero{
position:relative;
max-width:900px;
padding:40px;
}

.title{
font-size:70px;
font-weight:900;
letter-spacing:4px;
color:white;
}

.subtitle{
margin-top:20px;
font-size:22px;
color:#ccc;
}

.cta{
margin-top:40px;
display:inline-block;
padding:20px 50px;
background:#ff1a1a;
font-weight:bold;
text-decoration:none;
color:white;
border-radius:8px;
font-size:18px;
}

.cta:hover{
box-shadow:0 0 25px red;
}

`}</style>

</main>

)

}