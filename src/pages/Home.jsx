import React from 'react';
import { Mail, Instagram, Twitter, Globe } from 'lucide-react';

const Home = () => {
  const stats = [
    { value: '+12', label: 'YEARS OF EXPERIENCE' },
    { value: '+46', label: 'PROJECTS COMPLETED' },
    { value: '+20', label: 'WORLDWIDE CLIENTS' }
  ];

  const skills = [
    { 
      title: 'DYNAMIC ANIMATION, MOTION DESIGN',
      bgColor: 'bg-orange-500'
    },
    {
      title: 'FRAMER, FIGMA, WORDPRESS, REACTJS',
      bgColor: 'bg-lime-400'
    }
  ];

  const recentProjects = [
    { name: 'Neprix.AI', type: 'SaaS Product Template' },
    { name: 'Neshira', type: 'Portfolio Template' },
    { name: 'Ruya', type: 'Portfolio Template' }
  ];

  const experience = [
    {
      company: 'PixelForge Studios',
      period: 'Jul 2021 - Present',
      role: 'Led the design team in creating user-centric digital experiences and implementing cutting-edge UI/UX solutions.'
    },
    {
      company: 'BlueWave Innovators',
      period: 'Apr 2017 - Jun 2021',
      role: 'Developed and implemented design strategies for enterprise-level applications.'
    },
    {
      company: 'TrendCraft Solutions',
      period: 'Mar 2015 - May 2017',
      role: 'Designed and implemented design systems for emerging mobility and transportation solutions.'
    }
  ];

  return (
    <div className="min-h-screen text-white bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="md:flex md:gap-8">
          {/* Sticky Profile Card */}
          <div className="p-4 md:w-72 md:p-8">
            <div className="md:sticky md:top-8">
              <div className="p-6 text-black bg-white rounded-3xl">
                <div className="w-full mb-4 overflow-hidden bg-orange-500 rounded-xl aspect-square">
                  <div className="w-full h-full bg-gradient-to-t from-black/50" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Ayodhya Ratnayake</h2>
                <p className="mb-6 text-sm text-gray-600">
                  A Software Engineer who has developed countless innovative solutions.
                </p>
                <div className="flex gap-4 text-gray-400">
                  <Globe size={20} className="cursor-pointer hover:text-gray-600" />
                  <Twitter size={20} className="cursor-pointer hover:text-gray-600" />
                  <Instagram size={20} className="cursor-pointer hover:text-gray-600" />
                  <Mail size={20} className="cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 p-4 md:p-8 md:max-h-screen md:overflow-y-auto no-scrollbar">
            {/* Main Info */}
            <div className="mb-12">
              <h1 className="mb-2 text-4xl font-bold md:text-5xl">SOFTWARE</h1>
              <h2 className="mb-6 text-4xl font-bold text-gray-600 md:text-5xl">ENGINEER</h2>
              <p className="mb-8 text-gray-400">
                Passionate about creating intuitive and engaging user experiences. 
                Specialize in transforming ideas into beautifully crafted products.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="mb-1 text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects Section */}
            <div className="mb-12">
              <h3 className="mb-6 text-2xl font-bold">RECENT <span className="text-gray-600">PROJECTS</span></h3>
              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div key={index} className="flex items-center gap-4 text-gray-400">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl" />
                    <div>
                      <div className="font-semibold text-white">{project.name}</div>
                      <div className="text-sm">{project.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h3 className="mb-6 text-2xl font-bold">12 YEARS OF <span className="text-gray-600">EXPERIENCE</span></h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="text-gray-400">
                    <h4 className="mb-1 font-semibold text-white">{exp.company}</h4>
                    <div className="mb-2 text-sm">{exp.period}</div>
                    <p className="text-sm">{exp.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;