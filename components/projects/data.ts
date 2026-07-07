import {Project} from "@/types/types";
import siddhababa from "@/public/projects/Sidhababa_tunnel.jpg";
import ktmtarck from "@/public/projects/ktmtrack.jpg";
import naagdhunga from "@/public/projects/nagdhunga.jpg";
import bardinbas from "@/public/projects/bardibas.jpg";
import setikhola from "@/public/projects/setikhola.jpeg";
import tamakoshi from "@/public/projects/tamakoshi.jpeg";
import bhotekoshi from "@/public/projects/bhotekoshi.jpg";
import madanbhandari from "@/public/projects/madanbhandarihighway.jpg";
import hetauda from "@/public/projects/hetauda.jpg";
import sunigadi from "@/public/projects/sunigadi.jpg";
import uppertamakoshi from "@/public/projects/upper-tamakoshi-hydropower-project.jpg";
import chefoffice from "@/public/projects/chefoffice.jpg";
import Dharahara from "@/public/projects/Dharahara.jpg";
import diding from "@/public/projects/diding.jpg";
import Homeministry from "@/public/projects/Home-Ministry.jpg";
import karnali from "@/public/projects/karnali.jpg";
import kasuwakhola from "@/public/projects/kasuwakhola.jpg";
import ktmpost from "@/public/projects/KathmanduPostal.jpeg";
import khimiti from "@/public/projects/Khimti.jpg";
import nationaldefence from "@/public/projects/national-defence-university-kavre-nepal.jpg";
import uppertrishuli from "@/public/projects/UpperTrishuli.jpg";
import armyhospital from "@/public/projects/army-hospital-chhauni.jpg";
import nationalpoliceacademy from "@/public/projects/National-Police-Academy.jpg";
import chepekhola from "@/public/projects/chepekhola.jpg";
import expressway from "@/public/projects/expressway-zakir.jpeg";
import pulchowk from "@/public/projects/Pulchowk-Apartment.png";
import uchhaadalat from "@/public/projects/Uchha-Adalat-Baglung.jpg";


