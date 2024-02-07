const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-1/5 mx-auto text-center mt-8 mb-5 dark:text-tc-1 text-tc-2">
      <p className="text-yellow-500 mb-2">---{subHeading}---</p>
      <h3 className="text-3xl uppercase border-y-2 p-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
