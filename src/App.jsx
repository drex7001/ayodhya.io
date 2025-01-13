import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { Mail, Linkedin, Phone } from 'lucide-react';

// const App = () => {
//   const [theme, setTheme] = useState('dark'); // Default to dark theme

//   useEffect(() => {
//     // Smooth scroll behavior for anchor links
//     const links = document.querySelectorAll('a[href^="#"]');
//     links.forEach(link => {
//       link.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({ behavior: 'smooth' });
//       });
//     });
//   }, []);

//   const toggleTheme = () => {
//     setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
//       {/* Hero Section */}
//       <header className={theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500'}>
//         <div className="container px-4 py-20 mx-auto text-center">
//           <h1 className="mb-4 text-4xl font-bold text-white">Ayodhya Ratnayake</h1>
//           <h2 className="mb-6 text-2xl text-white">Software Engineer</h2>
//           <div className="flex items-center justify-center space-x-4">
//             <a href="mailto:catch.ayodhya@gmail.com" className="flex items-center gap-2 text-white hover:text-blue-400">
//               <Mail size={20} />
//               catch.ayodhya@gmail.com
//             </a>
//             <a href="https://www.linkedin.com/in/ayodhya-ratnayake/" className="flex items-center gap-2 text-white hover:text-blue-400" target='_blank'>
//               <Linkedin size={20} />
//               LinkedIn
//             </a>
//             <span className="flex items-center gap-2 text-white">
//               <Phone size={20} />
//               +94 70 3366939, +94 77 2366939
//             </span>
//           </div>
//           {/* Theme Toggle */}
//           <button
//             className="px-4 py-2 mt-4 text-gray-800 bg-white rounded hover:bg-gray-200"
//             onClick={toggleTheme}
//           >
//             {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </div>
//       </header>

//       {/* About Section */}
//       <section id="about" className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>
//           <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} leading-relaxed max-w-3xl`}>
//             I'm a results-driven full-stack software engineer with three years of experience in building scalable web applications using Laravel, Livewire, Tailwind, and Alpine.js and React. I excel in analyzing complex requirements, collaborating effectively across teams, and delivering innovative solutions that drive efficiency.
//           </p>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className={`py-16 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-white">Skills</h2>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-6 rounded-lg shadow`}>
//               <h3 className="mb-4 font-bold text-white">Soft Skills</h3>
//               <ul className="list-disc pl-5 space-y-2 text-${theme === 'dark' ? 'gray-400' : 'gray-600'}">
//                 <li>Quick learner with the ability to adapt to new technologies and methodologies.</li>
//                 <li>Clear communication, explaining technical concepts to non-technical stakeholders.</li>
//                 <li>Understanding end-users and considering their needs in the development process.</li>
//                 <li>Creative thinker with a knack for finding innovative solutions to complex challenges.</li>
//               </ul>
//             </div>
//             <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-6 rounded-lg shadow`}>
//               <h3 className="mb-4 font-bold text-white">Technical Skills</h3>
//               <ul className="list-disc pl-5 space-y-2 text-${theme === 'dark' ? 'gray-400' : 'gray-600'}">
//                 <li>Programming Languages: PHP, JavaScript, Java, Python, C</li>
//                 <li>Web Development: HTML, CSS, Laravel, Tailwind, Alpine, React</li>
//                 <li>Database Management: SQL (MariaDB), MongoDB, Redis</li>
//                 <li>Project Management: ClickUp, Azure Boards</li>
//                 <li>Web Servers: Apache, Nginx</li>
//                 <li>Operating Systems: Windows, Linux (Ubuntu, Kali, Arch, Fedora)</li>
//                 <li>AI and Machine Learning: Jupyter Notebook, Anaconda Navigator, Flask, AnythingLLM, Ollama</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-white">Experience</h2>
//           <div className={`bg-${theme === 'dark' ? 'gray-700' : 'gray-200'} p-6 rounded-lg shadow`}>
//             <h3 className="text-xl font-bold text-white">Software Engineer - Tache Lanka Pvt Ltd</h3>
//             <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} mb-4`}>2021 - Present</p>
//             <ul className="list-disc pl-5 space-y-2 text-${theme === 'dark' ? 'gray-400' : 'gray-600'}">
//               <li>Architected and developed highly customizable user and settings management systems for multi-tenant SaaS applications.</li>
//               <li>Revamped user experience with intuitive UI design using Figma and Photoshop.</li>
//               <li>Optimized backend performance and scalability through object-oriented design.</li>
//               <li>Implemented task automation strategies using queues and crontab.</li>
//               <li>Enhanced web application response times by implementing Redis caching strategies.</li>
//               <li>Designed, tested, and documented RESTful APIs using Postman.</li>
//               <li>Played a crucial role in the successful migration of company servers.</li>
//               <li>Developed a Shopify embedded application utilizing Laravel and React Polaris.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section id="education" className={`py-16 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-white">Education</h2>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-6 rounded-lg shadow`}>
//               <h3 className="text-xl font-bold text-white">MSc in Artificial Intelligence</h3>
//               <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} mb-4`}>University of Moratuwa - Dec 2023 - Present</p>
//               <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>Reading</p>
//             </div>
//             <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-6 rounded-lg shadow`}>
//               <h3 className="text-xl font-bold text-white">BSc in Information Technology</h3>
//               <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'} mb-4`}>Sri Lanka Institute of Information Technology - 2019-2023</p>
//               <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>Specializing in Software Engineering</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="projects" className={`py-16 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-8 text-3xl font-bold text-white">Projects</h2>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-6 rounded-lg shadow`}>
//               <h3 className="text-xl font-bold text-white">Advanced Weather Prediction</h3>
//               <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>
//                 Developed weather and rainfall forecasting using ML models including Logistic
//                 Regression, Decision Trees, Neural Networks, Random Forest, and XGBoost.
//               </p>
//             </div>
//             <div className={`bg-${theme === 'dark' ? 'gray-800' : 'white'} p-6 rounded-lg shadow`}>
//               <h3 className="text-xl font-bold text-white">Crop Yield Prediction</h3>
//               <p className={`text-${theme === 'dark' ? 'gray-400' : 'gray-600'}`}>
//                 Built crop yield prediction models with Linear Regression, Random Forest, and
//                 XGBoost, visualized results, and deployed on Heroku.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

      
//       {/* Footer */}
//       <footer className={`bg-${theme === 'dark' ? 'gray-800' : 'gray-100'} text-${theme === 'dark' ? 'gray-200' : 'gray-900'} py-8`}>
//         <div className="container px-4 mx-auto text-center">
//           <p>&copy; 2024 Ayodhya Ratnayake. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import { useScroll } from 'react-scroll';
// // import { Github, Linkedin, Mail, Phone } from 'lucide-react';
// // // import 'tailwindcss/tailwind.css';

