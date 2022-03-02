import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Login = () => {
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const formSubmit = () => {
        if ( userName === "admin" && password === "admin" ) {
            localStorage.setItem("authKey", "exampleKey123");
            navigate("/");
        }
    };

    return (
        <div className="w-12/12 flex justify-center items-center h-screen">
            <div className="w-4/12 text-center p-14 flex justify-center mx-auto border-gray-300 border-2 rounded">
                <form onSubmit={formSubmit} className="text-center">
                    <h2 className="text-2xl capitalize">Welcome in Pokepedia</h2>
                    <p className="text-sm pb-6">If you want login use (Username: admin, Password: admin)</p>
                    <input
                        className="block mb-4 border-2 border-gray-100 p-3 rounded mx-auto"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        className="block mb-4 border-2 border-gray-100 p-3 rounded mx-auto"
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="mt-4 pt-2 pb-2 pr-8 pl-8 rounded bg-gray-400 text-white" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
