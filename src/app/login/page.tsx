"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignupPage = () => {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const onLogin = async () => {};
   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1>login</h1>
         <hr />

         <label htmlFor="email">email</label>
         <input
            className="p-2 border border-gray-300 rounded-2xl"
            id="email"
            type="password"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
         />
         <label htmlFor="password">password</label>
         <input
            className="p-2 border border-gray-300 rounded-2xl"
            id="password"
            type="text"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
         />
         <button onClick={onLogin} className="py-2 border border-gray-300">
            login here
         </button>
         <Link href="/signup">visit signup page</Link>
      </div>
   );
};

export default SignupPage;
