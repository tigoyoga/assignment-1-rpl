import React from "react";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import PasswordInput from "@/components/forms/PasswordInput";
import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from "..";
import toast from "react-hot-toast";

function CreateAccount({ setPage }: { setPage: Function }) {
  const methods = useForm<FormProps>({
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: FormProps) => {
    // loading and success toast then redirect to another page
    toast.promise(
      new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
          setPage(2);
          console.log(data);
        }, 2000);
      }),
      {
        loading: "Loading",
        success: "Account has been created",
        error: "Error",
      }
    );
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <Input
            label='Username'
            placeholder='Enter Your Username'
            id='name'
            validation={{
              required: "Name is required",
            }}
          />
          <Input
            label='Email'
            placeholder='Enter Your Email'
            id='email'
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
          />
          <PasswordInput
            label='Password'
            placeholder='Enter Your Password'
            id='password'
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            }}
          />
          <PasswordInput
            label='Password Confirmation'
            placeholder='Enter Your Password Confirmation'
            id='passwordConfirmation'
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              validate: (value) =>
                value === methods.watch("password") ||
                "The passwords do not match",
            }}
          />

          <div className='mx-auto'>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default CreateAccount;
