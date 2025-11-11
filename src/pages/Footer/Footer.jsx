import { Facebook, Mail } from "lucide-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { TbBrandFacebook, TbBrandInstagram } from "react-icons/tb";

function Footer() {
  return (
    <footer className="bg-[#04081A] text-[#8F95AA] text-base py-[50px] px-[15px] border-t border-t-[#8F95AA]  flex flex-col text-center items-center">

      <p>Copyright &copy; 2025 Aderogba Samuel</p>
      <ul className="flex gap-[10px] mt-[10px]">
        <li>
          <Mail color="#8F95AA" size={20}/>
        </li>
        <li>
          <BsFacebook color="#8F95AA" size={20}/>
        </li>
        <li>
          <BsInstagram color="#8F95AA" size={20}/>
        </li>
        <li>
          <BsTwitterX color="#8F95AA" size={20}/>
        </li>
        <li>
          <BsGithub color="#8F95AA" size={20}/>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
