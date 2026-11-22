import rajasthanImg from "@/assets/dest-rajasthan.jpg";
import jaipurImg from "@/assets/dest-jaipur.jpg";
import udaipurImg from "@/assets/dest-udaipur.jpg";
import jaisalmerImg from "@/assets/dest-jaisalmer.jpg";
import keralaImg from "@/assets/dest-kerala.jpg";
import kerala2Img from "@/assets/dest-kerala-2.jpg";
import munnarImg from "@/assets/dest-munnar.jpg";
import ladakhImg from "@/assets/dest-ladakh.jpg";
import ladakh2Img from "@/assets/dest-ladakh-2.jpg";
import kashmirImg from "@/assets/dest-kashmir.jpg";
import goaImg from "@/assets/dest-goa.jpg";
import himachalImg from "@/assets/dest-himachal.jpg";
import andamanImg from "@/assets/dest-andaman.jpg";
import meghalayaImg from "@/assets/dest-meghalaya.jpg";
import varanasiImg from "@/assets/dest-varanasi.jpg";
import agraImg from "@/assets/dest-agra.jpg";
import punjabImg from "@/assets/dest-punjab.jpg";
import mumbaiImg from "@/assets/dest-mumbai.jpg";
import dubaiImg from "@/assets/dest-dubai.jpg";
import baliImg from "@/assets/dest-bali.jpg";
import thailandImg from "@/assets/dest-thailand.jpg";
import switzerlandImg from "@/assets/dest-switzerland.jpg";
import maldivesImg from "@/assets/dest-maldives.jpg";
import japanImg from "@/assets/dest-japan.jpg";

export const BRAND = {
  name: "Tourwala",
  legalName: "Tourwala Travels",
  tagline: "Fun Unlimited",
  phoneDisplay: "82865 21111",
  phone: "+918286521111",
  whatsapp: "918286521111",
  email: "Info@tourwalatravels.com",
  emailHref: "info@tourwalatravels.com",
  website: "tourwalatravels.com",
  websiteHref: "https://tourwalatravels.com",
  hours: "All days open · 10:30 am – 7:00 pm",
  hoursShort: "All days · 10:30 am – 7:00 pm",
  addressLine1: "Room No. 1, 1st Floor, Ashok Apartment",
  addressLine2: "Above Mahalaxmi Telecom, opposite Naupada Police Station",
  addressLine3: "Thane West, Thane 400601",
  addressFull:
    "Room No. 1, 1st Floor, Ashok Apartment, above Mahalaxmi Telecom, opposite Naupada Police Station, Thane West, Thane 400601",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Room+No+1+1st+Floor+Ashok+Apartment+Opposite+Naupada+Police+Station+Thane+West+400601",
} as const;

export const whatsappLink = (message = "Hi Tourwala Travels, I would like help planning a trip.") =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;

export const inr = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export type Region = "domestic" | "international";

export type Destination = {
  slug: string;
  name: string;
  state: string;
  region: Region;
  tagline: string;
  summary: string;
  image: string;
  gallery: string[];
  bestTime: string;
  idealDays: string;
  priceFrom: number;
  categories: string[];
  highlights: string[];
  route: string;
};

