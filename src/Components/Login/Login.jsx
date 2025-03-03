import React, { useRef, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import auth from '../../Firebase/firebase.init';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const emailRef = useRef(null);
    const [success, setSuccess] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();   
        setSuccess('');
        setErrorMessage('');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if(!result.user.emailVerified){
                    setErrorMessage('Please verify your email');
                    return;
                }
                setSuccess('Login successful');
            })
            .catch(error => {
                const errorMessage = setErrorMessage(error.message);
                setErrorMessage(errorMessage);
            });
    };

    const handleForgetPassword = () => {
       const email = emailRef.current.value;
       if(!email){
        setErrorMessage('Please enter your email');
        return;
       }
       else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        setErrorMessage('Please enter a valid email');
        alert('Please enter a valid email');
        return;
       }
       sendPasswordResetEmail(auth, email)
        .then(() => {
            setSuccess('Password reset email sent');
            alert('Password reset email sent');
        })
        .catch((error) => {
            setErrorMessage(error.message);
            alert(error.message);
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            ref={emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div >
                    <div className="form-group relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type={showPassword ? "password" : "text"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className='absolute top-9 right-5 cursor-pointer'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <button onClick={handleForgetPassword} className='mt-1 '>Forget password</button>
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
                        Login
                    </button>
                    <div className='flex gap-2'>
                        <p className='font-bold'>No account?</p>
                        <Link className='text-red-500 font-bold' to="/SignUpPage">Create one</Link>
                    </div>
                </form>
                <div className="text-red-500 text-center font-bold">{errorMessage}</div>
                <div className="text-green-500 text-center font-bold">{success}</div>
            </div>
        </div>
    );
};

export default Login;