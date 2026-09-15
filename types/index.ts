import { MouseEventHandler } from "react";

{/*Interface specifies how a specific structure should look like, what variables and values it should have*/}
export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?: boolean;

}

export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

// A vehicle in the Motokaa fleet (see constants/fleet). Specs are inline, so
// there's no separate specs endpoint; images come from CarImages by make/model.
export interface CarProps{
    make: string,          // "toyota"
    model: string,         // "corolla"
    year: number,
    class: string,         // body class, e.g. "midsize car" | "suv"
    fuel_type: string,     // "gas" | "electricity" | "diesel"
    drive: string,         // "fwd" | "rwd" | "awd" | "4wd"
    transmission: string,  // "a" | "m"
    cylinders?: number,
    displacement?: number, // engine litres
    city_mpg?: number,
    highway_mpg?: number,
    combination_mpg?: number,
}

export interface FilterProps{
    manufacturer: string,
    year?: number | string,
    fuel: string,
    limit: number,
    model: string,
}

export interface HomeProps {
  // Next 16: searchParams is async and must be awaited.
  searchParams: Promise<FilterProps>;
}

export interface OptionsProps{
    title: string,
    value: string
}

export interface CustomFilterProps{
    title: string,
    options: OptionsProps[]

}

export interface ShowMoreProps{
    pageNumber: number,
    isNext: boolean
}
       
