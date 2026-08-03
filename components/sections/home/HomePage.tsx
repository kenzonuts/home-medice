import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ImageIcon,
  MapPinned,
  MessageCircle,
  Phone,
  Quote,
  UserRound,
} from "lucide-react";

import {
  FadeDown,
  FadeLeft,
  FadeRight,
  FadeUp,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import { Section } from "@/components/layout";
import {
  ArticleCardBase,
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  DoctorCardBase,
  GalleryCardBase,
  IconWrapper,
  Paragraph,
  SectionTitle,
  ServiceCard,
  TestimonialCardBase,
} from "@/components/ui";
import { CONTACT, getWhatsAppUrl } from "@/constants/contact";
import {
  heroTrustItems,
  HOME_ARTICLES,
  HOME_DOCTORS,
  HOME_FEATURES,
  HOME_GALLERY,
  HOME_LOCATION,
  HOME_SERVICES,
  HOME_STATS,
  HOME_TESTIMONIALS,
  ratingIcons,
} from "@/constants/homepage";
import { cn } from "@/lib/utils";

const linkBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none";

function PrimaryLink({
  href,
  children,
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        linkBase,
        "bg-primary text-primary-foreground shadow-sm hover:bg-primary-hover active:bg-primary-active",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function SecondaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        linkBase,
        "border border-white/35 bg-white/12 text-white backdrop-blur-sm hover:bg-white/20",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function SectionAction({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-primary transition-colors hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {children}
      <ArrowRight className="size-4" aria-hidden />
    </Link>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-7rem)] items-center overflow-hidden bg-foreground text-white">
      <Image
        src="/images/homepage-hero-healthcare.png"
        alt="Ilustrasi konsultasi dokter dengan keluarga di ruang klinik modern"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(15_23_42/.86)_0%,rgb(15_23_42/.62)_42%,rgb(15_23_42/.14)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,#f8fafc_0%,rgb(248_250_252/.78)_28%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255/.16)_1px,transparent_1px)] bg-[length:28px_28px] opacity-35"
        aria-hidden
      />

      <div className="container-app relative z-10 py-20 md:py-24 lg:py-28">
        <FadeDown className="w-[calc(100vw-2rem)] max-w-3xl">
          <Badge className="border border-white/25 bg-white/12 text-white backdrop-blur-sm">
            Klinik sunat modern untuk keluarga
          </Badge>
        </FadeDown>

        <FadeUp className="mt-6 w-[calc(100vw-2rem)] max-w-3xl">
          <h1 className="max-w-full font-heading text-3xl leading-tight font-bold text-balance text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Layanan sunat modern yang nyaman, aman, dan profesional.
          </h1>
          <p className="mt-5 max-w-full font-body text-base leading-relaxed text-pretty text-white/82 md:max-w-2xl md:text-lg">
            Rumah Sunat Modern Jati menghadirkan pengalaman layanan kesehatan
            yang tenang, informatif, dan ramah keluarga sejak konsultasi hingga
            perawatan.
          </p>
        </FadeUp>

        <FadeUp className="mt-8 flex w-[calc(100vw-2rem)] max-w-3xl flex-col gap-3 sm:flex-row">
          <PrimaryLink href={getWhatsAppUrl()} external className="w-full sm:w-auto">
            <MessageCircle className="size-4" aria-hidden />
            Booking via WhatsApp
          </PrimaryLink>
          <SecondaryLink href="/layanan" className="w-full sm:w-auto">
            Lihat Layanan
            <ArrowRight className="size-4" aria-hidden />
          </SecondaryLink>
        </FadeUp>

        <StaggerContainer className="mt-10 grid w-[calc(100vw-2rem)] max-w-3xl gap-3 sm:grid-cols-3">
          {heroTrustItems.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={item.label}>
                <div className="flex min-h-14 items-center gap-3 rounded-lg border border-white/18 bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-white/16 text-white">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {item.label}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <Section className="bg-background" id="layanan-preview">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <FadeLeft>
            <SectionTitle
              eyebrow="Layanan"
              title="Pilihan layanan kesehatan yang disiapkan untuk keluarga."
              description="Setiap layanan dirancang dengan komunikasi yang jelas, alur yang nyaman, dan perhatian pada keamanan pasien."
            />
          </FadeLeft>
          <FadeRight>
            <SectionAction href="/layanan">Lihat Semua Layanan</SectionAction>
          </FadeRight>
        </div>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <StaggerItem key={service.title}>
                <ServiceCard
                  className="group min-h-[14.5rem] hover:-translate-y-1 hover:border-primary/30"
                  icon={
                    <IconWrapper variant={index % 2 === 0 ? "soft" : "secondary"}>
                      <Icon />
                    </IconWrapper>
                  }
                  title={service.title}
                  description={service.description}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeLeft>
          <SectionTitle
            eyebrow="Keunggulan"
            title="Pengalaman klinik yang tenang dari awal hingga selesai."
            description="Hal-hal penting seperti kenyamanan ruang, kebersihan alat, dan keramahan komunikasi menjadi bagian dari standar layanan."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {HOME_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-background px-4 py-3"
              >
                <p className="font-heading text-xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeLeft>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {HOME_FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <StaggerItem key={feature.title}>
                <Card
                  as="article"
                  className="h-full hover:-translate-y-1 hover:border-secondary/30"
                  interactive
                >
                  <IconWrapper variant={index % 2 === 0 ? "soft" : "secondary"}>
                    <Icon />
                  </IconWrapper>
                  <CardHeader className="mt-5">
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function TeamPreview() {
  return (
    <Section className="bg-background">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <FadeLeft>
            <SectionTitle
              eyebrow="Tim Medis"
              title="Tenaga medis yang siap mendampingi pasien dengan jelas."
              description="Profil dokter masih berupa placeholder dan dapat diganti dengan informasi resmi pada fase konten."
            />
          </FadeLeft>
          <FadeRight>
            <SectionAction href="/tim-medis">Lihat Tim Medis</SectionAction>
          </FadeRight>
        </div>

        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {HOME_DOCTORS.map((doctor, index) => (
            <StaggerItem key={doctor.name}>
              <DoctorCardBase
                className="h-full hover:-translate-y-1"
                media={
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#e0f2fe_0%,#f0fdf4_100%)]">
                    <div className="flex size-24 items-center justify-center rounded-full border border-white/70 bg-white/65 text-primary shadow-sm">
                      <UserRound className="size-11" aria-hidden />
                    </div>
                    <span className="absolute top-4 left-4 rounded-md bg-white/78 px-2 py-1 text-xs font-medium text-muted-foreground">
                      Foto {index + 1}
                    </span>
                  </div>
                }
                name={doctor.name}
                role={doctor.role}
                meta={doctor.meta}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function GalleryPreview() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <FadeLeft>
            <SectionTitle
              eyebrow="Galeri"
              title="Gambaran suasana klinik yang bersih dan nyaman."
              description="Area galeri menggunakan placeholder visual sampai foto resmi klinik tersedia."
            />
          </FadeLeft>
          <FadeRight>
            <SectionAction href="/galeri">Lihat Galeri</SectionAction>
          </FadeRight>
        </div>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_GALLERY.map((caption, index) => (
            <StaggerItem key={caption}>
              <GalleryCardBase
                className="group hover:-translate-y-1"
                media={
                  <div
                    className={cn(
                      "flex h-full items-center justify-center",
                      index % 3 === 0 && "bg-[linear-gradient(135deg,#f0fdf4,#ecfeff)]",
                      index % 3 === 1 && "bg-[linear-gradient(135deg,#eff6ff,#f8fafc)]",
                      index % 3 === 2 && "bg-[linear-gradient(135deg,#f8fafc,#dcfce7)]",
                    )}
                  >
                    <ImageIcon
                      className="size-10 text-primary/70 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    />
                  </div>
                }
                caption={
                  <span className="text-sm font-medium text-foreground">
                    {caption}
                  </span>
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="bg-background">
      <div className="flex flex-col gap-8">
        <FadeUp>
          <SectionTitle
            align="center"
            eyebrow="Testimoni"
            title="Ruang untuk cerita pengalaman pasien."
            description="Testimoni masih berupa placeholder dan siap diganti dengan ulasan asli yang sudah mendapat izin publikasi."
          />
        </FadeUp>

        <StaggerContainer className="grid gap-5 lg:grid-cols-3">
          {HOME_TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <TestimonialCardBase
                className="relative h-full"
                rating={
                  <div className="flex items-center gap-1 text-accent">
                    {ratingIcons.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Icon
                          key={item.id}
                          className="size-4 fill-current"
                          aria-hidden
                        />
                      );
                    })}
                    <span className="sr-only">
                      Rating {testimonial.rating} dari 5
                    </span>
                  </div>
                }
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                avatar={
                  <div className="flex h-full items-center justify-center bg-primary/10 text-primary">
                    <Quote className="size-5" aria-hidden />
                  </div>
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function ArticlesPreview() {
  return (
    <Section className="bg-white">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <FadeLeft>
            <SectionTitle
              eyebrow="Artikel"
              title="Edukasi kesehatan yang mudah dipahami."
              description="Artikel pratinjau disiapkan untuk konten edukasi klinik pada fase berikutnya."
            />
          </FadeLeft>
          <FadeRight>
            <SectionAction href="/artikel">Lihat Semua Artikel</SectionAction>
          </FadeRight>
        </div>

        <StaggerContainer className="grid gap-5 lg:grid-cols-3">
          {HOME_ARTICLES.map((article, index) => (
            <StaggerItem key={article.title}>
              <ArticleCardBase
                className="h-full hover:-translate-y-1"
                media={
                  <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#e0f2fe,#f0fdf4)]">
                    <CalendarDays
                      className={cn(
                        "size-10",
                        index % 2 === 0 ? "text-primary" : "text-secondary",
                      )}
                      aria-hidden
                    />
                  </div>
                }
                eyebrow={<Badge variant="secondary">{article.category}</Badge>}
                title={article.title}
                excerpt={article.excerpt}
                meta={article.date}
              >
                <Link
                  href="/artikel"
                  className="mt-4 inline-flex items-center gap-2 rounded-md text-sm font-semibold text-primary hover:text-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  Baca Selengkapnya
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </ArticleCardBase>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}

function BookingSection() {
  return (
    <Section className="bg-background">
      <ScaleIn>
        <div className="relative overflow-hidden rounded-2xl bg-secondary-active px-5 py-10 text-white shadow-xl md:px-10 lg:px-12">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/.16)_1px,transparent_0)] bg-[length:24px_24px] opacity-50"
            aria-hidden
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <Badge className="border border-white/20 bg-white/12 text-white">
                Booking kunjungan
              </Badge>
              <h2 className="mt-4 font-heading text-3xl leading-tight font-bold text-balance md:text-4xl">
                Siap konsultasi dengan tim Rumah Sunat Modern Jati?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/78 md:text-lg">
                Hubungi admin untuk menanyakan jadwal, estimasi layanan, dan
                persiapan sebelum berkunjung ke klinik.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <PrimaryLink
                href={getWhatsAppUrl()}
                external
                className="bg-white text-primary hover:bg-white/90"
              >
                <MessageCircle className="size-4" aria-hidden />
                Booking WhatsApp
              </PrimaryLink>
              <a
                href={CONTACT.phone.href}
                className={cn(
                  linkBase,
                  "border border-white/25 bg-white/10 text-white hover:bg-white/16",
                )}
              >
                <Phone className="size-4" aria-hidden />
                {CONTACT.phone.display}
              </a>
            </div>
          </div>
        </div>
      </ScaleIn>
    </Section>
  );
}

function LocationSection() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <FadeLeft>
          <SectionTitle
            eyebrow="Lokasi Klinik"
            title="Informasi lokasi dan jam operasional."
            description="Detail alamat dan jadwal masih placeholder sampai data resmi klinik siap ditayangkan."
          />

          <div className="mt-8 grid gap-4">
            {HOME_LOCATION.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.label} as="article" className="flex gap-4">
                  <IconWrapper variant="secondary">
                    <Icon />
                  </IconWrapper>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <Paragraph className="mt-1 text-sm">{item.value}</Paragraph>
                  </div>
                </Card>
              );
            })}
          </div>
        </FadeLeft>

        <FadeRight className="min-h-[24rem]">
          <div className="flex h-full min-h-[24rem] flex-col items-center justify-center rounded-2xl border border-dashed border-border-strong bg-background p-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPinned className="size-8" aria-hidden />
            </div>
            <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
              Google Maps Placeholder
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Embed peta resmi dapat dipasang saat alamat klinik sudah
              dikonfirmasi.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-muted-foreground shadow-sm">
              <CheckCircle2 className="size-4 text-primary" aria-hidden />
              Siap untuk integrasi maps
            </div>
          </div>
        </FadeRight>
      </div>
    </Section>
  );
}

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TeamPreview />
      <GalleryPreview />
      <Testimonials />
      <ArticlesPreview />
      <BookingSection />
      <LocationSection />
    </>
  );
}
