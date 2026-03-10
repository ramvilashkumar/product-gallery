export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nova Mesh Runner',
    price: 120.0,
    category: 'Footwear',
    description:
      'Ultra-lightweight breathable mesh with responsive carbon-fiber plating for peak performance.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p2',
    name: 'Lunar Peak Parka',
    price: 285.0,
    category: 'Outerwear',
    description:
      'Weather-sealed seams and 800-fill down insulation designed for sub-zero urban exploration.',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1709417596263-a7a965e73314?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1682183948920-16d882bd786d?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p3',
    name: 'Apex Chrono Silver',
    price: 450.0,
    category: 'Accessories',
    description:
      'Precision Japanese movement housed in a brushed surgical-grade stainless steel casing.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p4',
    name: 'Zenith ANC Headphones',
    price: 329.99,
    category: 'Electronics',
    description:
      'Industry-leading noise cancellation with 40-hour battery life and spatial audio support.',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p5',
    name: 'Nomad Leather Weekender',
    price: 195.0,
    category: 'Bags',
    description:
      'Hand-burnished full-grain leather that develops a unique patina over time. TSA approved size.',
    images: [
      'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1511405946472-a37e3b5ccd47?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p6',
    name: 'Core Essential Tee',
    price: 45.0,
    category: 'Apparel',
    description:
      'Heavyweight Peruvian Pima cotton with a relaxed fit and reinforced neckline.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p7',
    name: 'Vantage Polarized Lens',
    price: 160.0,
    category: 'Accessories',
    description:
      'Zero-distortion polarized optics with a lightweight titanium frame.',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p8',
    name: 'Kinect Smart Kettle',
    price: 85.0,
    category: 'Home',
    description:
      'Precision temperature control via app with a sleek matte black finish.',
    images: [
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1738484708927-c1f45df0b56e?q=80&w=2067?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1520981181691-0498b049366e?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p9',
    name: 'Aero Carbon Road Bike',
    price: 2400.0,
    category: 'Fitness',
    description:
      'Wind-tunnel tested frame geometry with wireless electronic shifting.',
    images: [
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1532298229144-0ee0c9e9ad58?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p10',
    name: 'Summit Series Tent',
    price: 550.0,
    category: 'Outdoor',
    description:
      'Four-season expedition tent with geodesic dome stability and ripstop nylon.',
    images: [
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p11',
    name: 'Onyx Espresso Machine',
    price: 899.0,
    category: 'Home',
    description:
      'Dual boiler system with PID temperature control and professional steam wand.',
    images: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p12',
    name: 'GripTech Yoga Mat',
    price: 95.0,
    category: 'Fitness',
    description:
      'Eco-friendly natural rubber with a non-slip top layer for high-intensity practice.',
    images: [
      'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1518611012118-2969c6a2c7a7?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p13',
    name: 'Titan Gaming Chair',
    price: 499.0,
    category: 'Electronics',
    description:
      '4D armrests and cold-cure foam for ergonomic support during marathon sessions.',
    images: [
      'https://images.unsplash.com/photo-1598550476439-6847785fce66?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p14',
    name: 'Arctic Wool Sweater',
    price: 145.0,
    category: 'Apparel',
    description:
      'Ethically sourced Merino wool with a traditional Nordic knit pattern.',
    images: [
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1434389677669-e08b493021fe?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p15',
    name: 'Vanguard Tripod X',
    price: 210.0,
    category: 'Accessories',
    description:
      'Carbon fiber legs with a 360-degree ball head for precision photography.',
    images: [
      'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d84a?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p16',
    name: 'Hydro Flask 32oz',
    price: 45.0,
    category: 'Outdoor',
    description:
      'TempShield insulation keeps drinks cold for 24 hours or hot for 12.',
    images: [
      'https://images.unsplash.com/photo-1602143393494-19280c4477da?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1544003387-42187fe8f2d4?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p17',
    name: 'Pixel Ultra 6',
    price: 899.0,
    category: 'Electronics',
    description:
      'The ultimate smartphone camera experience with AI-driven low light processing.',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1533228891704-fb1ef9464296?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p18',
    name: 'Ember Smart Mug',
    price: 129.0,
    category: 'Home',
    description:
      'Set your precise drinking temperature and keep it there for up to 1.5 hours.',
    images: [
      'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1572715655204-47e297d3b050?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p19',
    name: 'Trailblazer Boots',
    price: 185.0,
    category: 'Footwear',
    description:
      'Vibram outsole and GORE-TEX lining for all-terrain waterproofing.',
    images: [
      'https://images.unsplash.com/photo-1520639889313-727216be35fe?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1542219520-3945df6bc9d5?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p20',
    name: 'Horizon Smart Watch',
    price: 399.0,
    category: 'Electronics',
    description:
      'Sapphire glass with advanced ECG and blood oxygen monitoring.',
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1508685096489-7aac291ba597?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p21',
    name: 'Suede Chelsea Boots',
    price: 210.0,
    category: 'Footwear',
    description:
      'Italian calf suede with a durable Goodyear welt construction.',
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1520639889313-727216be35fe?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p22',
    name: 'Nebula Projector',
    price: 599.0,
    category: 'Electronics',
    description: '4K laser projection in a portable pint-sized form factor.',
    images: [
      'https://images.unsplash.com/photo-1535016120720-40c646bebbfc?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1461151351821-7973497b3c8c?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p23',
    name: 'Oxford Button Down',
    price: 78.0,
    category: 'Apparel',
    description:
      'Wrinkle-resistant pinpoint cotton tailored for a modern slim fit.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1621072156002-e2fcceddf5d7?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p24',
    name: 'Gravity Weighted Blanket',
    price: 189.0,
    category: 'Home',
    description: 'Promotes deep sleep using deep pressure touch stimulation.',
    images: [
      'https://images.unsplash.com/photo-1584108190583-6169bb01e397?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1520206183501-b80af970d8c4?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1510925758641-869d353cecc7?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p25',
    name: 'Velocity Cycling Jersey',
    price: 110.0,
    category: 'Fitness',
    description:
      'Aerodynamic Italian fabric with UV protection and moisture wicking.',
    images: [
      'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p26',
    name: 'Kevlar Carry-On',
    price: 350.0,
    category: 'Bags',
    description:
      'Virtually indestructible shell with integrated USB charging port.',
    images: [
      'https://images.unsplash.com/photo-1565026073747-493a73db1822?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1565026053911-6657257e2924?auto=format&q=80&w=800',
    ],
  },
  {
    id: 'p27',
    name: 'Walnut Desk Organizer',
    price: 65.0,
    category: 'Accessories',
    description:
      'Sustainably harvested solid walnut with magnetic cable management.',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&q=80&w=800',
      'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&q=80&w=800',
    ],
  },
];
