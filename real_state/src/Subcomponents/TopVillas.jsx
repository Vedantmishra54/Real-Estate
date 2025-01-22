import React from 'react'
import{villas} from '../Villas'
import  {Link} from "react-router-dom"
import {RxDot} from "react-icons/rx"
import {IoIosPeople} from "react-icons/io"
import {FaBed,FaBath} from "react-icons/fa"
import {BiArea} from "react-icons/bi"

const TopVillas = () => {
  return (
    <div>
      <section id='topVillas'>
        <p>TOP PIC VILLAS</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <div className='villasContainer'>
        {

            villas.slice(0,3).map(element =>{
                return(
                    <Link className='card' to = {'/villa/${element.id}'}>
                        <img src={element.image} alt={element.name} />
                        <div className='location_text'>
                            <span>{element.location}</span>
                            <span><RxDot/></span>
                            <span>{element.category}</span>
                        </div>
                        <div className='title_text'>
                            {element.name}
                        </div>

                        <div className='specifications'>
                            <div className='spec'>
                                <IoIosPeople/>
                                <span>{element.guests}</span>
                                Guests
                            </div>
                            <div className='spec'>
                                <FaBed/>
                                <span>{element.bedrooms}</span>
                                Bedrooms
                            </div>
                            <div className='spec'>
                                <BiArea/>
                                <span>{element.squareMeter}</span>
                                Area
                            </div>
                            <div className='spec'>
                                <FaBath/>
                                <span>{element.bathrooms}</span>
                                Bathrooms
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        </div>
      </section>
    </div>
  )
}

export default TopVillas
