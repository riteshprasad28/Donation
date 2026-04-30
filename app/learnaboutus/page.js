import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-slate-950 text-white px-6 py-16 flex justify-center">
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Learn More About Me ☕
        </h1>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12">
          This platform is built with passion, creativity, and a lot of late-night chai.
          Your support helps me continue building useful and meaningful projects.
        </p>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left: About Text */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Hi, I’m <span className="text-green-400">Ritesh</span> 👋
            </h2>

            <p className="text-slate-300 leading-relaxed">
              I am a <span className="font-semibold text-white">Full Stack Developer</span>
              {" "} who loves building modern, fast, and user-friendly web applications.
              From designing clean interfaces to developing powerful backends,
              I enjoy turning ideas into real-world products. 
            </p>

            <p className="text-slate-300 leading-relaxed">
              This tea website is more than just donations — it’s a way for people
              to support my learning journey, open-source work, and future projects.
              Every cup of tea motivates me to build more 🚀
            </p>
          </div>

          {/* Right: Skills */}
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Full Stack Skills
            </h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "REST APIs",
                "Razorpay Integration",
                "Git & GitHub",
                "Authentication",
                "Deployment",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm rounded-full bg-slate-800 border border-slate-700 hover:border-green-400 hover:text-green-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Line */}
        <div className="mt-14 text-center text-slate-400">
          <p>
            ☕ Built with love, code, and chai.  
            Thank you for supporting independent developers.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
