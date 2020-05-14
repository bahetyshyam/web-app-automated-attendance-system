import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // Header component comes here
        <main>
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center min-h-screen py-10 px-4">
                    <p className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">Automated Attendance System</p>
                    <Link className="mt-3 w-full bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 text-center" to="/view">
                        View Attendance
                    </Link>
                    <Link className="mt-3 w-full bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 text-center" to="/attendance">
                        Take Attendance
                    </Link>
                </div>
            </div>
        </main>
        // Footer component comes here
    );
}

export default Home;