import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        // Header component comes here
        <main>

            <div className=" flex flex-col md:flex-row min-h-screen">
                <div className="flex flex-1 bg-red-500 justify-center items-center">
                    <div className="px-6 py-4 text-center">
                        <p className="text-white font-bold text-3xl md:text-5xl">View Attendance</p>
                        <p className="mt-3 text-white text-sm md:text-lg">View the previously recorded attendance data</p>
                        <Link className="inline-block mx-auto mt-6 w-2/3 bg-white text-red-500 text-lg md:text-2xl font-bold py-2 px-4 rounded-full" to="/view">
                            VIEW
                        </Link>
                    </div>
                </div>
                <div className="flex flex-1 bg-blue-600 justify-center items-center">
                    <div className="px-6 py-4 text-center">
                        <p className="text-white font-bold text-3xl md:text-5xl">Take Attendance</p>
                        <p className="mt-3 text-white text-sm md:text-lg">Let out machine learning algorithm automatically detect your students face</p>
                        <Link className="inline-block mx-auto mt-6 w-2/3 bg-white text-blue-600 text-lg md:text-2xl font-bold py-2 px-4 rounded-full" to="/take">
                            TAKE
                        </Link>
                    </div>
                </div>

            </div>
            {/* <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center min-h-screen py-10 px-4">
                    <p className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">Automated Attendance System</p>
                    <Link className="mt-3 w-full bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 text-center" to="/view">
                        View Attendance
                    </Link>
                    <Link className="mt-3 w-full bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 text-center" to="/attendance">
                        Take Attendance
                    </Link>
                </div>
            </div> */}
        </main>
        // Footer component comes here
    );
}

export default Home;