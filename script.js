const categories = {
  lifestyle: { en: "Lifestyle Management", ar: "إدارة نمط الحياة" },
  travel: { en: "Travel & Mobility", ar: "السفر والتنقل" },
  access: { en: "Luxury Access", ar: "الوصول الفاخر" },
  events: { en: "Corporate & Private Events", ar: "المناسبات الخاصة والتنفيذية" },
  assets: { en: "Assets, Spaces & Culture", ar: "الأصول والمساحات والثقافة" }
};

const serviceBlueprints = [
  {
    id: "lifestyle-concierge",
    categoryKey: "lifestyle",
    en: {
      title: "Lifestyle Concierge",
      tagline: "Daily life handled with privacy, taste, and operational calm.",
      description: "Personalized services that simplify everyday complexity while curating refined experiences around your lifestyle.",
      outcome: "Your time returns to what matters while the details move quietly in the background.",
      forWhom: ["Private individuals", "HNW families", "Frequent travelers", "Households needing trusted coordination"],
      whenItMatters: ["Busy personal calendars", "High-touch home and lifestyle requests", "Private occasions", "Recurring errands and arrangements"],
      wosolHandles: ["Lifestyle request intake", "Vendor coordination", "Calendar-sensitive planning", "Experience curation", "Follow-through and confirmation"],
      experienceStandard: "Responsive, discreet, and aligned with the client's preferences rather than a generic service menu.",
      difference: "WOSOL builds familiarity over time, so requests become faster, more precise, and less repetitive.",
      sampleRequests: ["Curated dining plan", "Home service coordination", "Private celebration preparation", "Personal shopping appointment", "Weekend experience itinerary"],
      audienceRelevance: "For clients who value continuity, privacy, and fewer operational interruptions.",
      cta: "Request Lifestyle Support",
      imageLabel: "Private lifestyle management"
    },
    ar: {
      title: "كونسيرج نمط الحياة",
      tagline: "تفاصيل الحياة اليومية بإدارة هادئة وخصوصية عالية وذوق رفيع.",
      description: "خدمات شخصية مصممة لتبسيط التعقيد اليومي وصناعة تجارب منتقاة حول أسلوب حياة العميل.",
      outcome: "يعود وقتك لما يستحق الانتباه، بينما تتحرك التفاصيل بهدوء خلف المشهد.",
      forWhom: ["الأفراد من أصحاب نمط الحياة عالي القيمة", "العائلات الخاصة", "كثيرو السفر", "المنازل التي تحتاج تنسيقاً موثوقاً"],
      whenItMatters: ["الجداول الشخصية المزدحمة", "طلبات المنزل ونمط الحياة", "المناسبات الخاصة", "المهام المتكررة والترتيبات الدقيقة"],
      wosolHandles: ["استقبال الطلب وتحليله", "تنسيق المورّدين", "التخطيط وفق الوقت والحساسية", "ترشيح التجارب", "المتابعة والتأكيد"],
      experienceStandard: "استجابة دقيقة وسرية ومصممة حول تفضيلات العميل، لا حول قائمة خدمات عامة.",
      difference: "تبني وصول معرفة تراكمية بالعميل، فتتحول الطلبات مع الوقت إلى تنفيذ أسرع وأكثر دقة.",
      sampleRequests: ["خطة عشاء منتقاة", "تنسيق خدمات منزلية", "تحضير مناسبة خاصة", "موعد تسوق شخصي", "برنامج نهاية أسبوع خاص"],
      audienceRelevance: "لمن يقدّر الاستمرارية والخصوصية وتقليل الانشغال بالتفاصيل التشغيلية.",
      cta: "اطلب دعماً خاصاً لنمط الحياة",
      imageLabel: "إدارة نمط حياة خاصة"
    }
  },
  {
    id: "travel-management",
    categoryKey: "travel",
    en: {
      title: "Travel Management",
      tagline: "Journeys coordinated from first intention to final arrival.",
      description: "End-to-end travel planning across flights, accommodation, transfers, and logistics for journeys that feel seamless and considered.",
      outcome: "Every movement feels connected, prepared, and free from unnecessary friction.",
      forWhom: ["Private travelers", "Families", "Couples", "Guests requiring premium journey coordination"],
      whenItMatters: ["Multi-city itineraries", "Family holidays", "Luxury leisure travel", "Last-minute route changes"],
      wosolHandles: ["Flight coordination", "Accommodation matching", "Transfers", "Arrival handling", "Itinerary monitoring"],
      experienceStandard: "Clear, flexible, and designed around comfort, timing, privacy, and personal preferences.",
      difference: "Travel is managed as a complete experience rather than isolated bookings.",
      sampleRequests: ["Full leisure itinerary", "Airport to villa transfer", "Hotel and dining coordination", "Family travel plan", "Route adjustment while traveling"],
      audienceRelevance: "For clients who want the journey to feel as refined as the destination.",
      cta: "Plan a Private Journey",
      imageLabel: "Seamless luxury travel"
    },
    ar: {
      title: "إدارة السفر",
      tagline: "رحلات منسقة من النية الأولى حتى الوصول الأخير.",
      description: "تخطيط شامل للسفر يشمل الرحلات والإقامة والتنقلات واللوجستيات لصناعة رحلة سلسة ومدروسة.",
      outcome: "كل حركة في الرحلة تبدو مترابطة ومهيأة وخالية من التعقيد غير الضروري.",
      forWhom: ["المسافرون الخاصون", "العائلات", "الأزواج", "الضيوف الذين يحتاجون تنسيقاً راقياً للرحلة"],
      whenItMatters: ["برامج متعددة المدن", "العطلات العائلية", "السفر الترفيهي الفاخر", "تغييرات المسار المفاجئة"],
      wosolHandles: ["تنسيق الرحلات", "ترشيح الإقامة", "ترتيب التنقلات", "خدمة الوصول", "متابعة البرنامج أثناء السفر"],
      experienceStandard: "وضوح ومرونة وتجربة مبنية حول الراحة والوقت والخصوصية وتفضيلات العميل.",
      difference: "تتعامل وصول مع السفر كتجربة متكاملة، لا كسلسلة حجوزات منفصلة.",
      sampleRequests: ["برنامج رحلة ترفيهية كامل", "تنقل من المطار إلى الفيلا", "تنسيق الفندق والمطاعم", "خطة سفر عائلية", "تعديل المسار أثناء الرحلة"],
      audienceRelevance: "لمن يريد أن تكون الرحلة بذات رقي الوجهة.",
      cta: "خطط رحلة خاصة",
      imageLabel: "سفر فاخر وسلس"
    }
  },
  {
    id: "private-aviation",
    categoryKey: "travel",
    en: {
      title: "Private Aviation",
      tagline: "Air travel arranged with discretion, precision, and time certainty.",
      description: "Customized private aviation coordination, from aircraft options and routing to in-flight preferences and arrival logistics.",
      outcome: "Time-sensitive movement becomes private, punctual, and aligned with the client's schedule.",
      forWhom: ["Business leaders", "UHNW individuals", "Families", "Executives requiring flexible movement"],
      whenItMatters: ["Urgent meetings", "Multi-city travel", "Confidential movement", "VIP arrivals", "Family trips with privacy requirements"],
      wosolHandles: ["Aircraft coordination", "Preferred routes", "Ground transfers", "In-flight preferences", "Documentation and arrival support"],
      experienceStandard: "Private, punctual, discreet, and tailored around the client rather than a commercial flight schedule.",
      difference: "The flight is only one layer; WOSOL coordinates the full movement before and after the aircraft.",
      sampleRequests: ["Private jet charter coordination", "Multi-city executive itinerary", "Airport to residence transfer", "In-flight preference arrangement", "VIP arrival handling"],
      audienceRelevance: "For clients whose time, privacy, and route control are critical.",
      cta: "Coordinate Private Aviation",
      imageLabel: "Private jet cabin and arrival"
    },
    ar: {
      title: "الطيران الخاص",
      tagline: "سفر جوي منسق بسرية ودقة ويقين في الوقت.",
      description: "تنسيق حلول الطيران الخاص من خيارات الطائرات والمسارات إلى تفضيلات الرحلة وخدمات الوصول.",
      outcome: "تتحول الحركة الحساسة للوقت إلى تجربة خاصة ومنضبطة ومتوافقة مع جدول العميل.",
      forWhom: ["قادة الأعمال", "الأفراد ذوو الملاءة العالية جداً", "العائلات", "المديرون التنفيذيون ذوو الجداول المرنة"],
      whenItMatters: ["اجتماعات عاجلة", "رحلات متعددة المدن", "تنقلات سرية", "وصول ضيوف رفيعي المستوى", "رحلات عائلية تتطلب خصوصية"],
      wosolHandles: ["تنسيق الطائرة", "المسارات المفضلة", "النقل الأرضي", "تفضيلات الرحلة", "الدعم في الوثائق والوصول"],
      experienceStandard: "خصوصية وانضباط وسرية وتجربة تدور حول العميل لا حول جدول رحلة تجارية.",
      difference: "الطائرة جزء واحد فقط؛ وصول تنسق الحركة الكاملة قبل الرحلة وبعدها.",
      sampleRequests: ["تنسيق استئجار طائرة خاصة", "برنامج تنفيذي متعدد المدن", "نقل من المطار إلى المقر", "ترتيب تفضيلات الرحلة", "خدمة وصول خاصة"],
      audienceRelevance: "لمن تمثل له الخصوصية والوقت والتحكم بالمسار عناصر حاسمة.",
      cta: "نسّق الطيران الخاص",
      imageLabel: "مقصورة طائرة خاصة ووصول هادئ"
    }
  },
  {
    id: "luxury-accommodation",
    categoryKey: "access",
    en: {
      title: "Luxury Accommodation",
      tagline: "Residences selected for privacy, comfort, and lifestyle fit.",
      description: "Curated villas, chalets, penthouses, and premium stays worldwide, paired with services such as private chefs, security, and household support.",
      outcome: "A stay feels like a private residence prepared around the way you live.",
      forWhom: ["Families", "Long-stay travelers", "Private guests", "Clients seeking secure residences"],
      whenItMatters: ["Seasonal stays", "Family holidays", "High-security travel", "Celebrations", "Remote work retreats"],
      wosolHandles: ["Property matching", "Service layering", "Private chef coordination", "Security and driver planning", "Check-in and stay support"],
      experienceStandard: "Selected, prepared, and serviced to match the client's privacy, comfort, and guest profile.",
      difference: "WOSOL evaluates the residence as an operating environment, not only as a beautiful property.",
      sampleRequests: ["Private villa with chef", "Mountain chalet for family stay", "Penthouses near business districts", "Security-supported residence", "Arrival grocery and household setup"],
      audienceRelevance: "For clients who need the privacy of a residence with the reliability of premium hospitality.",
      cta: "Curate a Private Stay",
      imageLabel: "Private villa and residence"
    },
    ar: {
      title: "الإقامة الفاخرة",
      tagline: "مساكن مختارة للخصوصية والراحة وملاءمة نمط الحياة.",
      description: "فلل وشاليهات وبنتهاوس وإقامات عالمية مختارة، مع خدمات مثل الطهاة الخاصين والأمن والدعم المنزلي.",
      outcome: "تبدو الإقامة كمنزل خاص مجهز حول طريقة حياة العميل.",
      forWhom: ["العائلات", "المسافرون للإقامات الطويلة", "الضيوف الخاصون", "العملاء الباحثون عن مساكن آمنة"],
      whenItMatters: ["الإقامات الموسمية", "العطلات العائلية", "السفر عالي الخصوصية", "الاحتفالات", "إقامات العمل عن بعد"],
      wosolHandles: ["ترشيح العقار", "إضافة طبقات الخدمة", "تنسيق الطاهي الخاص", "ترتيب الأمن والسائقين", "دعم الوصول والإقامة"],
      experienceStandard: "اختيار وتجهيز وخدمة تناسب خصوصية العميل وراحته وطبيعة ضيوفه.",
      difference: "تقيّم وصول المسكن كبيئة تشغيل كاملة، لا كعقار جميل فقط.",
      sampleRequests: ["فيلا خاصة مع طاهٍ", "شاليه جبلي للعائلة", "بنتهاوس قرب منطقة أعمال", "سكن مدعوم بخدمة أمنية", "تجهيز المنزل قبل الوصول"],
      audienceRelevance: "لمن يحتاج خصوصية السكن مع موثوقية الضيافة الفاخرة.",
      cta: "رشّح إقامة خاصة",
      imageLabel: "فيلا ومسكن خاص"
    }
  },
  {
    id: "yacht-charters",
    categoryKey: "access",
    en: {
      title: "Yacht Charters",
      tagline: "Bespoke yacht days and voyages shaped around the guest profile.",
      description: "Tailored yacht experiences, from quiet coastal movement to private harbor events and multi-day sea itineraries.",
      outcome: "Time on water becomes private, hosted, and precise without visible effort.",
      forWhom: ["Families", "Private groups", "Corporate hosts", "Travelers seeking sea-based experiences"],
      whenItMatters: ["Coastal escapes", "Harbor events", "Celebrations", "Client hosting", "Multi-day charters"],
      wosolHandles: ["Yacht selection", "Route coordination", "Crew and catering preferences", "Transfer planning", "Guest experience details"],
      experienceStandard: "Elegant, discreet, safety-conscious, and tuned to the tone of the occasion.",
      difference: "The charter is curated around mood, guests, privacy, and operational timing.",
      sampleRequests: ["Sunset yacht charter", "Private family voyage", "Harbor event hosting", "Chef-led onboard dinner", "Multi-day coastal itinerary"],
      audienceRelevance: "For clients who want a private marine setting without coordinating the many hidden details.",
      cta: "Arrange a Yacht Experience",
      imageLabel: "Yacht deck at sunset"
    },
    ar: {
      title: "تأجير اليخوت",
      tagline: "تجارب بحرية خاصة مصممة حول طبيعة الضيوف والمناسبة.",
      description: "تنظيم تجارب يخوت مصممة حسب التفضيلات، من رحلات ساحلية هادئة إلى مناسبات خاصة في المرافئ وبرامج بحرية متعددة الأيام.",
      outcome: "يتحول الوقت في البحر إلى تجربة خاصة ومضيفة ودقيقة بلا جهد ظاهر.",
      forWhom: ["العائلات", "المجموعات الخاصة", "المضيفون من الشركات", "المسافرون الباحثون عن تجارب بحرية"],
      whenItMatters: ["الهروب الساحلي", "مناسبات المرفأ", "الاحتفالات", "استضافة العملاء", "الرحلات البحرية متعددة الأيام"],
      wosolHandles: ["اختيار اليخت", "تنسيق المسار", "تفضيلات الطاقم والضيافة", "تنظيم التنقلات", "تفاصيل تجربة الضيوف"],
      experienceStandard: "أناقة وسرية ووعي بالسلامة وتجربة مضبوطة على نبرة المناسبة.",
      difference: "تُصمم التجربة حول المزاج والضيوف والخصوصية والتوقيت التشغيلي.",
      sampleRequests: ["رحلة يخت وقت الغروب", "رحلة عائلية خاصة", "استضافة مناسبة بحرية", "عشاء بطاهٍ على اليخت", "برنامج ساحلي لعدة أيام"],
      audienceRelevance: "لمن يريد بيئة بحرية خاصة دون الانشغال بتفاصيلها الخفية.",
      cta: "رتّب تجربة يخت",
      imageLabel: "سطح يخت عند الغروب"
    }
  },
  {
    id: "health-wellness-resorts",
    categoryKey: "access",
    en: {
      title: "Health & Wellness Resorts",
      tagline: "Restorative retreats curated with privacy and measured comfort.",
      description: "Premium wellness programs and holistic retreats selected to renew mind, body, and rhythm in luxurious settings.",
      outcome: "Wellness becomes a considered reset rather than an improvised escape.",
      forWhom: ["Executives", "Couples", "Families", "Clients seeking recovery, balance, or preventive wellness"],
      whenItMatters: ["Burnout recovery", "Seasonal resets", "Post-travel renewal", "Family wellness escapes", "Discreet health retreats"],
      wosolHandles: ["Retreat matching", "Program coordination", "Accommodation", "Wellness preferences", "Travel and privacy logistics"],
      experienceStandard: "Calm, respectful, confidential, and tailored to the client's pace and health boundaries.",
      difference: "WOSOL prioritizes suitability, privacy, and continuity over trend-led wellness packages.",
      sampleRequests: ["Luxury detox retreat", "Executive recovery weekend", "Holistic resort stay", "Private trainer and chef coordination", "Family wellness program"],
      audienceRelevance: "For clients who need renewal without exposure, inconvenience, or generic programming.",
      cta: "Curate a Wellness Retreat",
      imageLabel: "Private wellness resort"
    },
    ar: {
      title: "منتجعات الصحة والاستشفاء",
      tagline: "تجارب استشفاء مختارة بخصوصية وراحة محسوبة.",
      description: "برامج عافية وتجارب استشفاء شاملة تُرشح لتجديد الذهن والجسد والإيقاع في بيئات فاخرة.",
      outcome: "تصبح العافية إعادة توازن مدروسة، لا هروباً عابراً.",
      forWhom: ["المديرون التنفيذيون", "الأزواج", "العائلات", "العملاء الباحثون عن التعافي أو التوازن أو الوقاية"],
      whenItMatters: ["التعافي من الإرهاق", "إعادة ضبط موسمية", "تجديد ما بعد السفر", "رحلات عافية عائلية", "برامج صحية بسرية عالية"],
      wosolHandles: ["ترشيح المنتجع", "تنسيق البرنامج", "الإقامة", "تفضيلات العافية", "لوجستيات السفر والخصوصية"],
      experienceStandard: "هدوء واحترام وسرية وتجربة تناسب وتيرة العميل وحدوده الصحية.",
      difference: "تركز وصول على الملاءمة والخصوصية والاستمرارية بدلاً من باقات عافية رائجة.",
      sampleRequests: ["برنامج استشفاء فاخر", "نهاية أسبوع للتعافي التنفيذي", "إقامة في منتجع شمولي", "تنسيق مدرب وطاهٍ خاص", "برنامج عافية عائلي"],
      audienceRelevance: "لمن يحتاج التجدد دون انكشاف أو إزعاج أو برامج عامة.",
      cta: "صمّم تجربة استشفاء",
      imageLabel: "منتجع عافية خاص"
    }
  },
  {
    id: "shopping-gifting",
    categoryKey: "lifestyle",
    en: {
      title: "Shopping & Gifting",
      tagline: "Taste-led sourcing for personal style, rare gifts, and meaningful gestures.",
      description: "Exclusive fashion, gifting, and rare collectible sourcing aligned with the client's style, occasion, and relationship context.",
      outcome: "Every selection feels personal, considered, and appropriate to the moment.",
      forWhom: ["Private clients", "Executives", "Families", "Hosts seeking exceptional gifts"],
      whenItMatters: ["Milestone gifts", "Wardrobe refreshes", "Last-minute occasions", "Rare item sourcing", "Corporate gifting with discretion"],
      wosolHandles: ["Preference profiling", "Sourcing", "Presentation and wrapping", "Delivery coordination", "Occasion-sensitive recommendations"],
      experienceStandard: "Curated, tasteful, discreet, and never generic.",
      difference: "WOSOL balances access with meaning, ensuring the item fits the person and the relationship.",
      sampleRequests: ["Rare collectible sourcing", "Luxury gift curation", "Personal shopping appointment", "Private fashion edit", "Occasion gift delivery"],
      audienceRelevance: "For clients who want refined choices without time-consuming search or visible effort.",
      cta: "Curate a Gift or Edit",
      imageLabel: "Luxury gifting still life"
    },
    ar: {
      title: "التسوق والإهداء",
      tagline: "اختيارات تقودها الذائقة للأناقة الشخصية والهدايا النادرة واللفتات ذات المعنى.",
      description: "خدمات أزياء وإهداء واقتناء قطع نادرة مصممة حول أسلوب العميل والمناسبة وطبيعة العلاقة.",
      outcome: "كل اختيار يبدو شخصياً ومدروساً وملائماً للحظة.",
      forWhom: ["العملاء الخاصون", "المديرون التنفيذيون", "العائلات", "المضيفون الباحثون عن هدايا استثنائية"],
      whenItMatters: ["هدايا المناسبات المهمة", "تجديد الخزانة", "المناسبات المفاجئة", "البحث عن قطع نادرة", "الإهداء المؤسسي بسرية"],
      wosolHandles: ["فهم التفضيلات", "البحث والاقتناء", "التغليف والتقديم", "تنسيق التسليم", "ترشيحات حساسة لطبيعة المناسبة"],
      experienceStandard: "اختيار منتقى وذوق رفيع وسرية وابتعاد عن الخيارات العامة.",
      difference: "توازن وصول بين الوصول والمعنى، لتناسب القطعة الشخص والعلاقة.",
      sampleRequests: ["البحث عن قطعة نادرة", "تنسيق هدية فاخرة", "موعد تسوق شخصي", "تحرير اختيارات أزياء خاصة", "توصيل هدية مناسبة"],
      audienceRelevance: "لمن يريد اختيارات راقية دون بحث طويل أو جهد ظاهر.",
      cta: "نسّق هدية أو اختياراً خاصاً",
      imageLabel: "تفاصيل هدية فاخرة"
    }
  },
  {
    id: "business-travel-management",
    categoryKey: "travel",
    en: {
      title: "Business Travel Management",
      tagline: "Executive movement coordinated around meetings, privacy, and productivity.",
      description: "Business-oriented travel planning across flights, accommodation, transfers, meeting logistics, and contingency support.",
      outcome: "The executive arrives prepared, on time, and free to focus on the purpose of the trip.",
      forWhom: ["Executives", "Founders", "Board members", "Corporate teams", "Visiting delegations"],
      whenItMatters: ["Board meetings", "Roadshows", "Investor visits", "Multi-city agendas", "High-stakes corporate hosting"],
      wosolHandles: ["Executive itinerary design", "Flight and hotel coordination", "Ground movement", "Meeting logistics", "Real-time adjustments"],
      experienceStandard: "Precise, confidential, punctual, and compatible with business pressure.",
      difference: "WOSOL treats business travel as a productivity environment, not only an itinerary.",
      sampleRequests: ["C-suite travel week", "Delegation arrival plan", "Airport-boardroom-residence route", "Hotel near meeting venue", "Last-minute schedule recovery"],
      audienceRelevance: "For leaders and teams whose travel must protect time, privacy, and decision quality.",
      cta: "Plan Executive Travel",
      imageLabel: "Executive travel planning"
    },
    ar: {
      title: "إدارة سفر الأعمال",
      tagline: "تنقل تنفيذي منسق حول الاجتماعات والخصوصية والإنتاجية.",
      description: "تخطيط سفر موجه للأعمال يشمل الرحلات والإقامة والتنقلات ولوجستيات الاجتماعات والدعم عند التغيير.",
      outcome: "يصل التنفيذي جاهزاً وفي الوقت المناسب ومتحرراً للتركيز على هدف الرحلة.",
      forWhom: ["المديرون التنفيذيون", "المؤسسون", "أعضاء المجالس", "فرق الشركات", "الوفود الزائرة"],
      whenItMatters: ["اجتماعات المجلس", "الجولات الاستثمارية", "زيارات المستثمرين", "الجداول متعددة المدن", "استضافة الشركات عالية الأهمية"],
      wosolHandles: ["تصميم برنامج السفر التنفيذي", "تنسيق الرحلات والفنادق", "الحركة الأرضية", "لوجستيات الاجتماعات", "تعديلات فورية عند الحاجة"],
      experienceStandard: "دقة وسرية وانضباط زمني وملاءمة لضغط الأعمال.",
      difference: "تتعامل وصول مع سفر الأعمال كبيئة إنتاجية، لا كبرنامج تنقل فقط.",
      sampleRequests: ["أسبوع سفر للقيادة التنفيذية", "خطة وصول وفد", "مسار من المطار إلى الاجتماع ثم المقر", "فندق قريب من موقع الاجتماع", "معالجة جدول مفاجئ"],
      audienceRelevance: "للقادة والفرق التي يجب أن يحمي سفرها الوقت والخصوصية وجودة القرار.",
      cta: "خطط سفر الأعمال",
      imageLabel: "تخطيط سفر تنفيذي"
    }
  },
  {
    id: "personal-assistant",
    categoryKey: "lifestyle",
    en: {
      title: "Personal Assistant",
      tagline: "Specialized requests managed with judgment, discretion, and follow-through.",
      description: "Personal assistance for complex, sensitive, or highly specific requests, from elusive access to carefully orchestrated personal moments.",
      outcome: "The request is understood, prioritized, and executed without burdening the client.",
      forWhom: ["Private individuals", "Executives", "Families", "Clients with limited time"],
      whenItMatters: ["Time-sensitive personal needs", "Complex coordination", "Private celebrations", "Guest care", "Unusual sourcing"],
      wosolHandles: ["Request scoping", "Feasibility review", "Provider coordination", "Confidential communication", "Completion tracking"],
      experienceStandard: "Measured, respectful, and realistic while still pursuing the highest possible outcome.",
      difference: "WOSOL protects the client's time by translating unclear requests into executable steps.",
      sampleRequests: ["Securing hard-to-find tickets", "Coordinating a private celebration", "Managing guest arrivals", "Sourcing a specific item", "Handling a sensitive errand"],
      audienceRelevance: "For clients who need dependable personal execution without explaining everything repeatedly.",
      cta: "Assign a Private Request",
      imageLabel: "Discreet personal assistance"
    },
    ar: {
      title: "المساعد الشخصي",
      tagline: "طلبات متخصصة تُدار بحكمة وسرية ومتابعة دقيقة.",
      description: "مساعدة شخصية للطلبات المعقدة أو الحساسة أو شديدة الخصوصية، من الوصول النادر إلى تنظيم اللحظات الشخصية بعناية.",
      outcome: "يُفهم الطلب ويُرتب حسب الأولوية ويُنفذ دون تحميل العميل تفاصيله.",
      forWhom: ["الأفراد الخاصون", "المديرون التنفيذيون", "العائلات", "العملاء محدودو الوقت"],
      whenItMatters: ["احتياجات شخصية عاجلة", "تنسيق معقد", "احتفالات خاصة", "رعاية الضيوف", "البحث عن طلب غير معتاد"],
      wosolHandles: ["تحديد نطاق الطلب", "مراجعة القابلية للتنفيذ", "تنسيق المورّدين", "تواصل سري", "متابعة الإنجاز"],
      experienceStandard: "هدوء واحترام وواقعية مع السعي لأفضل نتيجة ممكنة.",
      difference: "تحمي وصول وقت العميل بتحويل الطلبات غير الواضحة إلى خطوات قابلة للتنفيذ.",
      sampleRequests: ["تأمين تذاكر صعبة", "تنسيق احتفال خاص", "إدارة وصول الضيوف", "البحث عن قطعة محددة", "إنجاز مهمة حساسة"],
      audienceRelevance: "لمن يحتاج تنفيذاً شخصياً يعتمد عليه دون تكرار الشرح.",
      cta: "كلّفنا بطلب خاص",
      imageLabel: "مساعدة شخصية بسرية"
    }
  },
  {
    id: "special-request",
    categoryKey: "lifestyle",
    en: {
      title: "Special Request",
      tagline: "Unusual needs turned into structured, discreet execution.",
      description: "Personalized handling for unique or exclusive needs, making complex requests possible through trusted partners and careful coordination.",
      outcome: "A difficult request becomes a managed project with clear next steps.",
      forWhom: ["Private clients", "Family offices", "Executives", "Hosts with unusual requirements"],
      whenItMatters: ["Rare access needs", "Complex gifting", "Cross-border coordination", "Confidential arrangements", "High-pressure deadlines"],
      wosolHandles: ["Request clarification", "Partner identification", "Risk and privacy review", "Execution plan", "Status updates"],
      experienceStandard: "Discreet, realistic, and transparent about what can be done well.",
      difference: "WOSOL brings structure to requests that do not fit standard service categories.",
      sampleRequests: ["A rare destination experience", "A private cultural visit", "Confidential guest handling", "Sourcing a difficult item", "Coordinating a surprise itinerary"],
      audienceRelevance: "For clients who need a trusted point of contact when the request is not ordinary.",
      cta: "Submit a Special Request",
      imageLabel: "Bespoke access and execution"
    },
    ar: {
      title: "الطلبات الخاصة",
      tagline: "احتياجات غير معتادة تتحول إلى تنفيذ منظم وسري.",
      description: "إدارة شخصية للاحتياجات الفريدة أو الحصرية، لجعل الطلبات المعقدة قابلة للتحقق عبر شركاء موثوقين وتنسيق دقيق.",
      outcome: "يتحول الطلب الصعب إلى مشروع مدار بخطوات واضحة.",
      forWhom: ["العملاء الخاصون", "المكاتب العائلية", "المديرون التنفيذيون", "المضيفون ذوو المتطلبات غير التقليدية"],
      whenItMatters: ["احتياجات وصول نادرة", "إهداء معقد", "تنسيق عابر للحدود", "ترتيبات سرية", "مواعيد ضغط عالية"],
      wosolHandles: ["توضيح الطلب", "تحديد الشركاء", "مراجعة المخاطر والخصوصية", "خطة التنفيذ", "تحديثات الحالة"],
      experienceStandard: "سرية وواقعية ووضوح حول ما يمكن تنفيذه بجودة.",
      difference: "تمنح وصول هيكلاً للطلبات التي لا تنتمي إلى فئة خدمات تقليدية.",
      sampleRequests: ["تجربة وجهة نادرة", "زيارة ثقافية خاصة", "رعاية ضيوف بسرية", "البحث عن قطعة صعبة", "تنسيق برنامج مفاجئ"],
      audienceRelevance: "لمن يحتاج نقطة اتصال موثوقة عندما يكون الطلب غير عادي.",
      cta: "أرسل طلباً خاصاً",
      imageLabel: "وصول خاص وتنفيذ حسب الطلب"
    }
  },
  {
    id: "transportation-services",
    categoryKey: "travel",
    en: {
      title: "Transportation Services",
      tagline: "Ground movement with comfort, discretion, and route confidence.",
      description: "Comprehensive transportation solutions, from self-drive options to chauffeured services with premium vehicles and experienced drivers.",
      outcome: "Arrivals, departures, and daily movement feel punctual, private, and composed.",
      forWhom: ["Executives", "Families", "VIP guests", "Event hosts", "Travelers requiring secure movement"],
      whenItMatters: ["Airport transfers", "Daily driver needs", "Event arrivals", "Multi-car coordination", "City-to-city movement"],
      wosolHandles: ["Vehicle matching", "Chauffeur coordination", "Route planning", "Guest manifests", "Timing and contingency management"],
      experienceStandard: "Clean, punctual, discreet, and aligned with the client's comfort and security expectations.",
      difference: "WOSOL manages the movement logic behind the vehicle, not just the car itself.",
      sampleRequests: ["Chauffeured luxury sedan", "Family van coordination", "Executive convoy", "Self-drive premium vehicle", "Event guest transfer plan"],
      audienceRelevance: "For clients who need ground travel to remain calm, private, and reliable.",
      cta: "Arrange Transportation",
      imageLabel: "Executive car arrival"
    },
    ar: {
      title: "خدمات التنقل",
      tagline: "حركة أرضية براحة وسرية وثقة في المسار.",
      description: "حلول تنقل شاملة من خيارات القيادة الذاتية إلى خدمات السائقين بمركبات فاخرة وسائقين ذوي خبرة.",
      outcome: "تبدو الوصولات والمغادرات والحركة اليومية منضبطة وخاصة وهادئة.",
      forWhom: ["المديرون التنفيذيون", "العائلات", "الضيوف الخاصون", "مضيفو المناسبات", "المسافرون الذين يحتاجون حركة آمنة"],
      whenItMatters: ["نقل المطار", "احتياج سائق يومي", "وصول المناسبات", "تنسيق عدة مركبات", "تنقل بين المدن"],
      wosolHandles: ["مطابقة المركبة", "تنسيق السائق", "تخطيط المسار", "قوائم الضيوف", "إدارة الوقت والبدائل"],
      experienceStandard: "نظافة وانضباط وسرية وتوافق مع توقعات الراحة والأمان.",
      difference: "تدير وصول منطق الحركة خلف المركبة، لا السيارة وحدها.",
      sampleRequests: ["سيارة فاخرة بسائق", "تنسيق مركبة عائلية", "موكب تنفيذي", "سيارة فاخرة للقيادة الذاتية", "خطة نقل ضيوف مناسبة"],
      audienceRelevance: "لمن يحتاج تنقلاً أرضياً هادئاً وخاصاً وموثوقاً.",
      cta: "رتّب التنقل",
      imageLabel: "وصول سيارة تنفيذية"
    }
  },
  {
    id: "corporate-concierge-services",
    categoryKey: "events",
    en: {
      title: "Corporate Concierge Services",
      tagline: "Executive and company needs handled through one discreet coordination layer.",
      description: "Tailored concierge services for executives and companies, managing meetings, logistics, guest care, and luxury access requirements.",
      outcome: "Corporate hospitality becomes precise, private, and aligned with the brand's level of expectation.",
      forWhom: ["Executives", "Corporate offices", "Board teams", "Investor relations", "Guest relations teams"],
      whenItMatters: ["Executive hosting", "Delegation visits", "Board meetings", "Client entertainment", "High-value employee or partner care"],
      wosolHandles: ["Meeting support", "Travel and transport", "Dining and venue access", "Guest itineraries", "On-ground coordination"],
      experienceStandard: "Professional, discreet, punctual, and tuned to corporate reputation.",
      difference: "WOSOL gives companies a private hospitality layer without building an internal concierge function.",
      sampleRequests: ["Executive guest itinerary", "Meeting logistics", "Board dinner coordination", "Partner arrival support", "Corporate lifestyle benefit handling"],
      audienceRelevance: "For organizations that host high-value people and cannot afford fragmented coordination.",
      cta: "Design Corporate Support",
      imageLabel: "Corporate private hospitality"
    },
    ar: {
      title: "خدمات الكونسيرج للشركات",
      tagline: "احتياجات التنفيذيين والشركات عبر طبقة تنسيق واحدة وسرية.",
      description: "خدمات كونسيرج مصممة للمديرين والشركات، تدير الاجتماعات واللوجستيات ورعاية الضيوف ومتطلبات الوصول الفاخر.",
      outcome: "تتحول ضيافة الشركات إلى تجربة دقيقة وخاصة ومتوافقة مع مستوى العلامة.",
      forWhom: ["المديرون التنفيذيون", "مكاتب الشركات", "فرق المجالس", "علاقات المستثمرين", "فرق رعاية الضيوف"],
      whenItMatters: ["استضافة التنفيذيين", "زيارات الوفود", "اجتماعات المجلس", "ترفيه العملاء", "رعاية شركاء أو موظفين عالي القيمة"],
      wosolHandles: ["دعم الاجتماعات", "السفر والتنقل", "الوصول للمطاعم والمواقع", "برامج الضيوف", "التنسيق الميداني"],
      experienceStandard: "احتراف وسرية وانضباط زمني ووعي بسمعة الشركة.",
      difference: "تمنح وصول الشركات طبقة ضيافة خاصة دون الحاجة لبناء وظيفة كونسيرج داخلية.",
      sampleRequests: ["برنامج ضيف تنفيذي", "لوجستيات اجتماع", "تنسيق عشاء مجلس", "دعم وصول شريك", "إدارة مزايا نمط الحياة للشركات"],
      audienceRelevance: "للمنظمات التي تستضيف أشخاصاً عالي القيمة ولا يناسبها التنسيق المجزأ.",
      cta: "صمّم دعماً للشركة",
      imageLabel: "ضيافة شركات خاصة"
    }
  },
  {
    id: "event-planning",
    categoryKey: "events",
    en: {
      title: "Event Planning",
      tagline: "Private gatherings and grand moments orchestrated with exacting care.",
      description: "Memorable event planning from intimate gatherings to larger celebrations, with attention to atmosphere, guest journey, and every operational detail.",
      outcome: "The host remains present while the event moves with elegance and control.",
      forWhom: ["Private hosts", "Families", "Executives", "Corporate clients", "Celebration committees"],
      whenItMatters: ["Milestone birthdays", "Private dinners", "Launch events", "Family celebrations", "Executive receptions"],
      wosolHandles: ["Concept direction", "Venue and supplier coordination", "Guest flow", "Catering and entertainment", "Event-day management"],
      experienceStandard: "Polished, emotionally aware, and quietly controlled from planning to close.",
      difference: "WOSOL aligns the event with the host's privacy, taste, and social context.",
      sampleRequests: ["Private dinner", "Milestone celebration", "Corporate reception", "Destination event support", "Surprise occasion planning"],
      audienceRelevance: "For hosts who need atmosphere and execution to meet the same standard.",
      cta: "Plan a Private Event",
      imageLabel: "Private event table detail"
    },
    ar: {
      title: "تخطيط المناسبات",
      tagline: "تجمعات خاصة ولحظات كبيرة تُنظم بعناية دقيقة.",
      description: "تخطيط مناسبات لا تُنسى من اللقاءات الحميمة إلى الاحتفالات الكبرى، مع عناية بالأجواء ورحلة الضيف وكل التفاصيل التشغيلية.",
      outcome: "يبقى المضيف حاضراً في لحظته بينما تتحرك المناسبة بأناقة وسيطرة.",
      forWhom: ["المضيفون الخاصون", "العائلات", "المديرون التنفيذيون", "عملاء الشركات", "لجان الاحتفال"],
      whenItMatters: ["أعياد ميلاد مهمة", "عشاءات خاصة", "فعاليات إطلاق", "احتفالات عائلية", "استقبالات تنفيذية"],
      wosolHandles: ["اتجاه الفكرة", "تنسيق الموقع والمورّدين", "حركة الضيوف", "الضيافة والترفيه", "إدارة يوم المناسبة"],
      experienceStandard: "صقل ووعي عاطفي وسيطرة هادئة من التخطيط حتى الختام.",
      difference: "تربط وصول المناسبة بخصوصية المضيف وذائقته وسياقه الاجتماعي.",
      sampleRequests: ["عشاء خاص", "احتفال بمناسبة مهمة", "استقبال مؤسسي", "دعم مناسبة في وجهة خارجية", "تخطيط مفاجأة خاصة"],
      audienceRelevance: "للمضيفين الذين يريدون أن يلتقي الجو والتنفيذ على مستوى واحد.",
      cta: "خطط مناسبة خاصة",
      imageLabel: "تفاصيل مائدة مناسبة خاصة"
    }
  },
  {
    id: "arts-design",
    categoryKey: "assets",
    en: {
      title: "Arts & Design",
      tagline: "Spaces, collections, and cultural access shaped with taste and expertise.",
      description: "Functional and beautiful design support for living and working spaces, alongside private gallery viewings, personalized acquisitions, and access to renowned designers.",
      outcome: "The client's environment and collection reflect personal identity with discretion and depth.",
      forWhom: ["Homeowners", "Collectors", "Executives", "Family offices", "Clients refining private spaces"],
      whenItMatters: ["New residence setup", "Office refinement", "Art acquisition", "Private gallery access", "Interior refresh"],
      wosolHandles: ["Designer introductions", "Art viewing coordination", "Acquisition support", "Space brief development", "Supplier alignment"],
      experienceStandard: "Cultured, understated, and aligned with the client's personal context.",
      difference: "WOSOL connects design, art, and lifestyle needs rather than treating them as separate tasks.",
      sampleRequests: ["Private gallery viewing", "Interior designer introduction", "Artwork acquisition coordination", "Home styling brief", "Cultural experience arrangement"],
      audienceRelevance: "For clients whose spaces and collections need privacy, taste, and trusted access.",
      cta: "Curate Art or Design Support",
      imageLabel: "Private gallery and interior detail"
    },
    ar: {
      title: "الفنون والتصميم",
      tagline: "مساحات ومجموعات ووصول ثقافي يتشكل بذائقة وخبرة.",
      description: "حلول تصميم عملية وجميلة لمساحات السكن والعمل، مع تنسيق زيارات معارض خاصة واقتناء أعمال فنية وتواصل مع مصممين معروفين.",
      outcome: "تعكس بيئة العميل ومجموعته هويته الشخصية بخصوصية وعمق.",
      forWhom: ["ملاك المنازل", "جامعو الأعمال", "المديرون التنفيذيون", "المكاتب العائلية", "العملاء الذين يطورون مساحاتهم الخاصة"],
      whenItMatters: ["تجهيز مسكن جديد", "تحسين مكتب", "اقتناء عمل فني", "زيارة معرض خاصة", "تجديد داخلي"],
      wosolHandles: ["التعريف بالمصممين", "تنسيق مشاهدة الأعمال الفنية", "دعم الاقتناء", "تطوير موجز المساحة", "مواءمة المورّدين"],
      experienceStandard: "ذائقة ثقافية وهدوء وملاءمة للسياق الشخصي للعميل.",
      difference: "تربط وصول بين التصميم والفن ونمط الحياة بدلاً من التعامل معها كمهام منفصلة.",
      sampleRequests: ["زيارة معرض خاصة", "ترشيح مصمم داخلي", "تنسيق اقتناء عمل فني", "موجز تنسيق منزل", "ترتيب تجربة ثقافية"],
      audienceRelevance: "لمن تحتاج مساحاته ومجموعاته إلى خصوصية وذائقة ووصول موثوق.",
      cta: "نسّق دعماً فنياً أو تصميمياً",
      imageLabel: "معرض خاص وتفاصيل داخلية"
    }
  },
  {
    id: "vip-access",
    categoryKey: "access",
    en: {
      title: "VIP Access",
      tagline: "Privileged access pursued through trusted channels and careful judgment.",
      description: "Exclusive access coordination for high-profile events, luxury venues, and restricted experiences where eligibility, timing, and discretion matter.",
      outcome: "Access feels considered and protected, never loud or transactional.",
      forWhom: ["Private clients", "Executives", "Traveling guests", "Corporate hosts", "Lifestyle clients"],
      whenItMatters: ["High-profile events", "Private venues", "Cultural occasions", "Premium dining", "Restricted experiences"],
      wosolHandles: ["Access request review", "Partner coordination", "Guest requirements", "Timing and arrival planning", "Confidential handling"],
      experienceStandard: "Respectful, discreet, and transparent about availability and conditions.",
      difference: "WOSOL avoids shallow promises and pursues access through suitable, trusted routes.",
      sampleRequests: ["Private dining access", "Event admission coordination", "Members-only venue inquiry", "Cultural event access", "Guest arrival handling"],
      audienceRelevance: "For clients who value meaningful access without public exposure or overstatement.",
      cta: "Explore Private Access",
      imageLabel: "Exclusive venue access"
    },
    ar: {
      title: "الوصول الخاص",
      tagline: "وصول مميز عبر قنوات موثوقة وحكم دقيق.",
      description: "تنسيق الوصول إلى فعاليات رفيعة ومواقع فاخرة وتجارب محدودة، حيث تهم الأهلية والتوقيت والسرية.",
      outcome: "يبدو الوصول مدروساً ومحميّاً، لا صاخباً ولا تجارياً.",
      forWhom: ["العملاء الخاصون", "المديرون التنفيذيون", "الضيوف المسافرون", "مضيفو الشركات", "عملاء نمط الحياة"],
      whenItMatters: ["فعاليات رفيعة", "مواقع خاصة", "مناسبات ثقافية", "مطاعم مميزة", "تجارب محدودة الوصول"],
      wosolHandles: ["مراجعة طلب الوصول", "تنسيق الشركاء", "متطلبات الضيوف", "تخطيط التوقيت والوصول", "التعامل السري"],
      experienceStandard: "احترام وسرية ووضوح حول التوفر والشروط.",
      difference: "تتجنب وصول الوعود السطحية وتسعى للوصول عبر مسارات مناسبة وموثوقة.",
      sampleRequests: ["وصول إلى عشاء خاص", "تنسيق حضور فعالية", "استفسار عن موقع خاص بالأعضاء", "وصول إلى مناسبة ثقافية", "رعاية وصول الضيوف"],
      audienceRelevance: "لمن يقدّر الوصول ذي المعنى دون انكشاف أو مبالغة.",
      cta: "استكشف الوصول الخاص",
      imageLabel: "وصول إلى موقع حصري"
    }
  },
  {
    id: "real-estate",
    categoryKey: "assets",
    en: {
      title: "Real Estate",
      tagline: "Premium property access informed by lifestyle fit and trusted partners.",
      description: "Support for premium real estate opportunities, luxury residences, investment properties, and lifestyle-led property experiences through trusted partners and private market intelligence.",
      outcome: "Property decisions are guided by lifestyle, privacy, and long-term suitability.",
      forWhom: ["Private buyers", "Investors", "Family offices", "Relocating executives", "Clients seeking second homes"],
      whenItMatters: ["Private residence search", "Second-home exploration", "Investment property review", "Relocation", "Lifestyle-led property visits"],
      wosolHandles: ["Requirement mapping", "Trusted partner introductions", "Private viewings", "Lifestyle fit review", "Stay and visit logistics"],
      experienceStandard: "Confidential, informed, and selective without public-market noise.",
      difference: "WOSOL frames property around how the client will live, host, travel, and protect privacy.",
      sampleRequests: ["Private villa search", "Luxury apartment viewing", "Second-home destination review", "Investment property introduction", "Relocation stay planning"],
      audienceRelevance: "For clients who need property access and evaluation to respect lifestyle and confidentiality.",
      cta: "Discuss Property Access",
      imageLabel: "Luxury residence access"
    },
    ar: {
      title: "العقارات",
      tagline: "وصول عقاري فاخر يستند إلى ملاءمة نمط الحياة وشركاء موثوقين.",
      description: "دعم العملاء في الوصول إلى فرص عقارية فاخرة ومساكن راقية وعقارات استثمارية وتجارب عقارية مرتبطة بنمط الحياة عبر شركاء موثوقين ومعرفة سوقية خاصة.",
      outcome: "تصبح قرارات العقار موجهة بنمط الحياة والخصوصية والملاءمة طويلة الأمد.",
      forWhom: ["المشترون الخاصون", "المستثمرون", "المكاتب العائلية", "المديرون المنتقلون", "الباحثون عن منزل ثانٍ"],
      whenItMatters: ["البحث عن مسكن خاص", "استكشاف منزل ثانٍ", "مراجعة عقار استثماري", "الانتقال", "زيارات عقارية مرتبطة بنمط الحياة"],
      wosolHandles: ["تحديد المتطلبات", "التعريف بشركاء موثوقين", "تنسيق زيارات خاصة", "مراجعة ملاءمة نمط الحياة", "لوجستيات الإقامة والزيارة"],
      experienceStandard: "سرية ومعرفة وانتقائية بعيداً عن ضجيج السوق العام.",
      difference: "تنظر وصول للعقار من زاوية كيف سيعيش العميل ويستضيف ويسافر ويحمي خصوصيته.",
      sampleRequests: ["بحث عن فيلا خاصة", "زيارة شقة فاخرة", "مراجعة وجهة منزل ثانٍ", "تعريف بفرصة استثمارية", "تخطيط إقامة انتقالية"],
      audienceRelevance: "لمن يحتاج وصولاً وتقييماً عقارياً يحترم نمط الحياة والسرية.",
      cta: "ناقش الوصول العقاري",
      imageLabel: "وصول إلى مسكن فاخر"
    }
  }
];

