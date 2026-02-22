/**
 * Virtually Ever After — Vera AI Chatbot v3.0
 * ─────────────────────────────────────────────
 * Powered by Groq/Llama with SSE Streaming & Fallback KB
 */
(function () {
  "use strict";

  /* ═══════════════════════════════════════════════════════════════
     CONFIG
  ═══════════════════════════════════════════════════════════════ */
  const scriptEl =
    document.currentScript ||
    document.querySelector('script[src*="chatbot.js"]');

  const _scriptDir = (scriptEl && scriptEl.src)
    ? scriptEl.src.replace(/\/[^/?#]*(\?.*)?$/, "/")
    : "./";
  const LOGO_SRC = _scriptDir + "VEA-LOGO.png";

  const CFG = {
    theme:    (scriptEl && scriptEl.dataset.theme)    || "light",
    greeting: (scriptEl && scriptEl.dataset.greeting) ||
      "Hello — I'm Vera, your guide to Virtually Ever After.\nWhat can I help you explore today?",
    botName:  "Vera · VEA",
    proxyUrl: "https://vea-bot.surhayalist.workers.dev/", 
  };

  /* ═══════════════════════════════════════════════════════════════
     VERA'S FULL SYSTEM PROMPT — Complete VEA Brain
  ═══════════════════════════════════════════════════════════════ */
  const VERA_SYSTEM_PROMPT = `You are Vera, the AI conversational guide for Virtually Ever After (VEA). You are not a general-purpose AI. You represent VEA's voice — refined, architecturally precise, culturally intelligent, warm but never casual or salesy. You speak of VEA as "we" and "the studio."

LANGUAGE RULE: Always reply in the exact language the user used. If they speak Turkish, reply entirely in natural, professional Turkish. If French, in French, etc.

FORMAT RULE: Respond directly in Markdown format. DO NOT USE JSON. Do not wrap your response in a JSON block.

SUGGESTIONS RULE: At the VERY END of your response, you MUST provide exactly 3 contextual, engaging follow-up questions. These questions should naturally keep the conversation going based on what you just talked about ("konu konuyu açsın"). 
You must separate these questions from your main text using exactly this phrase: ---SUGGESTIONS---
Then list the 3 questions, each starting with a dash (-).

Never start a reply with "VEA works at the intersection..." or any generic preamble. Never say "Great question!" Never repeat the same phrasing twice. Vary your language and structure. Match answer length to question complexity. Short for simple, rich and layered for complex. Always respond with context-specific, genuinely useful information.

---
## WHO IS VEA

Virtually Ever After (VEA) is a creative platform founded in Luxembourg by architect and digital designer Deniz Agaoglu. The studio sits at the edge of architecture, spatial design, real-time 3D technology, and digital storytelling.

VEA's mission: dissolve the boundaries between physical and digital spaces. While the studio is highly recognized for its digital, web, and social media-based creations, VEA is fundamentally an architectural practice. Years of traditional architectural experience and official credentials back every project. VEA still designs real-life physical spaces; the digital work is an extension of traditional architecture, not a replacement of it.

Vision: "VEA combines architecture and storytelling into a multidimensional universe for each individual story."

VEA works with architects, developers, curators, fashion brands, cultural institutions, real estate developers, restaurants, hotels, universities, health centers, and any organisation whose spaces or products deserve more than a standard presentation.

---


## FOUNDER — DENIZ AGAOGLU

- Born: Alanya, Turkey, 1995
- Education: Bachelor of Architecture, Istanbul Bilgi University; Master of Architecture and Urban Design, Politecnico di Milano
- Career began: co.arch studio, Milan. Spent years working in traditional architectural practice across interior design, furniture, and urban-scale interventions before translating this expertise into digital mediums.
- Relocated to Luxembourg: 2022 — expanded into digital design, immersive storytelling, and hybrid physical-digital experiences.
- Founded VEA: 2025
- Approach: multidisciplinary — architecture + technology + visual culture, bridging the tangible and the digital
- Collaborates internationally with architects, cultural institutions, creatives

---
## THREE PILLARS OF VEA

### 01 — WORLDBUILDING
Designing the digital "space" a studio or brand lives in. Architecture for the web.

Sub-disciplines:
- Atmospheric Spatial Interfaces: websites users walk inside. Smart objects, gamification, spatial navigation. A world, not a page.
- Web-based 3D Interactivity: framed narratives showcasing design from multiple dimensions. Three.js, WebXR, custom rendering pipelines. Browser-native — no downloads.
- Hybrid Spatial Gallery: the calibrated middle ground between flat 2D and full 3D. Atmosphere without total interactive commitment.
- Index as Mapping: a portfolio or archive reorganised as a single navigable spatial layout. The relationships between works become as significant as the works themselves.

### 02 — IDENTITY BUILDING
Brand codes designed for spatial and digital environments. Architectural precision applied to visual language.

Sub-disciplines:
- Logo Design: marks that hold meaning at every scale — from a screen pixel to a 3-metre installation
- Brand Identity Systems: colour, typography, spatial grammar, motion logic — as a unified system
- Consistent Aesthetics: VEA as messenger between maker and audience; every touchpoint carries the same intentionality
- Booklet & Publication Design: curating digital and physical documentation as art objects, bridging visualisation with tactile literature

### 03 — DIGITAL CONTENT
Translating solid work into living narrative.

Sub-disciplines:
- Cinematic Reels & Video: compact visual stories built around proportion, light, and spatial sequence — not just renderings with a soundtrack
- Visual Storytelling: finding the line connecting dots people usually miss but feel subconsciously
- Creative Direction: conceptual grounding for all visual outputs
- Exhibition Design: real-life physical manifestation of digital thinking. Translating volumetric concepts into tangible, constructed event and installation spaces (e.g., the Status CO real-life physical pop-up exhibition).
- Product Design: bridging the gap between pure utility and human interaction through engineered forms and intentional materiality

---
## COMPLETE PROJECT ARCHIVE

### STATUS CO — 2026
URL: status-co.com
Services: Interactive 3D website, 3D exhibition environment, logo, brand identity, packaging, motion reels, pop-up space design, digital content
Client type: Fashion/collectible brand

VEA's most complete collaboration. During Status CO's key development phase, VEA translated the brand concept into a cohesive spatial, digital, and experiential system.

The 3D website: users navigate a void-like exhibition space in first person. Products behave as interactive artefacts — cameras focus on click, objects lift, info panels glide in. Dual mode: immersive exploration vs. catalog grid, switched seamlessly. Content managed via Excel — non-technical teams update the 3D world by editing a spreadsheet. Advanced rendering: HDRI lighting, Bloom, soft shadows, reflections, all browser-native. Device-aware: different behavior for mouse vs. touch. Off-screen object pausing preserves battery.

The 3D exhibition environment: same spatial logic applied to physical pop-up space design. Continuity between online and in-person experience.

Brand system: corporate identity framework, packaging for DROP 001 onward, positioning the brand as a collectible archive rather than a conventional product line. Motion reels for platform presence. Every touchpoint — digital, physical, editorial — carries the same intention.

### NOVANTATRE — 2025–2026
URL: novantatre.lu
Services: Architectural film reels, cinematic content, visual storytelling
Client type: Architecture studio (Luxembourg)

A series of short architectural film reels for selected projects, designed for contemporary media platforms.

Film 1: sequential, archive-like narrative — guiding the viewer step by step through drawings and spatial layers, like reading the building's own logic in order.

Film 2: controlled camera movement and façade transformation — proportion, detail, and materiality at the foreground. The building explored through its own surface.

Not static renderings. Compact visual stories with architectural intelligence — designed for Instagram, Vimeo, client presentations, and beyond.

### DAS PIECES — 2025
URL: daspieces.com
Services: Digital narrative, visual world, brand storytelling
Client type: Design/lighting brand

DAS Pieces is a minimal lamp collection. VEA reinterpreted the collection through a digital narrative lens — not product photography, but spatial storytelling.

A visual world that situates each lamp within its own atmospheric context. The brand's timeless, understated identity translated into a carefully constructed digital setting. Each piece given its own environment that expresses its character and its relationship with light. The intention: communicate DAS Pieces' design philosophy, not just the objects.

### LAILA — 2026
URL: laila.nyc
Services: Landing page design, cinematic UI, brand identity translation
Client type: Tech startup (NYC dating app)

Laila is a dating app built around an action-first philosophy — real-world connection prioritised over digital friction.

VEA translated this into a high-energy digital gateway that captures the restless pulse of New York City. A seamless, cinematic interface where fluid motion and interactive date archives replace the friction of swiping. Sophisticated nocturnal aesthetic. Intuitive user journey. Positioned as a premium lifestyle destination — not a utility. The digital space as a launch pad for real life, not a replacement for it.

### DECENTRALIZE DESIGN — 2025
URL: decentralize.design
Services: Interactive website, logo, brand identity, 2-minute cinematic showcase
Client type: Spatial design studio

VEA built the complete digital presence for Decentralize Design.

The "clockwork" visual identity: a signature mark communicating precision, systematic thinking, and technical mastery. Interactive website + logo. A 2-minute cinematic showcase that deconstructs their technical process in virtual world-building — precise motion graphics merged with spatial documentation. The film functions as both portfolio and technical manifesto.

---
## TECHNOLOGY STACK

- Three.js: real-time 3D rendering in the browser — no plugins, no installs
- WebXR: immersive VR/AR on the open web
- Custom AI integrations: generative and interactive layers within spatial interfaces
- GSAP & motion libraries: precise, cinematic animation and transitions
- Framer / Webflow / custom builds: depending on the project's editorial or interactive requirements
- Everything browser-native — no app downloads, no hardware dependency

3D website technical capabilities:
- Excel-driven content management — non-technical teams update 3D worlds by editing a spreadsheet
- Live in-engine director's panel — adjust lighting, atmosphere, camera in real-time without page refresh
- Exploration mode (3D world) + Catalog mode (grid) — seamless transition
- Game-engine-level browser effects: HDRI, Bloom, soft shadows, reflections
- Progressive LOD (level-of-detail) loading — performance optimised
- Off-screen object pausing — battery and CPU preservation
- Device awareness — different behavior for mouse, touch, mobile
- Cinematic object interaction: cameras focus, objects lift, info panels glide in on click

---
## USE CASES — INDUSTRIES VEA SERVES

Architecture & Design Studios: Spatial portfolios, cinematic reels, identity systems
Fashion & Luxury Brands: Virtual showrooms, brand worlds, digital identity, packaging
Real Estate: Immersive property tours, floor transitions, environmental analysis, AI advisors, pre-sales digital experiences
Cultural Institutions & Museums: Virtual museum experiences, artwork interaction, curator routes, provenance systems
Restaurants & Hospitality: Virtual venue tours, table selection with POV, 3D menu visualisation, reservation integration
Hotels & Resorts: Full facility tours, room detail exploration, daylight simulation, ambiance testing
Educational Institutions: Campus tours, department exploration, interactive application systems
Retail & Malls: 3D store exploration, virtual fitting, real-time inventory
Automotive Showrooms: Exterior/interior walkthroughs, color/rim configurators, technical system visualisation
Stadiums & Sports Complexes: Seat POV testing, historical moment replays, facility tours
Hospitals & Health Centers: Space exploration, equipment information, appointment systems
Factories & Production: Process walkthroughs, sustainability features, technical specs
Festival & Event Venues: Stage POV experience, sound testing, schedule planning
Airports: Wayfinding simulation, flight integration, gate management
City & Tourism: Neighbourhood bird's-eye, historical timeline, themed routes
Second-hand & Vintage Stores: Item provenance, historical context, real-time inventory
Fitness & Wellness: Equipment demonstrations, class booking, trainer profiles

---
## PROCESS

01 Discovery: A focused conversation to understand the project, its context, what it needs to communicate. We listen before proposing anything.

02 Concept: A clear spatial and editorial concept — what the experience will feel like, not just look like. Presented for feedback before a line of code or frame is rendered.

03 Production: Design, build, and content production run in parallel. Progress updates and review stages throughout. No black boxes.

04 Delivery & Beyond: Final delivery — website, reel, identity, or all three. Available for iterations, expansions, and future phases.

---
## PRICING

Project-specific — no fixed packages. What shapes a proposal:
- Type of deliverable (3D website, cinematic reel, full identity, or combination)
- Scale of the project and timeline
- Level of creative direction involved

Historical reference ranges:
- Real estate / spatial projects: €5,000–€15,000
- Cultural institutions / full experiences: €10,000–€20,000
- Architectural presentations / focused content: €2,000–€10,000

Best first step: a 20-minute conversation. Clear, honest proposal within one business day.

---
## CONTACT & LOCATION

Email: hello@virtuallyeverafter.xyz
Web: virtuallyeverafter.xyz
Location: Luxembourg 🇱🇺 — international scope
Languages: English, French, Turkish, Italian

Response within one business day. Detailed briefs and vague ideas both welcome.

---
## VEA'S VISION & PHILOSOPHY

Architecture doesn't end in construction — it continues as an evolving digital experience.

VEA is part of a broader transformation: the internetisation of architecture. Buildings are no longer just physical — they are also digital assets with rich information layers, interactive experiences, and dynamic content.

The future architect is not just a building designer but a systems designer, a digital experience orchestrator, a narrative builder. VEA sits at this frontier.

VEA's philosophy for digital experiences:
- Atmosphere first — how does the space feel, before how it looks
- Narrative before presentation — what story does this tell
- Spatial logic — even in 2D design, VEA thinks architecturally about hierarchy, flow, sequence
- Technology is invisible — the best tech disappears into the experience
- Every project is a world — not a portfolio item, but a universe with its own rules

---
RESPONSE RULES:
- NEVER start with "VEA works at the intersection" 
- NEVER say "Great question!" or similar affirmations
- NEVER give the same phrasing twice for the same topic
- Match tone: intellectual for design questions, warm for personal/process questions, precise for technical questions
- For project questions: always give specific details, not taglines
- For unknown questions: be honest, give adjacent useful info, offer to connect with the team
- Always feel like a knowledgeable person, not a FAQ page
- Quick reply suggestions should be genuinely useful follow-ups, not generic options`;

  /* ═══════════════════════════════════════════════════════════════
     CONVERSATION HISTORY
  ═══════════════════════════════════════════════════════════════ */
  const conversationHistory = [];

  /* ═══════════════════════════════════════════════════════════════
     API CALL (STREAMING) TO CLOUDFLARE PROXY
  ═══════════════════════════════════════════════════════════════ */
  async function askVeraStream(userMessage, typingRow, msgsContainer, qrContainer) {
    conversationHistory.push({ role: "user", content: userMessage });

    try {
      const response = await fetch(CFG.proxyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: VERA_SYSTEM_PROMPT,
          messages: conversationHistory.slice(-10),
          max_tokens: 1024
        }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      typingRow.remove();
      const botRow = document.createElement("div");
      botRow.className = "vea-row vea-bot";
      
      const avatar = document.createElement("div");
      avatar.className = "vea-avatar";
      const img = document.createElement("img");
      img.src = LOGO_SRC;
      img.style.cssText = "width:18px;height:18px;border-radius:3px;object-fit:contain;";
      img.onerror = () => { avatar.innerHTML = ICON_VEA; };
      avatar.appendChild(img);

      const bubble = document.createElement("div");
      bubble.className = "vea-bubble";
      
      botRow.appendChild(avatar);
      botRow.appendChild(bubble);
      msgsContainer.appendChild(botRow);

      // Stream okuma işlemi
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let fullReply = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ") && line !== "data: [DONE]") {
            try {
              const dataObj = JSON.parse(line.slice(6));
              const token = dataObj.choices[0]?.delta?.content || "";
              
              if (token) {
                fullReply += token;
                
                // Gizli ayırıcıya (SUGGESTIONS) gelene kadar olan kısmı ekrana bas
                let displayReply = fullReply;
                if (fullReply.includes("---SUGGESTIONS---")) {
                  displayReply = fullReply.split("---SUGGESTIONS---")[0];
                }

                // İmleç (cursor) animasyonlu yazdırma efekti
                bubble.innerHTML = mdToHtml(displayReply) + '<span style="display:inline-block; width:5px; height:12px; background:#c8b89a; margin-left:2px; animation: veaBlink 1s step-end infinite;"></span>';
                msgsContainer.scrollTop = msgsContainer.scrollHeight;
                
                // 1. SORUNUN ÇÖZÜMÜ: Groq hızı frenleniyor, organik okuma hızı (15ms gecikme)
                await new Promise(r => setTimeout(r, 15));
              }
            } catch (e) {
              // Eksik JSON chunk'larını yoksay
            }
          }
        }
      }

      // 2. SORUNUN ÇÖZÜMÜ: Stream bitti, metni ve yapay zekanın ürettiği butonları ayır
      let finalDisplay = fullReply;
      let dynamicNext = ["What services do you offer?", "Show me your work", "How do we start?"]; // Her ihtimale karşı yedek

      if (fullReply.includes("---SUGGESTIONS---")) {
        const parts = fullReply.split("---SUGGESTIONS---");
        finalDisplay = parts[0].trim();
        
        // ---SUGGESTIONS--- sonrasındaki satırları bul ve buton yap
        const suggestionLines = parts[1].split("\n").filter(line => line.trim().startsWith("-"));
        if (suggestionLines.length > 0) {
            dynamicNext = suggestionLines.map(line => line.replace(/^-\s*/, "").trim());
        }
      }

      // İmleci kaldır ve son metni bas
      bubble.innerHTML = mdToHtml(finalDisplay);
      conversationHistory.push({ role: "assistant", content: finalDisplay });

      // Dinamik, konuya uygun önerileri (Quick Replies) ekrana bas
      setQuickReplies(qrContainer, dynamicNext, window.handleSendExport);

    } catch (err) {
      console.warn("[Vera] Streaming API error, falling back to KB:", err);
      typingRow.remove();
      const fb = scoredMatch(userMessage) || ultimateFallback();
      appendMsg(msgsContainer, "bot", mdToHtml(fb.reply));
      setQuickReplies(qrContainer, fb.next, window.handleSendExport);
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     COMPREHENSIVE FALLBACK KNOWLEDGE BASE
  ═══════════════════════════════════════════════════════════════ */
  const KB = [

{
      keywords: ["physical", "real life", "real world", "build physically", "interior design", 
        "architecture design", "traditional architecture", "physical space", "do you build", 
        "real architecture", "physical exhibition", "gerçek hayatta", "fiziksel tasarım"],
      reply: `While VEA is highly visible for digital, web, and spatial 3D creations, we never stopped being an architectural practice. 

The studio is built on years of traditional architectural experience and full academic credentials. Our work in the digital realm is an investigation of architecture in new mediums — not an abandonment of physical design. 

We still design for the real world. A perfect example is **Status CO**: alongside their immersive 3D digital world, VEA designed their very first real-life physical exhibition space for their DROP 001. 

We treat physical and digital spaces with the exact same architectural rigor. Whether it's an interior design for a pop-up or a spatial website, the spatial intelligence remains the same.`,
      next: ["Tell me about the Status CO exhibition", "What is VEA's approach to Worldbuilding?", "Who founded VEA?"],
    },
    
    {
      keywords: ["hello", "hi", "hey", "hiya", "helo", "good morning", "good afternoon",
        "good evening", "greetings", "howdy", "salut", "ciao", "merhaba", "bonjour",
        "hola", "yo", "sup", "whats up", "what's up", "start", "begin"],
      reply: `Welcome to **Virtually Ever After**.

We're a creative studio building the digital worlds that brands, architecture studios, and cultural institutions actually inhabit — where spatial design, real-time 3D, and emerging technology converge.

What brings you here today?`,
      next: ["What does VEA do exactly?", "Show me your projects", "Who is behind VEA?"],
    },
    {
      keywords: ["what is vea", "what is virtually ever after", "about vea", "about virtually",
        "explain vea", "tell me about vea", "overview", "introduce", "describe vea", "who are you"],
      reply: `**Virtually Ever After (VEA)** is a creative platform — founded in Luxembourg — that reimagines how we experience architecture and space in the digital age.

The studio blends **spatial design**, **real-time 3D environments**, and emerging technologies like AI and WebXR to craft immersive, interactive experiences that go far beyond traditional visualisations.

Three disciplines form the core of the practice:
— **Worldbuilding** — designing the digital world a brand or studio inhabits
— **Identity Building** — brand codes engineered for spatial and digital environments
— **Digital Content** — cinematic reels, visual storytelling, creative direction

The mission: dissolve the boundary between physical and digital space — turning static environments into living, navigable, story-driven worlds.

> *"VEA combines architecture and storytelling into a multidimensional universe for each individual story."*`,
      next: ["What is Worldbuilding?", "Who founded VEA?", "Show me the projects"],
    },
    {
      keywords: ["vea mission", "mission", "vision", "philosophy", "belief", "what does vea believe",
        "vea values", "approach", "manifesto", "what do you stand for"],
      reply: `VEA's core conviction: **architecture doesn't end in construction — it continues as an evolving digital experience.**

The studio sits at the frontier of a broader transformation — the internetisation of architecture. Buildings and brands are no longer just physical; they are digital assets with rich information layers, interactive experiences, and dynamic content.

VEA's design philosophy:
— **Atmosphere first** — how does the space feel, before how it looks
— **Narrative before presentation** — what story does this tell
— **Spatial logic in everything** — even in 2D, VEA thinks architecturally about hierarchy, flow, and sequence
— **Technology is invisible** — the best technology disappears into the experience
— **Every project is a world** — not a portfolio item, but a universe with its own rules

The studio believes the future of architecture is not confined to the physical. Space, story, and identity must now exist simultaneously across screens, environments, and bodies.`,
      next: ["What services does this translate into?", "Who founded VEA?", "Tell me about the technology"],
    },
    {
      keywords: ["services", "service", "offer", "what do you do", "what can you do",
        "capabilities", "provide", "solutions", "packages", "what you offer", "help with",
        "work on", "build", "create", "make", "produce", "specialise", "specialise in",
        "specialize", "areas", "disciplines", "pillars"],
      reply: `VEA's work spans three core disciplines — and they're most powerful when combined:

**01 — Worldbuilding**
The digital space a brand or studio inhabits. Spatial websites users walk inside. Real-time 3D interactivity. Hybrid galleries. Portfolios mapped as navigable architecture. Built with Three.js, WebXR, and custom rendering pipelines — entirely browser-based.

**02 — Identity Building**
Brand codes designed for spatial and digital environments. Logo design, visual identity systems, booklet and publication design — built with architectural precision. Every mark designed to hold meaning at every scale.

**03 — Digital Content**
Cinematic reels, visual storytelling, creative direction, exhibition design, product design. The narrative layer that makes spatial and identity work legible, felt, and remembered.

Which area is most relevant to what you're building?`,
      next: ["Tell me about Worldbuilding", "Tell me about Identity Building", "Tell me about Digital Content"],
    },
    {
      keywords: ["worldbuilding", "world building", "3d website", "spatial interface",
        "immersive website", "interactive website", "metaverse", "spatial web",
        "virtual space", "digital space", "walk inside", "gamification", "gamify",
        "first service", "first pillar", "three.js website", "webxr"],
      reply: `**Worldbuilding** is VEA's core practice — designing the digital environment a studio or brand actually inhabits.

Four distinct formats, each calibrated to a different brief:

**Atmospheric Spatial Interfaces**
Websites users walk inside and interact with. Smart objects. Navigation as experience. Gamification of space. Not a website — an environment. Built for brands that want visitors to feel their world, not just browse it.

**Web-based 3D Interactivity**
A framed narrative showcasing any design from multiple dimensions. Three.js, WebXR, and custom rendering pipelines. Browser-native — no app downloads, no hardware required. The entire world loads through a URL.

**Hybrid Spatial Gallery**
The calibrated middle ground between flat 2D and full 3D immersion. Atmosphere, depth, and editorial quality without requiring the visitor to navigate in first person. Right for projects that need presence, not full interactivity.

**Index as Mapping**
A portfolio, library, or archive reorganised as a single navigable spatial layout — where the relationships between works become as significant as the works themselves. The archive as spatial experience.

Every format is browser-based. Performance-optimised. Device-aware. VEA builds 3D worlds that run on phones without sacrificing quality.`,
      next: ["Tell me about the technology behind this", "What's the difference between Hybrid and full 3D?", "Show me an example — Status CO"],
    },
    {
      keywords: ["atmospheric", "atmospheric spatial", "walk inside", "walk through website",
        "spatial navigation", "gamified website", "smart objects"],
      reply: `**Atmospheric Spatial Interfaces** are the most immersive format VEA builds.

The user enters a 3D environment through their browser — no headset, no download. They navigate with mouse or touch, interact with objects that respond cinematically: cameras focus, elements lift and rotate, information unfolds as panels rather than pop-ups.

Objects become smart: a product can hold pricing, narrative, video, and provenance data — all surfaced based on what the user does, not what they click on a nav menu.

Space is gamified: the act of exploration becomes the interface. Discovery replaces scrolling.

**Status CO** is the clearest example — a void-like exhibition environment where fashion objects exist as spatial artefacts. The environment switches between immersive exploration and catalog grid seamlessly, depending on what the user needs in the moment.

The underlying technical architecture includes:
— Excel-driven content management (non-technical teams update the 3D world by editing a spreadsheet)
— Live in-engine director's panel for real-time atmosphere control
— HDRI lighting, Bloom, soft shadows, and reflections — game-engine effects in the browser
— Off-screen object pausing for battery and CPU preservation`,
      next: ["Tell me more about Status CO", "What about Hybrid Spatial Gallery?", "How does this work on mobile?"],
    },
    {
      keywords: ["hybrid spatial gallery", "hybrid gallery", "2d and 3d", "middle ground",
        "between 2d", "editorial", "not fully 3d"],
      reply: `**Hybrid Spatial Gallery** is VEA's calibrated middle ground.

It sits between a flat editorial website and a fully navigable 3D world. The user experiences depth, spatial atmosphere, and cinematic transitions — without having to navigate in first person. More accessible, less demanding, but still distinctly spatial.

Think of it as an architectural sequence rather than a space. The user moves through curated moments — each revealing content in a way that feels designed for that specific piece, not slotted into a template.

This format works especially well for:
— Architecture and design portfolios where the work needs to breathe
— Fashion or product presentations where the brand controls the sequence
— Cultural projects where curation is part of the message

It loads fast, behaves elegantly on mobile, and doesn't require visitors to learn a new interface. It feels designed — not like a 3D experiment.`,
      next: ["Tell me about full 3D Atmospheric Interfaces", "Tell me about Index as Mapping", "Which format fits my project?"],
    },
    {
      keywords: ["index as mapping", "index mapping", "archive", "library mapping", "portfolio layout",
        "single layout", "navigable archive", "mapping portfolio", "spatial archive"],
      reply: `**Index as Mapping** turns a portfolio or archive into a single navigable spatial layout.

The premise: the relationship between works is as important as the works themselves. Rather than listing projects chronologically or by category, the works are arranged spatially — where proximity, grouping, and distance communicate curatorial thinking.

The visitor sees the whole body of work at once, in a layout that has been designed rather than defaulted to. They zoom in, explore clusters, trace connections. The archive becomes a place to wander, not a list to scroll.

This format suits:
— Architectural offices with large, complex portfolios
— Studios where the body of work needs to be understood as a whole
— Cultural institutions mapping collections, archives, or exhibitions
— Any practice where context between works matters as much as the individual pieces

**Decentralize Design's** website uses spatial indexing as part of its interactive logic — content mapped as a navigable network rather than a sequential presentation.`,
      next: ["Tell me about Decentralize Design", "What other Worldbuilding formats exist?", "How do we start?"],
    },
    {
      keywords: ["identity building", "brand identity", "identity", "branding", "logo",
        "visual identity", "brand system", "brand code", "typography", "colour system",
        "design system", "visual system", "second service", "second pillar",
        "brand design", "mark", "logotype"],
      reply: `**Identity Building** at VEA means something specific: brand codes engineered for environments that exist simultaneously in physical space and on screen.

Most brand systems are designed for print and flat digital. VEA's approach treats the brand as **spatial and temporal** — how does the mark hold at 3 metres? How does the colour system behave in motion? How does the typography read inside a 3D environment?

Four core deliverables:

**Logo Design**
Marks that hold meaning at every scale — from a screen pixel to a 3-metre installation. VEA designs marks that work in light, in space, in motion, and in silence.

**Brand Identity Systems**
Colour, typography, spatial grammar, and motion logic developed as a unified system. Not a style guide — a spatial language.

**Consistent Aesthetics**
VEA positions itself as the messenger between maker and audience. Every touchpoint — packaging, digital, physical, motion — carries the same intentionality. The message is the medium.

**Booklet & Publication Design**
Curating digital and physical documentation as art objects. Bridging visualisation with tactile literature. The printed piece as spatial experience.

Recent identity work: **Status CO** (full system — logo, packaging, motion) and **Decentralize Design** (the "clockwork" identity).`,
      next: ["Tell me about the Status CO identity", "What is the clockwork identity?", "Do you do rebrands?"],
    },
    {
      keywords: ["booklet", "publication", "print", "book design", "editorial design",
        "physical document", "pdf", "catalogue", "catalog", "printed matter", "tactile"],
      reply: `**Booklet & Publication Design** at VEA treats the printed or digital document as an art object in its own right.

The premise: documentation of a project — a lookbook, a portfolio monograph, a product catalogue — should carry the same spatial and editorial intelligence as the project itself. Not a generic InDesign template. A considered spatial experience that happens to be on paper or screen.

VEA approaches this with architectural thinking:
— What is the sequence? What does the reader encounter first, and why?
— How does the layout breathe? Density and negative space as tools, not accidents
— How does typography carry the brand without decoration?
— How does the printed piece relate to the digital world it accompanies?

This service works alongside identity systems and digital projects — or as a standalone deliverable for studios that need a strong physical document.`,
      next: ["Tell me about the full Identity Building service", "Do you design packaging too?", "How does this relate to digital work?"],
    },
    {
      keywords: ["digital content", "content", "video", "reel", "film", "cinematic", "motion",
        "storytelling", "narrative", "creative direction", "art direction", "third service",
        "third pillar", "visual storytelling", "animation"],
      reply: `**Digital Content** is how VEA translates solid work into living narrative — the layer that makes spatial and identity work intelligible, felt, and remembered.

**Cinematic Reels & Video**
Compact visual stories. Not renderings with a soundtrack — films built around proportion, light, and spatial sequence. Designed for contemporary platforms: Instagram, Vimeo, client presentations, award submissions.

**Visual Storytelling**
Finding the line that connects dots people usually miss but feel subconsciously. The emotional logic underneath the project — surfaced through image selection, sequence, pacing, and music.

**Creative Direction**
Art direction for digital and physical presentations. Ensuring every visual output is conceptually grounded — that the still, the motion, the printed piece, and the 3D world all emerge from the same idea.

**Exhibition Design**
The physical manifestation of digital thinking. Transforming volumetric concepts and spatial narratives into tangible environments for events, openings, and installations.

**Product Design**
Bridging the gap between pure utility and human interaction through carefully engineered forms and intentional materiality.

Examples: **Novantatre** (archive-like architectural films), **DAS Pieces** (atmospheric visual world for a lamp collection), **Status CO** (motion reels for a fashion brand).`,
      next: ["Tell me about Novantatre", "Tell me about DAS Pieces", "What is Exhibition Design?"],
    },
    {
      keywords: ["exhibition design", "exhibition", "physical space", "installation", "pop up",
        "popup", "pop-up", "event space", "physical installation", "physical manifestation"],
      reply: `**Exhibition Design** is the point where VEA's digital spatial thinking becomes a tangible physical space.

The discipline: transforming volumetric concepts, spatial narratives, and brand worlds into environments for events, gallery openings, trade fair installations, and pop-up spaces.

For **Status CO**, VEA designed the pop-up exhibition space alongside the digital environment — ensuring the visitor who encounters the brand online and then walks into the physical space feels the same spatial language. Not two separate presentations of the same brand. One continuous world.

VEA's approach to physical spaces mirrors its approach to digital ones:
— Atmosphere is designed, not assumed
— The sequence of arrival, orientation, and discovery is choreographed
— Material choices carry the same intentionality as visual identity decisions
— The space tells the story; the objects inside confirm it

If you're planning an event or installation and want it to be spatially coherent with your digital presence, VEA can design both sides.`,
      next: ["Tell me more about Status CO", "How does VEA approach physical and digital together?", "How do we start?"],
    },
    {
      keywords: ["product design", "product", "object", "industrial design", "furniture",
        "physical product", "form", "material", "materiality", "industrial"],
      reply: `**Product Design** at VEA operates at the intersection of form, function, and spatial narrative.

The discipline: bridging the gap between pure utility and human interaction through carefully engineered forms and intentional materiality. Not aesthetics applied to function — function and aesthetics as a unified problem.

VEA approaches product design with the same spatial intelligence applied to environments: a product is a piece of a spatial world. How it sits in space, how it reads in motion, how it carries the brand's identity at the scale of a hand — these are design problems with architectural solutions.

This service works best alongside:
— Brand identity systems (ensuring the object and the brand speak the same language)
— Digital content (the product needs a visual world as much as the brand does)
— Worldbuilding (the product as an artefact in a spatial environment)`,
      next: ["Tell me about Identity Building", "Tell me about Digital Content", "Show me VEA's work"],
    },
    {
      keywords: ["status co", "status_co", "statco", "status co project", "tell me about status",
        "more about status", "status co website", "status co brand", "status co 3d"],
      reply: `**Status CO** is VEA's most comprehensive collaboration — spanning every layer of a brand's presence.

**The brief:** translate a fashion brand's concept into a cohesive spatial, digital, and experiential system.

**What VEA built:**

*Digital:*
— 3D website — a void-like exhibition environment. Users navigate in first person. Products behave as interactive artefacts: cameras focus, objects lift, information panels glide in. Dual mode: immersive exploration and catalog grid, switched seamlessly.
— Content managed via Excel — brand team updates the 3D world without touching code
— HDRI lighting, Bloom, soft shadows — game-engine effects running in the browser
— Motion reels and platform content for brand presence

*Physical:*
— Pop-up exhibition space — same spatial language as the digital environment
— Corporate identity framework and packaging for DROP 001 onward

*Brand positioning:*
— Status CO positioned as a **collectible archive**, not a conventional product line
— Every touchpoint — digital, physical, editorial — carries the same intention: these objects are artefacts worth collecting, not merchandise worth buying

↗ status-co.com`,
      next: ["How was the 3D website technically built?", "Tell me about the Status CO identity", "What was the pop-up space like?"],
    },
    {
      keywords: ["status co website", "status co 3d website", "status co technical",
        "how was status co built", "3d technology status", "excel content management"],
      reply: `The **Status CO 3D website** is technically among the most advanced pieces VEA has built.

**Architecture:**
— Three.js as the rendering engine — real-time 3D directly in the browser, no plugins
— Excel-driven content management system: the brand team updates products, prices, and 3D spatial coordinates by editing a spreadsheet. No code changes needed.
— Progressive LOD loading — models load at different detail levels based on camera proximity
— Off-screen object pausing — objects not in view pause rendering, preserving battery and CPU

**User experience:**
— Dual mode: the space operates as a first-person 3D exploration environment **and** as a familiar catalog grid — the user chooses, the transition is seamless and animated
— Cinematic object interactions: approach a product, the camera shifts to frame it. Click — it lifts, rotates, and an information panel glides in
— Device awareness: the experience recalibrates for mouse vs. touch, desktop vs. mobile

**Visual quality:**
— HDRI environment mapping for realistic reflections
— Bloom and soft shadow systems — visual quality that typically requires a game engine, delivered browser-native
— Custom post-processing pipeline for atmosphere and brand colour

**Content:**
— Every product in the collection exists as a positioned 3D artefact in the space
— Pricing, imagery, narrative, and video linked to each object
— Live in-engine director's panel: lighting, atmosphere, and camera angles adjustable in real-time without refresh`,
      next: ["Tell me about Worldbuilding more broadly", "What other 3D projects has VEA done?", "How does pricing work for this kind of project?"],
    },
    {
      keywords: ["status co identity", "status co packaging", "status co logo",
        "status co brand system", "collectible archive", "drop 001"],
      reply: `The **Status CO brand identity** was built around one core positioning: **collectible archive, not product line.**

This framing changed everything about how the visual system was designed.

**Logo:** A mark that holds authority at every scale — hangtag to exhibition backdrop. Designed to feel institutional, as though Status CO has existed for decades.

**Colour and typography:** Restrained, precise. The brand speaks through objects and spaces, not through visual noise. The identity system creates context, not decoration.

**Packaging for DROP 001:** Physical materials designed to feel like archival objects — the unboxing is part of the narrative. Material weight, print techniques, and tactile quality considered as part of the brand experience.

**Consistency across touchpoints:** The 3D website, motion reels, packaging, and pop-up space were designed in parallel — ensuring every encounter with Status CO, regardless of medium, carries the same spatial and editorial intelligence.`,
      next: ["Tell me about the 3D website", "Tell me about the pop-up space", "What does Identity Building involve?"],
    },
    {
      keywords: ["laila", "laila app", "laila nyc", "dating app", "action first", "new york",
        "nyc project", "dating", "laila project", "tell me about laila", "more about laila"],
      reply: `**Laila** is one of VEA's more unexpected collaborations — a dating app, but built around a very specific and demanding philosophy.

**The brief:** Laila doesn't swipe. The app is built around action — real-world plans, not digital browsing. VEA's challenge: translate this anti-app philosophy into a digital interface that is itself anti-conventional.

**What VEA built:**

*Interface:*
— A cinematic, seamless landing page that captures the restless energy of New York City
— Fluid motion and animated transitions replace the static grid of conventional app marketing
— Interactive date archives — the feed is curated experiences, not profiles
— A nocturnal, sophisticated visual palette — the aesthetic of a city that stays up

*Positioning:*
— Laila positioned as a **premium lifestyle destination**, not a utility
— The digital space functions as a launch pad for real life — the interface is a moment of aspiration, not a replacement for human connection
— Language, animation, and visual hierarchy all communicate: this is not another dating app

↗ laila.nyc`,
      next: ["What makes Laila's design different?", "Tell me about VEA's other branding projects", "What's VEA's approach to interface design?"],
    },
    {
      keywords: ["laila design", "laila interface", "laila aesthetic", "laila visual",
        "dating app design", "nocturnal aesthetic", "premium dating", "action first design"],
      reply: `The **Laila interface** was designed around one experience: the moment a New Yorker decides tonight is worth something.

**Design decisions:**

*Colour and atmosphere:*
— A deep, nocturnal palette — the city at night, not the app in daylight
— High contrast, editorial typography — closer to a luxury magazine than a tech product
— Motion that feels like the city: fast enough to feel alive, controlled enough to feel considered

*Motion and interaction:*
— Fluid animations that replace the hard cuts of conventional app marketing
— Interactive date archives — the content scrolls in ways that feel curated, not algorithmic
— Transitions that carry intention: every state change communicates something

*Positioning through design:*
— Nothing about the interface says "app" — it says "destination"
— The language is confident and spare — doesn't over-explain
— The overall effect: a visitor arrives on the page and immediately understands that Laila operates differently

The design challenge was to make the digital gateway feel as interesting as the real life it's meant to enable.`,
      next: ["Tell me about other VEA interface projects", "How does VEA approach motion design?", "What services does VEA offer?"],
    },
    {
      keywords: ["novantatre", "architectural film", "architecture film", "novantatre project",
        "film reel", "novantatre lu", "luxembourg architecture", "architecture video"],
      reply: `**Novantatre** is a Luxembourg architecture studio. VEA produced a series of short architectural film reels for selected projects.

**Film 1 — The Archive:**
A sequential, archive-like narrative that guides the viewer step by step through drawings and spatial layers. The film reads like reading the building's own logic — from first sketch to material decision, in order. The viewer doesn't see the building from outside first. They learn it from the inside out.

**Film 2 — The Surface:**
The building explored through controlled camera movement and façade transformation. Proportion, detail, and materiality brought to the foreground. The camera is slow and deliberate — every stop is a decision, not a transition.

**Format:**
Both films are compact — designed for contemporary media platforms, not festival screenings. They function on Instagram, Vimeo, a client presentation, and an award submission simultaneously. Short enough to hold attention, rich enough to earn it.

**The approach:**
Architectural film at VEA is not renderings with music. It is spatial editing — the same intelligence used to design a building applied to the sequence of images, the duration of each shot, and the weight of each cut.

↗ novantatre.lu`,
      next: ["Tell me about VEA's other film work", "What is Digital Content at VEA?", "How does cinematic storytelling work?"],
    },
    {
      keywords: ["architectural video", "architecture reel", "cinematic architecture",
        "how to film architecture", "architecture presentation video", "architectural storytelling"],
      reply: `VEA's approach to **architectural film** is rooted in one distinction: a film about architecture should be made by someone who thinks architecturally.

The difference in practice:

**Most architectural videos:**
— Fly-through renders with ambient music
— The camera moves to show the viewer what the architect wants them to see
— Lighting is clean and neutral; nothing is hidden
— The video ends when the tour is complete

**VEA's approach:**
— Sequence is edited, not toured — what comes first, and why?
— Camera decisions are spatial decisions: slow movement communicates weight; stillness communicates confidence; transition speed communicates the relationship between spaces
— Lighting is atmospheric — it makes the same choices a good photographer makes
— The film reveals the building the way a great floor plan reveals intent: through what it withholds as much as what it shows

For **Novantatre**, this meant two films with completely different logics — one archival and sequential, one spatial and tactile — both for the same studio, but telling different stories about how that studio thinks.`,
      next: ["Tell me about Novantatre specifically", "Tell me about DAS Pieces film work", "What other Digital Content does VEA make?"],
    },
    {
      keywords: ["das pieces", "das", "lamp", "lamp collection", "light collection",
        "das pieces project", "das project", "minimal lamp", "product narrative"],
      reply: `**DAS Pieces** is a minimal lamp collection. The brief wasn't "show the lamps" — it was to communicate the brand's relationship with light, space, and design philosophy.

**What VEA built:**
A visual world that situates each piece within its own atmospheric context. Not a product shoot — a spatial narrative.

Each lamp is placed in an environment designed for it. The space isn't background — it's part of the story. The way light falls, the surfaces it touches, the shadows it creates — all designed to express the lamp's character and the brand's philosophy.

**The design logic:**
DAS Pieces has a timeless, understated identity. The visual world VEA built reflects this: no trend-chasing, no styling excess. The environments are controlled and quiet. The lamps speak through the quality of the light they produce, not through surrounding noise.

**The result:**
A digital presence where each product is a considered statement. The brand's identity is embedded in how the work is shown, not overlaid on top of it.

↗ daspieces.com`,
      next: ["How does VEA approach product storytelling?", "Tell me about Digital Content", "Tell me about Laila's visual approach"],
    },
    {
      keywords: ["decentralize design", "decentralize", "clockwork", "clockwork identity",
        "decentralize project", "decentralize.design", "spatial documentation"],
      reply: `**Decentralize Design** is a spatial design studio specialising in virtual world-building. VEA built their complete digital presence from the ground up.

**The clockwork identity:**
The signature mark — "clockwork" — was designed to communicate precision, systematic thinking, and technical mastery. It's a mark that looks like a mechanism: every element has a function, and the overall form reveals the logic of its parts.

**Interactive website:**
A navigable digital space that allows visitors to understand the studio's work spatially, not just visually. The site is as considered as the work it presents.

**The 2-minute cinematic showcase:**
A feature video that deconstructs Decentralize Design's technical process in virtual world-building. Precise motion graphics merged with spatial documentation — the film functions as both a portfolio piece and a technical manifesto. It articulates not just *what* the studio builds, but *how they think* while building it.

**The overall system:**
Identity + website + film working as a single coherent argument: this is a studio that approaches space with the precision of an engineer and the intelligence of a designer.

↗ decentralize.design`,
      next: ["Tell me about Identity Building", "What is VEA's approach to brand identity?", "Tell me about other VEA projects"],
    },
    {
      keywords: ["technology", "tech", "stack", "tools", "platform", "three.js", "threejs",
        "webxr", "gsap", "react", "framer", "webflow", "how do you build",
        "what technology", "framework", "engine", "code", "technical"],
      reply: `VEA's technical stack is assembled per project — no one-size framework. The right tools for the specific brief.

**Core technologies:**

— **Three.js** — real-time 3D rendering directly in the browser. No plugins, no installs. The entire 3D world loads through a URL.

— **WebXR** — immersive VR/AR on the open web. For projects that need to be experienced in headsets or AR overlays, without a dedicated app.

— **Custom AI integrations** — generative and interactive layers within spatial interfaces. AI advisors, responsive environments, dynamic content.

— **GSAP & motion libraries** — precise, cinematic animation and transitions. Frame-by-frame quality control over every movement.

— **Framer / Webflow / fully custom builds** — depending on the project's editorial or interactive requirements. Platform chosen for the brief, not default.

**Performance philosophy:**
Everything browser-native. Off-screen object pausing — objects not in view pause rendering, preserving battery and CPU. Progressive LOD loading — models load at the detail level appropriate to camera distance. Device-aware rendering — the experience recalibrates for the hardware in the user's hands.

A 3D world that runs on a phone without sacrificing quality is not an afterthought — it's built in from the start.`,
      next: ["How does the 3D website work technically?", "Tell me about Worldbuilding", "Can the site work on mobile?"],
    },
    {
      keywords: ["browser", "browser based", "no download", "no app", "no plugin",
        "works in browser", "web based", "online", "url only", "access", "open in browser"],
      reply: `Every experience VEA builds is **browser-native** — accessible through a URL, on any device, with no downloads, no plugins, and no hardware requirements.

This is a deliberate position. A 3D world that requires an app to enter immediately loses most of its audience at the door. VEA builds for the open web: the experience should be as frictionless as clicking a link.

What this means in practice:
— Visitors access a full 3D spatial environment through a shared link
— No headset required (though WebXR experiences are VR-compatible when the hardware is present)
— The experience performs on laptops, desktops, tablets, and phones
— Load times are optimised through progressive loading and performance architecture

The ambition: the most immersive thing should also be the easiest thing to access.`,
      next: ["Tell me about the technical architecture", "What is Worldbuilding?", "Show me an example"],
    },
    {
      keywords: ["mobile", "mobile friendly", "phone", "smartphone", "tablet", "touch",
        "responsive", "touch screen", "ios", "android", "on mobile", "works on phone"],
      reply: `All VEA builds are designed to work on mobile from the start — not retrofitted at the end.

**Device awareness in 3D environments:**
— Camera controls recalibrate for touch vs. mouse — swiping on mobile is a completely different interaction model from desktop navigation
— Field of view, object label sizes, and touch sensitivity are tuned for handheld use
— Performance scales to device capability: mobile builds use lower-detail geometry while maintaining visual quality through texture and lighting choices

**The mobile experience is designed, not compressed:**
A VEA 3D environment on a phone isn't the desktop experience shrunk down. It's a considered version of the same world, optimised for how people actually hold and use their phones.

**Progressive loading:**
Content loads in priority order — what's in view first, at the appropriate detail level. The user experiences fluidity immediately, even as richer content loads in the background.

This approach means the work reaches its entire audience, not just those sitting at a desk.`,
      next: ["Tell me about the technology stack", "What about VR compatibility?", "How does performance work?"],
    },
    {
      keywords: ["vr", "virtual reality", "vr headset", "oculus", "meta quest", "ar",
        "augmented reality", "xr", "webxr", "headset", "immersive", "vr experience"],
      reply: `VEA builds with **WebXR** — the open web standard for VR and AR experiences.

**What this means:**
— Experiences designed by VEA can be entered in a VR headset (Meta Quest, Apple Vision Pro, and others) directly through the browser
— No dedicated app required — the same URL that works on a phone also works in a headset
— VR is an enhancement, not a requirement: the experience is excellent without VR, and transforms in VR

**AR overlays:**
WebXR also supports augmented reality — placing digital content in physical space through a phone camera. Products, spatial elements, and narrative layers can be experienced in the user's own environment.

**The design philosophy:**
VEA doesn't build experiences that only work in VR and are awkward everywhere else. The base experience — browser, any device — is excellent. VR deepens that experience for the subset of users who have the hardware. This ensures the work reaches its full audience.

For specific projects where full VR immersion is the primary deliverable, VEA can scope and build accordingly.`,
      next: ["Tell me about Worldbuilding formats", "How does the technology work on mobile?", "What projects use 3D?"],
    },
    {
      keywords: ["founder", "deniz", "agaoglu", "deniz agaoglu", "who founded", "who is behind",
        "team", "person", "architect", "creator", "who built", "who is deniz"],
      reply: `VEA was founded by **Deniz Agaoglu** — architect and digital designer.

**Education:**
— Bachelor of Architecture, **Istanbul Bilgi University**
— Master of Architecture and Urban Design, **Politecnico di Milano**

**Career:**
Her professional path started at **co.arch studio** in Milan — a practice spanning interior design, furniture, and urban-scale interventions. The range mattered: it built an instinct for scale, for how a decision at one size cascades across all others.

In **2022**, she relocated to **Luxembourg**, where her focus shifted toward digital design and immersive storytelling — finding the intersection between architectural thinking and the expanding possibilities of the digital space.

In **2025**, she founded **Virtually Ever After**.

**The practice:**
Deniz's work is rooted in a belief that architecture is a way of thinking, not just a building type. Spatial intelligence — hierarchy, sequence, proportion, narrative — applies as powerfully to a website or a brand identity as to a building. VEA is where that belief became a studio.

She continues to collaborate internationally with architects, cultural institutions, and creatives.`,
      next: ["What inspired VEA?", "Where is VEA based?", "What is VEA's mission?"],
    },
    {
      keywords: ["deniz background", "deniz education", "deniz milan", "deniz istanbul",
        "deniz architecture", "deniz polimi", "politecnico", "istanbul bilgi", "co.arch",
        "coarch", "milan studio", "architecture education"],
      reply: `Deniz Agaoglu's architectural education is the foundation of everything VEA does.

**Istanbul Bilgi University** — Bachelor of Architecture. An education grounded in design process, spatial reasoning, and the relationship between architecture and culture.

**Politecnico di Milano** — Master of Architecture and Urban Design. One of Europe's most rigorous architecture programmes, where Deniz developed her interest in the intersection between design and urban systems — and where the question of how space is represented and experienced became as interesting as how it's designed.

**co.arch studio, Milan** — Her first professional context. A practice that moved fluidly between scales: from furniture detail to urban intervention. This range developed the instinct that VEA runs on: the intelligence used to design a chair and the intelligence used to design a district are the same intelligence applied at different scales.

The move to **Luxembourg in 2022** marked a deliberate shift — from physical practice to digital practice. Not a departure from architecture but an extension of it: if architecture is the design of experience in space, then digital environments are architecture by another name.`,
      next: ["Who is Deniz Agaoglu?", "What is VEA's philosophy?", "What did VEA's first projects look like?"],
    },
    {
      keywords: ["where", "location", "based", "luxembourg", "city", "country", "office",
        "studio location", "where is vea", "luxembourg studio"],
      reply: `VEA is based in **Luxembourg** 🇱🇺.

Luxembourg was chosen deliberately:

— **Digital infrastructure**: Luxembourg has one of Europe's most advanced digital networks — critical for a studio building high-performance 3D and interactive experiences
— **Market position**: a dynamic real estate sector, active cultural institutions, and architectural offices with real appetite for digital innovation
— **European centre**: central location with direct access to French, German, Belgian, and broader EU markets — natural for a studio with international ambitions
— **International culture**: multilingual, business-oriented, open to technology investment — a natural environment for a studio that works across borders

The studio operates **remotely and on-site** depending on the project. Current collaborations span Luxembourg, Italy, the US, and beyond.`,
      next: ["Can VEA work outside Luxembourg?", "Who does VEA work with?", "How does a remote collaboration work?"],
    },
    {
      keywords: ["international", "outside luxembourg", "other countries", "europe", "global",
        "can you work with", "remote", "remote work", "collaboration remote", "overseas"],
      reply: `VEA works internationally — the studio's location in Luxembourg is a base, not a boundary.

Current and past collaborations span **Luxembourg, Italy, the United States, and Europe broadly**. The studio's process is designed for remote collaboration: all discovery, concept, and review stages work through video calls and shared digital environments. Physical presence is arranged for specific project needs — installation, exhibition, on-site direction.

Luxembourg's central position in Europe also makes it easy to be present across the continent on short notice.

If you're considering a project and wondering whether geography is an obstacle — it isn't. The conversation is the starting point, regardless of where you are.

📧 hello@virtuallyeverafter.xyz`,
      next: ["How does the collaboration process work?", "What does VEA's process look like?", "How do we start?"],
    },
    {
      keywords: ["who is vea for", "target", "client", "right for me", "suitable", "audience",
        "who works with vea", "do you work with", "what kind of client", "for whom"],
      reply: `VEA works with any organisation whose spaces, objects, or ideas deserve more than a standard presentation.

In practice, this means:

**Architecture & Design Studios**
Portfolio as spatial experience. Cinematic reels. Identity systems that hold across physical and digital.

**Fashion & Luxury Brands**
Virtual showrooms. Brand worlds that live online. Identity systems designed for objects at every scale.

**Real Estate Developers**
Immersive property tours. Pre-sales digital experiences. Environmental analysis. AI-guided navigation. Especially powerful for international buyers and unbuilt projects.

**Cultural Institutions**
Virtual museum experiences. Artwork interaction. Curator-designed routes. Provenance and collection systems.

**Restaurants & Hospitality**
Virtual venue tours. Table selection with real POV. 3D menu visualisation. Reservation integration.

**Tech Companies & Startups**
Spatial or editorial digital identities. Cinematic landing pages. Brand systems for digital-first companies.

**Creatives & Makers**
Portfolios that function as experiences, not catalogues. Work that earns the attention it receives.

The common thread: **a project that has a spatial dimension — physical or conceptual — and deserves a digital life that matches its quality.**`,
      next: ["What services does VEA offer?", "Show me VEA's work", "How do we start?"],
    },
    {
      keywords: ["real estate", "property", "housing", "development", "architecture project",
        "building project", "property developer", "real estate developer", "residential",
        "commercial property", "apartment", "pre-sales"],
      reply: `VEA has thought deeply about what a real estate digital experience can be — and how far most fall short of what's possible.

**What VEA builds for real estate:**

*Immersive property exploration:*
Start from the building's exterior — examine the façade, neighbourhood context, environmental analysis (nearest transport, parks, schools). Walk through the building from a bird's-eye cross-section, select any floor, descend to an apartment.

Inside the apartment: walls become transparent, rooms are explorable, dimensions and sunlight exposure appear contextually. Click out of any window — see the actual view, at the actual time of day. An AI real estate advisor answers questions in real-time.

*Pre-sales digital experiences:*
The most powerful application — for projects not yet built. International buyers can experience an unbuilt apartment in detail, compare floor plans spatially, and make decisions without being on-site. VEA has built for this: a 3D model of a development can be more persuasive than a physical showroom.

*Features:*
— Multiple viewing modes: exterior, cross-section, interior walkthrough, 360° panoramic points
— Real-time daylight simulation — how the space feels at different times
— Furniture placement and decoration options
— Direct reservation and purchase integration
— Mobile and VR compatible`,
      next: ["Can VEA build for unbuilt projects?", "How does the 3D real estate experience work?", "What does this cost?"],
    },
    {
      keywords: ["museum", "gallery", "cultural institution", "art gallery", "museum experience",
        "virtual museum", "digital museum", "exhibition online", "artwork online"],
      reply: `VEA's approach to cultural institutions starts from a conviction: the best digital museum experience should be something you couldn't do physically.

**What this means in practice:**

*Beyond the virtual tour:*
Visitors don't just see artworks — they access layers of information activated by their proximity and attention. Artist's voice narration, the creation process, historical context, restoration history — surfaced through interaction, not buried in a sidebar.

*New modes of seeing:*
Rotate a sculpture 360 degrees. Zoom into a painting at print resolution. See what the work looked like before restoration through an AR layer. Walk the curator's route — or build your own.

*Historical embedding:*
Stand in front of an ancient artefact and find yourself in the context of its origin — a temple, a market, a ceremony. The digital environment can place the work in the world it came from.

*Collector features:*
Provenance information, valuation data, restoration history, authentication documentation — all accessible within the same spatial experience.

*The physical and digital together:*
For institutions planning physical exhibitions, VEA can design the digital companion experience so that a visitor who explores online and then enters the physical gallery encounters the same spatial logic in both.`,
      next: ["Tell me about Exhibition Design", "What does VEA do for cultural institutions?", "Tell me about the technology"],
    },
    {
      keywords: ["restaurant", "hospitality", "dining", "venue tour", "restaurant website",
        "restaurant digital", "menu 3d", "table selection", "reservation virtual"],
      reply: `VEA's vision for a restaurant digital experience goes well beyond a photo gallery and a booking form.

**What's possible:**

*Virtual venue exploration:*
The visitor steps inside the restaurant — experiences the ceiling height, the table layout, the light at different times of day. They can navigate to any table and sit down, experiencing the space exactly from the angle they'll see while eating.

*Table selection with real POV:*
Every table has its own view — window seat, garden outlook, intimate corner, open dining room. Visitors test each before reserving. Features and capacity are visible at a glance. The reservation system opens from the selected seat.

*3D menu visualisation:*
Each dish appears as a 3D model on the virtual table — rotatable 360 degrees. Ingredients, allergens, nutritional values, and pairing recommendations surface on interaction. Chef's notes via short video for signature dishes.

*Ambiance simulation:*
Lighting shifts from lunch to dinner. Ambient sound adjusts. The visitor experiences the restaurant as it actually is at the time they're planning to visit.

*Reservation integration:*
Calendar with real-time availability, linked from the selected table and time. Special requests and menu pre-selection built in.`,
      next: ["Tell me about Worldbuilding", "What other use cases does VEA serve?", "How do we start?"],
    },
    {
      keywords: ["hotel", "resort", "spa", "accommodation", "hotel website", "hotel virtual tour",
        "resort experience", "hotel rooms online", "hotel digital"],
      reply: `A hotel's digital presence is its first impression — and VEA builds first impressions that earn the booking.

**What VEA designs for hotels and resorts:**

*Full facility exploration:*
From the lobby to the beach, pool, spa, and restaurants — each area with its own atmosphere, its own interactive features, its own story.

*Room selection:*
Visitors explore each room category in detail. Test the view under different daylight conditions. Roam the room, examine furniture and technical features. In some rooms, try alternative decoration options. The decision to upgrade becomes obvious, not a gamble.

*Amenity experiences:*
Spa treatment rooms toured individually, with information about each treatment. Restaurant tables selectable with real views. Kids' club, gym, meeting rooms — all detailed. Pool and beach areas with sunbed layout and sun position simulation at different times of day.

*The smart reservation system:*
Availability, package comparison, special requests, transfer services — all manageable through the same spatial interface.

*Virtual concierge:*
AI-guided recommendations for activities, dining, and local exploration — contextual to the property and the guest's preferences.`,
      next: ["Tell me about VEA's use cases for restaurants", "What about real estate?", "What technology powers this?"],
    },
    {
      keywords: ["university", "campus", "education", "school", "educational institution",
        "campus tour", "virtual campus", "university website", "college", "academic"],
      reply: `University campus tours were designed for the era of physical campus days. VEA builds what that era couldn't: a campus experience that's available at 2am to a prospective student on the other side of the world.

**What VEA designs for educational institutions:**

*Campus from above, then inside:*
A bird's-eye view of the entire campus — faculties, dormitories, sports facilities, cultural spaces — colour-coded and interactive. Zoom into any building, enter any space.

*Real-time activity:*
Which classrooms have lectures. Lab availability. How full the study areas are. The campus feels alive, not staged.

*Department exploration:*
Enter a faculty building — review course curricula, see equipment in labs, meet academic staff through profiles. Application requirements, scholarship information, and application forms all within the same spatial environment.

*Student life:*
Explore dormitory rooms in detail. See the cafeteria daily menu. Check the student club activity calendar. Tour sports facilities, fitness centers, and social spaces.

*The virtual student guide:*
An AI guide accompanies the visit — answering questions, sharing insights about campus life, making the experience feel like a genuine introduction rather than a brochure.`,
      next: ["Tell me about other VEA use cases", "What is Worldbuilding?", "How does AI integration work?"],
    },
    {
      keywords: ["stadium", "sports", "arena", "sports complex", "seat view", "stadium tour",
        "sports venue", "match day", "football", "basketball arena"],
      reply: `A stadium digital experience built by VEA starts with the question every ticket buyer actually asks: *what will I see from that seat?*

**What VEA builds for stadiums and sports complexes:**

*Seat POV testing:*
The visitor selects any seat in the stands and experiences match day from that exact position. Real footage from past matches shown from the selected viewpoint. The pitch, the scoreboard, the atmosphere — all testable before purchase.

*Facility exploration:*
From the pitch level — turf quality, lighting systems, technical infrastructure. Locker rooms, press tribune, technical areas. The club museum and trophy room. The VAR room and manager's dugout. Every space accessible and detailed.

*Training complex:*
The training grounds — pitch setup, recovery facilities, tactical rooms — for clubs that want to showcase the full operation.

*"Living History" feature:*
Significant match moments replayed in 360 degrees from any viewpoint. The atmosphere of a historic final, a championship-winning goal — experienced spatially, not just watched.

*Smart ticketing:*
Seat selection with real-time pricing and availability. Compare grandstand categories with genuine visual information. Book with full confidence.`,
      next: ["Tell me about other use cases", "What technology powers this?", "Tell me about Worldbuilding"],
    },
    {
      keywords: ["factory", "production facility", "manufacturing", "industrial", "factory tour",
        "production process", "facility tour", "manufacturing digital"],
      reply: `Factory and production facility experiences built by VEA serve a specific and underserved purpose: **transparency as trust**.

**What VEA builds for production facilities:**

*Process walkthrough:*
From raw material entering the facility to packaged finished product — every stage interactive and legible. Each station explains what happens there, what technology is used, and what quality control is applied.

*Visual explainers:*
Machines that are otherwise opaque become transparent — literally. Animations show working principles. Technical specifications surface in context, not in a separate brochure.

*Sustainability features:*
Energy efficiency systems, waste management processes, recycling units — visible and explained. Increasingly, the production story is part of the brand story. VEA makes it spatial and credible.

*Data integration:*
Key performance indicators — production capacity, efficiency rates, quality metrics — visualised through interactive graphics within the spatial environment.

*R&D laboratory:*
For facilities with innovation programmes, the R&D lab and future project pipeline can be explored — communicating not just what's made today, but what's being built for tomorrow.`,
      next: ["Tell me about other VEA use cases", "How does the technology work?", "Tell me about Visual Storytelling"],
    },
    {
      keywords: ["festival", "event venue", "concert", "concert hall", "music venue",
        "festival venue", "event space digital", "stage experience", "festival digital"],
      reply: `A festival venue digital experience — built by VEA — answers the question every attendee has before they buy: *what's it actually like to be there?*

**What VEA builds for festivals and concert venues:**

*Stage POV experience:*
Visitors select their viewing position — VIP, standing area, grandstand tier — and experience the stage from exactly there. Past performance footage shown from the selected position. Sound quality and distance to stage demonstrated spatially.

*Full venue map:*
Bird's-eye interactive overview of all stages, event areas, and facilities. Food and beverage locations, rest areas, emergency stations — all mapped with real-time queue information where available.

*Historical moments:*
The festival's significant performances replayed in 360 degrees. The atmosphere of a legendary headline act — from the crowd, not from a broadcast camera.

*Practical festival planner:*
Schedule comparison, conflict detection, personal itinerary builder. Transport options, alternative entrances, and shelter locations.

*Ticketing integration:*
Category selection with real visual information. A visitor who has experienced the view from section 4 row 3 buys that ticket with genuine confidence.`,
      next: ["Tell me about Worldbuilding", "What other use cases does VEA serve?", "Tell me about the technology"],
    },
    {
      keywords: ["car", "automotive", "vehicle", "showroom", "car showroom", "dealership",
        "configurator", "car configurator", "auto", "automobile"],
      reply: `**Automotive showrooms** built by VEA take the configurator beyond colour selection and into genuine spatial experience.

**What VEA builds:**

*Exterior exploration:*
Visitors walk around the vehicle — examine light on the bodywork, design lines from every angle. Change the colour, see different rim options, open the hood. Every element at full 3D fidelity.

*Interior experience:*
Sit behind the wheel. Examine the cockpit in 360 degrees. Change seat upholstery and colour. Open and close the sunroof. Activate the dashboard — test its features. The visitor makes interior decisions with the same confidence as exterior ones.

*Technical transparency:*
The chassis becomes transparent — suspension, engine block, safety systems — all visible and explained. Animated demonstrations of how each system works. Technical education as part of the purchase journey.

*From configuration to commitment:*
Customise the vehicle, calculate pricing, book a test drive, initiate purchase — all within the same spatial experience. The gap between desire and decision is minimised.`,
      next: ["Tell me about other VEA use cases", "What is Worldbuilding?", "How does the 3D technology work?"],
    },
    {
      keywords: ["vintage", "antique", "secondhand", "second hand", "thrift", "collectible store",
        "vintage store", "antique store", "pre-owned", "archive store"],
      reply: `A second-hand or vintage store experience built by VEA does something no physical vintage shop can: **give every item its full story, instantly accessible.**

**What VEA builds for vintage and antique retail:**

*Atmospheric navigation:*
Items grouped by era, category, and aesthetic — each section with its own period atmosphere. Music of the era, visual design referencing the period. Browsing as time travel.

*Item information layers:*
Approach a vintage dress — designer, era, fabric, production techniques appear. Examine antique furniture — wood type, place of production, stylistic period. For collectibles: provenance, past owners, and the object's journey through time.

*Items in context:*
Select a piece — see it in a typical environment of its era. An Art Deco lamp in a 1930s living room. A vintage jacket on the street where it would have been worn. Historical contextualisation as selling tool.

*Real-time inventory:*
New arrivals visible immediately. Price change alerts. Favorites list and notification system. The physical store and the digital world updated simultaneously.

*Authentication and provenance:*
Restoration history, condition reports, and authenticity certificates — all accessible within the item's spatial environment.`,
      next: ["Tell me about other use cases", "What is Worldbuilding?", "Tell me about VEA's approach to digital content"],
    },
    {
      keywords: ["city", "tourism", "city promotion", "destination", "neighbourhood",
        "urban", "city experience", "city digital", "tourism digital", "travel"],
      reply: `A city or destination digital experience — built by VEA — creates the spatial awareness that makes a traveller commit to the journey.

**What VEA builds for cities and tourism:**

*Bird's-eye arrival:*
The city from above — historical districts, modern centres, coastline, key landmarks — all interactive and intelligible. Zoom into any neighbourhood. Above each significant point: icons for historical buildings, parks, cultural centres, food destinations.

*Street-level exploration:*
Land at any selected point and tour at ground level. Historical squares with temporal layers — see how the space has evolved across centuries. Buildings with layered stories: architecture, culture, significance.

*Themed experience routes:*
"History Route" — museums, monuments, historical buildings
"Gastronomy Route" — restaurants, markets, food culture
"Art Route" — galleries, street art, cultural spaces
"Lifestyle Route" — shopping, parks, local life

Each route explorable independently, with depth and context at every stop.

*Practical integration:*
Public transport network, parking, event calendar. Personal travel planning with reservations and ticketing built in.`,
      next: ["Tell me about other use cases", "What technology powers this?", "Tell me about Worldbuilding"],
    },
    {
      keywords: ["fitness", "gym", "wellness", "spa experience", "fitness center",
        "health club", "personal trainer", "workout", "fitness digital"],
      reply: `**Fitness and wellness** experiences built by VEA translate the motivation of being inside a great facility into digital discovery.

**What VEA builds:**

*Equipment exploration:*
Each machine and training area explorable with detailed animations showing proper use and correct form. Not a video — a spatial experience where the visitor can approach any piece of equipment and understand it.

*Class studios:*
Virtual class sessions in each studio — experience the space, the instructor's movement style, the energy. Schedule and book directly from the virtual studio. Capacity and real-time availability shown.

*Spa and recovery:*
Each treatment room toured individually — atmosphere, equipment, and treatment information. Booking integrated. Therapist profiles and availability.

*Membership planning:*
Compare plans with real visual information. Peak-hours charts for smart scheduling. Personal trainer profiles and specialisations. Nutrition consultation booking.

*The conversion logic:*
A visitor who has experienced the 6am cycling class from inside the studio, toured the recovery pool, and checked when their preferred trainer is available is a visitor who becomes a member. VEA builds the experience that earns that decision.`,
      next: ["Tell me about other VEA use cases", "What is Worldbuilding?", "How do we start?"],
    },
    {
      keywords: ["airport", "aviation", "wayfinding", "terminal", "airport experience",
        "flight", "gate", "duty free", "airport digital"],
      reply: `Airport digital experiences built by VEA transform one of the most stressful navigational challenges into something manageable and even pleasant.

**What VEA builds:**

*Terminal navigation:*
The full passenger journey — check-in to gate — mapped spatially and interactively. Real-time wait times at each checkpoint. Alternative routes and shortcuts highlighted contextually.

*Step-by-step simulation:*
Interactive walkthrough of every stage: check-in process, baggage drop, security, boarding. The first-time traveller arrives knowing exactly what to expect. The experienced traveller identifies which entrance and security lane is fastest today.

*Retail and dining:*
Duty-free areas explorable. Restaurant menus accessible in advance. Lounge features and access requirements shown. Baby care rooms, prayer spaces, and other facilities mapped with contextual information.

*Flight integration:*
Live flight status, gate changes, transfer timing — all overlaid on the spatial environment. The visitor navigates the airport in relation to their actual flight.

*Ground transport:*
Parking booking, transfer services, and public transport options — planned and booked from within the same spatial experience.`,
      next: ["Tell me about other use cases", "What technology powers this?", "Tell me about Worldbuilding"],
    },
    {
      keywords: ["hospital", "health", "clinic", "medical", "healthcare", "health center",
        "medical facility", "hospital digital", "clinic virtual", "healthcare experience"],
      reply: `Healthcare facility experiences built by VEA do something important: they reduce anxiety by replacing the unknown with the known.

**What VEA builds:**

*Transparent facility exploration:*
Each department and clinic clearly visible in a 3D map. Specialty, staff profiles, and services offered for each area. Treatment rooms, equipment, and procedures explained through spatial interaction — not medical jargon on a static page.

*Technology education:*
Equipment shown in context, with explanations of function and the procedures they support. Sterilisation and safety protocols visible — transparency as reassurance.

*Smart patient journey:*
Appointment booking, waiting time tracking, parking availability, check-in processes — all within the same spatial interface. The administrative burden is removed from the patient experience.

*Patient room comparison:*
Room types explored in detail. Comfort features, technical specifications, and support services visible. The decision to choose a facility is supported by genuine information.

*The anxiety reduction effect:*
A patient who has walked through the facility digitally before arriving is a patient who arrives with confidence, not dread. For elective procedures especially, VEA's spatial experience is a meaningful factor in the decision to choose a facility.`,
      next: ["Tell me about other use cases", "What technology powers this?", "Tell me about VEA's approach"],
    },
    {
      keywords: ["shopping", "mall", "retail", "store", "shop", "brand store",
        "virtual fitting", "retail experience", "ecommerce", "fashion retail"],
      reply: `**Retail and mall** digital experiences built by VEA make online shopping spatial — turning browsing into genuine discovery.

**What VEA builds:**

*Mall navigation:*
Interactive map with stores colour-coded by category. Real-time occupancy data, current campaigns, and discount alerts overlaid spatially. Favourite brands found instantly; everything else discovered naturally.

*Store entry:*
Each store's façade acts as a living portal. Inside: the full collection in three dimensions. Products come off shelves — examinable at full detail, in colour variations, in different sizes.

*Virtual fitting:*
For fashion, selected garments can be applied to a virtual form — proportions, drape, and styling visible without a physical fitting room.

*Food court:*
Restaurant menus in 3D. Real-time table availability. Pre-order capability. Allergen and nutritional information contextual to each dish.

*Personalised shopping:*
AI-powered suggestions based on browsing behaviour. Discount alerts for watched items. Shopping list management across multiple stores. Parking availability and optimal entry point — all integrated.

*The seamless path to purchase:*
Product interest → detail view → size and colour selection → inventory check → purchase. No friction, no new interfaces.`,
      next: ["Tell me about other VEA use cases", "What is Worldbuilding?", "How does AI integration work?"],
    },
    {
      keywords: ["process", "how does it work", "how do you work", "work together", "collaboration",
        "approach", "methodology", "steps", "workflow", "how does a project work",
        "what happens when", "how does vea work"],
      reply: `VEA's process is built around close collaboration — every project is treated as a unique narrative, not templated.

**01 — Discovery**
A focused conversation: your project, its context, what it needs to communicate. We listen before proposing anything. No assumptions about what you need; we find out.

**02 — Concept**
A clear spatial and editorial concept — what the experience will *feel* like, not just look like. This is presented for your feedback before a line of code is written or a frame is rendered. The concept stage is where the thinking happens; everything after is execution.

**03 — Production**
Design, build, and content production run in parallel. You receive progress updates and review stages throughout — no black boxes, no "we'll show you when it's done."

**04 — Delivery & Beyond**
Final delivery — website, reel, identity, or all three. VEA remains available for iterations, expansions, and future phases. Projects aren't handed over and forgotten.

**What makes VEA's process different:**
The studio thinks before it makes. The concept stage isn't a formality — it's where the most important decisions are made. A spatial brief answered without a spatial concept is just a technical project.`,
      next: ["How long does a project take?", "What do I need to bring to start?", "What does pricing look like?"],
    },
    {
      keywords: ["how long", "timeline", "duration", "time", "weeks", "months",
        "project duration", "turnaround", "delivery time", "how much time"],
      reply: `Project timelines at VEA vary significantly based on scope, but here are realistic reference points:

**Cinematic reel / short film:**
3–5 weeks from brief to delivery. For a series of reels (like the Novantatre project), add time proportionally for review stages.

**Brand identity system:**
4–6 weeks for logo + core identity system. Full system including booklet, motion guidelines, and application design: 6–10 weeks.

**3D website (Hybrid Spatial Gallery format):**
5–8 weeks from concept sign-off to launch.

**Full 3D spatial environment (Atmospheric Spatial Interface):**
8–14 weeks, depending on content volume, interaction complexity, and integration requirements.

**Combined projects (identity + 3D website + content):**
12–18 weeks — phases can overlap, but the total system requires sufficient time for each component to be excellent.

**What accelerates timelines:**
A clear brief at the start. Quick review cycles — the faster the feedback, the faster the project. Content (models, photography, copy) provided early.

**What extends them:**
Brief changes after concept sign-off. Review delays. Complex technical integrations (e-commerce, reservation systems, third-party data).

The clearest answer comes from a conversation about your specific project.`,
      next: ["What does pricing look like?", "What do I need to bring to start?", "How does the process work?"],
    },
    {
      keywords: ["what do you need from me", "what do i need", "brief", "brief requirements",
        "how to start", "starting a project", "what information", "requirements",
        "what should i prepare", "i want to start"],
      reply: `Starting a project with VEA doesn't require a polished brief — a clear sense of the problem is enough.

**Useful things to have:**

*Non-negotiable:*
— A sense of what you're building and who it's for
— A rough idea of the deliverable (3D website, reel, identity, or combination)
— Any existing brand material (logo, colours, photography, 3D models if applicable)

*Very helpful:*
— Reference points — things you've seen that feel right or wrong for your project
— A timeline pressure (launch date, event, press moment)
— A sense of budget range — it shapes what's possible to propose

*Not required:*
— A finished brief
— Technical knowledge
— Certainty about what format is right

**The first conversation is discovery, not presentation.** VEA's goal in that first exchange is to understand the project well enough to respond with a concept rather than a price list.

Start the conversation: 📧 hello@virtuallyeverafter.xyz`,
      next: ["What does pricing look like?", "How does the process work?", "What services does VEA offer?"],
    },
    {
      keywords: ["price", "pricing", "cost", "how much", "budget", "fee", "quote",
        "afford", "package", "rates", "invoice", "charge", "expensive", "cheap",
        "affordable", "value", "what does it cost", "investment"],
      reply: `VEA's pricing is **project-specific** — no fixed packages, because no two projects have the same scope, timeline, or creative demands.

**What shapes a proposal:**
— Type of deliverable (3D website, cinematic reel, identity system, or a combination)
— Scale of the project and required timeline
— Level of creative direction and concept development involved
— Technical complexity (third-party integrations, content volume, performance requirements)

**Historical reference ranges:**
— Focused editorial projects / short film series: from €2,000
— Architectural presentations / brand identity: €2,000–€6,000
— Full identity systems with publication design: €4,000–€10,000
— Hybrid Spatial Gallery websites: €5,000–€10,000
— Real estate / full 3D spatial experiences: €8,000–€15,000
— Cultural institution / full system builds: €10,000–€20,000
— Combined projects (identity + 3D + content): scoped per phase

**The fastest route to a clear number:**
A 20-minute conversation. VEA can send a clear, honest, itemised proposal within one business day of a productive brief exchange.

📧 hello@virtuallyeverafter.xyz`,
      next: ["How do we start a conversation?", "What does the process look like?", "What is included in a 3D website?"],
    },
    {
      keywords: ["contact", "reach", "email", "phone", "message", "talk", "connect",
        "get in touch", "speak", "meet", "book", "call", "inquiry", "enquiry",
        "instagram", "social", "dm", "linkedin", "twitter", "website link"],
      reply: `To start a conversation with VEA:

📧 **hello@virtuallyeverafter.xyz**
🌐 **virtuallyeverafter.xyz**

The studio responds to all enquiries within one business day. Whether you have a detailed brief or just the beginning of an idea — both are welcome starting points.

VEA's process begins with listening: the first exchange is a discovery conversation, not a sales call.`,
      next: ["How does the process work?", "What services does VEA offer?", "What do I need to start?"],
    },
    {
      keywords: ["vera", "who are you vera", "who is vera", "what are you", "are you ai",
        "ai assistant", "chatbot", "bot", "are you human", "is this a bot",
        "are you a robot", "artificial intelligence", "vera vea"],
      reply: `I'm **Vera** — VEA's AI guide.

I know Virtually Ever After inside out: the projects, the services, the technology, the process, the founder, the pricing, the philosophy. I'm here to answer anything you want to know about the studio.

If your question goes beyond what I know, I'll tell you directly and point you to the team: **hello@virtuallyeverafter.xyz**

I'm not a general-purpose AI. I don't do homework or write emails. I do know a lot about spatial design, immersive technology, and what VEA can build for you.

What would you like to explore?`,
      next: ["What does VEA do?", "Show me the projects", "How does VEA work?"],
    },
    {
      keywords: ["future", "future of architecture", "future of design", "next five years",
        "where is architecture going", "digital future", "internetisation", "what comes next",
        "spatial computing", "web 3", "web3", "future of space"],
      reply: `VEA sits at the leading edge of a structural shift: the **internetisation of architecture**.

Buildings and spaces are no longer just physical — they are digital assets with layered information, interactive experiences, and dynamic content that exist simultaneously online and off. The architect of the near future is not only a building designer but a systems designer, a narrative builder, a digital experience orchestrator.

VEA's reading of where this goes:

**2025–2027:** Hybrid practice becomes standard. Architecture studios that can deliver physical *and* digital simultaneously gain competitive advantage. Spatial websites, cinematic reels, and spatial identity become expected, not exceptional.

**2027–2030:** Spatial computing (XR, spatial audio, ambient computing) expands the range of what a "digital space" means. The web becomes dimensional. Architecture studios that built spatial thinking into their digital practice are positioned to lead.

**2030+:** The boundary between physical design and experience design dissolves. Architects, UX designers, spatial programmers, and narrative designers converge on the same briefs.

VEA is building at this convergence — now. The tools, the methodology, and the projects are already pointing at this future.`,
      next: ["What is VEA's philosophy?", "What does Worldbuilding mean?", "What technology does VEA use?"],
    },
    {
      keywords: ["ai integration", "ai in design", "artificial intelligence design",
        "ai advisor", "ai guide", "ai in 3d", "ai spatial", "ai architecture"],
      reply: `VEA integrates AI into spatial experiences in two distinct ways:

**Within the experience — AI as guide:**
In complex spatial environments (real estate tours, museum experiences, university campuses, hotel facilities), AI assistants answer visitor questions contextually, provide recommendations based on behaviour, and personalise the experience in real-time.

An AI real estate advisor can answer questions about an apartment — floor area, materials, proximity to schools — without the visitor leaving the 3D tour. A museum AI curator can tell the story of an artwork, relate it to others in the collection, and guide the visitor toward pieces they'll find meaningful.

**Within VEA's design process — AI as tool:**
Generative and interactive layers within spatial interfaces. Dynamic content that responds to user behaviour. Environments that change based on time of day, user history, or contextual data.

**The philosophy:**
Technology is invisible in great design. The AI should not call attention to itself — it should make the experience feel smarter, more responsive, more human. A visitor in a VEA-built environment shouldn't think "there's an AI here." They should simply feel that the space understands what they need.`,
      next: ["Tell me about the technology stack", "Tell me about Worldbuilding", "What use cases does this apply to?"],
    },
    {
      keywords: ["different from", "better than", "competitor", "compared to", "versus",
        "alternative", "why vea", "why choose vea", "what makes vea different",
        "other agencies", "other studios", "why not someone else"],
      reply: `VEA's differentiation isn't a feature list — it's a point of view.

**Most digital studios** approach space as a medium for displaying content. A website is a container. A video is a presentation. The design problem is "how do we show this well?"

**VEA approaches space as the content itself.** The design problem is "what world does this project deserve to inhabit, and how do we build it?"

This shift in framing changes everything:

— A 3D website isn't a gallery with products in it — it's an environment where products *become* something. Where a visitor *feels* something about the brand before they understand why.

— A cinematic reel isn't a walkthrough with music — it's a film that makes spatial and editorial decisions as rigorously as a director makes narrative decisions.

— A brand identity isn't a visual system — it's a spatial language that works at every scale, in every medium, in motion and in stillness.

VEA was founded by an architect, trained at some of Europe's best schools, practised at the building scale, and then asked: what if this thinking was applied to the digital world?

The answer is the studio.`,
      next: ["What services does VEA offer?", "Show me the projects", "What is VEA's philosophy?"],
    },
    {
      keywords: ["how is vea different from a web agency", "agency vs vea", "web design agency",
        "digital agency", "design agency", "regular agency", "standard website"],
      reply: `VEA is not a web agency. The distinction matters.

**A web agency** starts from the interface: what does the user need to do, and how does the UI support that? The architecture of the experience is functional — it's designed to be efficient, clear, and usable.

**VEA starts from the world:** what does this brand, studio, or project deserve to inhabit? What is the spatial logic of the experience? How does a visitor *feel* when they enter, and what do they understand by the time they leave?

This means VEA projects often take longer, cost more per square pixel, and require a different kind of client conversation — one about the project's meaning, not just its requirements.

The results are correspondingly different: Status CO's 3D website isn't a product catalogue in 3D. It's a collecting experience. Laila's landing page isn't a dating app marketing site. It's a New York feeling.

**When to choose a web agency:**
Clear functional requirements. Standard content management needs. Budget-driven scope.

**When to choose VEA:**
The project deserves a world. The brand needs an experience, not a presence. The work is good enough that how it's presented should be equally good.`,
      next: ["Tell me about VEA's projects", "What services does VEA offer?", "How does pricing compare?"],
    },
    {
      keywords: ["freelancer", "freelance", "how big is the team", "team size", "who does the work",
        "how many people", "staff", "employees", "who works at vea", "collaboration model"],
      reply: `VEA operates as a **focused studio** — Deniz Agaoglu leads the creative and strategic direction on every project, with a network of specialist collaborators engaged based on the needs of each brief.

This model has deliberate advantages:

**Creative consistency:** Every project carries VEA's spatial and editorial intelligence from brief to delivery. The thinking isn't diluted across a team where some members are less invested in the outcome than others.

**Technical flexibility:** Rather than maintaining a full in-house team across 3D development, motion, identity, and content simultaneously, VEA works with expert collaborators at each level — 3D specialists, motion designers, content directors — selected for their specific excellence.

**Responsibility:** Deniz is the point of contact, the creative lead, and the quality guarantee. There's no account manager translating your brief to a team you never meet.

For larger projects requiring broader production capacity, the studio scales its collaborator network accordingly — without diluting the creative lead.`,
      next: ["How does the process work?", "Who is Deniz Agaoglu?", "How do we start?"],
    },
    {
      keywords: ["can vea build", "can you build", "do you build", "does vea build",
        "can you make", "is it possible", "can this be done", "can vea do"],
      reply: `VEA's capabilities span spatial 3D environments, brand identity, cinematic content, exhibition design, and product design — with the flexibility to combine them.

The clearest way to answer "can VEA build this" is to describe what you have in mind. Some questions worth answering:

— Is the primary output a digital experience, a visual identity, or content?
— Does it involve 3D space, or is it editorial/motion-based?
— What's the context — a launch, an ongoing presence, an event, a sales tool?

VEA has built for fashion brands, architecture studios, tech startups, a dating app, and cultural institutions. The range isn't a weakness of focus — it's evidence that spatial thinking applies across contexts.

If you describe the project, I can tell you where it fits in VEA's work and what the most likely approach would be.`,
      next: ["What services does VEA offer?", "Show me the projects", "Contact VEA directly"],
    },
    {
      keywords: ["thank", "thanks", "thank you", "merci", "grazie", "teşekkür", "appreciate",
        "helpful", "great", "awesome", "perfect", "wonderful", "brilliant", "loved it",
        "very helpful", "that's helpful", "thats helpful"],
      reply: `Glad it was useful.

If something concrete is taking shape — or you just want to explore what's possible — the team is at **hello@virtuallyeverafter.xyz**

The first conversation costs nothing and usually clarifies a lot.`,
      next: ["How do we start a project?", "What services does VEA offer?", "Show me the projects"],
    },
    {
      keywords: ["bye", "goodbye", "see you", "later", "farewell", "take care",
        "adieu", "see you later", "goodbye for now", "quit"],
      reply: `Until next time.

If something comes up — a project, a question, or just the beginning of an idea — we're at **hello@virtuallyeverafter.xyz**

Take care.`,
      next: [],
    },
    {
      keywords: ["brand story", "brand narrative", "heritage", "origin story", "brand history",
        "company story", "storytelling brand", "brand experience", "brand world"],
      reply: `**Brand storytelling** at VEA goes beyond writing copy or producing a "brand film."

A brand story experience — built spatially — works like this:

*The origin:*
The visitor steps into the moment the brand began. The founder's first workshop. The first sketch. The earliest product. Not a timeline slide — a place, with the textures, sounds, and light of that era.

*The milestones:*
The story moves through key moments — the first store opening, the first international recognition, the product that changed everything. Each as an interactive experience, not a caption.

*The innovation layer:*
Product development explored step by step — design phases, testing, the challenges and the solutions. Objects examinable in three dimensions, with their working principles animated.

*The impact:*
Sustainability journey, social responsibility, community projects — made spatial and credible rather than presented as a page of claims.

*The future:*
The brand's vision — where it's going, what it's building — made navigable rather than announced.

VEA has thought through this format in detail because the most powerful brand experiences are the ones that put the visitor inside the story, not outside watching it.`,
      next: ["Tell me about Identity Building", "Tell me about Digital Content", "Show me VEA's projects"],
    },
    {
      keywords: ["show me your work", "portfolio", "projects", "case studies", "examples",
        "previous work", "past projects", "clients", "what have you done",
        "what has vea built", "what has vea made", "work examples", "see your work"],
      reply: `VEA's current project archive:

**Status CO — 2026**
Interactive 3D website · 3D exhibition environment · Logo · Brand identity · Packaging · Motion reels · Pop-up space design
A complete spatial, digital, and experiential system for a fashion brand positioned as a collectible archive.
↗ status-co.com

**Novantatre — 2025–2026**
Series of architectural film reels
Sequential, archive-like narratives translating architecture into cinematic spatial stories.
↗ novantatre.lu

**DAS Pieces — 2025**
Digital narrative for a lamp collection
A visual world situating each piece within its own atmosphere.
↗ daspieces.com

**Laila — 2026**
Landing page design
A cinematic interface for an action-first NYC dating app — positioned as a lifestyle destination.
↗ laila.nyc

**Decentralize Design — 2025**
Interactive website · Logo · "Clockwork" visual identity · 2-minute cinematic showcase
A complete digital presence for a spatial design studio.
↗ decentralize.design

Is any of these close to what you're working on?`,
      next: ["Tell me more about Status CO", "Tell me more about Laila", "Tell me more about Decentralize Design"],
    },
    {
      keywords: ["what format is right for me", "which format", "what should i choose",
        "right option", "which service", "what do i need", "best option",
        "what would you recommend", "recommend"],
      reply: `The right format depends on what the project actually needs to do — not on what's most impressive in the abstract.

A few questions that help orient the decision:

**Who is the audience, and what's their context?**
— A client reviewing a proposal for a building needs detail and credibility, not spectacle
— A consumer browsing a fashion brand needs atmosphere and aspiration
— A buyer considering a property needs information and spatial confidence

**What does the project communicate?**
— Process and intelligence → cinematic reel or interactive documentation
— Presence and atmosphere → Atmospheric Spatial Interface or Hybrid Gallery
— Collection or catalogue → Index as Mapping or 3D interactivity
— Brand and identity → Identity system, potentially with a Booklet

**What's the timeline and budget reality?**
— Focused brief + 4 weeks → editorial reel or identity
— Real presence with spatial quality → Hybrid Gallery
— Full world-building → Atmospheric Spatial Interface with longer timeline

The best answer comes from a conversation. If you tell me what you're working on, I can give a more specific read.`,
      next: ["Tell me about the different Worldbuilding formats", "How does pricing work?", "How does the process start?"],
    },
    {
      keywords: ["content management", "update content", "who updates", "can i update",
        "cms", "non technical", "edit without code", "update website",
        "manage myself", "excel cms", "no code update"],
      reply: `One of VEA's most distinctive technical decisions: **content management through Excel**.

For 3D spatial environments (particularly the Status CO build), the content system works like this:
— Products, their positions in 3D space, their metadata (price, description, imagery, video), and their interactive behaviours are all defined in a spreadsheet
— The brand team edits the spreadsheet — changes product position, updates pricing, adds new items
— The 3D world updates accordingly, without a developer touching the code

**Why this matters:**
Most 3D web experiences are expensive to maintain because every update requires a developer. VEA's approach inverts this: the complexity is in the initial build, not in the ongoing operation. Once the world is built, the brand owns it in the most practical sense.

**Beyond Excel:**
For content-heavy projects, VEA can integrate with existing CMSs (Webflow, Contentful, custom) depending on the project's editorial requirements.

The goal is always the same: the person who needs to update the content should be able to do it without depending on a developer for every change.`,
      next: ["Tell me more about how the 3D website works", "Tell me about Status CO technically", "What technology does VEA use?"],
    },
    {
      keywords: ["seo", "search engine", "google", "searchable", "indexed", "rank",
        "search ranking", "discoverable", "seo friendly", "search optimisation"],
      reply: `**SEO for browser-based 3D experiences** is a real consideration — and one VEA accounts for in the build architecture.

The challenge: search engines index text and HTML, not Three.js rendered environments. A fully 3D website without a static layer can be invisible to Google.

**VEA's approach:**
— Static HTML foundations carry the SEO-relevant content (meta tags, descriptions, key text, structured data)
— The 3D experience layers on top of this foundation — visible to users, but the underlying text remains crawlable
— Proper semantic markup ensures search engines understand the page's content and context
— For projects where organic search is a primary acquisition channel, VEA designs the architecture to serve both the human visitor and the search crawler

If SEO is a priority for your project, it's worth discussing at the brief stage so the build architecture accounts for it from the start.`,
      next: ["Tell me about the technical architecture", "What does a full project build include?", "How do we start?"],
    },
    {
      keywords: ["loading", "loading speed", "performance", "fast", "slow", "load time",
        "how fast", "bandwidth", "data", "optimisation", "performance optimisation"],
      reply: `Performance is built into VEA's 3D environments from the start — not optimised after the fact.

**Key techniques:**

*Progressive LOD (Level of Detail):*
Models load at different detail levels based on camera proximity. Objects far away render at low detail; close objects render at full quality. The visitor sees quality where it matters.

*Off-screen object pausing:*
Objects outside the viewport stop rendering entirely. This preserves CPU and battery life — critical for mobile users in longer sessions.

*Texture streaming:*
High-resolution textures load progressively — the experience is usable immediately, with quality increasing as assets load in the background.

*Device-aware rendering:*
The rendering pipeline detects device capability and adjusts the quality level accordingly. A high-end desktop gets the full visual experience; a mid-range phone gets a tuned experience that still feels excellent.

*Initial load optimisation:*
Critical assets load first; everything else loads on demand. The visitor enters the world quickly, and the world fills in around them.

The result: a 3D environment that loads in seconds and runs smoothly on the hardware most visitors actually have.`,
      next: ["Tell me about the technology stack", "Tell me about Worldbuilding", "How does it work on mobile?"],
    },
    {
      keywords: ["maintenance", "after launch", "ongoing", "support", "updates after",
        "post launch", "after delivery", "ongoing support", "long term"],
      reply: `VEA's relationship with projects doesn't end at launch.

**Ongoing availability:**
After delivery, the studio is available for iterations, updates, and expansion. Whether that's adding new products to a 3D environment, releasing a new campaign reel, or evolving the identity for a new collection — VEA can engage at that level.

**Content updates:**
For projects built with Excel-driven content management, the client can update products, pricing, and spatial positions independently. VEA's involvement for content updates is minimal by design.

**Technical maintenance:**
Browser environments evolve — new Chrome updates, new device capabilities, new standards. For projects requiring ongoing technical maintenance, VEA can scope a retainer or engagement model.

**Growth phases:**
Many VEA projects grow over time. Status CO's digital world will expand with each DROP. Novantatre's reel series will extend with each new project. VEA's process is designed so that Phase 2 doesn't start from scratch — it builds on the foundation already established.`,
      next: ["How does pricing work for ongoing support?", "How does the process work?", "Tell me about VEA's projects"],
    },
    {
      keywords: ["luxury", "premium", "high end", "high-end", "prestige", "exclusive",
        "luxury brand", "premium brand", "upscale", "sophistication"],
      reply: `VEA builds for brands and projects that take quality seriously — which often means luxury, but isn't limited to it.

The studio's sensibility: **craft over quantity, atmosphere over decoration, intelligence over noise.**

For luxury brands, this translates practically into:
— Digital presence that communicates value before a single product is shown
— Interfaces that feel considered — where every transition, every typeface choice, every camera angle has been decided, not defaulted to
— Content that treats the product as an artefact — something with provenance, story, and worth — not merchandise
— The absence of visual clutter: luxury communicates through restraint, and VEA designs with restraint

Status CO is the clearest example: every choice — from the void-like 3D environment to the archive positioning — communicates that these objects are worth owning, keeping, and caring about.

Laila takes a different angle on the same quality: sophistication through motion and atmosphere, the feeling of a destination rather than a platform.

If your brand aspires to be experienced as premium — the digital touchpoints need to earn that positioning, not just claim it.`,
      next: ["Tell me about Status CO", "Tell me about Laila", "How does VEA approach brand identity?"],
    },
    {
      keywords: ["i don't know", "not sure", "help me", "confused", "lost", "where to start",
        "overwhelmed", "too much", "simplify", "keep it simple", "summarise", "summarize",
        "tldr", "tl;dr", "brief overview", "just tell me", "quick summary"],
      reply: `Let me make it simple.

**VEA builds three things:**
1. **3D digital worlds** — websites people can walk inside, interact with, and feel
2. **Brand identities** — visual systems designed for space and screen
3. **Cinematic content** — films and reels that tell the story underneath the project

**Five recent projects:**
— Status CO (fashion, full system)
— Laila (NYC dating app, cinematic landing page)
— Novantatre (architecture studio, film reels)
— DAS Pieces (lamp collection, visual world)
— Decentralize Design (spatial studio, full digital presence)

**To start:**
📧 hello@virtuallyeverafter.xyz

What's your project?`,
      next: ["Tell me about the services in more detail", "Show me the projects", "How does pricing work?"],
    }
  ];

  /* ═══════════════════════════════════════════════════════════════
     SCORING ENGINE — UNICODE (TÜRKÇE) DESTEKLİ
  ═══════════════════════════════════════════════════════════════ */
  function tokenise(text) {
    return text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter(t => t.length > 0);
  }

  function scoredMatch(userText) {
    const lower  = userText.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ");
    const tokens = tokenise(userText);

    let best = null;
    let bestScore = 0;

    for (const entry of KB) {
      let score = 0;
      for (const kw of entry.keywords) {
        const kwLower = kw.toLowerCase();
        if (kwLower.includes(" ") && lower.includes(kwLower)) {
          score += kwLower.split(/\s+/).length * 6;
        } else if (tokens.includes(kwLower)) {
          score += 4;
        } else {
          for (const t of tokens) {
            if (t.length > 3) {
              if (kwLower.startsWith(t) || t.startsWith(kwLower)) score += 1;
              if (kwLower.includes(t) || t.includes(kwLower)) score += 0.5;
            }
          }
        }
      }
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    }
    return bestScore >= 3 ? { reply: best.reply, next: best.next } : null;
  }

  function ultimateFallback() {
    return {
      reply: `I want to give you a genuinely useful answer. You can ask me about:\n— VEA's projects\n— Services (Worldbuilding, Identity, Content)\n— Process and pricing\nOr reach the studio directly: 📧 **hello@virtuallyeverafter.xyz**`,
      next: ["What services does VEA offer?", "Show me the projects", "How does VEA work?"],
    };
  }

  /* ═══════════════════════════════════════════════════════════════
     MARKDOWN & HTML HELPERS
  ═══════════════════════════════════════════════════════════════ */
  function mdToHtml(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g,     "<em>$1</em>")
      .replace(/^> (.+)$/gm,     "<blockquote>$1</blockquote>")
      .replace(/↗ ([^\n]+)/g,    '<span class="vea-link">↗ $1</span>')
      .replace(/📧 ([^\n]+)/g,   '<span class="vea-email">📧 $1</span>')
      .replace(/🌐 ([^\n]+)/g,   '<span class="vea-link">🌐 $1</span>')
      .replace(/\n/g,            "<br>");
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g,  "&amp;")
      .replace(/</g,  "&lt;")
      .replace(/>/g,  "&gt;")
      .replace(/"/g,  "&quot;")
      .replace(/'/g,  "&#039;");
  }

  /* ═══════════════════════════════════════════════════════════════
     THEMES & CSS
  ═══════════════════════════════════════════════════════════════ */
  const THEMES = {
    dark: {
      bg:          "#0e0e0e", border:      "rgba(255,255,255,0.08)", text:        "#e8e8e8",
      muted:       "#888", accent:      "#c8b89a", userBubble:  "#1e1e1e", userText:    "#e8e8e8",
      botBubble:   "#111111", botText:     "#d8d8d8", inputBg:     "#0e0e0e", inputBorder: "rgba(255,255,255,0.12)",
      scrollThumb: "rgba(255,255,255,0.1)", qrBg:        "rgba(200,184,154,0.08)", qrBorder:    "rgba(200,184,154,0.2)",
      qrText:      "#c8b89a", qrHoverBg:   "#c8b89a", qrHoverText: "#0e0e0e", shadow:      "0 24px 64px rgba(0,0,0,0.6)",
    },
    light: {
      bg:          "#ffffff", border:      "rgba(0,0,0,0.1)", text:        "#111111",
      muted:       "#888888", accent:      "#111111", userBubble:  "#111111", userText:    "#ffffff",
      botBubble:   "#f0f0f0", botText:     "#111111", inputBg:     "#ffffff", inputBorder: "rgba(0,0,0,0.12)",
      scrollThumb: "rgba(0,0,0,0.1)", qrBg:        "rgba(0,0,0,0.04)", qrBorder:    "rgba(0,0,0,0.15)",
      qrText:      "#111111", qrHoverBg:   "#111111", qrHoverText: "#ffffff", shadow:      "0 16px 48px rgba(0,0,0,0.15)",
    },
  };
  const T = THEMES[CFG.theme] || THEMES.light;

  const CSS = `
    @keyframes veaBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    #vea-fab { position: fixed; bottom: 8px; right: 8px; z-index: 99999; width: 54px; height: 54px; border-radius: 50%; background: rgba(255,255,255,0.5); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(0,0,0,0.9); cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: ${T.shadow}; transition: transform 0.2s ease, box-shadow 0.2s ease; outline: none; color: #111111; }
    #vea-fab:hover { transform: scale(1.06); }
    #vea-fab:active { transform: scale(0.96); }
    #vea-window { position: fixed; bottom: 70px; right: 8px; z-index: 99998; width: 390px; max-width: calc(100vw - 22px); height: 580px; max-height: calc(100dvh - 80px); background: rgba(255,255,255,0.62); backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); border: 1px solid #111111; border-radius: 16px; box-shadow: ${T.shadow}; display: flex; flex-direction: column; overflow: hidden; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; transform-origin: bottom right; transition: transform 0.3s cubic-bezier(0.34, 1.5, 0.64, 1), opacity 0.2s ease; }
    #vea-window.vea-closed { transform: scale(0.85) translateY(16px); opacity: 0; pointer-events: none; }
    #vea-close-btn { position: absolute; top: 10px; right: 10px; z-index: 20; width: 30px; height: 30px; border-radius: 50%; background: rgba(255,255,255,0.75); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1px solid rgba(0,0,0,0.12); cursor: pointer; display: flex; align-items: center; justify-content: center; color: ${T.text}; font-size: 14px; transition: background 0.15s; }
    #vea-close-btn:hover { background: rgba(0,0,0,0.08); }
    #vea-msgs { flex: 1; overflow-y: auto; padding: 50px 16px 12px; display: flex; flex-direction: column; gap: 12px; scroll-behavior: smooth; background: transparent; }
    #vea-msgs::-webkit-scrollbar { width: 4px; }
    #vea-msgs::-webkit-scrollbar-track { background: transparent; }
    #vea-msgs::-webkit-scrollbar-thumb { background: ${T.scrollThumb}; border-radius: 2px; }
    .vea-row { display: flex; gap: 10px; max-width: 92%; animation: veaIn 0.22s ease both; }
    @keyframes veaIn { from { opacity: 0; transform: translateY(8px); } to   { opacity: 1; transform: translateY(0); } }
    .vea-row.vea-bot  { align-self: flex-start; }
    .vea-row.vea-user { align-self: flex-end; flex-direction: row-reverse; }
    .vea-avatar { width: 28px; height: 28px; border-radius: 50%; background: rgba(200,184,154,0.1); border: 1px solid rgba(200,184,154,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
    .vea-avatar svg { width: 13px; height: 13px; fill: ${T.accent}; }
    .vea-avatar-user { background: rgba(255,255,255,0.06); border-color: ${T.border}; }
    .vea-avatar-user svg { fill: ${T.muted}; }
    .vea-bubble { padding: 10px 14px; border-radius: 12px; font-size: 13.5px; line-height: 1.65; max-width: 100%; word-wrap: break-word; }
    .vea-bot .vea-bubble { background: ${T.botBubble}; color: ${T.botText}; border: 1px solid ${T.border}; border-bottom-left-radius: 3px; }
    .vea-bot .vea-bubble strong { color: ${T.text}; }
    .vea-bot .vea-bubble em { color: ${T.muted}; }
    .vea-bot .vea-bubble blockquote { margin: 8px 0 0; padding: 6px 10px; border-left: 2px solid ${T.accent}; color: ${T.muted}; font-style: italic; font-size: 12.5px; }
    .vea-bot .vea-bubble .vea-link, .vea-bot .vea-bubble .vea-email { color: ${T.accent}; font-size: 12px; letter-spacing: 0.02em; }
    .vea-user .vea-bubble { background: ${T.userBubble}; color: ${T.userText}; border: 1px solid rgba(255,255,255,0.06); border-bottom-right-radius: 3px; }
    .vea-typing { display: flex; gap: 5px; align-items: center; padding: 12px 14px; }
    .vea-typing span { width: 5px; height: 5px; border-radius: 50%; background: ${T.accent}; opacity: 0.5; animation: veaBounce 1.1s infinite ease-in-out; }
    .vea-typing span:nth-child(2) { animation-delay: 0.18s; }
    .vea-typing span:nth-child(3) { animation-delay: 0.36s; }
    @keyframes veaBounce { 0%, 60%, 100% { transform: translateY(0); opacity: 0.5; } 30% { transform: translateY(-5px); opacity: 1; } }
    #vea-qr { padding: 8px 16px 4px; display: flex; flex-wrap: wrap; gap: 6px; flex-shrink: 0; }
    .vea-qr-btn { background: ${T.qrBg}; border: 1px solid ${T.qrBorder}; color: ${T.qrText}; border-radius: 20px; padding: 5px 12px; font-size: 11.5px; cursor: pointer; transition: background 0.15s, color 0.15s, border-color 0.15s, transform 0.1s; white-space: nowrap; font-family: inherit; letter-spacing: 0.01em; }
    .vea-qr-btn:hover { background: ${T.qrHoverBg}; color: ${T.qrHoverText}; border-color: transparent; transform: translateY(-1px); }
    #vea-input-area { padding: 10px 14px 14px; border-top: 1px solid ${T.border}; display: flex; gap: 8px; align-items: flex-end; flex-shrink: 0; background: ${T.bg}; }
    #vea-input { flex: 1; background: ${T.inputBg}; border: 1px solid ${T.inputBorder}; border-radius: 10px; padding: 9px 13px; font-size: 13.5px; color: ${T.text}; outline: none; resize: none; font-family: inherit; line-height: 1.45; max-height: 80px; overflow-y: auto; transition: border-color 0.2s; }
    #vea-input::placeholder { color: ${T.muted}; }
    #vea-input:focus { border-color: rgba(0,0,0,0.35); }
    #vea-input:disabled { opacity: 0.5; cursor: not-allowed; }
    #vea-send { width: 36px; height: 36px; border-radius: 9px; background: ${T.accent}; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: opacity 0.15s, transform 0.15s; }
    #vea-send:hover  { opacity: 0.85; }
    #vea-send:active { transform: scale(0.93); }
    #vea-send:disabled { opacity: 0.4; cursor: not-allowed; }
    #vea-send svg    { fill: ${T.bg}; width: 15px; height: 15px; }
    @media (max-width: 440px) {
      #vea-window { position: fixed; right: 0; bottom: 0; top: 0; left: 0; width: 100%; max-width: 100%; height: 100%; max-height: 100%; border-radius: 0; border: 1px solid #111111; transition: none; }
      #vea-fab { bottom: 8px; right: 8px; width: 44px; height: 44px; }
      #vea-input { font-size: 16px; }
    }
  `;

  const ICON_VEA  = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L22 12L12 22L2 12L12 2Z"/></svg>`;
  const ICON_SEND = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;
  const ICON_USER = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>`;
  const ICON_CHAT = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M3 2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9.5L6 22v-4H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="7.5" cy="11" r="1.3" fill="currentColor"/><circle cx="12" cy="11" r="1.3" fill="currentColor"/><circle cx="16.5" cy="11" r="1.3" fill="currentColor"/></svg>`;

  /* ═══════════════════════════════════════════════════════════════
     BUILD DOM & UI HELPERS
  ═══════════════════════════════════════════════════════════════ */
  function buildWidget() {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);

    const fab = document.createElement("button");
    fab.id = "vea-fab";
    fab.setAttribute("aria-label", "Chat with Virtually Ever After");
    fab.innerHTML = `<span id="vea-fab-icon">${ICON_CHAT}</span>`;
    fab.querySelector("#vea-fab-icon svg").style.cssText = `width:22px;height:22px;color:#111111`;

    const win = document.createElement("div");
    win.id = "vea-window";
    win.setAttribute("role", "dialog");
    win.classList.add("vea-closed");
    win.innerHTML = `
      <button id="vea-close-btn" aria-label="Close chat">✕</button>
      <div id="vea-msgs" role="log" aria-live="polite"></div>
      <div id="vea-qr"></div>
      <div id="vea-input-area">
        <textarea id="vea-input" placeholder="Ask anything about VEA…" rows="1"></textarea>
        <button id="vea-send" aria-label="Send">${ICON_SEND}</button>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(win);

    return {
      fab, win,
      closeBtn: win.querySelector("#vea-close-btn"),
      msgs:     win.querySelector("#vea-msgs"),
      qr:       win.querySelector("#vea-qr"),
      input:    win.querySelector("#vea-input"),
      send:     win.querySelector("#vea-send"),
    };
  }

  function appendMsg(container, role, html) {
    const isBot = role === "bot";
    const row   = document.createElement("div");
    row.className = `vea-row vea-${role}`;

    const avatar = document.createElement("div");
    avatar.className = `vea-avatar ${isBot ? "" : "vea-avatar-user"}`;

    if (isBot) {
      const img = document.createElement("img");
      img.src   = LOGO_SRC;
      img.style.cssText = "width:18px;height:18px;border-radius:3px;object-fit:contain;";
      img.onerror = () => { avatar.innerHTML = ICON_VEA; };
      avatar.appendChild(img);
    } else {
      avatar.innerHTML = ICON_USER;
    }

    const bubble = document.createElement("div");
    bubble.className = "vea-bubble";
    bubble.innerHTML = html;

    if (isBot) { row.appendChild(avatar); row.appendChild(bubble); }
    else { row.appendChild(bubble); row.appendChild(avatar); }

    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
    return row;
  }

  function showTyping(container) {
    const row = document.createElement("div");
    row.className = "vea-row vea-bot";
    const avatar = document.createElement("div");
    avatar.className = "vea-avatar";
    const img = document.createElement("img");
    img.src = LOGO_SRC;
    img.style.cssText = "width:18px;height:18px;border-radius:3px;object-fit:contain;";
    img.onerror = () => { avatar.innerHTML = ICON_VEA; };
    avatar.appendChild(img);
    const bubble = document.createElement("div");
    bubble.className = "vea-bubble";
    bubble.innerHTML = `<div class="vea-typing"><span></span><span></span><span></span></div>`;
    row.appendChild(avatar); row.appendChild(bubble);
    container.appendChild(row);
    container.scrollTop = container.scrollHeight;
    return row;
  }

  function setQuickReplies(qrEl, replies, handler) {
    qrEl.innerHTML = "";
    if (!replies || replies.length === 0) return;
    for (const r of replies) {
      if (!r) continue;
      const btn = document.createElement("button");
      btn.className = "vea-qr-btn";
      btn.textContent = r;
      btn.addEventListener("click", () => handler(r));
      qrEl.appendChild(btn);
    }
  }

  function setInputLocked(ui, locked) {
    ui.input.disabled = locked;
    ui.send.disabled  = locked;
  }

  /* ═══════════════════════════════════════════════════════════════
     INIT & EVENT LISTENERS
  ═══════════════════════════════════════════════════════════════ */
  function init() {
    const ui = buildWidget();
    let isOpen = false;
    let greeted = false;

    function open() {
      isOpen = true;
      ui.win.classList.remove("vea-closed");
      if (window.innerWidth <= 440) ui.fab.style.display = "none";
      else ui.fab.querySelector("#vea-fab-icon").innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" style="fill:#111111"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

      if (!greeted) {
        greeted = true;
        setTimeout(() => {
          const t = showTyping(ui.msgs);
          setTimeout(() => {
            t.remove();
            appendMsg(ui.msgs, "bot", mdToHtml(CFG.greeting));
            setQuickReplies(ui.qr, ["What does VEA do?", "Show me the projects", "How do we work together?"], window.handleSendExport);
          }, 600);
        }, 150);
      } else ui.msgs.scrollTop = ui.msgs.scrollHeight;
    }

    function close() {
      isOpen = false;
      ui.win.classList.add("vea-closed");
      ui.fab.style.display = "";
      ui.fab.querySelector("#vea-fab-icon").innerHTML = ICON_CHAT;
    }

    async function handleSend(text) {
      text = (text || ui.input.value).trim();
      if (!text) return;

      ui.qr.innerHTML = "";
      appendMsg(ui.msgs, "user", escapeHtml(text));
      ui.input.value = "";
      ui.input.style.height = "auto";
      ui.input.blur();

      setInputLocked(ui, true);
      const typing = showTyping(ui.msgs);

      if (CFG.proxyUrl) {
        await askVeraStream(text, typing, ui.msgs, ui.qr);
      } else {
        // Fallback for when API is turned off
        setTimeout(() => {
          typing.remove();
          const result = scoredMatch(text) || ultimateFallback();
          appendMsg(ui.msgs, "bot", mdToHtml(result.reply));
          setQuickReplies(ui.qr, result.next, window.handleSendExport);
        }, 500);
      }

      setInputLocked(ui, false);
      ui.input.focus();
    }

    window.handleSendExport = handleSend; // Global erişim (quick reply butonu için)

    ui.fab.addEventListener("click", () => isOpen ? close() : open());
    ui.closeBtn.addEventListener("click", close);
    ui.send.addEventListener("click", () => handleSend());
    ui.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
    });
    ui.input.addEventListener("input", () => {
      ui.input.style.height = "auto";
      ui.input.style.height = Math.min(ui.input.scrollHeight, 80) + "px";
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen) close(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

})();
