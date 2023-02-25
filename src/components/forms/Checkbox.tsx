import clsx from "clsx";
import * as React from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

import clsxm from "@/lib/clsxm";
import { HiExclamationCircle } from "react-icons/hi";

enum CheckboxSize {
  "sm",
  "base",
}

export type CheckboxProps = {
  /** Input label */
  label: string;
  name: string;
  /** Add value only if you're using grouped checkbox, omit value if using a single checkbox */
  value?: string | number;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;

  size?: keyof typeof CheckboxSize;
} & Omit<React.ComponentPropsWithoutRef<"input">, "size">;

export default function Checkbox({
  label,
  name,
  value,
  placeholder = "",
  helperText,
  readOnly = false,
  hideError = false,
  validation,
  size = "base",
  ...rest
}: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div>
      <div className='flex items-start gap-2'>
        <input
          {...register(name, validation)}
          {...rest}
          type='checkbox'
          name={name}
          id={`${name}_${value}`}
          value={value}
          disabled={readOnly}
          className={clsxm(
            // add top margin so the checkbox align with the text
            "mt-[0.25em]",
            "shrink-0",
            "rounded-sm border-2 focus:ring-0 !bg-red-300",
            "checked:bg-green-400 checked:hover:bg-green-600 checked:focus:bg-green-400 checked:active:bg-green-700",
            readOnly &&
              "cursor-not-allowed bg-gray-100 disabled:checked:bg-lightBlue-300",
            error && "border-red-400 bg-red-100",
            size === "sm" && "h-3.5 w-3.5"
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <label
          className={clsx(readOnly && "cursor-not-allowed")}
          htmlFor={`${name}_${value}`}
        >
          {label}
        </label>
      </div>

      <div className='mt-1'>
        {!(!hideError && error) && helperText && <p>{helperText}</p>}
        {!hideError && error && (
          <span className='text-sm text-red-500 flex gap-x-1'>
            <HiExclamationCircle className='text-xl text-red-500' />
            {error?.message as unknown as string}
          </span>
        )}
      </div>
    </div>
  );
}
