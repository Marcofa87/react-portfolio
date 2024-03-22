import thai from "../../public/assets/app_pictures/thai.webp";
import { useTheme } from "../context/ThemeContext";
export default function About() {
  const { theme } = useTheme();
  const opacity = theme === "on" ? { opacity: 0.4 } : { opacity: 0.8 };
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="max-w-8/12">
          <h1 className="font-bold p-4 text-center">Hello!</h1>
          <p className="p-4">
            Welcome to my corner of the web! I&apos;m a passionate junior
            front-end developer with hands-on experience in crafting dynamic web
            applications using React and Angular, with a good knowledge in the
            field of application development and a strong motivation to grow
            professionally in the role. They can rely on good organizational
            skills and time management. They can easily adapt to new work
            environments thanks to their teamwork spirit and excellent listening
            and communication skills.
          </p>
          <p className="p-4">
            In my journey as a developer, I&apos;ve honed my skills in HTML,
            CSS, and JavaScript, always pushing the boundaries of what&apos;s
            possible in web development. Whether it&apos;s building responsive
            layouts, or integrating APIs.
          </p>
          <p className="p-4">
            Beyond coding, I&apos;m a continual learner, always eager to explore
            new technologies and methodologies to stay at the forefront of the
            ever-evolving tech landscape. Collaborative by nature, I thrive in
            team environments where ideas flow freely and innovation is
            encouraged.
          </p>
          <p className="p-4">
            Explore my portfolio to see some of the projects I&apos;ve brought
            to life, and feel free to reach out—I&apos;m always up for new
            challenges and opportunities to contribute to exciting projects.
          </p>
        </div>
        <div className="max-w-4/12 m-auto">
          <img
            className="p-4 rounded-3xl max-h-full"
            style={opacity}
            src={thai}
            alt="picture of me"
          />
        </div>
      </div>
    </>
  );
}
