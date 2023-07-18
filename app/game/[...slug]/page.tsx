"use client"

import style from "../../styles/Game.module.css"
import { useEffect, useState } from "react"
import { createDoors, updateDoors } from "../../functions/doors"
import Door from "../../components/Door"
import Link from "next/link"

export default function Game({ params }) {
   
   const countDoors = +params.slug[0]
   const doorWithGift = +params.slug[1]
   
   const [doors, setDoors] = useState(createDoors(countDoors, doorWithGift))
   const [valid, setValid] = useState(false)

   useEffect(() => {

      const countDoorsValid = countDoors >= 3 && countDoors <= 7
      const withGiftValid = doorWithGift >= 1 && doorWithGift <= countDoors
      
      setValid(countDoorsValid && withGiftValid)

   }, [countDoors, doorWithGift])

   function renderDoors() {
      
      return doors.map(door => {

         return <Door
            key={door.number}
            value={door}
            onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
         />
      })
   }

   return (
      <div id={style.game}>
         <div className={style.doors}>
            {  
               valid ?
               renderDoors() :
               <h1>Invalid values!!!</h1>
            }
         </div>
         <div className={style.buttons}>
            <Link href="/">
               <button>Reiniciar Jogo</button>
            </Link>
         </div>
      </div>
   )
}