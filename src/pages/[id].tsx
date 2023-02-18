import React from "react";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { UserProps } from "@/lib/types";

export default function User({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='flex flex-col  justify-center items-center py-16'>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>{user.phone}</h1>

      <Link className='mt-10 bg-blue-400 px-6 py-2' href={"/users"}>
        Back
      </Link>
    </div>
  );
}

export const getServerSideProps = async (context: { params: { id: any } }) => {
  console.log(context.params.id);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user: UserProps = await res.json();

  return {
    props: {
      user,
    },
  };
};
