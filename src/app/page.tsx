import styles from "../styles/Home.module.css";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-auto w-full flex md:flex-row flex-col justify-between items-center">
      <div className="p-5 2xl:w-1/2 xl:w-1/2 md:w-auto">
        <div className={styles.image}>
          <Image
            src={avatar}
            alt="Picture of the author"
            className="rounded-full 2xl:w-96 2xl:h-96 xl:w-96 xl:h-96 md:w-auto md:h-auto sm:h-auto sm:w-auto float-right object-cover"
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="h-auto w-full flex md:flex-col flex-col justify-between">
          <div className="p-2">
            <p className="text-5xl font-bold">Hello</p>
          </div>
          <div className="p-2">
            <p className="text-2xl font-bold">A Bit About Me</p>
          </div>
          <div className="p-2 xl:w-1/2">
            <p className="">
              I’m a devloper. Click here to add your own text and edit me. I’m a
              great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className="2xl:w-9/12 2xl:h-36 xl:w-9/12 xl:h-32 lg:w-9/12 lg:h-28 md:w-9/12 md:h-24 sm:w-9/12 sm:h-20 flex md:flex-row flex-row justify-between m-0">
            <div className="bg-red-300 rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20">
              <Link
                href="/resume"
                className="flex items-center justify-center text-center rounded-full 2xl:w-36 h-full sm:w-auto object-cover 2xl:text-xl md:text-sm font-bold"
              >
                Resume
              </Link>
            </div>
            <div className="bg-amber-300 rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20">
              <Link
                href="/projects"
                className="flex items-center justify-center text-center rounded-full 2xl:w-36 h-full sm:w-auto object-cover 2xl:text-xl md:text-sm font-bold"
              >
                Projects
              </Link>
            </div>
            <div className="bg-green-300 rounded-full 2xl:w-36 2xl:h-36 xl:w-32 xl:h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 sm:w-20 sm:h-20">
              <Link
                href="/contact"
                className="flex items-center justify-center text-center rounded-full 2xl:w-36 h-full sm:w-auto object-cover 2xl:text-xl md:text-sm font-bold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
