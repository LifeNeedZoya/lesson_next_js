import React from "react";
import Link from "next/link";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import CopyrightLogo from "./copyrightLogo";
const Footer = () => {
  const footerDatas = ["Home", "Blog", "Contact"];
  return (
    <footer className="bg-slate-500 container mx-auto  ">
      <div className="flex ml-3">
        <section className="flex-[0.3] ">
          <h3 className="mb-3">About</h3>
          <p className="mb-3">
            About Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
            elit, sed do <br /> eiusmod tempor incididunt ut labore <br /> et
            dolore magna aliqua. Ut enim ad <br />
            minim veniam
          </p>
          <h6 className="mb-3"> Email : info@jstemplate.net </h6>
          <h6 className="mb-3">Phone : 880 123 456 789</h6>
        </section>
        <section className="flex-[0.3] flex-row">
          <h5>
            <Link href="/">Home</Link>
          </h5>
          <h5>
            <Link href="/Blog">Blog</Link>
          </h5>
          <h5>
            <Link href="/" footer>
              Contact
            </Link>
          </h5>
        </section>
        <section className="flex-[0.3] flex gap-4">
          <Link href="https://www.facebook.com/">
            <BsFacebook />
          </Link>
          <Link href="https://www.twitter.com/">
            <BsTwitter />
          </Link>
          <Link href="https://www.instagram.com/">
            <AiFillInstagram />
          </Link>
          <Link href="https://www.linkedin.com/">
            <AiFillLinkedin />
          </Link>
        </section>
      </div>
      <div className="flex justify-around">
        <CopyrightLogo />
        <div className="flex gap-5 align-middle">
          <h6>Terms of Use </h6>
          <h6>Privacy Policy </h6>
          <h6>Cookie Policy</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
