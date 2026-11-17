import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sections({ sectionicon, sectionname }) {
  return (
    <a
      href={`#${sectionname}`}
      className="ml-3 hover-navigation py-2 place-items-center rounded-md transition-all duration-200 hover:bg-gray-100/75"
    >
      <FontAwesomeIcon icon={sectionicon} className="mr-3" />
      {sectionname}
    </a>
  );
}
