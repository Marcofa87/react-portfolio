import Buttons from "../shared/Buttons";
import "../ui/main/mainimg.css";

export default function Home() {
  return (
    <>
      <div className="p-4 lg:w-4/5 lg:m-auto">
        <div className="p-4 md:grid md:grid-cols-2 md:gap-20 m-auto">
          <div className="p-6 text-center">
            <h1 className="text-center text-2xl from-amber-400 via-amber-600 to-amber-400 bg-gradient-to-r bg-clip-text text-transparent font-bold p-8">
              Hello! My Name is Marco, and i am a Junior Front-End Developer
            </h1>
            <p className="text-slate-200 p-8 font-bold">
              I&apos;m studying Front-End Web develpment since 2 Years, feel
              free to contact me if you&apos;re interested!
            </p>
            <Buttons>Download CV</Buttons>
          </div>
          <div className="p-6 flex justify-center">
            <img
              alt="picture of me"
              src="../../assets/40005137_10217413760481971_5456129146335789056_n.jpg"
              className="shape opacity-65  "
            />
          </div>
        </div>
      </div>
    </>
  );
}