// // const App = () => {
// //   const [theme, setTheme] = useState('dark');

// //   useEffect(() => {
// //     document.documentElement.className = theme;
// //   }, [theme]);

// //   return (
// //     <Router>
// //       <div className={`min-h-screen ${theme === 'dark' ? 'text-gray-100 bg-gray-900' : 'text-gray-800 bg-white'}`}>
// //         {/* Header */}
// //         <header className="py-6 text-white bg-blue-600">
// //           <div className="container flex items-center justify-between px-4 mx-auto">
// //             <h1 className="text-2xl font-bold">AR</h1>
// //             <nav>
// //               <ul className="flex space-x-4">
// //                 <li>
// //                   <Link to="/ayodhya.io" className="hover:text-blue-300">Home</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/about" className="hover:text-blue-300">About</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/experience" className="hover:text-blue-300">Experience</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/skills" className="hover:text-blue-300">Skills</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/projects" className="hover:text-blue-300">Projects</Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/contact" className="hover:text-blue-300">Contact</Link>
// //                 </li>
// //                 <button
// //                   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
// //                   className="px-3 py-1 ml-4 rounded hover:bg-blue-700"
// //                 >
// //                   {theme === 'dark' ? 'Light' : 'Dark'} Mode
// //                 </button>
// //               </ul>
// //             </nav>
// //           </div>
// //         </header>

// //         {/* Routes */}
// //         <Routes>
// //           <Route exact path="/" component={Home} />
// //           <Route path="/about" component={About} />
// //           <Route path="/experience" component={Experience} />
// //           <Route path="/skills" component={Skills} />
// //           <Route path="/projects" component={Projects} />
// //           <Route path="/contact" component={Contact} />
// //         </Routes>
// //         {/* Footer */}
// //         <footer className={`py-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} text-${theme === 'dark' ? 'white' : 'gray-600'}`}>
// //           <div className="container px-4 mx-auto text-center">
// //             <p>&copy; 2024 Ayodhya Ratnayake. All rights reserved.</p>
// //           </div>
// //         </footer>
// //       </div>
// //     </Router>
// //   );
// // };

// // const Home = () => {
// //   const { scroll } = useScroll();