const content = {
  en: {
    meta: "",
    nav: { explore: "Explore Profile", services: "View Services", copy: "Copy", copied: "Copied" },
    cover: {
      label: "",
      title: "Private Lifestyle Management, Designed Around You.",
      desc: "WOSOL Concierge manages the hidden complexity behind high-value lifestyles through privacy, anticipation, trusted access, and seamless execution.",
      sub: "Luxury concierge · travel · access · events · private lifestyle coordination",
      visual: "Quiet coordination for people whose time, privacy, and standards require a trusted operating partner."
    },
    summary: "WOSOL Concierge is not simply a service provider. It is a <strong>private lifestyle management partner</strong> for individuals, families, executives, corporate clients, VIP guests, and luxury partners who require trusted coordination across travel, access, hospitality, events, assets, and daily life.",
    sections: {
      essence: {
        num: "02",
        title: "Brand Essence",
        label: "Private Lifestyle Management Partner",
        body: [
          "WOSOL exists for clients whose lives move across private, professional, and international contexts. The role is not to add noise, but to remove complexity from the background of high-value living.",
          "The brand manages time, access, privacy, service quality, and follow-through through one discreet coordination layer."
        ],
        cards: [
          ["Complexity", "WOSOL translates broad lifestyle needs into executable requests with clear ownership."],
          ["Time", "The client does not need to manage every vendor, confirmation, route, and change."],
          ["Privacy", "Requests are handled with discretion and sensitivity to family, business, and social context."]
        ]
      },
      principles: {
        num: "03",
        title: "Vision, Mission & Values",
        label: "Profile Foundation From Source PDF",
        cards: [
          ["Vision", "Be a premier global luxury concierge group, strategically driving investments across the tourism sector."],
          ["Mission", "Empower our brands to deliver exceptional hospitality experiences, creating lasting value for our stakeholders."],
          ["Values", "Luxury is not just about appearances, but experiences designed with care to enhance your lifestyle with ease and privacy."]
        ]
      },
      global: {
        num: "04",
        title: "Global Reach",
        label: "Serving You Globally",
        body: ["Serving you globally, no matter where you are.", "WOSOL is positioned around international movement, trusted access, and private coordination across destinations, residences, events, and lifestyle needs."],
        metrics: [["16", "Concierge service families"], ["05", "Client segment pathways"], ["Global", "By request and partner network"], ["Private", "Inquiry-led coordination"]]
      },
      ecosystem: {
        num: "05",
        title: "Partners & Access Ecosystem",
        label: "Curated Network, Not Public Claims",
        body: ["WOSOL operates through a curated partner ecosystem. Partner categories are shown without unsupported logo usage, preserving professionalism and rights clarity."],
        items: ["Luxury hotels", "Private aviation", "Superyachts", "Resorts", "Fine dining", "Wellness retreats", "Real estate", "Luxury fashion", "Art and design", "Private events"]
      },
      services: {
        num: "06",
        title: "Services Overview",
        label: "Explore Dedicated Service Profiles",
        search: "Search services",
        all: "All Services",
        empty: "No services match the current search and filter.",
        explore: "Explore Service"
      },
      segments: {
        num: "08",
        title: "Client Segments",
        label: "Pathways By Client Need",
        cards: [
          ["Private Individuals", "Need time protection, privacy, and refined lifestyle support.", "Lifestyle Concierge, Personal Assistant, VIP Access"],
          ["Corporate & Executives", "Need seamless travel, hosting, and high-value guest coordination.", "Business Travel, Corporate Concierge, Transportation"],
          ["Families & Estates", "Need continuity, trusted support, and destination or residence coordination.", "Luxury Accommodation, Travel Management, Lifestyle Concierge"],
          ["VIP Guests", "Need arrival care, privileged access, and discreet movement.", "VIP Access, Transportation, Event Planning"],
          ["Luxury Partners", "Need a reliable concierge layer for premium client experiences.", "Corporate Concierge, Events, Yacht Charters"]
        ]
      },
      process: {
        num: "09",
        title: "How WOSOL Works",
        label: "Private Inquiry To Continuous Relationship",
        steps: [
          ["Private Inquiry", "The request is received discreetly and scoped for timing, sensitivity, and intended outcome."],
          ["Lifestyle Assessment", "Preferences, priorities, privacy needs, and service history are translated into a working profile."],
          ["Service Matching", "WOSOL identifies the right service path and partner layer for the request."],
          ["Execution & Coordination", "The team coordinates vendors, timing, communication, confirmations, and contingency handling."],
          ["Continuous Relationship", "Client understanding improves over time, reducing repetition and increasing precision."]
        ]
      },
      standard: {
        num: "10",
        title: "The WOSOL Standard",
        label: "Operating Principles",
        cards: [
          ["Privacy", "Client context and personal movement are handled with restraint."],
          ["Discretion", "Luxury is delivered without unnecessary display."],
          ["Anticipation", "Preferences and risks are considered before the client has to chase details."],
          ["Trusted Access", "Requests move through suitable partners and informed channels."],
          ["Seamless Coordination", "The visible experience stays calm because the operating layer is managed."],
          ["Personal Understanding", "Service improves through familiarity, not generic scripts."]
        ]
      },
      inquiry: {
        label: "Contact & Private Inquiry",
        title: "Begin With a Private Inquiry.",
        body: "Share the request, destination, occasion, or lifestyle need. WOSOL will review the context and recommend the right service path with discretion.",
        request: "Request Private Inquiry",
        email: "Email",
        phone: "Phone",
        website: "Website"
      }
    },
    serviceLabels: {
      forWhom: "For Whom",
      when: "When It Matters",
      handles: "WOSOL Handles",
      standard: "Experience Standard",
      difference: "What Makes It Different",
      samples: "Sample Requests",
      audience: "Target Audience Relevance",
      outcome: "Emotional Outcome",
      back: "Back to Services"
    }
  },
  ar: {
    meta: "",
    nav: { explore: "استكشف الملف", services: "عرض الخدمات", copy: "نسخ", copied: "تم النسخ" },
    cover: {
      label: "",
      title: "إدارة نمط حياة خاص... مصممة حولك.",
      desc: "وصول كونسيرج تدير التعقيد الخفي خلف أنماط الحياة عالية القيمة عبر الخصوصية والاستباقية والوصول الموثوق والتنفيذ السلس.",
      sub: "كونسيرج فاخر · سفر · وصول خاص · مناسبات · تنسيق نمط حياة",
      visual: "تنسيق هادئ لمن يتطلب وقتهم وخصوصيتهم ومعاييرهم شريك تشغيل موثوقاً."
    },
    summary: "وصول كونسيرج ليست مجرد مزود خدمات. إنها <strong>شريك خاص لإدارة نمط الحياة</strong> للأفراد والعائلات والتنفيذيين وعملاء الشركات والضيوف ذوي الأهمية والشركاء الفاخرين ممن يحتاجون تنسيقاً موثوقاً في السفر والوصول والضيافة والمناسبات والأصول والحياة اليومية.",
    sections: {
      essence: {
        num: "02",
        title: "جوهر العلامة",
        label: "Private Lifestyle Management Partner",
        body: [
          "توجد وصول للعملاء الذين تتحرك حياتهم بين الخاص والمهني والدولي. دورها ليس إضافة ضجيج جديد، بل إزالة التعقيد من خلفية الحياة عالية القيمة.",
          "تدير العلامة الوقت والوصول والخصوصية وجودة الخدمة والمتابعة من خلال طبقة تنسيق واحدة وسرية."
        ],
        cards: [
          ["التعقيد", "تحول وصول احتياجات نمط الحياة الواسعة إلى طلبات قابلة للتنفيذ بملكية واضحة."],
          ["الوقت", "لا يحتاج العميل إلى إدارة كل مورّد وتأكيد ومسار وتغيير بنفسه."],
          ["الخصوصية", "تُدار الطلبات بسرية وحساسية تجاه السياق العائلي والمهني والاجتماعي."]
        ]
      },
      principles: {
        num: "03",
        title: "الرؤية والرسالة والقيم",
        label: "Profile Foundation From Source PDF",
        cards: [
          ["الرؤية", "أن نكون مجموعة كونسيرج فاخرة عالمية رائدة، تقود استثمارات استراتيجية في قطاع السياحة والضيافة الفاخرة."],
          ["الرسالة", "تمكين علاماتنا وخدماتنا من تقديم تجارب ضيافة استثنائية تخلق قيمة مستدامة لعملائنا وشركائنا وأصحاب المصلحة."],
          ["القيم", "نؤمن أن الفخامة ليست مجرد مظهر، بل تجربة مصممة بعناية لتجعل نمط حياة العميل أكثر سهولة وخصوصية وراحة."]
        ]
      },
      global: {
        num: "04",
        title: "الوصول العالمي",
        label: "Serving You Globally",
        body: ["نخدمك عالمياً، أينما كنت.", "تتمحور وصول حول الحركة الدولية والوصول الموثوق والتنسيق الخاص عبر الوجهات والمساكن والمناسبات واحتياجات نمط الحياة."],
        metrics: [["16", "عائلة خدمات كونسيرج"], ["05", "مسارات لشرائح العملاء"], ["Global", "حسب الطلب وشبكة الشركاء"], ["Private", "تنسيق يبدأ بطلب خاص"]]
      },
      ecosystem: {
        num: "05",
        title: "منظومة الشركاء والوصول",
        label: "Curated Network, Not Public Claims",
        body: ["تعمل وصول عبر منظومة شركاء منتقاة. تُعرض فئات الشركاء دون استخدام شعارات غير موثقة، حفاظاً على الاحترافية ووضوح حقوق الاستخدام."],
        items: ["فنادق فاخرة", "طيران خاص", "يخوت فاخرة", "منتجعات", "مطاعم راقية", "منتجعات عافية", "عقارات", "أزياء فاخرة", "فن وتصميم", "مناسبات خاصة"]
      },
      services: {
        num: "06",
        title: "نظرة عامة على الخدمات",
        label: "Explore Dedicated Service Profiles",
        search: "ابحث في الخدمات",
        all: "كل الخدمات",
        empty: "لا توجد خدمات مطابقة للبحث والتصفية الحالية.",
        explore: "استكشف الخدمة"
      },
      segments: {
        num: "08",
        title: "شرائح العملاء",
        label: "Pathways By Client Need",
        cards: [
          ["الأفراد الخاصون", "يحتاجون حماية للوقت وخصوصية ودعماً راقياً لنمط الحياة.", "كونسيرج نمط الحياة، المساعد الشخصي، الوصول الخاص"],
          ["الشركات والتنفيذيون", "يحتاجون سفراً سلساً واستضافة وتنسيقاً لضيوف عالي القيمة.", "سفر الأعمال، كونسيرج الشركات، التنقل"],
          ["العائلات والمساكن الخاصة", "تحتاج استمرارية ودعماً موثوقاً وتنسيقاً للوجهات أو الإقامات.", "الإقامة الفاخرة، إدارة السفر، كونسيرج نمط الحياة"],
          ["الضيوف المهمون", "يحتاجون رعاية وصول ووصولاً مميزاً وحركة سرية.", "الوصول الخاص، التنقل، تخطيط المناسبات"],
          ["الشركاء الفاخرون", "يحتاجون طبقة كونسيرج موثوقة لتجارب عملائهم المميزة.", "كونسيرج الشركات، المناسبات، تأجير اليخوت"]
        ]
      },
      process: {
        num: "09",
        title: "كيف تعمل وصول",
        label: "Private Inquiry To Continuous Relationship",
        steps: [
          ["طلب خاص", "يُستقبل الطلب بسرية ويُحدد نطاقه حسب الوقت والحساسية والنتيجة المقصودة."],
          ["تقييم نمط الحياة", "تتحول التفضيلات والأولويات واحتياجات الخصوصية وسجل الخدمة إلى ملف عمل واضح."],
          ["ترشيح الخدمة الأنسب", "تحدد وصول مسار الخدمة وطبقة الشركاء المناسبة للطلب."],
          ["التنفيذ والتنسيق", "ينسق الفريق المورّدين والتوقيت والتواصل والتأكيدات والتعامل مع البدائل."],
          ["علاقة مستمرة", "يتطور فهم العميل بمرور الوقت، فيقل التكرار وتزداد الدقة."]
        ]
      },
      standard: {
        num: "10",
        title: "معيار وصول",
        label: "Operating Principles",
        cards: [
          ["الخصوصية", "يُدار سياق العميل وحركته الشخصية بكثير من التحفظ."],
          ["السرية", "تُقدم الفخامة دون استعراض غير ضروري."],
          ["الاستباقية", "تُدرس التفضيلات والمخاطر قبل أن يضطر العميل إلى متابعة التفاصيل."],
          ["الوصول الموثوق", "تتحرك الطلبات عبر شركاء مناسبين وقنوات واعية."],
          ["التنسيق السلس", "تبقى التجربة المرئية هادئة لأن طبقة التشغيل مُدارة."],
          ["الفهم الشخصي", "تتحسن الخدمة عبر المعرفة المتراكمة، لا عبر نصوص عامة."]
        ]
      },
      inquiry: {
        label: "Contact & Private Inquiry",
        title: "ابدأ بطلب خاص.",
        body: "شاركنا الطلب أو الوجهة أو المناسبة أو احتياج نمط الحياة. ستراجع وصول السياق وتقترح مسار الخدمة الأنسب بسرية.",
        request: "طلب تواصل خاص",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        website: "الموقع الإلكتروني"
      }
    },
    serviceLabels: {
      forWhom: "لمن",
      when: "متى تكون مهمة",
      handles: "ما تتولاه وصول",
      standard: "معيار التجربة",
      difference: "ما يجعل التجربة مختلفة",
      samples: "نماذج طلبات",
      audience: "ملاءمة الشريحة المستهدفة",
      outcome: "الأثر العاطفي",
      back: "العودة إلى الخدمات"
    }
  }
};

