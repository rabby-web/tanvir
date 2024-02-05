import SectionTitle from "../../SectionTitle/SectionTitle";
import PPC from "./PPC";
import SEO from "./SEO";

export default function Service() {
  return (
    <>
      <SectionTitle heading="Service" subHeading="Whats new"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mx-2">
        {/* <ServiceCart></ServiceCart> */}
        <SEO></SEO>
        <PPC></PPC>
      </div>
    </>
  );
}
