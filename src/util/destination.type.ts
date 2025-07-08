import { StaticImageData } from "next/image"

export type destinationType = {
    id:number,
    picture: StaticImageData;
    place: string;
    price: number;
    days: number;
    total_bookings: number;
}