import React from "react";
import {
  Mail,
  Instagram,
  Twitter,
  Globe,
  Home,
  Folder,
  Gift,
  Key,
  Edit,
} from "lucide-react";
import profile_pic from "../assets/mobile.png";

import react from "../assets/react.png";
import laravel from "../assets/laravel.png";
import figma from "../assets/figma.png";
import chatgpt from "../assets/chatgpt.png";
import photoshop from "../assets/photoshop.png";
import illustrator from "../assets/illustrator.png";

import art from "../assets/art.png";

const HomePage = () => {
  const stats = [
    { value: "+3", label: "YEARS OF EXPERIENCE" },
    { value: "+5", label: "PROJECTS COMPLETED" },
    // { value: '+3', label: 'WORLDWIDE CLIENTS' }
  ];

  const skills = [
    {
      title: "DYNAMIC ANIMATION, MOTION DESIGN",
      bgColor: "bg-indigo-500",
      img: "/api/placeholder/48/48",
    },
    {
      title: "FRAMER, FIGMA, WORDPRESS, REACTJS",
      bgColor: "bg-lime-400",
      img: "/api/placeholder/48/48",
    },
  ];

  const recentProjects = [
    {
      name: "Shippix",
      type: "Shopify shipping rate management app",
      image: "S",
    },
    {
      name: "Voter",
      type: "Automated voting app for Sri Lankan reality shows",
      image: "V",
    },
    {
      name: "V2T",
      type: "Video-to-text transcription using Whisper",
      image: "W",
    },
  ];

  const experience = [
    // {
    //   company: "Elegant Media",
    //   period: "July 2024 - Present",
    //   role: "PHP Developer",
    // },
    {
      company: "Tache Lanka Pvt Ltd",
      period: "Present",
      role: "Full Stack Developer (TALL Stack)",
    },
    {
      company: "Freelance / Personal Projects",
      period: "Ongoing",
      role: "AI/ML Engineer, Web Developer",
    },
  ];

  // import profile_pic from "../assets/mobile.png";
  const premiumTools = [
    {
      name: "React",
      description: "Frontend Library",
      icon: "react.png",
    },
    {
      name: "Laravel",
      description: "Backend Framework",
      icon: "laravel.png",
    },
    {
      name: "Figma",
      description: "Design Tool",
      icon: "figma.png",
    },
    {
      name: "ChatGPT",
      description: "AI Assistant",
      icon: "chatgpt.png",
    },
    {
      name: "Photoshop",
      description: "Image Editor",
      icon: "photoshop.png",
    },
    {
      name: "Illustrator",
      description: "Vector Graphics",
      icon: "illustrator.png",
    },
  ];

  const designThoughts = [
    {
      title: "Why You Should Avoid Using FLOAT or DOUBLE for Money in SQL",
      description:
        "Using FLOAT or DOUBLE for money calculations in SQL can lead to rounding errors and inaccuracies. This article explains why you should use DECIMAL instead and how to prevent financial inconsistencies in your database.",
      date: "Feb 5, 2025",
      readTime: "4min read",
      link: "https://medium.com/@ayodhyaratnayake7001/why-you-should-avoid-using-float-or-double-for-money-in-sql-7615eae0d669",
    },
    // {
    //   title: "Navigating a Career in AI and Web Development",
    //   description:
    //     "The tech industry is evolving rapidly, and careers in AI and web development are at the forefront. This article explores strategies to grow in these fields, balancing cutting-edge technologies with practical experience.",
    //   date: "Feb 12, 2025",
    //   readTime: "7min read",
    // },
    // {
    //   title: "Building Scalable AI-Powered Web Applications",
    //   description:
    //     "Integrating AI into web applications is no longer just an option but a necessity. Learn how to design scalable, high-performance applications that leverage AI/ML to enhance user experience and functionality.",
    //   date: "Jan 25, 2025",
    //   readTime: "6min read",
    // },
    // {
    //   title: "Mastering UI/UX for AI-Driven Products",
    //   description:
    //     "A great user experience is key to making AI models useful. This article covers best practices in UI/UX design for AI-driven applications, ensuring users can interact seamlessly with intelligent systems.",
    //   date: "Jan 10, 2025",
    //   readTime: "5min read",
    // },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = 80; // Adjust this based on your navbar height
    if (element) {
      const offsetTop = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-white bg-indigo-900/10">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-6 motion-preset-slide-down-md bg-indigo-950/10 backdrop-blur-sm">
        <div className="flex gap-8 px-6 py-2 bg-indigo-500 bg-opacity-10 rounded-xl">
          <div
            className="relative group"
            onClick={() => scrollToSection("home")}
          >
            <Home className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <span className="absolute px-2 py-1 mt-2 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 bg-indigo-500 rounded opacity-0 bg-opacity-20 left-1/2 group-hover:opacity-100">
              Home
            </span>
          </div>
          <div
            className="relative group"
            onClick={() => scrollToSection("recent")}
          >
            <Folder className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <span className="absolute px-2 py-1 mt-2 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 bg-indigo-500 rounded opacity-0 bg-opacity-20 left-1/2 group-hover:opacity-100">
              Recent Projects
            </span>
          </div>
          <div
            className="relative group"
            onClick={() => scrollToSection("experience")}
          >
            <Gift className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <span className="absolute px-2 py-1 mt-2 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 bg-indigo-500 rounded opacity-0 bg-opacity-20 left-1/2 group-hover:opacity-100">
              Experience
            </span>
          </div>
          <div
            className="relative group"
            onClick={() => scrollToSection("tools")}
          >
            <Key className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <span className="absolute px-2 py-1 mt-2 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 bg-indigo-500 rounded opacity-0 bg-opacity-20 left-1/2 group-hover:opacity-100">
              Tools
            </span>
          </div>
          <div
            className="relative group"
            onClick={() => scrollToSection("design-thoughts")}
          >
            <Edit className="w-6 h-6 cursor-pointer hover:text-gray-400" />
            <span className="absolute px-2 py-1 mt-2 text-xs text-white transition-opacity duration-300 transform -translate-x-1/2 bg-indigo-500 rounded opacity-0 bg-opacity-20 left-1/2 group-hover:opacity-100">
              Design Thoughts
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl pt-20 mx-auto overflow-hidden overflow-y-auto text-white">
        <div className=" md:flex md:gap-8">
          {/* left side */}
          <div className="px-4 md:w-96 xl:w-[400px] md:p-8 motion-preset-slide-right-md ">
            <div className="md:sticky md:top-8">
              <div className="relative flex flex-col items-center p-6 overflow-hidden text-black bg-indigo-900/25 rounded-3xl">
                {/* <svg
                  className="absolute h-32 -mt-20 -ml-32 "
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 194 100"
                >
                  <path
                    d="M 0 34.544 L 3.22 33.201 C 4.186 35.732 5.256 38.221 6.429 40.663 L 3.329 42.293 C 2.113 39.757 1.002 37.172 0 34.544 Z M 7.294 49.71 L 10.246 47.806 C 11.613 50.127 13.073 52.392 14.622 54.596 L 11.828 56.748 C 10.223 54.464 8.711 52.116 7.294 49.71 Z M 16.894 63.37 L 19.509 60.989 C 21.22 63.047 23.012 65.037 24.881 66.953 L 22.454 69.543 C 20.522 67.557 18.667 65.498 16.894 63.369 Z M 28.47 75.232 L 30.69 72.449 C 32.693 74.197 34.764 75.864 36.9 77.447 L 34.895 80.41 C 32.688 78.767 30.544 77.04 28.47 75.232 Z M 41.7 85.029 L 43.471 81.912 C 45.712 83.304 48.011 84.603 50.36 85.804 L 48.836 89.061 C 46.403 87.816 44.022 86.471 41.7 85.029 Z M 56.27 92.473 L 57.53 89.093 C 59.958 90.083 62.428 90.966 64.934 91.737 L 63.955 95.216 C 61.354 94.415 58.79 93.5 56.27 92.473 Z M 71.836 97.256 L 72.519 93.701 C 73.429 93.891 74.342 94.067 75.251 94.225 C 76.906 94.514 78.569 94.754 80.238 94.947 L 79.861 98.552 C 77.167 98.245 74.489 97.813 71.836 97.256 Z M 87.974 99.1 L 88.046 95.474 C 90.656 95.532 93.266 95.474 95.871 95.301 L 96.088 98.921 C 93.387 99.099 90.68 99.159 87.974 99.101 Z M 103.652 94.44 C 106.238 94.042 108.805 93.535 111.348 92.92 L 112.127 96.454 C 109.493 97.088 106.834 97.613 104.157 98.027 L 103.652 94.439 Z M 118.899 90.762 C 121.391 89.934 123.848 89.006 126.265 87.979 L 127.572 91.337 C 125.07 92.402 122.526 93.364 119.946 94.22 Z M 133.4 84.59 C 135.738 83.362 138.023 82.036 140.251 80.618 L 142.053 83.717 C 139.745 85.184 137.379 86.556 134.959 87.829 L 133.4 84.589 Z M 146.773 76.083 C 148.89 74.477 150.937 72.782 152.91 71.002 L 155.175 73.749 C 153.128 75.594 151.004 77.351 148.808 79.016 Z M 158.611 65.4 C 160.436 63.446 162.174 61.412 163.821 59.306 L 166.505 61.601 C 164.795 63.791 162.988 65.904 161.092 67.935 Z M 168.516 52.75 C 170.003 50.493 171.409 48.184 172.731 45.826 L 175.721 47.665 C 174.354 50.096 172.904 52.479 171.372 54.81 Z M 176.507 38.612 C 177.694 36.166 178.817 33.682 179.881 31.164 L 183.049 32.633 C 181.963 35.204 180.81 37.745 179.592 40.256 Z M 182.922 23.537 C 183.887 20.966 184.809 18.379 185.688 15.777 L 188.956 16.991 C 188.056 19.634 187.126 22.262 186.148 24.862 Z M 188.238 7.924 C 189.062 5.288 189.858 2.645 190.641 -0.001 L 193.953 1.073 C 193.168 3.738 192.361 6.396 191.533 9.048 Z"
                    fill="rgb(63, 81, 181)"
                  ></path>
                </svg>
                <svg
                  className="absolute -rotate-32 w-80 -left-48 top-52"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 252 151"
                >
                  <path
                    d="M 17.624 28.023 L 20.979 27.929 C 20.979 27.929 17.122 25.883 17.624 28.023 L 18.844 34.706 C 18.328 32.497 17.921 30.267 17.624 28.023 Z M 20.914 42.19 L 24.157 41.607 C 24.876 43.727 25.69 45.817 26.597 47.871 L 23.442 48.683 C 22.503 46.554 21.659 44.387 20.914 42.19 Z M 26.879 55.805 L 29.923 54.773 C 31.016 56.764 32.219 58.76 33.501 60.703 L 30.584 61.944 C 29.266 59.944 28.03 57.896 26.879 55.805 Z M 35.268 68.595 L 38.039 67.153 C 39.501 69.024 41.036 70.842 42.642 72.603 L 40.03 74.239 C 38.371 72.413 36.782 70.531 35.268 68.595 Z M 45.828 80.248 L 48.26 78.433 C 50.034 80.104 51.873 81.712 53.774 83.253 L 51.54 85.241 C 49.574 83.647 47.654 81.967 45.828 80.249 Z M 58.329 90.448 L 60.344 88.294 C 62.391 89.716 64.494 91.063 66.649 92.332 L 64.874 94.639 C 62.637 93.321 60.453 91.923 58.329 90.448 Z M 72.505 98.848 L 74.022 96.402 C 74.831 96.799 75.646 97.185 76.461 97.558 C 77.947 98.238 79.453 98.881 80.969 99.492 L 79.727 102.061 C 77.277 101.079 74.868 100.007 72.506 98.848 Z M 88.014 105.106 L 88.974 102.435 C 91.412 103.21 93.878 103.899 96.369 104.503 L 95.681 107.248 C 93.099 106.622 90.542 105.907 88.014 105.106 Z M 104.731 106.276 C 107.231 106.703 109.792 107.049 112.336 107.308 L 112.198 110.148 C 109.56 109.878 106.934 109.522 104.322 109.079 Z M 120.811 107.924 C 123.342 108.01 125.901 108.01 128.417 107.926 L 128.818 110.784 C 126.213 110.872 123.562 110.871 120.943 110.783 Z M 136.778 107.315 C 139.276 107.06 141.769 106.715 144.192 106.291 L 145.123 109.095 C 142.614 109.532 140.031 109.891 137.445 110.155 Z M 152.232 104.528 C 154.61 103.932 156.972 103.244 159.249 102.48 L 160.701 105.153 C 158.306 105.953 155.877 106.661 153.421 107.274 Z M 166.731 99.566 C 168.91 98.636 171.044 97.616 173.127 96.507 L 175.083 98.962 C 172.919 100.115 170.702 101.176 168.438 102.142 Z M 179.827 92.482 C 181.767 91.234 183.657 89.915 185.491 88.528 L 187.847 90.731 C 185.953 92.16 184.003 93.521 182.002 94.812 Z M 191.411 83.671 C 193.125 82.192 194.794 80.665 196.414 79.093 L 199.029 81.071 C 197.37 82.68 195.661 84.243 193.905 85.757 Z M 201.678 73.665 C 203.215 72.032 204.718 70.372 206.188 68.684 L 208.959 70.501 C 207.467 72.211 205.941 73.895 204.383 75.552 Z M 210.997 62.917 C 212.416 61.194 213.819 59.459 215.206 57.712 L 218.053 59.438 C 216.658 61.195 215.245 62.941 213.816 64.675 Z"
                    fill="rgb(63, 81, 181)"
                  ></path>
                  <path
                    d="M 204.01 51.274 C 204.01 43.972 210.25 38.053 217.949 38.053 C 225.647 38.053 231.888 43.972 231.888 51.274 C 231.888 58.576 225.647 64.495 217.949 64.495 C 210.25 64.495 204.01 58.576 204.01 51.274 Z"
                    fill="rgb(63, 81, 181)"
                  ></path>
                  <path
                    d="M 214.46 49.155 C 214.434 50.375 214.624 51.486 215.789 52.281 C 215.727 51.923 215.651 51.569 215.607 51.21 C 215.405 49.569 215.563 47.99 216.663 46.586 C 217.282 45.793 218.085 45.181 219.077 44.671 C 218.994 44.926 218.906 45.124 218.867 45.33 C 218.695 46.229 219.026 47.008 219.72 47.636 C 220.23 48.097 220.818 48.494 221.404 48.882 C 222.446 49.574 223.299 50.393 223.744 51.496 C 224.804 54.128 223.67 57.009 220.698 58.238 C 217.916 59.387 214.327 58.156 213.204 55.586 C 212.263 53.431 212.508 51.348 214.109 49.454 C 214.176 49.375 214.252 49.302 214.328 49.229 C 214.346 49.209 214.377 49.199 214.46 49.155 Z M 215.674 56.191 C 216.438 57.132 218.399 57.803 220.214 57.171 C 222.084 56.52 223.155 54.755 222.759 52.977 C 222.451 51.599 221.086 50.427 219.9 50.272 C 220.647 51.154 220.96 52.123 220.771 53.21 C 220.595 54.231 219.558 55.568 218.832 55.667 C 219.195 54.967 219.402 54.25 219.214 53.469 C 218.623 54.978 217.471 55.899 215.674 56.191 Z"
                    fill="rgb(255,255,255)"
                  ></path>
                </svg> */}
                <div className="w-full mb-4 overflow-hidden bg-indigo-500 rounded-xl aspect-square">
                  <img
                    src={profile_pic}
                    alt="Ayodhya Ratnayake"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="mb-2 text-3xl font-bold text-center text-white">
                  Ayodhya Ratnayake
                </h2>
                <p className="mt-4 mb-6 font-semibold text-center text-white text-md">
                  A Software Engineer who has developed countless innovative
                  solutions.
                </p>
                <div className="flex gap-4 text-gray-400">
                  <Globe
                    size={20}
                    className="cursor-pointer hover:text-gray-600"
                  />
                  <Twitter
                    size={20}
                    className="cursor-pointer hover:text-gray-600"
                  />
                  <Instagram
                    size={20}
                    className="cursor-pointer hover:text-gray-600"
                  />
                  <Mail
                    size={20}
                    className="cursor-pointer hover:text-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* h-[calc(100vh-80px)] */}
          <div className="motion-preset-slide-left-md flex-1 p-4 md:p-8 md:overflow-y-auto no-scrollbar h-[calc(100vh-80px)]">
            {/* Home */}
            <div id="home" className="mb-12 ">
              <div className="">
                <h1 className="mt-8 -mb-1 text-4xl font-bold text-center md:text-5xl sm:-mt-1 md:text-left">
                  SOFTWARE
                </h1>
                {/* <div className="text-sm sm:text-lg">Small text on mobile, large text on larger screens</div> */}

                <h2 className="mb-6 text-4xl font-bold text-center text-gray-600 md:text-5xl md:text-left">
                  ENGINEER
                </h2>
              </div>
              <p className="mb-8 font-semibold text-center text-gray-400 md:text-left">
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 ">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="mb-1 text-4xl font-bold text-center md:text-5xl">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-center text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={`${skill.bgColor} rounded-2xl p-6 text-black relative`}
                  >
                    <div className="text-lg font-semibold">{skill.title}</div>
                    <div className="absolute bottom-4 right-4">
                      <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="relative p-6 overflow-hidden text-white bg-indigo-500 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mt-4 size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>

                  <div className="mt-4 mb-4">
                    <div className="text-2xl font-semibold">FULL STACK WEB</div>
                    <div className="text-2xl font-semibold">DEVELOPER</div>
                  </div>
                  <div className="absolute p-1 border border-white rounded bottom-4 right-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="relative p-6 overflow-hidden text-black bg-lime-400 rounded-2xl">
                  <div className="absolute top-0 left-0 ">
                    {/* <img
                    src={art}
                    alt="Art 01"
                    className="object-cover w-full h-full opacity-20"
                  /> */}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                  <div className="mt-4 mb-4">
                    <div className="text-2xl font-semibold">
                      AI/ML ENGINEER,
                    </div>
                    <div className="text-2xl font-semibold">DATA SCIENCE </div>
                  </div>
                  <div className="absolute p-1 border border-black rounded bottom-4 right-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* <div className="relative p-6 text-white bg-lime-400 rounded-2xl">
                  <div className="text-lg font-semibold">
                    FRAMER, FIGMA, WORDPRESS, REACTJS
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Recent Projects */}
            <div id="recent" className="mb-12 ">
              <h3 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl md:text-left">
                RECENT <span className="block text-gray-600">PROJECTS</span>
              </h3>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 text-gray-400"
                  >
                    <div className="flex items-center justify-center bg-gray-800 w-14 h-14 rounded-xl">
                      {/* <img
                        src={`/src/assets/${project.icon}`}
                        alt={project.name}
                        className="w-12 h-12 rounded-xl"
                      /> */}
                      <h1 className="text-4xl font-extrabold text-indigo-500 uppercase">
                        {project.image}
                      </h1>
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {project.name}
                      </div>
                      <div className="text-sm">{project.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div id="experience" className="mb-12 ">
              <h3 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl md:text-left">
                3+ YEARS OF{" "}
                <span className="block text-gray-600">EXPERIENCE</span>
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="text-gray-400">
                    <h4 className="mb-1 font-semibold text-white">
                      {exp.company}
                    </h4>
                    <div className="mb-2 text-sm">{exp.period}</div>
                    <p className="text-sm">{exp.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div id="tools" className="mb-12 ">
              <h3 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl md:text-left">
                PREMIUM <span className="block text-gray-600">TOOLS</span>
              </h3>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {premiumTools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 transition-colors rounded-xl hover:bg-gray-900"
                  >
                    <img
                      src={`/ayodhya.io/assets/${tool.icon}`}
                      alt={tool.name}
                      className="w-12 h-12 rounded-xl"
                    />
                    <div>
                      <h4 className="font-semibold">{tool.name}</h4>
                      <p className="text-sm text-gray-400">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Thoughts */}
            <div id="design-thoughts" className="pb-12 mb-12">
              <h3 className="mb-6 text-4xl font-bold text-center text-white md:text-5xl md:text-left">
                DESIGN <span className="block text-gray-600">THOUGHTS</span>
              </h3>

              <div className="space-y-8">
                {designThoughts.map((post, index) => (
                  <div key={index} className="cursor-pointer group">
                    <a href={post.link} target="_blank" rel="noreferrer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold group-hover:text-gray-300">
                          {post.title}
                        </h4>
                        <Edit className="w-4 h-4 text-gray-600" />
                      </div>
                      <p className="mb-2 text-sm text-gray-400">
                        {post.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-600">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" footer">
        <div className="py-4 text-center text-gray-400 ">
          &copy; 2025 Ayodhya Ratnayake. All rights reserved.
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
