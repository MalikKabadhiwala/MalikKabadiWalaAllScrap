// Scrap Catalog and Live Market Rates for Malik Kabadi Wala All Scrap
// Bishanpura, Sector 58, Noida | Phone: 9599122595 | Email: am513077@gmail.com

export const scrapRatesData = [
  // Metals
  { 
    id: 'iron', 
    name: 'Iron Scrap', 
    category: 'metals', 
    rate: 35, 
    unit: 'kg', 
    icon: 'Hammer', 
    min: '20 kg', 
    desc: 'Heavy iron, angles, pipes, rods, window grills, machinery scrap, structural iron.',
    badge: 'Popular'
  },
  { 
    id: 'copper', 
    name: 'Copper Scrap & Wires', 
    category: 'metals', 
    rate: 490, 
    unit: 'kg', 
    icon: 'Zap', 
    min: '2 kg', 
    desc: 'Heavy armature copper wire, motor winding, clean pipes, utensils, industrial copper.',
    badge: 'Highest Price'
  },
  { 
    id: 'brass', 
    name: 'Brass Scrap & Utensils', 
    category: 'metals', 
    rate: 350, 
    unit: 'kg', 
    icon: 'Award', 
    min: '2 kg', 
    desc: 'Brass utensils, sanitary fittings, valves, decorative items, hardware brass.',
    badge: 'Best Rate'
  },
  { 
    id: 'aluminium', 
    name: 'Aluminium Scrap', 
    category: 'metals', 
    rate: 135, 
    unit: 'kg', 
    icon: 'Layers', 
    min: '5 kg', 
    desc: 'Aluminium sheets, utensils, sliding window channels, ladder sections, alloy castings.',
    badge: ''
  },
  { 
    id: 'steel', 
    name: 'Stainless Steel Scrap', 
    category: 'metals', 
    rate: 48, 
    unit: 'kg', 
    icon: 'Shield', 
    min: '5 kg', 
    desc: 'Stainless steel kitchenware, racks, commercial food grade containers, railings, sheet scrap.',
    badge: ''
  },
  { 
    id: 'tin', 
    name: 'Tin & Metal Sheets', 
    category: 'metals', 
    rate: 22, 
    unit: 'kg', 
    icon: 'Box', 
    min: '10 kg', 
    desc: 'Oil containers, food cans, light packaging tin sheets, roof sheets.',
    badge: ''
  },

  // Paper & Cardboard
  { 
    id: 'newspaper', 
    name: 'Newspaper Scrap', 
    category: 'paper', 
    rate: 16, 
    unit: 'kg', 
    icon: 'Newspaper', 
    min: '10 kg', 
    desc: 'Clean daily newspapers, white print paper, clean and dry bundles.',
    badge: 'High Demand'
  },
  { 
    id: 'cardboard', 
    name: 'Cardboard & Corrugated Boxes', 
    category: 'paper', 
    rate: 11, 
    unit: 'kg', 
    icon: 'Package', 
    min: '15 kg', 
    desc: 'E-commerce packaging boxes, corrugated delivery cartons, grocery boxes.',
    badge: ''
  },
  { 
    id: 'books', 
    name: 'Old Books & Office Records', 
    category: 'paper', 
    rate: 13, 
    unit: 'kg', 
    icon: 'BookOpen', 
    min: '10 kg', 
    desc: 'School and college textbooks, office record files, notebooks, shredded documents.',
    badge: ''
  },
  { 
    id: 'magazines', 
    name: 'Magazines & Mixed Paper', 
    category: 'paper', 
    rate: 12, 
    unit: 'kg', 
    icon: 'FileText', 
    min: '10 kg', 
    desc: 'Glossy paper, brochures, catalogs, mixed commercial paper shredding.',
    badge: ''
  },

  // Electronics & Batteries
  { 
    id: 'battery', 
    name: 'Inverter & Automotive Batteries', 
    category: 'electronics', 
    rate: 88, 
    unit: 'kg', 
    icon: 'BatteryCharging', 
    min: '1 Pc', 
    desc: 'Lead-acid vehicle, motorcycle, solar, and home inverter batteries.',
    badge: 'Spot Cash'
  },
  { 
    id: 'laptop', 
    name: 'Scrap Laptops', 
    category: 'electronics', 
    rate: 550, 
    unit: 'piece', 
    icon: 'Laptop', 
    min: '1 Pc', 
    desc: 'Broken, obsolete, non-working or dead laptops with motherboard.',
    badge: ''
  },
  { 
    id: 'cpu', 
    name: 'Desktop CPU Cabinets', 
    category: 'electronics', 
    rate: 450, 
    unit: 'piece', 
    icon: 'Monitor', 
    min: '1 Pc', 
    desc: 'Computer CPU towers, power supplies, internal boards, computer scrap.',
    badge: ''
  },
  { 
    id: 'ups', 
    name: 'Old UPS Units & Stabilizers', 
    category: 'electronics', 
    rate: 220, 
    unit: 'piece', 
    icon: 'Cpu', 
    min: '1 Pc', 
    desc: 'Computer backup UPS systems, voltage stabilizers with copper/aluminium coils.',
    badge: ''
  },
  { 
    id: 'ewaste', 
    name: 'Mixed E-Waste & Cables', 
    category: 'electronics', 
    rate: 45, 
    unit: 'kg', 
    icon: 'Radio', 
    min: '5 kg', 
    desc: 'Mixed electronic accessories, modems, chargers, circuit boards, discarded wiring.',
    badge: ''
  },

  // Home Appliances Scrap (Strictly bought for metal/salvage scrap, NOT repaired or serviced)
  { 
    id: 'scrap_ac', 
    name: 'Scrap Air Conditioner Units', 
    category: 'appliances', 
    rate: 3600, 
    unit: 'piece', 
    icon: 'Snowflake', 
    min: '1 Pc', 
    desc: 'Defunct Split or Window AC units purchased solely as scrap metal and copper salvage. No repairs or servicing provided.',
    badge: 'Instant Buying'
  },
  { 
    id: 'refrigerator', 
    name: 'Scrap Refrigerators', 
    category: 'appliances', 
    rate: 1100, 
    unit: 'piece', 
    icon: 'Archive', 
    min: '1 Pc', 
    desc: 'Single or double-door damaged refrigerators bought for metal and compressor salvage.',
    badge: ''
  },
  { 
    id: 'washing_machine', 
    name: 'Scrap Washing Machines', 
    category: 'appliances', 
    rate: 850, 
    unit: 'piece', 
    icon: 'Disc', 
    min: '1 Pc', 
    desc: 'Discarded automatic or semi-automatic washing machine bodies for metal and motor salvage.',
    badge: ''
  },
  { 
    id: 'geyser', 
    name: 'Scrap Water Heaters & Geysers', 
    category: 'appliances', 
    rate: 350, 
    unit: 'piece', 
    icon: 'Droplet', 
    min: '1 Pc', 
    desc: 'Old domestic water heaters with copper or metal salvage interior.',
    badge: ''
  },
  { 
    id: 'cooler', 
    name: 'Scrap Metal Coolers', 
    category: 'appliances', 
    rate: 550, 
    unit: 'piece', 
    icon: 'Wind', 
    min: '1 Pc', 
    desc: 'Corroded metal room cooler bodies with pump and scrap motor.',
    badge: ''
  }
];

