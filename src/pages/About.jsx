import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden flex justify-center p-16">
        <div
          className="absolute inset-0 h-full w-full border-2 text-center m-0 bg-[url(../../assets/thai.webp)] bg-cover bg-center"
          style={theme === "on" ? { opacity: 0.2 } : { opacity: 0 }}
        ></div>
        <div className="w-5/6 text-center">
          <h1 className="font-bold p-4">Something about me</h1>
          <p>
            Welcome to my corner of the web! I&apos;m a passionate junior
            front-end developer with hands-on experience in crafting dynamic web
            applications using React and Angular. With a keen eye for design and
            a love for clean, efficient code, I thrive on turning creative
            concepts into seamless user experiences.
          </p>
          <p>
            In my journey as a developer, I&apos;ve honed my skills in HTML,
            CSS, and JavaScript, always pushing the boundaries of what&apos;s
            possible in web development. Whether it&apos;s building responsive
            layouts, or integrating APIs.
          </p>
          <p>
            Beyond coding, I&apos;m a continual learner, always eager to explore
            new technologies and methodologies to stay at the forefront of the
            ever-evolving tech landscape. Collaborative by nature, I thrive in
            team environments where ideas flow freely and innovation is
            encouraged.
          </p>
          <p>
            Explore my portfolio to see some of the projects I&apos;ve brought
            to life, and feel free to reach out—I&apos;m always up for new
            challenges and opportunities to contribute to exciting projects.
          </p>
        </div>
      </div>
    </>
  );
}
