"use client"

import { useState } from "react";
import Card from "./components/Card";
import EnterNumber from "./components/EnterNumber";
import style from "./styles/Home.module.css";
import Link from "next/link"

export default function Home() {

   const [countDoors, setCountDoors] = useState(3)
   const [withGift, setWithGift] = useState(1)

   return (
      <div className={style.home}>
         <div>
            <Card bgColor="#c0392c">
               <h1>Monty Hall</h1>
            </Card>
            <Card>
               <EnterNumber 
                  text="Count Doors?" 
                  value={countDoors} 
                  onChange={newCountDoors => setCountDoors(newCountDoors)} />
            </Card>
         </div>
         <div>
            <Card>
            <EnterNumber 
                  text="With Gift?" 
                  value={withGift} 
                  onChange={newDoorWithGift => setWithGift(newDoorWithGift)} />
            </Card>
            <Card bgColor="#28a085">
               <Link href={`/game/${countDoors}/${withGift}`} className={style.link}>
                  <h2 >Iniciar</h2>
               </Link>
            </Card>
         </div>
      </div>
   )
}