
import React from "react";

const MagicButton = ({
  title = "",
  icon = null,
  position = "left",
  handleClick = () => {},
  otherClasses = "",
}) => {
  return (
    <button
      type="button"
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      {/* decorative animated rim */}
      <span className="absolute inset-0 -m-6 rounded-lg opacity-70 pointer-events-none" aria-hidden>
        <span className="absolute inset-0 rounded-lg animate-spin-slow bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-500 blur-md" />
      </span>

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur gap-2 ${otherClasses}`}
        role="button"
        aria-label={title}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;