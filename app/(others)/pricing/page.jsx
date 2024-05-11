import dynamic from "next/dynamic";

import Pricing from "@/components/pages-menu/pricing";

export const metadata = {
  title: 'Pricing || GigU - Job Borad React NextJS Template',
  description:
    'GigU - Job Borad React NextJS Template',
  
}



const index = () => {
  return (
    <>
      
      <Pricing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
