import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo-black.png'
import grub from '../../assets/images/grubhub.png'
import burger from '../../assets/images/Splash-Screen.png'
import grubhub from '../../assets/images/grubhub-logo.png'

import { login, register } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';


export const Signup = () => {
  const [createAccount, setCreateAccount] = useState(false); // to show which page to view

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/favorites');
    }
  }, [])

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await login(email, email, password);
    if (error) {
      alert(error);
    } else {
      navigate(('/favorites'));
      resetForm();
    }
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    let agreedTerms = document.getElementById("agree-to-terms")
    if (agreedTerms.checked) {
      const { error } = await register(email, email, password);
      if (error) {
        alert(error);
      } else {
        navigate(('/favorites'));
        resetForm();
      }
    } else {
      alert("You must agree to the terms in order to create an account.")
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#fbfbf9] justify-center">
      {/* Left Column */}
      <div className="mx-4 mb-0 md:w-1/2 flex flex-col sm:items-center px-4 h-screen">
        {/* Logo or Brand Name */}
        <div className="md:self-center w-80">
          <img src={logo} alt="" className="pt-24 w-[16rem] md:pt-32" />
        </div>

        {/* Slogan */}
        <div className="md:w-80 md:self-center">
          <h4 className="text-black text-sm mb-8 pt-2 pl-4 sm:self-start">
            {createAccount ?
              "Create an account"
              :
              "Welcome back!"
            }

          </h4>
        </div>

        {/* Buttons */}

        <div className="flex flex-col mt-[3rem] sm:items-center">
          <form onSubmit={createAccount ? handleCreateAccount : handleLogin}>
            <div>
              <h4><label className="text-xs">Email</label></h4>

              <input type="text" onChange={(e) => setEmail(e.target.value)} className="bg-[#dedede] text-black h-9 text-sm pl-4 mb-2 rounded-full w-full flex sm:w-80" />
            </div>
            <div>
              <h4><label className="text-xs">Password</label></h4>

              <input type="password" onChange={(e) => setPassword(e.target.value)} className="bg-[#dedede] epilogue text-black h-9 text-sm pl-4 mb-2 rounded-full w-full sm:w-80"

                placeholder={createAccount === true ? "Password must be 8+ characters long" : ""} />
            </div>

            {createAccount === true ?
              <div>
                <div className="flex gap-1 items-center justify-center md:w-80">
                  <input type="checkbox" id="agree-to-terms" className="h-4 w-4 outline-none bg-[#dedede] mb-2" />
                  <p className="text-[9px] mt-2 mb-5 pl-2 text-gray-400 epilogue sm:w-80">
                    I agree to CraveCrafter’s  Terms of Service, Privacy Policy, and our default Notification Settings.
                  </p>
                </div>

                <button className="bg-[#fe5100] text-white py-2 mb-2 epilogue rounded-full text-sm sm:w-80">
                  Create Account
                </button>
              </div>

              :
              <div className="flex flex-col">
                <button className="bg-[#fe5100] text-[#FCFBFA] py-2 my-2 epilogue rounded-full text-sm sm:w-80">
                  Sign in
                </button>
                <button className="bg-[#050312] text-[#FCFBFA] py-2 mb-2 epilogue rounded-full text-sm sm:w-80" style={{ whiteSpace: "no-wrap" }}>
                  <img src={grubhub} className="w-fit h-6" style={{ backgroundPosition: "20px 20px", display: "inline-block" }} alt="" />
                  <span>Sign in with GrubHub</span>
                </button>

              </div>

            }

          </form>
          {createAccount === true ?
            <p className="text-[10px] epilogue text-center text-gray-400 mt-2">
              Already have an account?
              <a className="underline ml-1 cursor-pointer" onClick={() => { setCreateAccount(false) }}>Sign In</a>
            </p>
            :
            <p className="text-[10px] epilogue text-center text-gray-400 mt-2">
              Need to make an account?
              <a className="underline ml-1 cursor-pointer" onClick={() => { setCreateAccount(true) }}>Sign Up</a>
            </p>
          }

        </div>

        {/* Privacy Notice */}

        <footer className="epilogue text-[8px] text-center text-gray-400 mt-20 self-end bottom-0 absolute right-2 left-2 mb-8 md:right-1/2">
          By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.
        </footer>
      </div>

      {/* Right Column */}
      <div className="h-0 invisible md:visible md:w-1/2 md:h-full">
        {/* Image */}
        <img
          src={burger}
          alt="Background"
          className="object-cover h-full w-full"
        />
      </div>
    </div >
  )
}