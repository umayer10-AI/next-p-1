"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const {register,handleSubmit,watch,formState: { errors }} = useForm()

    const [c,setC] = useState(false)

    const a = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            rememberMe: true,
            callbackURL: "/",
        });
        
        console.log({data,error})
        
        if(data){
            alert("Login successfully")
        }
        if(error){
            alert(error.message)
        }
    }

    // console.log(errors)

    return (
         <div>
            <div className='flex justify-center mt-5 mb-10'>
                <form onSubmit={handleSubmit(a)} className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">

                    <h2 className='text-3xl font-semibold text-center mb-5'>Login your account</h2>

                    <label className="label text-black font-semibold text-base">Email address</label>
                    <input type="email" className="input w-full" placeholder="Enter email address" {...register("email", { required: "Email filed required" })} />
                    {errors.email && <p className='text-red-600 font-semibold'>{errors.email.message}</p>}

                    <label className="label text-black font-semibold text-base">Password</label>
                    <input type={c?"text":"password"} className="input w-full" placeholder="Enter your password"  {...register("password", { required: "Password filed required" })} />
                    <span onClick={() => setC(!c)}>{c ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                    {errors.password && <p className='text-red-600 font-semibold'>{errors.password.message}</p>}

                    <button className="btn btn-neutral my-4">Login</button>

                    <p className='text-center font-semibold text-base'>Dont’t Have An Account ? <Link href={'/signup'} className='text-red-600'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;