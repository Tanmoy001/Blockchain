import React, { useEffect } from 'react'
import "./loginScreen.scss"
import img1 from  "../../images/projectpic.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import login from '../redux/actions/auth.action'
import GoogleIcon from '@mui/icons-material/Google';

const LoginScreen = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(state=>state.auth.accessToken)
    const handleLogin = () =>{
        dispatch(login())
    }
    const navigate = useNavigate();
    useEffect(()=>{
        if(accessToken){
          navigate('/');
        }
     }, [accessToken,navigate])
   
  return (
   <div className="login">
    <div className="login__container">
        <img src={img1} alt="" />
        <button onClick={handleLogin}>
        <GoogleIcon className='google' />
        Login With Google
        </button>
    </div>
   </div>
  )
}

export default LoginScreen