import { H1, H5 } from "../comman/Heading";
function Reelsection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center my-10">
          <H1 heading="Social media Videos" className="my-5" />
        </div>
        <div className="flex lg:flex-row flex-col justify-center items-center gap-12">
          <video
            src="/images/Intro.mp4"
            controls
            width="300px"
            height="500px"
            type="video/mp4"
            className="rounded-lg"
          />
          <video
            src="/images/reel02.mp4"
            controls
            width="300px"
            height="500px"
            type="video/mp4"
            className="rounded-lg hidden lg:block"
          />
          <video
            src="/images/Intro.mp4"
            controls
            width="300px"
            height="500px"
            type="video/mp4"
            className="rounded-lg hidden lg:block"
          />
        </div>
      </div>
    </>
  );
}

export default Reelsection;
