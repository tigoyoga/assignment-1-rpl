import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [colorChange, setColorchange] = React.useState(false);

  const toggleShowNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`${
        colorChange ? "shadow-xl bg-primary" : ""
      } fixed top-0 z-30 w-full bg-primary-900 font-primary`}
    >
      <div
        className={`${
          colorChange
            ? "duration-300 ease-in-out h-16"
            : "duration-300 ease-in-out h-20"
        } mx-auto flex w-11/12 items-center justify-between gap-x-1 md:w-11/12 lg:w-11/12`}
      >
        <Link href='/' className='font-bold hover:text-primary-100'>
          <Image
            className='w-24'
            alt='Company Logo'
            src='/logo-company.png'
            width='204'
            height='76'
            priority
          />
        </Link>
        <div className='hidden md:block'>
          <ul className='hidden items-center justify-between space-x-4 font-semibold md:flex lg:space-x-6 xl:space-x-10'>
            {links.map(({ href, label }, index) => (
              <li key={`${href}${label}`}>
                <Link
                  href={href}
                  className={`${
                    colorChange ? "text-white" : "text-primary"
                  } hover:text-primary-100`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {!colorChange && (
          <div className='hidden md:block'>
            <Link href={"/form"}>
              <button className='bg-transparent rounded-full px-12 py-3 text-primary border-primary border-[1px] font-medium shadow-lg'>
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {colorChange && (
          <div className='hidden md:block'>
            <Link href={"/form"}>
              <button className='bg-primary rounded-full px-12 py-2 text-white font-medium shadow-primary border-white border'>
                Sign Up
              </button>
            </Link>
          </div>
        )}

        <div className='relative z-30 mr-0 flex md:hidden'>
          {!isOpen && (
            <GiHamburgerMenu
              className='text-3xl text-black'
              onClick={toggleShowNav}
            />
          )}
        </div>
      </div>
      <div
        className={`flex translate-y-[calc(100%-4rem)] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full opacity-0"
        } absolute bottom-0 left-0 h-screen w-full flex-col bg-primary pt-[6vh] text-white transition duration-300`}
      >
        <div className='relative z-30 flex h-screen w-full flex-col items-center gap-12'>
          <ul className='flex flex-col gap-4'>
            <Link
              href='/'
              className='font-bold hover:text-primary-100 text-white'
            >
              <Image
                className='w-24'
                alt='Company Logo'
                src='/logo-company.png'
                width='204'
                height='76'
                priority
              />
            </Link>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='mt-4'>
                <Link
                  href={href}
                  className='flex w-full items-center justify-center font-semibold hover:text-gray-600'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='block md:hidden'>
            <Link href={"/form"}>
              <button className='bg-white rounded-full px-12 py-3 text-primary border-primary border-[1px] font-medium shadow-lg'>
                Sign Up
              </button>
            </Link>
          </div>
          {isOpen && (
            <FaTimes
              className='absolute bottom-20 right-1/2 mx-auto h-12 w-12 translate-x-1/2 rounded-full border-[2px] border-black bg-white p-3 text-3xl font-thin text-black'
              onClick={toggleShowNav}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
