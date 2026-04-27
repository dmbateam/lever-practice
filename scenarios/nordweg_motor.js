// ============================================================
// SCENARIO: Nordweg Motor
// 76-year-old Swedish car manufacturer losing the EV transition.
// Crisis type: market_share (premium EV share 8% → 4.1% in 28 months)
// Three-way ambiguity: WHO (fleet compounds), HOW (gigafactory unit cost),
// and WHAT (software rebuild) each lead to a coherent but different
// 12-month outcome. WHY (price war) is the structural loser.
// ============================================================

window.SCENARIOS = window.SCENARIOS || {};

window.SCENARIOS['nordweg_motor'] = {

  meta: {
    slug: 'nordweg_motor',
    display_name: 'Nordweg Motor',
    industry: 'Automotive — incumbent EV transition',
    difficulty: 'hard',
    estimated_minutes: 60,
    tagline: 'A profitable 76-year-old carmaker losing the future to better-funded startups.'
  },

  company: {
    name: 'Nordweg Motor',
    subtitle: 'Premium automotive · Gothenburg, Sweden · Public (NDWG.ST) · Founded 1947 · 34,000 employees',
    currency_symbol: '€',
    baseline_mrr: 340000000,
    baseline_mrr_label: '€340M',
    hero_image: '/images/nordweg_motor.png',
    hero_caption: 'A Nordweg Motor vehicle — seventy years of Scandinavian engineering, now mid-transition from ICE to electric.',
    founding_story: "<strong>Nordweg Motor</strong> was founded in 1947 in Gothenburg by a former aircraft engineer who wanted to build the safest family car in Europe. Seven decades later, Nordweg sells 420,000 vehicles a year, employs 34,000 people, generates €18.4B in annual revenue at a 6.2% operating margin, and is synonymous with reliability and Scandinavian design. The EV transition is well underway: 22% of 2025 sales are electric, with a board commitment to 80% electric by 2030. The ICE business is still profitable and funding the transition. But the European premium EV market share chart tells a different story — one the board has been refusing to look at."
  },

  characters: [
    {
      initials: 'HB',
      name: 'Henrik Björn',
      role: 'CEO',
      description: "30-year Nordweg veteran, former CFO. Believes Nordweg's reputation and pricing power will hold if they defend share aggressively. Reads the financial press every morning at 5am.",
      crisis_title: 'Henrik (CEO)',
      crisis_quote: "Tesla and BYD are buying market share with subsidized prices. We need to match them — cut EV prices by 15% across the lineup, even at zero margin if we have to. We can't let the perception take hold that Nordweg can't compete on EVs. Defend the position now, optimize later.",
      avatar_color_key: 'why',
      crisis_border_key: 'why',
      alignment_id: 'henrik',
      alignment_label: 'Henrik (CEO)'
    },
    {
      initials: 'CW',
      name: 'Clara Weiss',
      role: 'Head of Product',
      description: "Joined from BMW in 2023. Drives the next-generation EV platform. Spends time in California and Shenzhen studying competitors. Frustrated by the conservatism of Nordweg's design language.",
      crisis_title: 'Clara (Product)',
      crisis_quote: "Consumer research we ran last month shows 'in-car software experience' has moved from purchase driver #9 to #2 in four years; voice AI and OTA updates now sit in the top six. Our cars drive beautifully and run forever, but the software stack feels like 2018. A software rebuild takes 18-24 months and heavy capex — but I don't see another way the premium retail segment comes back.",
      avatar_color_key: 'what',
      crisis_border_key: 'what',
      alignment_id: 'clara',
      alignment_label: 'Clara (Product)'
    },
    {
      initials: 'RM',
      name: 'Raj Mehta',
      role: 'Head of Manufacturing',
      description: "20 years in automotive supply chain, last 6 at Nordweg. Runs three factories. Believes Nordweg's manufacturing legacy is the deepest problem — and the best opportunity if rebuilt right.",
      crisis_title: 'Raj (Manufacturing)',
      crisis_quote: "A clean-sheet gigafactory builds EVs at roughly €18k per unit. On our mixed ICE/EV lines we're sitting at €27k. A €4B factory pays itself back inside 14 months once it ramps — that's three times the long-term cash return of any software rebuild by 2029. Tesla figured this out a decade ago. We can't compete on anything — fleet, retail, pricing — until the cost base is fixed.",
      avatar_color_key: 'how',
      crisis_border_key: 'how',
      alignment_id: 'raj',
      alignment_label: 'Raj (Manufacturing)'
    }
  ],

  bmi_nodes: [
    {
      dimension: 'what',
      icon: 'V',
      position: 'top',
      title: 'Premium electric vehicles for European families',
      description: 'Sedans and SUVs at €45-85K. Famous for safety, reliability, understated Scandinavian design.'
    },
    {
      dimension: 'why',
      icon: '$',
      position: 'bottom-left',
      title: 'Vehicle sale + financing + service contracts',
      description: 'One-time vehicle sales (€45-85K), 4-year service contracts, manufacturer financing through Nordweg Finance.'
    },
    {
      dimension: 'how',
      icon: 'H',
      position: 'bottom-right',
      title: 'Owned dealer network + 3 European factories',
      description: '1,200 dealers in 38 countries. Three plants (Gothenburg, Ghent, Bratislava). Mixed ICE/EV manufacturing lines.'
    },
    {
      dimension: 'who',
      icon: 'W',
      position: 'center',
      title: 'European premium retail buyers, families 35-60',
      description: ''
    }
  ],

  ecosystem: {
    viewBox: '0 0 700 360',
    nodes: [
      { id: 'retail',   label_lines: ['Retail', 'Buyers'],         emoji: '&#128100;', cx: 100, cy: 120, r: 36, stroke: 1.8 },
      { id: 'nordweg',  label_lines: ['Nordweg'],                   subtitle: '3 Factories · 34K Staff', emoji: '&#127981;', cx: 350, cy: 180, r: 46, stroke: 2.2 },
      { id: 'dealers',  label_lines: ['1,200', 'Dealers'],          emoji: '&#127978;', cx: 600, cy: 120, r: 36, stroke: 1.8 },
      { id: 'fleet',    label_lines: ['Fleet/B2B', 'Buyers'],       emoji: '&#128666;', cx: 600, cy: 280, r: 32, stroke: 1.5 },
      { id: 'service',  label_lines: ['Service', 'Network'],       emoji: '&#128295;', cx: 100, cy: 280, r: 32, stroke: 1.5 }
    ],
    edges: [
      { type: 'money', label: '€45-85K/CAR',     x1: 138, y1: 112, x2: 304, y2: 168, text_x: 210, text_y: 128 },
      { type: 'goods', label: 'EV/ICE',          x1: 304, y1: 180, x2: 138, y2: 128, text_x: 210, text_y: 168 },
      { type: 'goods', label: 'WHOLESALE',       x1: 396, y1: 168, x2: 562, y2: 112, text_x: 478, text_y: 128 },
      { type: 'money', label: 'MARGINS',         x1: 562, y1: 128, x2: 396, y2: 180, text_x: 478, text_y: 168 },
      { type: 'data',  label: 'BULK ORDERS',     x1: 568, y1: 272, x2: 392, y2: 198, text_x: 500, text_y: 248 },
      { type: 'goods', label: 'WARRANTY+REPAIR', x1: 134, y1: 272, x2: 310, y2: 198, text_x: 200, text_y: 248 }
    ],
    glossary: [
      { term: 'Mixed-line manufacturing', description: "Nordweg's three plants produce both ICE and EV vehicles on shared production lines, reusing about 40% of components and tooling. This was capital-efficient during the transition but adds about 20% cost-per-vehicle vs a clean-sheet EV factory like Tesla's Gigafactory or BYD's vertically-integrated lines." },
      { term: 'Premium retail vs fleet', description: "Nordweg's go-to-market is built for individual European families buying a €60K family car at a dealership. Fleet (corporate, taxi, car-share, government) is sold by a separate 12-person team treating it as a side channel — even though one fleet sale moves 50-500 cars and fleet repurchase rates are dramatically higher." }
    ]
  },

  health_metrics: [
    { value: '€18.4B',  label: 'Annual revenue (2024)' },
    { value: '6.2%',    label: 'Operating margin' },
    { value: '420K',    label: 'Vehicles sold/year' },
    { value: '22%',     label: 'EV share of sales' },
    { value: '4.1%',    label: 'European premium EV share (down from 8%)' },
    { value: '€340M',   label: 'Monthly EV business revenue' }
  ],

  crisis: {
    crisis_type: 'market_share',
    metric_label: 'European premium EV market share',
    before: '8.0%',
    after: '4.1%',
    impact_html: 'Over 28 months, Nordweg\'s share of the European premium EV market fell from 8% to 4.1% — while the segment itself grew 42%. Nordweg is selling more EVs in absolute terms, but losing the market that will define the next decade.<br><strong style="color: var(--color-danger);">The ICE business is still cash-positive. The EV business is losing position in the segment that will become 100% of the company within 7 years.</strong>',
    runway_line: "The board is split. The next quarterly call has analysts expecting a clear answer on the EV strategy.",
    recap_crisis: "Premium EV market share fell from 8% to 4.1% in 28 months, while the segment grew 42%. ICE profits still fund the transition, but Nordweg is being out-positioned by Tesla, BYD, and three Chinese newcomers in the segment that will be the entire industry by 2032.",
    recap_hidden_clue: "Three tables point in different directions and each has a legitimate read. Fleet is already 38% of EV sales with 74% repurchase and compounds 38% YoY while retail shrinks 11% YoY. A clean-sheet gigafactory builds EVs at €18k vs €27k on mixed lines. A ground-up software stack costs €600M CapEx plus €120M/yr OpEx — BYD licenses equivalent functionality at €2,100 per vehicle. Each theory fits one table and misreads the others."
  },

  data_table: [
    { fact: 'Premium EV market share (28 mo)',                  numbers: '8.0% → 4.1% (segment grew 42% in same period)',                                                       points_toward: 'ambiguous', points_label: 'The crisis metric' },
    { fact: 'Unit cost by manufacturing approach',              numbers: 'Gigafactory / clean-sheet: ~€18K per EV · Nordweg mixed ICE/EV lines: ~€27K per EV',                   points_toward: 'how',  points_label: 'Manufacturing cost gap (HOW)' },
    { fact: 'Gigafactory payback math',                         numbers: 'A €4B clean-sheet factory breaks even in ~14 months once ramped and returns ~3× the 2029 cash of a software rebuild', points_toward: 'how',  points_label: 'Capital efficiency (HOW)' },
    { fact: 'Customer segment of new Nordweg EV sales',         numbers: 'Retail: 62% · Fleet/corporate: 38% (and rising)',                                                     points_toward: 'who',  points_label: 'Fleet is a larger slice than most assume (WHO)' },
    { fact: 'Fleet vs retail trajectory',                        numbers: 'Fleet orders: 74% repurchase, compounding 38% YoY · Retail: -11% YoY. On trend, fleet reaches 62% of EV revenue by 2027.', points_toward: 'who',  points_label: 'Fleet is the compounding segment (WHO)' },
    { fact: 'In-car software & infotainment ratings',           numbers: 'Nordweg 6.4/10 · Tesla 8.9 · BYD 8.1 · NIO 8.6',                                                       points_toward: 'what', points_label: 'Software gap vs segment leaders (WHAT)' },
    { fact: 'Purchase-driver shift 2020 → 2024 (premium EV)',  numbers: '"Software experience" #9 → #2 · "Voice AI" new → #5 · "OTA updates" new → #6',                         points_toward: 'what', points_label: 'Purchase driver rankings have moved (WHAT)' },
    { fact: 'Fleet buyer survey (CATL 2024)',                  numbers: '81% of 2028 fleet buyers list OTA + in-car AI among their top-3 purchase criteria',                    points_toward: 'what', points_label: 'Fleet scorecards may follow (WHAT)' },
    { fact: 'Software stack economics',                         numbers: 'In-house: €600M CapEx + €120M/yr OpEx · BYD licensing: €2,100/vehicle. In-house adds cost to every unit in years 1-2.', points_toward: 'why',  points_label: 'In-house software burdens pricing (WHY)' },
    { fact: 'Average EV transaction price (Europe, 2024)',      numbers: 'Tesla €52K · BYD €38K · Nordweg €61K · NIO €56K',                                                     points_toward: 'why',  points_label: 'Price gap vs BYD (WHY)' }
  ],

  case_data_viz: [
    {
      type: 'tiles',
      title: 'Market position',
      sub: '28-month window',
      tiles: [
        { label: 'Premium EV share', value: '4.1%',  delta: '−3.9 pts vs 8.0%', delta_dir: 'down', alert: true },
        { label: 'Segment size',     value: '+42%',  delta: 'same window',      delta_dir: 'up' },
        { label: 'EV share of sales',value: '22%',   delta: 'up from 8% (2022)', delta_dir: 'up' },
        { label: 'Monthly EV revenue',value: '€340M',delta: 'volume up, share down' }
      ]
    },
    {
      type: 'bars',
      title: 'Unit economics · € per EV',
      sub: 'manufacturing cost',
      bars: [
        { label: 'Nordweg mixed lines',     value: 27000, display: '€27K', color: 'warn', bar_pct: 90 },
        { label: 'Clean-sheet gigafactory', value: 18000, display: '€18K',                 bar_pct: 60 }
      ],
      caption: '<strong>~33% per-vehicle penalty</strong> vs clean-sheet competitors. A <strong>€4B</strong> factory pays back in <strong>~14 months</strong> once ramped, returning <strong>~3×</strong> the 2029 cash of a software rebuild.'
    },
    {
      type: 'bars',
      title: 'Average EV transaction price · Europe 2024',
      sub: 'vs competitors',
      bars: [
        { label: 'Nordweg', value: 61, display: '€61K', color: 'accent' },
        { label: 'NIO',     value: 56, display: '€56K', color: 'muted' },
        { label: 'Tesla',   value: 52, display: '€52K', color: 'muted' },
        { label: 'BYD',     value: 38, display: '€38K', color: 'muted' }
      ],
      caption: 'Nordweg is <strong>+17%</strong> vs Tesla and <strong>+60%</strong> vs BYD. In-house software adds <strong>€600M CapEx + €120M/yr OpEx</strong>; BYD licenses equivalent functionality at <strong>€2,100/vehicle</strong>.'
    },
    {
      type: 'split_bar',
      title: 'Customer mix · new Nordweg EV sales',
      sub: 'retail vs fleet',
      segments: [
        { label: 'Retail', percent: 62, style: 'light' },
        { label: 'Fleet',  percent: 38, style: 'dark'  }
      ]
    },
    {
      type: 'bars',
      title: 'Year-over-year growth · by segment',
      bars: [
        { label: 'Fleet orders YoY',  value: 38, display: '+38%', color: 'good', bar_pct: 76 },
        { label: 'Retail orders YoY', value: 11, display: '−11%', color: 'warn', bar_pct: 22 }
      ],
      caption: 'Fleet buyers repurchase at <strong>74%</strong>. On current trend, fleet reaches <strong>62% of EV revenue by 2027</strong> — inverting today\'s mix.'
    },
    {
      type: 'bars',
      title: 'In-car software & infotainment · rating /10',
      sub: 'premium EV segment',
      max: 10,
      bars: [
        { label: 'Tesla',   value: 8.9, display: '8.9', color: 'muted' },
        { label: 'NIO',     value: 8.6, display: '8.6', color: 'muted' },
        { label: 'BYD',     value: 8.1, display: '8.1', color: 'muted' },
        { label: 'Nordweg', value: 6.4, display: '6.4', color: 'warn'  }
      ],
      caption: 'Purchase-driver "software experience" moved <strong>#9 → #2</strong> (2020 → 2024); voice AI and OTA are new top-6 entries. <strong>81%</strong> of 2028 fleet buyers list OTA + in-car AI among their top-3 criteria.'
    }
  ],

  diagnosis_options: [
    { dimension: 'who',  title: 'Wrong target customer',         description: 'Fleet already buys 38% of Nordweg EVs with 74% repurchase and compounds 38% YoY. On trend, fleet reaches 62% of revenue by 2027. Reposition the business around fleet/B2B — compound the segment where Nordweg already wins.' },
    { dimension: 'what', title: 'Product is behind on software',  description: "Purchase-driver rankings put software experience, voice AI, and OTA updates in the top six. Nordweg's infotainment scores 6.4/10 against 8.1-8.9 for segment leaders. Rebuilding the stack takes 18+ months but matches where the segment is heading." },
    { dimension: 'how',  title: 'Manufacturing cost base is wrong', description: "Mixed ICE/EV lines build EVs at €27k vs €18k for clean-sheet competitors. A gigafactory breaks even in ~14 months once ramped and returns 3× the 2029 cash of a software rebuild. Fix the cost base first; every other lever gets easier." },
    { dimension: 'why',  title: 'Pricing is too high',            description: 'Nordweg EVs cost 17% more than Tesla and 60% more than BYD. The premium that worked for ICE doesn\'t translate to EVs. Aggressive price cuts are needed to defend the position before the perception of irrelevance sets in.' }
  ],

  levers: {
    who: [
      {
        id: 'fleet_pivot',
        title: 'Pivot the EV business toward fleet/B2B',
        effectiveness: 3,
        desc: "Build a dedicated fleet division of 200+. Sell directly to corporates, taxi operators, car-share companies, and governments. Reposition Nordweg's incumbent strengths — service network, warranty, reliability data — as fleet purchase drivers.",
        lever_narrative: "The fleet pivot landed within 12 weeks — three large contracts (a municipal taxi order, a corporate fleet, a car-share operator) added more EV volume in one quarter than 6 months of retail. Fleet repurchase held at 74% and the segment kept compounding at ~38% YoY. Some fleet RFPs started scoring OTA and voice AI, and Nordweg lost a handful — but the incumbent strengths (service, warranty, uptime guarantees, TCO economics) carried most tenders. By month 12 fleet was 58% of EV revenue and stable; retail continued to drift but mattered less to the P&L. A durable segment win, at the cost of the consumer premium-EV story."
      },
      {
        id: 'government_focus',
        title: 'Win government and municipal fleet tenders',
        effectiveness: 2,
        desc: 'Build a tender team to compete in EU government and municipal vehicle procurements (police, postal services, public works). These tenders explicitly value local manufacturing and long-term service.',
        lever_narrative: 'Government tenders are slow but high-quality. Within 12 weeks Nordweg won 4 multi-year tenders with combined volume of 3,800 vehicles. Margins were thinner than retail premium pricing, but revenue stability and political tailwinds for European-built EVs made it strategically valuable. The team building this capability had to grow from 4 to 18.'
      },
      {
        id: 'taxi_carshare',
        title: 'Build a dedicated taxi & car-share division',
        effectiveness: 2,
        desc: 'Spec EVs specifically for taxi and car-share use: simpler interiors, hardened batteries, higher service intervals, total-cost-of-ownership pricing, financing built around the use case.',
        lever_narrative: "The taxi/car-share play attracted three large car-share operators in major European cities. The TCO sales pitch worked for fleet operators who care about per-kilometer cost rather than transaction price. Some marketing folks worried that 'taxi car' brand association would hurt the premium retail brand — but in practice the segments rarely overlap."
      },
      {
        id: 'channel_split',
        title: 'Split into Retail Nordweg and Fleet Nordweg',
        effectiveness: 1,
        desc: 'Create two distinct business units with separate P&Ls, sales teams, marketing, and product roadmaps. Let each compete in its own segment without constraints from the other.',
        lever_narrative: 'The channel split clarified ownership and accountability, but the reorganization consumed 8 months of management bandwidth. The fleet unit grew faster than retail unit, but coordination overhead between the two divisions created friction on shared engineering decisions.'
      },
      {
        id: 'b2b_software',
        title: 'Sell fleet management software alongside vehicles',
        effectiveness: 2,
        desc: 'Develop a fleet management platform (telematics, charging optimization, driver behavior analytics) that ships with every fleet vehicle. Move from "vehicle vendor" to "mobility partner."',
        lever_narrative: "Fleet software gave Nordweg a recurring revenue line on top of vehicle sales — about €40 per vehicle per month. Adoption among fleet customers was strong because the value-add was real. Building the platform took 9 months and pulled 35 engineers off vehicle software, slightly delaying the next infotainment release."
      }
    ],
    what: [
      {
        id: 'reinvent_software',
        title: 'Build a software-first vehicle platform',
        effectiveness: 3,
        desc: 'Hire 600 software engineers. Build a modern in-car OS with voice AI, OTA updates, a developer SDK, and a 4-year software roadmap decoupled from hardware cycles. Treat software as the product, hardware as the substrate.',
        lever_narrative: "The software rebuild was the biggest organisational bet in Nordweg history. 18 months later the new OS shipped across the lineup with OTA updates, a voice AI that rated 8.4/10 (up from 6.4), and a published 4-year feature roadmap. Critically: the company became a 'software company that makes cars', which re-rated the brand for buyers entering the segment in 2027-2029 — including fleet buyers, who by then were explicitly scoring software in procurement. Market share recovered to 7.2% by month 15 and is still climbing. The 600-person software org became a durable moat because the product could now improve between hardware refreshes — compounding with every OTA release."
      },
      {
        id: 'next_gen_ev',
        title: 'Accelerate next-generation EV platform',
        effectiveness: 3,
        desc: 'Pull the next-gen EV platform forward by 18 months. Bigger batteries, faster charging, clean-sheet interior with premium materials, tight integration with the new software stack. Make the next Nordweg EV define the segment.',
        lever_narrative: "Pulling the platform forward cost €600M in unplanned capex and strained engineering hard. The new flagship launched 13 months later to the best reviews Nordweg had received in a decade — 'the first European answer to Tesla that actually feels premium'. Combined with the software rebuild, the segment started taking Nordweg seriously again. Tesla and BYD launched competing models, but Nordweg's combination of build quality + modern software proved defensible: share recovered to 6.8% by month 12 and kept climbing."
      },
      {
        id: 'autonomy_partnership',
        title: 'License autonomous driving stack from a partner',
        effectiveness: 1,
        desc: 'Stop trying to build autonomous driving in-house. License from Mobileye, Waymo, or another specialist. Ship Level 3 autonomy in next year\'s premium models.',
        lever_narrative: "Licensing autonomy got Nordweg to L3 functionality in 11 months instead of an estimated 4-6 years in-house. The new feature set generated press, but consumer trust in autonomous features was still low and few buyers chose Nordweg specifically for autonomy. The license fee was a long-term margin cost."
      },
      {
        id: 'design_overhaul',
        title: 'Hire a star designer and reinvent the look',
        effectiveness: 1,
        desc: "Bring in a high-profile designer from Italy or Korea to overhaul Nordweg's design language entirely. Make the next vehicle visually exciting in a way the brand has never been.",
        lever_narrative: "The new design language was polarizing. Press loved it; some loyal Nordweg customers felt the brand had abandoned them. New customer acquisition ticked up slightly, but existing customer churn ticked up more. The brand felt 'lost' for two years before settling."
      },
      {
        id: 'battery_tech',
        title: 'Invest €1.5B in battery tech leadership',
        effectiveness: 2,
        desc: 'Build a battery R&D center and pursue solid-state battery technology. Aim to leapfrog the segment in range and charging speed within 4 years.',
        lever_narrative: 'The battery program is a long-term bet. After 12 weeks, Nordweg has the team and a roadmap, but no shipped breakthrough. The €1.5B commitment moved the stock down 8% on announcement. If solid-state battery work pays off in 4 years, this becomes a defining decision; if not, it\'s €1.5B into research while the market moves.'
      }
    ],
    how: [
      {
        id: 'gigafactory',
        title: 'Build a clean-sheet EV gigafactory',
        effectiveness: 3,
        desc: "Commit €4B to a clean-sheet, EV-only gigafactory in Europe modeled on Tesla's Berlin and BYD's vertical integration. Aim for 350,000 EVs/year capacity at ~€18k unit cost vs the current €27k.",
        lever_narrative: "The gigafactory is the biggest single capital commitment in Nordweg history. It breaks ground in month 3 and starts ramping in month 14 — earlier than feared because the site team pulled an aggressive timeline. Once units start shipping at €18k per EV, margin-per-unit jumps and Nordweg can price competitively against BYD without bleeding. By month 12 the first partial-volume runs are already recovering capex on a unit-economics basis. The segment Nordweg wins with this is price-sensitive mid-premium — not the software-defined top of the market — but the cost base is durable and every other lever (pricing, fleet, even software licensing) gets cheaper to pull once the factory is in place."
      },
      {
        id: 'platform_consolidation',
        title: 'Consolidate to a single EV platform across all models',
        effectiveness: 2,
        desc: 'Drop the mixed ICE/EV architecture. All future EVs share one skateboard platform with 80%+ part commonality. Cuts complexity and per-vehicle cost.',
        lever_narrative: "Platform consolidation simplified the engineering roadmap and saved an estimated €280/vehicle at scale. But it required scrapping €180M of ICE platform tooling, and the production switchover caused a one-quarter dip in EV deliveries. The board approved it, but reluctantly."
      },
      {
        id: 'china_partnership',
        title: 'Partner with a Chinese supplier for cost structure',
        effectiveness: 2,
        desc: "Form a manufacturing JV with CATL or BYD for batteries and key EV components. Use their cost structure and supply chain. Trade some margin for global competitiveness.",
        lever_narrative: 'The Chinese partnership got Nordweg battery costs down by ~22% and shortened the supply chain. Politically sensitive in Europe — some customers and regulators reacted negatively. But the cost savings flowed through to vehicle pricing and made next year\'s lineup more competitive.'
      },
      {
        id: 'shut_factory',
        title: 'Shut down the oldest ICE-mixed factory',
        effectiveness: 1,
        desc: 'Close the Bratislava plant and consolidate production into Gothenburg and Ghent. Save €450M/year in operating costs but eliminate 4,200 jobs.',
        lever_narrative: 'The factory closure saved real money but created a labor relations crisis. Strikes affected production at the other two plants, government officials called for boycotts, and the EU reviewed the closure under industrial policy rules. The cost savings were real but came at heavy political and operational cost.'
      },
      {
        id: 'build_in_china',
        title: 'Build a factory in China',
        effectiveness: 2,
        desc: 'Build a Nordweg EV factory in Jiangsu to access the Chinese market and Chinese EV supply chains. Sell into Asia from Asia.',
        lever_narrative: "The China factory plan got board approval and broke ground in month 8. It opens up Asia as a market and provides a cost-competitive supply chain — but it doesn't address the European market share crisis directly, and it strained the European workforce who saw it as offshoring."
      }
    ],
    why: [
      {
        id: 'cut_prices',
        title: 'Cut EV prices 15% across the lineup',
        effectiveness: 1,
        desc: "Match Tesla and BYD on transaction price. Take the margin hit. Defend market share aggressively before perception of irrelevance sets in.",
        lever_narrative: "The price cut spiked sales for one quarter — share recovered to about 5.2%. Then competitors matched, the price war re-equilibrated, and Nordweg ended up with 4.4% share at lower margins. Annual EV business margin went from +2% to -3%. Henrik defended the move as buying time, but the board questioned the long-term math."
      },
      {
        id: 'subscription_model',
        title: 'Launch EV-as-a-subscription',
        effectiveness: 3,
        desc: 'Move from one-time vehicle sales to monthly subscription (€599-1,299/month all-inclusive: vehicle, insurance, charging credits, service, warranty). New financial model, new customer relationship.',
        lever_narrative: 'The subscription pilot launched in 4 European cities. Take-up was strong among urban professionals (~3,200 subscribers in 12 weeks) and the recurring revenue smoothed the P&L in ways investors noticed. By month 12 Nordweg had re-rated from "cyclical manufacturer" toward "mobility subscription provider" — ARPU per subscriber stayed strong, churn was low, and the financial profile attracted new classes of investor. Balance-sheet bloat is real and Treasury remains uneasy, but the recurring-revenue story gives Nordweg a second way to be valuable that is orthogonal to winning the hardware arms race.'
      },
      {
        id: 'free_charging',
        title: 'Bundle free fast-charging for life',
        effectiveness: 1,
        desc: "Match Tesla's old supercharger benefit. Lifetime free fast-charging with every Nordweg EV purchase. Offset by a small price increase.",
        lever_narrative: "Free-charging was a marketing win and supportive of EV adoption, but it created a long-term liability on the balance sheet that Treasury hated. Sales improved modestly, but the cost grew with charging usage and the benefit was hard to undo."
      },
      {
        id: 'leasing_push',
        title: 'Push aggressive leasing terms',
        effectiveness: 2,
        desc: 'Subsidize lease rates through Nordweg Finance. Make the monthly cost dramatically lower than buying — get cars on the road at any cost.',
        lever_narrative: 'The leasing push moved volume in the first quarter — about 18% more EV deliveries than baseline. But Nordweg Finance absorbed the risk, residual values declined as more leased EVs hit the secondary market simultaneously, and the company effectively financed market share rather than building it.'
      },
      {
        id: 'two_brand',
        title: 'Launch a separate budget EV brand',
        effectiveness: 2,
        desc: "Create 'Nordlight' — a separate sub-brand for budget EVs starting at €28K. Compete with BYD in the entry segment without diluting Nordweg's premium identity.",
        lever_narrative: 'The Nordlight launch took 14 months and €380M in tooling. Initial reception was decent — 4,800 units in the first quarter — but the budget EV segment is brutal and Nordlight was sub-scale against Chinese competitors. The premium Nordweg brand was protected, but the budget bet hadn\'t paid back yet.'
      }
    ]
  },

  consequences: {
    who: {
      narrative: `<p>You diagnosed the problem as <strong>WHO</strong> — Nordweg was competing for the wrong customer. Fleet was already 38% of EV sales with 74% repurchase and compounding 38% YoY, while retail shrank 11% YoY. Your intervention pivoted the EV business toward fleet and B2B.</p>
    <p>Three months later, Nordweg has a 200-person fleet division, three large signed contracts (a municipal taxi fleet, a corporate fleet, and a car-share operator) representing 4,200 vehicles, and a pipeline of similar deals. Monthly EV revenue climbed to €335M even as retail softened, because fleet deals are concentrated and high-volume. Gross margin on fleet is slightly higher than retail — bulk warranty and service terms suit Nordweg's cost structure.</p>
    <p><span class="but">But.</span> The dealer network is unhappy. Two big dealer groups in Germany have publicly complained to motoring press, and analysts are asking whether Nordweg is "becoming a fleet company." A few fleet RFPs started scoring OTA and in-car AI, and Nordweg lost a handful — but the incumbent strengths (service, warranty, TCO) carried most tenders.</p>
    <p>By month 12 fleet reaches ~58% of EV revenue. The consumer-premium story is clearly ceded to Tesla and BYD, but the segment Nordweg now dominates compounds predictably and the P&L is the healthiest of the four paths.</p>`,
      metrics: [
        { label: 'Premium EV market share',     value: '4.0%',                  status: 'neutral' },
        { label: 'Fleet share of EV revenue',   value: '38% → 58%',             status: 'success' },
        { label: 'Monthly EV revenue',          value: '€335M',                 status: 'success' },
        { label: 'Fleet contract pipeline',     value: '11 active deals',       status: 'success' },
        { label: 'Dealer satisfaction',         value: 'Down (vocally)',        status: 'danger' },
        { label: 'Average gross margin (EV)',   value: '+1.8 pts',              status: 'success' }
      ],
      mrr: 335000000,
      mrr12: 455000000,
      ripple_question: "Fleet is paying off but dealers are revolting and the brand is shifting. The board wants a 12-month story for the next analyst call. What do you do?",
      ripple_options: [
        { id: 'commit_b2b',          title: 'Commit fully to fleet/B2B',           desc: "Reposition Nordweg explicitly as a 'mobility partner for fleets' over the next 18 months. Update messaging, branding, and capital allocation. Accept that retail will shrink while fleet compounds.", systems_score: 2 },
        { id: 'protect_dealers',     title: 'Compensate dealers for fleet sales',  desc: 'Build a referral and compensation program so dealers earn margin when their territory wins fleet contracts. Keep them aligned with the new strategy.', systems_score: 2 },
        { id: 'parallel_retail',     title: 'Run retail and fleet in parallel',     desc: 'Try to have it both ways: keep investing in premium retail while growing fleet. Use ICE profits to fund both.', systems_score: 1 },
        { id: 'spin_off_fleet',      title: 'Spin off the fleet business as a subsidiary', desc: 'Create Nordweg Fleet as a separate entity with its own management and possibly outside investment. Let it compete unconstrained while protecting the retail brand.', systems_score: 1 }
      ]
    },
    what: {
      narrative: `<p>You diagnosed the problem as <strong>WHAT</strong> — Nordweg's product rated 6.4/10 on software against 8.1-8.9 for segment leaders, and purchase-driver rankings had shifted. Your intervention rebuilt the in-car stack.</p>
    <p>Three months later, a 200-engineer software org is staffed, the next-generation EV platform is being pulled forward, and the OTA + voice AI roadmap is published. Press coverage is positive — Nordweg is making a credible play for the software-defined premium segment.</p>
    <p><span class="but">But.</span> None of this ships in the next 12 months. Capex jumped €600M on top of €120M/yr in recurring OpEx — a cost every Nordweg EV now has to absorb in years 1-2, even as BYD's licensing alternative sits at €2,100 per vehicle. Market share drifts while the product is being built, and fleet buyers — 38% of current sales — value today's retail-facing software investments less than retention and service economics.</p>
    <p>By month 12 the first OTA-capable vehicles ship to warm reviews, and the 2027-2029 cohort of premium retail buyers starts taking Nordweg seriously again. It's the strongest long-term play for defending consumer premium — but at the cost of margin compression through the transition and a capex load that constrains other moves.</p>`,
      metrics: [
        { label: 'Premium EV market share', value: '3.9%',                       status: 'danger' },
        { label: 'Engineering capex',       value: '+€600M · €120M/yr OpEx',     status: 'danger' },
        { label: 'Monthly EV revenue',      value: '€345M',                      status: 'success' },
        { label: 'Roadmap ambition',        value: 'High (analyst-approved)',    status: 'success' },
        { label: 'Time until new product',  value: '12-14 months',               status: 'neutral' },
        { label: 'Competitor launches',     value: '2 new models same window',   status: 'danger' }
      ],
      mrr: 345000000,
      mrr12: 475000000,
      ripple_question: "The product investments will land in 14 months. Market share is still drifting. What do you do in the meantime?",
      ripple_options: [
        { id: 'discover_fleet',     title: 'Discover the fleet opportunity',      desc: "Analyze the 38% fleet share data more carefully. Maybe the fleet customers are quietly the answer while the retail product is being rebuilt.", systems_score: 2 },
        { id: 'price_defense',      title: 'Defend share with price cuts',         desc: 'Cut prices 10% to hold market share while the new product is being built. Buy time. Margin pain now, recovery when the product ships.', systems_score: 0 },
        { id: 'accelerate_more',    title: 'Pull the platform forward 6 more months', desc: "Throw more resources at engineering. Pull the new EV platform forward another 6 months to close the gap with Tesla and BYD sooner.", systems_score: 1 },
        { id: 'partnership',        title: 'Partner with a Chinese OEM short-term', desc: "License a competitive EV from a Chinese partner for the next 18 months as a stopgap. Bridge the product gap.", systems_score: 1 }
      ]
    },
    how: {
      narrative: `<p>You diagnosed the problem as <strong>HOW</strong> — Nordweg's mixed-line factories were structurally uncompetitive at €27k per EV versus €18k for clean-sheet builders. Your intervention reorganized manufacturing.</p>
    <p>Three months later, Nordweg has broken ground on a clean-sheet EV gigafactory (€4B commitment), consolidated to a single EV platform, and signed a battery JV with CATL that cuts battery costs 22%. The site team pulled an aggressive timeline — first partial-volume runs come online in month 14.</p>
    <p><span class="but">But.</span> For the first 14 months the cost penalty on existing vehicles persists. The CATL partnership is politically sensitive, with European industrial policy hawks questioning Nordweg's commitment to European manufacturing. Market share drifts in the meantime — the manufacturing fix doesn't help vehicles already designed and priced.</p>
    <p>By month 12, the first gigafactory units are recovering capex on a unit-economics basis, margin-per-unit has jumped, and Nordweg is priced competitively against BYD without bleeding. The segment won is price-sensitive mid-premium rather than software-defined top-of-market — but the cost base is durable, and every other lever (pricing, fleet TCO, even future software licensing) is cheaper to pull from here.</p>`,
      metrics: [
        { label: 'Premium EV market share',  value: '3.9%',                  status: 'neutral' },
        { label: 'Cost per EV (gigafactory)', value: '€27k → €18k',          status: 'success' },
        { label: 'Monthly EV revenue',       value: '€350M',                 status: 'success' },
        { label: 'Capital committed',        value: '€4B (gigafactory)',     status: 'danger' },
        { label: 'Time to factory ramp',     value: '~14 months',            status: 'neutral' },
        { label: 'Battery JV politics',      value: 'Strained',              status: 'danger' }
      ],
      mrr: 350000000,
      mrr12: 460000000,
      ripple_question: "The structural fix is in motion but will take 2+ years to land. Market share drifts in the meantime. What now?",
      ripple_options: [
        { id: 'find_who',          title: 'Find a segment to win in the meantime', desc: 'The gigafactory is the right long-term move. But Nordweg needs revenue in the meantime. Find the segment where current vehicles win — likely fleet. Run that play in parallel.', systems_score: 2 },
        { id: 'cut_other_capex',   title: 'Cut other capex to focus',                desc: 'The €4B commitment requires cutting other investments. Pause non-critical projects, consolidate around the manufacturing transformation.', systems_score: 1 },
        { id: 'price_defense',     title: 'Defend share with price cuts',            desc: "Market share drift is the immediate problem. Cut EV prices 10% to defend until the new factory ships. Margin pain for 24 months.", systems_score: 0 },
        { id: 'focus_message',     title: 'Tell investors a clearer 5-year story',    desc: "The drift is mostly a perception issue. Build a strong investor narrative around the manufacturing transformation. Turn the 28-month timeline into a competitive advantage story.", systems_score: 1 }
      ]
    },
    why: {
      narrative: `<p>You diagnosed the problem as <strong>WHY</strong> — Nordweg's pricing was uncompetitive vs Tesla and BYD. Your intervention defended share with aggressive pricing.</p>
    <p>Three months later, Nordweg cut EV prices 15% across the lineup. Sales jumped immediately — premium EV share recovered to 5.2% in the quarter. Henrik is publicly vindicated. The market saw Nordweg "fight back" and stock price ticked up 6% on the news. Analysts wrote favorable notes about Nordweg's willingness to defend share.</p>
    <p><span class="but">But.</span> Tesla and BYD matched within 6 weeks. The price war re-equilibrated. Nordweg now has 4.4% share — slightly better than the bottom — at significantly lower margins. The annual EV business margin went from +2% to -3%. The aggressive lease push subsidized through Nordweg Finance moved more vehicles, but the residual values are eroding and the lease portfolio is taking unexpected losses.</p>
    <p>Worst of all: nothing about the underlying competitive position changed. Nordweg is still uncompetitive on cost (no manufacturing change), still behind on software (no product change), still missing the fleet opportunity (no segment shift). The company spent its margin to buy 0.3 share points and is now harder to fix.</p>`,
      metrics: [
        { label: 'Premium EV market share',  value: '4.4%',                status: 'neutral' },
        { label: 'Average EV gross margin',  value: '-5 points',           status: 'danger' },
        { label: 'Monthly EV revenue',       value: '€410M',               status: 'success' },
        { label: 'Lease portfolio losses',   value: '+€80M unrealized',    status: 'danger' },
        { label: 'EV business margin',       value: '+2% → -3%',           status: 'danger' },
        { label: 'Long-term position',       value: 'Worse',               status: 'danger' }
      ],
      mrr: 410000000,
      mrr12: 290000000,
      ripple_question: "Price defense bought a few months but worsened the long-term position. Margins are crumbling. Where now?",
      ripple_options: [
        { id: 'reverse_prices',     title: 'Reverse the price cuts',         desc: "Restore prices, accept the share loss, and admit the strategy failed. Stop bleeding margin. Refocus capital on real competitive moves.", systems_score: 2 },
        { id: 'fix_real_problems',  title: 'Fix what pricing didn\'t fix',  desc: 'Stop tweaking pricing. Address the actual structural issues: manufacturing, product, or segment. Pricing was buying time at high cost.', systems_score: 2 },
        { id: 'subscription_pivot', title: 'Pivot to subscription model',     desc: 'Use the price cut as cover for moving to a subscription model. Recurring revenue, lock-in, and a different conversation with the market.', systems_score: 1 },
        { id: 'continue_war',       title: 'Double down on the price war',    desc: 'Cut another 10%. Force Tesla and BYD to bleed too. Maybe Nordweg can outlast them on margin given the ICE business cash flow.', systems_score: 0 }
      ]
    }
  },

  simulated_teams: [
    {
      name: 'Fleet First', diagnosis: 'who', alignment: 'none',
      lever_ids: ['fleet_pivot'],
      reasoning: "Look at the data. 38% of EV sales are already fleet. Fleet repurchase is 74% vs retail's 36%. Fleet buyers value reliability, service network, warranty — exactly what Nordweg has been famous for since 1947. We're spending 90% of energy fighting Tesla and BYD on retail when there's a segment growing 3x faster where we already have decisive advantages. Pivot.",
      intervention_desc: 'Build a 200-person fleet division. Reposition all messaging around fleet purchase drivers. Sign 3 large fleet contracts in the first quarter. Deprioritize retail acquisition and accept the drift. Treat the existing fleet share as the seed of a much larger business.',
      tradeoff_explanation: "Dealers will revolt because they make money on retail. The premium consumer brand will wobble while we reposition. The board will be uncomfortable because it's a different company in 18 months. But the structural advantages are decisive in fleet and absent in retail.",
      tradeoffs: ['Existing customers confused', 'Internal resistance', 'Partner relationships strained'],
      ripple_choice: 'commit_b2b'
    },
    {
      name: 'Product Reborn', diagnosis: 'what', alignment: 'clara',
      lever_ids: ['reinvent_software'],
      reasoning: "Clara's right — our cars feel like 2018 BMWs. The infotainment is ancient, the design is conservative, the software updates are quarterly instead of weekly. Customers walk into showrooms and walk out into Tesla showrooms. We need to reinvent the product itself.",
      intervention_desc: "Hire 200 software engineers and rebuild the entire infotainment OS. Pull the next-gen EV platform forward by 14 months. Sign a partnership with a star designer. Make Nordweg desirable again, even if it costs €600M in unplanned capex.",
      tradeoff_explanation: "It costs a fortune and won't ship for 14+ months, during which market share keeps drifting. But if we don't reinvent the product, no other lever matters.",
      tradeoffs: ['Operating costs increase', 'Takes 3+ months to build'],
      ripple_choice: 'discover_fleet'
    },
    {
      name: 'Foundry Bet', diagnosis: 'how', alignment: 'raj',
      lever_ids: ['gigafactory'],
      reasoning: "Raj has the deepest insight. Mixed-line factories sharing 40% of parts with ICE add 20% to per-vehicle cost. Until we're built for EVs we can't compete on cost or speed. Tesla figured this out a decade ago.",
      intervention_desc: "Commit €4B to a clean-sheet EV gigafactory in Europe. Consolidate to a single EV platform. Sign a battery JV with CATL to cut battery costs 22%. Position Nordweg as the European manufacturer that finally got serious about EVs.",
      tradeoff_explanation: "The gigafactory takes 28 months to ship vehicles. The CATL deal is politically sensitive in Europe. The capital commitment limits other moves. But the structural cost advantage is real and durable.",
      tradeoffs: ['Operating costs increase', 'Takes 3+ months to build', 'Partner relationships strained'],
      ripple_choice: 'find_who'
    },
    {
      name: 'Price Defense', diagnosis: 'why', alignment: 'henrik',
      lever_ids: ['cut_prices'],
      reasoning: "Henrik's right that perception is the immediate threat. We're losing share to Tesla and BYD because they look cheaper. Cut prices 15% across the EV lineup. Defend the position. Optimize the math later.",
      intervention_desc: "Cut EV prices 15% across the entire lineup. Run an aggressive marketing campaign positioning Nordweg as 'European premium at competitive prices.' Subsidize through Nordweg Finance for leasing customers. Don't let the perception of irrelevance set in.",
      tradeoff_explanation: "The margin hit is severe and competitors will likely match within months. But losing share is worse than losing margin in the short term, especially with the board watching.",
      tradeoffs: ['Revenue drops short-term', 'Operating costs increase'],
      ripple_choice: 'continue_war'
    },
    {
      name: 'Skate Forward', diagnosis: 'what', alignment: 'none',
      lever_ids: ['battery_tech'],
      reasoning: "Solid-state batteries are the next leapfrog. Whoever ships first wins the next decade. Invest €1.5B in R&D and try to skate to where the puck is going, not where it is.",
      intervention_desc: 'Build a battery R&D center, hire 80 battery scientists, and commit €1.5B to solid-state battery development. Aim for a 4-year production timeline. Bet on technical leapfrog.',
      tradeoff_explanation: "If solid-state pays off in 4 years, this is a defining decision. If it doesn't, it's €1.5B into research while the market consolidates around the current generation.",
      tradeoffs: ['Operating costs increase', 'Takes 3+ months to build'],
      ripple_choice: 'accelerate_more'
    }
  ],

  tradeoff_tags: [
    'Acquisition cost increases',
    'Revenue drops short-term',
    'Takes 3+ months to build',
    'Existing customers confused',
    'Internal resistance',
    'Partner relationships strained',
    'Customer satisfaction dips during transition',
    'Operating costs increase'
  ],

  discussion_prompts: [
    'Same data, different diagnoses. What pulled each team toward their answer? Did Henrik\'s urgency make WHY feel more compelling? Did Clara\'s product passion make WHAT feel obvious?',
    "Find a team that diagnosed differently from you. Compare your consequences. Which path bought time, which one bought position, and which one gave away both?",
    "All four interventions look defensible at the moment of decision. By month 12 the gaps are huge. What does this tell you about how the auto industry — or any incumbent industry — gets disrupted?",
    "Henrik wanted to cut prices. Raj wanted to rebuild the factories. Clara argued the category itself had shifted — that 'premium' now means software, and every segment, including fleet, would follow within 5 years. The purchase-driver data showed it plainly: 'software experience' climbed from #9 to #2 in four years, and fleet RFPs were starting to score the same criteria. Did your team notice the category redefinition? Why is it so hard for incumbents to accept that the product they sell no longer matches the product customers want?"
  ],

  long_term_reveal_note: "At 3 months, every intervention looked defensible — and by month 12, three of the four still do. WHO (fleet pivot) compounds a segment where Nordweg's incumbent strengths are decisive and where fleet is trending to 62% of revenue by 2027. HOW (gigafactory) lands a durable €18k unit cost and makes every other lever cheaper to pull. WHAT (software rebuild) is the strongest defence of the consumer-premium segment but absorbs heavy capex and recurring OpEx that BYD can license for €2,100/vehicle. Only WHY (price war) leaves the company structurally worse off. <strong>The teaching point isn't 'one of these is the answer.' It's that Nordweg can be healthy on different axes depending on which future it commits to — and 'defending the old premium retail segment' is only one of three coherent plays.</strong>",

  long_term_scenes: [
    {
      heading: 'Month 3',
      body: 'Every intervention looked defensible. Three months in, no one could tell which plan would compound.'
    },
    {
      heading: 'What compounded',
      body: "<strong>WHO</strong> (fleet pivot) grew a segment where Nordweg's incumbent strengths are decisive, trending to <strong>62% of revenue by 2027</strong>. <strong>HOW</strong> (gigafactory) locked in a durable €18k unit cost and made every other lever cheaper to pull."
    },
    {
      heading: 'What was costly but survived',
      body: '<strong>WHAT</strong> (software rebuild) is the strongest defence of consumer-premium, but absorbs heavy capex and recurring OpEx that BYD can license for €2,100/vehicle. Only <strong>WHY</strong> (price war) leaves Nordweg structurally worse off.'
    },
    {
      heading: 'Takeaway',
      body: "The lesson isn't 'one of these is the answer.' Nordweg can be healthy on different axes depending on which future it commits to — <em>'defending the old premium retail segment'</em> is only one of three coherent plays."
    }
  ],

  teaching_punchline: "Three paths compound. One goes backwards. Strategy is which future you commit to — not which answer is right.",

  admin_bucket_analysis: {
    what: {
      verdict: 'Premium-retail defence',
      core_idea: "The category itself changed. Cars are now judged on software, and Nordweg scores 6.4 vs Tesla's 8.9.",
      winner_reason: "Highest MRR in the sim (€475M), but WHO and HOW also compound — Nordweg has three defensible futures. Only WHY goes backwards.",
      pros: [
        'Closes a real, measurable gap — and pre-empts fleet too (81% of 2028 fleet buyers want OTA/AI).',
        'Strongest path to defend the consumer-premium segment long-term.'
      ],
      cons: [
        'Nothing ships for 12-14 months. Share keeps drifting.',
        '€600M capex + €120M/yr OpEx loaded onto every vehicle — BYD licenses equivalent at €2,100/car.'
      ]
    },
    who: {
      verdict: 'Compounding bet',
      core_idea: 'Fleet is already 38% of EV sales, growing 38% YoY while retail shrinks. Stop fighting gravity.',
      pros: [
        "Plays to Nordweg's 76-year strengths: service, warranty, TCO.",
        'Fastest path to revenue compounding — no factory, no software rebuild.'
      ],
      cons: [
        'Dealers revolt. Premium consumer brand gets ceded to Tesla and BYD.',
        'Fleet is digitising too — WHO without WHAT is a clock.'
      ]
    },
    how: {
      verdict: 'Structural cost fix',
      core_idea: 'Mixed lines cost €27k/EV; clean-sheet costs €18k. Nothing else works until the cost base is fixed.',
      pros: [
        'Foundational — every future lever (pricing, fleet, software) gets cheaper.',
        'Factory pays back in ~14 months once ramped.'
      ],
      cons: [
        '14+ months before any relief; share drifts in the meantime.',
        '€4B locks up capital — no parallel software or fleet investment possible.'
      ]
    },
    why: {
      verdict: 'Symptom chasing',
      core_idea: 'Match Tesla and BYD on price now. Defend perception, optimize later.',
      pros: [
        'Instant response — stock up 6%, board feels defended.',
        'No capex, CEO can authorize it today.'
      ],
      cons: [
        'Tesla and BYD matched in 6 weeks. Margins collapsed, share barely moved.',
        'Nothing structural changed — next fix is now harder and more expensive.'
      ]
    }
  },

  diagnosis_labels: {
    who:  { tag: 'WHO',  name: 'WHO — Wrong target customer' },
    what: { tag: 'WHAT', name: 'WHAT — Product is behind on software' },
    how:  { tag: 'HOW',  name: 'HOW — Manufacturing cost base is wrong' },
    why:  { tag: 'WHY',  name: 'WHY — Not viable' }
  },

  timers: {
    diagnosis: 720,
    intervention: 900
  },

  scoring: {
    lever_bonus: 5000,
    tradeoff_thresholds: [
      { min_tags: 3, bonus: 10000 },
      { min_tags: 2, bonus: 5000 },
      { min_tags: 1, bonus: 0 }
    ],
    systems_bonus: 5000,
    variance_max: 5000,
    default_base_mrr: 340000000
  }

};
