import * as React from "react";
import { get, RegisterOptions, useFormContext } from "react-hook-form";
import { IconType } from "react-icons";
import { HiExclamationCircle } from "react-icons/hi";
import clsxm from "@/lib/clsxm";
import clsx from "clsx";

export type InputProps = {
  /** Input label */
  label: string;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"input">;

export default function Input({
  label,
  placeholder = "",
  helperText,
  id,
  type = "text",
  readOnly = false,
  hideError = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconClassName,
  rightIconClassName,
  validation,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-semibold text-black'>
        {label}
      </label>
      <div className='relative mt-1'>
        <input
          {...register(id, validation)}
          {...rest}
          type={type}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            readOnly
              ? "bg-gray-100 focus:ring-0 cursor-not-allowed focus:border-gray-300"
              : error
              ? "bg-red-100 focus:ring-2 ring-1 ring-red-500 focus:border-0 outline-none focus:ring-red-500"
              : "bg-neutral-100 focus:ring-1 focus:border-0 outline-none focus:ring-primary",
            "block w-full rounded-sm p-1 pl-2",
            LeftIcon && "pl-9",
            RightIcon && "pr-8"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
        {LeftIcon && (
          <div className='absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2'>
            <LeftIcon
              className={clsxm("text-lg md:text-xl", leftIconClassName)}
            />
          </div>
        )}
        {RightIcon && (
          <div className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'>
            <RightIcon
              className={clsxm("text-lg md:text-xl", rightIconClassName)}
            />
          </div>
        )}
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
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
