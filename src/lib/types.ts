import { IconType } from "react-icons";

export type LayoutProps = {
  children: React.ReactNode;
};

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "transparent";
};

export type PortoProps = {
  key: number;
  image: string;
};

export type ServiceProps = {
  key: number;
  icon: IconType;
  title: string;
  color: string;
};

export type TestimonialProps = {
  name: string;
  position: string;
  image: string;
  description: string;
};

export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