export const scrapCategories = [
  {
    id: 'metal-scrap',
    title: 'Metal Scrap',
    subtitle: 'Iron, Steel, Copper, Brass & Aluminium',
    description: 'We purchase all ferrous and non-ferrous scrap metals with 100% accurate digital weighing scales and instant cash or digital UPI payout.',
    items: ['Heavy Iron & Construction Rods', 'Copper Wire & Motor Winding', 'Brass Utensils & Pipe Fittings', 'Aluminium Frames & Sheet Metal', 'Stainless Steel Railings & Utensils'],
    image: '/images/scrap/category-metal-scrap.jpg',
    icon: 'Hammer',
    badge: 'Top Volume'
  },
  {
    id: 'paper-scrap',
    title: 'Paper & Cardboard Scrap',
    subtitle: 'Newspapers, Shipping Cartons & Office Paper',
    description: 'Clean eco-friendly paper recycling. We buy large newspaper bundles, e-commerce carton boxes, textbooks, and commercial archives.',
    items: ['Daily Newspaper Collections', 'Online Shipping Delivery Cartons', 'School & College Old Books', 'Confidential Commercial Records', 'Magazines & Paper Shredding'],
    image: '/images/scrap/category-paper-scrap.jpg',
    icon: 'Newspaper',
    badge: 'Eco Friendly'
  },
  {
    id: 'ewaste-scrap',
    title: 'E-Waste & Electronics',
    subtitle: 'Laptops, Desktop Towers, Batteries & Circuit Boards',
    description: 'Responsible electronic waste disposal for households, IT corporate offices, and tech institutions across Noida.',
    items: ['Old Laptops & Desktop Towers', 'Inverter & Automotive Batteries', 'Computer Servers & Network UPS', 'Motherboards & Printed Circuit Boards', 'Industrial Cable Wire Bundles'],
    image: '/images/scrap/category-ewaste-scrap.jpg',
    icon: 'Cpu',
    badge: 'High Value'
  },
  {
    id: 'appliances-scrap',
    title: 'Scrap Domestic Appliances',
    subtitle: 'Refrigerators, Washing Machines & Old AC Bodies',
    description: 'Sell damaged or unwanted appliances strictly as recyclable metal scrap. Immediate spot payout right at your doorstep.',
    items: ['Scrap AC Units (Metal & Compressor Salvage)', 'Old Non-working Refrigerators', 'Damaged Washing Machines', 'Old Geysers & Heating Tanks', 'Metal Room Coolers'],
    image: '/images/scrap/category-appliances-scrap.jpg',
    icon: 'PackageCheck',
    badge: 'Doorstep Pickup'
  },
  {
    id: 'office-dismantling',
    title: 'Corporate Office Scrap & Dismantling',
    subtitle: 'Workstations, Partitions, Server Racks & Wiring',
    description: 'Comprehensive office decommissioning, floor dismantling, workstation clearance, and asset disposal with formal GST invoicing.',
    items: ['Modular Office Workstations', 'False Ceilings & Aluminium Partitions', 'Server Cabinets & Heavy Cables', 'Conference Tables & Metal Chairs', 'Commercial Electrical Switchgear'],
    image: '/images/scrap/category-office-dismantling.jpg',
    icon: 'Building2',
    badge: 'Bulk Commercial'
  },
  {
    id: 'factory-scrap',
    title: 'Industrial & Factory Scrap',
    subtitle: 'Machinery, Fabrication Offcuts & Structural Metal',
    description: 'Turnkey industrial scrap lifting for manufacturing facilities, warehouses, and workshops across Noida Sector 58, 62, 63, and NCR.',
    items: ['Heavy Industrial Machinery & Lathes', 'Iron Turnings & Sheet Trimmings', 'Demolition Scrap & Structural Sheds', 'Industrial Motors & Transformers', 'Bulk Metal Loads with Weighbridge Slip'],
    image: '/images/scrap/category-factory-scrap.jpg',
    icon: 'Factory',
    badge: 'Weighbridge Certified'
  }
];

