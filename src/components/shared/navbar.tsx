// import Image from "next/image";
// import logo from "@/assets/book.ico";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="bg-base-100 shadow-sm">
//       <div className="navbar container mx-auto ">
//         <div className="navbar-start ">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 aria-label="Menu"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex={-1}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <Link href="/books">All Books</Link>
//               </li>
//               <li>
//                 <a>Parent</a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <a>Item 3</a>
//               </li>
//             </ul>
//           </div>

//           <Link href="/" className="flex items-center justify-center">
//             <Image src={logo} alt="Navbar Img" />
//           </Link>
//           <Link href="/" className="btn btn-ghost text-xl">
//             Book Vibe
//           </Link>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <Link href="/books">All Books</Link>
//             </li>

//             <li>
//               <Link href="/list-books">Listed Books</Link>
//             </li>

//             <li>
//               <Link href="/pages-to-read">Pages to Read</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="navbar-end gap-4">
//           <button className="btn btn-success bg-[#23BE0A] text-[#ffff]">
//             Sign In
//           </button>
//           <button className="btn btn-info bg=[#59C6D2] text-[#ffff]">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import logo from "@/assets/book.ico";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // নেভিগেশন লিংকগুলোর অ্যারে
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/books" },
    { name: "Listed Books", path: "/list-books" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto py-3">
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`font-semibold px-4 py-2 rounded-lg transition-all ${
                      pathname === link.path
                        ? "border-2 border-[#23BE0A] text-[#23BE0A] bg-transparent"
                        : "text-gray-700 hover:text-[#23BE0A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo & Title */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Navbar Img" width={30} height={30} />
            <span className="text-2xl font-bold tracking-tight">Book Vibe</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`font-semibold px-4 py-2 rounded-lg transition-all ${
                    pathname === link.path
                      ? "border-2 border-[#23BE0A] text-[#23BE0A] bg-transparent"
                      : "text-gray-700 hover:text-[#23BE0A]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="navbar-end gap-3">
          <button className="btn bg-[#23BE0A] hover:bg-[#1f9f09] text-white border-none px-6 text-base font-semibold">
            Sign In
          </button>
          <button className="btn bg-[#59C6D2] hover:bg-[#48b2be] text-white border-none px-6 text-base font-semibold">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
