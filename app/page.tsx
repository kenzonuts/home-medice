import type { Metadata } from "next";

import { HomePage as HomeLandingPage } from "@/components/sections/home";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Page() {
  return <HomeLandingPage />;
}