export const whyChooseUsList = [
  {
    title: '100% Accurate Digital Scales',
    subtitle: 'Transparent Electronic Weighing',
    desc: 'Our pickup staff carries certified electronic digital weighing scales right in front of your eyes. No manual spring scale cheating or guesswork.',
    icon: 'Scale'
  },
  {
    title: 'Instant Cash & Digital UPI Payout',
    subtitle: 'Spot Payment Before Loading',
    desc: 'Receive immediate payment right after weighing via Cash in hand or instant UPI transfer (Google Pay, PhonePe, Paytm, or direct IMPS transfer).',
    icon: 'Wallet'
  },
  {
    title: 'Zero Doorstep Pickup Charges',
    subtitle: '100% Free Doorstep Collection',
    desc: 'We never charge for visits, inspection, weighing, or vehicle loading. The rate you see is the exact rate you receive.',
    icon: 'Truck'
  },
  {
    title: 'Best Market Rates Guaranteed',
    subtitle: 'Daily Wholesale Market Benchmark',
    desc: 'We monitor wholesale recycling markets daily to offer the most competitive scrap payout across Noida, Greater Noida, and Ghaziabad.',
    icon: 'TrendingUp'
  },
  {
    title: 'Verified & Courteous Staff',
    subtitle: 'Professional Doorstep Service',
    desc: 'Our uniformed pickup team is background-checked, punctual, polite, and handles all heavy lifting and vehicle loading safely.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Eco-Friendly Recycling Mission',
    subtitle: 'Zero Landfill Commitment',
    desc: 'Every kilogram of scrap collected is segregated and delivered to authorized recycling processing mills, saving natural resources.',
    icon: 'Recycle'
  }
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Schedule Free Pickup',
    subtitle: 'Via Call, WhatsApp, or Online Form',
    desc: 'Provide your address in Noida or NCR, approximate scrap items, and your preferred pickup date and time window.',
    icon: 'CalendarCheck'
  },
  {
    step: '02',
    title: 'Doorstep Digital Weighing',
    subtitle: 'At Your Chosen Time',
    desc: 'Our staff arrives at your location with calibrated digital weighing balances and weighs each material transparently.',
    icon: 'Scale'
  },
  {
    step: '03',
    title: 'Instant Cash or UPI Payment',
    subtitle: 'Spot Settlement & Loading',
    desc: 'Receive your payment instantly on the spot via Cash or UPI while our team packs and loads the scrap into our vehicle.',
    icon: 'IndianRupee'
  }
];

