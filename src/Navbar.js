import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="fixed inset-x-0 top-0 flex justify-between py-6 px-12 text-4xl z-10 text-white bg-transparent">
      <Link to="/">
        <h1>muhammet cin</h1>
      </Link>
      <nav>
        <ul className="flex flex-row">
          <li className="pr-3">
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
            <DrawerHeader>Contact me</DrawerHeader>

            <DrawerBody>
              <form
                id="my-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
              >
                <Input name="nickname" placeholder="Type here..." />
              </form>
            </DrawerBody>

            <DrawerFooter justifyContent="center">
              <Button colorScheme="blue" type="submit" form="my-form">
                Save
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
