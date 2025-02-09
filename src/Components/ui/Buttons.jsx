import React from "react";
import { Link } from "react-router-dom";
import "../styles/Buttons.css";

export function NavBtn({ scrolling }) {
  return (
    <div className="MainBtnDiv mr-5">
      <Link
        to="#"
        className={`neonBtn font-NueueMontreal font-medium bg-slate-100 ${scrolling ? "text-small" : "text-sm"}`}
      >
        Get Demo
        <span className="btnSpan"></span>
        <span className="btnSpan"></span>
        <span className="btnSpan"></span>
        <span className="btnSpan"></span>
      </Link>
    </div>
  );
}