const imagePrompts = {
  "lifestyle-concierge": "Editorial photograph of a quiet luxury concierge desk in a private residence, cream stone, navy notebook, no visible logos, discreet service details, soft natural light.",
  "travel-management": "Premium travel planning still life with passport, bespoke itinerary, luxury hotel key, cream and navy palette, international but understated, no logos.",
  "private-aviation": "Private jet cabin detail with champagne beige leather, navy accents, runway light through window, quiet executive atmosphere, no people, no logos.",
  "luxury-accommodation": "Private villa pool at golden hour, architectural calm, warm stone, linen curtains, secluded luxury residence, no visible brand marks.",
  "yacht-charters": "Luxury yacht deck at sunset with calm water, teak detail, cream upholstery, elegant and uncrowded, no party scene, no logos.",
  "health-wellness-resorts": "Secluded wellness resort terrace with spa water, warm stone, linen, greenery, quiet restorative mood, realistic luxury hospitality.",
  "shopping-gifting": "Luxury gifting still life with textured paper, ribbon, leather tray, rare object hint, cream navy muted gold palette, no brand logos.",
  "business-travel-management": "Executive boardroom travel planning scene with itinerary, premium pen, city view, navy documents, quiet corporate luxury.",
  "personal-assistant": "Discreet personal assistant service detail, gloved hand placing invitation card on cream desk, refined stationery, private atmosphere.",
  "special-request": "Bespoke request concept with sealed envelope, private access card, elegant tray, dim luxury interior, understated and confidential.",
  "transportation-services": "Executive black car arrival at luxury hotel entrance, soft evening light, driver silhouette only, no visible logos, calm and private.",
  "corporate-concierge-services": "Corporate hospitality setup with boardroom table, fine dining detail, itinerary cards, executive guest welcome, cream and navy tone.",
  "event-planning": "Private event table detail with linen, candlelight, floral restraint, premium place cards, intimate luxury setting, no crowd.",
  "arts-design": "Private art gallery viewing with sculptural furniture, warm wall light, quiet collector atmosphere, no visible artist signatures or logos.",
  "vip-access": "Exclusive venue corridor with velvet rope suggested subtly, warm lighting, empty premium entrance, private access mood, no logos.",
  "real-estate": "Luxury residence interior with architectural staircase, warm stone, refined furniture, private viewing atmosphere, no real estate signage."
};

