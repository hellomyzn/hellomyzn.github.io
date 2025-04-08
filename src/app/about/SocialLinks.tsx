import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiQiita } from "react-icons/si";

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

// 個々のリンクをレンダリングするコンポーネント
const SocialLink = ({ href, icon: Icon }: SocialLinkProps) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Icon className="w-6 h-6 cursor-pointer" />
  </a>
);

// 複数のソーシャルリンクをまとめるコンポーネント
const SocialLinks = () => {
  const links = [
    { href: "https://github.com/hellomyzn/", icon: FaGithub },
    { href: "https://www.instagram.com/hellomyzn/", icon: FaInstagram },
    { href: "https://www.facebook.com/hellomyzn", icon: FaFacebook },
    { href: "https://www.linkedin.com/in/hellomyzn/", icon: FaLinkedin },
    { href: "https://x.com/hellohanaki", icon: FaTwitter },
    { href: "https://qiita.com/hellomyzn", icon: SiQiita },
  ];

  return (
    <>
      {links.map((link, index) => (
        <SocialLink key={index} href={link.href} icon={link.icon} />
      ))}
    </>
  );
};

export default SocialLinks;
