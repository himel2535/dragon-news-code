import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="space-y-5">
      <h1 className="font-semibold"> Login With</h1>
      <div className="space-y-2">
        <button className="btn w-full btn-outline btn-secondary">
          <FcGoogle size={24} />
          Login With Google
        </button>
        <button className="btn w-full btn-outline btn-primary">
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
