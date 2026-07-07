import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",  //sabailai allow garne like google bot,facebook bot,bring bot etc
        allow: "/", // sabai page haru allow garne
        disallow: [
          "/_next/"   
        ],
      },
    ],
    sitemap: "",
  };
}