import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

const Attendance = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [responseFromServer, setResponseFromServer] = useState(null);
    const [loading, setLoading] = useState(false);

    const onFileChange = (e) => {
        e.preventDefault();
        console.log(e.target.files);
        setSelectedFile(e.target.files[0]);
    }

    const onFileUpload = async (e) => {
        setLoading(!loading);
        const data = new FormData();
        data.append("image", selectedFile, selectedFile.name);
        const response = await axios.post('http://127.0.0.1:8080/', data)
            .then(data => {
                setResponseFromServer(data);
                setLoading(false);
            })
            .catch(e => {
                setResponseFromServer(e.response);
                setLoading(false);
            });

        console.log(response);

    }

    return (
        // header component comes here
        <main>
            <div className="container mx-auto">
                <div className="py-10 px-4 flex flex-col justify-center min-h-screen">
                    <p className="text-blue-600 text-4xl font-semibold">Let's start by uploading a class photo. Click below to upload a photo for attendance.</p>
                    <input onChange={onFileChange} style={{ display: "none" }} id="file" type="file" accept="image/*" />
                    <label htmlFor="file" className="mt-3 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-gray-200 text-lg font-semibold py-2 px-4 border-2 border-blue-600 cursor-pointer text-center shadow-md">
                        {selectedFile ? selectedFile.name : 'Please Select a File'}
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

                    {/* Success/Error Messages */}
                    {
                        responseFromServer && (responseFromServer.status === 200 ? (<div className="mt-4 bg-teal-100 border-t-2 border-teal-500 text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div className="flex items-center">
                                <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                <div>
                                    <p className="font-bold">{responseFromServer.data.message}</p>
                                    {/* <p className="text-sm">{responseFromServer.data.message}</p> */}
                                </div>
                            </div>
                        </div>)
                            :
                            (<div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 shadow-md" role="alert">
                                <strong className="font-bold">{responseFromServer.data.message}</strong>
                            </div>))
                    }

                </div>
            </div>
        </main>
        // header component comes here
    )
}

export default Attendance;