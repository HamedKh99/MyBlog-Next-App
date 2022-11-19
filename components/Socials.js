import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  const socialNetworks = [
    {
      name: "github",
      icon: faGithub,
      color: "bg-black",
      hoverColor: "hover:bg-black/80",
    },
    {
      name: "linkedin",
      icon: faLinkedin,
      color: "bg-sky-600",
      hoverColor: "hover:bg-sky-600/80",
    },
    {
      name: "instagram",
      icon: faInstagram,
      color: "bg-[#bc2a8d]",
      hoverColor: "hover:bg-[#bc2a8d]/80",
    },
    {
      name: "twitter",
      icon: faTwitter,
      color: "bg-sky-400",
      hoverColor: "hover:bg-sky-400/80",
    },
  ];

  return (
    <div className="flex flex-row">
      {socialNetworks.map((social) => (
        <button
          key={social.name}
          type="button"
          className={`text-white w-10 h-10 rounded-full mx-1 ${social.color} ${social.hoverColor}`}
        >
          <FontAwesomeIcon size="lg" icon={social.icon} />
        </button>
      ))}
    </div>
  );
}
