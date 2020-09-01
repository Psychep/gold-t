import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  ">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
        integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
        crossorigin="anonymous"
      ></link>
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between  ">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-white hover:text-yellow-400 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
              G-OLD TATOO
            </a>
          </Link>
        </div>

        <button
          className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
            >
              <i class="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "></i>
              <span class="lg:hidden inline-block ml-2">Share</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
            >
              <i class="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "></i>
              <span class="lg:hidden inline-block ml-2">Tweet</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="#pablo"
            >
              <i class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i>
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
