import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import { useScroll } from 'react-scroll';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'text-gray-100 bg-gray-900' : 'text-gray-800 bg-white'}`}>
        {/* Header */}
        <header className="py-6 text-white bg-blue-600">
          <div className="container flex items-center justify-between px-4 mx-auto">
            <h1 className="text-2xl font-bold">AR</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="hover:text-blue-300">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-300">About</Link>
                </li>
                <li>
                  <Link to="/experience" className="hover:text-blue-300">Experience</Link>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-blue-300">Skills</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-blue-300">Projects</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-300">Contact</Link>
                </li>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="px-3 py-1 ml-4 rounded hover:bg-blue-700"
                >
                  {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
              </ul>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

        {/* Footer */}
        <footer className={`py-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} text-${theme === 'dark' ? 'white' : 'gray-600'}`}>
          <div className="container px-4 mx-auto text-center">
            <p>&copy; 2024 Ayodhya Ratnayake. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const Home = () => {
  const { scroll } = useScroll();

  return (
    <section className="py-20 text-white bg-blue-600">
      <div className="container px-4 mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Ayodhya Ratnayake</h1>
        <h2 className="mb-6 text-2xl">Software Engineer</h2>
        <div className="flex space-x-4">
          <a
            href="mailto:catch.ayodhya@gmail.com"
            className="flex items-center gap-2 hover:text-blue-300"
            onClick={() => scroll.scrollToHash('contact')}
          >
            <Mail size={20} />
            catch.ayodhya@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ayodhya-ratnayake/"
            className="flex items-center gap-2 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <Phone size={20} />
            +94 70 3366939, +94 77 2366939
          </span>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">About Me</h2>
        <p className="max-w-3xl leading-relaxed text-gray-600">
          I'm a results-driven full-stack software engineer with three years of experience in building scalable web applications using Laravel, Livewire, Tailwind, and Alpine.js and React. I excel in analyzing complex requirements, collaborating effectively across teams, and delivering innovative solutions that drive efficiency.
        </p>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">Experience</h2>
        <div className="p-6 rounded-lg bg-gray-50">
          <h3 className="text-xl font-bold">Tache Lanka Pvt Ltd</h3>
          <p className="mb-4 text-gray-600">2021 - Present</p>
          <ul className="pl-5 space-y-2 list-disc">
            <li>Architected and developed highly customizable user and settings management systems for multi-tenant SAAS applications.</li>
            {/* Add more experience points here */}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 font-bold">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'JavaScript', 'Java', 'Python', 'C'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-blue-800 bg-blue-100 rounded">{skill}</span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 font-bold">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'Laravel', 'Tailwind', 'React'].map((skill) => (
                <span key={skill} className="px-3 py-1 text-green-800 bg-green-100 rounded">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-xl font-bold">Project One</h3>
            <p className="text-gray-600">
              Description of project one.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="mb-4 text-xl font-bold">Project Two</h3>
            <p className="text-gray-600">
              Description of project two.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">Contact</h2>
        <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-semibold min-w-20">Email:</span>
              <a href="mailto:catch.ayodhya@gmail.com" className="ml-2 text-blue-400 hover:underline">catch.ayodhya@gmail.com</a>
            </p>
            <p className="flex items-center">
              <span className="font-semibold min-w-20">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/ayodhya-ratnayake/" className="ml-2 text-blue-400 hover:underline">linkedin.com/in/ayodhya-ratnayake</a>
            </p>
            {/* Add more contact details here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
// import React, { useEffect } from 'react';
// // import { Camera } from 'lucide-react';

// const App = () => {
//   useEffect(() => {
//     // Smooth scroll behavior for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({ behavior: 'smooth' });
//       });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen text-gray-100 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//       {/* Sticky Header with Glass Effect */}
//       <header className="fixed top-0 z-50 w-full py-4 border-b bg-gray-900/70 backdrop-blur-lg border-gray-700/50">
//         <div className="flex items-center justify-between max-w-5xl px-4 mx-auto">
//           <h1 className="text-2xl font-bold">AR</h1>
//           <nav className="hidden space-x-6 md:flex">
//             {['about', 'education', 'experience', 'skills', 'contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item}`}
//                 className="capitalize transition-colors hover:text-blue-400"
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section with Profile */}
//       <section className="pt-24 pb-12">
//         <div className="flex flex-col items-center max-w-5xl px-4 mx-auto">
//           <div className="relative w-48 h-48 mb-8">
//             <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
//             <div className="relative w-48 h-48 overflow-hidden border-4 border-gray-700 rounded-full">
//               <img
//                 src="https://avatars.githubusercontent.com/u/55638682?s=400&u=7e7246142066d617125c798fb30d3bcbb19cfddd&v=4"
//                 alt="Ayodhya Ratnayake"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//           <h1 className="mb-4 text-5xl font-bold text-center">Ayodhya Ratnayake</h1>
//           <h2 className="mb-8 text-2xl text-blue-400">Software Engineer</h2>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16">
//         <div className="max-w-4xl px-4 mx-auto">
//           <h3 className="mb-8 text-3xl font-bold text-blue-400">About Me</h3>
//           <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
//             <p className="text-lg leading-relaxed">
//               I'm a results-driven full-stack software engineer with three years of experience in building scalable web
//               applications using Laravel, Livewire, Tailwind, and Alpine.js and React. I excel in analyzing complex
//               requirements, collaborating effectively across teams, and delivering innovative solutions that drive efficiency.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-16">
//         <div className="max-w-4xl px-4 mx-auto">
//           <h3 className="mb-8 text-3xl font-bold text-blue-400">Education</h3>
//           <div className="space-y-6">
//             {[
//               {
//                 school: "University of Moratuwa",
//                 period: "Dec 2023 - Present",
//                 degree: "MSc in Artificial Intelligence",
//                 status: "(Reading)"
//               },
//               {
//                 school: "Sri Lanka Institute of Information Technology",
//                 period: "2019-2023",
//                 degree: "BSc in Information Technology",
//                 specialization: "Specializing in Software Engineering"
//               }
//             ].map((edu, index) => (
//               <div key={index} className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
//                 <h4 className="text-xl font-semibold">{edu.school} {edu.status}</h4>
//                 <p className="mt-2 text-blue-400">{edu.period}</p>
//                 <p className="mt-2">{edu.degree}</p>
//                 {edu.specialization && <p className="text-gray-400">{edu.specialization}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-16">
//         <div className="max-w-4xl px-4 mx-auto">
//           <h3 className="mb-8 text-3xl font-bold text-blue-400">Experience</h3>
//           <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
//             <h4 className="text-xl font-semibold">Tache Lanka Pvt Ltd</h4>
//             <p className="mt-2 text-blue-400">2021 - Present</p>
//             <ul className="mt-4 space-y-3">
//               {[
//                 "Architected and developed highly customizable user and settings management systems for multi-tenant SAAS applications.",
//                 "Revamped user experience with intuitive UI design using Figma and Photoshop.",
//                 "Optimized backend performance and scalability through object-oriented design.",
//                 "Implemented task automation strategies using queues and crontab.",
//                 "Enhanced web application response times by implementing Redis caching strategies.",
//                 "Designed, tested, and documented RESTful APIs using Postman.",
//                 "Played a crucial role in the successful migration of company servers.",
//                 "Developed a Shopify embedded application utilizing Laravel and React Polaris."
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="mr-2 text-blue-400">•</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-16">
//         <div className="max-w-4xl px-4 mx-auto">
//           <h3 className="mb-8 text-3xl font-bold text-blue-400">Skills</h3>
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
//               <h4 className="mb-4 text-xl font-semibold">Soft Skills</h4>
//               <ul className="space-y-3">
//                 {[
//                   "Quick learner with the ability to adapt to new technologies and methodologies.",
//                   "Clear communication, explaining technical concepts to non-technical stakeholders.",
//                   "Understanding end-users and considering their needs in the development process.",
//                   "Creative thinker with a knack for finding innovative solutions to complex challenges."
//                 ].map((skill, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="mr-2 text-blue-400">•</span>
//                     <span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
//               <h4 className="mb-4 text-xl font-semibold">Technical Skills</h4>
//               <ul className="space-y-3">
//                 {[
//                   "Programming Languages: PHP, JavaScript, Java, Python, C",
//                   "Web Development: HTML, CSS, Laravel, Tailwind, Alpine, React",
//                   "Database Management: SQL (MariaDB), MongoDB, Redis",
//                   "Project Management: ClickUp, Azure Boards",
//                   "Web Servers: Apache, Nginx",
//                   "Operating Systems: Windows, Linux (Ubuntu, Kail, Arch, Fedora)",
//                   "AI and Machine Learning: Jupyter Notebook, Anaconda Navigator, Flask, AnythingLLM, Ollama"
//                 ].map((skill, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="mr-2 text-blue-400">•</span>
//                     <span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16">
//         <div className="max-w-4xl px-4 mx-auto">
//           <h3 className="mb-8 text-3xl font-bold text-blue-400">Contact</h3>
//           <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
//             <div className="space-y-4">
//               {[
//                 { label: "Email", value: "catch.ayodhya@gmail.com", href: "mailto:catch.ayodhya@gmail.com" },
//                 { label: "LinkedIn", value: "linkedin.com/in/ayodhya-ratnayake", href: "https://www.linkedin.com/in/ayodhya-ratnayake/" },
//                 { label: "Behance", value: "behance.net/ayodhyaratnayake", href: "https://www.behance.net/ayodhyaratnayake" },
//                 { label: "Phone", value: "+94 70 3366939, +94 77 2366939" },
//                 { label: "Address", value: "35/32 Dambahena Road, Maharagama" }
//               ].map((contact, index) => (
//                 <p key={index} className="flex items-center">
//                   <span className="font-semibold min-w-20">{contact.label}:</span>
//                   {contact.href ? (
//                     <a href={contact.href} className="ml-2 text-blue-400 hover:underline">{contact.value}</a>
//                   ) : (
//                     <span className="ml-2">{contact.value}</span>
//                   )}
//                 </p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 border-t border-gray-700/50">
//         <div className="max-w-4xl px-4 mx-auto text-center">
//           <p className="text-gray-400">&copy; 2024 Ayodhya Ratnayake. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;