export const destinations: Destination[] = [
  {
    slug: "rajasthan",
    name: "Rajasthan",
    state: "Jaipur · Jodhpur · Udaipur · Jaisalmer",
    region: "domestic",
    tagline: "Forts before breakfast, lakes after sunset.",
    summary:
      "Rajasthan is the India postcards promise. We slow it down into palace courtyards, blue-city rooftops and one properly quiet night in the Thar.",
    image: udaipurImg,
    gallery: [jaipurImg, udaipurImg, jaisalmerImg, rajasthanImg],
    bestTime: "October – March",
    idealDays: "5 – 9 days",
    priceFrom: 24999,
    categories: ["Heritage", "Family", "Honeymoon"],
    highlights: [
      "Amber Fort and old Jaipur with a local guide",
      "Mehrangarh and the blue lanes of Jodhpur",
      "Camel ride and a desert camp in Jaisalmer",
      "Lake Pichola and Udaipur's palace courtyards",
      "Ranakpur's marble temples",
      "A craft and food day with local families",
    ],
    route: "Jaipur → Jodhpur → Jaisalmer → Udaipur",
  },
  {
    slug: "kerala",
    name: "Kerala",
    state: "Kochi · Munnar · Thekkady · Alleppey",
    region: "domestic",
    tagline: "The holiday that teaches you to slow down.",
    summary:
      "Tea hills in the morning, a private houseboat by lunch and a beach with nothing on the schedule. Kerala is our easiest recommendation for first-time India travellers.",
    image: keralaImg,
    gallery: [kerala2Img, munnarImg, keralaImg],
    bestTime: "September – March",
    idealDays: "5 – 8 days",
    priceFrom: 21999,
    categories: ["Honeymoon", "Family", "Hills"],
    highlights: [
      "Fort Kochi and a Kathakali evening",
      "Munnar tea estates and misty viewpoints",
      "Periyar wildlife and spice plantations",
      "A private Alleppey houseboat",
      "Marari beach and an Ayurveda massage",
      "Kochi's spice market before departure",
    ],
    route: "Kochi → Munnar → Thekkady → Alleppey → Marari",
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    state: "Leh · Nubra · Pangong",
    region: "domestic",
    tagline: "Thin air. Wide roads. No noise.",
    summary:
      "A high-altitude road trip across monasteries, sand dunes and a lake that changes colour every hour. We build in proper acclimatisation days.",
    image: ladakhImg,
    gallery: [ladakh2Img, ladakhImg],
    bestTime: "June – September",
    idealDays: "6 – 9 days",
    priceFrom: 34999,
    categories: ["Adventure", "Hills"],
    highlights: [
      "Leh old town and Shanti Stupa",
      "Sham Valley's monasteries and magnetic hill",
      "Khardung La and the road to Nubra",
      "Turtuk village and Balti kitchens",
      "A night beside Pangong Lake",
      "Chang La back to Leh",
    ],
    route: "Leh → Sham Valley → Nubra → Turtuk → Pangong → Leh",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    state: "Srinagar · Gulmarg · Pahalgam",
    region: "domestic",
    tagline: "Still water, tall chinars, slow shikaras.",
    summary:
      "A houseboat on Dal Lake, gondolas above Gulmarg and river valleys in Pahalgam. Kashmir works beautifully for couples and families alike.",
    image: kashmirImg,
    gallery: [kashmirImg],
    bestTime: "April – October",
    idealDays: "5 – 8 days",
    priceFrom: 24999,
    categories: ["Honeymoon", "Family", "Hills"],
    highlights: [
      "An evening shikara on Dal Lake",
      "Gulmarg gondola and meadow walks",
      "Betaab and Aru valleys in Pahalgam",
      "Thajiwas glacier in Sonamarg",
      "Mughal gardens and old Srinagar",
      "Papier-mâché and carpet workshops",
    ],
    route: "Srinagar → Gulmarg → Pahalgam → Sonamarg → Srinagar",
  },
  {
    slug: "goa",
    name: "Goa",
    state: "North Goa · Old Goa · South Goa",
    region: "domestic",
    tagline: "Two coasts, two moods, one easy week.",
    summary:
      "Not just beach shacks. We mix the north's energy with Fontainhas' Portuguese lanes and the quiet south, so the trip has a rhythm.",
    image: goaImg,
    gallery: [goaImg],
    bestTime: "November – February",
    idealDays: "3 – 5 days",
    priceFrom: 12999,
    categories: ["Beaches", "Friends", "Honeymoon"],
    highlights: [
      "Candolim and Ashwem beach afternoons",
      "Old Goa churches and Fontainhas walk",
      "A river cruise at golden hour",
      "Quiet Palolem and Agonda beaches",
      "Spice plantation lunch",
      "A free day with no alarm",
    ],
    route: "North Goa → Old Goa → South Goa",
  },
  {
    slug: "himachal",
    name: "Himachal",
    state: "Shimla · Manali · Sissu",
    region: "domestic",
    tagline: "Pine air, river cafés, big mountain days.",
    summary:
      "The classic hill holiday, planned without the 6am bus races. Shimla's verandahs, Manali's cafés and the road to Atal Tunnel.",
    image: himachalImg,
    gallery: [himachalImg],
    bestTime: "March – June · September – November",
    idealDays: "5 – 8 days",
    priceFrom: 18999,
    categories: ["Hills", "Family", "Adventure"],
    highlights: [
      "Shimla's Mall Road and Ridge",
      "Kufri's pine forests",
      "Old Manali cafés and Hadimba temple",
      "Solang Valley and Atal Tunnel",
      "Sissu's river views",
      "A slow day by the Beas",
    ],
    route: "Shimla → Kufri → Manali → Solang → Sissu",
  },
  {
    slug: "andaman",
    name: "Andaman",
    state: "Port Blair · Havelock · Neil Island",
    region: "domestic",
    tagline: "Water so clear it feels edited.",
    summary:
      "India's easiest tropical escape — ferries between islands, empty beaches and reefs that reward doing absolutely nothing.",
    image: andamanImg,
    gallery: [andamanImg],
    bestTime: "October – May",
    idealDays: "5 – 8 days",
    priceFrom: 27999,
    categories: ["Beaches", "Honeymoon", "Family"],
    highlights: [
      "Cellular Jail and the light show",
      "Ferry to Havelock",
      "Radhanagar Beach at sunset",
      "Elephant Beach snorkelling",
      "Neil Island's quiet coves",
      "Chidiya Tapu and Port Blair markets",
    ],
    route: "Port Blair → Havelock → Neil Island → Port Blair",
  },
  {
    slug: "meghalaya",
    name: "Meghalaya & Assam",
    state: "Shillong · Cherrapunji · Dawki",
    region: "domestic",
    tagline: "Clouds you can walk through.",
    summary:
      "Living root bridges, waterfalls that disappear into mist and a river so clear the boats look like they're floating on air.",
    image: meghalayaImg,
    gallery: [meghalayaImg],
    bestTime: "October – April",
    idealDays: "6 – 9 days",
    priceFrom: 26999,
    categories: ["Hills", "Adventure", "Nature"],
    highlights: [
      "Umiam Lake and Shillong's music scene",
      "Laitlum canyons",
      "Nohkalikai Falls and Mawsmai caves",
      "Double-decker living root bridge",
      "Umngot river boat ride at Dawki",
      "Mawlynnong village",
    ],
    route: "Guwahati → Shillong → Cherrapunji → Dawki → Shillong",
  },
  {
    slug: "varanasi",
    name: "Varanasi & Ayodhya",
    state: "Kashi · Ayodhya",
    region: "domestic",
    tagline: "The oldest city, made easy.",
    summary:
      "A comfortable, well-paced darshan trip with a guide who knows the lanes, the queues and the quietest boat at sunrise.",
    image: varanasiImg,
    gallery: [varanasiImg],
    bestTime: "October – March",
    idealDays: "3 – 5 days",
    priceFrom: 14999,
    categories: ["Pilgrimage", "Heritage", "Family"],
    highlights: [
      "Ganga aarti at Dashashwamedh",
      "Sunrise boat on the Ganges",
      "Kashi Vishwanath darshan",
      "Sarnath and the Buddha's first sermon",
      "Ayodhya Ram Mandir darshan",
      "A local food walk",
    ],
    route: "Varanasi → Sarnath → Ayodhya → Varanasi",
  },
  {
    slug: "golden-triangle",
    name: "Golden Triangle",
    state: "Delhi · Agra · Jaipur",
    region: "domestic",
    tagline: "The first India trip, done properly.",
    summary:
      "Delhi's food, the Taj at sunrise and Jaipur's forts in one clean route — without the rushed coach-tour feeling.",
    image: agraImg,
    gallery: [agraImg, jaipurImg],
    bestTime: "October – March",
    idealDays: "4 – 7 days",
    priceFrom: 19999,
    categories: ["Heritage", "Family"],
    highlights: [
      "Old Delhi rickshaw and Jama Masjid",
      "Taj Mahal at sunrise",
      "Agra Fort",
      "Amber Fort and Hawa Mahal",
      "Jaipur's City Palace and bazaars",
      "A Mughlai food walk",
    ],
    route: "Delhi → Agra → Jaipur",
  },
  {
    slug: "punjab",
    name: "Punjab & Amritsar",
    state: "Amritsar · Wagah",
    region: "domestic",
    tagline: "Golden temple, golden food.",
    summary:
      "A short, soulful break: the Golden Temple at night, the Wagah ceremony and the best kulcha of your life.",
    image: punjabImg,
    gallery: [punjabImg],
    bestTime: "October – March",
    idealDays: "2 – 4 days",
    priceFrom: 12999,
    categories: ["Pilgrimage", "Heritage", "Weekend"],
    highlights: [
      "Golden Temple at night and langar",
      "Wagah border ceremony",
      "Jallianwala Bagh",
      "Partition Museum",
      "Amritsari food walk",
      "A slow morning by the sarovar",
    ],
    route: "Amritsar → Wagah → Amritsar",
  },
  {
    slug: "maharashtra",
    name: "Mumbai & Maharashtra",
    state: "Mumbai · Lonavala · Mahabaleshwar",
    region: "domestic",
    tagline: "The weekend that resets everything.",
    summary:
      "From our own doorstep: Mumbai's icons, the Sahyadri hills and strawberry farms. Perfect when you only have two or three days.",
    image: mumbaiImg,
    gallery: [mumbaiImg],
    bestTime: "All year",
    idealDays: "2 – 4 days",
    priceFrom: 8999,
    categories: ["Weekend", "Family", "Beaches"],
    highlights: [
      "Gateway of India and Colaba",
      "Marine Drive at sunset",
      "Lonavala's hills and Bhushi Dam",
      "Mahabaleshwar's viewpoints",
      "Elephanta Caves ferry",
      "Bandra's cafés and markets",
    ],
    route: "Mumbai → Lonavala → Mahabaleshwar",
  },
  {
    slug: "dubai",
    name: "Dubai",
    state: "Marina · Downtown · Desert",
    region: "international",
    tagline: "Big city, bigger skyline.",
    summary:
      "A first international trip that feels familiar and still delivers the wow — Burj Khalifa, desert dunes and a very good beach day.",
    image: dubaiImg,
    gallery: [dubaiImg],
    bestTime: "November – March",
    idealDays: "4 – 6 days",
    priceFrom: 54999,
    categories: ["Family", "City", "Luxury"],
    highlights: [
      "Marina walk and dhow dinner cruise",
      "Burj Khalifa and Dubai Mall",
      "Desert safari with dune bashing",
      "Museum of the Future",
      "Old Dubai and the spice souk",
      "A free beach afternoon",
    ],
    route: "Dubai Marina → Downtown → Desert → Old Dubai",
  },
  {
    slug: "bali",
    name: "Bali",
    state: "Seminyak · Ubud · Nusa Penida",
    region: "international",
    tagline: "Temples, rice terraces, slow mornings.",
    summary:
      "The honeymoon everyone recommends for a reason. We balance Ubud's green quiet with Seminyak's sunsets and one island day.",
    image: baliImg,
    gallery: [baliImg],
    bestTime: "April – October",
    idealDays: "5 – 7 days",
    priceFrom: 49999,
    categories: ["Honeymoon", "Beaches", "Nature"],
    highlights: [
      "Tegalalang rice terraces",
      "Ubud's temples and monkey forest",
      "A Balinese spa afternoon",
      "Nusa Penida island day",
      "Seminyak beach sunset",
      "A private candlelight dinner",
    ],
    route: "Seminyak → Ubud → Nusa Penida → Seminyak",
  },
  {
    slug: "thailand",
    name: "Thailand",
    state: "Bangkok · Krabi · Phuket",
    region: "international",
    tagline: "Street food, islands, easy smiles.",
    summary:
      "Bangkok's energy, then straight to the Andaman for longtail boats and limestone cliffs. Great value for friends and families.",
    image: thailandImg,
    gallery: [thailandImg],
    bestTime: "November – April",
    idealDays: "5 – 7 days",
    priceFrom: 42999,
    categories: ["Beaches", "Friends", "Family"],
    highlights: [
      "Bangkok street food and Asiatique",
      "Grand Palace and Wat Pho",
      "Flight to Krabi or Phuket",
      "Phi Phi island day",
      "Thai massage and beach time",
      "A sunset longtail boat",
    ],
    route: "Bangkok → Krabi → Phi Phi → Phuket",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    state: "Zurich · Lucerne · Zermatt · Montreux",
    region: "international",
    tagline: "The train window is the attraction.",
    summary:
      "Panoramic rail, lakeside towns and mountain air. We plan the trains so you're never rushing with luggage.",
    image: switzerlandImg,
    gallery: [switzerlandImg],
    bestTime: "May – September",
    idealDays: "7 – 9 days",
    priceFrom: 129000,
    categories: ["Honeymoon", "Family", "Luxury"],
    highlights: [
      "Zurich lake and old town",
      "Lucerne and Mount Pilatus",
      "Lauterbrunnen waterfalls",
      "Jungfraujoch — Top of Europe",
      "Glacier Express to Zermatt",
      "Matterhorn and Montreux",
    ],
    route: "Zurich → Lucerne → Interlaken → Zermatt → Montreux",
  },
  {
    slug: "maldives",
    name: "Maldives",
    state: "North & South Male Atolls",
    region: "international",
    tagline: "Nothing to do, beautifully.",
    summary:
      "One resort, one villa, one very good decision. We match the atoll and transfer style to your budget and honeymoon mood.",
    image: maldivesImg,
    gallery: [maldivesImg],
    bestTime: "November – April",
    idealDays: "4 – 6 days",
    priceFrom: 69999,
    categories: ["Honeymoon", "Beaches", "Luxury"],
    highlights: [
      "Seaplane transfer over the atolls",
      "Overwater villa with a private deck",
      "House-reef snorkelling",
      "A sandbank picnic",
      "Sunset dolphin cruise",
      "A spa afternoon over the water",
    ],
    route: "Male → Resort island → Male",
  },
  {
    slug: "japan",
    name: "Japan",
    state: "Tokyo · Hakone · Kyoto · Osaka",
    region: "international",
    tagline: "Old streets, neon nights, quiet trains.",
    summary:
      "A beautifully organised first Japan trip: temples before the crowds, a ryokan night and enough free time to get lost on purpose.",
    image: japanImg,
    gallery: [japanImg],
    bestTime: "March – April · October – November",
    idealDays: "7 – 9 days",
    priceFrom: 145000,
    categories: ["Heritage", "Honeymoon", "Nature"],
    highlights: [
      "Tokyo's Shibuya and Asakusa",
      "A Hakone ryokan and onsen",
      "Shinkansen to Kyoto",
      "Fushimi Inari at sunrise",
      "Arashiyama bamboo grove",
      "Osaka's Dotonbori food street",
    ],
    route: "Tokyo → Hakone → Kyoto → Nara → Osaka",
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);

export type Journey = {
  slug: string;
  title: string;
  destinationSlug: string;
  destinationName: string;
  region: Region;
  days: number;
  nights: number;
  price: number;
  image: string;
  summary: string;
  tags: string[];
  route: string;
  bestTime: string;
  idealFor: string;
  itinerary: { day: number; title: string; body: string }[];
  inclusions: string[];
  exclusions: string[];
};

const domesticInclusions = [
  "Handpicked hotels on twin-sharing basis",
  "Daily breakfast at the hotel",
  "Private car, driver and airport transfers",
  "Local guides for sightseeing",
  "All applicable taxes",
];

const internationalInclusions = [
  "Handpicked hotels on twin-sharing basis",
  "Daily breakfast at the hotel",
  "Airport transfers and inter-city transport",
  "Experience-led sightseeing with local guides",
  "Visa guidance and travel insurance assistance",
];

const standardExclusions = [
  "Flights and train fares unless mentioned",
  "Lunch and dinner unless mentioned",
  "Monument and park entry fees",
  "Personal expenses, tips and shopping",
];

export const journeys: Journey[] = [
  {
    slug: "royal-rajasthan",
    title: "Royal Rajasthan",
    destinationSlug: "rajasthan",
    destinationName: "Rajasthan",
    region: "domestic",
    days: 7,
    nights: 6,
    price: 34999,
    image: rajasthanImg,
    summary:
      "Jaipur, Jodhpur, a desert camp in Jaisalmer and two nights in Udaipur — the full Rajasthan story at a comfortable pace.",
    tags: ["Heritage", "Honeymoon", "Family"],
    route: "Jaipur → Jodhpur → Jaisalmer → Udaipur",
    bestTime: "October – March",
    idealFor: "First-time Rajasthan travellers, couples and families",
    itinerary: [
      {
        day: 1,
        title: "Jaipur, gently",
        body: "Airport pickup, check-in at a heritage haveli, and Nahargarh Fort at sunset.",
      },
      {
        day: 2,
        title: "The Pink City",
        body: "Amber Fort, Hawa Mahal, City Palace and the old bazaars with a local guide.",
      },
      {
        day: 3,
        title: "Blue city, long road",
        body: "Drive to Jodhpur via Ajmer. Mehrangarh, the blue lanes and a rooftop dinner.",
      },
      {
        day: 4,
        title: "Into the Thar",
        body: "On to Jaisalmer. Golden fort, a camel ride and a desert camp with folk music.",
      },
      {
        day: 5,
        title: "Udaipur, by water",
        body: "Drive to Udaipur via Ranakpur's marble temples. Lake Pichola in the evening.",
      },
      {
        day: 6,
        title: "Palaces and craft",
        body: "City Palace, a boat ride, and time with miniature painters and block printers.",
      },
      {
        day: 7,
        title: "One last chai",
        body: "An easy breakfast and transfer to Udaipur airport.",
      },
    ],
    inclusions: domesticInclusions,
    exclusions: [...standardExclusions, "Desert camp upgrades"],
  },
  {
    slug: "kerala-backwaters-hills",
    title: "Kerala: Backwaters & Hills",
    destinationSlug: "kerala",
    destinationName: "Kerala",
    region: "domestic",
    days: 6,
    nights: 5,
    price: 27999,
    image: keralaImg,
    summary:
      "Fort Kochi, Munnar's tea hills, a night on a private houseboat and a quiet beach finish.",
    tags: ["Honeymoon", "Family", "Nature"],
    route: "Kochi → Munnar → Thekkady → Alleppey → Marari",
    bestTime: "September – March",
    idealFor: "Couples, young families and anyone who needs a slow week",
    itinerary: [
      {
        day: 1,
        title: "Fort Kochi",
        body: "Check in, walk the colonial lanes, see the Chinese fishing nets and a Kathakali performance.",
      },
      {
        day: 2,
        title: "Above the clouds",
        body: "Drive to Munnar through spice country. Tea estate walk and a sunset viewpoint.",
      },
      {
        day: 3,
        title: "The forest hour",
        body: "Thekkady. A morning boat safari on Periyar Lake and a spice plantation lunch.",
      },
      {
        day: 4,
        title: "The slow water",
        body: "Board a private houseboat in Alleppey. Lunch cooked on board, sunset on the backwaters.",
      },
      {
        day: 5,
        title: "Salt and sand",
        body: "Marari beach. An Ayurveda massage and absolutely nothing else.",
      },
      {
        day: 6,
        title: "Spice market",
        body: "Drive back to Kochi with a stop at the spice market before departure.",
      },
    ],
    inclusions: domesticInclusions,
    exclusions: standardExclusions,
  },
  {
    slug: "ladakh-high-passes",
    title: "Ladakh: High Passes",
    destinationSlug: "ladakh",
    destinationName: "Ladakh",
    region: "domestic",
    days: 7,
    nights: 6,
    price: 39999,
    image: ladakhImg,
    summary:
      "A properly paced high-altitude route across Leh, Nubra and Pangong — with acclimatisation built in.",
    tags: ["Adventure", "Nature"],
    route: "Leh → Sham Valley → Nubra → Turtuk → Pangong → Leh",
    bestTime: "June – September",
    idealFor: "Adventurous couples, friends and confident families with older children",
    itinerary: [
      {
        day: 1,
        title: "Thin air",
        body: "Arrive in Leh, rest, and take a short evening walk to Shanti Stupa.",
      },
      {
        day: 2,
        title: "Sham Valley",
        body: "Magnetic Hill, Gurudwara Pathar Sahib and the old murals at Alchi.",
      },
      {
        day: 3,
        title: "Over Khardung La",
        body: "Drive to Nubra. Diskit monastery and the dunes at Hunder.",
      },
      {
        day: 4,
        title: "Turtuk",
        body: "The last village before the border. Apricot orchards and a Balti lunch.",
      },
      {
        day: 5,
        title: "Pangong",
        body: "The Shyok route to Pangong. A lakeside camp and an unreasonable number of stars.",
      },
      { day: 6, title: "Blue hour", body: "Sunrise at Pangong, then Chang La back to Leh." },
      { day: 7, title: "Descent", body: "Morning flight out over the Karakoram." },
    ],
    inclusions: [...domesticInclusions, "Inner Line Permits"],
    exclusions: [...standardExclusions, "Oxygen cylinders (available on request)"],
  },
  {
    slug: "kashmir-paradise",
    title: "Kashmir Paradise",
    destinationSlug: "kashmir",
    destinationName: "Kashmir",
    region: "domestic",
    days: 6,
    nights: 5,
    price: 28999,
    image: kashmirImg,
    summary:
      "A houseboat on Dal Lake, gulmarg's gondola and the river valleys of Pahalgam, at a pace that leaves room to breathe.",
    tags: ["Honeymoon", "Family", "Nature"],
    route: "Srinagar → Gulmarg → Pahalgam → Sonamarg → Srinagar",
    bestTime: "April – October",
    idealFor: "Honeymooners, families and summer escapes",
    itinerary: [
      {
        day: 1,
        title: "Dal Lake",
        body: "Airport pickup, check into a houseboat, and an evening shikara ride.",
      },
      {
        day: 2,
        title: "Gulmarg",
        body: "The gondola, meadow walks and a long lunch with the mountains in view.",
      },
      { day: 3, title: "Pahalgam", body: "Betaab Valley, Aru Valley and a river-side evening." },
      {
        day: 4,
        title: "Sonamarg",
        body: "Thajiwas glacier walk and alpine meadows on the road to Ladakh.",
      },
      {
        day: 5,
        title: "Old Srinagar",
        body: "Mughal gardens, the old city and a papier-mâché workshop.",
      },
      {
        day: 6,
        title: "Departure",
        body: "Breakfast on the lake and transfer to Srinagar airport.",
      },
    ],
    inclusions: [...domesticInclusions, "One night on a deluxe houseboat"],
    exclusions: standardExclusions,
  },
  {
    slug: "goa-slow-coast",
    title: "Goa: Slow Coast",
    destinationSlug: "goa",
    destinationName: "Goa",
    region: "domestic",
    days: 4,
    nights: 3,
    price: 14999,
    image: goaImg,
    summary:
      "North Goa energy, Fontainhas' Portuguese lanes and a quiet south beach — a short trip with range.",
    tags: ["Beaches", "Friends", "Honeymoon", "Corporate"],
    route: "North Goa → Old Goa → South Goa",
    bestTime: "November – February",
    idealFor: "Friends, couples and long weekends",
    itinerary: [
      {
        day: 1,
        title: "North Goa",
        body: "Check in, an easy beach afternoon and a sunset shack dinner.",
      },
      {
        day: 2,
        title: "Old Goa",
        body: "The basilica, a Fontainhas walk and a Mandovi river cruise at golden hour.",
      },
      {
        day: 3,
        title: "South Goa",
        body: "Drive south to Palolem or Agonda. A quiet beach lunch and a free evening.",
      },
      { day: 4, title: "Departure", body: "Slow breakfast and airport drop." },
    ],
    inclusions: domesticInclusions,
    exclusions: standardExclusions,
  },
  {
    slug: "himachal-hill-escape",
    title: "Himachal Hill Escape",
    destinationSlug: "himachal",
    destinationName: "Himachal",
    region: "domestic",
    days: 6,
    nights: 5,
    price: 23999,
    image: himachalImg,
    summary:
      "Shimla's verandahs, Manali's cafés and the Atal Tunnel — a hill holiday without the early bus rush.",
    tags: ["Hills", "Family", "Adventure"],
    route: "Shimla → Kufri → Manali → Solang → Sissu",
    bestTime: "March – June · September – November",
    idealFor: "Families, friends and first-time hill travellers",
    itinerary: [
      {
        day: 1,
        title: "Shimla",
        body: "Drive from Chandigarh, check in, then Mall Road and the Ridge.",
      },
      { day: 2, title: "Kufri", body: "Pine forests, Jakhoo temple and a lazy café afternoon." },
      { day: 3, title: "Manali", body: "Drive via Kullu. Old Manali cafés and the Beas river." },
      {
        day: 4,
        title: "Solang and Sissu",
        body: "Solang Valley, Atal Tunnel and the river views at Sissu.",
      },
      { day: 5, title: "Manali, slowly", body: "Hot springs, Hadimba temple and a free evening." },
      { day: 6, title: "Departure", body: "Transfer to Chandigarh or Bhuntar airport." },
    ],
    inclusions: domesticInclusions,
    exclusions: standardExclusions,
  },
  {
    slug: "andaman-blue",
    title: "Andaman Blue",
    destinationSlug: "andaman",
    destinationName: "Andaman",
    region: "domestic",
    days: 6,
    nights: 5,
    price: 32999,
    image: andamanImg,
    summary: "Two islands, three beaches and one reef day — the easiest tropical holiday in India.",
    tags: ["Beaches", "Honeymoon", "Family"],
    route: "Port Blair → Havelock → Neil Island → Port Blair",
    bestTime: "October – May",
    idealFor: "Honeymooners, families and friends",
    itinerary: [
      {
        day: 1,
        title: "Port Blair",
        body: "Arrival, Cellular Jail and the evening light and sound show.",
      },
      {
        day: 2,
        title: "Havelock",
        body: "Ferry across, check in, and Radhanagar Beach at sunset.",
      },
      { day: 3, title: "The reef", body: "Elephant Beach snorkelling and a free afternoon." },
      { day: 4, title: "Neil Island", body: "Bharatpur, Laxmanpur and the natural bridge." },
      { day: 5, title: "Port Blair", body: "Return ferry, Chidiya Tapu and the local market." },
      { day: 6, title: "Departure", body: "Airport drop after breakfast." },
    ],
    inclusions: [...domesticInclusions, "Ferry tickets between islands"],
    exclusions: [...standardExclusions, "Scuba diving and water sports"],
  },
  {
    slug: "meghalaya-cloud-trail",
    title: "Meghalaya Cloud Trail",
    destinationSlug: "meghalaya",
    destinationName: "Meghalaya & Assam",
    region: "domestic",
    days: 6,
    nights: 5,
    price: 29999,
    image: meghalayaImg,
    summary:
      "Shillong, Cherrapunji's waterfalls, living root bridges and the glass-clear Umngot river.",
    tags: ["Hills", "Adventure", "Nature"],
    route: "Guwahati → Shillong → Cherrapunji → Dawki → Shillong",
    bestTime: "October – April",
    idealFor: "Nature lovers, friends and active families",
    itinerary: [
      {
        day: 1,
        title: "Into the hills",
        body: "Guwahati pickup, Umiam Lake stop and Shillong's Police Bazaar.",
      },
      { day: 2, title: "Shillong", body: "Don Bosco Museum and the Laitlum canyons." },
      { day: 3, title: "Cherrapunji", body: "Nohkalikai Falls and the Mawsmai caves." },
      {
        day: 4,
        title: "Root bridges",
        body: "Trek to the double-decker living root bridge with a local guide.",
      },
      {
        day: 5,
        title: "Dawki",
        body: "Umngot river boat ride and a walk through Mawlynnong village.",
      },
      { day: 6, title: "Departure", body: "Drive back to Guwahati airport." },
    ],
    inclusions: [...domesticInclusions, "Local guide for the root bridge trek"],
    exclusions: standardExclusions,
  },
  {
    slug: "kashi-ayodhya-darshan",
    title: "Kashi & Ayodhya Darshan",
    destinationSlug: "varanasi",
    destinationName: "Varanasi & Ayodhya",
    region: "domestic",
    days: 4,
    nights: 3,
    price: 16999,
    image: varanasiImg,
    summary:
      "A comfortable darshan trip with assisted queues, a sunrise boat and a guide who knows the lanes.",
    tags: ["Pilgrimage", "Heritage", "Family"],
    route: "Varanasi → Sarnath → Ayodhya → Varanasi",
    bestTime: "October – March",
    idealFor: "Families, elders and first-time pilgrims",
    itinerary: [
      {
        day: 1,
        title: "Ganga aarti",
        body: "Arrival, hotel check-in and the evening aarti at Dashashwamedh Ghat.",
      },
      {
        day: 2,
        title: "Kashi",
        body: "Sunrise boat, Kashi Vishwanath darshan and Sarnath in the afternoon.",
      },
      {
        day: 3,
        title: "Ayodhya",
        body: "Drive to Ayodhya for Ram Mandir darshan and Hanuman Garhi.",
      },
      {
        day: 4,
        title: "Departure",
        body: "Return to Varanasi, a short food walk and airport drop.",
      },
    ],
    inclusions: [...domesticInclusions, "Assisted darshan arrangements"],
    exclusions: standardExclusions,
  },
  {
    slug: "golden-triangle-first-timers",
    title: "Golden Triangle for First Timers",
    destinationSlug: "golden-triangle",
    destinationName: "Golden Triangle",
    region: "domestic",
    days: 5,
    nights: 4,
    price: 21999,
    image: agraImg,
    summary:
      "Delhi's food, the Taj at sunrise and Jaipur's forts — the classic first India route, properly paced.",
    tags: ["Heritage", "Family"],
    route: "Delhi → Agra → Jaipur",
    bestTime: "October – March",
    idealFor: "First-time India visitors and families",
    itinerary: [
      {
        day: 1,
        title: "Old Delhi",
        body: "Rickshaw through Chandni Chowk, Jama Masjid and India Gate.",
      },
      {
        day: 2,
        title: "Taj at sunrise",
        body: "Drive to Agra, Taj Mahal at first light and Agra Fort.",
      },
      { day: 3, title: "Jaipur", body: "Drive to Jaipur, Amber Fort and Hawa Mahal." },
      { day: 4, title: "The Pink City", body: "City Palace, Jantar Mantar and the bazaars." },
      { day: 5, title: "Departure", body: "Airport drop or an optional extension to Udaipur." },
    ],
    inclusions: domesticInclusions,
    exclusions: standardExclusions,
  },
  {
    slug: "amritsar-weekend",
    title: "Amritsar Weekend",
    destinationSlug: "punjab",
    destinationName: "Punjab & Amritsar",
    region: "domestic",
    days: 3,
    nights: 2,
    price: 12999,
    image: punjabImg,
    summary: "The Golden Temple at night, langar, Wagah and the best kulcha you'll have all year.",
    tags: ["Pilgrimage", "Heritage", "Weekend"],
    route: "Amritsar → Wagah → Amritsar",
    bestTime: "October – March",
    idealFor: "Weekend breaks, families and small groups",
    itinerary: [
      {
        day: 1,
        title: "Golden Temple",
        body: "Arrival, evening darshan and langar at the Golden Temple.",
      },
      {
        day: 2,
        title: "Amritsar",
        body: "Wagah border ceremony, Jallianwala Bagh and an Amritsari food walk.",
      },
      {
        day: 3,
        title: "One last darshan",
        body: "Partition Museum and a slow morning by the sarovar before departure.",
      },
    ],
    inclusions: domesticInclusions,
    exclusions: standardExclusions,
  },
  {
    slug: "mumbai-city-break",
    title: "Mumbai & Lonavala City Break",
    destinationSlug: "maharashtra",
    destinationName: "Mumbai & Maharashtra",
    region: "domestic",
    days: 3,
    nights: 2,
    price: 9999,
    image: mumbaiImg,
    summary: "Our home patch: Mumbai's icons, the Sahyadri hills and a proper weekend reset.",
    tags: ["Weekend", "Family", "City"],
    route: "Mumbai → Lonavala → Mumbai",
    bestTime: "All year",
    idealFor: "Weekend breaks from Thane, Mumbai and Pune",
    itinerary: [
      { day: 1, title: "Mumbai", body: "Gateway of India, Colaba and Marine Drive at sunset." },
      { day: 2, title: "Lonavala", body: "Drive to the hills, Bhushi Dam and a viewpoint picnic." },
      { day: 3, title: "Bandra", body: "Cafés, local markets and a late-afternoon drop." },
    ],
    inclusions: domesticInclusions,
    exclusions: standardExclusions,
  },
  {
    slug: "dubai-first-trip",
    title: "Dubai First Trip",
    destinationSlug: "dubai",
    destinationName: "Dubai",
    region: "international",
    days: 5,
    nights: 4,
    price: 59999,
    image: dubaiImg,
    summary: "Burj Khalifa, the desert and a beach day — a confident first international holiday.",
    tags: ["Family", "City", "Luxury", "Corporate"],
    route: "Dubai Marina → Downtown → Desert → Old Dubai",
    bestTime: "November – March",
    idealFor: "First-time international travellers and families",
    itinerary: [
      { day: 1, title: "Dubai Marina", body: "Arrival, marina walk and a dhow dinner cruise." },
      {
        day: 2,
        title: "Downtown",
        body: "City tour, Burj Khalifa and the Dubai Mall fountain show.",
      },
      {
        day: 3,
        title: "Desert safari",
        body: "Dune bashing, camel ride and a BBQ camp under the stars.",
      },
      {
        day: 4,
        title: "New and old",
        body: "Museum of the Future and the spice souk in old Dubai.",
      },
      { day: 5, title: "Departure", body: "Breakfast and airport drop." },
    ],
    inclusions: internationalInclusions,
    exclusions: [...standardExclusions, "Visa fees"],
  },
  {
    slug: "bali-honeymoon",
    title: "Bali Honeymoon",
    destinationSlug: "bali",
    destinationName: "Bali",
    region: "international",
    days: 6,
    nights: 5,
    price: 54999,
    image: baliImg,
    summary:
      "Ubud's rice terraces, a private villa and Seminyak sunsets — the easy, romantic Bali.",
    tags: ["Honeymoon", "Beaches", "Nature"],
    route: "Seminyak → Ubud → Nusa Penida → Seminyak",
    bestTime: "April – October",
    idealFor: "Honeymooners and couples",
    itinerary: [
      { day: 1, title: "Seminyak", body: "Arrival, villa check-in and a beach sunset." },
      {
        day: 2,
        title: "Ubud",
        body: "Tegalalang rice terraces, monkey forest and a couples' spa.",
      },
      {
        day: 3,
        title: "Ubud",
        body: "A temple morning, a waterfall and a private candlelight dinner.",
      },
      {
        day: 4,
        title: "Nusa Penida",
        body: "A day trip to Kelingking Beach and the island's cliffs.",
      },
      { day: 5, title: "Seminyak", body: "A free beach day and a beach-club sunset." },
      { day: 6, title: "Departure", body: "Slow breakfast and airport transfer." },
    ],
    inclusions: [...internationalInclusions, "One private candlelight dinner"],
    exclusions: [...standardExclusions, "Visa on arrival fees"],
  },
  {
    slug: "thailand-islands-bangkok",
    title: "Thailand: Bangkok & Islands",
    destinationSlug: "thailand",
    destinationName: "Thailand",
    region: "international",
    days: 6,
    nights: 5,
    price: 44999,
    image: thailandImg,
    summary:
      "Temples and street food in Bangkok, then longtail boats and limestone cliffs in the Andaman.",
    tags: ["Beaches", "Friends", "Family", "Corporate"],
    route: "Bangkok → Krabi → Phi Phi → Phuket",
    bestTime: "November – April",
    idealFor: "Friends, couples and families",
    itinerary: [
      { day: 1, title: "Bangkok", body: "Arrival, street food and an evening at Asiatique." },
      { day: 2, title: "Bangkok", body: "Grand Palace, Wat Pho and a sky bar at sunset." },
      { day: 3, title: "South", body: "Flight to Krabi, beach check-in and a free evening." },
      {
        day: 4,
        title: "Islands",
        body: "Phi Phi island day with snorkelling and a longtail boat.",
      },
      { day: 5, title: "Beach day", body: "A Thai massage and nowhere to be." },
      { day: 6, title: "Departure", body: "Transfer to Phuket airport." },
    ],
    inclusions: internationalInclusions,
    exclusions: [...standardExclusions, "Visa fees", "Domestic flight baggage upgrades"],
  },
  {
    slug: "switzerland-by-rail",
    title: "Switzerland by Rail",
    destinationSlug: "switzerland",
    destinationName: "Switzerland",
    region: "international",
    days: 8,
    nights: 7,
    price: 139000,
    image: switzerlandImg,
    summary:
      "Panoramic trains, lakeside towns and a Matterhorn morning — planned so the luggage never rushes.",
    tags: ["Honeymoon", "Family", "Luxury"],
    route: "Zurich → Lucerne → Interlaken → Zermatt → Montreux",
    bestTime: "May – September",
    idealFor: "Couples and families who love scenic rail",
    itinerary: [
      { day: 1, title: "Zurich", body: "Arrival, lake walk and an early night." },
      { day: 2, title: "Lucerne", body: "Chapel Bridge and Mount Pilatus by cogwheel." },
      {
        day: 3,
        title: "Interlaken",
        body: "Train to the Bernese Oberland and Lauterbrunnen's waterfalls.",
      },
      {
        day: 4,
        title: "Jungfraujoch",
        body: "Top of Europe by rail, the ice palace and the glacier plateau.",
      },
      {
        day: 5,
        title: "Zermatt",
        body: "Scenic rail across the Alps and a first look at the Matterhorn.",
      },
      {
        day: 6,
        title: "Gornergrat",
        body: "Sunrise on the mountain, a fondue lunch and a free afternoon.",
      },
      { day: 7, title: "Montreux", body: "Lakeside train, Chillon castle and Lavaux vineyards." },
      { day: 8, title: "Departure", body: "Geneva airport transfer." },
    ],
    inclusions: [...internationalInclusions, "Swiss Travel Pass (8 days)"],
    exclusions: [...standardExclusions, "Visa fees", "Mountain excursion tickets not listed"],
  },
  {
    slug: "maldives-honeymoon",
    title: "Maldives Honeymoon",
    destinationSlug: "maldives",
    destinationName: "Maldives",
    region: "international",
    days: 5,
    nights: 4,
    price: 79999,
    image: maldivesImg,
    summary: "One atoll, one overwater villa and a schedule that refuses to exist.",
    tags: ["Honeymoon", "Beaches", "Luxury"],
    route: "Male → Resort island → Male",
    bestTime: "November – April",
    idealFor: "Honeymooners and anniversary trips",
    itinerary: [
      {
        day: 1,
        title: "Seaplane",
        body: "Male to the resort, villa check-in and a sunset on the deck.",
      },
      { day: 2, title: "The reef", body: "House-reef snorkelling and a couples' spa afternoon." },
      {
        day: 3,
        title: "Sandbank",
        body: "A private sandbank picnic that disappears with the tide.",
      },
      {
        day: 4,
        title: "Nothing scheduled",
        body: "A sunset dolphin cruise and dinner with your feet in the sand.",
      },
      { day: 5, title: "Return", body: "Late checkout and seaplane back to Male." },
    ],
    inclusions: [...internationalInclusions, "Return seaplane transfers"],
    exclusions: standardExclusions,
  },
  {
    slug: "japan-cherry-blossom",
    title: "Japan Cherry Blossom",
    destinationSlug: "japan",
    destinationName: "Japan",
    region: "international",
    days: 8,
    nights: 7,
    price: 149000,
    image: japanImg,
    summary:
      "Tokyo's energy, a Hakone ryokan and Kyoto's temples — an organised first Japan trip with room to wander.",
    tags: ["Heritage", "Honeymoon", "Nature"],
    route: "Tokyo → Hakone → Kyoto → Nara → Osaka",
    bestTime: "March – April · October – November",
    idealFor: "Couples, culture lovers and confident families",
    itinerary: [
      { day: 1, title: "Tokyo", body: "Arrival, Shibuya crossing and a first-night ramen." },
      { day: 2, title: "Tokyo", body: "Asakusa, Ueno and teamLab in the evening." },
      { day: 3, title: "Hakone", body: "Train to Hakone, ryokan check-in and a private onsen." },
      { day: 4, title: "Kyoto", body: "Shinkansen to Kyoto and an evening walk through Gion." },
      { day: 5, title: "Kyoto", body: "Fushimi Inari at sunrise and Arashiyama's bamboo grove." },
      { day: 6, title: "Nara", body: "Deer park, Todai-ji and a slow afternoon." },
      { day: 7, title: "Osaka", body: "Dotonbori food crawl and last-minute shopping." },
      { day: 8, title: "Departure", body: "Airport transfer from Osaka." },
    ],
    inclusions: [...internationalInclusions, "7-day Japan rail pass"],
    exclusions: [...standardExclusions, "Visa fees"],
  },
];

export const getJourney = (slug: string) => journeys.find((j) => j.slug === slug);

export const journeysFor = (destinationSlug: string) =>
  journeys.filter((j) => j.destinationSlug === destinationSlug);

export const featuredJourneys = journeys;

export const domesticDestinations = destinations.filter((d) => d.region === "domestic");
export const internationalDestinations = destinations.filter((d) => d.region === "international");

export const destinationFilters = [
  "All",
  "Hills",
  "Beaches",
  "Heritage",
  "Pilgrimage",
  "Adventure",
  "Honeymoon",
  "Family",
] as const;

export type GeneratedPackage = {
  key: string;
  name: string;
  days: number;
  nights: number;
  price: number;
  style: string;
  includes: string[];
  outline: { day: number; title: string; body: string }[];
};

export function packagesFor(destination: Destination): GeneratedPackage[] {
  const shortDays = destination.region === "domestic" ? 4 : 5;
  const classicDays = destination.region === "domestic" ? 7 : 8;
  const grandDays = destination.region === "domestic" ? 10 : 11;

  const tiers = [
    {
      key: "short",
      name: "The Short Escape",
      days: shortDays,
      price: destination.priceFrom,
      style: "One base, no wasted transfers",
    },
    {
      key: "classic",
      name: "The Classic",
      days: classicDays,
      price: Math.round((destination.priceFrom * 1.6) / 500) * 500,
      style: "The full picture, at a comfortable pace",
    },
    {
      key: "grand",
      name: "The Grand Route",
      days: grandDays,
      price: Math.round((destination.priceFrom * 2.3) / 500) * 500,
      style: "More places, more time, more included",
    },
  ];

  return tiers.map((tier, index) => {
    const outline = Array.from({ length: tier.days }, (_, dayIndex) => {
      if (dayIndex === 0) {
        return {
          day: 1,
          title: `Arrival in ${destination.name}`,
          body: `Airport or station pickup, hotel check-in and an easy first evening in ${destination.name}.`,
        };
      }
      if (dayIndex === tier.days - 1) {
        return {
          day: tier.days,
          title: "Departure",
          body: "Slow breakfast, a final stop if time allows, and your transfer to the airport or station.",
        };
      }
      const highlight =
        destination.highlights[(dayIndex - 1) % destination.highlights.length] ??
        destination.tagline;
      return {
        day: dayIndex + 1,
        title: highlight,
        body: `A full day built around ${destination.name}. Your driver and local guide adjust the pace to suit you.`,
      };
    });

    return {
      ...tier,
      nights: tier.days - 1,
      includes: [
        ...domesticInclusions.slice(0, 3),
        index === 2 ? "Two additional signature experiences" : "One signature experience",
      ],
      outline,
    };
  });
}

export type Experience = {
  slug: string;
  title: string;
  line: string;
  note: string;
  image: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    slug: "family",
    title: "Family holidays",
    line: "Slow days, easy drives and food everyone will eat.",
    note: "Kerala · Rajasthan · Andaman",
    image: keralaImg,
    tags: ["Family"],
  },
  {
    slug: "honeymoon",
    title: "Honeymoons",
    line: "Quiet villas, private dinners, no fixed alarm.",
    note: "Maldives · Bali · Kashmir",
    image: maldivesImg,
    tags: ["Honeymoon"],
  },
  {
    slug: "pilgrimage",
    title: "Pilgrimage",
    line: "Darshan, comfort and someone who knows the queues.",
    note: "Kashi · Ayodhya · Amritsar",
    image: varanasiImg,
    tags: ["Pilgrimage"],
  },
  {
    slug: "adventure",
    title: "Adventure",
    line: "High passes, treks and roads worth the altitude.",
    note: "Ladakh · Himachal · Meghalaya",
    image: ladakhImg,
    tags: ["Adventure"],
  },
  {
    slug: "friends",
    title: "Friends & groups",
    line: "One plan, one price, zero group-chat chaos.",
    note: "Goa · Thailand · Dubai",
    image: goaImg,
    tags: ["Friends"],
  },
  {
    slug: "weekend",
    title: "Weekend breaks",
    line: "Two nights that feel like a proper reset.",
    note: "Lonavala · Goa · Udaipur",
    image: mumbaiImg,
    tags: ["Weekend"],
  },
  {
    slug: "corporate",
    title: "Corporate & incentives",
    line: "Offsites and reward trips, handled end to end.",
    note: "Thailand · Dubai · Bali",
    image: thailandImg,
    tags: ["Corporate"],
  },
];

