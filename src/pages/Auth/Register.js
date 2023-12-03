import React, { useState } from 'react';
import Layout from '../../component/layOuts/Layout';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import axios from "axios"


const Register = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const navigate=useNavigate()
     const handlesubmit=async(e)=>{
        e.preventDefault()
       try {
       
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address });
        ;

        if(res.data.success){
            toast.success(res.data.message)
            navigate('/login')
        }else{
            toast.error(res.data.message)
        }
       } catch (error) {
        console.log(error);
        toast.error('SomeThing Went Wrong')
       }
       
     }
    return (
        <Layout>
            <div className='Register'>
                 <h1>Register</h1>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'  className="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password ' className="form-control" required id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <input type="" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Number'  className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={address}  onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address' className="form-control" id="exampleInputPassword1" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    );
};

export default Register;