for (const blueprint of serviceBlueprints) {
  blueprint.image = `assets/images/${blueprint.id}.jpg`;
  blueprint.imagePrompt = imagePrompts[blueprint.id];
}

const ecosystemImageFiles = [
  "luxury-hotels",
  "private-aviation",
  "superyachts",
  "resorts",
  "fine-dining",
  "wellness-retreats",
  "real-estate",
  "luxury-fashion",
  "art-and-design",
  "private-events"
];

const ecosystemRoles = {
  en: [
    "Hospitality access",
    "Private mobility",
    "Marine lifestyle",
    "Resort stays",
    "Dining curation",
    "Wellness retreats",
    "Property access",
    "Personal style",
    "Culture and interiors",
    "Private hosting"
  ],
  ar: [
    "وصول ضيافي",
    "تنقل خاص",
    "نمط حياة بحري",
    "إقامات منتجعية",
    "تنسيق المطاعم",
    "رحلات استشفاء",
    "وصول عقاري",
    "أسلوب شخصي",
    "ثقافة ومساحات",
    "استضافة خاصة"
  ]
};

const accessLogos = [
  "Four Seasons",
  "Mandarin Oriental",
  "Aman",
  "Dorchester Collection",
  "Waldorf Astoria",
  "Bvlgari Hotels & Resorts",
  "Rosewood Hotel Group",
  "One&Only",
  "The Ritz-Carlton",
  "Raffles",
  "The Leading Hotels of the World",
  "JOALI",
  "Rocco Forte Hotels",
  "Anantara",
  "Cheval Blanc",
  "Jumeirah",
  "The Luxury Collection",
  "Alpha Star Aviation Services",
  "Edmiston",
  "Cabrio",
  "Maison de L'Amie Flowers"
];

