'use client';

import { useParams } from 'next/navigation';
import ServiceDetailHero from './ServiceDetailHero';
import ServiceDetailContent from './ServiceDetailContent';
import ServiceDetailProcess from './ServiceDetailProcess';
import Testimonials from '../../sections/Testimonials';
import Contact from '../../sections/Contact';

export default function ServiceDetailPage() {
  const params = useParams();
  const service = params.service as string;

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailProcess service={service} />
      <Testimonials />
      <Contact />
    </>
  );
}