export const noidaLocalities = [
  { name: 'Bishanpura (Sector 58)', status: 'Main Hub - Express 30-Minute Pickup' },
  { name: 'Sector 55 & 56', status: 'Available Daily' },
  { name: 'Sector 57, 59 & 60', status: 'Available Daily' },
  { name: 'Sector 61 & 62 (IT Parks)', status: 'Available Daily' },
  { name: 'Sector 63 (Industrial Area)', status: 'Available Daily - Bulk Specialist' },
  { name: 'Sector 18, 15 & 16', status: 'Available Daily' },
  { name: 'Sector 27, 29, 37 & 41', status: 'Available Daily' },
  { name: 'Sector 74, 75, 76, 77, 78', status: 'Society Doorstep Pickup' },
  { name: 'Sector 120, 121 & 122', status: 'Available Daily' },
  { name: 'Sector 137, 142 & Expressway', status: 'Available Daily' },
  { name: 'Noida Extension / Greater Noida West', status: 'Express Pickup' },
  { name: 'Indirapuram, Vaishali & Vasundhara', status: 'Available Daily' }
];

export const clientReviews = [
  {
    name: 'Vikram Sharma',
    role: 'Homeowner',
    location: 'Sector 62, Noida',
    rating: 5,
    date: '2 days ago',
    comment: 'Sold 85 kg of iron grills and cartons. Arrived right on time with digital scales and paid instantly via UPI. Very honest service!',
    type: 'Household Scrap'
  },
  {
    name: 'Amitabh Verma',
    role: 'Resident',
    location: 'Bishanpura, Sector 58',
    rating: 5,
    date: '1 week ago',
    comment: 'Best scrap rates in Sector 58 Noida for inverter batteries and copper. Accurate weighing and instant spot cash payment!',
    type: 'Batteries & Copper'
  },
  {
    name: 'Sunil Choudhary',
    role: 'Facility Manager',
    location: 'Sector 63 Industrial Area',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Dismantled 30 office workstations cleanly. Everything was weighed accurately on electronic scales with a formal bill.',
    type: 'Commercial Office Scrap'
  },
  {
    name: 'Pooja Gupta',
    role: 'Society Resident',
    location: 'Gaur City / Noida Extension',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Booked pickup via WhatsApp. Arrived within 2 hours, weighed with electronic scales, and cleared our balcony. 10/10 service!',
    type: 'Paper & Appliance Scrap'
  },
  {
    name: 'Rajesh Aggarwal',
    role: 'Factory Owner',
    location: 'Sector 63 Industrial Area',
    rating: 5,
    date: '4 days ago',
    comment: 'Sold over 350 kg of manufacturing iron offcuts and machinery parts. Prompt doorstep lifting with weighbridge slips and digital payment.',
    type: 'Industrial Iron Scrap'
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Apartment Resident',
    location: 'Sector 137, Noida Expressway',
    rating: 5,
    date: '1 week ago',
    comment: 'Called for old newspapers, cartons, and a scrap metal cooler. Their team was polite, weighed accurately on digital scales, and paid spot cash.',
    type: 'Paper & Household Scrap'
  },
  {
    name: 'Mohit Singhania',
    role: 'IT Admin',
    location: 'Sector 62 IT Park, Noida',
    rating: 5,
    date: '5 days ago',
    comment: 'Handed over obsolete desktop towers, UPS systems, and server cables. Transparent per-item pricing and instant corporate UPI settlement.',
    type: 'E-Waste & IT Scrap'
  },
  {
    name: 'Kavita Chauhan',
    role: 'Homeowner',
    location: 'Sector 76, Noida',
    rating: 5,
    date: '3 days ago',
    comment: 'Cleared our balcony of old iron flower racks, aluminium window frames, and brass utensils. 100% fair weighing right at our doorstep!',
    type: 'Metal & Aluminium Scrap'
  },
  {
    name: 'Deepak Rawat',
    role: 'Workshop Supervisor',
    location: 'Bishanpura, Sector 58',
    rating: 5,
    date: '6 days ago',
    comment: 'Local Bishanpura service. Arrived in 20 minutes with a digital balance for heavy copper motor coils and truck batteries. Best prices in town.',
    type: 'Copper & Batteries'
  }
];

