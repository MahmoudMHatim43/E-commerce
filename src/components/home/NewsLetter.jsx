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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <IoIosContacts />,
  },
  {
    title: "Discovery Session",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <MdPersonSearch />,
  },
  {
    title: "Contracting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <FaFileContract />,
  },
  {
    title: "Fast Prototyping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <RiSlideshow2Line />,
  },
  {
    title: "Design Phase",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <MdDesignServices />,
  },
  {
    title: "Develop & Listing for sale",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
