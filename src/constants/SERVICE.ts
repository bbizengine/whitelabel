import { ROUTES } from "@/prefix/routes";
import webMagner from "@/assets/img/web/web-magner.jpeg";
import webBbmHemat from "@/assets/img/web/web-bbmhemat.jpeg";
import webBbizLegal from "@/assets/img/web/web-bbizlegal.jpeg";
import webBbizJob from "@/assets/img/web/web-bbizjob.jpeg";
import comproBbiz from "@/assets/img/compro/compro-bbizengine.jpeg";
import comproMagNet from "@/assets/img/compro/compro-magner.jpeg";
import comproMagOrg from "@/assets/img/compro/compro-magorg.jpeg";
import bbizapp from "@/assets/img/app/bbizapp.png";
import bbizeng from "@/assets/img/app/bbizeng.png";
import seo from "@/assets/img/seo/seo.png";
import backlinks from "@/assets/img/seo/backlinks.png";
import blogs from "@/assets/img/seo/blog.png";
import pos from "@/assets/img/engine/pos.png";

export const SERVICE = [
  {
    name: "Web Development",
    src: "https://bbizengine.com/wp-content/uploads/2023/04/webdevelopment-removebg-preview.png",
    link: ROUTES.WEB,
    about:
      "B-Biz Experiences Throughout Website and eCommerce building a professional Connection Between Tentant and Customer for their best Experiences, We work with all sorts of clients with a wide range of features and requirements based on client's Core Business.",

    projects: [
      {
        name: "Market Place / Moneysite",
        project: [
          {
            name: "Magnercare",
            link: "https://magnercare.com/",
            img: webMagner,
            about:
              "Magnercare is one of B-Biz Engine's Project, We developed Magnercare based on Client's request. ",
          },
          {
            name: "BBM Hemat",
            link: "https://bbmhemat.co.id/",
            img: webBbmHemat,
            about:
              "One of Magnercare's affiliator turns out to be one of the biggest Online news, B-Biz had an opportunity to create one for BERITAJatim for their SEO by making them a Backlinks ",
          },
          {
            name: "BBIZ Legal",
            link: "https://bbizlegal.id/",
            img: webBbizLegal,
            about:
              "B-Biz Legal is one of B-Biz Project that connects One Stop Solution Legal services to our Customers",
          },
          {
            name: "BBIZ JOB",
            link: "https://bbizjob.com/",
            img: webBbizJob,
            about:
              "B-Biz Legal is one of B-Biz Project that connects Job Seeker and Companies for Job Scouting (Job Portal)",
          },
        ],
      },
      {
        name: "Company Profile",
        project: [
          {
            name: "B-Biz Engine",
            link: "https://bbizengine.com/",
            img: comproBbiz,
            about: "",
          },
          {
            name: "Magnercare.net",
            link: "https://bbmhemat.co.id/",
            img: comproMagNet,
            about: "",
          },
          {
            name: "Magnercare.org",
            link: "https://bbizlegal.id/",
            img: comproMagOrg,
            about: "",
          },
        ],
      },
    ],
  },

  {
    name: "Apps Development",
    src: "https://bbizengine.com/wp-content/uploads/2023/04/mobiledevelopment-removebg-preview.png",
    link: ROUTES.APPS,
    about:
      "B-Biz Team consisted of experienced UI/UX that help client's maximize their App Experiences through Apps Development using Google Developer or Apple Developer",
    projects: [
      {
        name: "App Development",
        project: [
          {
            name: "B-Biz App",
            link: "",
            img: bbizapp,
          },
          {
            name: "B-Biz Engine",
            link: "",
            img: bbizeng,
          },
        ],
      },
    ],
  },

  {
    name: "SEO Services",
    src: "https://bbizengine.com/wp-content/uploads/2023/04/search-engine-optimization.webp",
    link: ROUTES.SEO,
    about:
      "B-Biz SEO team has more than 5 years of experiences with Google SERP's, We help clients to seek for their best Keyword to compete with their Competitors",
    projects: [
      {
        name: "SEO Services",
        project: [
          {
            name: "On Page SEO",
            link: "",
            img: seo,
          },
          {
            name: "Backlinks",
            link: "",
            img: backlinks,
          },
          {
            name: "Blogs",
            link: "",
            img: blogs,
          },
        ],
      },
    ],
  },

  {
    name: "B-BIZ Engine",
    src: "https://magnercare-prod.s3.ap-southeast-1.amazonaws.com/asset/collaborate/B-logo.svg",
    link: ROUTES.BBIZ,
    about:
      "B-Biz Engine is our main Source White-label that created perfect Software on Client’s necessity",
    projects: [
      {
        name: "POS (Point of Sales)",
        project: [
          {
            name: "Product",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Inventory",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Order",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Warehouse",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Customer",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Payment",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Supplier",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Admin Log",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
          {
            name: "Admin Management",
            link: "https://inventory-whitelabel.bbiz.co.id/login",
            img: pos,
          },
        ],
      },
    ],
  },
];
