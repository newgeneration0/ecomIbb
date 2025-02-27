import React, { useState } from "react";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [prefix, setPrefix] = useState(91);
  const [mobile, setMobile] = useState("");

  return (
    <div className="bg-gray-100 pb-25 pt-10">
        <div>
            <h3 className="text-lg font-semibold text-center">REGISTER</h3>
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
                <div className="relative mt-10">
                <input
                    type="text"
                    // id="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer w-106 px-1 pt-2 pb-1 border-b text-xs border-gray-900 focus:outline-none focus:ring- focus:ring-blac"
                    placeholder=" " // Ensures the label stays inside when empty
                />
                <label
                    // htmlFor="input"
                    className={`absolute left-0 transition-all duration-300
                    ${name || "peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-blue-500"}
                    ${name ? "top-[-0.5rem] text-xs text-gray-500" : "top-1/2 text-xs text-gray-500"}
                    peer-focus:text-xs peer-focus:text-gray-500
                    transform -translate-y-1/2`}
                >
                    NAME
                </label>
                </div>
                <div className="flex space-x-3 mt-10">
                    <div className="relative mt-">
                    <input
                        type="text"
                        id="input"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                        className="peer w-20 px-1 pt-2 pb-1 border-b text-xs border-gray-900 focus:outline-none focus:ring- focus:ring-blac"
                        placeholder=" " // Ensures the label stays inside when empty
                    />
                    <label
                        htmlFor="input"
                        className={`absolute left-0 transition-all duration-300
                        ${prefix || "peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-blue-500"}
                        ${prefix ? "top-[-0.5rem] text-xs text-gray-500" : "top-1/2 text-xs text-gray-500"}
                        peer-focus:text-xs peer-focus:text-gray-500
                        transform -translate-y-1/2`}
                    >
                        PREFIX
                    </label>
                    </div>
                    <div className="relative mt-">
                    <input
                        type="text"
                        id="input"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="peer w-86 px-1 pt-2 pb-1 border-b text-xs border-gray-900 focus:outline-none focus:ring- focus:ring-blac"
                        placeholder=" " // Ensures the label stays inside when empty
                    />
                    <label
                        htmlFor="input"
                        className={`absolute left-0 transition-all duration-300
                        ${mobile || "peer-focus:top-[-0.5rem] peer-focus:text-xs peer-focus:text-blue-500"}
                        ${mobile ? "top-[-0.5rem] text-xs text-gray-500" : "top-1/2 text-xs text-gray-500"}
                        peer-focus:text-xs peer-focus:text-gray-500
                        transform -translate-y-1/2`}
                    >
                        MOBILE
                    </label>
                    </div>
                </div>
                
                <div className="text-righ mt-8">
                   <p className="text-xs text-gray-800">WE WILL SEND YOU AN SMS TO VERIFY<br/>YOUR PHONE NUMBER</p>
                </div>
                <div className="mt-8">
                    <div className="mb-4">
                        <input type="checkbox" />
                        <label className="text-xs text-gray-800">I WISH TO RECEIVE IBB NEWS ON MY EMAIL</label>
                    </div>
                    {/* <br/> */}
                    <div>
                        <input type="checkbox" />
                        <label className="text-xs text-gray-800">I ACCEPT THE <a href="/" className="underline">TERMS AND CONDITIONS</a></label>
                    </div>
                    
                </div>
                <div className="mt-10 space-y-4">
                    <button className='flex border py-3 px- w-55 items-center justify-center  text-gray-800 hover:text-gray-500 text-xs'>BECOME A MEMBER</button>
                    <button className='flex border text-xs bg-black hover:opacity-81 text-gray-100 py-3 px- w-55 items-center justify-center'>SIGN IN</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Register