import { services } from "./constants/values";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";


const ServicesGrid = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Our Services"
          title="Solutions Designed For Digital Growth"
          description="Enterprise-grade services focused on scalability and performance."
        />

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;