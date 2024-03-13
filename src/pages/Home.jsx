import Buttons from "../shared/Buttons";
import "../ui/main/mainimg.css";

export default function Home() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-center text-2xl from-amber-400 via-amber-600 to-amber-400 bg-gradient-to-r bg-clip-text text-transparent">
          Hello! My Name is Marco, and i am a Junior Front-End Developer
        </h1>
        <div className="p-4 md:grid md:grid-cols-2 md:gap-20">
          <div className="p-4">
            <p className="text-slate-400 p-4">
              I&apos;m studying Front-End Web develpment since 2 Years, feel
              free to contact me if you&apos;re interested!
            </p>
            <Buttons>Download CV</Buttons>
          </div>
          <div className="p-4">
            <img
              src="../../assets/40005137_10217413760481971_5456129146335789056_n.jpg"
              className="shape opacity-65"
            />
          </div>
        </div>
      </div>
    </>
  );
}
