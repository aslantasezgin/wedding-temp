import Link from "next/link";
import React from "react";
import "./footer.css";
import { Facebook, Instagram, Linkedin, Twitter, Skype, Whatsapp } from "react-bootstrap-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
  
        <div className="foot-logo">
        <Image
              width={380}
              height={125}
              alt="logo"
              src={
                "/logo-b.png"
              }
            ></Image>
        </div>

        {/* Navigation Links */}
        <div className="foot-links">
          <ul>
            <li>
              <Link href={"#"}>ANASAYFA</Link>
            </li>
            <li>
              <Link href={"#"}>HAKKIMIZDA</Link>
            </li>
            <li>
              <Link href={"#"}>HİZMETLERİMİZ</Link>
            </li>
            <li>
              <Link href={"#"}>GALERİ</Link>
            </li>
            <li>
              <Link href={"#"}>BLOG</Link>
            </li>
            <li>
              <Link href={"#"}>İLETİŞİM</Link>
            </li>

          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="foot-social">
          <ul>
            <li>
              <Link href="#">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Whatsapp />
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Copyright */}
        <div className="foot-author">
          © Copyright 2024 | Salon Bağdat | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
