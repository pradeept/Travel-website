import { StaticImageData } from "next/image"

export type testimonialType = {
    id:number;
    pic:StaticImageData;
    name:string;
    about: string;
    quote:string;
}