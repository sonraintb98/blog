import Image from "next/image";
import avatar from "../../public/avatar.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-auto w-full flex md:flex-row flex-col justify-between items-center">
      <div className="p-5 2xl:w-1/2 xl:w-1/2 md:w-auto">
        <div className="">
          <Image
            src={avatar}
            alt="Picture of the author"
            className="rounded-full 2xl:w-96 2xl:h-96 xl:w-96 xl:h-96 lg:w-80 lg:h-80 md:w-72 md:h-72 sm:h-64 sm:w-64 smx:w-56 smx:h-56 float-right object-cover"
          />
        </div>
      </div>
      <div className="2xl:w-1/2 smx:w-full p-5">
        <div className="h-auto w-full flex md:flex-col flex-col justify-between">
          <div className="p-2">
            <p className="text-5xl font-bold">
              Hello, I’m
              <span className="text-orange-700 font-bold">
                {" "}
                Nguyen Hoai Son
              </span>
            </p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">A Bit About Me</p>
          </div>
          <div className="p-2 xl:w-1/2">
            <p className="">
              I’m a developer. I graduated from FPT University. I have been
              working for more than 2 years. I am very active and eager to
              learn. I also love playing sports and jogging. In my free time, I
              like reading books, watching movies, listening to music and
              playing games. You can click Resume to know more about me.
            </p>
          </div>
          <div className="2xl:w-9/12 2xl:h-36 xl:w-9/12 xl:h-32 lg:w-9/12 lg:h-28 md:w-9/12 md:h-24 sm:w-9/12 sm:h-20 flex md:flex-row flex-row justify-between">
            <div className="bg-red-300 rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 smx:w-14 smx:h-14">
              <Link
                href="/resume"
                className="flex items-center justify-center text-center rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 smx:w-14 smx:h-14 object-cover"
              >
                <span className="2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs font-bold">
                  Resume
                </span>
              </Link>
            </div>
            <div className="bg-amber-300 rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 smx:w-14 smx:h-14">
              <Link
                href="/projects"
                className="flex items-center justify-center text-center rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 smx:w-14 smx:h-14 object-cover"
              >
                <span className="2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs font-bold">
                  Projects
                </span>
              </Link>
            </div>
            <div className="bg-green-300 rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 smx:w-14 smx:h-14">
              <Link
                href="/contact"
                className="flex items-center justify-center text-center rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-24 lg:h-24 md:w-20 md:h-20 sm:w-16 sm:h-16 smx:w-14 smx:h-14 object-cover"
              >
                <span className="2xl:text-xl xl:text-lg lg:text-base md:text-sm smx:text-xs font-bold">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
