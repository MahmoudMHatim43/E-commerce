import React from "react";
import Steps from "./Steps";
import Subscribe from "./Subscribe";
import { IoIosContacts } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";
import { RiSlideshow2Line } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { FaJs } from "react-icons/fa";
const steps = [
  {
    title: "Initial Contact",
    description: "Initial contact where we discuss your idea and goals.",
    icon: <IoIosContacts />,
  },
  {
    title: "Discovery Session",
    description:
      "A session to discuss your idea in more detail and how we can help.",
    icon: <MdPersonSearch />,
  },
  {
    title: "Contracting",
    description: "Creating a contract outlining the terms of our agreement.",
    icon: <FaFileContract />,
  },
  {
    title: "Fast Prototyping",
    description: "Creating a prototype of your idea to test and refine.",
    icon: <RiSlideshow2Line />,
  },
  {
    title: "Design Phase",
    description: "Designing the UI/UX of your application.",
    icon: <MdDesignServices />,
  },
  {
    title: "Develop & Listing for sale",
    description: "Developing and listing your application for sale.",
    icon: <FaJs />,
  },
];

function NewsLetter() {
  return (
    <>
      <Subscribe />
      <Steps steps={steps} />
    </>
  );
}

export default NewsLetter;
