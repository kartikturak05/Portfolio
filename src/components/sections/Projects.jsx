import React from 'react';

const projectData = [
  {
    id: 1,
    title: "Blogging Platform",
    description: "A Medium-like blogging website where users can securely sign up, log in, and manage their accounts.Writers can create, edit, and publish blogs using a rich text editor.Readers can explore, search, and engage with posts in a responsive modern UI.",
    skills: ["React","TypeScript", "Node.js", "Hono",,"Cloudflare" ,"PostgreSQL","Prisma", "Tailwind CSS"],
    liveDemo: "https://medium-blog-bay.vercel.app/",
    github: "https://github.com/kartikturak05/Postify",
    thumbnail: "Postify.png"
  },
  {
    id: 2,
    title: "Paytm Clone",
    description: "A Paytm-like digital wallet application where users can securely sign up, log in, and manage their wallet.Supports adding money from bank, transferring to friends, and peer-to-peer payments.Includes a transaction history dashboard to track all payments in real time.",
    skills: ["MongoDB", "Next.js", "Tailwind CSS", "Node.js"],
    liveDemo: "https://paytm-clone.vercel.app",
    github: "https://github.com/kartikturak05/Paytm",
    thumbnail: "Paytm.png"
  },
  {
    id: 3,
    title: "Bookstore App",
    description: "A full-stack bookstore app with add-to-cart, checkout, and admin management features.",
    skills: ["React", "Express", "Node", "PostgreSQL", "MongoDB"],
    liveDemo: "https://bookstore.vercel.app",
    github: "https://github.com/kartikturak05/BookStore",
    thumbnail: "BooStore.png"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      {/* Project Image */}
      <div className="relative h-58 sm:h-74 bg-gray-800 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-center hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiM2Qjc0ODgiLz4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UHJvamVjdCBJbWFnZTwvdGV4dD4KPC9zdmc+';
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-8">
        <h3 className="text-4xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-4 leading-relaxed text-xl">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-transparent border-1 border-gray-100 bg-blue-700 text-blue-200 text-md rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors duration-200 font-medium"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-center transition-colors duration-200 font-medium border border-gray-600"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12"> 
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Explore my latest work and projects that showcase my skills in full-stack development, 
            cloud technologies, and modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together or want to see more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/kartikturak05"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium border border-gray-600"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;