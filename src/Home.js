import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // Header component comes here
        <main>

            <div className=" flex flex-col md:flex-row min-h-screen">
                <div className="flex flex-1 bg-red-500 justify-center items-center">
                    <div className="px-6 py-4 text-center w-full">
                        <p className="text-white font-bold text-3xl md:text-5xl">View Attendance</p>
                        <p className="mt-3 text-white text-sm md:text-lg">View the previously recorded attendance data.</p>
                        <Link className="inline-block mx-auto mt-6 w-2/3 md:w-1/2 bg-white text-red-500 text-lg md:text-2xl font-bold py-2 px-4 rounded-full" to="/view">
                            VIEW
                        </Link>
                    </div>
                </div>
                <div className="flex flex-1 bg-blue-600 justify-center items-center">
                    <div className="px-6 py-4 text-center w-full">
                        <p className="text-white font-bold text-3xl md:text-5xl">Take Attendance</p>
                        <p className="mt-3 text-white text-sm md:text-lg">Let our machine learning algorithm automatically detect your student's face.</p>
                        <Link className="inline-block mx-auto mt-6 w-2/3 md:w-1/2 bg-white text-blue-600 text-lg md:text-2xl font-bold py-2 px-4 rounded-full" to="/attendance">
                            TAKE
                        </Link>
                    </div>
                </div>

            </div>
        </main>
        // Footer component comes here
    );
}

export default Home;