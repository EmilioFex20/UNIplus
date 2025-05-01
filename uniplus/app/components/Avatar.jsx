"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Avatar() {
    async function onClickLogout(){
        const response = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            window.location.href = "/";
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Error al cerrar sesión");
        }
    }
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
    return (
    <div className="relative" ref={menuRef}> 
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-16 h-16 transition rounded-full border-4 border-[#2f66a5] hover:border-[#85baf7] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
        <div className="absolute right-0 bg-white text-black rounded-lg w-44 z-50 border-2 border-gray-400">
            <div className="p-2">
                <ul className="text-sm py-2">
                    <button className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 w-full"> 
                        <li >👤 View Profile</li>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 w-full"> 
                        <li >⚙️ Manage Account</li>
                    </button>
                    <hr className="my-2 text-gray-400" />
                    <button className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 w-full"> 
                        <li >🏅 Badges</li>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 w-full"> 
                        <li >🏠 My Courses</li>
                    </button>
                    <button className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 w-full"> 
                        <li >🔑 Access</li>
                    </button>
                    <hr className="my-2 text-gray-400"/>
                    <button onClick={onClickLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 w-full"> 
                        <li >🚪 Log Out</li>
                    </button>
                </ul>
            </div>
        </div>
        )}
      </div>
    );
}