// //   return (
// //     <section className="py-20 text-white bg-blue-600">
// //       <div className="container px-4 mx-auto">
// //         <h1 className="mb-4 text-4xl font-bold">Ayodhya Ratnayake</h1>
// //         <h2 className="mb-6 text-2xl">Software Engineer</h2>
// //         <div className="flex space-x-4">
// //           <a
// //             href="mailto:catch.ayodhya@gmail.com"
// //             className="flex items-center gap-2 hover:text-blue-300"
// //             onClick={() => scroll.scrollToHash('contact')}
// //           >
// //             <Mail size={20} />
// //             catch.ayodhya@gmail.com
// //           </a>
// //           <a
// //             href="https://www.linkedin.com/in/ayodhya-ratnayake/"
// //             className="flex items-center gap-2 hover:text-blue-300"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Linkedin size={20} />
// //             LinkedIn
// //           </a>
// //           <span className="flex items-center gap-2">
// //             <Phone size={20} />
// //             +94 70 3366939, +94 77 2366939
// //           </span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const About = () => {
// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="container px-4 mx-auto">
// //         <h2 className="mb-8 text-3xl font-bold">About Me</h2>
// //         <p className="max-w-3xl leading-relaxed text-gray-600">
// //           I'm a results-driven full-stack software engineer with three years of experience in building scalable web applications using Laravel, Livewire, Tailwind, and Alpine.js and React. I excel in analyzing complex requirements, collaborating effectively across teams, and delivering innovative solutions that drive efficiency.
// //         </p>
// //       </div>
// //     </section>
// //   );
// // };

// // const Experience = () => {
// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="container px-4 mx-auto">
// //         <h2 className="mb-8 text-3xl font-bold">Experience</h2>
// //         <div className="p-6 rounded-lg bg-gray-50">
// //           <h3 className="text-xl font-bold">Tache Lanka Pvt Ltd</h3>
// //           <p className="mb-4 text-gray-600">2021 - Present</p>
// //           <ul className="pl-5 space-y-2 list-disc">
// //             <li>Architected and developed highly customizable user and settings management systems for multi-tenant SAAS applications.</li>
// //             {/* Add more experience points here */}
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Skills = () => {
// //   return (
// //     <section className="py-16 bg-gray-50">
// //       <div className="container px-4 mx-auto">
// //         <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
// //           <div className="p-6 bg-white rounded-lg shadow">
// //             <h3 className="mb-4 font-bold">Programming Languages</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {['PHP', 'JavaScript', 'Java', 'Python', 'C'].map((skill) => (
// //                 <span key={skill} className="px-3 py-1 text-blue-800 bg-blue-100 rounded">{skill}</span>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="p-6 bg-white rounded-lg shadow">
// //             <h3 className="mb-4 font-bold">Web Development</h3>
// //             <div className="flex flex-wrap gap-2">
// //               {['HTML', 'CSS', 'Laravel', 'Tailwind', 'React'].map((skill) => (
// //                 <span key={skill} className="px-3 py-1 text-green-800 bg-green-100 rounded">{skill}</span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Projects = () => {
// //   return (
// //     <section className="py-16 bg-gray-50">
// //       <div className="container px-4 mx-auto">
// //         <h2 className="mb-8 text-3xl font-bold">Projects</h2>
// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
// //           <div className="p-6 bg-white rounded-lg shadow">
// //             <h3 className="mb-4 text-xl font-bold">Project One</h3>
// //             <p className="text-gray-600">
// //               Description of project one.
// //             </p>
// //           </div>
// //           <div className="p-6 bg-white rounded-lg shadow">
// //             <h3 className="mb-4 text-xl font-bold">Project Two</h3>
// //             <p className="text-gray-600">
// //               Description of project two.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const Contact = () => {
// //   return (
// //     <section className="py-16 bg-white">
// //       <div className="container px-4 mx-auto">
// //         <h2 className="mb-8 text-3xl font-bold">Contact</h2>
// //         <div className="p-6 border bg-gray-800/50 backdrop-blur-sm rounded-xl border-gray-700/50">
// //           <div className="space-y-4">
// //             <p className="flex items-center">
// //               <span className="font-semibold min-w-20">Email:</span>
// //               <a href="mailto:catch.ayodhya@gmail.com" className="ml-2 text-blue-400 hover:underline">catch.ayodhya@gmail.com</a>
// //             </p>
// //             <p className="flex items-center">
// //               <span className="font-semibold min-w-20">LinkedIn:</span>
// //               <a href="https://www.linkedin.com/in/ayodhya-ratnayake/" className="ml-2 text-blue-400 hover:underline">linkedin.com/in/ayodhya-ratnayake</a>
// //             </p>
// //             {/* Add more contact details here */}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default App;