import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] dark:bg-[#1c1c24] rounded-[20px] w-full flex items-center justify-center text-black dark:text-white gap-2 font-epilogue p-4 mt-10 text-center shadow-md">
      <a target="_blank" href="https://github.com/Vaishnavi024/BlockFund" rel="noopener noreferrer">
        <span className="inline-block text-center px-4 py-2 rounded-lg bg-[#c8cbcecb] dark:bg-[#2c2f32] text-[#1cba6b] font-semibold">
          BlockFund
        </span>
      </a>
    </div>
  );
};

export default Footer;
