import { FaVrCardboard } from "react-icons/fa6";
import { FaCube } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import { MdSearch } from "react-icons/md";
import logoreact from "../assets/react.svg"
export const reu={
    iconocard:FaVrCardboard,
    iconocube:FaCube,
    iconoflechaderecha:IoIosArrowForward,
    iconologout:CgLogOut,
    iconosearch:MdSearch,
    logoreact: logoreact
   

}
export const LinksSidebar =[
    {
        label: "#01 card-1",
        icono:<reu.iconocard/>,
        to:"/"
    },
    {
        label: "#01 card-1",
        icono:<reu.iconocube/>,
        to:"/proyecto2"
    }
]