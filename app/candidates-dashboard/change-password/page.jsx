import dynamic from "next/dynamic";
import ChangePassword from "@/components/dashboard-pages/candidates-dashboard/change-password";

export const metadata = {
  title: "Change Password || GigU - Job Borad React NextJS Template",
  description: "GigU - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
