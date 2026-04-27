// ============================================================
// SCENARIO: Plate & Pour
// Meal kit subscription — London DTC challenged by a churn crisis.
// Crisis type: churn (5% → 10%)
// Structural winner: WHO (Ocado-acquired customers don't fit)
// ============================================================

window.SCENARIOS = window.SCENARIOS || {};

window.SCENARIOS['plate_and_pour'] = {

  meta: {
    slug: 'plate_and_pour',
    display_name: 'Plate & Pour',
    industry: 'DTC meal kit subscription',
    difficulty: 'medium',
    estimated_minutes: 50,
    tagline: 'The metric is broken. The CEO thinks she knows why.'
  },

  company: {
    name: 'Plate & Pour',
    subtitle: 'Direct-to-consumer (DTC) meal kit subscription · London · Series A · 89 employees',
    currency_symbol: '£',
    baseline_mrr: 640000,
    baseline_mrr_label: '£640K',
    hero_image: '/images/plate_and_pour.png',
    hero_caption: 'A typical Plate & Pour weekly box — chef-designed recipes, locally sourced ingredients.',
    founding_story: "Ines Kovac and her co-founder left Deliveroo in 2021 with one conviction: people want to cook restaurant-quality meals at home, but the gap between a recipe and a finished plate is too wide. They launched <strong>Plate &amp; Pour</strong> with chef-designed seasonal menus and locally sourced ingredients. Three years in, 22,000 active subscribers, strong Instagram presence, and an $8M Series A behind them. The product is loved. The brand is strong. But something is breaking."
  },

  characters: [
    {
      initials: 'IK',
      name: 'Ines Kovac',
      role: 'CEO & Co-founder',
      description: "Data-driven, moves fast, trusts metrics. Former product manager at Deliveroo. Believes the numbers always tell you what to do if you look hard enough.",
      crisis_title: 'Ines (CEO)',
      crisis_quote: "It's pricing. HelloFresh just cut their prices 20%. Our customers are leaving for a cheaper option. We need to match or undercut them, and probably add a free trial or a lite tier.",
      avatar_color_key: 'why',
      crisis_border_key: 'why',
      alignment_id: 'ines',
      alignment_label: 'Ines (CEO)'
    },
    {
      initials: 'MC',
      name: 'Marco Chen',
      role: 'Head of Design',
      description: "Joined 6 months ago from a design agency. Thinks in systems. Redesigned the menu selection flow 3 months ago to give users more choice and control.",
      crisis_title: 'Marco (Head of Design)',
      crisis_quote: "I redesigned the menu selection flow 3 months ago to give more choice. Session times doubled. Completion rates dropped 40%. I think I accidentally created decision fatigue. People aren't experiencing the value.",
      avatar_color_key: 'how',
      crisis_border_key: 'how',
      alignment_id: 'marco',
      alignment_label: 'Marco (Design)'
    },
    {
      initials: 'SO',
      name: 'Sasha Olumide',
      role: 'Head of Operations',
      description: "Been there since day one. Knows every supplier by name. Managed the expansion to 6 new cities last quarter. Lives in spreadsheets and logistics.",
      crisis_title: 'Sasha (Head of Ops)',
      crisis_quote: "Look at the delivery data. We expanded to 6 new cities last quarter. On-time delivery in the new cities is 71% versus 94% in our original three. People leave when their food arrives late or damaged.",
      avatar_color_key: 'what',
      crisis_border_key: 'what',
      alignment_id: 'sasha',
      alignment_label: 'Sasha (Ops)'
    }
  ],

  bmi_nodes: [
    {
      dimension: 'what',
      icon: 'V',
      position: 'top',
      title: 'Chef-designed seasonal meal kits',
      description: '3-4 recipes/week, 25-35 min cook time, locally sourced. "Restaurant quality, your kitchen."'
    },
    {
      dimension: 'why',
      icon: '$',
      position: 'bottom-left',
      title: '£29/week subscription + add-on extras',
      description: 'Recurring weekly payment. ~15% of revenue from wine, premium ingredients, dessert box upsells.'
    },
    {
      dimension: 'how',
      icon: 'H',
      position: 'bottom-right',
      title: 'DTC via app + web, own fleet + 3PL (third-party logistics)',
      description: '14 regional suppliers, central fulfillment + 2 hubs. Own vans in 3 cities, 3PL in 6 new cities.'
    },
    {
      dimension: 'who',
      icon: 'W',
      position: 'center',
      title: 'Working professionals & young families, 28-42, UK cities',
      description: ''
    }
  ],

  ecosystem: {
    viewBox: '0 0 700 360',
    nodes: [
      { id: 'suppliers',   label_lines: ['14 Regional', 'Suppliers'],    emoji: '&#127813;', cx: 100, cy: 120, r: 36, stroke: 1.8 },
      { id: 'hq',          label_lines: ['Plate &amp; Pour'],             subtitle: 'Central + 2 hubs', emoji: '&#127869;', cx: 350, cy: 180, r: 44, stroke: 2.2 },
      { id: 'subscribers', label_lines: ['22K Active', 'Subscribers'],   emoji: '&#128100;', cx: 600, cy: 120, r: 36, stroke: 1.8 },
      { id: 'ocado',       label_lines: ['Ocado', 'Partnership'],        emoji: '&#128722;', cx: 600, cy: 280, r: 32, stroke: 1.5 },
      { id: 'threepl',     label_lines: ['3PL Partners', '(6 new cities)'], emoji: '&#128666;', cx: 100, cy: 280, r: 32, stroke: 1.5 }
    ],
    edges: [
      { type: 'goods', label: 'INGREDIENTS', x1: 138, y1: 112, x2: 304, y2: 168, text_x: 210, text_y: 128 },
      { type: 'money', label: 'PAYMENT',      x1: 304, y1: 180, x2: 138, y2: 128, text_x: 210, text_y: 168 },
      { type: 'goods', label: 'MEAL KITS',    x1: 396, y1: 168, x2: 562, y2: 112, text_x: 478, text_y: 128 },
      { type: 'money', label: '&pound;29/WK', x1: 562, y1: 128, x2: 396, y2: 180, text_x: 478, text_y: 168 },
      { type: 'data',  label: 'LEADS (25%)',  x1: 568, y1: 272, x2: 392, y2: 198, text_x: 500, text_y: 248 },
      { type: 'goods', label: 'DELIVERY',     x1: 134, y1: 272, x2: 310, y2: 198, text_x: 200, text_y: 248 },
      { type: 'money', label: 'FEES',         x1: 310, y1: 210, x2: 134, y2: 284, text_x: 200, text_y: 268 }
    ],
    glossary: [
      { term: 'Ocado Partnership', description: "Ocado is the UK's largest online grocery retailer. Plate &amp; Pour runs a co-marketing deal where Ocado promotes the meal kit to its shoppers. These referred customers make up ~25% of new signups." },
      { term: '3PL Partners', description: "In 6 newer cities, Plate &amp; Pour uses third-party logistics providers rather than its own vans. Cheaper to scale but less control over the delivery experience." }
    ]
  },

  health_metrics: [
    { value: '22,000',    label: 'Active subscribers' },
    { value: '£640K',     label: 'Monthly revenue' },
    { value: '5%',        label: 'Subscribers leaving each month' },
    { value: '£38',       label: 'Cost to win a new customer' },
    { value: '14 months', label: 'How long the avg customer stays' },
    { value: '86%',       label: 'Boxes arriving on time' }
  ],

  crisis: {
    crisis_type: 'churn',
    metric_label: 'Subscribers leaving each month',
    before: '5%',
    after: '10%',
    impact_html: 'This doubled in just 3 months. The people leaving are in months 2-5 — not first-week trial users, and not long-term loyals.<br><strong style="color: var(--color-danger);">That\'s &pound;42K/month in lost revenue that wasn\'t happening 90 days ago.</strong>',
    runway_line: 'At this rate, the company burns through its funding 8 months faster than planned.',
    recap_crisis: "Monthly subscriber departures doubled from 5% to 10% in 3 months. That's £42K/month in lost revenue. The people leaving are in months 2–5.",
    recap_hidden_clue: "Customers who found us directly leave at ~6%/month. Customers who came via Ocado leave at ~13%/month — more than double. Nobody brought this up."
  },

  data_table: [
    { fact: 'HelloFresh UK cut their prices',            numbers: '20% cheaper since last month',                              points_toward: 'why', points_label: 'Pricing (WHY)' },
    { fact: 'Time to pick weekly meals',                  numbers: "Now 14 min average (was 6 min before Marco's redesign)",   points_toward: 'how', points_label: 'UX friction (HOW)' },
    { fact: 'Boxes arriving on time',                     numbers: 'Own delivery vans: 94% · Outsourced partners: 71%',        points_toward: 'how', points_label: 'Operations (HOW)' },
    { fact: "Who's leaving, by city",                     numbers: 'Original 3 cities: 5% · New 6 cities: ~14%',               points_toward: 'how', points_label: 'Operations (HOW)' },
    { fact: "Who's leaving, by how they found us",        numbers: 'Found us directly: ~6% · Came via Ocado: ~13%',            points_toward: 'who', points_label: 'Customer fit (WHO)' },
    { fact: 'Customer satisfaction over time',            numbers: 'Month 1: high · Month 3: drops sharply · Month 6+: recovers', points_toward: 'ambiguous', points_label: 'Something breaks in the middle months' },
    { fact: 'Why people say they cancelled',              numbers: '34% "too expensive" · 28% "didn\'t cook the meals" · 22% "delivery issues" · 16% other', points_toward: 'ambiguous', points_label: 'Supports everyone a bit' }
  ],

  case_data_viz: [
    {
      type: 'tiles',
      title: 'Churn shape',
      sub: 'last 3 months',
      tiles: [
        { label: 'Monthly churn',         value: '10%',   delta: '+5 pts vs 5%', delta_dir: 'down', alert: true },
        { label: 'Revenue lost / month',  value: '£42K',  delta: 'wasn\'t happening 90 days ago', delta_dir: 'down' },
        { label: 'Active subscribers',    value: '22K',   delta: 'volume holding for now' },
        { label: 'Avg customer lifetime', value: '14 mo', delta: 'shrinking with churn', delta_dir: 'down' }
      ]
    },
    {
      type: 'bars',
      title: 'On-time delivery · by carrier',
      max: 100,
      bars: [
        { label: 'Own delivery vans',     value: 94, display: '94%', color: 'good' },
        { label: 'Outsourced 3PL partners', value: 71, display: '71%', color: 'warn' }
      ],
      caption: 'Own vans run in <strong>3 original cities</strong>; 3PL covers <strong>6 newer cities</strong>. Boxes arriving on time predicts whether a customer cancels.'
    },
    {
      type: 'bars',
      title: 'Monthly churn · by city cohort',
      max: 20,
      bars: [
        { label: 'Original 3 cities', value: 5,  display: '5%',  color: 'good' },
        { label: 'New 6 cities',      value: 14, display: '~14%', color: 'warn' }
      ],
      caption: 'New cities churn at <strong>~3× the rate</strong> of the original three — and they\'re the ones running on outsourced delivery.'
    },
    {
      type: 'bars',
      title: 'Monthly churn · by acquisition source',
      max: 20,
      bars: [
        { label: 'Found us directly', value: 6,  display: '~6%',  color: 'good' },
        { label: 'Came via Ocado',    value: 13, display: '~13%', color: 'warn' }
      ],
      caption: 'Ocado-acquired customers churn at <strong>~2× the rate</strong> of direct customers. Ocado contributes <strong>~25% of new signups</strong>. Nobody flagged this gap.'
    },
    {
      type: 'bars',
      title: 'Why they say they cancelled · exit survey',
      max: 100,
      bars: [
        { label: '"Too expensive"',           value: 34, display: '34%', color: 'muted' },
        { label: '"Didn\'t cook the meals"',  value: 28, display: '28%', color: 'muted' },
        { label: '"Delivery issues"',         value: 22, display: '22%', color: 'warn'  },
        { label: 'Other',                     value: 16, display: '16%', color: 'muted' }
      ],
      caption: 'HelloFresh UK <strong>cut prices 20%</strong> last month. Marco\'s redesign moved meal-pick time from <strong>6 → 14 min</strong>. CSAT dips sharply in <strong>months 2–5</strong>, then recovers.'
    }
  ],

  diagnosis_options: [
    { dimension: 'who',  title: 'Wrong customers',     description: "The problem is about which customers we're attracting. Some segments don't fit the model and were never going to stay." },
    { dimension: 'what', title: 'Value prop gap',      description: "The problem is about what value we're offering. Customers aren't finding enough reason to stay beyond the initial excitement." },
    { dimension: 'how',  title: 'Delivery is broken',  description: 'The problem is about how we deliver value. The experience — UX, logistics, or both — is failing to fulfill the promise.' },
    { dimension: 'why',  title: "Pricing doesn't work", description: 'The problem is about our profit logic. The price-to-value ratio is off, and the subscription model may not fit the customer need.' }
  ],

  levers: {
    who: [
      {
        id: 'pause_ocado',
        title: 'Pause the Ocado partnership',
        effectiveness: 3,
        desc: 'Stop bringing in customers through Ocado entirely. Focus only on channels where customers actually stay — Instagram, referrals, direct signups.',
        lever_narrative: 'Because you paused the Ocado partnership, the inflow of poorly-fitting subscribers stopped immediately. New signups are down sharply, but the subscribers coming in now stay much longer and spend more on extras.'
      },
      {
        id: 'qualify_flow',
        title: 'Add a "right fit?" flow before signup',
        effectiveness: 3,
        desc: "Before someone subscribes, ask 3-4 questions about their cooking habits, budget, and needs. Steer away people who won't stick.",
        lever_narrative: 'The pre-signup questions filtered out browsers who were never going to cook — signup rates dropped 25%, but almost everyone who made it through is still active 3 months later.'
      },
      {
        id: 'ocado_onboarding',
        title: 'Build a separate first week for Ocado customers',
        effectiveness: 1,
        desc: 'Create a different onboarding experience for Ocado customers that bridges the gap between grocery shopping and cooking from scratch.',
        lever_narrative: "The custom onboarding reduced early dropout for Ocado-acquired customers, but only slightly — the fit problem is structural, and better onboarding can't fully compensate for attracting the wrong customers in the first place."
      },
      {
        id: 'shift_marketing',
        title: 'Redirect marketing spend',
        effectiveness: 2,
        desc: 'Move the Ocado partnership budget into Instagram, referrals, and content marketing — channels that attract people who actually want to cook.',
        lever_narrative: 'Shifting spend to Instagram and referrals brought in fewer but better-fit subscribers — more cooks, fewer dabblers. But building those channels takes 3-6 months to gain momentum, and the gap in new signups is visible now.'
      },
      {
        id: 'lite_plan',
        title: 'Create a lighter plan for casual cooks',
        effectiveness: 2,
        desc: 'Instead of turning away the wrong customers, serve them differently: a 1-meal/week plan at £12 that matches how they actually cook.',
        lever_narrative: 'The lighter plan absorbed casual cooks who would have churned otherwise, reducing the departure rate in that segment. But some full-plan subscribers downgraded opportunistically, and profit per subscriber dropped.'
      }
    ],
    what: [
      {
        id: 'retention_value',
        title: 'Add a "month 2-5" retention program',
        effectiveness: 2,
        desc: 'Create escalating value: cooking challenges, seasonal specials, and skill progression that gives subscribers a reason to stay past the initial excitement.',
        lever_narrative: 'The month 2-5 program worked — for the people who discovered it. Subscribers who engaged with the challenges stayed 40% longer. The problem: only 1 in 3 found the feature before they had already decided to leave.'
      },
      {
        id: 'personalization',
        title: 'Launch meal personalization',
        effectiveness: 2,
        desc: 'Let subscribers build a taste profile. Use it to curate menus, suggest add-ons, and make each box feel chosen, not assigned.',
        lever_narrative: 'Personalized curation made the box feel chosen rather than generic. Completion rates improved and add-on purchases went up — but development took 10 weeks longer than planned and the roadmap is now behind.'
      },
      {
        id: 'community',
        title: 'Build a cooking community',
        effectiveness: 1,
        desc: 'Weekly live cook-alongs, a subscriber recipe exchange, and social features that create belonging — not just a box of ingredients.',
        lever_narrative: 'The cook-along community attracted the enthusiasts — who were already your best, longest-staying subscribers. The people who needed convincing to stay never showed up to the sessions.'
      },
      {
        id: 'differentiate',
        title: 'Sharpen the premium positioning',
        effectiveness: 2,
        desc: "Double down on what HelloFresh can't match: local sourcing, named chefs, seasonal storytelling. Make the value gap visible.",
        lever_narrative: "Sharpening the premium story improved brand perception and reduced price comparisons with HelloFresh. But it didn't re-engage subscribers who were already in the middle of their exit decision."
      },
      {
        id: 'outcome_shift',
        title: 'Shift from recipes to outcomes',
        effectiveness: 1,
        desc: 'Reframe the product from "meal kits" to "becoming a confident cook." Track skill development, celebrate milestones.',
        lever_narrative: "Reframing around skill development resonated with a segment of subscribers who signed up to improve — but most people subscribed for dinner, not personal growth, and didn't engage with the new framing."
      }
    ],
    how: [
      {
        id: 'fix_3pl',
        title: 'Fix or replace the 3PL partners',
        effectiveness: 3,
        desc: "Set SLAs (service level agreements) with current 3PL partners. If they can't hit 90%+ on-time, switch to a competitor or build hybrid fleet in highest-volume new cities.",
        lever_narrative: 'Replacing the underperforming 3PL (third-party logistics) raised on-time delivery from 71% to 89% in new cities. The subscribers who stayed past month 1 are much happier — but some had already left before the fix landed.'
      },
      {
        id: 'pause_expansion',
        title: 'Pause expansion to new cities',
        effectiveness: 2,
        desc: 'Stop new city launches until delivery quality matches the original three cities. Consolidate before growing.',
        lever_narrative: "Consolidating operations gave your team space to improve delivery quality in existing cities. On-time rates climbed back toward 90%, but investor pressure for growth is building and competitors didn't pause."
      },
      {
        id: 'revert_menu',
        title: 'Revert the menu selection redesign',
        effectiveness: 2,
        desc: "Roll back Marco's redesign. Return to the simpler flow while completion rates recover. Iterate with smaller changes.",
        lever_narrative: 'Rolling back the redesign brought completion rates back to their old levels almost immediately — simplicity was working. Marco is frustrated but the data is clear, and the team is now testing incremental changes.'
      },
      {
        id: 'simplify_menu',
        title: 'Simplify the menu with smart defaults',
        effectiveness: 3,
        desc: 'Keep the expanded options but add "Chef\'s Pick" — a one-click default based on past preferences. Reduce decision fatigue without removing choice.',
        lever_narrative: "Chef's Pick solved decision fatigue without removing choice — 60% of users defaulted to it, completion rates recovered, and the subscribers who wanted full control still had it."
      },
      {
        id: 'delivery_comms',
        title: 'Add proactive delivery communication',
        effectiveness: 1,
        desc: 'Real-time tracking, delay notifications, and a "guaranteed freshness" promise with automatic credit if delivery is late.',
        lever_narrative: "Proactive delay notifications halved angry support tickets and improved satisfaction scores. People are more forgiving when they know what's happening — but the underlying 71% on-time rate in new cities still hasn't changed."
      }
    ],
    why: [
      {
        id: 'match_price',
        title: 'Match HelloFresh pricing',
        effectiveness: 1,
        desc: "Drop to £23/week. You'll keep less profit per box, but if more people stay, the total revenue could be higher.",
        lever_narrative: "Matching HelloFresh's price slowed departures — cancellations citing price dropped by 12 percentage points. But with thinner margins, every remaining problem now costs more to fix, and profit per subscriber is down sharply."
      },
      {
        id: 'tiered_pricing',
        title: 'Introduce good-better-best tiers',
        effectiveness: 3,
        desc: "£19 Basic (2 meals, simpler recipes) / £29 Classic (current) / £39 Chef's Table (premium ingredients, wine pairing). Let people self-select.",
        lever_narrative: "The three-tier structure gave price-sensitive customers a home in the Basic plan and surfaced high-value customers for Chef's Table — but migrating existing subscribers to the new structure caused confusion and some temporary churn."
      },
      {
        id: 'annual_lock',
        title: 'Offer a 3-month commitment discount',
        effectiveness: 2,
        desc: '£25/week if you commit for 12 weeks. Creates a retention floor and gives customers time to form the habit.',
        lever_narrative: 'The commitment discount created a retention floor — subscribers who took the 12-week deal churned at half the rate. But converting existing subscribers to the new deal proved harder than expected.'
      },
      {
        id: 'usage_pricing',
        title: 'Switch to per-meal pricing',
        effectiveness: 1,
        desc: 'Instead of weekly subscription, let customers order meal-by-meal at £10 each. Lower commitment, higher flexibility, but less predictable revenue.',
        lever_narrative: "Per-meal pricing reduced commitment anxiety and attracted customers who wouldn't subscribe — but predictable weekly revenue is now much harder to forecast, which is making investors nervous."
      },
      {
        id: 'increase_addons',
        title: 'Make more money from extras',
        effectiveness: 2,
        desc: 'Keep the base price, but expand what people can add on (desserts, breakfast items, pantry staples). Shift profit toward the extras instead of the base box.',
        lever_narrative: "Expanding add-ons boosted average order value by 18% — the subscribers who stayed are buying more. But it didn't address why the departure rate is still elevated for new subscribers."
      }
    ]
  },

  consequences: {
    who: {
      narrative: `<p>You diagnosed the problem as <strong>WHO</strong> — the wrong customers were coming through the Ocado partnership. Your intervention targeted who's signing up.</p>
    <p>Three months later, the results are clear. Far fewer new subscribers are leaving. The people coming in through your adjusted channels are a much better fit — they cook more often, engage with the content, and order add-on extras at higher rates.</p>
    <p><span class="but">But.</span> New signups dropped 30%. The Ocado channel brought in 1 out of every 4 new customers, and your other channels haven't fully compensated. The board is seeing flat growth numbers. Ines is fielding investor questions about why subscriber count isn't growing while competitors expand.</p>
    <p>Meanwhile, the problem has improved but not disappeared. Even customers who found you directly are still leaving slightly more than before — better than the crisis peak, but not back to normal. Something else might be contributing too.</p>`,
      metrics: [
        { label: 'Subscribers leaving/mo', value: '~6%', status: 'success' },
        { label: 'New signups', value: '-30%', status: 'danger' },
        { label: 'Monthly revenue', value: '£610K', status: 'neutral' },
        { label: 'Cost per new customer', value: '£44 (up)', status: 'danger' },
        { label: 'Customer satisfaction', value: 'Improving', status: 'success' },
        { label: 'On-time delivery', value: '86%', status: 'neutral' }
      ],
      mrr: 610000,
      mrr12: 710000,
      ripple_question: 'New signups are down 30%. The board meeting is in 6 weeks. The departure problem improved but the original cities still have a residual issue. What do you do?',
      ripple_options: [
        { id: 'double_down',         title: 'Double down on organic growth',     desc: 'Invest heavily in referrals, content, and community. Accept slower growth but higher quality. Show the board that the customers who stay are worth much more.', systems_score: 1 },
        { id: 'renegotiate',         title: 'Renegotiate the Ocado partnership', desc: 'Go back to Ocado with a more targeted integration — only show Plate & Pour to shoppers who match your best-fit customer profile.', systems_score: 2 },
        { id: 'investigate_residual',title: 'Investigate the residual problem',  desc: "Even your directly-acquired customers are leaving more than before. Shift focus to the HOW or WHAT problem that's still driving month 2-5 exits.", systems_score: 2 },
        { id: 'new_channel',         title: 'Open a new acquisition channel',    desc: 'Test corporate wellness partnerships. Different channel, potentially high-fit customers, and a new type of buyer altogether.', systems_score: 1 }
      ]
    },
    what: {
      narrative: `<p>You diagnosed the problem as <strong>WHAT</strong> — the product wasn't giving people enough reason to stay past the initial excitement. Your intervention focused on what subscribers get from the service.</p>
    <p>Three months later, the subscribers who discover the new features are much more engaged. They cook more, share more on Instagram, and stay significantly longer. Word of mouth is up. People who stay love the product even more than before.</p>
    <p><span class="but">But.</span> The overall number of people leaving barely moved. Why? Because the subscribers who are leaving aren't engaging with the new features in the first place. They leave before they ever discover the extra value. The problem might not be what you offer — it might be about who's arriving or how they experience the first weeks.</p>
    <p>And the development cost was significant. Your team spent 10 weeks building this, and the product roadmap is now 6 weeks behind. HelloFresh just launched a feature your users have been asking for.</p>`,
      metrics: [
        { label: 'Subscribers leaving/mo', value: '~8%', status: 'neutral' },
        { label: 'Feature engagement', value: '+40%', status: 'success' },
        { label: 'Monthly revenue', value: '£630K', status: 'neutral' },
        { label: 'Customer satisfaction', value: 'Up strongly', status: 'success' },
        { label: 'Product roadmap', value: '6 weeks behind', status: 'danger' },
        { label: 'On-time delivery', value: '86%', status: 'neutral' }
      ],
      mrr: 630000,
      mrr12: 640000,
      ripple_question: 'Engagement is up for those who find the new features, but the people leaving never discover them. The roadmap is 6 weeks behind. What do you do?',
      ripple_options: [
        { id: 'fix_discovery',    title: 'Fix the discovery problem',     desc: 'Focus on surfacing your new value features during onboarding and weeks 2-4. Make the value visible before people decide to leave.', systems_score: 1 },
        { id: 'investigate_who',  title: 'Investigate the WHO problem',   desc: "The people leaving aren't engaging. Maybe they're the wrong customers. Look at the Ocado channel data and rethink who you're bringing in.", systems_score: 2 },
        { id: 'catch_up_roadmap', title: 'Catch up on the roadmap',       desc: 'Pause new feature work and close the gap with HelloFresh. The competitive threat is real, and falling behind on features could push even more people to switch.', systems_score: 1 },
        { id: 'measure_first',    title: 'Run a targeted experiment',     desc: 'Before building more, run a 2-week test: actively surface the new features to month-2 subscribers and measure whether it changes how many leave.', systems_score: 2 }
      ]
    },
    how: {
      narrative: `<p>You diagnosed the problem as <strong>HOW</strong> — the delivery experience was broken, whether through late boxes in new cities, the confusing menu redesign, or both. Your intervention targeted how customers experience the product.</p>
    <p>Three months later, the thing you fixed is measurably better. If you fixed logistics, on-time delivery in new cities climbed from 71% to 89%. If you fixed the menu, people are completing their weekly selection again. The customers directly affected are happier and staying longer.</p>
    <p><span class="but">But.</span> Overall, people are still leaving at nearly double the old rate. A meaningful improvement, but customers who came through the Ocado partnership are still leaving at alarming rates — regardless of delivery quality or UX improvements. The HOW fix helped, but there's a WHO-shaped problem underneath that your intervention didn't touch.</p>
    <p>Also, your team spent their capacity on this fix. The product roadmap is 4 weeks behind, and HelloFresh just launched a personalisation feature your users are asking about on social media.</p>`,
      metrics: [
        { label: 'Subscribers leaving/mo', value: '~7%', status: 'neutral' },
        { label: 'On-time delivery', value: '89%', status: 'success' },
        { label: 'Monthly revenue', value: '£630K', status: 'neutral' },
        { label: 'Ocado customers leaving', value: 'Still ~11%', status: 'danger' },
        { label: 'Product roadmap', value: '4 weeks behind', status: 'danger' },
        { label: 'Customer satisfaction', value: 'Slightly up', status: 'success' }
      ],
      mrr: 630000,
      mrr12: 650000,
      ripple_question: 'The HOW fix worked for the customers it reached. But Ocado-acquired customers are still leaving fast, and the roadmap is behind. What do you do?',
      ripple_options: [
        { id: 'tackle_who',        title: 'Now tackle the WHO problem',          desc: "You fixed the floor. Now address the ceiling: the Ocado partnership is sending customers who don't fit. Pause or restructure it.", systems_score: 2 },
        { id: 'optimize_further',  title: "Optimize what's working",             desc: 'The HOW improvements are showing results. Push further — get delivery to 95%, simplify the UX more, build on momentum.', systems_score: 0 },
        { id: 'roadmap_first',     title: 'Prioritize the competitive roadmap',  desc: "HelloFresh is pulling ahead on features. If you fall too far behind, even good delivery won't matter. Close the gap.", systems_score: 1 },
        { id: 'segment_approach',  title: 'Take a segmented approach',           desc: 'Build different experiences for different segments: high-touch for Ocado customers, streamlined for organic. Solve both problems at once.', systems_score: 2 }
      ]
    },
    why: {
      narrative: `<p>You diagnosed the problem as <strong>WHY</strong> — the pricing was uncompetitive or didn't match what customers felt they were getting. Your intervention targeted how the company makes money.</p>
    <p>Three months later, the pricing change had an effect — but not the one you hoped for. Slightly fewer people are leaving. The "too expensive" cancellation reason dropped from 34% to 22%. Price-sensitive customers are staying a bit longer.</p>
    <p><span class="but">But.</span> The company is keeping much less money from each sale. Revenue per subscriber is down, and you now need 28% more customers just to bring in the same monthly revenue. Investors are worried — the business needs to be profitable to raise its next round of funding. And the 22% who said "delivery issues" and 28% who said "didn't cook the meals"? Those numbers haven't moved at all — because pricing wasn't causing those problems.</p>
    <p>Ines is questioning whether the price cut was worth it. "We're earning less and people are still leaving. What did we actually fix?"</p>`,
      metrics: [
        { label: 'Subscribers leaving/mo', value: '~8%', status: 'neutral' },
        { label: 'Profit per box', value: 'Down sharply', status: 'danger' },
        { label: 'Monthly revenue', value: '£590K (down)', status: 'danger' },
        { label: '"Too expensive" complaints', value: 'Down to 22%', status: 'success' },
        { label: 'On-time delivery', value: '86%', status: 'neutral' },
        { label: 'Customer satisfaction', value: 'About the same', status: 'neutral' }
      ],
      mrr: 590000,
      mrr12: 560000,
      ripple_question: 'Profit per box is thin. Investors are worried. People are still leaving — just slightly less. What do you do?',
      ripple_options: [
        { id: 'reverse_price',      title: 'Reverse the price change',             desc: "The data says it wasn't worth it. Go back to the original price, frame it as a \"premium quality commitment,\" and accept that some price-sensitive subscribers will leave.", systems_score: 1 },
        { id: 'address_real_cause', title: "Address what pricing didn't fix",      desc: 'Pricing was a symptom. Now fix the real problems — the delivery issues and the Ocado customer fit — that are actually driving 50%+ of cancellations.', systems_score: 2 },
        { id: 'grow_addons',        title: 'Make more from add-on extras',         desc: 'Keep the lower prices but push hard on add-on sales (wine, dessert box, premium ingredients). If more people buy extras, the profit per box recovers.', systems_score: 0 },
        { id: 'premium_play',       title: 'Go premium instead of cheap',          desc: 'Stop competing with HelloFresh on price. Launch a £39/week "Chef\'s Table" tier and lean into the customers who value quality over cost.', systems_score: 1 }
      ]
    }
  },

  simulated_teams: [
    {
      name: 'Pixel Forge', diagnosis: 'who', alignment: 'none',
      lever_ids: ['pause_ocado'],
      reasoning: 'The channel data is the smoking gun. Ocado customers leave at more than double the rate. This is a WHO problem disguised as everything else.',
      intervention_desc: 'Immediately pause the Ocado co-marketing deal. Redirect that budget to Instagram and referral campaigns. Build a qualification quiz for new signups from all channels.',
      tradeoff_explanation: "We'll lose our biggest acquisition channel short-term, but the subscribers we retain will be worth far more over their lifetime.",
      tradeoffs: ['Revenue drops short-term', 'Partner relationships strained'],
      ripple_choice: 'renegotiate'
    },
    {
      name: 'Design Ops', diagnosis: 'how', alignment: 'marco',
      lever_ids: ['simplify_menu'],
      reasoning: 'Marco broke it and he knows it. Session times doubled — classic decision fatigue. Fix the experience, people start cooking again, they stay.',
      intervention_desc: 'Add a "Chef\'s Pick" one-click default to every weekly menu, pre-selected based on past preferences. Keep full choice available but make the path of least resistance simple.',
      tradeoff_explanation: 'Some power users may feel the product is less customizable, but most people just want dinner decided for them.',
      tradeoffs: ['Existing customers confused', 'Takes 3+ months to build'],
      ripple_choice: 'tackle_who'
    },
    {
      name: 'UX Bandits', diagnosis: 'how', alignment: 'sasha',
      lever_ids: ['fix_3pl'],
      reasoning: 'New cities: ~14% leaving. Original cities: 5%. Delivery at 71% on-time is unacceptable for a premium product. Fix the basics first.',
      intervention_desc: 'Issue 90-day SLA ultimatums to current 3PL providers. If they can\'t hit 90%+ on-time delivery, replace them in the two worst-performing cities with our own vans.',
      tradeoff_explanation: "Replacing 3PL with own vans is expensive and slow, but a late box destroys trust in a way that's almost impossible to rebuild.",
      tradeoffs: ['Operating costs increase', 'Takes 3+ months to build'],
      ripple_choice: 'optimize_further'
    },
    {
      name: 'Team Figma', diagnosis: 'why', alignment: 'ines',
      lever_ids: ['tiered_pricing'],
      reasoning: '34% say "too expensive" — that\'s the single largest cancellation reason. But don\'t just cut prices. Give people options.',
      intervention_desc: "Launch three tiers: £19 Basic (2 simpler meals), £29 Classic (current product), £39 Chef's Table (premium ingredients + wine pairing). Email all current subscribers with the new options.",
      tradeoff_explanation: "Tier migration will confuse some subscribers and cause short-term churn, but we'll retain the price-sensitive segment we're currently losing.",
      tradeoffs: ['Revenue drops short-term', 'Existing customers confused'],
      ripple_choice: 'address_real_cause'
    },
    {
      name: 'Ctrl+Z', diagnosis: 'what', alignment: 'none',
      lever_ids: ['retention_value'],
      reasoning: 'Customer satisfaction craters in months 1-3. People love the idea but not the reality. The product runs out of novelty. We need escalating value.',
      intervention_desc: 'Build a 12-week "Cook Better" journey: weekly cooking challenges, skill badges, and exclusive seasonal recipes that unlock progressively. Make staying feel like progress.',
      tradeoff_explanation: "Building this takes 10+ weeks and the people leaving now won't wait — but the subscribers who discover it will become our most loyal cohort.",
      tradeoffs: ['Takes 3+ months to build', 'Customer satisfaction dips during transition'],
      ripple_choice: 'fix_discovery'
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
    'Look at the diagnoses. Same data, different interpretations. What made each team land where they did? Did the data drive your diagnosis — or did your intuition pick first and the data confirm?',
    'Find a team that diagnosed differently from you. Look at their consequence. Was their path better or worse? Or just... different?',
    'Every team\'s lever-pull improved something and worsened something else. Which team acknowledged the most honest trade-off?',
    "The CEO's theory was pricing. Marco's was UX. Sasha's was delivery. But the data also showed something none of them mentioned: customers who came through Ocado leave at more than double the rate of direct customers. Did any team catch this? What does it mean when the biggest clue isn't in anyone's theory?"
  ],

  long_term_reveal_note: "At 3 months, fixing the wrong customers looked like the worst revenue outcome. At 12 months, it's the only fix that compounded. Better-fit subscribers stayed longer, spent more, and referred others. Meanwhile, symptom-level fixes plateaued — and the WHY team's margin cuts are now actively hurting the business. <strong>Short-term revenue and long-term health are different leaderboards.</strong>",

  long_term_scenes: [
    {
      heading: 'Month 3',
      body: 'Fixing the wrong customers looked like the <em>worst</em> revenue outcome. Ocado inflow had stopped, signups were down sharply, and the WHO team was visibly behind.'
    },
    {
      heading: 'Month 12',
      body: 'It turns out to be the only fix that compounded. Better-fit subscribers stayed longer, spent more, and referred others — revenue quietly stacked up week after week.'
    },
    {
      heading: 'Meanwhile…',
      body: "Symptom-level fixes plateaued. The WHY team's margin cuts boosted cash at first but are now actively hurting the business."
    },
    {
      heading: 'Takeaway',
      body: 'Short-term revenue and long-term health are different leaderboards.'
    }
  ],

  teaching_punchline: "Short-term revenue and long-term health are different leaderboards.",

  admin_bucket_analysis: {
    what: {
      verdict: 'Contributing fix',
      core_idea: 'People sign up excited and drift in months 2-5. The product runs out of novelty.',
      pros: [
        'New features work for those who find them — engagement +40%, stay 40% longer.',
        'Sharper premium positioning creates a durable moat vs HelloFresh.'
      ],
      cons: [
        'Only 1 in 3 discover the features before deciding to leave.',
        '10 weeks of build; roadmap 6 weeks behind while HelloFresh ships a similar feature.'
      ]
    },
    who: {
      verdict: 'Structural answer',
      core_idea: 'Ocado customers leave at ~13%/mo. Direct customers leave at ~6%. Nobody on the leadership team brought this up.',
      winner_reason: 'The only path where revenue compounds. After a 3-month dip to £610K, MRR climbs to £710K at 12 months while every other path plateaus or goes backwards.',
      pros: [
        'Smoking gun hiding in plain sight — Ocado churn is 2× direct churn.',
        'Better-fit subscribers cook more, buy more add-ons, and refer others.'
      ],
      cons: [
        'New signups drop 30%; CAC rises from £38 to £44.',
        'Board sees flat growth at the exact worst moment.'
      ]
    },
    how: {
      verdict: 'Surface fix',
      core_idea: '71% on-time in new cities vs 94% in old. Marco\'s menu redesign doubled task time to 14 min.',
      pros: [
        'Two real, concrete gaps; on-time climbs to 89%, completion rates recover.',
        'Cross-team consensus — no political cost, no brand risk.'
      ],
      cons: [
        'Ocado cohort still churns at ~11% regardless of delivery quality.',
        'MRR essentially flat (£630K → £650K). Fixes the floor, not the ceiling.'
      ]
    },
    why: {
      verdict: 'Symptom chasing',
      core_idea: '34% say "too expensive." HelloFresh just cut 20%. Match or die.',
      pros: [
        'Loudest single cancellation reason — surface evidence the price-value gap is off.',
        '"Too expensive" complaints drop from 34% to 22%.'
      ],
      cons: [
        'Profit per box collapses; 12-month MRR falls to £560K — the only path going backwards.',
        '22% "delivery" and 28% "didn\'t cook" cancellations untouched — price was never causing those.'
      ]
    }
  },

  diagnosis_labels: {
    who:  { tag: 'WHO',  name: 'WHO — Wrong customers' },
    what: { tag: 'WHAT', name: 'WHAT — Value prop gap' },
    how:  { tag: 'HOW',  name: 'HOW — Delivery is broken' },
    why:  { tag: 'WHY',  name: 'WHY — Not viable' }
  },

  timers: {
    diagnosis: 600,
    intervention: 720
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
    default_base_mrr: 610000
  }

};
