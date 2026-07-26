// frontend/src/pages/Button.jsx
import React from "react";

const btn =
  "bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 inline-flex whitespace-nowrap items-center gap-2 justify-between w-70";

const cirWrapper =
  "w-5 h-5 rounded-full flex items-center justify-center bg-transparent hover:bg-yellow-500 transition-colors";

const cirWhiteWrapper =
  "w-5 h-5 rounded-full flex items-center justify-center bg-white hover:bg-yellow-500 transition-colors";

const Bin = "ri-delete-bin-line text-red-500 text-[14px] leading-none";
const Pencil = "ri-pencil-line text-white text-[14px] leading-none mt-[2px]";
const Arrow = "ri-arrow-right-line text-blue-500 text-[14px] leading-none";

function Button({ label, onClick, onEdit, onDelete }) {
  return (
    <button className={btn} type="button" onClick={onClick}>
      {/* Left side: Filename + Arrow */}
      <span className="inline-flex items-center gap-4">
        {label}
        <span className={cirWhiteWrapper}>
          <i className={Arrow} aria-hidden="true" />
        </span>
      </span>

      {/* Right side: Edit + Delete icons */}
      <div className="flex items-center gap-3" aria-hidden="true">
        {/* EDIT button */}
        <span
          className={cirWrapper}
          onClick={(e) => {
            e.stopPropagation(); // prevent main button click
            if (onEdit) onEdit();
          }}
        >
          <i className={Pencil} aria-hidden="true" />
        </span>

        {/* DELETE button */}
        <span
          className={cirWhiteWrapper}
          onClick={(e) => {
            e.stopPropagation();
            if (onDelete) onDelete();
          }}
        >
          <i className={Bin} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

export default Button;
