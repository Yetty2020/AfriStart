import profile from "../../assets/zee.jpeg"


export interface Profile {
    name: string;
    image: string;
   
    role: string;
    info: string;
}

export  const ProfileData: Profile[] = [
    {
        name: "Zainab Ajileye",
        role: "Founder and CEO",
        image: profile,
        info: ""


    },
    {
        name: "Team Memeber",
        role: "Web Designer",
        image: profile,
        info: ""


    },
    {
        name: "Team Member",
        role: "Social Media Manager",
        image: profile,
        info: ""


    }
]