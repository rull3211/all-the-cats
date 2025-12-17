export const LabeledInput = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 mt-4"
      >
        {label}
      </label>
      <input
        id={props.id}
        type="text"
        name={props.name}
        defaultValue={props.defaultValue}
        className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </>
  );
};
