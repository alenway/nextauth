"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignupPage = () => {
   const [user, setUser] = useState({
      email: "",
      password: "",
      username: "",
   });

   const onSignup = async () => {};
   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1>signup</h1>
         <hr />
         <label htmlFor="username">username</label>
         <input
            className="p-2 border border-gray-300 rounded-2xl"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
         />
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
         <button onClick={onSignup} className="py-2 border border-gray-300">
            signup here
         </button>
         <Link href="/login">visit login page</Link>
      </div>
   );
};

export default SignupPage;
