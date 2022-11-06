import React from 'react'
import './info.css'
import { ImConnection } from 'react-icons/im';
import { TbFileDescription } from 'react-icons/tb';
import { AiOutlineCloudServer } from 'react-icons/ai';
function Info() {
  return (
    <section className='Information' id='Info'>
        <h2>About this</h2><br/><br/>
        <div className='container content_info'>
            <div className='content_item'>
                <ImConnection className='content_icon'/>
                 <h2>Interface</h2>
                <h4>Just upload the the files from anywhere from any device
                </h4>
            </div>

            <div className='content_item'>
                
                    
                <TbFileDescription className='content_icon'/>
                <h2>Script</h2>
                <h4>We are giving you the security of the file with blockchain
                </h4>
            </div>

            <div className='content_item'>
               
                <AiOutlineCloudServer className='content_icon'/>
                <h2>Cloud</h2>
                <h4>Finally your files is securely stored in the cloud
                </h4>
            </div>
        </div>
    </section>
  )
}

export default Info
