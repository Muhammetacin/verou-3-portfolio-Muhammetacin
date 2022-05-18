import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  DrawerHeader,
} from "@chakra-ui/react";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="fixed inset-x-0 top-0 flex justify-between py-6 px-12 text-white bg-transparent xl:text-2xl md:text-lg overscroll-none">
      <div className="navbar lg:hidden">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle -mt-2">
            <svg
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-26 text-black"
          >
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="about">
                <button>About</button>
              </Link>
            </li>
            <li>
              <Link to="portfolio">
                <button>Portfolio</button>
              </Link>
            </li>
            <li>
              <button onClick={onOpen}>Contact</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end w-52 align-center pt-4 lg:pt-0 lg:justify-start">
        <Link to="/">
          <h1>Muhammet Cin</h1>
        </Link>
      </div>

      <div>
        <ul className="lg:flex lg:flex-row hidden">
          <li className="pr-3">
            <Link to="/">
              <button className="hover:text-error hover:underline">Home</button>
            </Link>
          </li>
          <li className="px-3">
            <Link to="about">
              <button className="hover:text-warning hover:underline">
                About
              </button>
            </Link>
          </li>
          <li className="px-3">
            <Link to="portfolio">
              <button className="hover:text-secondary hover:underline">
                Portofolio
              </button>
            </Link>
          </li>
          <li className="pl-3">
            <button
              className="hover:text-accent hover:underline"
              onClick={onOpen}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      {btnRef ? (
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader />

            <DrawerBody>
              <div className="my-10 justify-center">
                <a
                  href="https://www.facebook.com/MuhammetAkifCin"
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="facebook"
                >
                  <Icon
                    as={FaFacebookF}
                    w="4"
                    h="4"
                    color="blue.500"
                    m="2"
                  ></Icon>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammetcin/"
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="linkedin"
                >
                  <Icon
                    as={FaLinkedinIn}
                    w="4"
                    h="4"
                    color="blue.500"
                    m="2"
                  ></Icon>
                </a>
                <a
                  href="https://github.com/Muhammetacin"
                  target="_blank"
                  rel="noreferrer noopener"
                  alt="github"
                >
                  <Icon as={FaGithub} w="4" h="4" color="black" m="2"></Icon>
                </a>
              </div>
              <div>
                <h3 className="font-bold text-xl my-10">About this sidebar</h3>
                <p>
                  Click on the icons above to go to my social media pages or
                  click on the email address below to send me an email.
                </p>
              </div>

              <h3 className="font-bold text-xl my-10">My contact info</h3>
              <p>
                <Icon as={FaEnvelope} w="4" h="4" mr="2"></Icon>{" "}
                <button
                  onClick={() =>
                    (window.location = "mailto:muhammetacin@gmail.com")
                  }
                  className="hover:underline"
                >
                  muhammetacin@gmail.com
                </button>
              </p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
