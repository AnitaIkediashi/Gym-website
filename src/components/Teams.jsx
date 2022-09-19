import React from 'react'
import { trainers } from '../data'
import {FaSteamSymbol} from 'react-icons/fa'
import Trainer from '../components/Trainer'

const Teams = () => {
  return (
    <section className="trainers">
        <div className="container">
            <div className="heading">
                <span className="icon"><FaSteamSymbol/></span>
                <h3>Trainers</h3>
            </div>
            <div className="trainers__container">
                {
                    trainers.map(({id, image, name, job, socials}) => {
                        return (
                            <Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    {icon: socials[0]},
                                    {icon: socials[1]},
                                    {icon: socials[2]}
                                ]
                            }/>                            
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Teams