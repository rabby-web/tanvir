import SectionTitle from "../../SectionTitle/SectionTitle";
import AR from "./AR";
import BD from "./BD";
import CM from "./CM";
import CRO from "./CRO";
import EM from "./EM";
import PPC from "./PPC";
import SEO from "./SEO";
import SMM from "./SMM";
import WEB from "./WEB";

export default function Service() {
  return (
    <>
      <SectionTitle
        heading="Service"
        subHeading="I will Offer You"
      ></SectionTitle>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 px-3">
          {/* <ServiceCart></ServiceCart> */}
          <SEO></SEO>
          <PPC></PPC>
          <SMM></SMM>
          <CM></CM>
          <EM></EM>
          <AR></AR>
          <CRO></CRO>
          <BD></BD>
          <WEB></WEB>
        </div>
      </div>
    </>
  );
}
{
  /* <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
</div> */
}
