import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { HiExclamationCircle } from "react-icons/hi";

export type TextAreaProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  label,
  placeholder = "",
  helperText,
  id,
  readOnly = false,
  hideError = false,
  validation,
  ...rest
}: TextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[id];

  return (
    <div>
      <label htmlFor={id} className='block text-sm font-semibold text-black'>
        {label}
      </label>
      <div className='relative mt-1'>
        <textarea
          {...register(id, validation)}
          rows={3}
          {...rest}
          name={id}
          id={id}
          readOnly={readOnly}
          className={clsx(
            readOnly
              ? "cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0"
              : error
              ? "bg-red-100 focus:ring-2 ring-1 ring-red-500 focus:border-0 outline-none focus:ring-red-500"
              : "bg-neutral-100 focus:ring-1 focus:border-0 outline-none focus:ring-primary",
            "block w-full rounded-sm p-1 pl-2"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
        {!hideError && error && (
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
            <HiExclamationCircle className='text-xl text-red-500' />
          </div>
        )}
      </div>
      <div className='mt-1'>
        {helperText && <p className='text-xs text-gray-500'>{helperText}</p>}
        {!hideError && error && (
          <span className='text-sm text-red-500'>
            {error.message as string}
          </span>
        )}
      </div>
    </div>
  );
}