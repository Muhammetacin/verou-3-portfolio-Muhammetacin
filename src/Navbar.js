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
import { FaLinkedinIn, FaEnvelope, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="fixed inset-x-0 top-0 flex justify-between py-6 px-12 text-2xl z-10 text-white bg-transparent">
      <Link to="/">
        <h1>&lt;muhammet cin/&gt;</h1>
      </Link>
      <nav>
        <ul className="flex flex-row">
          <li className="pr-3">
            <Link to="/">
              <button className="hover:text-error hover:underline">home</button>
            </Link>
          </li>
          <li className="px-3">
            <Link to="about">
              <button className="hover:text-warning hover:underline">
                about
              </button>
            </Link>
          </li>
          <li className="px-3">
            <Link to="portfolio">
              <button className="hover:text-secondary hover:underline">
                portofolio
              </button>
            </Link>
          </li>
          <li className="pl-3">
            <button
              className="hover:text-accent hover:underline"
              onClick={onOpen}
            >
              contact
            </button>
          </li>
        </ul>
      </nav>
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
