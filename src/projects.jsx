import React from 'react'
import Card from './Card';
import ColorGame from"./images/Color-Match-Challenge.jpg"
import portal from"./images/Portal.jpg"
import Hotel from "./images/Hotel.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
      {
        imageUrl:portal,
        altText: 'Portal',
        title: 'AAA Wifi Authentication',
        description: 'AAA Authentication wifi connection project allowing user connect to internet using code .',
        explore:"https://genpact.quick2bill.com/"

      },
        {
          imageUrl: ColorGame,
          altText: 'Color Game',
          title: 'Color Game',
          description: 'A color-matching game inspired by Tic-Tac-Toe, where players match colors to win. It features multiple modes: Player vs. Player, Player vs. CPU, and CPU vs. CPU, with a smart algorithm for the CPU, ensuring challenging and engaging gameplay .',
          explore:"https://jouhar123.github.io/Color-Match-Challenge/"
        },
 
        {
          imageUrl: Hotel,
          altText: 'Hotel',
          title: 'Hotel Management System',
          description: "A dynamic and responsive hotel management system with inventory,room and staff managemnt with wifi integrated feature allowing Guest to connect wifi using last name and room Number.",
          explore:"https://hotel.quarknetworks.net/"
        },
      
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
