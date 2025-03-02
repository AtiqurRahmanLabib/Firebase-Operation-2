import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../Firebase/firebase.init';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [password, setPassword] = useState('');
    const [resgistredError, setResgistred] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const accepted = e.target.terms.checked;

        if (password.length < 6) {
            setResgistred('Password must be at least 6 characters long');
            return;
        }
        else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setResgistred('Password must contain at least two upper case letters');
            return;
        }
        else if (!accepted) {
            setResgistred('Please accept our Terms and condition');
            return;
        }
    
        setResgistred('');
        setSuccess('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess('Account created successfully');
            })
            .catch(error => {
                console.log(error);
                setResgistred(error.message);
            })
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <form onSubmit={handleSignUp} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? "password" : "text"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-9 right-5 cursor-pointer'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <div className='items-center flex mt-2'>
                            <input type="checkbox" name="terms" id="" />
                            <label className='ml-2' htmlFor="terms">Please accept our Terms and condition</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                </form>
                {resgistredError && <p className="text-red-500 text-center font-bold">{resgistredError}</p>}
                {success && <p className="text-green-500 text-center font-bold">{success}</p>}
            </div>
        </div>
    );
};

export default SignUp;