export const faqList = [
  {
    question: 'How do you measure the weight of scrap items?',
    answer: 'We use certified electronic digital weighing scales that our staff brings directly to your doorstep. You can inspect the tare weight (zero calibration) before we weigh each scrap item in front of you. We never use old manual spring scales.'
  },
  {
    question: 'Are there any doorstep pickup or transportation charges?',
    answer: 'No! Doorstep pickup, inspection, digital weighing, and vehicle loading are 100% FREE. There are zero hidden fees or deductions. You receive the full rate for every single kilogram.'
  },
  {
    question: 'Does Malik Kabadi Wala perform air conditioner repair or servicing?',
    answer: 'No. We are strictly a scrap dealer and scrap buyer. We do NOT provide AC repair, AC installation, servicing, or gas refilling. We only buy old, non-functional, junk, or damaged air conditioner units purely as recyclable metal, copper, and compressor scrap material.'
  },
  {
    question: 'How quickly can your collection team arrive in Noida Sector 58 and nearby areas?',
    answer: 'Our primary base is located in Bishanpura, Sector 58, Noida. For Sector 58, 59, 60, 61, 62, and 63, we routinely offer same-day collection within 30 to 90 minutes. For other Noida and NCR sectors, we schedule morning or afternoon appointments according to your convenience.'
  },
  {
    question: 'How is payment delivered to the customer?',
    answer: 'Payment is delivered immediately on the spot before we load the scrap into our collection vehicle. You can choose Cash in hand, or instant digital transfer via Google Pay, PhonePe, Paytm, or direct IMPS bank transfer.'
  },
  {
    question: 'What is the minimum quantity of scrap required for a free doorstep pickup?',
    answer: 'For general household scrap (metals, newspapers, cardboard), our standard pickup threshold is approximately 20 kg. For heavy items like scrap inverter batteries, scrap appliances (refrigerators, scrap AC units, washing machines), or IT computer scrap, even a single item qualifies for free doorstep collection!'
  },
  {
    question: 'Do you buy commercial, factory, and office dismantling scrap?',
    answer: 'Yes! We specialize in bulk commercial scrap, factory machine dismantling, office floor clearance, warehouse cleanouts, and residential society collection drives with weighbridge slips and formal invoicing.'
  }
];
