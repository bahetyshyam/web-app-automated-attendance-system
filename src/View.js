import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import ViewCard from './ViewCard';

const View = (props) => {
    const [attendance, setAttendance] = useState(null);
    const { students } = props;

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/attendance')
            .then(response => setAttendance(response.data.attendance))
            .catch(err => console.log(err));
    }, []);


    return (
        <main className="bg-blue-600">
            <div className="container mx-auto min-h-screen">
                <div className="px-6 py-4">
                    <p className="font-bold text-white text-3xl text-center">View Attendance</p>

                    <div className="mt-5">
                        <ViewCard />
                        <ViewCard />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default View;