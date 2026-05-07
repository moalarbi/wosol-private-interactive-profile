const categories = {
  lifestyle: "Lifestyle Management",
  travel: "Travel & Mobility",
  access: "Luxury Access",
  events: "Corporate & Private Events",
  assets: "Assets, Spaces & Culture"
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
    }
  }
];

const content = {
  en: {
    meta: "",
    nav: { explore: "Explore Profile", services: "View Services", print: "Print", share: "Share", copy: "Copy", copied: "Copied", shared: "Link Copied" },
    cover: {
      label: "",
      title: "Private Lifestyle Management, Designed Around You.",
      desc: "WOSOL Concierge manages the hidden complexity behind high-value lifestyles through privacy, anticipation, trusted access, and seamless execution.",
      sub: "Luxury concierge · travel · access · events · private lifestyle coordination",
      visual: "Quiet coordination for people whose time, privacy, and standards require a trusted operating partner."
    },
    summary: "WOSOL Concierge is not simply a service provider. It is a <strong>private lifestyle management partner</strong> for individuals, families, executives, corporate clients, VIP guests, and luxury partners who require trusted coordination across travel, access, hospitality, events, assets, and daily life.",
    sections: {
      profileIndex: {
        num: "02",
        title: "Interactive Profile Map",
        label: "Digital Alternative To The Company Profile",
        body: [
          "This profile translates the source company profile into a live executive document: brand foundation, operating logic, service portfolio, client pathways, and private inquiry information in one shareable experience.",
          "It is designed to work as a first introduction for clients, partners, and executive reviewers while preserving the calm, confidential WOSOL identity."
        ],
        facts: [["16", "Dedicated service profiles"], ["05", "Client pathways"], ["03", "Brand foundations"], ["01", "Private inquiry point"]],
        cards: [
          ["Brand Foundation", "Vision, mission, values, and the global promise from the source profile.", "principles"],
          ["Partner Landscape", "A refined version of the partner page and luxury access ecosystem.", "ecosystem"],
          ["Global Promise", "Serving you globally, no matter where you are.", "global"],
          ["Service Portfolio", "A full interactive view of the sixteen WOSOL Concierge service families.", "services"],
          ["Client Pathways", "Clear positioning for private individuals, executives, families, VIP guests, and luxury partners.", "segments"],
          ["Operating Standard", "Privacy, discretion, anticipation, trusted access, and seamless coordination.", "standard"]
        ]
      },
      essence: {
        num: "06",
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
        num: "05",
        title: "Global Reach",
        label: "Serving You Globally",
        body: ["Serving you globally, no matter where you are.", "WOSOL is positioned around international movement, trusted access, and private coordination across destinations, residences, events, and lifestyle needs."],
        metrics: [["16", "Concierge service families"], ["05", "Client segment pathways"], ["Global", "By request and partner network"], ["Private", "Inquiry-led coordination"]]
      },
      ecosystem: {
        num: "04",
        title: "Partners & Access Ecosystem",
        label: "Curated Network, Not Public Claims",
        body: ["WOSOL operates through a curated partner ecosystem. Partner categories are shown without unsupported logo usage, preserving professionalism and rights clarity."],
        items: ["Luxury hotels", "Private aviation", "Superyachts", "Resorts", "Fine dining", "Wellness retreats", "Real estate", "Luxury fashion", "Art and design", "Private events"]
      },
      services: {
        num: "07",
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
  blueprint.image = `assets/images/${blueprint.id}.webp`;
  blueprint.imagePrompt = imagePrompts[blueprint.id];
}

function responsiveImagePath(image, variant = "desktop") {
  return image.replace("assets/images/", "assets/images/responsive/").replace(/\.webp$/, `-${variant}.webp`);
}

function responsivePartnerImagePath(name, variant = "desktop") {
  return `assets/images/partners/responsive/${name}-${variant}.webp`;
}

function backgroundImageVars(prefix, image) {
  const desktop = responsiveImagePath(image, "desktop");
  const mobile = responsiveImagePath(image, "mobile");
  return `--${prefix}: url('${escapeHtml(desktop)}'); --${prefix}-mobile: url('${escapeHtml(mobile)}')`;
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

const ecosystemRoles = [
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
];

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

function getServices() {
  return serviceBlueprints.map((service) => ({
    id: service.id,
    categoryKey: service.categoryKey,
    category: categories[service.categoryKey],
    image: service.image,
    imagePrompt: service.imagePrompt,
    ...service.en
  }));
}

function textDirClass() {
  return "en";
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
  const section = content.en.sections[key];
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
  const c = content.en.cover;
  document.getElementById("documentMeta").textContent = content.en.meta;
  document.getElementById("cover").innerHTML = `
    <div class="hero-layout">
      <div>
        <h1 class="hero-title ${textDirClass()}">${c.title}</h1>
        <p class="hero-desc ${textDirClass()}">${c.desc}</p>
        <div class="hero-en en">${c.sub}</div>
        <div class="hero-actions">
          <button class="action-btn primary" type="button" data-jump="essence">${content.en.nav.explore}</button>
          <button class="action-btn subtle" type="button" data-jump="services">${content.en.nav.services}</button>
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
    <p class="${textDirClass()}">${content.en.summary}</p>
  `;
}

function renderProfileIndex() {
  const s = content.en.sections.profileIndex;
  document.getElementById("profileIndex").innerHTML = sectionShell("profileIndex", `
    <div class="profile-index-layout">
      <div>
        ${s.body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
      </div>
      <div class="profile-facts" aria-label="${escapeHtml(s.title)}">
        ${s.facts.map((item) => `
          <div class="profile-fact">
            <strong class="en">${escapeHtml(item[0])}</strong>
            <span class="${textDirClass()}">${escapeHtml(item[1])}</span>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="cards-grid profile-map-grid">
      ${s.cards.map((item, i) => `
        <article class="strategy-card ${i === 1 ? "featured" : ""}">
          <span class="card-num en">${String(i + 1).padStart(2, "0")}</span>
          <div class="card-title ${textDirClass()}">${escapeHtml(item[0])}</div>
          <div class="card-desc ${textDirClass()}">${escapeHtml(item[1])}</div>
          <button class="card-cta" type="button" data-jump="${escapeHtml(item[2])}">
            ${content.en.nav.explore}<span class="card-cta-arrow"></span>
          </button>
        </article>
      `).join("")}
    </div>
  `);
}

function renderBasicSections() {
  const s = content.en.sections;

  renderProfileIndex();

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
  const roles = ecosystemRoles;

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
  const readLabel = "Explore category";
  const slides = items.map((item, index) => `
    <article class="partner-gallery-card" data-partner-slide="${index}">
      <img src="${responsivePartnerImagePath(ecosystemImageFiles[index], "desktop")}" srcset="${responsivePartnerImagePath(ecosystemImageFiles[index], "mobile")} 900w, ${responsivePartnerImagePath(ecosystemImageFiles[index], "desktop")} 1280w" sizes="(max-width: 640px) 82vw, 33vw" alt="${escapeHtml(item)}" loading="lazy" />
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
          <span class="closing-label en">Curated Access Gallery</span>
          <p class="${textDirClass()}">Browse partner categories through larger, clearer visual cards.</p>
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
  if (name === "The Leading Hotels of the World") {
    return `
      <span class="logo-wordmark logo-wordmark--image logo-wordmark--leading-hotels en">
        <img src="assets/logos/leading-hotels.svg" alt="The Leading Hotels of the World" loading="lazy" />
      </span>
    `;
  }
  return `<span class="logo-wordmark en">${escapeHtml(name)}</span>`;
}

function renderServices() {
  const s = content.en.sections.services;
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
    ...Object.keys(categories).map((key) => `<button class="filter-btn ${state.filter === key ? "active" : ""}" type="button" data-filter="${key}">${categories[key]}</button>`)
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
  const s = content.en.sections.services;
  return `
    <article class="strategy-card service-card" data-service="${service.id}">
      <div class="service-card-visual image-loaded" style="${backgroundImageVars("service-image", service.image)}"><span>${escapeHtml(service.imageLabel)}</span></div>
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

function profileSlides() {
  const c = content.en;
  const services = getServices();
  return [
    {
      id: "cover",
      kind: "cover",
      num: "01",
      title: state.lang === "ar" ? "وصول كونسيرج" : "WOSOL Concierge",
      subtitle: state.lang === "ar" ? "بروفايل الشركة" : "Company Profile",
      body: c.cover.desc,
      image: "assets/images/lifestyle-concierge.webp"
    },
    {
      id: "principles",
      kind: "principles",
      num: "02",
      title: state.lang === "ar" ? "الرؤية والرسالة والقيم" : "Our Values, Vision & Mission",
      subtitle: "Vision · Mission · Values",
      cards: c.sections.principles.cards
    },
    {
      id: "partners",
      kind: "partners",
      num: "03",
      title: state.lang === "ar" ? "شركاؤنا" : "Our Partners",
      subtitle: state.lang === "ar" ? "منظومة وصول فاخرة" : "Luxury Access Ecosystem"
    },
    {
      id: "global",
      kind: "global",
      num: "04",
      title: state.lang === "ar" ? "نخدمك عالمياً، أينما كنت." : "Serving you globally, no matter where you are.",
      subtitle: state.lang === "ar" ? "الوعد العالمي" : "Global Promise",
      image: "assets/images/travel-management.webp"
    },
    ...services.map((service, index) => ({
      id: service.id,
      kind: "service",
      num: String(index + 5).padStart(2, "0"),
      title: service.title,
      subtitle: service.category,
      body: service.description,
      image: service.image,
      imageLabel: service.imageLabel,
      reverse: index % 2 === 1
    })),
    {
      id: "contact",
      kind: "contact",
      num: "21",
      title: state.lang === "ar" ? "تواصل خاص" : "Private Inquiry",
      subtitle: "info@wosolconcierge.com · +966 50 000 9979 · wosolconcierge.com"
    }
  ];
}

function renderProfileDeck() {
  const slides = profileSlides();
  return `
    <div class="deck-shell">
      <header class="deck-topbar">
        <button class="deck-logo" type="button" data-slide-target="cover" aria-label="WOSOL Concierge">
          <span class="logo-name">WOSOL</span>
          <span class="logo-sub">CONCIERGE</span>
        </button>
        <div class="deck-actions"></div>
      </header>

      <div class="deck-pages">
        ${slides.map((slide, index) => renderProfileSlide(slide, index, slides.length)).join("")}
      </div>
    </div>
  `;
}

function renderProfileSlide(slide, index, total) {

  if (slide.kind === "cover") {
    return `
      <section class="profile-slide profile-slide--cover" id="${slide.id}" data-slide="${slide.num}">
        <div class="slide-logo en">
          <span class="logo-name">WOSOL</span>
          <span class="logo-sub">CONCIERGE</span>
        </div>
        <div class="cover-mark" aria-hidden="true"></div>
        <div class="cover-content">
          <p class="slide-kicker en">${escapeHtml(slide.subtitle)}</p>
          <h1 class="${textDirClass()}">${escapeHtml(slide.title)}</h1>
          <p class="${textDirClass()}">${escapeHtml(slide.body)}</p>
        </div>
      </section>
    `;
  }

  if (slide.kind === "principles") {
    return `
      <section class="profile-slide profile-slide--principles" id="${slide.id}" data-slide="${slide.num}">
        ${slideTitle(slide)}
        <div class="principles-grid">
          ${slide.cards.map((item, cardIndex) => `
            <article class="principle-panel ${cardIndex === 0 ? "featured" : ""}">
              <span class="en">${String(cardIndex + 1).padStart(2, "0")}</span>
              <h3 class="${textDirClass()}">${escapeHtml(item[0])}</h3>
              <p class="${textDirClass()}">${escapeHtml(item[1])}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  if (slide.kind === "partners") {
    return `
      <section class="profile-slide profile-slide--partners" id="${slide.id}" data-slide="${slide.num}">
        ${slideTitle(slide)}
        <div class="partner-logo-grid">
          ${accessLogos.map((name) => `<div class="partner-logo-cell">${accessLogoMarkup(name)}</div>`).join("")}
        </div>
      </section>
    `;
  }

  if (slide.kind === "global") {
    return `
      <section class="profile-slide profile-slide--global" id="${slide.id}" data-slide="${slide.num}">
        <div class="global-statement">
          <span class="slide-kicker en">${escapeHtml(slide.subtitle)}</span>
          <h2 class="${textDirClass()}">${escapeHtml(slide.title)}</h2>
        </div>
        <div class="global-photo" style="${backgroundImageVars("slide-image", slide.image)}"></div>
      </section>
    `;
  }

  if (slide.kind === "service") {
    return `
      <section class="profile-slide profile-slide--service ${slide.reverse ? "is-reversed" : ""}" id="${slide.id}" data-slide="${slide.num}">
        <div class="service-slide-copy">
          <span class="slide-kicker en">${escapeHtml(slide.subtitle)}</span>
          <h2 class="${textDirClass()}">${escapeHtml(slide.title)}</h2>
          <p class="${textDirClass()}">${escapeHtml(slide.body)}</p>
        </div>
        <figure class="service-slide-image" style="${backgroundImageVars("slide-image", slide.image)}" aria-label="${escapeHtml(slide.imageLabel)}">
          <figcaption class="en">${escapeHtml(slide.imageLabel)}</figcaption>
        </figure>
      </section>
    `;
  }

  return `
    <section class="profile-slide profile-slide--contact" id="${slide.id}" data-slide="${slide.num}">
      <div class="contact-profile-card">
        <div class="slide-logo en">
          <span class="logo-name">WOSOL</span>
          <span class="logo-sub">CONCIERGE</span>
        </div>
        <div class="contact-profile-lines">
          <a class="en" href="mailto:info@wosolconcierge.com">info@wosolconcierge.com</a>
          <a class="en" href="tel:+966500009979">+966 50 000 9979</a>
          <a class="en" href="https://wosolconcierge.com" target="_blank" rel="noopener noreferrer">wosolconcierge.com</a>
        </div>
      </div>
    </section>
  `;
}

function slideTitle(slide) {
  return `
    <div class="slide-title-block">
      <span class="slide-kicker en">${escapeHtml(slide.subtitle)}</span>
      <h2 class="${textDirClass()}">${escapeHtml(slide.title)}</h2>
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
      <button class="mini-btn" type="button" data-copy="${escapeHtml(value)}">${content.en.nav.copy}</button>
    </div>
  `;
}

function renderServiceDetail(id) {
  const service = getServices().find((item) => item.id === id);
  if (!service) return;
  const labels = content.en.serviceLabels;
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
      <div class="visual-frame service-image-frame" style="${backgroundImageVars("service-image", service.image)}" role="img" aria-label="${escapeHtml(service.imagePrompt)}">
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


function renderAll() {
  document.getElementById("profileRoot").innerHTML = renderProfileDeck();
  bindDynamicEvents();
  handleHash();
  updateProgress();
}

function bindDynamicEvents() {
  document.querySelectorAll("[data-slide-target]").forEach((btn) => {
    btn.onclick = () => goToSlide(btn.dataset.slideTarget);
  });
  document.querySelectorAll("[data-slide-step]").forEach((btn) => {
    btn.onclick = () => stepSlide(Number(btn.dataset.slideStep));
  });
  document.querySelectorAll("[data-action]").forEach((btn) => {
    btn.onclick = () => {
      if (btn.dataset.action === "print") window.print();
      if (btn.dataset.action === "share") shareProfile(btn);
    };
  });
}

function goToSlide(id, updateHash = true) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  if (updateHash) history.replaceState("", document.title, `#${id}`);
}

function activeSlideIndex() {
  const slides = [...document.querySelectorAll(".profile-slide")];
  const viewportCenter = window.innerHeight / 2;
  return slides.reduce((closest, slide, index) => {
    const rect = slide.getBoundingClientRect();
    const distance = Math.abs((rect.top + rect.height / 2) - viewportCenter);
    return distance < closest.distance ? { index, distance } : closest;
  }, { index: 0, distance: Infinity }).index;
}

function stepSlide(direction) {
  const slides = [...document.querySelectorAll(".profile-slide")];
  if (!slides.length) return;
  const next = Math.max(0, Math.min(slides.length - 1, activeSlideIndex() + direction));
  goToSlide(slides[next].id);
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
  const progressBar = document.getElementById("progressBar");
  if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

  let active = "cover";
  let activeNumber = "01";
  document.querySelectorAll(".profile-slide").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.48) {
      active = section.id;
      activeNumber = section.dataset.slide || activeNumber;
    }
  });
  const activeSlideNumber = document.getElementById("activeSlideNumber");
  if (activeSlideNumber) activeSlideNumber.textContent = activeNumber;
}

function initIntroLoader() {
  const loader = document.getElementById("introLoader");
  if (!loader) return;
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, behavior: "auto" });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = reducedMotion ? 650 : 3000;
  window.setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    loader.classList.add("is-hidden");
    document.body.classList.remove("intro-active");
    window.setTimeout(() => {
      loader.remove();
      window.scrollTo({ top: 0, behavior: "auto" });
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

async function shareProfile(button) {
  const shareData = {
    title: "WOSOL Concierge Interactive Profile",
    text: content.en.cover.desc,
    url: window.location.href.split("#")[0]
  };
  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }
  await copyText(shareData.url);
  const original = content.en.nav.share;
  button.textContent = content.en.nav.shared;
  window.setTimeout(() => { button.textContent = original; }, 1400);
}

function handleHash() {
  if (location.hash.length > 1) {
    const id = location.hash.slice(1).replace("service/", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}


window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("hashchange", handleHash);
window.addEventListener("popstate", handleHash);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeServiceDetail(true);
  if (event.key === "ArrowDown" && !document.body.classList.contains("detail-open")) window.scrollBy({ top: window.innerHeight * 0.82, behavior: "smooth" });
  if (event.key === "ArrowUp" && !document.body.classList.contains("detail-open")) window.scrollBy({ top: -window.innerHeight * 0.82, behavior: "smooth" });
});

document.documentElement.lang = "en";
document.documentElement.dir = "ltr";
document.body.dir = "ltr";
renderAll();
updateProgress();
initIntroLoader();
