"use client"

import { useState } from "react"

export default function Formulaire() {

const [objectif,setObjectif] = useState("")
const [lieu,setLieu] = useState("")

const handleSubmit = (e:any) => {
e.preventDefault()

if(objectif === "prise" && lieu === "salle"){
window.location.href="/programmes/prise_salle.pdf"
}

if(objectif === "prise" && lieu === "maison"){
window.location.href="/programmes/prise_maison.pdf"
}

if(objectif === "perte" && lieu === "salle"){
window.location.href="/programmes/perte_salle.pdf"
}

if(objectif === "perte" && lieu === "maison"){
window.location.href="/programmes/perte_maison.pdf"
}

}

return (

<div className="min-h-screen flex items-center justify-center bg-black text-white">

<form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl p-8">

<h1 className="text-3xl font-bold text-center">
Personnalise ton programme
</h1>

<input
type="number"
placeholder="Age"
required
className="w-full p-4 rounded-lg text-black"
/>

<input
type="number"
placeholder="Poids (kg)"
required
className="w-full p-4 rounded-lg text-black"
/>

<input
type="number"
placeholder="Taille (cm)"
required
className="w-full p-4 rounded-lg text-black"
/>

<select
required
value={objectif}
onChange={(e)=>setObjectif(e.target.value)}
className="w-full p-4 rounded-lg text-black"
>

<option value="">Objectif</option>
<option value="prise">Prise de masse</option>
<option value="perte">Perte de poids</option>

</select>

<select
required
value={lieu}
onChange={(e)=>setLieu(e.target.value)}
className="w-full p-4 rounded-lg text-black"
>

<option value="">Lieu d'entraînement</option>
<option value="salle">Salle de sport</option>
<option value="maison">Maison</option>

</select>

<select
required
className="w-full p-4 rounded-lg text-black"
>

<option value="">Nombre de séances par semaine</option>
<option value="4">4 séances obligatoires</option>

</select>

<textarea
placeholder="Décris ton objectif ou tes attentes"
className="w-full p-4 rounded-lg text-black"
rows={4}
/>

<button
type="submit"
className="w-full bg-red-600 hover:bg-red-700 p-4 rounded-xl font-bold text-lg"
>

Générer mon programme

</button>

</form>

</div>

)

}