const socialLinks = [
  { label: "LinkedIn", short: "in", href: "https://www.linkedin.com/company/wosol-concierge" },
  { label: "X", short: "X", href: "https://x.com/wosol_concierge" },
  { label: "Instagram", short: "◎", href: "https://www.instagram.com/wosol_concierge" },
  { label: "Snapchat", short: "♧", href: "https://www.snapchat.com/@wosolconcierge" },
  { label: "TikTok", short: "♪", href: "https://www.tiktok.com/@wosol_concierge" }
];

let state = {
  lang: "en",
  filter: "all",
  query: ""
};

function getServices(lang = state.lang) {
  return serviceBlueprints.map((service) => ({
    id: service.id,
    categoryKey: service.categoryKey,
    category: categories[service.categoryKey][lang],
    image: service.image,
    imagePrompt: service.imagePrompt,
    ...service[lang]
  }));
}

function textDirClass() {
  return state.lang === "ar" ? "ar" : "en";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sectionShell(key, inner) {
  const section = content[state.lang].sections[key];
  return `
    <div class="section-header">
      <span class="section-num en">${section.num}</span>
      <div>
        <h2 class="section-title ${textDirClass()}">${section.title}</h2>
        <p class="section-title-en en">${section.label}</p>
      </div>
    </div>
    <div class="section-body ${textDirClass()}">${inner}</div>
  `;
}

function card(title, desc, index, featured = false, meta = "") {
  return `
    <article class="strategy-card ${featured ? "featured" : ""}">
      <span class="card-num en">${meta || String(index).padStart(2, "0")}</span>
      <div class="card-title ${textDirClass()}">${escapeHtml(title)}</div>
      <div class="card-desc ${textDirClass()}">${escapeHtml(desc)}</div>
    </article>
  `;
}

function renderCover() {
  const c = content[state.lang].cover;
  document.getElementById("documentMeta").textContent = content[state.lang].meta;
  document.getElementById("cover").innerHTML = `
    <div class="hero-layout">
      <div>
        <h1 class="hero-title ${textDirClass()}">${c.title}</h1>
        <p class="hero-desc ${textDirClass()}">${c.desc}</p>
        <div class="hero-en en">${c.sub}</div>
        <div class="hero-actions">
          <button class="action-btn primary" type="button" data-jump="essence">${content[state.lang].nav.explore}</button>
          <button class="action-btn subtle" type="button" data-jump="services">${content[state.lang].nav.services}</button>
        </div>
      </div>
      <div class="visual-frame cover-card" role="img" aria-label="${escapeHtml(c.visual)}">
        <div class="visual-caption">
          <span class="en">Private Operating Layer</span>
          <strong class="${textDirClass()}">${c.visual}</strong>
        </div>
      </div>
    </div>
  `;
}

function renderSummary() {
  document.getElementById("executiveSummary").innerHTML = `
    <span class="exec-label en">Executive Summary</span>
    <p class="${textDirClass()}">${content[state.lang].summary}</p>
  `;
}

function renderBasicSections() {
  const s = content[state.lang].sections;

  document.getElementById("essence").innerHTML = sectionShell("essence", `
    ${s.essence.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    <div class="cards-grid">${s.essence.cards.map((item, i) => card(item[0], item[1], i + 1, i === 0)).join("")}</div>
  `);

  document.getElementById("principles").innerHTML = sectionShell("principles", `
    <div class="cards-grid">${s.principles.cards.map((item, i) => card(item[0], item[1], i + 1, i === 0)).join("")}</div>
  `);

  document.getElementById("global").innerHTML = sectionShell("global", `
    <div class="split-grid">
      <div>${s.global.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div>
      <div class="visual-frame" role="img" aria-label="Luxury abstract global access map">
        <div class="visual-caption"><span class="en">Global Access Map</span><strong class="${textDirClass()}">${escapeHtml(s.global.body[0])}</strong></div>
      </div>
    </div>
  `);

  document.getElementById("ecosystem").innerHTML = sectionShell("ecosystem", `
    ${s.ecosystem.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
    ${renderPartnerShowcase(s.ecosystem.items)}
  `);

  renderAccessLogos();

  document.getElementById("segments").innerHTML = sectionShell("segments", `
    <div class="cards-grid">${s.segments.cards.map((item, i) => `
      <article class="strategy-card ${i === 1 ? "featured" : ""}">
        <span class="card-num en">${String(i + 1).padStart(2, "0")}</span>
        <div class="card-title ${textDirClass()}">${escapeHtml(item[0])}</div>
        <div class="card-desc ${textDirClass()}">${escapeHtml(item[1])}</div>
        <div class="card-meta en">${escapeHtml(item[2])}</div>
      </article>
    `).join("")}</div>
  `);

  document.getElementById("process").innerHTML = sectionShell("process", `
    <div class="process-list">${s.process.steps.map((item, i) => `
      <div class="process-step">
        <div class="process-step-num en">${String(i + 1).padStart(2, "0")}</div>
        <div><div class="card-title ${textDirClass()}">${escapeHtml(item[0])}</div><p>${escapeHtml(item[1])}</p></div>
      </div>
    `).join("")}</div>
  `);

  document.getElementById("standard").innerHTML = sectionShell("standard", `
    <div class="cards-grid">${s.standard.cards.map((item, i) => card(item[0], item[1], i + 1, i === 0)).join("")}</div>
  `);
}

function renderPartnerShowcase(items) {
  const roles = ecosystemRoles[state.lang];

  return `
    <div class="partner-showcase" data-partner-showcase>
      <div class="partner-desktop-showcase">
        ${renderPartnerGallery(items, roles, "desktop")}
      </div>
      ${renderPartnerGallery(items, roles, "mobile")}
    </div>
  `;
}

function renderPartnerGallery(items, roles, variant) {
  const isMobile = variant === "mobile";
  const readLabel = state.lang === "ar" ? "استكشف الفئة" : "Explore category";
  const slides = items.map((item, index) => `
    <article class="partner-gallery-card" data-partner-slide="${index}">
      <img src="assets/images/partners/${ecosystemImageFiles[index]}.jpg" alt="${escapeHtml(item)}" loading="lazy" />
      <div class="partner-gallery-card__shade" aria-hidden="true"></div>
      <div class="partner-gallery-card__content">
        <h3 class="${textDirClass()}">${escapeHtml(item)}</h3>
        <p class="${textDirClass()}">${escapeHtml(roles[index])}</p>
        <span class="partner-gallery-card__link ${textDirClass()}">${readLabel}</span>
      </div>
    </article>
  `).join("");
  const dots = items.map((_, index) => `
    <button class="partner-gallery-dot ${index === 0 ? "active" : ""}" type="button" data-gallery-dot="${index}" aria-label="Go to partner slide ${index + 1}"></button>
  `).join("");

  return `
    <div class="partner-gallery partner-gallery--${variant}" data-partner-gallery>
      <div class="partner-gallery-head">
        <div>
          <span class="closing-label en">${isMobile ? (state.lang === "ar" ? "Mobile Access View" : "Curated Access View") : (state.lang === "ar" ? "Curated Access Gallery" : "Curated Access Gallery")}</span>
          <p class="${textDirClass()}">${state.lang === "ar" ? "استعرض فئات الوصول بصور واضحة وتفاصيل مختصرة." : "Browse partner categories through larger, clearer visual cards."}</p>
        </div>
        <div class="partner-gallery-controls">
          <button class="partner-gallery-btn" type="button" data-gallery-prev aria-label="Previous partner category">‹</button>
          <button class="partner-gallery-btn" type="button" data-gallery-next aria-label="Next partner category">›</button>
        </div>
      </div>
      <div class="partner-gallery-track" data-gallery-track>
        ${slides}
      </div>
      <div class="partner-gallery-dots">${dots}</div>
    </div>
  `;
}

function renderAccessLogos() {
  const isArabic = state.lang === "ar";
  const logoSet = accessLogos.map(accessLogoMarkup).join("");
  document.getElementById("accessLogos").innerHTML = `
    <div class="access-logo-cloud" aria-label="${isArabic ? "مشهد علامات الوصول الفاخر" : "Luxury access logo landscape"}">
      <div class="logo-marquee" aria-hidden="false">
        <div class="logo-marquee__track">
          <div class="logo-marquee__group">${logoSet}</div>
          <div class="logo-marquee__group" aria-hidden="true">${logoSet}</div>
        </div>
        <span class="logo-edge-blur logo-edge-blur--left" aria-hidden="true"></span>
        <span class="logo-edge-blur logo-edge-blur--right" aria-hidden="true"></span>
      </div>
    </div>
  `;
}

function accessLogoMarkup(name) {
  if (name === "Jumeirah") {
    return `
      <span class="logo-wordmark logo-wordmark--image en">
        <img src="assets/logos/jumeirah.png" alt="Jumeirah" loading="lazy" />
      </span>
    `;
  }
  if (name === "The Luxury Collection") {
    return `
      <span class="logo-wordmark logo-wordmark--image logo-wordmark--luxury-collection en">
        <img src="assets/logos/luxury-collection.svg" alt="The Luxury Collection" loading="lazy" />
      </span>
    `;
  }
  if (name === "Alpha Star Aviation Services") {
    return `
      <span class="logo-wordmark logo-wordmark--image logo-wordmark--alpha-star en">
        <img src="assets/logos/alpha-star-aviation.jpeg" alt="Alpha Star Aviation Services" loading="lazy" />
      </span>
    `;
  }
  if (name === "Rocco Forte Hotels") {
    return `
      <span class="logo-wordmark logo-wordmark--image logo-wordmark--rocco-forte en">
        <img src="assets/logos/rocco-forte-hotels.svg" alt="Rocco Forte Hotels" loading="lazy" />
      </span>
    `;
  }
  return `<span class="logo-wordmark en">${escapeHtml(name)}</span>`;
}

function renderServices() {
  const s = content[state.lang].sections.services;
  const services = getServices();
  const filtered = services.filter((service) => {
    const matchesFilter = state.filter === "all" || service.categoryKey === state.filter;
    const haystack = [
      service.title,
      service.category,
      service.tagline,
      service.description,
      service.forWhom.join(" "),
      service.sampleRequests.join(" ")
    ].join(" ").toLowerCase();
    return matchesFilter && haystack.includes(state.query.toLowerCase());
  });

  const categoryButtons = [
    `<button class="filter-btn ${state.filter === "all" ? "active" : ""}" type="button" data-filter="all">${s.all}</button>`,
    ...Object.keys(categories).map((key) => `<button class="filter-btn ${state.filter === key ? "active" : ""}" type="button" data-filter="${key}">${categories[key][state.lang]}</button>`)
  ].join("");

  document.getElementById("services").innerHTML = sectionShell("services", `
    <div class="service-tools">
      <input class="search-box ${textDirClass()}" id="serviceSearch" type="search" value="${escapeHtml(state.query)}" placeholder="${s.search}" aria-label="${s.search}" />
      <div class="filter-row">${categoryButtons}</div>
    </div>
    <div class="cards-grid" id="serviceGrid">
      ${filtered.length ? filtered.map((service, i) => serviceCard(service, i)).join("") : `<div class="no-results ${textDirClass()}">${s.empty}</div>`}
    </div>
  `);
}

function serviceCard(service, index) {
  const s = content[state.lang].sections.services;
  return `
    <article class="strategy-card service-card" data-service="${service.id}">
      <div class="service-card-visual image-loaded" style="--service-image: url('${escapeHtml(service.image)}')"><span>${escapeHtml(service.imageLabel)}</span></div>
      <span class="card-num en">${String(index + 1).padStart(2, "0")} · ${escapeHtml(service.category)}</span>
      <div class="card-title ${textDirClass()}">${escapeHtml(service.title)}</div>
      <div class="card-desc ${textDirClass()}">${escapeHtml(service.tagline)}</div>
      <button class="card-cta" type="button" data-open-service="${service.id}">
        ${s.explore}<span class="card-cta-arrow"></span>
      </button>
    </article>
  `;
}

function renderInquiry() {
  const socialItems = socialLinks.map((item) => `
    <a class="social-link en" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="${item.label}">
      <span>${item.short}</span>
    </a>
  `).join("");
  document.getElementById("inquiry").innerHTML = `
    <div class="contact-signature">
      <div class="contact-signature__inner">
        <div class="contact-brand en" aria-label="WOSOL Concierge">
          <span class="contact-brand__name">WOSOL</span>
          <span class="contact-brand__sub">CONCIERGE</span>
        </div>
        <div class="contact-divider" aria-hidden="true"></div>
        <div class="contact-lines">
          <a class="contact-line en" href="tel:+966500009979">
            <span class="contact-icon" aria-hidden="true">${contactIcon("phone")}</span>
            <span>+966 50 000 9979</span>
          </a>
          <a class="contact-line en" href="https://wosolconcierge.com" target="_blank" rel="noopener noreferrer">
            <span class="contact-icon" aria-hidden="true">${contactIcon("globe")}</span>
            <span>wosolconcierge.com</span>
          </a>
          <a class="contact-line en" href="mailto:info@wosolconcierge.com">
            <span class="contact-icon" aria-hidden="true">${contactIcon("mail")}</span>
            <span>info@wosolconcierge.com</span>
          </a>
        </div>
      </div>
      <div class="social-links">${socialItems}</div>
    </div>
  `;
}

function contactIcon(type) {
  const icons = {
    phone: `<svg viewBox="0 0 24 24" fill="none"><path d="M6.6 3.8 9.2 3l2.1 4.7-1.6 1.1c.8 1.7 2.1 3 3.8 3.8l1.1-1.6 4.7 2.1-.8 2.6c-.3 1-1.2 1.6-2.2 1.5C10.5 16.8 6.2 12.5 5.1 6.7 4.9 5.7 5.6 4.1 6.6 3.8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.4"/><path d="M3.8 12h16.4M12 3.5c2.2 2.2 3.2 5 3.2 8.5s-1 6.3-3.2 8.5M12 3.5C9.8 5.7 8.8 8.5 8.8 12s1 6.3 3.2 8.5" stroke="currentColor" stroke-width="1.4"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16v10H4V7Z" stroke="currentColor" stroke-width="1.5"/><path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`
  };
  return icons[type] || "";
}

function contactItem(label, value) {
  return `
    <div class="contact-item">
      <span class="en">${escapeHtml(label)}</span>
      <strong class="en">${escapeHtml(value)}</strong>
      <button class="mini-btn" type="button" data-copy="${escapeHtml(value)}">${content[state.lang].nav.copy}</button>
    </div>
  `;
}

function renderServiceDetail(id) {
  const service = getServices().find((item) => item.id === id);
  if (!service) return;
  const labels = content[state.lang].serviceLabels;
  document.getElementById("serviceDetailContent").innerHTML = `
    <div class="service-hero">
      <div>
        <span class="doc-label en">${escapeHtml(service.category)}</span>
        <h2 class="page-title ${textDirClass()}" id="serviceTitle">${escapeHtml(service.title)}</h2>
        <p class="hero-desc ${textDirClass()}">${escapeHtml(service.description)}</p>
        <div class="hero-en en">${escapeHtml(service.tagline)}</div>
        <div class="service-actions">
          <a class="action-btn primary" href="mailto:info@wosolconcierge.com?subject=${encodeURIComponent(service.title + " Inquiry")}">${escapeHtml(service.cta)}</a>
          <button class="action-btn subtle" type="button" data-close-service>${labels.back}</button>
        </div>
      </div>
      <div class="visual-frame service-image-frame" style="--service-image: url('${escapeHtml(service.image)}')" role="img" aria-label="${escapeHtml(service.imagePrompt)}">
        <div class="visual-caption"><span class="en">Image Direction</span><strong class="${textDirClass()}">${escapeHtml(service.imageLabel)}</strong></div>
      </div>
    </div>
    <div class="detail-grid">
      ${detailBlock(labels.outcome, service.outcome)}
      ${detailBlock(labels.standard, service.experienceStandard)}
      ${detailList(labels.forWhom, service.forWhom)}
      ${detailList(labels.when, service.whenItMatters)}
      ${detailList(labels.handles, service.wosolHandles)}
      ${detailList(labels.samples, service.sampleRequests)}
      ${detailBlock(labels.difference, service.difference, true)}
      ${detailBlock(labels.audience, service.audienceRelevance)}
    </div>
  `;
  const detail = document.getElementById("serviceDetail");
  detail.classList.add("open");
  detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("detail-open");
  document.querySelector(".service-detail__panel").focus();
}

function detailBlock(title, value, full = false) {
  return `
    <section class="detail-block ${full ? "full" : ""}">
      <h3 class="en">${escapeHtml(title)}</h3>
      <p class="${textDirClass()}">${escapeHtml(value)}</p>
    </section>
  `;
}

function detailList(title, items) {
  return `
    <section class="detail-block">
      <h3 class="en">${escapeHtml(title)}</h3>
      <ul class="detail-list ${textDirClass()}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function closeServiceDetail(updateHash = true) {
  const detail = document.getElementById("serviceDetail");
  detail.classList.remove("open");
  detail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("detail-open");
  if (updateHash && location.hash.startsWith("#service/")) {
    history.pushState("", document.title, "#services");
  }
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("wosol-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-lang]").forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
  renderAll();
  const activeService = location.hash.startsWith("#service/") ? location.hash.replace("#service/", "") : null;
  if (activeService) renderServiceDetail(activeService);
}

function renderAll() {
  renderCover();
  renderSummary();
  renderBasicSections();
  renderServices();
  renderInquiry();
  bindDynamicEvents();
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.onclick = () => document.getElementById(btn.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelectorAll("[data-open-service]").forEach((btn) => {
    btn.onclick = () => {
      const id = btn.dataset.openService;
      history.pushState("", document.title, `#service/${id}`);
      renderServiceDetail(id);
    };
  });
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.onclick = () => {
      state.filter = btn.dataset.filter;
      renderServices();
      bindDynamicEvents();
    };
  });
  const search = document.getElementById("serviceSearch");
  if (search) {
    search.oninput = (event) => {
      state.query = event.target.value;
      renderServices();
      bindDynamicEvents();
      document.getElementById("serviceSearch")?.focus();
    };
  }
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.onclick = async () => {
      await copyText(btn.dataset.copy);
      const original = content[state.lang].nav.copy;
      btn.textContent = content[state.lang].nav.copied;
      setTimeout(() => { btn.textContent = original; }, 1200);
    };
  });
  document.querySelectorAll("[data-close-service]").forEach((btn) => {
    btn.onclick = () => closeServiceDetail(true);
  });
  bindPartnerShowcase();
  bindPartnerGallery();
}

