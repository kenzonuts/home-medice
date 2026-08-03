import { Section, SectionProps } from '@/components/layout/section';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconWrapper } from '@/components/ui/icon-wrapper';

interface Doctor {
  id: string;
  name: string;
  position: string;
  bio: string;
  expertise: string[];
  experience: string;
  image: string;
  schedule: string;
}

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Ahmad',
    position: 'Senior Cardiologist',
    bio: 'Experienced cardiologist with over 15 years of practice.',
    expertise: ['Cardiology', 'Interventional Cardiology'],
    experience: '15 years',
    image: '/images/doctor-placeholder.jpg',
    schedule: 'Mon-Fri 08:00-17:00',
  },
  {
    id: '2',
    name: 'Dr. Siti',
    position: 'Pediatrician',
    bio: 'Dedicated pediatrician providing compassionate care for children.',
    expertise: ['Pediatrics', 'Immunology'],
    experience: '12 years',
    image: '/images/doctor-placeholder.jpg',
    schedule: 'Mon-Sat 09:00-18:00',
  },
  {
    id: '3',
    name: 'Dr. Budi',
    position: 'General Practitioner',
    bio: 'Holistic approach to adult health with extensive experience.',
    expertise: ['General Medicine', 'Preventive Care'],
    experience: '10 years',
    image: '/images/doctor-placeholder.jpg',
    schedule: 'Tue-Thu 08:30-17:30',
  },
];

export default function MedicalTeamPage() {
  return (
    <Section>
      <Container>
        {/* Page Header */}
        <div className="py-12">
          <h1 className="text-3xl font-bold text-gray-800">Medical Team</h1>
          <p className="text-gray-600 mb-4">Meet our expert medical team</p>
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
            <ol className="flex space-x-2">
              <li>Home</li>
              <li className="mr-1">Medical Team</li>
            </ol>
          </nav>
        </div>

        {/* Introduction Section */}
        <Section>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Welcome to Our Medical Team</h2>
                <p className="text-gray-700 mb-6">
                  At Rumah Sunat Modern Jati, our team of dedicated healthcare professionals is committed to providing
                  compassionate, high-quality care for every patient.
                </p>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">🩺</span>
                </div>
              </div>
              <div className="self-start">
                <Image
                  src="/images/healthcare-illustration.png"
                  alt="Healthcare illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Doctor */}
        <Section>
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.img
                  src="/images/doctor-placeholder.jpg"
                  alt="Featured doctor"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Dr. Ahmad
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    Senior Cardiologist
                  </p>
                  <p className="text-gray-700 mb-6">
                    With 15 years of experience, Dr. Ahmad specializes in interventional cardiology and
                    complex heart procedures.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Cardiology', 'Interventional Cardiology'].map((specialty) => (
                      <span
                        key={specialty}
                        className="text-sm bg-blue-100 text-blue-800 rounded-full px-2 py-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Years of Experience:</strong> {doctors[0].experience}
                  </p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Medical Team Grid */}
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8">Our Medical Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-6">
              {doctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 100 } }}
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{doctor.position}</p>
                    <p className="text-gray-700 mb-4">{doctor.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doctor.expertise.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-sm bg-gray-100 text-gray-700 rounded-full px-2 py-1"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-2"><strong>Schedule:</strong> {doctor.schedule}</p>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                      Book Appointment
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Qualifications & Certifications */}
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8">Qualifications & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6">
              {[
                {
                  title: 'Education',
                  description: 'Graduated from top medical school with honors.',
                  icon: 'graduation-cap',
                },
                {
                  title: 'Certifications',
                  description: 'Board certified in multiple specialties.',
                  icon: 'certificate',
                },
                {
                  title: 'Professional Membership',
                  description: 'Member of national medical associations.',
                  icon: 'user-doctor',
                },
                {
                  title: 'Medical Training',
                  description: 'Extensive training in advanced life support.',
                  icon: 'training',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                  whileHover={{ y: -5, opacity: 1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <IconWrapper className="w-8 h-8 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-blue-600"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 3v1v6h-2V8H8v6h6v1h2V4h-6zm5 10H5v6h14v-6z" />
                    </svg>
                  </IconWrapper>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              }))
            </div>
          </div>
        </Section>

        {/* Areas of Expertise */}
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6">
              {[
                {
                  title: 'Sunat Bayi',
                  description: 'Comprehensive care for newborns and infants.',
                  icon: 'baby',
                },
                {
                  title: 'Sunat Anak',
                  description: 'Pediatric health services.',
                  icon: 'child',
                },
                {
                  title: 'Sunat Dewasa',
                  description: 'General health check-ups for adults.',
                  icon: 'adult',
                },
                {
                  title: 'Konsultasi Kesehatan',
                  description: 'Health consultation services.',
                  icon: 'consult',
                },
                {
                  title: 'Pengobatan Penyakit Ringan',
                  description: 'Treatment of minor illnesses.',
                  icon: 'band-aid',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                  whileHover={{ scale: 1.03, opacity: 1 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <IconWrapper className="w-8 h-8 mb-4 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2z" />
                    </svg>
                  </IconWrapper>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              }))
            </div>
          </div>
        </Section>

        {/* Why Choose Our Medical Team */}
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8">Why Choose Our Medical Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 space-y-6">
              {[
                {
                  title: 'Experienced Doctors',
                  description: 'Decades of combined experience in various specialties.',
                  icon: 'user-doctor',
                },
                {
                  title: 'Certified Professionals',
                  description: 'Licensed and board-certified healthcare providers.',
                  icon: 'check-circle',
                },
                {
                  title: 'Friendly Consultation',
                  description: 'Comfortable and approachable patient interactions.',
                  icon: 'smile',
                },
                {
                  title: 'Modern Treatment',
                  description: 'Utilizing latest medical technologies and methods.',
                  icon: 'tv-2',
                },
                {
                  title: 'Patient Safety',
                  description: 'Strict protocols ensure safe and effective care.',
                  icon: 'shield',
                },
                {
                  title: 'Personalized Care',
                  description: 'Tailored treatment plans for each patient.',
                  icon: 'user',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
                  whileHover={{ y: -5, opacity: 1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <IconWrapper className="w-8 h-8 mb-4 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M10 3v1v6h-2V8H8v6h6v1h2V4h-6zm5 10H5v6h14v-6z" />
                    </svg>
                  </IconWrapper>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              }))
            </div>
          </div>
        </Section>

        {/* Appointment CTA */}
        <Section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Schedule an Appointment?</h2>
              <p className="text-xl text-white mb-6">
                Our expert team is here to help you. Book your appointment today via WhatsApp or call us.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Book via WhatsApp
              </a>
              <p className="text-xl text-white mt-6">
                <strong>Contact Phone:</strong> +62 21 1234 5678
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </Section>
  );
}