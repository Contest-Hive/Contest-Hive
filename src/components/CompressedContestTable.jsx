
import ContestsTable from "@/components/ContestsTable";

const CompressedContestTable = ({ contestData }) => {
  return (
    <div className="grainy-light dark:bg-primary">
      <div className="container mx-auto max-w-screen-md px-1 pb-10">
        <header className="pb-8 pt-10 text-center font-heading  text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          Take a{" "}
          <span className="mr-1.5 rounded-lg bg-pinkish px-2 pb-1 text-secondary dark:text-primary">
            Glance
          </span>
        </header>

        <p className="mx-auto mb-10 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
          We gathered everything in one place,{" "}
          <span className="underline-dotted font-semibold">
            so you don&apos;t have to!
          </span>
        </p>
        <ContestsTable
          contestData={contestData}
          compressed={true}
          perPage={3}
        />
      </div>
    </div>
  );
};

export default CompressedContestTable;
