import { Metadata } from "next";
import { META } from "./constants";

type MetadataProps = {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
};

export function constructMetadata({
  title = META.title,
  description = META.description,
  keywords = META.keywords,
  path = "",
}: MetadataProps = {}): Metadata {
  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: "H & I Construction LLC" }],
    metadataBase: new URL("https://handiconstructionllc.com"),
    alternates: {
      canonical: `/${path}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: title,
      description: description,
      url: `https://handiconstructionllc.com/${path}`,
      siteName: "H & I Construction LLC",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
  };
}