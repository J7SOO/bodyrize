"use client"

import Link from "next/link"

export default function Formules() {

  return (

    <main className="page">

      <h1 className="title">CHOISIS TA FORMULE</h1>

      <p className="subtitle">
        Ton programme personnalisé commence ici.
      </p>


      <div className="cards">

        {/* BODYRIZE */}

        <div className="card">

          <h2 className="plan">BODYRIZE</h2>

          <p className="price">9.99€</p>

          <ul>
            <li>Programme musculation personnalisé</li>
            <li>Exercices illustrés</li>
            <li>PDF professionnel</li>
            <li>Adapté à ton objectif</li>
          </ul>

          <Link href="/formulaire?formule=bodyrize">
            <button className="btn">
              COMMENCER
            </button>
          </Link>

        </div>


        {/* BODYBOOST */}

        <div className="card premium">

          <div className="badge">POPULAIRE</div>

          <h2 className="plan">BODYBOOST</h2>

          <p className="price">15.99€</p>

          <ul>
            <li>Programme musculation personnalisé</li>
            <li>Plan nutrition adapté</li>
            <li>PDF premium détaillé</li>
            <li>Optimisation physique</li>
          </ul>

          <Link href="/formulaire?formule=bodyboost">
            <button className="btn premiumBtn">
              CHOISIR BODYBOOST
            </button>
          </Link>

        </div>

      </div>


      <style jsx>{`

      .page{
        min-height:100vh;
        background:#0b0b0b;
        color:white;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:80px 20px;
        text-align:center;
      }

      .title{
        font-size:48px;
        font-weight:800;
        letter-spacing:2px;
        margin-bottom:10px;
      }

      .subtitle{
        color:#aaa;
        margin-bottom:70px;
        font-size:18px;
      }

      .cards{
        display:flex;
        gap:40px;
        justify-content:center;
        flex-wrap:wrap;
        max-width:900px;
      }

      .card{
        width:350px;
        background:#111;
        padding:50px 40px;
        border:1px solid rgba(255,255,255,0.08);
        position:relative;
        transition:0.3s;
      }

      .card:hover{
        transform:translateY(-10px);
        border-color:#ff1a1a;
      }

      .plan{
        font-size:32px;
        color:#ff1a1a;
        margin-bottom:15px;
        letter-spacing:1px;
      }

      .price{
        font-size:40px;
        font-weight:700;
        margin-bottom:30px;
      }

      ul{
        list-style:none;
        padding:0;
        margin-bottom:35px;
      }

      li{
        margin-bottom:12px;
        color:#ddd;
        font-size:15px;
      }

      .btn{
        width:100%;
        padding:18px;
        background:#ff1a1a;
        border:none;
        color:white;
        font-weight:700;
        font-size:16px;
        cursor:pointer;
        transition:0.3s;
      }

      .btn:hover{
        box-shadow:0 0 25px rgba(255,0,0,0.7);
      }

      .premium{
        border:2px solid #ff1a1a;
      }

      .premiumBtn{
        background:white;
        color:black;
      }

      .badge{
        position:absolute;
        top:-12px;
        right:20px;
        background:#ff1a1a;
        padding:6px 14px;
        font-size:12px;
        font-weight:600;
      }

      `}</style>

    </main>

  )
}