import NextLink from 'next/link';
import React, { useState } from 'react';

const Links = [
  { text: 'Quienes Somos', href: 'quienessomos' },
  { text: 'Valor', href: 'valor' },
  { text: 'Innovacion', href: 'innovacion' },
  { text: 'Contacto', href: 'contacto' },
];

export const Navbar = () => {
  const [OpenToggleBar, setOpenToggleBar] = useState(false);
  return (
    <nav className="flex justify-center items-center mt-3 sticky top-5 ">
      <div className="bg-white w-4/5 rounded-lg p-3 flex items-center justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
          />
        </svg>
        <div className="flex items-center gap-4 justify-center">
          <button className="border-2 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

{
  /* <div className="bg-white w-4/5 p-2 flex justify-between items-center rounded-lg sticky top-5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
    />
  </svg>
  <div className="flex items-center gap-4 justify-center">
    {Links.map(({ text, href }) => (
      <NextLink
        href={`#${href}`}
        key={href}
        className="text-bluePrimary hover:text-blackPrimary font-semibold transition-all duration-200 text-lg"
      >
        {text}
      </NextLink>
    ))}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="w-6 h-6 fill-white stroke-blackPrimary dark:fill-blackPrimary"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  </div>
</div> */
}
