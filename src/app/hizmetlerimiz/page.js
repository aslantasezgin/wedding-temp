import Banner from "@/components/global/banner/banner";
import React from "react";
import "./page.css"
import Link from "next/link";
import servicesData from "./services.json"
const Page = () => {


  
  return (
    <div>
      <Banner title={"HİZMETLERİMİZ"}></Banner>
      <section className="services">
  <div className="services-container">
    {servicesData.map((service) => (
      <div className="service-item" key={service.id}>
        <Link href={`/hizmetlerimiz/${service.id}`}>
          <img src={service.image} alt={service.title} />
          <h4>{service.title}</h4>
        </Link>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Page;
