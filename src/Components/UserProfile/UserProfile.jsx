import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/SignUpPage'); // If no user, redirect to SignUp page
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser(null);
            navigate('/SignUpPage');
        });
    };

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-10 rounded-lg shadow-md text-center">
                    <h1 className="text-2xl mb-4">User Profile</h1>
                    {user ? (
                        <div>
                            {user.displayName && <p><strong>Name:</strong> {user.displayName}</p>}
                            <p><strong>Email:</strong> {user.email}</p>
                            {user.photoURL && <img src={user.photoURL} alt="Profile" className="w-[100px] border h-[100px] rounded-full mx-auto mt-4" />}
                            <button onClick={handleLogout} className="mt-5 bg-red-500 text-white p-3 rounded">Logout</button>
                        </div>
                    ) : (
                        <p>No user data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;