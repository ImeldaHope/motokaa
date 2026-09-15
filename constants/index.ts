import type { CarProps } from "@/types";

// The Motokaa fleet — a curated local catalogue (the app's data source).
// Reliable, no API quota; images are fetched live from CarImages by make/model.
export const fleet: CarProps[] = [
  // Sedans & compacts
  { make: "toyota", model: "corolla", year: 2022, class: "compact car", fuel_type: "gas", drive: "fwd", transmission: "a", cylinders: 4, displacement: 2.0, city_mpg: 32, highway_mpg: 41, combination_mpg: 35 },
  { make: "honda", model: "civic", year: 2023, class: "compact car", fuel_type: "gas", drive: "fwd", transmission: "a", cylinders: 4, displacement: 2.0, city_mpg: 31, highway_mpg: 40, combination_mpg: 35 },
  { make: "honda", model: "accord", year: 2022, class: "midsize car", fuel_type: "gas", drive: "fwd", transmission: "a", cylinders: 4, displacement: 1.5, city_mpg: 30, highway_mpg: 38, combination_mpg: 33 },
  { make: "toyota", model: "camry", year: 2023, class: "midsize car", fuel_type: "gas", drive: "fwd", transmission: "a", cylinders: 4, displacement: 2.5, city_mpg: 28, highway_mpg: 39, combination_mpg: 32 },
  { make: "audi", model: "a4", year: 2022, class: "compact car", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 4, displacement: 2.0, city_mpg: 24, highway_mpg: 31, combination_mpg: 27 },
  { make: "bmw", model: "3 series", year: 2023, class: "compact car", fuel_type: "gas", drive: "rwd", transmission: "a", cylinders: 4, displacement: 2.0, city_mpg: 26, highway_mpg: 36, combination_mpg: 30 },
  { make: "mercedes-benz", model: "c-class", year: 2022, class: "compact car", fuel_type: "gas", drive: "rwd", transmission: "a", cylinders: 4, displacement: 2.0, city_mpg: 23, highway_mpg: 33, combination_mpg: 27 },
  { make: "volkswagen", model: "golf", year: 2021, class: "compact car", fuel_type: "gas", drive: "fwd", transmission: "m", cylinders: 4, displacement: 1.4, city_mpg: 29, highway_mpg: 37, combination_mpg: 32 },
  // SUVs
  { make: "toyota", model: "rav4", year: 2023, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 4, displacement: 2.5, city_mpg: 27, highway_mpg: 35, combination_mpg: 30 },
  { make: "honda", model: "cr-v", year: 2022, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 4, displacement: 1.5, city_mpg: 27, highway_mpg: 32, combination_mpg: 29 },
  { make: "bmw", model: "x5", year: 2022, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 6, displacement: 3.0, city_mpg: 21, highway_mpg: 26, combination_mpg: 23 },
  { make: "jeep", model: "wrangler", year: 2021, class: "sport utility vehicle", fuel_type: "gas", drive: "4wd", transmission: "m", cylinders: 6, displacement: 3.6, city_mpg: 17, highway_mpg: 25, combination_mpg: 20 },
  { make: "hyundai", model: "tucson", year: 2023, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 4, displacement: 2.5, city_mpg: 24, highway_mpg: 29, combination_mpg: 26 },
  { make: "kia", model: "sportage", year: 2022, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 4, displacement: 2.5, city_mpg: 23, highway_mpg: 28, combination_mpg: 25 },
  { make: "mazda", model: "cx-5", year: 2022, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 4, displacement: 2.5, city_mpg: 24, highway_mpg: 30, combination_mpg: 26 },
  { make: "land rover", model: "range rover sport", year: 2022, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 6, displacement: 3.0, city_mpg: 19, highway_mpg: 26, combination_mpg: 22 },
  { make: "lexus", model: "rx", year: 2023, class: "sport utility vehicle", fuel_type: "gas", drive: "awd", transmission: "a", cylinders: 6, displacement: 3.5, city_mpg: 20, highway_mpg: 27, combination_mpg: 23 },
  // Performance & trucks
  { make: "ford", model: "mustang", year: 2021, class: "subcompact car", fuel_type: "gas", drive: "rwd", transmission: "m", cylinders: 8, displacement: 5.0, city_mpg: 15, highway_mpg: 24, combination_mpg: 18 },
  { make: "chevrolet", model: "camaro", year: 2022, class: "subcompact car", fuel_type: "gas", drive: "rwd", transmission: "a", cylinders: 6, displacement: 3.6, city_mpg: 19, highway_mpg: 29, combination_mpg: 22 },
  { make: "porsche", model: "911", year: 2023, class: "subcompact car", fuel_type: "gas", drive: "rwd", transmission: "a", cylinders: 6, displacement: 3.0, city_mpg: 18, highway_mpg: 24, combination_mpg: 20 },
  { make: "ford", model: "f-150", year: 2022, class: "pickup", fuel_type: "gas", drive: "4wd", transmission: "a", cylinders: 6, displacement: 3.5, city_mpg: 18, highway_mpg: 24, combination_mpg: 20 },
  { make: "dodge", model: "charger", year: 2021, class: "midsize car", fuel_type: "gas", drive: "rwd", transmission: "a", cylinders: 8, displacement: 5.7, city_mpg: 16, highway_mpg: 25, combination_mpg: 19 },
  // Electric
  { make: "tesla", model: "model 3", year: 2023, class: "midsize car", fuel_type: "electricity", drive: "rwd", transmission: "a" },
  { make: "tesla", model: "model y", year: 2023, class: "sport utility vehicle", fuel_type: "electricity", drive: "awd", transmission: "a" },
  { make: "hyundai", model: "ioniq 5", year: 2023, class: "sport utility vehicle", fuel_type: "electricity", drive: "awd", transmission: "a" },
  { make: "ford", model: "mustang mach-e", year: 2022, class: "sport utility vehicle", fuel_type: "electricity", drive: "awd", transmission: "a" },
  { make: "nissan", model: "leaf", year: 2022, class: "compact car", fuel_type: "electricity", drive: "fwd", transmission: "a" },
];

