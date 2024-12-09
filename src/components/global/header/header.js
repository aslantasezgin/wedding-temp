import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./header.css";
import {
  Facebook,
  Instagram,
  Linkedin,
  TwitterX,
  Whatsapp,
} from "react-bootstrap-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="container-flex">
        <div className="header-links">
          <div className="logo-box">
            <Image
              width={384}
              height={99}
              alt="logo"
              src={
                "/logo-b.png"
              }
            ></Image>
          </div>

          <ul className="header-links">
            <li>
              <Link href={"/"}>ANASAYFA</Link>{" "}
            </li>
            <li>
              <Link href={"/hakkimizda"}>HAKKIMIZDA</Link>{" "}
            </li>
            <li>
              <Link href={"/hizmetlerimiz"}>HİZMETLERİMİZ</Link>{" "}
            </li>
            <li>
              <Link href={"/galeri"}>GALERİ</Link>{" "}
            </li>
            <li>
              <Link href={"/blog"}>BLOG</Link>{" "}
            </li>
            <li>
              <Link href={"#"}>İLETİŞİM</Link>{" "}
            </li>
          </ul>
        </div>

        <div className="header-social">
          <ul>
            <li>
              <Link href="#">
                {" "}
                <Facebook />{" "}
              </Link>
            </li>
            <li>
              <Link href="#">
                {" "}
                <TwitterX />{" "}
              </Link>
            </li>
            <li>
              <Link href="#">
                {" "}
                <Linkedin />{" "}
              </Link>
            </li>
            <li>
              <Link href="#">
                {" "}
                <Instagram />{" "}
              </Link>
            </li>

            <li>
              <Link href="#">
                {" "}
                <Whatsapp />{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
