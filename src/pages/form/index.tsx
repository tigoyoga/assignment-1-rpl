import React from "react";
import { Toaster } from "react-hot-toast";
import SignUp from "./components/SignUp";
import ProfileAccount from "./components/ProfileAccount";
import Button from "@/components/Button";
import AccountCreated from "./components/AccountCreated";

export type FormProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

function Form() {
  const [page, setPage] = React.useState(1);

  return (
    <div>
      <Toaster />
      <div className='layout'>
        <div
          className={`${
            page !== 2 ? "p-16" : "p-0"
          } w-full sm:w-3/4 lg:w-1/2 mx-auto p-16 space-y-4`}
        >
          {page === 1 && <SignUp setPage={setPage} />}
          {page === 2 && <AccountCreated setPage={setPage} />}
          {page === 3 && <ProfileAccount setPage={setPage} />}
          {page === 4 && (
            // congratulations page
            <div className='text-center'>
              <h1 className='text-2xl font-semibold'>Congratulations!</h1>
              <p className='text-gray-500'>
                You have successfully created your account.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
