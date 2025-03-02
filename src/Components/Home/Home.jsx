import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-center text-4xl mt-10 text-blue-600 animate-bounce">Welcome to Firebase Operation</h1>
            <div className="flex justify-center mt-10">
                <div className="max-w-md p-6 bg-white rounded-lg shadow-md transform transition duration-500 hover:scale-105">
                    <h2 className="text-2xl font-bold mb-4 text-blue-600">About This Project</h2>
                    <p className="text-gray-700 mb-4">
                        This project demonstrates Firebase operations with a simple React application. 
                        You can explore various features and functionalities implemented using Firebase.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;