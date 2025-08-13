import './App.css'

function App() {
const fullName = "Farzonakhon Izatullaeva";
const university = "The Ohio State University";
const major = "Computer Science Engineering with AI specialization";
const resume = "/resume.pdf";
const linkedInLink = "https://www.linkedin.com/in/farzonakhon-izatullaeva-19469a248/";
const headshot = "/headshot.jpeg";
const githubLink = "https://github.com/FarzonaIzatullaeva";
const githubLogo = "/githubIcon.png";
const linkedInLogo = "/linkedinIcon.png";
const resumeIcon = "/resumeIcon.png";

const skills = [
  {name: "HTML", logo: "/skillLogos/html.png"},
  {name: "CSS", logo: "/skillLogos/css.png"},
  {name: "JavaScript", logo: "/skillLogos/js.png"},
  {name: "TypeScript", logo: "/skillLogos/typescript.png"},
  {name: "Tailwind", logo: "/skillLogos/tailwind.png"},
  {name: "React", logo: "/skillLogos/react.png"},
  {name: "Python", logo: "/skillLogos/python.png"},
  {name: "Node.js", logo: "/skillLogos/nodejs.png"},
  {name: "MATLAB", logo: "/skillLogos/matlab.png"},
  {name: "Java", logo: "/skillLogos/java.png"},
  {name: "C++", logo: "/skillLogos/cplusplus.png"},
];

const projects = [
  {title: "Project 1", description: "Decription of project 1", tags:["React", "API"], repo: "link to github repo", demo: "", image: "/projects/project1.png",},
  {title: "Project 2", description: "Decription of project 2", tags:["React", "API"], repo: "link to github repo", demo: "", image: "/projects/project2.png",},
  {title: "Project 3", description: "Decription of project 3", tags:["React", "API"], repo: "link to github repo", demo: "", image: "/projects/project3.png",}
];


  return (
    <>
      <div className='max-w-5xl mx-auto px-6 py-10 space-y-16'>
        <div>
          <img src={headshot} alt={`${fullName} headshot`} className='w-50 h-50 rounded-full object-cover border-4 border-brand-500'/>
          <h1 className='text-3xl font-bold'>Hello, I am {fullName}</h1>
        <h2 className='text-lg text-gray-600'>{`${university}'28`}</h2>
        <h3 className='text-gray-500'>Major: {major}</h3>
        <p className='max-w-xl mx-auto text-gray-700'>I'm a driven computer science student passionate about AI, software engineering, and creating impactful tech solutions.</p>
      </div>

        <div className='flex justify-center gap-4 flex-wrap mt-4'>
          <a href={resume} download className='inline-flex items-center gap-2 px-4 py-4 rounded-lg font-medium transition duration-150 bg-blue-500 text-white hover:bg-blue-700'>Download Resume</a>
          <img src={linkedInLogo} alt="" />
          <a href={linkedInLink} target='_blank' className='inline-flex items-center gap-2 px-4 py-4 rounded-lg font-medium hover:text-pink-500 transition duration-150'>LinkedIn</a>
          <img src={githubLogo} alt="" />
          <a href={githubLink} target='_blank' className='inline-flex items-center gap-2 px-4 py-4 rounded-lg font-medium hover:text-pink-500 transition duration-150'>GitHub</a>
        </div>

        <h2>Skills</h2>
        <div className="skillsGrid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill">
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <h2>Projects</h2>
        <div className="projectsGrid">
          {projects.map((p)=>(
            <article key={p.title}>
            {p.image ? (<img src={p.image} alt={`${p.title} preview`}></img>) : null}
            <div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div>
                {p.repo && (
                  <a href={p.repo} target='_blank'>Github</a>
                )}

                {p.demo &&(
                  <a href={p.demo} target='_blank'>Live Demo</a>
                )}
              </div>
            </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
