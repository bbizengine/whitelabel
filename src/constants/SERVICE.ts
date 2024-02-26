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
          },
          {
            name: "BBM Hemat",
            link: "https://bbmhemat.co.id/",
            img: webBbmHemat,
          },
          {
            name: "BBIZ Legal",
            link: "https://bbizlegal.id/",
            img: webBbizLegal,
          },
          {
            name: "BBIZ JOB",
            link: "https://bbizjob.com/",
            img: webBbizJob,
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
          },
          {
            name: "Magnercare.net",
            link: "https://bbmhemat.co.id/",
            img: comproMagNet,
          },
          {
            name: "Magnercare.org",
            link: "https://bbizlegal.id/",
            img: comproMagOrg,
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
      "We develop application on a wide range of open sources platform to ensure Client's and Their Customers are having their best App Experiences",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam error expedita quia molestiae tempora illum ill",
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam error expedita quia molestiae tempora illum ill",
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
