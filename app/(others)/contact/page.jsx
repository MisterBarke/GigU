import dynamic from "next/dynamic";

import Contact from "@/components/pages-menu/contact";

export const metadata = {
  title: 'Contact || GigU - Job Borad React NextJS Template',
  description:
    'GigU - Job Borad React NextJS Template',
  
}



const index = () => {
  return (
    <>
      
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
