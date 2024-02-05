import SectionTitle from "../../SectionTitle/SectionTitle";

export default function Skill() {
  return (
    <>
      <SectionTitle heading="Skill" subHeading="Whats new"></SectionTitle>
      <div className="py-6 px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                className="w-12 h-12"
                src="https://i.ibb.co/YDgrt0n/ds.png"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">HTML</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                className="w-12 h-12"
                src="https://i.ibb.co/YDgrt0n/ds.png"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">CSS</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">Tailwind CSS</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">JavaScript</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="65"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">React</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">Firebase</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">Node JS</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3  items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">Express JS</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="text-2xl text-center border p-4 rounded-md">
            <div className="flex justify-center gap-3 items-center">
              <img
                src="https://i.ibb.co/YDgrt0n/ds.png"
                className="w-12 h-12"
                alt=""
              />
              <h2 className="dark:text-white text-dark-01">MongoDB</h2>
            </div>

            <progress
              className="progress progress-info w-56"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </>
  );
}
