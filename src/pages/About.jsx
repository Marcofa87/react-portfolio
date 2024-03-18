export default function About() {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden flex justify-center items-center">
        <div
          className="absolute inset-0 h-full w-full border-2 text-center m-0 bg-[url(../../assets/new_york.webp)] bg-cover bg-center"
          style={{ opacity: 0.2 }}
        ></div>
        <div className="w-5/6 text-center">
          <h1 className="font-bold text-slate-50 p-4">Something about me</h1>
          <p className="text-slate-50">
            Welcome to my corner of the web! I&apos;m a passionate junior
            front-end developer with hands-on experience in crafting dynamic web
            applications using React and Angular. With a keen eye for design and
            a love for clean, efficient code, I thrive on turning creative
            concepts into seamless user experiences.
          </p>
          <p className="text-slate-50">
            In my journey as a developer, I&apos;ve honed my skills in HTML,
            CSS, and JavaScript, always pushing the boundaries of what&apos;s
            possible in web development. Whether it&apos;s building responsive
            layouts, or integrating APIs.
          </p>
          <p className="text-slate-50">
            Beyond coding, I&apos;m a continual learner, always eager to explore
            new technologies and methodologies to stay at the forefront of the
            ever-evolving tech landscape. Collaborative by nature, I thrive in
            team environments where ideas flow freely and innovation is
            encouraged.
          </p>
          <p className="text-slate-50">
            Explore my portfolio to see some of the projects I&apos;ve brought
            to life, and feel free to reach out—I&apos;m always up for new
            challenges and opportunities to contribute to exciting projects.
          </p>
        </div>
      </div>
    </>
  );
}
