import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import ViewCard from './ViewCard';

const Attendance = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [subject, setSubject] = useState('IOT');
    const [className, setClassName] = useState('8 A');
    const [responseFromServer, setResponseFromServer] = useState(null);
    const [loading, setLoading] = useState(false);

    const { students } = props;


    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleClassNameChange = (e) => {
        setClassName(e.target.value);
    }

    const onFileChange = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        setSelectedFile(e.target.files[0]);
    }

    const onFileUpload = async (e) => {
        setLoading(!loading);
        const data = new FormData();
        data.append("image", selectedFile, selectedFile.name);
        await axios.post(`${process.env.REACT_APP_TAKE_ATTENDANCE_ENDPOINT}/${subject}/${className}`, data)
            .then(data => {
                console.log(data);
                setResponseFromServer(data);
                setLoading(false);
            })
            .catch(e => {
                setResponseFromServer(e.response);
                setLoading(false);
            });
    }

    return (
        // header component comes here
        <main className="bg-blue-600">
            <div className="container mx-auto flex flex-col md:flex-row min-h-screen">
                <div className="flex md:flex-1 justify-center md:items-center px-6 py-4">
                    <div className="text-center w-full">

                        <p className="text-white font-bold text-3xl md:text-5xl">Take Attendance</p>
                        <div className="flex mt-3">
                            <div className="w-full inline-block relative mr-4">
                                <select value={subject} onChange={handleSubjectChange} className="block appearance-none w-full text-blue-600 text-sm md:text-xl font-semibold bg-white py-2 pl-4 pr-6 shadow-md focus:outline-none">
                                    <option value="IOT">IOT</option>
                                    <option value="BDA">BDA</option>
                                    <option value="SMS">SMS</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                            <div className="w-full inline-block relative ml-4">
                                <select value={className} onChange={handleClassNameChange} className="block appearance-none w-full text-blue-600 text-sm md:text-xl font-semibold bg-white py-2 pl-4 pr-6 shadow-md focus:outline-none">
                                    <option value="8 A">8 A</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 w-full">
                            <input onChange={onFileChange} style={{ display: "none" }} id="file" type="file" accept="image/*" />
                            <label htmlFor="file" className="w-full h-32 flex justify-center items-center inline-block bg-transparent text-white font-semibold py-2 px-4 border-2 border-dashed border-white cursor-pointer text-center shadow-md">
                                {
                                    !selectedFile && <span className=" text-6xl mr-10 font-hairline">+</span>
                                }

                                <span className="text-sm md:text-xl">
                                    {selectedFile ? selectedFile.name : 'Add photos of the class'}
                                </span>

                            </label>
                            {
                                selectedFile && <button disabled={loading} onClick={onFileUpload} className={'mt-10 w-full text-blue-600 text-lg md:text-3xl font-bold py-2 px-4 rounded-full shadow-md' + ' ' + (loading ? 'cursor-not-allowed bg-gray-400' : 'cursor-pointer bg-white')}>

                                    {
                                        loading ? <ClipLoader
                                            loading={loading}
                                            size={"1.125rem"}
                                            color={"#3182CE"}
                                        /> :
                                            'SUBMIT'
                                    }

                                </button>
                            }
                        </div>

                    </div>
                </div>
                <div className="flex md:flex-1 justify-center md:items-center px-6 py-4">
                    {
                        responseFromServer && (responseFromServer.status === 200 ? (
                            <ViewCard attendance={responseFromServer.data.result} students={students} />
                        )
                            :
                            (<div className="w-full text-xl bg-red-100 text-red-700 px-4 py-2 shadow-md" role="alert">
                                <strong className="font-bold">{responseFromServer.data.message}</strong>
                            </div>))
                    }
                </div>
            </div>
        </main>
        // footer component comes here
    )
}

export default Attendance;