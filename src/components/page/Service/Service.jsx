import SectionTitle from "../../SectionTitle/SectionTitle";
import PPC from "./PPC";
import SEO from "./SEO";
import SMM from "./SMM";

export default function Service() {
  return (
    <>
      <SectionTitle heading="Service" subHeading="Whats new"></SectionTitle>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 px-3">
          {/* <ServiceCart></ServiceCart> */}
          <SEO></SEO>
          <PPC></PPC>
          <SMM></SMM>
        </div>
      </div>
    </>
  );
}
