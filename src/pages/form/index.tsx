import React from "react";
import { Toaster } from "react-hot-toast";
import CreateAccount from "./components/CreateAccount";
import ProfileAccount from "./components/ProfileAccount";

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
        <div className='w-full sm:w-3/4 lg:w-1/2 mx-auto p-16 space-y-4'>
          {page === 1 && (
            <h1 className='text-center font-semibold'>Create New Account</h1>
          )}
          {page === 2 && (
            <h1 className='text-center font-semibold'>Complete Your Profile</h1>
          )}

          {page === 1 && <CreateAccount setPage={setPage} />}
          {page === 2 && <ProfileAccount setPage={setPage} />}
          {page === 3 && (
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
