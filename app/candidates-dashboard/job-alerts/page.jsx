import dynamic from "next/dynamic";
import JobAlerts from "@/components/dashboard-pages/candidates-dashboard/job-alerts";

export const metadata = {
  title: "My Job Alerts || GigU - Job Borad React NextJS Template",
  description: "GigU - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <JobAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
