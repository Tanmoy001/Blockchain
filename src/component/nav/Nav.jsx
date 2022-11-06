import React from 'react'
import'./nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiUploadCloud } from 'react-icons/fi';
import { GiLoveMystery } from 'react-icons/gi';
import { FaSignInAlt } from 'react-icons/fa';
import { TbBusinessplan } from 'react-icons/tb';
function Nav() {
  return (
    <div className='nav'>
      <div className="contain_item">
        <div className="navigation">
            <ul>
                <li>
                    <a href="#home">
                    <span className="icon"><AiOutlineHome/></span>
                    <span className="title">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#info">
                    <span className="icon"><AiOutlineInfoCircle/></span>
                    <span className="title">Info</span>
                    </a>
                </li>
                <li>
                    <a href="#Upload">
                    <span className="icon"><FiUploadCloud/></span>
                    <span className="title">Upload</span>
                    </a>
                </li>
                <li>
                    <a href="#Testimonial">
                    <span className="icon"><GiLoveMystery/></span>
                    <span className="title">Testimonial</span>
                    </a>
                </li>
               
                <li>
                    <a href="#SignIn">
                    <span className="icon"><FaSignInAlt/></span>
                    <span className="title"> SignIn</span>
                    </a>
                </li>
                <li>
                    <a href="#Our_Plan">
                    <span className="icon"><TbBusinessplan/></span>
                    <span className="title">Our Plan</span>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
    </div>
  )
}

export default Nav
