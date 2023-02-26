import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { HiExclamationCircle } from "react-icons/hi";

export type TextAreaProps = {
  label: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  validation?: RegisterOptions;
} & React.ComponentPropsWithoutRef<"textarea">;

export default function TextArea({
  label,
  placeholder = "",
  helperText,
  id,
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
      <div className='mt-1'>
        <textarea
          {...register(id, validation)}
          {...rest}
          name={id}
          id={id}
          className={clsx(
            error
              ? "bg-red-100 focus:ring-2 ring-1 ring-red-500 focus:border-0 outline-none focus:ring-red-500"
              : "focus:ring-1 focus:border-0 focus:ring-primary",
            "shadow appearance-none placeholder:text-neutral-400 outline-none border focus:ring-1 rounded w-full p-1 pl-2 text-black"
          )}
          placeholder={placeholder}
          aria-describedby={id}
        />
      </div>

      <div className='-mt-1'>
        {helperText && (
          <p className='text-left text-xs text-neutral-500'>{helperText}</p>
        )}
        {error && (
          <p className='text-left font-normal leading-none text-[#F32013]'>
            {error.message as unknown as string}
          </p>
        )}
      </div>
    </div>
  );
}