export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Siddhababa Tunnel Project",
    category: "tunnels",
    image: siddhababa.src,
    contractor: "China State Construction and Engineering Corp. Ltd (CSCEC)",
    location: "Palpa–Rupandehi, Lumbini Province",
  },
  {
    id: "p2",
    name: "Kathmandu–Terai Fast Track (Package 1, 3 & 8A)",
    category: "tunnels",
    image: ktmtarck.src,
    scale: "Expressway Tunnels & Bridges",
    contractor: "CSCEC / Kumar Shrestha Nirman Sewa / Bhimeshwor Group",
    location: "Khokana to Nijgadh Section",
  },
  {
    id: "p3",
    name: "Nagdhunga–Muglin Road Expansion",
    category: "tunnels",
    image: naagdhunga.src,
    scale: "National Highway Expansion",
    contractor: "Sharma & Company Pvt. Ltd. & Bhimeshwor Group",
    location: "Dhading District Segment",
  },
  {
    id: "p4",
    name: "Bardibas–Jaleshwor Road Project",
    category: "tunnels",
    image: bardinbas.src,
    scale: "Border Trade Highway Link",
    contractor: "Roshan Construction Pvt. Ltd.",
    location: "Mahottari, Madhesh Province",
  },
  {
    id: "p5",
    name: "Madan Bhandari Highway Project",
    category: "tunnels",
    image: madanbhandari.src,
    scale: "East-West Foothills Highway Segment",
    contractor: "Kumar Shrestha Nirman Sewa Pvt. Ltd.",
    location: "Rolpa Section",
  },

  {
    id: "p6",
    name: "Upper Tamor Hydropower Project",
    category: "hydro",
    image: uppertamakoshi.src,
    scale: "285 MW hydro-tunnel, penstock & powerhouse",
    contractor: "Fewa Construction Pvt. Ltd.",
    location: "Taplejung District, Koshi Province",
  },
  {
    id: "p7",
    name: "Upper Trishuli 3B",
    category: "hydro",
    image: uppertamakoshi.src,
    scale: "37 MW run-of-the-river project",
    contractor: "Fewa Construction Pvt. Ltd.",
    location: "Nuwakot/Rasuwa Border",
  },
  {
    id: "p8",
    name: "Setikhola Hydropower Project",
    category: "hydro",
    image: setikhola.src,
    scale: "22 MW cascade power network",
    contractor: "Fewa Construction Pvt. Ltd.",
    location: "Kaski District, Gandaki Province",
  },
  {
    id: "p9",
    name: "Bhotekoshi-1 Hydropower Project",
    category: "hydro",
    image: bhotekoshi.src,
    scale: "40 MW high-head installation",
    contractor: "Bhugol Infrastructure Company Pvt. Ltd.",
    location: "Sindhupalchok, Bagmati Province",
  },
  {
    id: "p10",
    name: "Chepe Khola Hydropower",
    category: "hydro",
    image: chepekhola.src,
    scale: "Run-of-the-river power plant",
    contractor: "Bhugol Infrastructure Company Pvt. Ltd.",
    location: "Lamjung District",
  },
  {
    id: "p11",
    name: "Kasuwa Khola Hydropower",
    category: "hydro",
    image: kasuwakhola.src,
    scale: "45 MW heavy cavern powerhouse",
    contractor: "Mountain Infra Company Limited",
    location: "Sankhuwasabha, Koshi Province",
  },
  {
    id: "p12",
    name: "Sunigadh Hydropower",
    category: "hydro",
    image: sunigadi.src,
    scale: "High-altitude headwork structure",
    contractor: "Kumar Shrestha Nirman Sewa Pvt. Ltd.",
    location: "Bajhang, Sudurpashchim Province",
  },

  {
    id: "p13",
    name: "Tamakoshi–Kathmandu 400 kV Transmission Line",
    category: "transmission",
    image: tamakoshi.src,
    scale: "Double circuit heavy spans",
    contractor: "KEC International Limited",
    location: "Dolakha to Kathmandu Corridor",
  },
  {
    id: "p14",
    name: "Diding–Dhalkebar–Bathnaha Transmission Line",
    category: "transmission",
    image: diding.src,
    scale: "Critical export link (Arun III Power Export)",
    contractor: "KEC International Limited",
    location: "Sankhuwasabha to Madhesh Segment",
  },
  {
    id: "p15",
    name: "Hetauda–Bharatpur 220 kV Transmission Line",
    category: "transmission",
    image: hetauda.src,
    scale: "National Grid upgrade link",
    contractor: "KEC International Limited",
    location: "Makwanpur to Chitwan Span",
  },
  {
    id: "p16",
    name: "New Khimti Substation Project",
    category: "transmission",
    image: khimiti.src,
    scale: "Gas Insulated Substation foundation design",
    contractor: "KEC International Limited",
    location: "Dolakha District",
  },
  {
    id: "p17",
    name: "Tumglintar–Sitalpati 220 kV Transmission Line",
    category: "transmission",
    image: uppertrishuli.src,
    scale: "Arun corridor structural towers",
    contractor: "Kalpataru Projects International Limited",
    location: "Sankhuwasabha valleys",
  },
  {
    id: "p18",
    name: "Karnali Corridor 400 kV Transmission Line",
    category: "transmission",
    image: karnali.src,
    scale: "Seismically isolated tower foundations",
    contractor: "Kalpataru Projects International Limited",
    location: "Sudurpashchim Province",
  },

  {
    id: "p19",
    name: "Office of the Chief Minister & Council of Ministers",
    category: "government",
    image: chefoffice.src,
    scale: "State administrative headquarters complex",
    contractor: "Sharma and Company Pvt. Ltd.",
    location: "Rapti Valley, Dang (Lumbini Capital)",
  },
  {
    id: "p20",
    name: "National Police Academy Complex",
    category: "government",
    image: nationalpoliceacademy.src,
    scale: "Multi-building integrated training camp",
    contractor: "Roshan Construction Pvt. Ltd.",
    location: "Panauti, Kavre District",
  },
  {
    id: "p21",
    name: "National Defence University",
    category: "government",
    image: nationaldefence.src,
    scale: "High-security institutional buildings",
    contractor: "Vedalaya Construction Pvt. Ltd.",
    location: "Sanga, Kavre District",
  },
  {
    id: "p22",
    name: "Chhauni Army Hospital Extension",
    category: "government",
    image: armyhospital.src,
    scale: "Earthquake-safe surgical tertiary block",
    contractor: "Vedalaya Construction Pvt. Ltd.",
    location: "Chhauni, Kathmandu",
  },
  {
    id: "p23",
    name: "Ministry of Home Affairs Office",
    category: "government",
    image: Homeministry.src,
    scale: "Reinforced secure administrative wing",
    contractor: "Mountain Infra Company Limited",
    location: "Singhadurbar, Kathmandu",
  },
  {
    id: "p24",
    name: "Historic Dharahara Reconstruction Project",
    category: "government",
    image: Dharahara.src,
    scale: "22-storey tower, seismic reinforcement pile foundation",
    contractor: "Raman Construction Pvt. Ltd.",
    location: "Sundhara, Kathmandu",
  },

  {
    id: "p25",
    name: "Pulchowk Apartment Complex",
    category: "residential",
    image: pulchowk.src,
    scale: "High-rise earthquake-resistant luxury living",
    contractor: "Sharma and Company Pvt. Ltd.",
    location: "Lalitpur, Bagmati Province",
  },
  {
    id: "p26",
    name: "Kathmandu Postal G.P.O. (Hulak Building Block)",
    category: "residential",
    image: ktmpost.src,
    scale: "State-of-the-art logistics structural concrete",
    contractor: "Mountain Infra Company Limited",
    location: "Sundhara, Kathmandu",
  },
  {
    id: "p27",
    name: "Pokhara–Baglung Uchha Adalat Complex",
    category: "residential",
    image: uchhaadalat.src,
    scale: "Provincial High Court buildings",
    contractor: "Vedalaya Construction Pvt. Ltd.",
    location: "Kaski, Gandaki Province",
  },
  {
    id: "p28",
    name: "Asian Highway Connect Link Expansion",
    category: "residential",
    image: expressway.src,
    scale: "Concrete culverts, retention walls and span piers",
    contractor: "Vedalaya Construction Pvt. Ltd.",
    location: "Jhapa and Morang, Koshi Province",
  },
];