export type Slider = {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
};

export const sliders: Slider[] = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Get up to 50% off on selected items",
    img: "/silders/slider-1-hd.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Get up to 50% off on selected items",
    img: "/silders/slider-2-hd.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-white to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Get up to 50% off on selected items",
    img: "/silders/slider-3-hd.png",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-green-50",
  },
];
