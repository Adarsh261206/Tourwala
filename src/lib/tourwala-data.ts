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
import keralaVarkalaImg from "@/assets/kerala-varkala.jpg";
import ladakhPangongImg from "@/assets/ladakh-pangong.jpg";
import ladakhThikseyImg from "@/assets/ladakh-thiksey.jpg";
import kashmirGulmargImg from "@/assets/kashmir-gulmarg.jpg";
import kashmirPahalgamImg from "@/assets/kashmir-pahalgam.jpg";
import goaBomJesusImg from "@/assets/goa-bom-jesus.jpg";
import goaDudhsagarImg from "@/assets/goa-dudhsagar.jpg";
import himachalShimlaImg from "@/assets/himachal-shimla.jpg";
import himachalSolangImg from "@/assets/himachal-solang.jpg";
import andamanCellularJailImg from "@/assets/andaman-cellular-jail.jpg";
import andamanRadhanagarImg from "@/assets/andaman-radhanagar.jpg";
import meghalayaNohkalikaiImg from "@/assets/meghalaya-nohkalikai.jpg";
import meghalayaDawkiImg from "@/assets/meghalaya-dawki.jpg";
import varanasiAartiImg from "@/assets/varanasi-aarti.jpg";
import varanasiSarnathImg from "@/assets/varanasi-sarnath.jpg";
import delhiIndiaGateImg from "@/assets/delhi-india-gate.jpg";
import jaipurAmberFortImg from "@/assets/jaipur-amber-fort.jpg";
import punjabWagahImg from "@/assets/punjab-wagah.jpg";
import punjabJallianwalaImg from "@/assets/punjab-jallianwala.jpg";
import mumbaiMarineDriveImg from "@/assets/mumbai-marine-drive.jpg";
import mumbaiElephantaImg from "@/assets/mumbai-elephanta.jpg";
import dubaiBurjKhalifaImg from "@/assets/dubai-burj-khalifa.jpg";
import dubaiDesertImg from "@/assets/dubai-desert.jpg";
import baliTegalalangImg from "@/assets/bali-tegalalang.jpg";
import baliUluwatuImg from "@/assets/bali-uluwatu.jpg";
import thailandWatArunImg from "@/assets/thailand-wat-arun.jpg";
import thailandPhiPhiImg from "@/assets/thailand-phi-phi.jpg";
import thailandGrandPalaceImg from "@/assets/thailand-grand-palace.jpg";
import switzerlandMatterhornImg from "@/assets/switzerland-matterhorn.jpg";
import switzerlandJungfraujochImg from "@/assets/switzerland-jungfraujoch.jpg";
import maldivesVillaImg from "@/assets/maldives-villa.jpg";
import maldivesBeachImg from "@/assets/maldives-beach.jpg";
import japanFujiImg from "@/assets/japan-fuji.jpg";
import japanFushimiInariImg from "@/assets/japan-fushimi-inari.jpg";

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
    state: "Jaipur · Jodhpur · Jaisalmer · Udaipur · Pushkar · Mount Abu",
    region: "domestic",
    tagline: "Forts before breakfast, lakes after sunset.",
    summary:
      "The full Rajasthan loop — Jaipur's forts, Jodhpur's blue lanes, a desert night in Jaisalmer and Udaipur's lakes — with Pushkar, Ajmer and Ranakpur folded into the drive.",
    image: udaipurImg,
    gallery: [jaipurImg, udaipurImg, jaisalmerImg, rajasthanImg],
    bestTime: "October – March",
    idealDays: "5 – 9 days",
    priceFrom: 24999,
    categories: ["Heritage", "Family", "Honeymoon"],
    highlights: [
      "Amber Fort, Hawa Mahal, City Palace and Jantar Mantar in Jaipur",
      "Nahargarh Fort and Jal Mahal at sunset",
      "Mehrangarh Fort, Jaswant Thada and Umaid Bhawan in Jodhpur",
      "The blue lanes of Jodhpur's old city",
      "Jaisalmer Fort, Patwon Ki Haveli and Gadisar Lake",
      "Camel ride and a desert camp at Sam Sand Dunes",
      "Lake Pichola, Jag Mandir and the City Palace in Udaipur",
      "Saheliyon Ki Bari and Sajjangarh Monsoon Palace",
      "Ranakpur's marble Jain temples",
      "Brahma Temple and Pushkar Lake",
      "Ajmer Sharif Dargah en route",
      "Optional: Mount Abu, Chittorgarh, Bikaner and Ranthambore",
    ],
    route: "Jaipur → Ajmer → Pushkar → Jodhpur → Jaisalmer → Ranakpur → Udaipur",
  },
  {
    slug: "kerala",
    name: "Kerala",
    state: "Kochi · Munnar · Thekkady · Alleppey · Varkala · Kovalam",
    region: "domestic",
    tagline: "The holiday that teaches you to slow down.",
    summary:
      "Tea hills, a private backwater houseboat and a slow beach finish — plus the spice country, wildlife and Fort Kochi lanes that make Kerala feel like a different India.",
    image: keralaImg,
    gallery: [kerala2Img, munnarImg, keralaImg, keralaVarkalaImg],
    bestTime: "September – March",
    idealDays: "5 – 8 days",
    priceFrom: 21999,
    categories: ["Honeymoon", "Family", "Hills"],
    highlights: [
      "Fort Kochi, Chinese fishing nets and Mattancherry",
      "Kathakali performance and a Kochi spice market walk",
      "Munnar tea estates, Tea Museum and Mattupetty Dam",
      "Eravikulam National Park and Top Station viewpoints",
      "Periyar wildlife boat safari in Thekkady",
      "Spice plantation lunch and a cardamom walk",
      "Private Alleppey houseboat through the backwaters",
      "Kumarakom bird sanctuary and Vembanad Lake",
      "Marari beach, Varkala cliff and Kovalam",
      "Ayurveda massage and a Kerala sadya lunch",
      "Optional: Wayanad, Athirappilly Falls and Thrissur",
    ],
    route: "Kochi → Munnar → Thekkady → Alleppey → Marari / Varkala",
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    state: "Leh · Sham Valley · Nubra · Pangong · Hemis",
    region: "domestic",
    tagline: "Thin air. Wide roads. No noise.",
    summary:
      "A properly paced high-altitude road trip through Leh's monasteries, the dunes of Nubra, the villages of Turtuk and a night beside Pangong — with acclimatisation built in.",
    image: ladakhImg,
    gallery: [ladakh2Img, ladakhImg, ladakhPangongImg, ladakhThikseyImg],
    bestTime: "June – September",
    idealDays: "6 – 9 days",
    priceFrom: 34999,
    categories: ["Adventure", "Hills"],
    highlights: [
      "Leh Palace, Shanti Stupa and the old bazaar",
      "Magnetic Hill, Gurudwara Pathar Sahib and Sangam",
      "Alchi, Likir and Lamayuru monasteries in Sham Valley",
      "Khardung La pass and the road to Nubra",
      "Diskit Monastery and the Hunder sand dunes",
      "Turtuk, the last Balti village before the border",
      "Pangong Tso via the Shyok river route",
      "Chang La and the monasteries of Hemis, Thiksey and Shey",
      "Stok Palace and the Leh market",
      "Optional: Hanle, Tso Moriri and the Zanskar valley",
    ],
    route: "Leh → Sham Valley → Nubra → Turtuk → Pangong → Leh",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    state: "Srinagar · Gulmarg · Pahalgam · Sonamarg · Doodhpathri",
    region: "domestic",
    tagline: "Still water, tall chinars, slow shikaras.",
    summary:
      "Dal Lake mornings, Gulmarg's gondola, the meadows of Pahalgam and the glaciers of Sonamarg — Kashmir at a pace that leaves room for chai and shikara rides.",
    image: kashmirImg,
    gallery: [kashmirImg, kashmirGulmargImg, kashmirPahalgamImg],
    bestTime: "April – October",
    idealDays: "5 – 8 days",
    priceFrom: 24999,
    categories: ["Honeymoon", "Family", "Hills"],
    highlights: [
      "Shikara ride and a houseboat night on Dal Lake",
      "Mughal gardens: Nishat, Shalimar and Chashme Shahi",
      "Shankaracharya Temple and old Srinagar",
      "Hazratbal, Jamia Masjid and papier-mâché workshops",
      "Gulmarg Gondola and Apharwat meadows",
      "Pahalgam's Betaab, Aru and Chandanwari valleys",
      "Baisaran meadow and the Lidder river",
      "Thajiwas Glacier and Zoji La in Sonamarg",
      "Doodhpathri and Yusmarg day trips",
      "Optional: Tulip Garden in spring and Gurez valley",
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
      "North Goa's beach energy, the churches and Portuguese lanes of Old Goa, and the quiet south — with Dudhsagar and spice country if you want a break from the sand.",
    image: goaImg,
    gallery: [goaImg, goaBomJesusImg, goaDudhsagarImg],
    bestTime: "November – February",
    idealDays: "3 – 5 days",
    priceFrom: 12999,
    categories: ["Beaches", "Friends", "Honeymoon"],
    highlights: [
      "Candolim, Baga, Calangute and Anjuna beaches",
      "Chapora Fort and Vagator's sunset cliffs",
      "Basilica of Bom Jesus and Se Cathedral in Old Goa",
      "Fontainhas' Portuguese lanes and Panjim",
      "Mandovi river cruise at golden hour",
      "Palolem and Agonda beaches in South Goa",
      "Cabo de Rama Fort and Colva",
      "Dudhsagar Falls and a spice plantation lunch",
      "Divar and Chorao islands",
      "Optional: Grande Island, Netravali and Galgibaga",
    ],
    route: "North Goa → Old Goa → South Goa",
  },
  {
    slug: "himachal",
    name: "Himachal",
    state: "Shimla · Kufri · Manali · Solang · Sissu",
    region: "domestic",
    tagline: "Pine air, river cafés, big mountain days.",
    summary:
      "Shimla's Ridge, Manali's cafés and the Atal Tunnel — a hill holiday without the early bus rush, with Dharamshala and Spiti as natural extensions.",
    image: himachalImg,
    gallery: [himachalImg, himachalShimlaImg, himachalSolangImg],
    bestTime: "March – June · September – November",
    idealDays: "5 – 8 days",
    priceFrom: 18999,
    categories: ["Hills", "Family", "Adventure"],
    highlights: [
      "Shimla's Mall Road, Ridge and Christ Church",
      "Jakhoo Temple and Kufri's pine forests",
      "Green Valley and Himalayan Nature Park",
      "Old Manali cafés and Hadimba Temple",
      "Jogini Falls and the Beas river",
      "Solang Valley and Atal Tunnel",
      "Sissu's river views and Koksar",
      "Manali hot springs and Tibetan Monastery",
      "Optional: Dharamshala, McLeod Ganj and Triund",
      "Optional: Kasol, Parvati Valley and Spiti",
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
      "Cellular Jail, the reefs of Havelock and the quiet coves of Neil Island — India's easiest tropical holiday, with ferries and beach days worked out.",
    image: andamanImg,
    gallery: [andamanImg, andamanCellularJailImg, andamanRadhanagarImg],
    bestTime: "October – May",
    idealDays: "5 – 8 days",
    priceFrom: 27999,
    categories: ["Beaches", "Honeymoon", "Family"],
    highlights: [
      "Cellular Jail and the light-and-sound show",
      "Corbyn's Cove and Aberdeen Bazaar in Port Blair",
      "Ross Island and North Bay",
      "Radhanagar Beach on Havelock",
      "Elephant Beach snorkelling and Kalapathar",
      "Neil Island's Bharatpur and Laxmanpur beaches",
      "The Natural Bridge at Neil Island",
      "Chidiya Tapu and the Andaman sea views",
      "Optional: Baratang limestone caves and Jolly Buoy",
      "Optional: Little Andaman and Diglipur",
    ],
    route: "Port Blair → Havelock → Neil Island → Port Blair",
  },
  {
    slug: "meghalaya",
    name: "Meghalaya & Assam",
    state: "Guwahati · Shillong · Cherrapunji · Dawki · Mawlynnong",
    region: "domestic",
    tagline: "Clouds you can walk through.",
    summary:
      "Cloud forests, living root bridges and the glass-clear Umngot river — Meghalaya and Assam in one green loop, with Shillong's music and Cherrapunji's waterfalls.",
    image: meghalayaImg,
    gallery: [meghalayaImg, meghalayaNohkalikaiImg, meghalayaDawkiImg],
    bestTime: "October – April",
    idealDays: "6 – 9 days",
    priceFrom: 26999,
    categories: ["Hills", "Adventure", "Nature"],
    highlights: [
      "Kamakhya Temple and Umananda Island in Guwahati",
      "Umiam Lake and Shillong's Police Bazaar",
      "Laitlum Canyons and Elephant Falls",
      "Don Bosco Museum and Shillong's music scene",
      "Nohkalikai Falls and Seven Sisters Falls",
      "Mawsmai Caves and Arwah Cave",
      "Double-decker living root bridge at Nongriat",
      "Umngot River boat ride at Dawki",
      "Mawlynnong, Asia's cleanest village",
      "Krang Suri Falls and Wei Sawdong",
      "Optional: Kaziranga, Majuli and Shillong Peak",
    ],
    route: "Guwahati → Shillong → Cherrapunji → Dawki → Shillong",
  },
  {
    slug: "varanasi",
    name: "Varanasi & Ayodhya",
    state: "Varanasi · Sarnath · Ayodhya",
    region: "domestic",
    tagline: "The oldest city, made easy.",
    summary:
      "A comfortable darshan trip through Kashi's ghats and Ayodhya's Ram Mandir — assisted queues, a sunrise boat and a guide who knows the lanes.",
    image: varanasiImg,
    gallery: [varanasiImg, varanasiAartiImg, varanasiSarnathImg],
    bestTime: "October – March",
    idealDays: "3 – 5 days",
    priceFrom: 14999,
    categories: ["Pilgrimage", "Heritage", "Family"],
    highlights: [
      "Ganga aarti at Dashashwamedh Ghat",
      "Sunrise boat ride on the Ganges",
      "Kashi Vishwanath Temple darshan",
      "Manikarnika and Assi Ghats",
      "Sarnath, Dhamek Stupa and the museum",
      "Ramnagar Fort and Banaras Hindu University",
      "Ayodhya Ram Mandir and Hanuman Garhi",
      "Kanak Bhawan and Nageshwarnath Temple",
      "Saryu river aarti in Ayodhya",
      "Banarasi silk and a local food walk",
      "Optional: Prayagraj Sangam and Vindhyachal",
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
      "Delhi's food and monuments, the Taj Mahal at sunrise and Jaipur's forts — the classic first India route, paced like a holiday rather than a coach tour.",
    image: agraImg,
    gallery: [agraImg, jaipurImg, delhiIndiaGateImg, jaipurAmberFortImg],
    bestTime: "October – March",
    idealDays: "4 – 7 days",
    priceFrom: 19999,
    categories: ["Heritage", "Family"],
    highlights: [
      "India Gate, Red Fort and Jama Masjid in Delhi",
      "Chandni Chowk rickshaw and a Mughlai food walk",
      "Humayun's Tomb, Qutub Minar and Lotus Temple",
      "Taj Mahal at sunrise and Agra Fort",
      "Mehtab Bagh and Fatehpur Sikri",
      "Amber Fort and Maota Lake in Jaipur",
      "Hawa Mahal, City Palace and Jantar Mantar",
      "Jal Mahal and Nahargarh Fort at sunset",
      "Albert Hall Museum and Jaipur's bazaars",
      "Optional: Akshardham, Ranthambore and Pushkar",
    ],
    route: "Delhi → Agra → Jaipur",
  },
  {
    slug: "punjab",
    name: "Punjab & Amritsar",
    state: "Amritsar · Wagah · Tarn Taran",
    region: "domestic",
    tagline: "Golden temple, golden food.",
    summary:
      "The Golden Temple at night, langar, the Wagah ceremony and the best kulcha of your life — a short, soulful break in Punjab.",
    image: punjabImg,
    gallery: [punjabImg, punjabWagahImg, punjabJallianwalaImg],
    bestTime: "October – March",
    idealDays: "2 – 4 days",
    priceFrom: 12999,
    categories: ["Pilgrimage", "Heritage", "Weekend"],
    highlights: [
      "Golden Temple darshan and langar",
      "Jallianwala Bagh",
      "Partition Museum",
      "Wagah border ceremony",
      "Durgiana Temple and Gobindgarh Fort",
      "Sadda Pind living village experience",
      "Amritsari food walk: kulcha, lassi and jalebi",
      "Ram Bagh and Maharaja Ranjit Singh Museum",
      "Optional: Anandpur Sahib, Patiala and Tarn Taran",
    ],
    route: "Amritsar → Wagah → Amritsar",
  },
  {
    slug: "maharashtra",
    name: "Mumbai & Maharashtra",
    state: "Mumbai · Lonavala · Mahabaleshwar · Alibaug",
    region: "domestic",
    tagline: "The weekend that resets everything.",
    summary:
      "Our home patch: Mumbai's icons, the Sahyadri hills and a proper weekend reset — easy to extend to Mahabaleshwar, Alibaug or Matheran.",
    image: mumbaiImg,
    gallery: [mumbaiImg, mumbaiMarineDriveImg, mumbaiElephantaImg],
    bestTime: "All year",
    idealDays: "2 – 4 days",
    priceFrom: 8999,
    categories: ["Weekend", "Family", "Beaches"],
    highlights: [
      "Gateway of India and Colaba Causeway",
      "Marine Drive, Chowpatty and Girgaon",
      "Elephanta Caves ferry from Apollo Bunder",
      "Chhatrapati Shivaji Terminus and Dhobi Ghat",
      "Haji Ali, Siddhivinayak and Bandra",
      "Lonavala's Bhushi Dam and Tiger Point",
      "Karla and Bhaja Buddhist caves",
      "Mahabaleshwar's viewpoints and strawberry farms",
      "Pratapgad Fort and Venna Lake",
      "Optional: Alibaug, Matheran and Nashik vineyards",
    ],
    route: "Mumbai → Lonavala → Mumbai",
  },
  {
    slug: "dubai",
    name: "Dubai",
    state: "Dubai Marina · Downtown · Desert · Old Dubai",
    region: "international",
    tagline: "Big city, bigger skyline.",
    summary:
      "Burj Khalifa, the desert and a beach day — a confident first international holiday, with old Dubai's souks and the Museum of the Future in the mix.",
    image: dubaiImg,
    gallery: [dubaiImg, dubaiBurjKhalifaImg, dubaiDesertImg],
    bestTime: "November – March",
    idealDays: "4 – 6 days",
    priceFrom: 54999,
    categories: ["Family", "City", "Luxury"],
    highlights: [
      "Burj Khalifa and the Dubai Mall fountain",
      "Dubai Marina walk and a dhow dinner cruise",
      "Desert safari with dune bashing and a BBQ camp",
      "Museum of the Future and Dubai Frame",
      "Old Dubai: Al Fahidi, abra and the spice souk",
      "Gold Souk and Dubai Creek",
      "Palm Jumeirah, Atlantis and Burj Al Arab",
      "Jumeirah beach and a free afternoon",
      "Miracle Garden and Global Village (seasonal)",
      "Optional: Abu Dhabi, Louvre and Ferrari World",
    ],
    route: "Dubai Marina → Downtown → Desert → Old Dubai",
  },
  {
    slug: "bali",
    name: "Bali",
    state: "Seminyak · Ubud · Nusa Penida · Uluwatu",
    region: "international",
    tagline: "Temples, rice terraces, slow mornings.",
    summary:
      "Rice terraces, a private villa and Seminyak sunsets — the easy, romantic Bali, with Nusa Penida's cliffs and Uluwatu's Kecak dance.",
    image: baliImg,
    gallery: [baliImg, baliTegalalangImg, baliUluwatuImg],
    bestTime: "April – October",
    idealDays: "5 – 7 days",
    priceFrom: 49999,
    categories: ["Honeymoon", "Beaches", "Nature"],
    highlights: [
      "Tegalalang rice terraces and Ubud Palace",
      "Sacred Monkey Forest and Tegenungan Waterfall",
      "Tirta Empul and Besakih temples",
      "Ubud spa and a private candlelight dinner",
      "Nusa Penida: Kelingking, Broken Beach and Angel's Billabong",
      "Uluwatu Temple and the Kecak sunset",
      "Seminyak Beach and a beach-club sunset",
      "Tanah Lot and Jimbaran seafood",
      "Optional: Mount Batur sunrise and Nusa Dua",
    ],
    route: "Seminyak → Ubud → Nusa Penida → Seminyak",
  },
  {
    slug: "thailand",
    name: "Thailand",
    state: "Bangkok · Krabi · Phi Phi · Phuket",
    region: "international",
    tagline: "Street food, islands, easy smiles.",
    summary:
      "Bangkok's temples and street food, then longtail boats and limestone cliffs in the Andaman — great value for friends, couples and families.",
    image: thailandImg,
    gallery: [thailandImg, thailandWatArunImg, thailandPhiPhiImg, thailandGrandPalaceImg],
    bestTime: "November – April",
    idealDays: "5 – 7 days",
    priceFrom: 42999,
    categories: ["Beaches", "Friends", "Family"],
    highlights: [
      "Grand Palace, Wat Pho and Wat Arun",
      "Bangkok street food and Asiatique",
      "Chatuchak market and a floating market",
      "Krabi's Ao Nang and Railay Beach",
      "Phi Phi island day and Maya Bay",
      "Snorkelling and longtail boat rides",
      "Phuket's Big Buddha and Old Town",
      "Patong Beach and a Thai massage",
      "Optional: James Bond Island and Similan Islands",
    ],
    route: "Bangkok → Krabi → Phi Phi → Phuket",
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    state: "Zurich · Lucerne · Interlaken · Zermatt · Montreux",
    region: "international",
    tagline: "The train window is the attraction.",
    summary:
      "Panoramic rail, lakeside towns and the Matterhorn — planned so the trains, luggage and mountain days never feel rushed.",
    image: switzerlandImg,
    gallery: [switzerlandImg, switzerlandMatterhornImg, switzerlandJungfraujochImg],
    bestTime: "May – September",
    idealDays: "7 – 9 days",
    priceFrom: 129000,
    categories: ["Honeymoon", "Family", "Luxury"],
    highlights: [
      "Zurich's lake and old town",
      "Lucerne: Chapel Bridge, Lion Monument and Mount Pilatus",
      "Interlaken and Lauterbrunnen's waterfalls",
      "Jungfraujoch — Top of Europe",
      "Grindelwald First and Lake Brienz",
      "Zermatt and the Matterhorn",
      "Gornergrat railway and a fondue lunch",
      "Glacier Express scenic rail",
      "Montreux, Chillon Castle and Lavaux vineyards",
      "Optional: Bern, Geneva and Mount Rigi",
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
      "One atoll, one overwater villa and a schedule that refuses to exist — with a seaplane transfer, house-reef snorkelling and a sandbank picnic.",
    image: maldivesImg,
    gallery: [maldivesImg, maldivesVillaImg, maldivesBeachImg],
    bestTime: "November – April",
    idealDays: "4 – 6 days",
    priceFrom: 69999,
    categories: ["Honeymoon", "Beaches", "Luxury"],
    highlights: [
      "Seaplane transfer over the atolls",
      "Overwater villa with a private deck",
      "House-reef snorkelling and diving",
      "Sandbank picnic and sunset dolphin cruise",
      "Spa afternoon over the water",
      "Water sports: kayak, paddleboard and jet ski",
      "Beach dinner and a candlelit evening",
      "Optional: local island visit and Male city tour",
    ],
    route: "Male → Resort island → Male",
  },
  {
    slug: "japan",
    name: "Japan",
    state: "Tokyo · Hakone · Kyoto · Nara · Osaka",
    region: "international",
    tagline: "Old streets, neon nights, quiet trains.",
    summary:
      "Tokyo's energy, a Hakone onsen and Kyoto's temples — an organised first Japan trip with enough free time to get lost on purpose.",
    image: japanImg,
    gallery: [japanImg, japanFujiImg, japanFushimiInariImg],
    bestTime: "March – April · October – November",
    idealDays: "7 – 9 days",
    priceFrom: 145000,
    categories: ["Heritage", "Honeymoon", "Nature"],
    highlights: [
      "Tokyo: Shibuya, Shinjuku and Asakusa",
      "Ueno, Tsukiji and teamLab",
      "Hakone onsen, Lake Ashi and Owakudani",
      "Kyoto: Fushimi Inari and Kiyomizu-dera",
      "Gion, Arashiyama and Kinkaku-ji",
      "Nara's Todai-ji and deer park",
      "Osaka's Dotonbori and Osaka Castle",
      "Shinkansen rides and a ryokan night",
      "Optional: Hiroshima, Miyajima and Mount Fuji",
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
      "Jaipur's forts, a Pushkar detour, Jodhpur's blue lanes, a Jaisalmer desert night and two Udaipur evenings — the full Rajasthan loop at a comfortable pace.",
    tags: ["Heritage", "Honeymoon", "Family"],
    route: "Jaipur → Ajmer → Pushkar → Jodhpur → Jaisalmer → Ranakpur → Udaipur",
    bestTime: "October – March",
    idealFor: "First-time Rajasthan travellers, couples and families",
    itinerary: [
      {
        day: 1,
        title: "Jaipur, gently",
        body: "Airport pickup, heritage haveli check-in, Nahargarh Fort at sunset and a rooftop dinner.",
      },
      {
        day: 2,
        title: "The Pink City",
        body: "Amber Fort and Maota Lake, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal and the old bazaars with a local guide.",
      },
      {
        day: 3,
        title: "Pushkar and the blue city",
        body: "Drive to Jodhpur via Ajmer Sharif Dargah and Pushkar’s Brahma Temple and lake. Evening in Mehrangarh’s blue lanes.",
      },
      {
        day: 4,
        title: "Mehrangarh and the Thar",
        body: "Mehrangarh Fort, Jaswant Thada and Umaid Bhawan. Drive to Jaisalmer for a desert camp, camel ride and folk music at Sam Sand Dunes.",
      },
      {
        day: 5,
        title: "Jaisalmer, then Udaipur",
        body: "Jaisalmer Fort, Patwon Ki Haveli and Gadisar Lake. Drive to Udaipur via Ranakpur’s marble Jain temples; Lake Pichola at sunset.",
      },
      {
        day: 6,
        title: "Udaipur by water",
        body: "City Palace, the Jag Mandir boat ride, Saheliyon Ki Bari and Sajjangarh Monsoon Palace. Bagore Ki Haveli show in the evening.",
      },
      {
        day: 7,
        title: "One last chai",
        body: "An easy breakfast, optional vintage car museum, and transfer to Udaipur airport.",
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
      "Fort Kochi's lanes, Munnar's tea hills, Periyar's wildlife, a private Alleppey houseboat and a slow beach finish in Marari or Varkala.",
    tags: ["Honeymoon", "Family", "Nature"],
    route: "Kochi → Munnar → Thekkady → Alleppey → Marari / Varkala",
    bestTime: "September – March",
    idealFor: "Couples, young families and anyone who needs a slow week",
    itinerary: [
      {
        day: 1,
        title: "Fort Kochi",
        body: "Airport pickup, Fort Kochi walk, Chinese fishing nets, Mattancherry Palace, a Kathakali performance and the spice market.",
      },
      {
        day: 2,
        title: "Above the clouds",
        body: "Drive to Munnar through spice country. Tea Museum, estate walk, Mattupetty Dam and Echo Point.",
      },
      {
        day: 3,
        title: "Munnar’s high points",
        body: "Eravikulam National Park, Top Station and a tea plantation lunch; free evening in Munnar town.",
      },
      {
        day: 4,
        title: "The forest hour",
        body: "Drive to Thekkady. Periyar Lake boat safari, a spice plantation walk and a local cultural show.",
      },
      {
        day: 5,
        title: "The slow water",
        body: "Board a private Alleppey houseboat. Lunch cooked on board, sunset on Vembanad Lake and an optional Kumarakom bird sanctuary stop.",
      },
      {
        day: 6,
        title: "Salt and sand",
        body: "Marari or Varkala beach, an Ayurveda massage and a seafood lunch before your departure transfer.",
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
      "A properly paced high-altitude trip through Leh, Sham Valley, Nubra, Turtuk and Pangong — with acclimatisation and the big monasteries built in.",
    tags: ["Adventure", "Nature"],
    route: "Leh → Sham Valley → Nubra → Turtuk → Pangong → Leh",
    bestTime: "June – September",
    idealFor: "Adventurous couples, friends and confident families with older children",
    itinerary: [
      {
        day: 1,
        title: "Thin air",
        body: "Arrive in Leh, rest, and take a short evening walk to Leh Palace and Shanti Stupa.",
      },
      {
        day: 2,
        title: "Sham Valley",
        body: "Magnetic Hill, Gurudwara Pathar Sahib, the Sangam of Indus and Zanskar, and the Alchi and Likir monasteries.",
      },
      {
        day: 3,
        title: "Over Khardung La",
        body: "Drive to Nubra via Khardung La. Diskit Monastery, the Hunder dunes and an optional double-hump camel ride.",
      },
      {
        day: 4,
        title: "Turtuk",
        body: "The last Balti village before the border. Apricot orchards, a Balti lunch and a slow walk back to Hunder.",
      },
      {
        day: 5,
        title: "Pangong",
        body: "The Shyok river route to Pangong Tso. A lakeside camp and sunset over the changing water.",
      },
      {
        day: 6,
        title: "Blue hour",
        body: "Sunrise at Pangong, then Chang La and the monasteries of Hemis, Thiksey and Shey on the way back to Leh.",
      },
      {
        day: 7,
        title: "Descent",
        body: "Morning flight out over the Karakoram, or a slow day in Leh market before departure.",
      },
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
      "A houseboat on Dal Lake, the Gulmarg gondola, Pahalgam's valleys and Sonamarg's glaciers — with Mughal gardens and old Srinagar in between.",
    tags: ["Honeymoon", "Family", "Nature"],
    route: "Srinagar → Gulmarg → Pahalgam → Sonamarg → Srinagar",
    bestTime: "April – October",
    idealFor: "Honeymooners, families and summer escapes",
    itinerary: [
      {
        day: 1,
        title: "Dal Lake",
        body: "Airport pickup, houseboat check-in, an evening shikara ride and a Kashmiri wazwan dinner.",
      },
      {
        day: 2,
        title: "Mughal Srinagar",
        body: "Nishat, Shalimar and Chashme Shahi gardens, Shankaracharya Temple, Hazratbal and Jamia Masjid; a papier-mâché workshop.",
      },
      {
        day: 3,
        title: "Gulmarg",
        body: "Gondola Phase I and II, Apharwat meadows and a long lunch with mountain views; return to Srinagar or stay in Gulmarg.",
      },
      {
        day: 4,
        title: "Pahalgam",
        body: "Drive via the saffron fields to Pahalgam. Betaab Valley, Aru Valley and Chandanwari; evening by the Lidder river.",
      },
      {
        day: 5,
        title: "Pahalgam to Sonamarg",
        body: "A Baisaran meadow pony ride or a slow Pahalgam morning, then drive to Sonamarg for Thajiwas Glacier and Zoji La views.",
      },
      {
        day: 6,
        title: "Departure",
        body: "Breakfast on the lake, a Mughal garden stop if time allows, and transfer to Srinagar airport.",
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
      "North Goa's beaches, Old Goa's churches and Fontainhas, a Dudhsagar Falls day and the quiet south — a short trip with range.",
    tags: ["Beaches", "Friends", "Honeymoon", "Corporate"],
    route: "North Goa → Old Goa → South Goa",
    bestTime: "November – February",
    idealFor: "Friends, couples and long weekends",
    itinerary: [
      {
        day: 1,
        title: "North Goa",
        body: "Check in, Candolim or Baga beach afternoon, Chapora Fort sunset and a shack dinner.",
      },
      {
        day: 2,
        title: "Old Goa",
        body: "Basilica of Bom Jesus, Se Cathedral, a Fontainhas walk and a Mandovi river cruise at golden hour.",
      },
      {
        day: 3,
        title: "Waterfall and spice",
        body: "Dudhsagar Falls jeep safari and a spice plantation lunch; evening in Palolem or Agonda.",
      },
      {
        day: 4,
        title: "South Goa",
        body: "A slow beach breakfast, Cabo de Rama Fort and Colva before your airport drop.",
      },
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
      "Shimla's Ridge, Kufri's pines, Manali's cafés, Solang Valley and the Atal Tunnel — a hill holiday without the early bus rush.",
    tags: ["Hills", "Family", "Adventure"],
    route: "Shimla → Kufri → Manali → Solang → Sissu",
    bestTime: "March – June · September – November",
    idealFor: "Families, friends and first-time hill travellers",
    itinerary: [
      {
        day: 1,
        title: "Shimla",
        body: "Drive from Chandigarh, check in, then Mall Road, the Ridge and Christ Church; Jakhoo Temple at sunset.",
      },
      {
        day: 2,
        title: "Kufri",
        body: "Pine forests, Green Valley and the Himalayan Nature Park; a lazy café afternoon back in Shimla.",
      },
      {
        day: 3,
        title: "Manali",
        body: "Drive via Kullu. Old Manali cafés, Hadimba Temple and Jogini Falls.",
      },
      {
        day: 4,
        title: "Solang and Sissu",
        body: "Solang Valley, the Atal Tunnel and Sissu’s river views; return to Manali.",
      },
      {
        day: 5,
        title: "Manali, slowly",
        body: "Hot springs, the Tibetan Monastery and a free evening; optional paragliding.",
      },
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
    summary:
      "Cellular Jail, Radhanagar's sunsets, Elephant Beach's reef and Neil Island's quiet coves — ferries and beach days worked out.",
    tags: ["Beaches", "Honeymoon", "Family"],
    route: "Port Blair → Havelock → Neil Island → Port Blair",
    bestTime: "October – May",
    idealFor: "Honeymooners, families and friends",
    itinerary: [
      {
        day: 1,
        title: "Port Blair",
        body: "Arrival, Cellular Jail, Corbyn’s Cove and the evening light-and-sound show.",
      },
      {
        day: 2,
        title: "Havelock",
        body: "Ferry across, check in, and Radhanagar Beach at sunset.",
      },
      {
        day: 3,
        title: "The reef",
        body: "Elephant Beach snorkelling, Kalapathar Beach and a free afternoon.",
      },
      {
        day: 4,
        title: "Neil Island",
        body: "Ferry to Neil, Bharatpur and Laxmanpur beaches, and the Natural Bridge.",
      },
      { day: 5, title: "Port Blair", body: "Return ferry, Chidiya Tapu and Aberdeen Bazaar." },
      {
        day: 6,
        title: "Departure",
        body: "Optional Ross Island and North Bay before the airport drop.",
      },
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
      "Guwahati's temples, Shillong's music, Cherrapunji's waterfalls, the living root bridges and the Umngot river at Dawki.",
    tags: ["Hills", "Adventure", "Nature"],
    route: "Guwahati → Shillong → Cherrapunji → Dawki → Shillong",
    bestTime: "October – April",
    idealFor: "Nature lovers, friends and active families",
    itinerary: [
      {
        day: 1,
        title: "Into the hills",
        body: "Guwahati pickup, Kamakhya Temple and Umananda, then drive to Shillong via Umiam Lake; evening at Police Bazaar.",
      },
      {
        day: 2,
        title: "Shillong",
        body: "Laitlum Canyons, Elephant Falls, Don Bosco Museum and a live-music evening.",
      },
      {
        day: 3,
        title: "Cherrapunji",
        body: "Nohkalikai Falls, Seven Sisters Falls, Mawsmai Caves and Arwah Cave.",
      },
      {
        day: 4,
        title: "Root bridges",
        body: "Trek to the double-decker living root bridge at Nongriat with a local guide; return to Cherrapunji.",
      },
      {
        day: 5,
        title: "Dawki",
        body: "Umngot river boat ride, Mawlynnong village and Krang Suri Falls; back to Shillong.",
      },
      {
        day: 6,
        title: "Departure",
        body: "Drive to Guwahati airport; optional Kaziranga extension.",
      },
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
      "A comfortable darshan trip with assisted queues, a sunrise boat, Kashi's ghats and Ayodhya's Ram Mandir — with a guide who knows the lanes.",
    tags: ["Pilgrimage", "Heritage", "Family"],
    route: "Varanasi → Sarnath → Ayodhya → Varanasi",
    bestTime: "October – March",
    idealFor: "Families, elders and first-time pilgrims",
    itinerary: [
      {
        day: 1,
        title: "Ganga aarti",
        body: "Arrival, hotel check-in, Dashashwamedh Ghat aarti and a boat ride.",
      },
      {
        day: 2,
        title: "Kashi",
        body: "Sunrise boat, Kashi Vishwanath darshan, Manikarnika and Assi Ghats, Sarnath and BHU in the afternoon.",
      },
      {
        day: 3,
        title: "Ayodhya",
        body: "Drive to Ayodhya for Ram Mandir and Hanuman Garhi darshan, Kanak Bhawan and Saryu aarti; return to Varanasi.",
      },
      {
        day: 4,
        title: "Departure",
        body: "Ramnagar Fort or a Banarasi food walk, then the airport drop.",
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
      "Delhi's monuments and food, the Taj at sunrise and Jaipur's forts — the classic first India route, paced like a holiday.",
    tags: ["Heritage", "Family"],
    route: "Delhi → Agra → Jaipur",
    bestTime: "October – March",
    idealFor: "First-time India visitors and families",
    itinerary: [
      {
        day: 1,
        title: "Old Delhi",
        body: "Red Fort, Jama Masjid, a Chandni Chowk rickshaw and a Mughlai food walk; India Gate at sunset.",
      },
      {
        day: 2,
        title: "Taj at sunrise",
        body: "Drive to Agra, Taj Mahal at first light, Agra Fort and Mehtab Bagh; optional Fatehpur Sikri.",
      },
      {
        day: 3,
        title: "Jaipur",
        body: "Drive to Jaipur, Amber Fort and Maota Lake, Jal Mahal and Hawa Mahal.",
      },
      {
        day: 4,
        title: "The Pink City",
        body: "City Palace, Jantar Mantar, Albert Hall and the bazaars; Nahargarh Fort sunset.",
      },
      {
        day: 5,
        title: "Departure",
        body: "Optional Akshardham or Qutub Minar on the way to Delhi airport, or extend to Pushkar.",
      },
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
    summary:
      "The Golden Temple at night, langar, Wagah and the best kulcha you'll have all year — a short, soulful Punjab break.",
    tags: ["Pilgrimage", "Heritage", "Weekend"],
    route: "Amritsar → Wagah → Amritsar",
    bestTime: "October – March",
    idealFor: "Weekend breaks, families and small groups",
    itinerary: [
      {
        day: 1,
        title: "Golden Temple",
        body: "Arrival, evening darshan and langar at the Golden Temple; Jallianwala Bagh.",
      },
      {
        day: 2,
        title: "Amritsar",
        body: "Wagah border ceremony, Partition Museum, Durgiana Temple and Gobindgarh Fort; an Amritsari food walk.",
      },
      {
        day: 3,
        title: "One last darshan",
        body: "Morning Golden Temple, Sadda Pind or Ram Bagh, then departure.",
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
    summary:
      "Mumbai's icons, Marine Drive, Elephanta and a Lonavala hill day — a proper weekend reset from Thane, Mumbai or Pune.",
    tags: ["Weekend", "Family", "City"],
    route: "Mumbai → Lonavala → Mumbai",
    bestTime: "All year",
    idealFor: "Weekend breaks from Thane, Mumbai and Pune",
    itinerary: [
      {
        day: 1,
        title: "Mumbai",
        body: "Gateway of India, Colaba Causeway, Marine Drive and Chowpatty sunset.",
      },
      {
        day: 2,
        title: "Lonavala",
        body: "Bhushi Dam, Karla and Bhaja caves, Tiger Point and a hill picnic; return to Mumbai.",
      },
      {
        day: 3,
        title: "Mumbai",
        body: "Elephanta Caves ferry or Bandra, Haji Ali and Siddhivinayak; airport drop.",
      },
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
    summary:
      "Burj Khalifa, the desert and a beach day — plus old Dubai's souks, the Museum of the Future and a dhow cruise.",
    tags: ["Family", "City", "Luxury", "Corporate"],
    route: "Dubai Marina → Downtown → Desert → Old Dubai",
    bestTime: "November – March",
    idealFor: "First-time international travellers and families",
    itinerary: [
      { day: 1, title: "Dubai Marina", body: "Arrival, marina walk and a dhow dinner cruise." },
      {
        day: 2,
        title: "Downtown",
        body: "Burj Khalifa, Dubai Mall, the fountain show and Dubai Frame.",
      },
      {
        day: 3,
        title: "Desert safari",
        body: "Dune bashing, camel ride, henna and a BBQ camp under the stars.",
      },
      {
        day: 4,
        title: "New and old",
        body: "Museum of the Future, Al Fahidi, an abra ride, the gold and spice souks; Miracle Garden or Global Village if seasonal.",
      },
      {
        day: 5,
        title: "Departure",
        body: "Palm Jumeirah, Atlantis or a beach morning before the airport drop.",
      },
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
      "Ubud's rice terraces, a Nusa Penida island day, Uluwatu's Kecak sunset and Seminyak's beach clubs — the easy, romantic Bali.",
    tags: ["Honeymoon", "Beaches", "Nature"],
    route: "Seminyak → Ubud → Nusa Penida → Seminyak",
    bestTime: "April – October",
    idealFor: "Honeymooners and couples",
    itinerary: [
      { day: 1, title: "Seminyak", body: "Arrival, villa check-in and a beach sunset." },
      {
        day: 2,
        title: "Ubud",
        body: "Tegalalang rice terraces, Monkey Forest, Ubud Palace and Tegenungan Waterfall.",
      },
      {
        day: 3,
        title: "Ubud",
        body: "Tirta Empul, a temple morning and a couples’ spa; private candlelight dinner.",
      },
      {
        day: 4,
        title: "Nusa Penida",
        body: "Kelingking Beach, Broken Beach and Angel’s Billabong.",
      },
      {
        day: 5,
        title: "Uluwatu",
        body: "Uluwatu Temple, the Kecak dance and Jimbaran seafood; back to Seminyak.",
      },
      {
        day: 6,
        title: "Departure",
        body: "Slow breakfast; optional Tanah Lot or a Nusa Dua beach day before the airport transfer.",
      },
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
      "Temples and street food in Bangkok, then Krabi, Phi Phi and Phuket — longtail boats, limestone cliffs and a proper beach finish.",
    tags: ["Beaches", "Friends", "Family", "Corporate"],
    route: "Bangkok → Krabi → Phi Phi → Phuket",
    bestTime: "November – April",
    idealFor: "Friends, couples and families",
    itinerary: [
      { day: 1, title: "Bangkok", body: "Arrival, street food and an evening at Asiatique." },
      {
        day: 2,
        title: "Bangkok",
        body: "Grand Palace, Wat Pho, Wat Arun and a sky bar; optional floating market.",
      },
      {
        day: 3,
        title: "South",
        body: "Flight to Krabi, Ao Nang check-in and Railay Beach sunset.",
      },
      {
        day: 4,
        title: "Islands",
        body: "Phi Phi island day with Maya Bay, snorkelling and a longtail boat.",
      },
      { day: 5, title: "Phuket", body: "Big Buddha, Old Town and Patong Beach; Thai massage." },
      {
        day: 6,
        title: "Departure",
        body: "Transfer to Phuket airport; optional James Bond Island.",
      },
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
      "Zurich, Lucerne, Interlaken, Jungfraujoch, Zermatt and Montreux — panoramic trains, lakeside towns and the Matterhorn, without the luggage rush.",
    tags: ["Honeymoon", "Family", "Luxury"],
    route: "Zurich → Lucerne → Interlaken → Zermatt → Montreux",
    bestTime: "May – September",
    idealFor: "Couples and families who love scenic rail",
    itinerary: [
      { day: 1, title: "Zurich", body: "Arrival, lake walk and the old town." },
      {
        day: 2,
        title: "Lucerne",
        body: "Chapel Bridge, Lion Monument and Mount Pilatus by cogwheel.",
      },
      {
        day: 3,
        title: "Interlaken",
        body: "Train to the Bernese Oberland, Lauterbrunnen’s waterfalls and Trümmelbach.",
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
      { day: 7, title: "Montreux", body: "Lakeside train, Chillon Castle and Lavaux vineyards." },
      { day: 8, title: "Departure", body: "Geneva airport transfer; optional Bern stop." },
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
    summary:
      "One atoll, one overwater villa and a schedule that refuses to exist — seaplane, house reef, sandbank and a sunset dolphin cruise.",
    tags: ["Honeymoon", "Beaches", "Luxury"],
    route: "Male → Resort island → Male",
    bestTime: "November – April",
    idealFor: "Honeymooners and anniversary trips",
    itinerary: [
      {
        day: 1,
        title: "Seaplane",
        body: "Male to the resort, villa check-in and sunset on the deck.",
      },
      { day: 2, title: "The reef", body: "House-reef snorkelling and a couples’ spa afternoon." },
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
      "Tokyo's energy, a Hakone onsen, Kyoto's temples, Nara's deer and Osaka's food — an organised first Japan trip with room to wander.",
    tags: ["Heritage", "Honeymoon", "Nature"],
    route: "Tokyo → Hakone → Kyoto → Nara → Osaka",
    bestTime: "March – April · October – November",
    idealFor: "Couples, culture lovers and confident families",
    itinerary: [
      {
        day: 1,
        title: "Tokyo",
        body: "Arrival, Shibuya crossing, Shinjuku and a first-night ramen.",
      },
      { day: 2, title: "Tokyo", body: "Asakusa, Ueno, Tsukiji and teamLab." },
      {
        day: 3,
        title: "Hakone",
        body: "Train to Hakone, ryokan check-in, Lake Ashi and a private onsen.",
      },
      {
        day: 4,
        title: "Kyoto",
        body: "Shinkansen to Kyoto, Kiyomizu-dera and a Gion evening walk.",
      },
      {
        day: 5,
        title: "Kyoto",
        body: "Fushimi Inari at sunrise, Arashiyama bamboo grove and Kinkaku-ji.",
      },
      { day: 6, title: "Nara", body: "Todai-ji and the deer park; continue to Osaka." },
      {
        day: 7,
        title: "Osaka",
        body: "Dotonbori food crawl, Osaka Castle and the Umeda Sky Building.",
      },
      {
        day: 8,
        title: "Departure",
        body: "Airport transfer from Osaka; optional Hiroshima and Miyajima.",
      },
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
