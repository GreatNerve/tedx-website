const ContactTextArea = ({
  row,
  placeholder,
  name,
  value,
  onChange,
}: {
  row: number;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default ContactTextArea;
