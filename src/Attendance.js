import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const Attendance = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [subject, setSubject] = useState('IOT');
    const [className, setClassName] = useState('8 A');
    const [responseFromServer, setResponseFromServer] = useState(null);
    const [loading, setLoading] = useState(false);


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
        await axios.post(`http://127.0.0.1:8080/face-detection/${subject}/${className}`, data)
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
                <div className="flex flex-1 justify-center items-center px-6 py-4">
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
                                selectedFile && <button onClick={onFileUpload} className="mt-10 w-full bg-white text-blue-600 text-lg md:text-3xl font-bold py-2 px-4 cursor-pointer rounded-full shadow-md">

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
                <div className="flex flex-1 justify-center items-center px-6 py-4">
                    <p className="text-white text-xl">
                        Result Section Comes here
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime veniam amet id facere natus quaerat ipsum accusamus dolores, et sit necessitatibus provident dolore cum odio eveniet ex sint. At, commodi.
                        </p>
                </div>
            </div>

            {/* <div className="container mx-auto">
                <div className="py-10 px-4 flex flex-col justify-center min-h-screen">
                    <p className="text-blue-600 text-3xl sm:text-4xl lg:text-5xl font-semibold">Please select the subject and the class</p>

                    Select inputs below this 
                    <label className="mt-3 text-blue-600 font-semibold">Subject</label>
                    <div className="mt-1 inline-block relative">
                        <select value={subject} onChange={handleSubjectChange} className="block appearance-none w-full text-blue-600 font-semibold bg-transparent border-2 border-blue-600 py-2 px-4 pr-8 shadow-md focus:outline-none">
                            <option value="IOT">IOT</option>
                            <option value="BDA">BDA</option>
                            <option value="SMS">SMS</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <label className="mt-3 text-blue-600 font-semibold">Class</label>
                    <div className="mt-1 inline-block relative">
                        <select value={className} onChange={handleClassNameChange} className="block appearance-none w-full text-blue-600 font-semibold bg-transparent border-2 border-blue-600 py-2 px-4 pr-8 shadow-md focus:outline-none">
                            <option value="8 A">8 A</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <input onChange={onFileChange} style={{ display: "none" }} id="file" type="file" accept="image/*" />
                    <label htmlFor="file" className="mt-10 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 cursor-pointer text-center shadow-md">
                        {selectedFile ? selectedFile.name : 'Select/Click Picture'}
                    </label>
                    {
                        selectedFile && <button onClick={onFileUpload} className="mt-3 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 cursor-pointer  shadow-md">

                            {
                                loading ? <ClipLoader
                                    loading={loading}
                                    size={"1.125rem"}
                                    color={"#3182CE"}
                                /> :
                                    'Submit'
                            }

                        </button>
                    }

                    Success/Error Messages
                    {
                        responseFromServer && (responseFromServer.status === 200 ? (<div className="mt-4 bg-teal-100 border-t-2 border-teal-500 text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div className="flex items-center">
                                <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                <div>
                                    <p className="font-bold">
                                        Attendance Saved
                                    </p>
                                    <p className="font-bold">
                                        {`Present - ${responseFromServer.data.result.present.length}`}
                                    </p>
                                    <p className="font-bold">
                                        {`Absent - ${responseFromServer.data.result.absent.length}`}
                                    </p>
                                    <p className="text-sm">{responseFromServer.data.message}</p>
                                </div>
                            </div>
                        </div>)
                            :
                            (<div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 shadow-md" role="alert">
                                <strong className="font-bold">{responseFromServer.data.message}</strong>
                            </div>))
                    }

                </div>
            </div> */}
        </main>
        // header component comes here
    )
}

export default Attendance;