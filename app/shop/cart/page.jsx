import dynamic from "next/dynamic";
import Cart from "@/components/shop/cart";

export const metadata = {
  title: "Cart || GigU - Job Borad React NextJS Template",
  description: "GigU - Job Borad React NextJS Template",
};

const index = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
