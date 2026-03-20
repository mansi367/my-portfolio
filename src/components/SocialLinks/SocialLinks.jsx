import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
  return (
    <div className="social-icons">
      
      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/YOUR_USERNAME" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/YOUR_USERNAME" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      {/* Email */}
      <a href="mailto:yourmail@gmail.com">
        <MdEmail />
      </a>

    </div>
  );
};

export default SocialLinks;