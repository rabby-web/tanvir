import SectionTitle from "../../SectionTitle/SectionTitle";

export default function About() {
  return (
    <>
      <div className="md:py-16">
        <SectionTitle heading="About Me" subHeading="Whats new"></SectionTitle>
        <div className=" py-8 my-4 px-4">
          {/* <h2 className="text-purple-700 text-3xl font-semibold text-center p-3 rounded bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))]">
          Overview:-
        </h2> */}
          <h2 className="text-3xl  text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent my-3">
            Welcome to Tanvir Ahmed's Digital Marketing Universe!
          </h2>
          <p className="sm:text-base md:text-lg font-medium max-w-5xl mx-auto  md:text-left p-6 border rounded-lg text-dark-01 dark:text-white bg-slate-200 dark:bg-black ">
            We Are a Team Of Dedicated And Experienced Professionals Who Are
            Passionate About Helping Businesses Grow And Succeed Through
            Effective Digital Marketing Strategies. Our Agency Was Founded With
            The Goal Of Helping Businesses Of All Sizes Reach Their Full
            Potential Online. We Know That In today’s Fast-paced Digital World,
            a Strong Online Presence Is Crucial For Success. Our Agency Was
            Founded With The Goal Of Helping Businesses Of All Sizes Reach Their
            Full Potential Online. We Know That In today’s Fast-paced Digital
            World, a Strong Online Presence Is Crucial For Success.
          </p>
        </div>
      </div>
    </>
  );
}
