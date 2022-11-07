import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import loginClass from './Login.module.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Login = ({ auth }) => {

    const navigate = useNavigate()

    const userName = useRef()
    const userEmail = useRef()
    const userOTP = useRef()

    const [otp, setOtp] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    async function loginSignUpForm(e) {
        e.preventDefault()
        document.getElementById('login').setAttribute('disabled', 'disabled')

        let data = {
            'name': userName.current.value,
            'email': userEmail.current.value
        }

        await axios.post('http://localhost:4000/register', data).then((response) => {
            console.log(response.data)
            if (response.data.otpStatus) {
                document.getElementById('login').removeAttribute('disabled')
                toast.success('🦄 OTP Sent Successfully. Check Email')
                setUserInfo(response.data)
                setOtp(oldValue => !oldValue)
            }
        })
    }

    async function otpVerifyForm(e) {
        e.preventDefault()
        document.getElementById('otp').setAttribute('disabled', 'disabled')

        let data = {
            'email': userInfo.email,
            'otp': parseInt(userOTP.current.value)
        }

        await axios.post('http://localhost:4000/otpVerify', data).then((response) => {
            console.log(response.data)

            if (response.data.otpVerify) {
                localStorage.setItem('email', response.data.email)
                localStorage.setItem('akey', response.data.akey)
                toast.success('🦄 OTP Verified')
                setTimeout(() => {
                    document.getElementById('otp').removeAttribute('disabled')
                    navigate('/ecommerce')
                    auth(oldValue => !oldValue)
                }, 2000)
            }

        })
        userOTP.current.value = ''
    }

    const LoginSignUpForm = () => {
        return (
            <>
                <h2>Login / Sign Up</h2>
                <form onSubmit={loginSignUpForm}>
                    <div><input type="text" placeholder='Name' ref={userName} required /></div>
                    <div><input type="email" placeholder='Email' ref={userEmail} required /></div>
                    <div><input type="submit" value="Next →" id="login" /></div>
                </form>
            </>
        )
    }

    const OtpVerify = () => {
        return (
            <>
                <h2>OTP Verification</h2>
                <form onSubmit={otpVerifyForm}>
                    <div><input type="text" placeholder='Enter OTP' ref={userOTP} required /></div>
                    <div><input type="submit" value="Verify" id='otp' /></div>
                </form>
            </>
        )
    }

    return (
        <>
            <div className={loginClass['login-form']}>
                <div className={loginClass['login-form-container']}>
                    {otp ? <OtpVerify /> : <LoginSignUpForm />}
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </>
    )
}

export default Login