import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // Header component comes here
        <main>
            <div className="flex flex-col justify-center items-center h-screen">
                <p className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center px-5">Automated Attendance System</p>
                <Link className="mt-3 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600" to="/attendance" >
                    Get Started
                </Link>
            </div>
        </main>
        // Footer component comes here
    );
}

export default Home;