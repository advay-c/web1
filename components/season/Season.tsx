export const Season = (props: any) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#232936] rounded-lg md:w-[800px] px-10 py-8">
        <h1 className="text-secondary text-4xl font-bold text-center mb-10">
          <span className="text-gray-400">We named it ... </span> {props.title}!
        </h1>

        {...props?.children}
      </div>
    </div>
  );
};
