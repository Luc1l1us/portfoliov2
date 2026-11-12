import Image from "next/image";
import { TechBadge } from "./techbadge";

export default function Projects({
  imgsource,
  link,
  projname,
  projdesc,
  techbadges,
}) {
  return (
    <div className="flex mt-5">
      <div className="first-project-logo">
        <Image
          className="mr-15 rounded-lg drop-shadow-lg "
          src={imgsource}
          width={40}
          height={40}
          alt={`${projname} project logo`}
          unoptimized
        />
      </div>
      <div>
        <div className="flex flex-row justify-between">
          <a href={link} className="hover:text-gray-400">
            <div className="bold-title">{projname}</div>
          </a>
        </div>
        <p className="description">{projdesc}</p>
        <div className="flex flex-wrap gap-2">
          {techbadges.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