export const stats = [
  { value: 18, suffix: "+", label: "handpicked destinations", note: "India and abroad" },
  { value: 3, suffix: "", label: "simple steps", note: "From idea to itinerary" },
  { value: 1, suffix: "", label: "point of contact", note: "First call to last drop" },
  { value: 7, suffix: "", label: "days open", note: "10:30 am – 7:00 pm" },
];

export const testimonials = [
  {
    quote:
      "The houseboat was the highlight, but what we remember is how unhurried everything felt. Nobody rushed us once.",
    name: "Priya & Rohan Deshpande",
    trip: "Kerala · 6 days",
    initials: "PD",
  },
  {
    quote:
      "We travelled with two kids and my parents. The driver, the hotels and the pace were all thought through.",
    name: "The Shah family",
    trip: "Rajasthan · 7 days",
    initials: "TS",
  },
  {
    quote:
      "Ladakh was on my list for years. The acclimatisation days made all the difference — I actually enjoyed it.",
    name: "Amit Kulkarni",
    trip: "Ladakh · 7 days",
    initials: "AK",
  },
  {
    quote:
      "They handled the seaplane, the villa and the anniversary dinner. We just showed up and switched off.",
    name: "Sneha & Vivek",
    trip: "Maldives · 5 days",
    initials: "SV",
  },
];

