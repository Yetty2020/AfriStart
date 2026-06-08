import { IoWoman } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsRocketTakeoff } from "react-icons/bs";
import { MdBalance } from "react-icons/md";

export interface ValuesDataType{
    id: number;
    title: string;
    description: string;
    icon: ReactNode

}

export const ValuesData: ValuesDataType[] = [
    {
        id: 1,
        title: "Legal Intergrity",
        description: "We embrace creativity and forward-thinking solutions that push boundaries.",
        icon: <MdBalance />
    },
    {
        id: 2,
        title: "Education First",
        description: "We embrace creativity and forward-thinking solutions that push boundaries.",
        icon: <HiOutlineLightBulb />
    },
    {
        id: 3,
        title: "Execution",
        description: "We embrace creativity and forward-thinking solutions that push boundaries.",
        icon: <BsRocketTakeoff />
    },
    {
        id: 4,
        title: "Women Led",
        description: "We embrace creativity and forward-thinking solutions that push boundaries.",
        icon: <IoWoman />
    }
]