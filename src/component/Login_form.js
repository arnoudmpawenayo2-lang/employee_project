import react from "react";
import { useState } from "react";
import Dashboard   from "./Dashboard";
function Login_form({showpage}){

    const handleLogin=(a)=>{
        a.preventDefault();
        showpage("Dashboard")

    }
    
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <form className="w-[400px] p-4 bg-gray-200 rounded-lg shadow-md" onSubmit={handleLogin}>
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                </div>
                <div className="flex items-center justify-between">
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}
export default Login_form;
