const servicesData = [
  // HAIR CRAFT
  { category: "HAIR CRAFT", name: "Hair Cut Simple", desc: "Without styling & blow-dry", price: 450 },
  { category: "HAIR CRAFT", name: "Hair Cut (with blow-dry)", desc: "Professional hair cut finished with blow-dry", price: 500 },
  { category: "HAIR CRAFT", name: "Hair Cut (with styling)", desc: "Precision haircut followed by custom styling", price: 550 },
  { category: "HAIR CRAFT", name: "Fade Hair Cut / Long Hair", desc: "Classic fade or specialty cut for longer hair lengths", price: 650 },
  { category: "HAIR CRAFT", name: "Hair Cut by Exclusive Stylist (Simple)", desc: "Simple cut by our master/senior stylist", price: 550 },
  { category: "HAIR CRAFT", name: "Hair Cut by Exclusive Stylist (Fade/Long)", desc: "Fade or long hair cut by our master/senior stylist", price: 700 },
  { category: "HAIR CRAFT", name: "Side Round", desc: "Clean up and rounding of sideburns and neckline", price: 200 },
  { category: "HAIR CRAFT", name: "Head Shave", desc: "Classic blade shave for a clean head profile", price: 450 },
  { category: "HAIR CRAFT", name: "Head Trimming", desc: "Clippers trim for consistent short hair length", price: 350 },
  { category: "HAIR CRAFT", name: "Head Wash / Conditioning (Towel Dry)", desc: "Deep wash and hair conditioning with towel dry", price: 100 },
  { category: "HAIR CRAFT", name: "Head Wash / Conditioning (Blow Dry)", desc: "Deep wash, conditioning and styling blow dry", price: 200 },

  // CUT FOR HIM & HER
  { category: "CUT FOR HIM & HER", name: "Baby Cut (For Him)", desc: "Quick and gentle haircut designed for young boys", price: 400 },
  { category: "CUT FOR HIM & HER", name: "Baby Cut (For Her)", desc: "Haircut designed for young girls", price: 500 },
  { category: "CUT FOR HIM & HER", name: "Baby Cut (For Her Long Hair)", desc: "Specialty cut for young girls with long hair", price: 950 },
  { category: "CUT FOR HIM & HER", name: "Cut For Girls (Without Styling)", desc: "Professional hair cutting for girls", price: 3000 },

  // HAIR STYLING
  { category: "HAIR STYLING", name: "Hair Styling Simple", desc: "Standard styling with gel, wax or spray", price: 350 },
  { category: "HAIR STYLING", name: "Hair Styling by Exclusive Stylist", desc: "Premium styling session with a senior specialist", price: 400 },
  { category: "HAIR STYLING", name: "Colour Spray", desc: "Temporary color styling spray application", price: 300 },
  { category: "HAIR STYLING", name: "Blow Dry Short Hair", desc: "Standard blow-dry styling for short hair", price: 250 },
  { category: "HAIR STYLING", name: "Blow Dry Long Hair", desc: "Standard blow-dry styling for long hair", price: 500 },
  { category: "HAIR STYLING", name: "Iron for Long Hair", desc: "Straightening or curling iron for longer locks", price: 1500 },
  { category: "HAIR STYLING", name: "Styling with Hair Fiber", desc: "Volumizing styling using high-quality hair fibers", price: 650 },

  // BEARD
  { category: "BEARD", name: "Classic Shave", desc: "Traditional clean shave with hot towel prep", price: 350 },
  { category: "BEARD", name: "Beard / Faded Beard", desc: "Beard shaping, line-up or faded trim", price: 350 },
  { category: "BEARD", name: "Beard by Exclusive Stylist", desc: "Premium beard groom and shaping by master stylist", price: 450 },
  { category: "BEARD", name: "Beard Trimming", desc: "Simple length reduction and trimmer cleanup", price: 250 },

  // HAIR TREATMENT
  { category: "HAIR TREATMENT", name: "Argabeta Argan Oil Treatment", desc: "Nourishing formula with Argan Oil & Beta Carotene", price: 1500 },
  { category: "HAIR TREATMENT", name: "Anti-Dandruff Treatment", desc: "Scalp therapy to eliminate dandruff and dry flakes", price: 1500 },
  { category: "HAIR TREATMENT", name: "Protein + Hair Restore", desc: "Deep protein restoration for damaged or weak hair", price: 2500 },
  { category: "HAIR TREATMENT", name: "Repair Rescue", desc: "Intensive therapy designed to rescue and rebuild dry hair", price: 3500 },

  // HAIR KERATIN
  { category: "HAIR KERATIN", name: "Bio-Tanix Keratin Treatment", desc: "Organic keratin smoothing based on hair type & length", price: 8000 },
  { category: "HAIR KERATIN", name: "Thermal Keratin Treatment", desc: "Heat-activated keratin therapy for maximum smoothness", price: 8000 },

  // HAIR DYE
  { category: "HAIR DYE", name: "Fashion Colour (Hair Dye)", desc: "Trendy colors from top international color lines", price: 2000 },
  { category: "HAIR DYE", name: "Hair Dye (Keune)", desc: "Reliable, long-lasting gray coverage from Keune", price: 800 },
  { category: "HAIR DYE", name: "Hair Dye (Loreal Majirel)", desc: "Premium rich hair coloration by L'Oréal Majirel", price: 1850 },
  { category: "HAIR DYE", name: "Hair Dye (Framesi)", desc: "Italian high-definition color dye from Framesi", price: 1400 },
  { category: "HAIR DYE", name: "Hair Dye (Just For Men)", desc: "Quick-acting color blend targeting gray coverage", price: 1950 },
  { category: "HAIR DYE", name: "Hair Polish (Keune)", desc: "Gives hair a luminous, glossy and polished texture", price: 750 },
  { category: "HAIR DYE", name: "Beard Dye (Keune)", desc: "Natural looking beard color by Keune", price: 480 },
  { category: "HAIR DYE", name: "Beard Dye (Just For Men)", desc: "Fast beard gray coverage by Just For Men", price: 1350 },
  { category: "HAIR DYE", name: "Beard Dye (Loreal)", desc: "L'Oréal color application for beard hair", price: 950 },
  { category: "HAIR DYE", name: "Sideburns Color (Keune)", desc: "Sideburn tinting using Keune color", price: 430 },
  { category: "HAIR DYE", name: "Sideburns Color (Just For Men)", desc: "Quick sideburn tinting by Just For Men", price: 1250 },
  { category: "HAIR DYE", name: "Sideburns Color (Loreal)", desc: "L'Oréal color touch up for sideburns", price: 950 },
  { category: "HAIR DYE", name: "Mustaches Color (Keune)", desc: "Mustache color application using Keune", price: 150 },
  { category: "HAIR DYE", name: "Mustaches Color (Just For Men)", desc: "Mustache color application by Just For Men", price: 450 },

  // COLOR APPLICATION
  { category: "COLOR APPLICATION", name: "Hair Color Application", desc: "Application only (with wash & blowdry / without wash)", price: 400 },
  { category: "COLOR APPLICATION", name: "Beard Color Application", desc: "Application only (with wash / without wash)", price: 300 },
  { category: "COLOR APPLICATION", name: "Side Burns Color Application", desc: "Application only (with wash & blowdry / without wash)", price: 300 },
  { category: "COLOR APPLICATION", name: "Mustache Color Application", desc: "Application only (with wash / without wash)", price: 150 },

  // LIGHTENING/STREAKING
  { category: "LIGHTENING/STREAKING", name: "Streaking (Per Streak)", desc: "Single high-contrast highlight streak", price: 1500 },
  { category: "LIGHTENING/STREAKING", name: "Streaking (With Cap)", desc: "Full-head capped hair streaking/highlights", price: 6500 },
  { category: "LIGHTENING/STREAKING", name: "Mustaches Cut Down", desc: "Mustache color removal/lightening", price: 600 },
  { category: "LIGHTENING/STREAKING", name: "Beard Cut Down", desc: "Beard color removal/lightening", price: 1600 },
  { category: "LIGHTENING/STREAKING", name: "Hair Cut Down", desc: "Full hair color removal/lightening", price: 4500 },

  // THREADING
  { category: "THREADING", name: "Cheek Threading", desc: "Threading cheek area to clean beard lines", price: 200 },
  { category: "THREADING", name: "Forehead Threading", desc: "Threading forehead area for a clean hairline", price: 250 },
  { category: "THREADING", name: "Eye Brows", desc: "Shaping and trimming eyebrows", price: 300 },
  { category: "THREADING", name: "Full Face Threading", desc: "Threading for all facial regions", price: 550 },

  // TRIMMING
  { category: "TRIMMING", name: "Back Trim", desc: "Trimmer cleanup for back hair", price: 550 },
  { category: "TRIMMING", name: "Chest Trim", desc: "Trimmer cleanup for chest hair", price: 550 },

  // WAXING
  { category: "WAXING", name: "Full Face Wax", desc: "Waxing cheeks, ears, neck and nose regions", price: 1100 },
  { category: "WAXING", name: "Cheeks/Ear/Neck/Nose Wax", desc: "Cheeks wax OR Ear wax OR Neck wax OR Nose wax", price: 350 },
  { category: "WAXING", name: "Chest / Back Wax", desc: "Complete waxing for chest or back area", price: 5500 },
  { category: "WAXING", name: "Full Arms Wax", desc: "Complete waxing for full arms", price: 2500 },

  // BODY CARE & MASSAGE
  { category: "BODY CARE & MASSAGE", name: "Scalp Massage (Oiling)", desc: "Relaxing scalp oiling massage (10 min)", price: 350 },
  { category: "BODY CARE & MASSAGE", name: "Scalp Massage (Vibrator)", desc: "Vibrator-assisted scalp massage (15 min)", price: 400 },
  { category: "BODY CARE & MASSAGE", name: "Head & Shoulders Massage", desc: "Relaxing head and shoulders massage (15 min)", price: 550 },
  { category: "BODY CARE & MASSAGE", name: "Head & Shoulders (Vibrator)", desc: "Vibrator-assisted head & shoulders massage (15 min)", price: 700 },
  { category: "BODY CARE & MASSAGE", name: "Foot Massage", desc: "Hot water soak (5 min) + massage with oil (10 min)", price: 1000 },
  { category: "BODY CARE & MASSAGE", name: "Foot Vibrator Massage", desc: "Vibrator-assisted foot massage (10 min)", price: 500 },
  { category: "BODY CARE & MASSAGE", name: "Shower & Refresh", desc: "Fresh towel + shampoo + face wash + body wash", price: 500 },
  { category: "BODY CARE & MASSAGE", name: "Hand Polish", desc: "Polishing skin treatment for hands", price: 400 },
  { category: "BODY CARE & MASSAGE", name: "Foot Polish", desc: "Polishing skin treatment for feet", price: 450 },
  { category: "BODY CARE & MASSAGE", name: "Manicure (Simple)", desc: "Nail trimming, shaping and hand cleanup", price: 1800 },
  { category: "BODY CARE & MASSAGE", name: "Pedicure (Simple)", desc: "Nail trimming, shaping and foot cleanup", price: 2100 },
  { category: "BODY CARE & MASSAGE", name: "Signature Manicure", desc: "Premium skin and nail manicure treatment", price: 2500 },
  { category: "BODY CARE & MASSAGE", name: "Signature Pedicure", desc: "Premium skin and nail pedicure treatment", price: 3000 },
  { category: "BODY CARE & MASSAGE", name: "Full Arm Polish", desc: "Skin brightening hand/arm polish", price: 800 },
  { category: "BODY CARE & MASSAGE", name: "Full Arm Cleansing & Scrub", desc: "Exfoliating cleansing scrub for full arms", price: 1400 },

  // SKIN CARE & FACIALS
  { category: "SKIN CARE & FACIALS", name: "Simple Cleansing", desc: "Quick dirt and oil removal facial cleansing", price: 750 },
  { category: "SKIN CARE & FACIALS", name: "Peeling Cleansing", desc: "Deep exfoliating peeling cleanse", price: 1400 },
  { category: "SKIN CARE & FACIALS", name: "Whitening Cleansing (Cute Plus)", desc: "Skin-brightening whitening cleansing", price: 2400 },
  { category: "SKIN CARE & FACIALS", name: "Neck Polish", desc: "Neck skin polish treatment", price: 300 },
  { category: "SKIN CARE & FACIALS", name: "Neck Cleansing", desc: "Cleansing and exfoliation for neck region", price: 400 },
  { category: "SKIN CARE & FACIALS", name: "Face Polish", desc: "Glossy skin polishing for face", price: 700 },
  { category: "SKIN CARE & FACIALS", name: "Quick Boost (Janssen)", desc: "Janssen skin boost hydration ampoule", price: 4700 },
  { category: "SKIN CARE & FACIALS", name: "Express Glow (Dermalogica)", desc: "Dermalogica radiance recovery treatment", price: 4500 },
  { category: "SKIN CARE & FACIALS", name: "Pure Control Facial (Eveline)", desc: "Clarifying and sebum-control facial treatment", price: 4500 },
  { category: "SKIN CARE & FACIALS", name: "Even Skin Tone Facial (Thalgo)", desc: "Thalgo treatment to balance skin tone", price: 6000 },
  { category: "SKIN CARE & FACIALS", name: "Skin Brightening Facial (Janssen)", desc: "Janssen intensive brightening facial treatment", price: 7950 },
  { category: "SKIN CARE & FACIALS", name: "Chroma White Skin Treatment", desc: "Dermalogica high-potency brightening facial", price: 7500 },
  { category: "SKIN CARE & FACIALS", name: "Age Smart Skin Treatment", desc: "Dermalogica anti-aging facial", price: 8500 }
];
window.servicesData = servicesData;
