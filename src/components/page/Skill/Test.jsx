import { Line } from "rc-progress";
export default function Test() {
  return (
    <>
      <Line
        percent={70}
        strokeWidth={2}
        strokeColor="#483D8B"
        trailColor="#20B2AA"
        strokeLinecap="round"
        gapDegree={30}
        className=""
      />
    </>
  );
}
