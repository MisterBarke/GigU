import dynamic from "next/dynamic";
import EmployersList from "@/components/employers-listing-pages/employers-list-v2";

export const metadata = {
  title: "Employers List V2 || GigU - Job Borad React NextJS Template",
  description: "GigU - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <EmployersList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
