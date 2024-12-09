"use client"
import Banner from "@/components/global/banner/banner";
import Link from "next/link";
import servicesData from "../services.json";
import { useParams } from "next/navigation";
import "./page.css"

const ServiceDetail = () => {
  const usedParams = useParams(); 
  const { id } = usedParams;

  console.log(usedParams)
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <div>Hizmet bulunamadı!</div>;
  }

  return (
    <div>
      <Banner title={service.title}></Banner>
      <div className="mid-container">
        <div className="about-content">
          <div className="about-img">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="about-text">
            <h4>{service.title}</h4>
            {service.description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
            <Link href={service.contactLink}>İLETİŞİM</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
