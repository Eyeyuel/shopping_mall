import json

en_shops = {
    "shop-1": {
      "name": "Aura Boutique",
      "description": "Aura Boutique brings the latest European fashion trends straight to the runway of your daily life. Experience high-end luxury with our curated seasonal collections."
    },
    "shop-2": {
      "name": "TechHaven",
      "description": "Your ultimate destination for cutting-edge electronics, smart home devices, and premium audio equipment. Experience the future today."
    },
    "shop-3": {
      "name": "The Obsidian Grill",
      "description": "An unforgettable dining experience featuring dry-aged steaks, an award-winning wine list, and panoramic views of the city skyline."
    },
    "shop-4": {
      "name": "Lumina Spa",
      "description": "Rejuvenate your body and mind in our state-of-the-art wellness facility. Lumina Spa offers holistic treatments, hydrotherapy, and personalized care."
    },
    "shop-5": {
      "name": "Apex Cinema",
      "description": "Experience the magic of cinema in ultra-high definition. Featuring IMAX screens, Dolby Atmos sound, and premium reclining seats."
    },
    "shop-6": {
      "name": "Velvet Caffe",
      "description": "Artisanal coffee, freshly baked pastries, and a cozy atmosphere perfect for remote work or catching up with friends."
    },
    "shop-7": {
      "name": "Nova Athletics",
      "description": "Premium activewear and athletic footwear designed for performance and style. Push your limits with Nova."
    },
    "shop-8": {
      "name": "Chrono Timepieces",
      "description": "An exclusive collection of luxury watches from the world's most prestigious horological houses."
    },
    "shop-9": {
      "name": "Echo Sound",
      "description": "Audiophile-grade headphones, speakers, and turntables. Hear every detail exactly as the artist intended."
    },
    "shop-10": {
      "name": "Zenith Virtual",
      "description": "Step into another world at our cutting-edge Virtual Reality arcade. Multiplayer arenas, immersive escape rooms, and more."
    },
    "shop-11": {
      "name": "The Floral Studio",
      "description": "Bespoke floral arrangements for every occasion. Fresh, seasonal blooms crafted by master florists."
    },
    "shop-12": {
      "name": "Maison de Parfum",
      "description": "Discover signature scents and exclusive fragrances from master perfumers around the globe."
    },
    "shop-13": {
      "name": "Byte & Bite",
      "description": "A modern fusion restaurant offering tech-inspired dishes and robotic service in a cyberpunk atmosphere."
    },
    "shop-14": {
      "name": "Pixel Play",
      "description": "The ultimate destination for gamers. Consoles, PC hardware, retro games, and exclusive merchandise."
    },
    "shop-15": {
      "name": "Luxe Optical",
      "description": "Designer eyewear and comprehensive eye care. See the world clearly and in style."
    }
}

am_shops = {
    "shop-1": {
      "name": "ኦውራ ቡቲክ",
      "description": "ኦውራ ቡቲክ የቅርብ ጊዜ የአውሮፓ የፋሽን አዝማሚያዎችን በቀጥታ ወደ እለታዊ ህይወትዎ ያመጣል።"
    },
    "shop-2": {
      "name": "ቴክ ሄቨን (TechHaven)",
      "description": "የዘመናዊ ኤሌክትሮኒክስ፣ የስማርት ቤት መገልገያዎች እና የድምጽ መሳሪያዎች መዳረሻ።"
    },
    "shop-3": {
      "name": "ዘ ኦብሲዲያን ግሪል",
      "description": "በሚያስደንቅ ሁኔታ የተዘጋጁ ስጋዎች፣ ተሸላሚ ወይኖች እና የከተማዋን ውብ እይታ የያዘ ሬስቶራንት።"
    },
    "shop-4": {
      "name": "ሉሚና ስፓ",
      "description": "አካል እና አእምሮዎን የሚያድሱበት ዘመናዊ የስፓ ማዕከል።"
    },
    "shop-5": {
      "name": "አፔክስ ሲኒማ",
      "description": "በከፍተኛ ጥራት የሲኒማ ልምድ ያግኙ። አይማክስ ስክሪን፣ ዶልቢ አትሞስ ድምጽ እና ምቹ ወንበሮች ተካተዋል።"
    },
    "shop-6": {
      "name": "ቬልቬት ካፌ",
      "description": "ጣፋጭ ቡና፣ ትኩስ ኬኮች እና ጓደኞችዎን ለማግኘት ምቹ ቦታ።"
    },
    "shop-7": {
      "name": "ኖቫ አትሌቲክስ",
      "description": "ከፍተኛ ጥራት ያላቸው የስፖርት አልባሳት እና ጫማዎች ለላቀ አፈጻጸም።"
    },
    "shop-8": {
      "name": "ክሮኖ ታይምፒስ (Chrono Timepieces)",
      "description": "ከዓለም ታዋቂ የሰዓት አምራቾች የተውጣጡ የቅንጦት ሰዓቶች ስብስብ።"
    },
    "shop-9": {
      "name": "ኤኮ ሳውንድ (Echo Sound)",
      "description": "ከፍተኛ ጥራት ያላቸው የጆሮ ማዳመጫዎች እና ስፒከሮች።"
    },
    "shop-10": {
      "name": "ዜኒዝ ቨርቹዋል (Zenith Virtual)",
      "description": "ዘመናዊ የቨርቹዋል ሪያሊቲ ጌም ማዕከል። የባለብዙ ተጫዋች ጌሞች እና ሌሎችም።"
    },
    "shop-11": {
      "name": "ዘ ፍሎራል ስቱዲዮ",
      "description": "ለእያንዳንዱ አጋጣሚ የሚሆኑ ውብ የአበባ ስብስቦች በባለሙያዎች የተሰሩ።"
    },
    "shop-12": {
      "name": "ሜዞን ደ ፓርፉም (Maison de Parfum)",
      "description": "ከዓለም ዙሪያ የተሰባሰቡ ልዩ እና ታዋቂ ሽቶዎች።"
    },
    "shop-13": {
      "name": "ባይት እና ባይት (Byte & Bite)",
      "description": "በቴክኖሎጂ የተነሳሳ ዘመናዊ ሬስቶራንት ሮቦት አስተናጋጆች ያሉት።"
    },
    "shop-14": {
      "name": "ፒክስል ፕሌይ (Pixel Play)",
      "description": "ለጌመሮች የመጨረሻው መዳረሻ። ኮንሶሎች፣ ፒሲ ሃርድዌር እና ጌሞች።"
    },
    "shop-15": {
      "name": "ለክስ ኦፕቲካል (Luxe Optical)",
      "description": "የዲዛይነር መነጽሮች እና አጠቃላይ የአይን እንክብካቤ።"
    }
}

for file, data in [("messages/en.json", en_shops), ("messages/am.json", am_shops)]:
    with open(file, "r") as f:
        content = json.load(f)
    content["Shops"] = data
    with open(file, "w") as f:
        json.dump(content, f, indent=2, ensure_ascii=False)

print("Done")
