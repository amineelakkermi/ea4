import React from 'react';
import Image from 'next/image';
import type { ServiceCardData } from '@/constants/data';

type Props = {
  service: ServiceCardData;
  index?: number;
};

const ServicesCard: React.FC<Props> = ({ service, index = 0 }) => {
  const isHighlighted = index === 1; // style différent pour la 2e carte
  return (
    <article
      className={`${
        isHighlighted ? 'bg-[#B4E50D] rotate-3' : 'bg-beige hover:rotate-3'
      } mt-5 border-2 border-[#000] flex flex-col items-center text-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500`}
    >
      <Image
        src={service.img}
        alt={service.title}
        width={80}
        height={80}
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.texte}</p>
    </article>
  );
};

export default ServicesCard;
