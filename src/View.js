import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const View = (props) => {
    const [attendance, setAttendance] = useState(null);
    const { students } = props;

    useEffect(() => {
        axios.get('http://127.0.0.1:8080/attendance')
            .then(response => setAttendance(response.data.attendance))
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            {/* conditionally Render ViewCard component here and pass the attendance state and students prop as prop  */}
            View
        </div>
    );
};

export default View;