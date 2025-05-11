

import google from '../assets/google 1.png'
import loginImg from '../assets/authentication2.png'
import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthPorvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../Components/useAxiosPublic';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa6';
import Lottie from 'lottie-react';
import signin from '../../public/Animation - 1746973850327.json';

const Login = () => {
    const{login,googleLogin}=useContext(AuthContext)
    const axiosPublic=useAxiosPublic()
    const location = useLocation();
    const navigate =useNavigate()


    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value
        console.log(email,pass)
        
        
        login(email,pass)
        .then(result=>{
        console.log(result.user)
        Swal.fire("Login Successful!");
        navigate(location?.state ? location.state :'/')
        })
        .catch(()=>{
          toast.error("Wrong Email or Password !!");
        })
          }
        


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
        console.log(res.data)
        Swal.fire("User Login Successfully!");
        navigate(location?.state ? location.state :'/')
      })
      
    })
    .catch(error=>console.log(error))
    }

    return (
        <div className="hero ">
  <div className="mt-20 hero-content flex-col lg:flex-row shadow-xl py-5 lg:py-12 lg:px-28 ">
  <div className="">
    <Lottie animationData={signin} className="w-full  h-full md:h-[400px] lg:h-full" />
    </div>

  <div className="card shrink-0 w-full max-w-sm ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        
       
        
        <div className="form-control mt-6">
          <button  className="btn text-white  bg-gradient-to-r from-[#4394e1] to-[#72e4cd]">Sign In</button>
        </div>
      </form>
      <div className='flex mt-3 gap-4 justify-center items-center mb-4'>
        <h1 className='text-[#3B9DF8] text-lg'>Sign In with Google</h1>
        <FaGoogle  className='text-[#3B9DF8] text-xl' onClick={handleGoogle}/>
        
      </div>
      <p className='text-[#3B9DF8] text-center mt-'>New here? <Link to='/signup'><span className='text-lg'>SIGN UP</span></Link></p>

    </div>
    
    
  </div>
</div>
    );
};

export default Login;