export const faqs = [
  {
    q: "Do you book flights and trains too?",
    a: "Yes. We can include flights, trains, cabs, hotels and sightseeing in one plan. You can also book only the parts you need.",
  },
  {
    q: "Can I change an itinerary I see on the site?",
    a: "Every package here is a starting point. Share your dates, pace and budget and we will adjust the hotels, route and experiences around you.",
  },
  {
    q: "How do I get a price?",
    a: "Send the free plan form or WhatsApp us. We ask a few questions, then share a clear day-by-day plan with inclusions and a final price.",
  },
  {
    q: "Do you help with visas for international trips?",
    a: "Yes. We guide you through the checklist and paperwork for the countries we sell. Visa fees are separate unless your quote says otherwise.",
  },
  {
    q: "What are your office hours?",
    a: "All days, 10:30 am to 7:00 pm. Call 82865 21111 or visit our Thane West office — no appointment needed.",
  },
  {
    q: "How do payments work?",
    a: "You receive a written quote and invoice before paying. Never transfer money to a personal account without confirming the details with our office.",
  },
];

export const journal = [
  {
    title: "The right month for Rajasthan",
    kicker: "Planning · 4 min",
    body: "October to March is the easy answer, but the best month depends on whether you want desert nights, palace crowds or a quieter Udaipur.",
    image: rajasthanImg,
  },
  {
    title: "Kerala in the monsoon?",
    kicker: "Planning · 3 min",
    body: "Yes, if you like green hills, lower prices and short rain showers. Avoid the houseboat if the weather is rough.",
    image: keralaImg,
  },
  {
    title: "Ladakh without the altitude panic",
    kicker: "Field notes · 5 min",
    body: "Two slow days in Leh, plenty of water and no ambitious drives on day one. That is most of the battle.",
    image: ladakhImg,
  },
  {
    title: "A first-timer's guide to Kashi",
    kicker: "Guide · 4 min",
    body: "Where to stay, which ghats to see at sunrise, and how to do darshan with elders without exhausting everyone.",
    image: varanasiImg,
  },
];
