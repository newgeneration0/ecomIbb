import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-gray-100 pb-25 pt-10">
        <div>
            <h3 className="text-lg font-semibold text-center">SIGN IN</h3>
        </div>
        <div className="mt-4">
            <p className="text-center text-xs ms-4">SING IN - DON&apos;T MISS OUT ON OFFERS VOUCHERS DEALS DISCOUNTS AND <br/> BONUS</p>
        </div>
        <div className="flex justify-center items-center mt-10">
            <form className="borde p-1">
                <div className="relative">
                <input
                    type="text"
                    // id="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="peer w-106 px-1 pt-2 pb-1 border-b text-xs border-gray-900 focus:outline-none focus:ring- focus:ring-blac"
                    placeholder=" " // Ensures the label stays inside when empty
                />
                <label
                    // htmlFor="input"
                    className={`absolute left-0 transition-all duration-300
                    ${email || "peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-blue-500"}
                    ${email ? "top-[-0.5rem] text-xs text-gray-500" : "top-1/2 text-xs text-gray-500"}
                    peer-focus:text-xs peer-focus:text-gray-500
                    transform -translate-y-1/2`}
                >
                    EMAIL
                </label>
                </div>
                <div className="relative mt-10">
                <input
                    type="text"
                    id="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="peer w-106 px-1 pt-2 pb-1 border-b text-xs border-gray-900 focus:outline-none focus:ring- focus:ring-blac"
                    placeholder=" " // Ensures the label stays inside when empty
                />
                <label
                    htmlFor="input"
                    className={`absolute left-0 transition-all duration-300
                    ${password || "peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-blue-500"}
                    ${password ? "top-[-0.5rem] text-xs text-gray-500" : "top-1/2 text-xs text-gray-500"}
                    peer-focus:text-xs peer-focus:text-gray-500
                    transform -translate-y-1/2`}
                >
                    PASSWORD
                </label>
                </div>
                <div className="text-righ mt-3">
                    <a href='/' className="text-xs underline">FORGOTTEN PASSWORD?</a>
                </div>
                <div className="mt-14 space-y-4">
                    <button className='flex border text-xs bg-black hover:opacity-81 text-gray-100 py-3 px- w-55 items-center justify-center'>SIGN IN</button>
                    <button className='flex border py-3 px- w-55 items-center justify-center  text-gray-800 hover:text-gray-500 text-xs'>BECOME A MEMBER</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Login