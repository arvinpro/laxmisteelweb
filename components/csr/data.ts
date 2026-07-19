interface CSRRegistryItem {
  sn: number;
  activity: string;
  location: string;
  category: string;
  remarks: string;
  image: string;
  localImage?: string;
  desc: string;
}

export const csrActivities: CSRRegistryItem[] = [
  {
    sn: 1,
    activity: "Construction of Public Toilets",
    location: "Sunwal Chowk, through Sunwal Municipality",
    category: "Sanitation",
    remarks: "Sanitation",
    image:
      "/csr/publictoilet.jpg",
    desc: "Facilitating hygienic municipal infrastructure. Partnered with Sunwal Municipality to erect public conveniences with complete modern sanitation blocks at the busy Sunwal Chowk.",
  },
  {
    sn: 2,
    activity: "Construction of Radha Krishna Temple",
    location: "Sunwal-4, Ramwapur",
    category: "Religious Infrastructure",
    remarks: "Religious Infrastructure",
    image:
      "/csr/radhakrishnatemple.jpg",

    desc: "Preserving local spiritual culture. Funded the architectural masonry, stone paving, and serene surrounding boundary construction of Radha Krishna Temple in Ramwapur.",
  },
  {
    sn: 3,
    activity: "Support for Upgrading Asnaiya Multiple Campus",
    location: "Sunwal-7",
    category: "Education",
    remarks: "Education",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",

    desc: "Empowering regional higher education. Supported the academic campus with direct construction grants for expanding college classrooms and upgrading learning equipment.",
  },
  {
    sn: 4,
    activity: "Reconstruction/Renovation of Siseni Temple",
    location: "Sunwal-7",
    category: "Religious Infrastructure",
    remarks: "Religious Infrastructure",
    image:
      "/csr/renovationtemple.jpg",
    desc: "Restoring regional cultural heritage. Undertook structural reinforcement of the walls, columns, and heritage tiled roofings of the central Siseni community temple.",
  },
  {
    sn: 5,
    activity: "Mayor Cup Running Shield Football Tournament",
    location: "Sunwal-7",
    category: "Sports",
    remarks: "Sports",
    image:
      "/csr/footballtournament.jpeg",

    desc: "Promoting local sports and coordination. Sponsored team kits, shields, and ground preparations for the annual municipal running-shield tournament.",
  },
  {
    sn: 6,
    activity: "U-16 Football Tournament",
    location: "Sunwal-7",
    category: "Sports",
    remarks: "Sports",
    image:
      "/csr/u16youthdivision.jpg",
    desc: "Sustaining grassroots youth football. Provided comprehensive athletic materials, training resources, and matches support for the Nawalparasi youth division.",
  },
  {
    sn: 7,
    activity: "Blood Donation Program",
    location: "Within the industrial premises",
    category: "Health & Social Welfare",
    remarks: "Health & Social Welfare",
    image:
      "/csr/blood donation.jpeg",
    localImage: "blooddonation",
    desc: "Securing life-saving resources. Coordinated with the Nepal Red Cross to organize continuous bi-annual donation camps hosted fully within our heavy rolling mill compound.",
  },
  {
    sn: 8,
    activity: "Volleyball Tournament Support",
    location: "Devdaha Adarsha Multiple Campus, Devdaha-7",
    category: "Sports",
    remarks: "Sports",
    image:
      "/csr/volleyball.jpg",
    desc: "Advancing inter-campus sportsmanship. Contributed physical sports materials, referees support, and cash prizes for students of Devdaha Adarsha Campus.",
  },
  {
    sn: 9,
    activity: "Construction of Public Toilets",
    location: "Devdaha-5, through Nepal Magar Association",
    category: "Sanitation",
    remarks: "Sanitation",
    image:
      "/csr/publictoiletmagaracco.jpg",
    desc: "Expanding municipal sanitation coverage. Collaborated closely with the Nepal Magar Association to provide hygienic community restroom blocks with solar lights.",
  },
  {
    sn: 10,
    activity:
      "Distribution of Waste Management Training and Dustbins to Local Schools, Temples, and Community Organizations",
    location: "Sunwal-7",
    category: "Environment & Community Development",
    remarks: "Environment & Community Development",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    localImage: "envday",
    desc: "Spreading civil sanitation and recycling values. Donated heavy-duty municipal dustbins alongside holding targeted safety and solid waste management tutorials for regional local schools and temples.",
  },
  {
    sn: 11,
    activity: "Support for Free Eye Health Camp and Blood Donation Program",
    location:
      "Sunwal-7, through Drinking Water and Sanitation Consumer Organization",
    category: "Health",
    remarks: "Health",
    image: "/csr/eyecamp.jpg",
      
    desc: "Broadening regional health outreach. Partnered with drinking water groups to fund medical eye testing clinics, checking over 180 residents and offering free cataract guidance.",
  },
  {
    sn: 12,
    activity: "Tree Plantation and Beautification",
    location: "From Jyamire Chowk to the Industry Entrance Gate, Sunwal-7",
    category: "Environmental Conservation",
    remarks: "Environmental Conservation",
    image:
      "/csr/env day.jpeg",
    desc: "Enhancing the industrial green corridor. Spearheaded intensive broad-leaved evergreen plantation and fencing works along standard pathways leading to our main rolling plant.",
  },
  {
    sn: 13,
    activity: "Distribution of School Bags and Textbooks to Students",
    location: "Janajyoti Basic School, Sunwal-7",
    category: "Education",
    remarks: "Education",
    image:
      "/csr/disturbationofbags.jpg",
    desc: "Equitting under-privileged children. Provided high-durability school backpacks, calculators, and curriculum textbook bundles directly to students of Janajyoti school.",
  },
  {
    sn: 14,
    activity: "Construction of Paved Road",
    location: "Sunwal-7",
    category: "Infrastructure Development",
    remarks: "Infrastructure Development",
    image:
      "/csr/pavedroad.jpeg",
    desc: "Constructing robust neighborhood conduits. Supported the structural laying of durable gravel and paved paths in Sunwal Ward 7 to facilitate community farming haulage.",
  },
  {
    sn: 15,
    activity:
      '"Bright Ward No. 7 Campaign" – Installation of Street Lights on Roads Throughout Ward No. 7',
    location: "Sunwal-7",
    category: "Community Development & Public Safety",
    remarks: "Community Development & Public Safety",
    image:
      "/csr/streetlight.jpeg",
    desc: "Illuminating community pathways. Erected modern LED streetlighting poles along ward paths to reinforce public safety and secure late-evening pedestrian commutes.",
  },
];