function bindPartnerShowcase() {
  const root = document.querySelector("[data-partner-showcase]");
  if (!root) return;
  const items = root.querySelectorAll("[data-partner-id]");
  const setActive = (id) => {
    items.forEach((item) => {
      const active = item.dataset.partnerId === id;
      item.classList.toggle("active", active);
      item.classList.toggle("dimmed", !active);
    });
  };
  const clearActive = () => {
    items.forEach((item) => {
      item.classList.toggle("active", item.dataset.partnerId === "0");
      item.classList.remove("dimmed");
    });
  };
  items.forEach((item) => {
    item.onmouseenter = () => setActive(item.dataset.partnerId);
    item.onfocus = () => setActive(item.dataset.partnerId);
    item.onclick = () => setActive(item.dataset.partnerId);
  });
  root.onmouseleave = clearActive;
}

function bindPartnerGallery() {
  document.querySelectorAll("[data-partner-gallery]").forEach((gallery) => {
    const track = gallery.querySelector("[data-gallery-track]");
    const cards = [...gallery.querySelectorAll("[data-partner-slide]")];
    const dots = [...gallery.querySelectorAll("[data-gallery-dot]")];
    if (!track || !cards.length) return;

    const setActive = (index) => {
      dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === index));
    };
    const scrollToIndex = (index) => {
      const target = cards[Math.max(0, Math.min(index, cards.length - 1))];
      target?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActive(cards.indexOf(target));
    };
    const currentIndex = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      return cards.reduce((closest, card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: 0, distance: Infinity }).index;
    };

    gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => scrollToIndex(currentIndex() - 1));
    gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => scrollToIndex(currentIndex() + 1));
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => scrollToIndex(index));
    });
    track.addEventListener("scroll", () => {
      window.requestAnimationFrame(() => setActive(currentIndex()));
    }, { passive: true });
  });
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  document.getElementById("progressBar").style.width = `${Math.min(100, Math.max(0, progress))}%`;

  let active = "cover";
  document.querySelectorAll(".chapter").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.36) active = section.id;
  });
  document.querySelectorAll(".rail-dot").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.jump === active);
  });
}

function initIntroLoader() {
  const loader = document.getElementById("introLoader");
  if (!loader) return;
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = reducedMotion ? 650 : 3000;
  window.setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    loader.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
    window.setTimeout(() => {
      loader.remove();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      updateProgress();
    }, 700);
  }, delay);
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }
  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function handleHash() {
  if (location.hash.startsWith("#service/")) {
    renderServiceDetail(location.hash.replace("#service/", ""));
  } else {
    closeServiceDetail(false);
    if (location.hash.length > 1) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("hashchange", handleHash);
window.addEventListener("popstate", handleHash);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeServiceDetail(true);
  if (event.key === "ArrowDown" && !document.body.classList.contains("detail-open")) window.scrollBy({ top: window.innerHeight * 0.82, behavior: "smooth" });
  if (event.key === "ArrowUp" && !document.body.classList.contains("detail-open")) window.scrollBy({ top: -window.innerHeight * 0.82, behavior: "smooth" });
});

setLanguage(state.lang);
updateProgress();
initIntroLoader();
