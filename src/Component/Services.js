import React from "react";
import Title from "./Titulo";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our " subtitle="service" />
      <div className="section-center services-center">
        {services.map((service) => {
          // const { id, icon, title, text } = service;
          return (
            <Service key={service.id} {...service} />

            // <article className="service" key={id}>
            //   <span className="service-icon">
            //     <i className={icon}></i>
            //   </span>
            //   <div className="service-info">
            //     <h4 className="service-title">{title}</h4>
            //     <p className="service-text">{text}</p>
            //   </div>
            // </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
