import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}
export interface HomeProps {
  searchParams: FilterProps;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
declare module "next-auth" {
  interface User {
    roles: string;
  }
  interface Session {
    user: User & {
      roles: string;
    };
    token: {
      roles: string;
    };
  }
}

export interface RentFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface RentData {
  name: string;
  email: string;
  phone: string;
  address: string;
  car: CarProps;
  createdAt: Date;
}
export interface LogInUser {
  firstName: string;
  lastName: string;
  email: string;
}
export interface ContactUs {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
