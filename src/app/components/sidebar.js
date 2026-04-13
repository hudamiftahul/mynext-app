"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function sidebar() {
    
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/", icon: "fas fa-home" },
    { name: "User", path: "/user", icon: "fas fa-users" },
    { name: "Kategori", path: "/kategori" },
  ];

  return (
    <div
      className={`bg-dark text-white p-3 d-flex flex-column`}
      style={{
        width: collapsed ? "80px" : "250px",
        minHeight: "100vh",
        transition: "0.3s",
      }}
    >
      {/* 🔥 HEADER + TOGGLE */}
      <div className="d-flex justify-content-between align-items-center mb-4">
    
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>
      </div>

      {/* 🔥 MENU */}
      <ul className="nav flex-column">
        {menu.map((item) => {
          const isActive = pathname.startsWith(item.path);

          return (
            <li key={item.path} className="nav-item mb-2">
              <Link
                href={item.path}
                className={`nav-link d-flex align-items-center gap-2 ${
                  isActive ? "bg-primary text-white" : "text-white"
                } rounded`}
              >
                {/* ICON */}
                <i className={item.icon}></i>

                {/* TEXT (hidden saat collapse) */}
                {!collapsed && <span>{item.name}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}