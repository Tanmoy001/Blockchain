import React from 'react'
import Social from './Social'
import'./footer.css'
import { AiOutlineCopyright } from 'react-icons/ai';
function Footer() {
  return (
    <div className=' footer'>
        <div className='footer_item'>
            <h3>Decentralized-Cloud</h3>
            <h4>This is a project of the 3rd year student of UEM</h4>
            <p><AiOutlineCopyright className='icon'/>&emsp;If you want to use any code just drop a message</p>
            <Social/>
        </div>
    </div>
  )
}

export default Footer