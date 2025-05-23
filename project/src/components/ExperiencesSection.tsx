import React from 'react';

type ExperiencesSectionProps = {
  darkMode: boolean;
};

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  techUsed: string[];
}

const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ darkMode }) => {
  const experiences: Experience[] = [
    {
      role: 'Graduate Assistant',
      company: 'California State University, Los Angeles',
      duration: 'Jan 2025 – Present',
      description:
        'Designed and deployed an experimental AWS server to optimize metadata processing for an Entity Recognition Model. Contributed to preprocessing a 50,000+ text dataset from the Gutenberg Project.',
      techUsed: ['AWS', 'Python', 'NLP', 'Entity Recognition'],
    },
    {
      role: 'MERN Stack Developer',
      company: 'Webstack Academy (Remote)',
      duration: 'Aug 2023 – Oct 2023',
      description:
        'Built and deployed full-stack apps using the MERN stack. Created interactive UI with React and improved load times by 30%, enhancing user engagement by 20%.',
      techUsed: ['MongoDB', 'Express', 'React', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    }
    // Add more experiences as needed
  ];

  return (
    <section
      id="experiences"
      className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Professional Experience
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            My journey through hands-on roles, collaborating with academic and industrial teams to build impactful solutions.
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out ${
                darkMode ? 'bg-gray-800 bg-opacity-60 backdrop-blur-md' : 'bg-gray-100'
              }`}
            >
              <div className="mb-4">
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exp.role} @ {exp.company}
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.duration}</p>
              </div>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.techUsed.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      darkMode
                        ? 'bg-blue-600 bg-opacity-20 text-blue-300'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
