// ============================================================
// SCENARIO: StrideClub
// Live group fitness app — engagement collapse despite flat MRR.
// Crisis type: engagement (weekly attendance 68% → 41%)
// Structural winner: WHY (Flat subscription pricing rewards disengagement)
// ============================================================

window.SCENARIOS = window.SCENARIOS || {};

window.SCENARIOS['strideclub_fitness'] = {

  meta: {
    slug: 'strideclub_fitness',
    display_name: 'StrideClub',
    industry: 'Fitness — live group classes',
    difficulty: 'medium',
    estimated_minutes: 50,
    tagline: 'Subscribers still paying. But almost nobody is showing up.'
  },

  company: {
    name: 'StrideClub',
    subtitle: 'Live group fitness · Toronto · Series A (CAD $6M) · 31 employees',
    currency_symbol: '$',
    baseline_mrr: 187000,
    baseline_mrr_label: '$187K',
    hero_image: '/images/strideclub_fitness.png',
    hero_caption: 'A live StrideClub session — scheduled-only, max eight per class, real trainer in real time.',
    founding_story: "Maya Osei founded <strong>StrideClub</strong> in 2022 after burning out on solo workout apps that never made her actually exercise. Her bet: make fitness <em>social and scheduled</em>. Live classes only — no on-demand. Max 8 people per class. Real trainer, real-time, real accountability. Two years later: 4,200 subscribers across CAD $39 and $59 plans, $187K MRR, glowing reviews, and a Series A that valued the company at $34M. Then the engagement chart turned. Subscribers are still paying. But weekly class attendance has collapsed from 68% to 41% in four months. Nobody is canceling — yet."
  },

  characters: [
    {
      initials: 'MO',
      name: 'Maya Osei',
      role: 'CEO & Founder',
      description: "Former Nike+ Run Club product lead. Believes the product is the catalog of trainers. Walks the studio floor every morning checking class booking dashboards.",
      crisis_title: 'Maya (CEO)',
      crisis_quote: "Our trainer roster has gotten stale. Members have done every popular trainer's classes 30 times. We need new faces, new formats, more variety. The catalog isn't deep enough to keep people excited.",
      avatar_color_key: 'what',
      crisis_border_key: 'what',
      alignment_id: 'maya',
      alignment_label: 'Maya (CEO)'
    },
    {
      initials: 'JT',
      name: 'Jordan Tae',
      role: 'Head of Product',
      description: "Joined from Peloton. Obsessive about the booking funnel. Built the slot-availability heatmap that the whole company watches.",
      crisis_title: 'Jordan (Product)',
      crisis_quote: "Popular classes fill within 40 minutes of opening. Engaged users are getting locked out — they go to book, see no slots, give up, and don't come back that week. Add more class slots and attendance recovers.",
      avatar_color_key: 'how',
      crisis_border_key: 'how',
      alignment_id: 'jordan',
      alignment_label: 'Jordan (Product)'
    },
    {
      initials: 'OM',
      name: 'Olu Mensah',
      role: 'Head of Data',
      description: "Joined 4 months ago from a fintech. Lives in cohort SQL queries. The first person to spot the attendance drop.",
      crisis_title: 'Olu (Data)',
      crisis_quote: "I modeled our unit economics this week and I can't sleep. We charge $39 flat. Trainer costs per attended class are $8. A member who takes 12 classes/month costs us $96 in trainer fees and pays $39 — we lose money on them. A lurker pays $39 and costs us nothing. Our pricing is silently rewarding disengagement. This isn't about $23 competitors — our revenue model is actively fighting our own product promise.",
      avatar_color_key: 'why',
      crisis_border_key: 'why',
      alignment_id: 'olu',
      alignment_label: 'Olu (Data)'
    }
  ],

  bmi_nodes: [
    {
      dimension: 'what',
      icon: 'V',
      position: 'top',
      title: 'Live, scheduled, small-group fitness classes',
      description: 'Max 8 per class, real trainer over Zoom-like video, no on-demand. "Show up or miss it."'
    },
    {
      dimension: 'why',
      icon: '$',
      position: 'bottom-left',
      title: 'Monthly subscription — $39 Solo or $59 Plus',
      description: 'Solo: 4 classes/month. Plus: unlimited. Annual prepay 20% off. No on-demand library.'
    },
    {
      dimension: 'how',
      icon: 'H',
      position: 'bottom-right',
      title: 'Mobile app + browser, in-house trainer roster',
      description: '24 contracted trainers, mostly Toronto and NYC. Booking opens 7 days ahead. Reminder texts.'
    },
    {
      dimension: 'who',
      icon: 'W',
      position: 'center',
      title: 'Adults 28-45 who can\'t make themselves work out alone',
      description: ''
    }
  ],

  ecosystem: {
    viewBox: '0 0 700 360',
    nodes: [
      { id: 'subs',     label_lines: ['4,200', 'Subscribers'],          emoji: '&#129304;', cx: 100, cy: 120, r: 38, stroke: 1.8 },
      { id: 'studio',   label_lines: ['StrideClub'],                     subtitle: 'App + Live Studio', emoji: '&#127947;', cx: 350, cy: 180, r: 44, stroke: 2.2 },
      { id: 'trainers', label_lines: ['24 Live', 'Trainers'],            emoji: '&#129489;', cx: 600, cy: 120, r: 36, stroke: 1.8 },
      { id: 'cohorts',  label_lines: ['Class', 'Cohorts'],               emoji: '&#128101;', cx: 600, cy: 280, r: 32, stroke: 1.5 },
      { id: 'community',label_lines: ['Member', 'Community'],            emoji: '&#128172;', cx: 100, cy: 280, r: 32, stroke: 1.5 }
    ],
    edges: [
      { type: 'money', label: '$39-59/MO',         x1: 138, y1: 112, x2: 304, y2: 168, text_x: 210, text_y: 128 },
      { type: 'goods', label: 'LIVE CLASSES',      x1: 304, y1: 180, x2: 138, y2: 128, text_x: 210, text_y: 168 },
      { type: 'money', label: 'CONTRACTED FEES',   x1: 396, y1: 168, x2: 562, y2: 112, text_x: 478, text_y: 128 },
      { type: 'goods', label: 'TEACH LIVE',        x1: 562, y1: 128, x2: 396, y2: 180, text_x: 478, text_y: 168 },
      { type: 'data',  label: 'SHARED SESSIONS',   x1: 568, y1: 272, x2: 392, y2: 198, text_x: 500, text_y: 248 },
      { type: 'goods', label: 'CHAT + SUPPORT',    x1: 134, y1: 272, x2: 310, y2: 198, text_x: 200, text_y: 248 }
    ],
    glossary: [
      { term: 'Live-only', description: "StrideClub deliberately ships no on-demand library. Every class is scheduled, booked, and capped at 8 attendees. Miss it and it's gone — that's the product." },
      { term: 'Cohort', description: "The set of people in a given class slot. Right now StrideClub treats cohorts as anonymous — the system doesn't try to put the same people together each week. Members see who's in a class only when they join the call." }
    ]
  },

  health_metrics: [
    { value: '4,200',   label: 'Active subscribers' },
    { value: '$187K',   label: 'Monthly recurring revenue' },
    { value: '41%',     label: 'Weekly class attendance' },
    { value: '24',      label: 'Live trainers' },
    { value: '18 mo',   label: 'Avg subscriber lifetime' },
    { value: '4.7',     label: 'App store rating' }
  ],

  crisis: {
    crisis_type: 'engagement',
    metric_label: 'Weekly class attendance',
    before: '68%',
    after: '41%',
    impact_html: 'Subscribers are still paying — MRR is flat at $187K. But weekly class attendance has collapsed from 68% to 41% over 4 months. People are quietly disengaging.<br><strong style="color: var(--color-danger);">The product promise is breaking before the revenue does. When it shows up in MRR, it will be too late to fix.</strong>',
    runway_line: "Series B conversations start in 6 months. The engagement chart is the chart investors will ask about.",
    recap_crisis: "Weekly attendance fell from 68% to 41% in 4 months. MRR is still flat because nobody is canceling — yet. The product promise (live, social, accountable fitness) is hollowing out from the inside.",
    recap_hidden_clue: "Gross margin per subscriber is 4x higher on disengaged members. At $39 flat with trainer costs of $8/attended class, every lurker is a cash machine and every enthusiast is a loss leader. StrideClub's pricing silently rewards the exact behavior that kills the product promise."
  },

  data_table: [
    { fact: 'Weekly active class attendance',                   numbers: '41% (was 68%)',                                                                                  points_toward: 'ambiguous', points_label: 'The crisis metric' },
    { fact: 'Subscribers who book but don\'t show up',          numbers: 'No-show rate up from 9% to 27%',                                                                  points_toward: 'ambiguous', points_label: 'Engagement breakdown' },
    { fact: 'Average rating per trainer (last 90 days)',        numbers: '4.6 (no change from a year ago)',                                                                points_toward: 'what', points_label: 'Trainers still rated well (against WHAT)' },
    { fact: 'Peak class slot fill rate',                        numbers: 'Top trainers fill 100% in 38 min · 60% of slots never fill',                                     points_toward: 'how', points_label: 'Slot scarcity uneven (HOW)' },
    { fact: 'Gross margin by engagement level',                 numbers: 'Lurkers (0-2 classes/mo): +$39/mo · Engaged (10+ classes/mo): -$57/mo',                            points_toward: 'why', points_label: 'Pricing rewards disengagement (WHY)' },
    { fact: 'Attendance by peer-overlap (cohort consistency)',  numbers: '4+ recurring peers: 78% attend · Different peers each time: 44% attend',                         points_toward: 'who', points_label: 'Peer consistency matters some (WHO)' },
    { fact: 'Competitor pricing effect on cancellations',       numbers: 'Cancels mentioning price: 6% of churn (no change)',                                              points_toward: 'ambiguous', points_label: 'Price isn\'t cited in churn — but flat subs still mis-align incentives' },
    { fact: 'Why members say they stopped attending (survey)',  numbers: '34% "schedule got crazy" · 28% "couldn\'t book what I wanted" · 22% "lost momentum" · 16% other', points_toward: 'ambiguous', points_label: 'Mostly self-blame' }
  ],

  case_data_viz: [
    {
      type: 'tiles',
      title: 'Engagement collapse',
      sub: 'last 4 months',
      tiles: [
        { label: 'Weekly attendance',  value: '41%',   delta: '−27 pts vs 68%', delta_dir: 'down', alert: true },
        { label: 'Booked-but-no-show', value: '27%',   delta: '+18 pts vs 9%',  delta_dir: 'down', alert: true },
        { label: 'MRR',                value: '$187K', delta: 'flat — nobody cancelled yet' },
        { label: 'Active subscribers', value: '4,200', delta: 'flat' }
      ]
    },
    {
      type: 'bars',
      title: 'Gross margin · per subscriber, by engagement',
      sub: 'flat $39 sub, $8 per attended class',
      max: 100,
      bars: [
        { label: 'Lurkers (0–2 classes/mo)',   value: 100, display: '+$39', color: 'good', bar_pct: 100 },
        { label: 'Engaged (10+ classes/mo)',   value: 100, display: '−$57', color: 'warn', bar_pct: 60  }
      ],
      caption: 'The pricing model <strong>silently rewards disengagement</strong>. Every lurker is a cash machine; every enthusiast is a loss leader. The healthier the product promise, the worse the unit economics.'
    },
    {
      type: 'bars',
      title: 'Class slot fill · top vs rest',
      max: 100,
      bars: [
        { label: 'Top trainer slots',     value: 100, display: '100% in 38m', color: 'warn'  },
        { label: 'Other slots (60% of catalog)', value: 0, display: 'never fill', color: 'muted', bar_pct: 4 }
      ],
      caption: 'Top trainers fill <strong>100% in under 40 minutes</strong> — engaged members get mechanically locked out unless they\'re refreshing the app at the drop. The other 60% of slots never fill.'
    },
    {
      type: 'bars',
      title: 'Attendance · by peer-overlap',
      sub: 'cohort consistency',
      max: 100,
      bars: [
        { label: '4+ recurring peers',    value: 78, display: '78%', color: 'good' },
        { label: 'Different peers each time', value: 44, display: '44%', color: 'warn' }
      ],
      caption: 'Members with consistent peers attend at <strong>~1.8×</strong> the rate. StrideClub treats cohorts as anonymous — the system doesn\'t try to put the same people together each week.'
    },
    {
      type: 'bars',
      title: 'Why they stopped attending · exit survey',
      max: 100,
      bars: [
        { label: '"Schedule got crazy"',         value: 34, display: '34%', color: 'muted' },
        { label: '"Couldn\'t book what I wanted"', value: 28, display: '28%', color: 'warn'  },
        { label: '"Lost momentum"',              value: 22, display: '22%', color: 'muted' },
        { label: 'Other',                        value: 16, display: '16%', color: 'muted' }
      ],
      caption: 'Trainer ratings are stable at <strong>4.6/10</strong> — the product itself isn\'t broken. Only <strong>6%</strong> of churn cites price (no change). Members blame themselves, not the system.'
    }
  ],

  diagnosis_options: [
    { dimension: 'who',  title: 'Wrong target user mental model', description: 'Peer consistency matters — members with recurring peers attend more. Perhaps StrideClub should reorient around cohorts rather than individual class-shoppers.' },
    { dimension: 'what', title: 'Catalog too shallow',            description: 'The roster of trainers and class formats has gone stale. Members have done every popular class so many times that the product feels played out. Refresh the catalog.' },
    { dimension: 'how',  title: 'Booking system broken',          description: 'Top classes fill within 40 minutes, locking out everyone who can\'t check the app at 9 AM. Engaged members are being mechanically blocked from attending.' },
    { dimension: 'why',  title: 'Revenue model misaligned',       description: 'Flat $39 subscription rewards lurkers and penalises engaged members. The business makes more money the less subscribers attend — a revenue model in direct conflict with the product promise.' }
  ],

  levers: {
    who: [
      {
        id: 'cohort_matching',
        title: 'Build explicit "your usual crew" cohort matching',
        effectiveness: 3,
        desc: 'Match subscribers into stable groups of 6-8 who book the same time slots together every week. Make their cohort visible. "Your Tuesday 7am crew is waiting for you."',
        lever_narrative: 'Cohort matching transformed the product. Within 12 weeks, attendance climbed back to 73% — past the pre-crisis level. Members started recognizing each other, exchanging encouragements in chat, and texting absentees. The product was always social; it just hadn\'t been intentional about it.'
      },
      {
        id: 'accountability_groups',
        title: 'Launch accountability partners feature',
        effectiveness: 2,
        desc: 'Pair up subscribers who attend at similar levels. Notify when a partner books a class. Build streak tracking around the pair, not the individual.',
        lever_narrative: 'Accountability pairs lifted attendance about 18% within 8 weeks for opted-in users. But adoption was uneven — only ~40% of subscribers opted in, and the lift was concentrated there. A real signal about peer commitment, but not the full transformation.'
      },
      {
        id: 'team_subscriptions',
        title: 'Sell "team" subscriptions to friend groups',
        effectiveness: 2,
        desc: 'Offer a discounted plan for groups of 4 friends who sign up together and commit to the same weekly slot. Sell to social units, not individuals.',
        lever_narrative: 'Team subscriptions started slow but grew steadily. After 12 weeks, 18% of new signups were team plans, and they attended at 84%. The hard part: they also gave the cheapest discount, so revenue grew slower than engagement.'
      },
      {
        id: 'corporate_wellness',
        title: 'Pivot to corporate wellness programs',
        effectiveness: 1,
        desc: "Sell to HR teams for employee wellness. Companies pay, employees attend in shared time slots — built-in cohort, built-in commitment.",
        lever_narrative: 'The corporate wellness pivot landed two early contracts but required hiring sales and rebuilding billing for B2B. The economics work long-term, but the first 6 months were a distraction from the core product, and consumer subscribers felt deprioritized.'
      },
      {
        id: 'remove_solo_users',
        title: 'Filter out users who never engage',
        effectiveness: 1,
        desc: 'Identify subscribers who never engaged with cohorts and pause their accounts. Better to have 3,000 engaged members than 4,200 lurkers.',
        lever_narrative: "Filtering inactive users improved the engagement metric on paper, but it dropped MRR fast and angered some loyal but quiet subscribers. The optics — 'you got kicked off your fitness app' — didn\'t play well. Real signal, wrong instrument."
      }
    ],
    what: [
      {
        id: 'expand_trainers',
        title: 'Expand trainer roster to 50',
        effectiveness: 2,
        desc: 'Hire 26 more trainers across more time zones, new specialties (yoga, mobility, dance), and new formats. Refresh the catalog.',
        lever_narrative: 'Expanding the roster brought a small spike in bookings but didn\'t move attendance. New trainers got rated similarly to existing ones. The catalog wasn\'t the bottleneck — engaged users had favorite trainers and just stopped showing up regardless.'
      },
      {
        id: 'new_formats',
        title: 'Launch new class formats',
        effectiveness: 2,
        desc: "Add HIIT, dance fitness, prenatal, recovery, and meditation as distinct class types. Give the product more 'shapes' for different moods.",
        lever_narrative: 'New formats created marketing moments and short bursts of new bookings, but attendance for the new formats faded after 3-4 weeks. The novelty didn\'t convert to commitment.'
      },
      {
        id: 'celebrity_trainers',
        title: 'Sign celebrity trainers',
        effectiveness: 1,
        desc: "Spend on bringing in 2-3 well-known fitness personalities to teach exclusive classes. Create star power.",
        lever_narrative: "The celebrity trainers attracted PR and a flurry of new signups, but the new members behaved like one-time tourists. The classes were great and full, but they didn't change the underlying engagement pattern. And the trainer fees ate the marketing budget."
      },
      {
        id: 'on_demand_library',
        title: 'Launch an on-demand video library',
        effectiveness: 1,
        desc: "Record top classes and add an on-demand library. Give people something to do when they can't make a live class.",
        lever_narrative: "Adding on-demand contradicted the core product promise. Members started using the recordings as a convenient fallback — and engagement with live classes fell further. The thing that made StrideClub special (\"miss it and it's gone\") was the thing now being undermined."
      },
      {
        id: 'member_led_classes',
        title: 'Member-led classes',
        effectiveness: 2,
        desc: "Let advanced members lead casual peer classes. Lower barrier to creation. More slots, more variety, peer-built community.",
        lever_narrative: 'Member-led classes turned out to be unexpectedly popular — they accidentally created the cohort effect, since member-led sessions tend to attract repeat attendees. But quality control was inconsistent, and a few bad sessions hurt the brand.'
      }
    ],
    how: [
      {
        id: 'add_class_slots',
        title: 'Double the number of weekly class slots',
        effectiveness: 2,
        desc: "Schedule more classes across more times. Reduce the booking scarcity that locks engaged members out of the slots they want.",
        lever_narrative: 'Doubling the slots reduced lockouts and made the booking system feel less scarce. Booking attempts succeeded more often. But attendance ticked up only modestly — the people who wanted to book got their slots, but they still didn\'t show up most weeks. The bottleneck wasn\'t access.'
      },
      {
        id: 'rolling_releases',
        title: 'Stagger booking windows by member tier',
        effectiveness: 1,
        desc: "Open booking earlier for high-attendance members. Reward engagement with first-pick access.",
        lever_narrative: "Tiered booking made high-engagement members happier and locked in their habits, but it angered everyone else. Lower-engagement members felt punished, attendance dropped further among them, and customer service dealt with weeks of complaints."
      },
      {
        id: 'reminder_engine',
        title: 'Build a smart reminder + nudge engine',
        effectiveness: 2,
        desc: "Send targeted reminders 24h, 2h, and 30min before booked classes. Detect at-risk members and intervene with personalized prompts.",
        lever_narrative: 'The smart reminder engine reduced no-shows from 27% to 18% in 6 weeks. A real, measurable win — but the underlying weekly attendance drop barely budged because the people who weren\'t booking at all weren\'t getting reminded.'
      },
      {
        id: 'overbook_system',
        title: 'Allow overbooking with auto-fill from waitlist',
        effectiveness: 2,
        desc: 'Accept bookings beyond capacity and auto-promote waitlist members when no-shows are predicted. Maximize seat utilization.',
        lever_narrative: 'Overbooking improved seat utilization in popular classes from 76% to 89%, and members noticed — the product felt more available. But the number of unique attendees per week stayed similar. The same engaged users were attending more often, the rest still drifted.'
      },
      {
        id: 'mobile_redesign',
        title: 'Rebuild the mobile app',
        effectiveness: 1,
        desc: 'Redesign the mobile booking experience from scratch — faster, fewer taps, better notifications.',
        lever_narrative: 'The mobile redesign improved app store ratings and reduced friction in booking. Engagement among new members held up slightly better, but the deep behavior change StrideClub needed didn\'t happen from a UX redesign.'
      }
    ],
    why: [
      {
        id: 'commitment_bond',
        title: 'Launch commitment-bond pricing',
        effectiveness: 3,
        desc: "Let members set a weekly attendance goal and deposit a bond. Attend → refund in full + a streak reward. Miss → the bond flows to their cohort pool. Revenue and attendance finally point the same direction.",
        lever_narrative: "Commitment-bond pricing realigned every incentive. Members who opted in attended at 82% (vs 41% baseline) because the pricing itself became the accountability mechanism. Gross margin on engaged members turned positive because the bond priced in trainer cost properly. Over 12 months, engagement became the product's pricing moat — competitors at $23 couldn't replicate it without a different model."
      },
      {
        id: 'usage_pricing',
        title: 'Switch to pay-per-class',
        effectiveness: 2,
        desc: 'Drop the subscription. Charge $8 per class. Let people use it like a class pass app.',
        lever_narrative: "Pay-per-class aligned cost-to-attendance cleanly and removed the margin penalty on engaged members. Engagement held steady. But it introduced revenue volatility and some casual members never came back without a 'use-it-or-lose-it' reason. A directionally correct move, executed with a blunt instrument."
      },
      {
        id: 'launch_cheap_tier',
        title: 'Launch a $23 entry tier',
        effectiveness: 1,
        desc: "Create a Lite plan at $23 with 2 classes/month to match the new competitors on price perception.",
        lever_narrative: "The $23 tier moved some Solo subscribers down to Lite — a downgrade — without bringing many new ones in. ARPU dropped, MRR dipped, and the cheaper tier didn't solve attendance because people on it engaged less, not more. Wrong problem diagnosed."
      },
      {
        id: 'free_classes',
        title: 'Make 1 class/week free for everyone',
        effectiveness: 1,
        desc: "Make one class/week free, paid only beyond that. Reduce financial friction and let the product earn its way to a paid relationship.",
        lever_narrative: "Free classes drove a 40% spike in signups for one month, then attendance for the free users dropped to 22% — much lower than paid members. Free users brought no commitment, and they crowded out engaged members from popular slots."
      },
      {
        id: 'annual_prepay',
        title: 'Push annual prepay hard',
        effectiveness: 1,
        desc: "Heavy discount on annual plans. Lock revenue in. Buy 12 months of stability while the team works on the underlying issues.",
        lever_narrative: 'Annual prepay collected upfront cash and stabilized the next 12 months — but it doubled down on the misaligned incentive (members who prepaid attended even less, knowing they were locked in). Deferred the problem, amplified it.'
      }
    ]
  },

  consequences: {
    who: {
      narrative: `<p>You diagnosed the problem as <strong>WHO</strong> — StrideClub thought it sold fitness classes, but the people who actually engaged were people who wanted accountability partners. Your intervention made the product explicitly about peer commitment.</p>
    <p>Three months later, the product is different. Cohort matching is live: subscribers are sorted into stable crews of 6-8 who attend the same time slots every week. The app shows "Your Tuesday 7am crew is waiting for you." Members started recognizing each other, posting in cohort chats, even texting absentees outside the app. Attendance climbed from 41% to 73% — past the pre-crisis baseline.</p>
    <p><span class="but">But.</span> Some subscribers — especially the schedule-flexible ones — disliked being assigned a "crew." About 12% churned because they wanted variety, not a fixed routine. And the trainer team had to adjust to seeing the same faces every week, which some loved and some found constraining. Maya is fielding calls from her favorite trainers about retention.</p>
    <p>MRR climbed from $187K to $179K (slight dip from churn) but the engagement chart is the chart investors now want to see — and it's beautiful.</p>`,
      metrics: [
        { label: 'Weekly attendance',         value: '73%',           status: 'success' },
        { label: 'Subscriber count',          value: '-12% short-term', status: 'neutral' },
        { label: 'Monthly revenue',           value: '$179K',         status: 'neutral' },
        { label: 'In-app peer messages',      value: '+340%',         status: 'success' },
        { label: 'Repeat-attendance streaks', value: '+218%',         status: 'success' },
        { label: 'Trainer satisfaction',      value: 'Mixed',         status: 'neutral' }
      ],
      mrr: 179000,
      mrr12: 198000,
      ripple_question: "Cohorts are working. Some members and trainers are unhappy. The Series B narrative is now 'social fitness retention' instead of 'class booking app.' What's next?",
      ripple_options: [
        { id: 'double_down_cohorts', title: 'Double down on the cohort model', desc: "Reposition the entire brand around cohorts. Marketing, onboarding, app — everything is about your crew. Lean fully into the new product.", systems_score: 2 },
        { id: 'cohort_optional',     title: 'Make cohort matching optional',    desc: 'Keep cohorts as the default but offer a "free agent" mode for the schedule-flexible members. Try to keep both segments.', systems_score: 1 },
        { id: 'launch_corporate',    title: 'Launch corporate cohorts',         desc: 'Sell pre-built cohort programs to companies. Fitness with your coworkers. The product is naturally suited to it now.', systems_score: 2 },
        { id: 'protect_trainers',    title: 'Rebalance trainer schedules',      desc: "Address trainer concerns about repetitive faces. Rotate trainers across cohorts so they get variety while members keep their crew.", systems_score: 1 }
      ]
    },
    what: {
      narrative: `<p>You diagnosed the problem as <strong>WHAT</strong> — the catalog of trainers and class formats had gone stale. Your intervention refreshed the product offering.</p>
    <p>Three months later, StrideClub has 12 new trainers, four new formats (HIIT, dance, mobility, recovery), and a Pilates partnership. Marketing campaigns went out. The catalog page looks twice as rich as before. Trainer ratings are still strong.</p>
    <p><span class="but">But.</span> Weekly attendance only ticked up to 49%. The new formats had short engagement bursts and then faded. New trainers got rated as well as old ones — but engaged users went back to their favorite trainers and the rest still didn't show up. Maya's instinct was wrong about the catalog being stale; the catalog was fine. The thing that was breaking didn't live in the product offering at all.</p>
    <p>Meanwhile, the cost of contracting 12 new trainers ate $40K of the marketing budget for the next quarter.</p>`,
      metrics: [
        { label: 'Weekly attendance',     value: '49%',           status: 'neutral' },
        { label: 'Trainer roster size',   value: '+50%',          status: 'success' },
        { label: 'Monthly revenue',       value: '$194K',         status: 'success' },
        { label: 'Marketing budget',      value: 'Spent ahead',   status: 'danger' },
        { label: 'New format adoption',   value: 'Spike then fade', status: 'neutral' },
        { label: 'Subscriber count',      value: '+4%',           status: 'success' }
      ],
      mrr: 194000,
      mrr12: 208000,
      ripple_question: "More content didn't move the needle much. Engagement is still well below the baseline. Where do you turn next?",
      ripple_options: [
        { id: 'investigate_who',    title: 'Look at the cohort data',         desc: "If catalog isn't the lever, dig into the data again. The peer-cohort attendance gap is strange. Investigate what makes engaged members different.", systems_score: 2 },
        { id: 'more_marketing',     title: 'More marketing, more content',     desc: 'Push harder on the new formats. Maybe the message just hasn\'t reached enough people. Spend on a brand campaign.', systems_score: 0 },
        { id: 'cut_underperformers',title: 'Trim underperforming trainers',   desc: 'Some new trainers are getting low ratings. Cut the bottom 6 and tighten the catalog before the costs spiral.', systems_score: 1 },
        { id: 'study_engaged',      title: 'Interview the engaged members',    desc: "Stop guessing. Talk to the 41% who are still showing up every week. Find out what the product means to them.", systems_score: 2 }
      ]
    },
    how: {
      narrative: `<p>You diagnosed the problem as <strong>HOW</strong> — the booking system was locking engaged members out, and Jordan's heatmap showed the constraint. Your intervention reworked the booking system.</p>
    <p>Three months later, the schedule has 80% more class slots, the smart reminder engine reduces no-shows, and the overbooking system fills empty seats. The booking experience feels generous instead of scarce. App store reviews mention how "easy it is to find a class" again.</p>
    <p><span class="but">But.</span> Weekly attendance only climbed to 53%. The booking constraint was real but partial. The deeper truth: most members who weren't booking weren't being blocked by capacity — they were drifting. They didn't open the app to fail at booking; they didn't open the app at all. A booking system can't fix a commitment problem.</p>
    <p>The reminder engine did help — no-show rate dropped from 27% to 18%. A real win, but not the structural fix StrideClub needs.</p>`,
      metrics: [
        { label: 'Weekly attendance',     value: '53%',           status: 'neutral' },
        { label: 'No-show rate',          value: '18% (was 27%)', status: 'success' },
        { label: 'Monthly revenue',       value: '$199K',         status: 'success' },
        { label: 'Class slots/week',      value: '+82%',          status: 'success' },
        { label: 'Booking lockouts',      value: 'Down 75%',      status: 'success' },
        { label: 'Underlying engagement', value: 'Largely unchanged', status: 'danger' }
      ],
      mrr: 199000,
      mrr12: 214000,
      ripple_question: "The booking system works beautifully now. People still aren't showing up. What's the next move?",
      ripple_options: [
        { id: 'investigate_who',    title: 'Investigate why engaged members are different', desc: "The booking issue is fixed but engagement still drifts. Dig into what makes the highly-engaged 30% behave differently. Cohort data is suspicious.", systems_score: 2 },
        { id: 'slash_inactive',     title: 'Cut inactive subscribers',          desc: 'Stop subsidizing lurkers. Pause accounts of subscribers who haven\'t attended in 60 days — recover MRR and clean the funnel.', systems_score: 0 },
        { id: 'reengagement_emails',title: 'Run a re-engagement campaign',     desc: 'Send personalized "we miss you" emails with discounted classes to the drifters. Try to spark them back into the habit.', systems_score: 1 },
        { id: 'live_only_messaging',title: 'Double down on live-only messaging', desc: 'Remind members why they signed up. Bring back the "miss it and it\'s gone" energy in marketing. Make absence feel like loss.', systems_score: 1 }
      ]
    },
    why: {
      narrative: `<p>You diagnosed the problem as <strong>WHY</strong> — competitors at $23 were making StrideClub look expensive. Your intervention changed the pricing and packaging.</p>
    <p>Three months later, StrideClub has a $23 Lite tier (2 classes/month), the marketing emphasizes value, and the company even ran a one-month free promotion to defend market share. New signups jumped 35% during the promo. Olu is happy — the price defense worked at the top of the funnel.</p>
    <p><span class="but">But.</span> Engagement got worse. The new $23 subscribers attended at 22%, dragging the company average down to 35%. Existing $39 subscribers downgraded to Lite when they realized they'd been paying for classes they weren't using anyway. Free promo users mostly didn't convert. ARPU collapsed and MRR climbed slightly to $201K, almost entirely from the volume of cheap subscriptions.</p>
    <p>Worst of all: the engagement chart is now even harder to fix. The new low-tier members are even less engaged than the original drifters, and they're a third of the subscriber base. The product is becoming a Netflix-style fitness app it was never meant to be.</p>`,
      metrics: [
        { label: 'Weekly attendance',     value: '35%',           status: 'danger' },
        { label: 'Monthly revenue',       value: '$201K',         status: 'success' },
        { label: 'ARPU per subscriber',   value: 'Down 31%',      status: 'danger' },
        { label: 'New signups (3mo)',     value: '+35%',          status: 'success' },
        { label: 'Lite-tier engagement',  value: '22%',           status: 'danger' },
        { label: 'Original promise',      value: 'Diluted',       status: 'danger' }
      ],
      mrr: 192000,
      mrr12: 268000,
      ripple_question: "Pricing didn't fix the real problem and made it worse. The brand is drifting. Where do you go from here?",
      ripple_options: [
        { id: 'reverse_pricing',    title: 'Roll back the pricing change',     desc: 'Admit pricing wasn\'t the problem. Sunset Lite, restore the $39 floor, and refocus on engagement. Painful but honest.', systems_score: 2 },
        { id: 'fix_engagement',     title: 'Fix engagement at all costs',       desc: 'Stop tweaking pricing. Address the real issue: members are drifting. Dig into the cohort data and rebuild around peer commitment.', systems_score: 2 },
        { id: 'embrace_netflix',    title: 'Become a Netflix-style fitness app', desc: 'Lean into being cheap and content-rich. Add on-demand. Compete on price and library size. Different product, but maybe a survivable one.', systems_score: 0 },
        { id: 'more_pricing_tests', title: 'Run more pricing experiments',      desc: "Test 4 more price points and packaging combinations. Maybe the right combination is still out there.", systems_score: 0 }
      ]
    }
  },

  simulated_teams: [
    {
      name: 'Cohort Crew', diagnosis: 'who', alignment: 'none',
      lever_ids: ['cohort_matching'],
      reasoning: "Look at the attendance-by-cohort data. 91% vs 38%. That's not a small effect — that's the entire signal. The product is accidentally social and we should make it intentionally social.",
      intervention_desc: 'Build explicit cohort matching: stable crews of 6-8 people who attend the same time slots together. Show their cohort in the app. Notify members when their crew is gathering. Make the social commitment the product.',
      tradeoff_explanation: "Some flexibility-loving members will leave because they don't want a fixed crew. But the engaged members will become much more engaged, and that's what investors want to see in the chart.",
      tradeoffs: ['Existing customers confused', 'Internal resistance'],
      ripple_choice: 'double_down_cohorts'
    },
    {
      name: 'Catalog Refresh', diagnosis: 'what', alignment: 'maya',
      lever_ids: ['expand_trainers'],
      reasoning: "Maya's right — members have done every popular trainer's classes 30+ times. The product needs more variety. New trainers, new formats, new energy.",
      intervention_desc: 'Hire 26 more trainers, launch 4 new class formats, partner with a Pilates studio, run a "Spring Schedule Refresh" marketing campaign. Make the catalog feel twice as rich.',
      tradeoff_explanation: "Marketing budget will be tight after the expansion costs, but if Maya is right about catalog fatigue, the new trainers will pay back within a quarter.",
      tradeoffs: ['Operating costs increase', 'Customer satisfaction dips during transition'],
      ripple_choice: 'study_engaged'
    },
    {
      name: 'Slot Surge', diagnosis: 'how', alignment: 'jordan',
      lever_ids: ['add_class_slots'],
      reasoning: "Jordan's heatmap is clear: top classes fill in 38 minutes. Engaged members are getting locked out. Double the slots and the engaged members come back.",
      intervention_desc: 'Add 80% more class slots across the schedule. Build a smart reminder engine. Add overbooking with auto-fill from waitlist. Make the booking experience generous and frictionless.',
      tradeoff_explanation: "We'll need to contract more trainer hours which raises operating costs, but if access is the bottleneck this is the cleanest fix.",
      tradeoffs: ['Operating costs increase', 'Takes 3+ months to build'],
      ripple_choice: 'investigate_who'
    },
    {
      name: 'Lite Year', diagnosis: 'why', alignment: 'olu',
      lever_ids: ['launch_cheap_tier'],
      reasoning: 'Olu found two competitors at $23. We look expensive next to a Netflix-priced fitness app. We need a Lite tier to defend the funnel before this becomes a cancellation wave.',
      intervention_desc: "Launch a $23 Lite tier with 2 classes/month. Run a one-month free promotion to attract trial users. Update the marketing to emphasize value vs the new $23 competitors.",
      tradeoff_explanation: "ARPU will drop and the brand will get cheaper-feeling, but if we lose the price war this becomes a death spiral.",
      tradeoffs: ['Revenue drops short-term', 'Existing customers confused'],
      ripple_choice: 'more_pricing_tests'
    },
    {
      name: 'Star Power', diagnosis: 'what', alignment: 'none',
      lever_ids: ['celebrity_trainers'],
      reasoning: "We need a brand moment. Sign 2-3 well-known fitness personalities, get press, drive a wave of new signups. Quality content brings members back.",
      intervention_desc: "Sign 3 celebrity trainers on exclusive deals. Build a launch campaign around them. Premium classes only available to subscribers. Bet on the brand uplift creating viral attention.",
      tradeoff_explanation: "Trainer fees will eat the marketing budget, but the press coverage and signups should compensate even if the engagement numbers don't move directly.",
      tradeoffs: ['Operating costs increase', 'Acquisition cost increases'],
      ripple_choice: 'more_marketing'
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
    'Same data, different diagnoses. What pulled each team toward their diagnosis? Was it the data or the loudest voice in the room?',
    'Find a team that diagnosed differently from you. Compare your consequence to theirs. What did each path cost, and what did each path buy?',
    "MRR was flat across all four diagnoses for the first three months — but the 12-month numbers diverge sharply. Why do interventions that look similar at 3 months produce wildly different outcomes by month 12?",
    "Maya thought it was the catalog. Jordan thought it was the booking system. Olu saw it clearest: the revenue model was rewarding disengagement. $8 trainer cost per class + $39 flat subscription means every attended class is a loss and every lurker is pure margin. Did your team see how the pricing model itself was the bug? What does it say when the most boring-sounding diagnosis is the most structural one?"
  ],

  long_term_reveal_note: "At 3 months, all four interventions look broadly comparable. By month 12, the WHY path is the only one that compounds. Commitment-bond pricing realigned the incentive: members now paid more when they attended more, turning engagement into the revenue driver it always should have been. The catalog, booking, and cohort fixes improved the experience around the edges — but they couldn't undo the gravitational pull of a pricing model that silently rewarded disengagement. <strong>When your revenue model and your product promise point in opposite directions, no amount of feature work will fix it. Pricing design is product design.</strong>",

  long_term_scenes: [
    {
      heading: 'Month 3',
      body: 'All four interventions look broadly comparable. Any team would feel like theirs was working.'
    },
    {
      heading: 'Month 12',
      body: 'The WHY path is the only one that compounds. Commitment-bond pricing realigned the incentive — members now pay more when they attend more, turning engagement into the revenue driver it always should have been.'
    },
    {
      heading: 'What didn\u2019t compound',
      body: "Catalog, booking, and cohort fixes improved the experience around the edges — but they couldn't undo the gravitational pull of a pricing model that silently rewarded disengagement."
    },
    {
      heading: 'Takeaway',
      body: 'When your revenue model and your product promise point in opposite directions, no amount of feature work will fix it. <strong>Pricing design is product design.</strong>'
    }
  ],

  teaching_punchline: "Pricing design is product design.",

  admin_bucket_analysis: {
    what: {
      verdict: 'Misdiagnosis',
      core_idea: "Members have done every popular trainer's classes 30 times. Refresh the catalog.",
      pros: [
        'Fastest, cheapest, lowest-risk move — Maya owns it, team has a story.',
        'Subscriber count +4% during the campaign; marketing has a fresh message.'
      ],
      cons: [
        'Data contradicts the theory: trainer ratings unchanged at 4.6/5. The catalog was never the problem.',
        'Spike-then-fade on new formats (41% → 49%); $40K of next quarter\'s marketing burned.'
      ]
    },
    who: {
      verdict: 'Strong but partial',
      core_idea: 'Members with 4+ recurring peers attend at 78%. Different peers each time, 44%. The product is accidentally social.',
      pros: [
        'Attendance climbs past pre-crisis baseline to 73%; in-app messages +340%.',
        'Reframes the Series B story from "class app" to "social fitness retention."'
      ],
      cons: [
        '~12% churn from schedule-flexible members who don\'t want a fixed crew.',
        "Doesn't touch the economic bug — more engagement still means more losses at $39 flat."
      ]
    },
    how: {
      verdict: 'Contributing fix',
      core_idea: 'Top classes fill in 38 min; 60% of slots never fill. Engaged members get locked out.',
      pros: [
        'Real operational constraint; no-show 27% → 18%, lockouts -75%.',
        'No political cost — nobody opposes more slots and better booking.'
      ],
      cons: [
        "Most drifters aren't failing to book — they're not opening the app at all.",
        'More slots = more trainer hours = deeper margin bleed at $39 flat pricing.'
      ]
    },
    why: {
      verdict: 'Structural answer',
      core_idea: 'At $39 flat and $8/class trainer cost, every engaged member is a loss and every lurker is pure margin. The pricing model fights the product promise.',
      winner_reason: 'The only path that compounds. 12-month MRR reaches $268K vs $198-214K for the others — when pricing aligns with engagement, both revenue and the product promise move together.',
      pros: [
        "Sharpest diagnosis in the room: Olu's unit economics are unambiguous — the revenue model is the bug.",
        'Commitment-bond pricing turns engagement into revenue instead of cost.'
      ],
      cons: [
        'Lite-tier variant is a trap in the same bucket: attendance drops to 35%, product dilutes.',
        'Longest path to ship — billing, messaging, and app all have to move together.'
      ]
    }
  },

  diagnosis_labels: {
    who:  { tag: 'WHO',  name: 'WHO — Wrong target user mental model' },
    what: { tag: 'WHAT', name: 'WHAT — Catalog too shallow' },
    how:  { tag: 'HOW',  name: 'HOW — Booking system broken' },
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
    default_base_mrr: 187000
  }

};