// Makes present in the fleet — drives the search dropdown so every option returns cars.
export const manufacturers = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Dodge",
    "Ford",
    "Honda",
    "Hyundai",
    "Jeep",
    "Kia",
    "Land Rover",
    "Lexus",
    "Mazda",
    "Mercedes-Benz",
    "Nissan",
    "Porsche",
    "Tesla",
    "Toyota",
    "Volkswagen",
  ];
  
  export const yearsOfProduction = [
    { title: "Year", value: "" },
    { title: "2021", value: "2021" },
    { title: "2022", value: "2022" },
    { title: "2023", value: "2023" },
    { title: "2024", value: "2024" },
    { title: "2025", value: "2025" },
    { title: "2026", value: "2026" },
  ];
  
  export const fuels = [
    {
      title: "Fuel",
      value: "",
    },
    {
      title: "Gas",
      value: "Gas",
    },
    {
      title: "Electricity",
      value: "Electricity",
    },
  ];
  
  export const footerLinks = [
    {
      title: "About",
      links: [
        { title: "How it works", url: "/" },
        { title: "Featured", url: "/" },
        { title: "Partnership", url: "/" },
        { title: "Bussiness Relation", url: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "Events", url: "/" },
        { title: "Blog", url: "/" },
        { title: "Podcast", url: "/" },
        { title: "Invite a friend", url: "/" },
      ],
    },
    {
      title: "Socials",
      links: [
        { title: "Discord", url: "/" },
        { title: "Instagram", url: "/" },
        { title: "Twitter", url: "/" },
        { title: "Facebook", url: "/" },
      ],
    },
    {
        title: "Data and Protection",
        links: [
          { title: "Privacy Policy", url: "/" },
          { title: "Terms and Conditions", url: "/" },
          { title: "Notice", url: "/" },
          { title: "Report", url: "/" },
        ],
      },
  ];