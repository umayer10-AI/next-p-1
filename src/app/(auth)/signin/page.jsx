import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
         <div>
            <div className='flex justify-center mt-5 mb-10'>
                <form className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-8">

                    <h2 className='text-3xl font-semibold text-center mb-5'>Register your account</h2>

                    <label className="label text-black font-semibold text-base">Email address</label>
                    <input type="email" className="input w-full" placeholder="Enter email address" />

                    <label className="label text-black font-semibold text-base">Password</label>
                    <input type="password" className="input w-full" placeholder="Enter your password" />

                    <button className="btn btn-neutral my-4">Login</button>

                    <p className='text-center font-semibold text-base'>Dont’t Have An Account ? <Link href={'/signup'} className='text-red-600'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;