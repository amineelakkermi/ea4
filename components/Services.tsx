import React from 'react';
import styles from '@/styles/style';
import ServicesCard from './ServicesCard';
import { servicesCardData, type ServiceCardData } from '@/constants/data';

const Services: React.FC = () => {
  return (
    <section
      id='services'
      className={`${styles.paddingX} min-h-screen w-full flex flex-col gap-10 justify-center items-center`}
    >
      <h1 className={styles.title}>I Specialize in ⚡ Rank of Skills</h1>

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesCardData.map((service: ServiceCardData, index: number) => (
          <ServicesCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
