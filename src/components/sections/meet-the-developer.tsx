import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MeetDeveloper = () => {
  return (
    <section
      className="w-full py-70 pb-30 px-10 lg:px-0 min-h-screen flex-center bg-bg-2"
      id="meet-developer"
    >
      <div className="w-full flex-center flex-col text-center gap-50 sm:gap-16 lg:gap-30 2xl:gap-80 px-4 sm:px-6 lg:px-8">
        <div className="flex-center flex-col text-center gap-12 sm:gap-8 lg:gap-14 2xl:gap-18">
          <h2 className="font-bold text-40 sm:text-30 lg:text-40 2xl:text-70 leading-tight text-white">
            Meet the <span className="text-gradient">Developer</span>
          </h2>
          <p className="text-white/60 font-normal text-18 sm:text-16 lg:text-18 2xl:text-24 leading-normal max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto">
            I value your feedback! Help me improve Auth Wave by sharing your
            thoughts and requesting new features for upcoming versions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 sm:gap-16 lg:gap-20 2xl:gap-35">
          <div className="w-48 h-48 sm:w-36 sm:h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden p-4 border-2 border-white">
            <Image
              src={`/assets/images/me.jpg`}
              alt="Developer"
              width={192}
              height={192}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-xl lg:text-2xl font-semibold text-white mb-2">
              Abhijeet Gautam
            </h3>
            <p className="text-white/60 mb-4">
              Developer of{" "}
              <span className="text-white font-semibold"> Auth Wave</span>{" "}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://x.com/abhijeet_gautam"
                target="_blank"
                className="text-white/60 hover:text-p-accent transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abhijeet-gautam-a413b1211/"
                target="_blank"
                className="text-white/60 hover:text-p-accent transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/Abhijeet-Gautam5702"
                target="_blank"
                className="text-white/60 hover:text-p-accent transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:abhidevelops572@gmail.com"
                target="_blank"
                className="text-white/60 hover:text-p-accent transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDeveloper;
