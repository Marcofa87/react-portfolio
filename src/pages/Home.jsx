import DownloadPdf from "../ui/main/downloadpdf/DownloadPdf";
import "../ui/main/mainimg.css";

export default function Home() {
  return (
    <>
      <div className="p-4 lg:w-4/5 lg:m-auto">
        <div className="p-4 md:grid md:grid-cols-2 md:gap-20 m-auto">
          <div className="p-6 text-center">
            <h1 className=" from-amber-400 via-amber-600 to-amber-400 bg-gradient-to-r bg-clip-text text-transparent">
              Hello! I&apos;m <br />
              <span className="text-slate-900 font-bold rounded-md bg-slate-50 p-1 ">
                Marco Falasca
              </span>
              <br /> Front-End Developer
            </h1>
            <p className=" p-8 font-bold">
              I&apos;m studying Front-End Web develpment since 2 Years, feel
              free to contact me if you&apos;re interested!
            </p>
            <DownloadPdf />
          </div>
          <div className="p-6 flex justify-center">
            <img
              alt="picture of me"
              src="/public/assets/cambodia.webp"
              className="shape "
            />
          </div>
        </div>
      </div>
    </>
  );
}
