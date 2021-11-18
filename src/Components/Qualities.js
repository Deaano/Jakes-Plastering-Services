import React from 'react'
import './Qualities.css'
import {GiTakeMyMoney} from 'react-icons/gi'
import {MdHomeWork} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'

function Qualities() {
    return (
        <div className='quaility-container-wrapper'>
        <div className='qualities-container'>
       
            <div className='quality-cards'>
                
                <MdHomeWork className='quality-icons' />
                <div className='quality-text-container'>
                <h3 className='quality-text-title'>Peace Of Mind</h3>
                    <p className='quality-text'>with 10 years in the business you can rest assure that you propety or place of work is in the safest hands in the business </p>
                </div>
            </div>
            <div className='quality-cards'>
            <GiTakeMyMoney className='quality-icons' />
                <div className='quality-text-container'>
                        <h3 className='quality-text-title'>Affordable & Reliable</h3>
                    <p className='quality-text'>Affordable quotes with top quality work produced! saving you that little extra money to spend on some extra home improvments.</p>
                </div>
            </div>
            <div className='quality-cards'>
            <FaPhone className='quality-icons' />
                <div className='quality-text-container'>
                <h3 className='quality-text-title'>Get In Touch</h3>
                    <p className='quality-text'>so dont delay and give me a call today for your free non obligation quote, im available 6 days a week mon - sat from 8am - 8pm </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Qualities
