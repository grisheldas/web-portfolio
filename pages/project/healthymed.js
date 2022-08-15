import Head from "next/head";
import useDarkMode from "../../helpers/useDarkMode";
import Navbar from "../../components/Navbar";
import ProjectDetail from "../../components/ProjectDetail";
import Link from "next/link";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Healthymed() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="w-screen min-h-screen dark:bg-gray-900 bg-indigo-200">
      <Head>
        <title>Shelda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="sm:w-[475px] lg:w-[800px] mx-auto dark:text-indigo-200 text-gray-900 pt-20">
        Masih kosong ngab males mikir
      </div>
    </div>
  );
}

export default Healthymed;
