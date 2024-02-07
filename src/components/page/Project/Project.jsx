import SectionTitle from "../../SectionTitle/SectionTitle";

export default function Project() {
  return (
    <>
      <SectionTitle heading="Project" subHeading="Latest Work"></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16 mx-4">
        {/* 1------- */}
        <div className="bg-white border rounded-md ">
          <div className=" room overflow-hidden relative">
            <img
              // onClick={handleDetails}
              className="scale-110 hover:scale-100 duration-700 -z-10 cursor-pointer room-image w-full h-64 mb-4"
              src="https://i.ibb.co/7nQmcYP/p-1.jpg"
              alt="Image 3"
            />
            <h2
              className=" pr-10 rounded-sm room-title text-lg font-medium text-dark-01 bg-white hover:bg-slate-100 z-10 absolute left-0 bottom-0 py-1.5 px-4 duration-700  w-full"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Name: Views and Impression
              <span className=" text-dark-01 mb-2 block text-sm">
                Company: <span className="text-base">Daraz Online Shop</span>
              </span>
            </h2>
          </div>
        </div>
        {/* 2------- */}
        <div className="bg-white border rounded-md ">
          <div className=" room overflow-hidden relative">
            <img
              // onClick={handleDetails}
              className="scale-110 hover:scale-100 duration-700 -z-10 cursor-pointer room-image w-full h-64 mb-4"
              src="https://i.ibb.co/xf32rmr/p-2.jpg"
              alt="Image 3"
            />
            <h2
              className=" pr-10 rounded-sm room-title text-lg font-medium text-dark-01 bg-white hover:bg-slate-100 z-10 absolute left-0 bottom-0 py-1.5 px-4 duration-700  w-full"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Name: Views and Impression
              <span className=" text-dark-01 mb-2 block text-sm">
                Company: <span className="text-base">Daraz Online Shop</span>
              </span>
            </h2>
          </div>
        </div>
        {/* 3------- */}
        <div className="bg-white border rounded-md ">
          <div className=" room overflow-hidden relative">
            <img
              // onClick={handleDetails}
              className="scale-110 hover:scale-100 duration-700 -z-10 cursor-pointer room-image w-full h-64 mb-4"
              src="https://i.ibb.co/PDcyhV2/p-3.jpg"
              alt="Image 3"
            />
            <h2
              className=" pr-10 rounded-sm room-title text-lg font-medium text-dark-01 bg-white hover:bg-slate-100 z-10 absolute left-0 bottom-0 py-1.5 px-4 duration-700  w-full"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Name: Views and Impression
              <span className=" text-dark-01 mb-2 block text-sm">
                Company: <span className="text-base">Daraz Online Shop</span>
              </span>
            </h2>
          </div>
        </div>
        {/* 4------- */}
        <div className="bg-white border rounded-md ">
          <div className=" room overflow-hidden relative">
            <img
              // onClick={handleDetails}
              className="scale-110 hover:scale-100 duration-700 -z-10 cursor-pointer room-image w-full h-64 mb-4"
              src="https://i.ibb.co/kyZJL0m/p-4.jpg"
              alt="Image 3"
            />
            <h2
              className=" pr-10 rounded-sm room-title text-lg font-medium text-dark-01 bg-white hover:bg-slate-100 z-10 absolute left-0 bottom-0 py-1.5 px-4 duration-700  w-full"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Name: Views and Impression
              <span className=" text-dark-01 mb-2 block text-sm">
                Company: <span className="text-base">Daraz Online Shop</span>
              </span>
            </h2>
          </div>
        </div>
        {/* 5------- */}
        <div className="bg-white border rounded-md ">
          <div className=" room overflow-hidden relative">
            <img
              // onClick={handleDetails}
              className="scale-110 hover:scale-100 duration-700 -z-10 cursor-pointer room-image w-full h-64 mb-4"
              src="https://i.ibb.co/fC3SfNC/p-5.jpg"
              alt="Image 3"
            />
            <h2
              className=" pr-10 rounded-sm room-title text-lg font-medium text-dark-01 bg-white hover:bg-slate-100 z-10 absolute left-0 bottom-0 py-1.5 px-4 duration-700  w-full"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              Name: Views and Impression
              <span className=" text-dark-01 mb-2 block text-sm">
                Company: <span className="text-base">Daraz Online Shop</span>
              </span>
            </h2>
          </div>
        </div>
        {/* 6------- */}
        <div className="bg-white border rounded-md ">
          <div className=" room overflow-hidden relative">
            <img
              // onClick={handleDetails}
              className="scale-110 hover:scale-100 duration-700 -z-10 cursor-pointer room-image w-full h-64 mb-4"
              src="https://i.ibb.co/2tgj9Wq/p-6.jpg"
              alt="Image 3"
            />
            <h2
              className=" pr-10 rounded-sm room-title text-lg font-medium text-dark-01 bg-white hover:bg-slate-100 z-10 absolute left-0 bottom-0 py-1.5 px-4 duration-700  w-full"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Name: Views and Impression
              <span className=" text-dark-01 mb-2 block text-sm">
                Company: <span className="text-base">Daraz Online Shop</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
