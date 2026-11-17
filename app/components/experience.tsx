import Image from "next/image";
export default function Experience({
  imgsource,
  companyname,
  jobtitle,
  expdesc,
}) {
  return (
    <div className="flex ml-6 h-full mt-6">
      <div className="first-experience-logo">
        <Image
          className="mr-15 rounded-lg drop-shadow-lg"
          src={imgsource}
          width={40}
          height={40}
          alt={`${companyname} company logo`}
          unoptimized
        />
      </div>
      <div>
        <div className="bold-title">{jobtitle}</div>
        <p className="description mb-6">{expdesc}</p>
      </div>
    </div>
  );
}
