import React,{useState} from 'react';
import Layout from '../../component/layOuts/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


const Login = () => {
   
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    const navigate=useNavigate()
    const handlesubmit=async(e)=>{
        e.preventDefault()
       try {
       
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {email,password });
        ;

        if(res.data.success){
            toast.success(res.data.message)
            navigate('/')
        }else{
            toast.error(res.data && res.data.message)
        }
       } catch (error) {
        console.log(error);
        toast.error('SomeThing Went Wrong')
       }
       
     }
    return (
        <div>
            <Layout>
            <div className='Register'>
                 <h1>Login</h1>
                <form onSubmit={handlesubmit}>
                    
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'  className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password ' className="form-control" required id="exampleInputPassword1" />
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        </Layout>
        </div>
    );
};

export default Login;