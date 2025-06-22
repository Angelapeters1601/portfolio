import "../App.css";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="parallax-wrapper" id="parallax">
      <div className="parallax-bg" />

      <div className="content">
        <h1 className="text-center py-6 font-lilita text-6xl text-customPink mt-50">
          Hi, I'm Angela,
        </h1>

        <p className="text-center font-mono font-extrabold text-xl text-customPink">
          <Typewriter
            words={[
              "Frontend Developer.",
              "UI/UX Enthusiast.",
              "React • Next.js • JavaScript",
              "Tailwind CSS • Bootstrap • Material UI",
              "Styled Components • Animations",
              "MongoDB • Supabase • Node.js",
              "Express.js • GitHub • Figma",
              "Clean • Responsive • Creative Code",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <h2 className="text-4xl font-bold font-mono text-customBlack text-center mt-20">
          Welcome to My Portfolio 😊😁
        </h2>
      </div>
    </div>
  );
};

export default Home;
