export default function FAQ() {
  return (
    <>
      <div
        className="my-16 mx-2  rounded-md border"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h2 className="text-4xl  pt-10 dark:text-purple-600 text-fuchsia-500 font-bold text-center sm:text-5xl mb-3">
          FAQ
        </h2>
        <div className="md:m-6 mx-3 my-6">
          <div
            className="collapse collapse-arrow bg-slate-100 dark:bg-dark-01 border rounded my-2 text-slate-900 dark:text-slate-50"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-semibold">
              What is digital marketing?
            </div>
            <div className="collapse-content">
              <p>
                Often, there’s confusion about what exactly counts as digital
                marketing, and we get why! It’s a vast field but simply put,
                digital marketing can include any marketing which happens in the
                online realm and/or which involves a phone, laptop, tablet, or
                another device, which can connect to the internet.
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-slate-100 dark:bg-dark-01 border rounded my-2 text-slate-900 dark:text-slate-50"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
              Why do you need digital marketing?
            </div>
            <div className="collapse-content">
              <p>
                Digital and online channels have been part of our lives for
                decades now, but usage of mobile phones, the internet, and other
                technologies has increased rapidly since the COVID-19 pandemic.
                The reality is that the digital environment is not going away
                anytime soon.{" "}
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-slate-100 dark:bg-dark-01 border rounded my-2 text-slate-900 dark:text-slate-50"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
              What are SEO and SEM?
            </div>
            <div className="collapse-content">
              <p>
                SEO stands for search engine optimization. It is the process of
                using different tactics and actions to make a website or
                webpages appear higher up in search results when people use
                search engines like Google. SEO uses organic search, and clicks
                or views aren’t paid for.{" "}
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-slate-100 dark:bg-dark-01 border rounded my-2 text-slate-900 dark:text-slate-50"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
              Can you do it yourself, or do you need an agency?
            </div>
            <div className="collapse-content">
              <p>
                That depends on who you are, really! Often, business owners,
                marketers, or entrepreneurs can do certain parts of digital
                marketing, but not all of it. An agency can be helpful in terms
                of devising a coherent strategy, allowing you to make use of
                experts to get better results
              </p>
            </div>
          </div>
          <div
            className="collapse collapse-arrow bg-slate-100 dark:bg-dark-01 border rounded my-2 text-slate-900 dark:text-slate-50"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-semibold">
              How much does digital marketing cost?
            </div>
            <div className="collapse-content">
              <p>
                Much like any other marketing, costs can vary dramatically from
                business to business. However, unlike traditional marketing,
                there are some ways to leverage digital marketing for free. SEO,
                for instance, is largely free and requires only your time and
                effort. Starting and posting to a social media page is free or
                very low-cost too.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
