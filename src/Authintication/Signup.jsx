import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Components/useAxiosPublic';
import { AuthContext } from '../Provider/AuthPorvider';
import google from '../assets/google 1.png'
import loginImg from '../assets/authentication2.png'
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import Lottie from 'lottie-react';
import signin from '../../public/signin.json';

const Signup = () => {

  const {createUser,updateUser,googleLogin} = useContext(AuthContext);
  const axiosPublic=useAxiosPublic()
  const navigate=useNavigate()
  const [registerError,setRegisterError]=useState('')
  

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const photo = e.target.photo.value;
   

    // console.log(name, email, pass, photo);
    setRegisterError(' ')

//     if(pass.length<5){
//  setRegisterError('Password must be more than Five character !!')
//  return
//     }
//     else if(!/[A-Z]/.test(pass)){
//      setRegisterError('Password must have One Capital letter!!')
//      return
//     }
//  else if(!/[a-z]/.test(pass)){
//  setRegisterError('Password must have One Small letter!!')
//  return
//  }
//  else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass)){
//  setRegisterError('Password must have One Special Character!!')
//  return
//  }


    createUser(email, pass)
      .then((result) => {
        console.log(result.user);
        updateUser(name, photo)
        .then(()=>{
          const userInfo={
            name, photo,email
          }
   axiosPublic.post('/users',userInfo)
   .then(res=>{
    
    if(res.data.insertedId){
      // console.log('database e gesega')
      Swal.fire("User created Successful!");
      navigate('/')
    }
   })

         
        })
        .catch(error=>console.log(error))
        
      })
      .catch((error) => {
        setRegisterError(error.message)
      });
  };

  // google login
  const handleGoogle=()=>{
    googleLogin()
    .then(result=>{
      console.log(result)
      const userInfo={
        email:result.user?.email,
        name:result.user?.name
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        
        Swal.fire("User created Successful!");
        navigate('/')
      })
      
    })
    .catch(error=>console.log(error))
    }

    return (
        <div className="hero  min-h-screen ">
      <div className="mt-10 hero-content flex-col lg:flex-row-reverse shadow-xl py-5 lg:py-12 lg:px-28 ">
      <div className="">
    <Lottie animationData={signin} className="w-full  h-full md:h-[400px] lg:h-full" />
    </div>
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type=""
                name="photo"
                placeholder="Photo"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="pass"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {
         registerError &&  <p className='text-red-600 text-lg'>{registerError}</p>
     }
            <div className="form-control mt-6">
              <button className="btn text-white  bg-gradient-to-r from-[#4394e1] to-[#72e4cd]">Sign Up</button>
            </div>
          </form>
          <p className="text-[#3B9DF8] text-center mt-">
            Have Account?{" "}<Link to="/login">
              <span className="text-xl"> Sign In</span>
            </Link>
            <div className='flex mt-3 gap-4 justify-center items-center mb-4'>
        <h1 className='text-[#3B9DF8] text-lg'>Sign In with Google</h1>
        <FaGoogle  className='text-[#3B9DF8] text-xl' onClick={handleGoogle}/>
        
      </div>
            
          </p>

        </div>
        
      </div>
    </div>
    );
};

export default Signup;