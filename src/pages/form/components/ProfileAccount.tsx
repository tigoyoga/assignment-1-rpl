import React from "react";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";

import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from "..";

import TextArea from "@/components/forms/TextArea";
import SelectInput from "@/components/forms/SelectInput";

function ProfileAccount({ setPage }: { setPage: Function }) {
  const methods = useForm<FormProps>();
  const { handleSubmit } = methods;
  const [data, setData] = React.useState<FormProps>();

  const onSubmit = (data: FormProps) => {
    setData(data);
    setPage(3);
  };

  return (
    <div>
      <h1 className='text-center text-xl font-semibold'>
        Complete Your Profile
      </h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          <Input
            label='Full Name'
            placeholder='Enter Your Full Name'
            id='name'
            validation={{
              required: "Name is required",
            }}
          />
          <Input
            label='Phone Number'
            placeholder='Enter Your Phone Number'
            id='phoneNumber'
            helperText="Phone number start with '+62'"
            validation={{
              required: "Phone number is required",
              pattern: {
                value: /^\+62/,
                message: "Phone number invalid",
              },
            }}
          />

          <Input
            label='What is your company name ?'
            placeholder='Enter Your Company Name'
            id='email'
            validation={{
              required: "Company Name is required",
            }}
          />
          <TextArea
            label='Tell us about your company'
            placeholder='Enter Your Company Description'
            id='companyDescription'
            validation={{
              required: "Company Description is required",
            }}
          />
          <SelectInput
            label='What is your budget range?'
            id='budgetRange'
            validation={{
              required: "Budget range is required",
            }}
          >
            <option value=''>Select Budget Range</option>
            <option value='less than 1 million'>less than 1 million</option>
            <option value='1 million - 5 million'>1 million - 5 million</option>
            <option value='5 million - 10 million'>
              5 million - 10 million
            </option>
            <option value='10 million - 20 million'>
              10 million - 20 million
            </option>
            <option value='20 million - 50 million'>
              20 million - 50 million
            </option>
          </SelectInput>

          <div className='mx-auto'>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
      {/* show data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ProfileAccount;
