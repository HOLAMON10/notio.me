import TypingText from "./Typing";
import { ExternalLink } from "lucide-react";


const Projects = () => {
  const projects = [
    { name: "AICONVI - Voice Bots", year: "2025", url:"https://aiconvi.com/" },
    { name: "TaxRezo - Tax Relief Services", year: "2025",url:"https://landing.taxrezo.com" },
    { name: "Lapa Verde School - Spanish School", year: "2025", url:"https://lapaverdeschool.com/" },
   
  ];

  const experience = [
    { name: "VIDA Software & Media", year: "2022 - present", url:"https://vidasoftmedia.com/" },    
  ];

  const renderList = (items) => (
  <div className="space-y-1">
    {items.map((item, idx) => (
      <div
        key={idx}
        className="flex justify-between items-center text-sm text-gray-800 py-4"
      >
        <div key={item.url} className="mb-2">
            <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                text-gray-600
                gap-1
                    font-semibold
                    relative
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:w-0
                    after:h-0.5
                    after:bg-current
                    after:transition-all
                    after:duration-300
                    md:hover:after:w-full
                "
                >
                <TypingText text={item.name} />
                <ExternalLink className="w-4 h-4" />
            </a>
        </div>
        <div className="flex-1 border-b border-dotted mx-2 border-gray-400"></div>
        <span><TypingText           
            text={item.year}
            speed={100}
            startDelay={100}        
          /></span>
      </div>
    ))}
  </div>
);
  return (
    <div className="flex justify-center bg-white px-4 sm:py-36 py-24 min-h-screen">
      <div className="w-full max-w-2xl space-y-10">
        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            Projects
          </h2>
          {renderList(projects)}
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            Experience
          </h2>
          {renderList(experience)}
        </section>
      </div>
    </div>
  );
};

export default Projects;
