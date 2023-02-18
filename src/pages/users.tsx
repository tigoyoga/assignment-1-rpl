import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";

type User = {
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

export default function Users({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-24 '>
      {users.map((user) => (
        <Link href={`/${user.id}`} key={user.id}>
          <div className='cursor-pointer bg-red-100 hover:bg-red-200 w-48 h-12 flex items-center justify-center'>
            <h1>{user.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};
