import React from "react";

const ProfilePage = ({ params }: any) => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1>Profile</h1>
         <hr />
         <p className="text-4xl">Profile page</p>
         <span className="p-4  rounded bg-orange-400  text-black">{params.id}</span>
      </div>
   );
};

export default ProfilePage;
