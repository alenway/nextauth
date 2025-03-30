"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Form as ShadForm } from "@/components/ui/form";

import { Input } from "@/components/ui/input";

// ✅ Define the validation schema using Zod
const formSchema = z.object({
   username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
   }),
});
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

const SignupPage = () => {
   // ✅ Initialize useForm with validation schema
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         username: "",
      },
   });

   // ✅ Define the form submission handler
   const onSubmit = (data: { username: string }) => {
      console.log("Form Submitted:", data);
   };
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const onLogin = async () => {};
   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <ShadForm {...form}>
            {/* ✅ Ensure form.handleSubmit and onSubmit exist */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               {/* Email field */}
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input
                              id="email"
                              type="text"
                              value={user.email}
                              onChange={(e) => setUser({ ...user, email: e.target.value })}
                              placeholder="email"
                           />
                        </FormControl>
                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                        <FormMessage />
                     </FormItem>
                  )}
               />
               {/* Password field */}
               <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input
                              id="email"
                              type="passwrod"
                              value={user.password}
                              onChange={(e) => setUser({ ...user, email: e.target.value })}
                              placeholder="password"
                           />
                        </FormControl>
                        {/* <FormDescription>This is your public display name.</FormDescription> */}
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button onClick={onLogin} type="submit">
                  Submit
               </Button>
               <Link className="ml-6" href="/signup">
                  <Button>go to signup</Button>
               </Link>
            </form>
         </ShadForm>
      </div>
   );
};

export default SignupPage;
