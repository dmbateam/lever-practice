// ============================================================
// SCENARIO: Gridline
// SaaS freemium — design systems platform challenged by conversion decline.
// Crisis type: conversion (free-to-paid 18% → 9%)
// Structural winner: WHO (Freemium math only works for design teams, not solo)
// ============================================================

window.SCENARIOS = window.SCENARIOS || {};

window.SCENARIOS['gridline_saas'] = {

  meta: {
    slug: 'gridline_saas',
    display_name: 'Gridline',
    industry: 'SaaS — design systems',
    difficulty: 'medium',
    estimated_minutes: 50,
    tagline: 'Free signups still climbing. Paid signups falling off a cliff.'
  },

  company: {
    name: 'Gridline',
    subtitle: 'Design systems SaaS · Amsterdam · Seed (€2.4M) · 18 employees',
    currency_symbol: '€',
    baseline_mrr: 94000,
    baseline_mrr_label: '€94K',
    hero_image: '/images/gridline_saas.png',
    hero_caption: 'The Gridline design-systems platform — versioned tokens, Figma sync, and code export for frontend teams.',
    founding_story: "Lena Brandt and Daan Visser met at a Berlin design conference in 2022, both frustrated that every design team they'd worked with rebuilt the same component library from scratch. They launched <strong>Gridline</strong> in 2023 — a design systems platform with versioned tokens, Figma sync, and code export. Two years later: 8,400 free users, 1,200 paying users, €94K MRR, and a Sequoia partner asking when they'll close their Series A. The product is sticky. The reviews are glowing. But something is breaking in the funnel."
  },

  characters: [
    {
      initials: 'LB',
      name: 'Lena Brandt',
      role: 'CEO & Co-founder',
      description: "Former design lead at Booking.com. Drives growth metrics every Monday. Believes the freemium model is broken because the gap between free and paid feels arbitrary.",
      crisis_title: 'Lena (CEO)',
      crisis_quote: "We're priced wrong. Pro at €19 doesn't feel like 'pay for the upgrade' — it feels like 'why am I being asked for €19?' Either drop Pro to €9 or make most of Pro free. The funnel is bleeding because the price-value perception is off.",
      avatar_color_key: 'why',
      crisis_border_key: 'why',
      alignment_id: 'lena',
      alignment_label: 'Lena (CEO)'
    },
    {
      initials: 'DV',
      name: 'Daan Visser',
      role: 'Head of Product & Co-founder',
      description: "Builds the product. Obsessed with onboarding metrics and time-to-value. Refactored the empty-state experience three times this year.",
      crisis_title: 'Daan (Product)',
      crisis_quote: "The aha moment takes too long. New users have to set up tokens, link Figma, export their first component, and only then do they see why this matters. We need to compress that path or give them magic in 60 seconds.",
      avatar_color_key: 'what',
      crisis_border_key: 'what',
      alignment_id: 'daan',
      alignment_label: 'Daan (Product)'
    },
    {
      initials: 'PH',
      name: 'Pita Havili',
      role: 'Head of Growth',
      description: "Joined 5 months ago from Loom. Lives in Amplitude dashboards and wrote the company's first SQL queries. Found the conversion drop before anyone else.",
      crisis_title: 'Pita (Growth)',
      crisis_quote: "I've been digging into the upgrade flow. Desktop Safari users — about 40% of Pro clicks — hit a blank modal where the upgrade should be. And I found three other silent regressions shipped this year that nobody caught for weeks. We're not instrumented, and every release is a coin flip. Fix the bug, fix the monitoring, or we'll keep bleeding quietly.",
      avatar_color_key: 'how',
      crisis_border_key: 'how',
      alignment_id: 'pita',
      alignment_label: 'Pita (Growth)'
    }
  ],

  bmi_nodes: [
    {
      dimension: 'what',
      icon: 'V',
      position: 'top',
      title: 'Versioned design system platform',
      description: 'Tokens, components, Figma sync, code export. "Your design system, single source of truth."'
    },
    {
      dimension: 'why',
      icon: '$',
      position: 'bottom-left',
      title: 'Freemium → Pro €19/mo or Team €49/seat',
      description: 'Free for solo with limits. Pro unlocks unlimited tokens and history. Team adds permissions, audit log, SSO.'
    },
    {
      dimension: 'how',
      icon: 'H',
      position: 'bottom-right',
      title: 'Self-serve web + desktop app, Figma plugin',
      description: 'Cloud-only. Onboarding via product tours. Support is one shared inbox + Discord community.'
    },
    {
      dimension: 'who',
      icon: 'W',
      position: 'center',
      title: 'Designers & front-end devs at scaling product teams',
      description: ''
    }
  ],

  ecosystem: {
    viewBox: '0 0 700 360',
    nodes: [
      { id: 'free',     label_lines: ['8,400 Free', 'Users'],         emoji: '&#128100;', cx: 100, cy: 120, r: 36, stroke: 1.8 },
      { id: 'gridline', label_lines: ['Gridline'],                     subtitle: 'Cloud + Desktop', emoji: '&#127968;', cx: 350, cy: 180, r: 44, stroke: 2.2 },
      { id: 'paid',     label_lines: ['1,200 Paying', 'Users'],        emoji: '&#128176;', cx: 600, cy: 120, r: 36, stroke: 1.8 },
      { id: 'figma',    label_lines: ['Figma', 'Plugin'],              emoji: '&#127912;', cx: 600, cy: 280, r: 32, stroke: 1.5 },
      { id: 'discord',  label_lines: ['Discord', 'Community'],         emoji: '&#128172;', cx: 100, cy: 280, r: 32, stroke: 1.5 }
    ],
    edges: [
      { type: 'data',  label: 'SIGNUPS',          x1: 138, y1: 112, x2: 304, y2: 168, text_x: 210, text_y: 128 },
      { type: 'goods', label: 'FREE TIER',         x1: 304, y1: 180, x2: 138, y2: 128, text_x: 210, text_y: 168 },
      { type: 'goods', label: 'PRO/TEAM',          x1: 396, y1: 168, x2: 562, y2: 112, text_x: 478, text_y: 128 },
      { type: 'money', label: '&euro;19-49/MO',    x1: 562, y1: 128, x2: 396, y2: 180, text_x: 478, text_y: 168 },
      { type: 'data',  label: 'SYNC',              x1: 568, y1: 272, x2: 392, y2: 198, text_x: 500, text_y: 248 },
      { type: 'goods', label: 'SUPPORT',           x1: 134, y1: 272, x2: 310, y2: 198, text_x: 200, text_y: 248 }
    ],
    glossary: [
      { term: 'Freemium', description: "Gridline is free for solo users with limits (5 components, no version history). Pro (€19/mo) unlocks unlimited everything for one designer. Team (€49/seat/mo) adds permissions, SSO, and audit log." },
      { term: 'Figma Plugin', description: "Designers stay in Figma; Gridline syncs tokens and components both ways. The plugin is the main acquisition channel — most free signups arrive through it." }
    ]
  },

  health_metrics: [
    { value: '8,400',   label: 'Free users' },
    { value: '1,200',   label: 'Paying users' },
    { value: '€94K',    label: 'Monthly recurring revenue' },
    { value: '9%',      label: 'Free → paid conversion' },
    { value: '€78',     label: 'Cost per paid signup' },
    { value: '21 mo',   label: 'Avg paid customer lifetime' }
  ],

  crisis: {
    crisis_type: 'conversion',
    metric_label: 'Free → paid conversion',
    before: '18%',
    after: '9%',
    impact_html: 'Free signups are still climbing — but the rate at which they upgrade has been cut in half over the last 4 months. New paid signups dropped from 240/month to 95/month.<br><strong style="color: var(--color-danger);">That\'s the entire growth engine of the company stalling.</strong>',
    runway_line: "Sequoia partner is reviewing the Series A deck next month. At this conversion rate, the growth chart they expect won't be there.",
    recap_crisis: "Free-to-paid conversion fell from 18% to 9% in 4 months. New paid signups dropped from 240/mo to 95/mo. Free signups are still growing — the funnel is full at the top, broken in the middle.",
    recap_hidden_clue: "The paid base has always been held up by Teams. Solo upgraders convert at 11% and retain at 58%; Teams of 3+ convert at 23% and retain at 94%. Freemium only pays when the payer is a team — Gridline keeps marketing to solo designers anyway."
  },

  data_table: [
    { fact: 'Free signups (still growing)',           numbers: '780/mo (was 720/mo)',                                                       points_toward: 'ambiguous', points_label: 'Top of funnel is fine' },
    { fact: 'Paid signups by tier',                    numbers: 'Pro: 60/mo (was 195) · Team: 35/mo (was 45)',                              points_toward: 'ambiguous', points_label: 'Both tiers down — Pro hardest' },
    { fact: 'Conversion by account type',              numbers: 'Solo (Pro target): 11% · Teams of 3+ (Team target): 23%',                  points_toward: 'who', points_label: 'Team accounts convert 2× (WHO)' },
    { fact: '12-month retention by account type',     numbers: 'Teams that added ≥3 seats in month 1: 94% · Solo Pro upgraders: 58%',       points_toward: 'who', points_label: 'Team retention is the business (WHO)' },
    { fact: "Time to first sync (Daan's metric)",    numbers: 'Now 14 min average (was 9 min after the new onboarding)',                  points_toward: 'what', points_label: 'Time-to-value has slipped (WHAT)' },
    { fact: 'Activated users who still decline Pro',  numbers: "Users who complete first sync spend 3.2× longer in-product, yet 38% still pick 'Free is enough for my workflow' at the Pro prompt.", points_toward: 'what', points_label: 'Activation ≠ willingness to pay (WHAT)' },
    { fact: 'Desktop upgrade modal — error rate',      numbers: 'Desktop Safari users (≈40% of Pro upgrade clicks) land on a blank modal state. Broken since v3.2 (4 months ago).', points_toward: 'how', points_label: 'Upgrade flow broken for Safari (HOW)' },
    { fact: 'Silent funnel regressions this year',     numbers: '4 separate releases broke a different step; avg 23 days before anyone noticed', points_toward: 'how', points_label: 'No funnel instrumentation (HOW)' },
    { fact: "Why people say they didn't upgrade",    numbers: '38% "free is enough for me" · 24% "couldn\'t find upgrade" · 22% "team uses something else" · 16% other', points_toward: 'ambiguous', points_label: 'Supports everyone a bit' }
  ],

  case_data_viz: [
    {
      type: 'tiles',
      title: 'Volume',
      sub: 'last 30 days',
      tiles: [
        { label: 'Free signups', value: '780',   delta: '+8% vs 720',   delta_dir: 'up' },
        { label: 'Pro signups',  value: '60',    delta: '−69% vs 195',  delta_dir: 'down', alert: true },
        { label: 'Team signups', value: '35',    delta: '−22% vs 45',   delta_dir: 'down' },
        { label: 'Time to first sync', value: '14 min', delta: '+5 min vs 9', delta_dir: 'down', pill: 'onboarding regressed' }
      ]
    },
    {
      type: 'bars',
      title: 'Conversion · free → paid',
      max: 100,
      bars: [
        { label: 'Solo → Pro',          value: 11, display: '11%', color: 'accent' },
        { label: 'Teams of 3+ → Team',  value: 23, display: '23%', color: 'good'  }
      ],
      caption: '<strong>Teams convert 2× better</strong> than solo users. Freemium only pays when the payer is a team.'
    },
    {
      type: 'bars',
      title: '12-month retention',
      max: 100,
      bars: [
        { label: 'Teams ≥3 seats (mo 1)', value: 94, display: '94%', color: 'good' },
        { label: 'Solo Pro upgraders',    value: 58, display: '58%', color: 'amber' }
      ],
      caption: '<strong>36-point retention gap</strong> between account types. Teams that activate fully in month 1 stick hard.'
    },
    {
      type: 'bars',
      title: "Why they didn't upgrade · exit survey",
      max: 100,
      bars: [
        { label: '"Free is enough"',        value: 38, display: '38%', color: 'muted' },
        { label: '"Couldn\'t find upgrade"', value: 24, display: '24%', color: 'warn'  },
        { label: '"Team uses something else"', value: 22, display: '22%', color: 'muted' },
        { label: 'Other',                   value: 16, display: '16%', color: 'muted' }
      ],
      caption: '<strong>24%</strong> literally couldn\'t find the upgrade button — the desktop Safari modal has been blank since v3.2 (<strong>~40%</strong> of Pro upgrade clicks, broken for 4 months).'
    },
    {
      type: 'tiles',
      title: 'Funnel health',
      sub: 'instrumentation + regressions',
      tiles: [
        { label: 'Safari upgrade modal',         value: 'broken', delta: '~40% of Pro clicks', delta_dir: 'down', alert: true },
        { label: 'Silent regressions this year', value: '4',      delta: '23 days avg to notice', delta_dir: 'down' },
        { label: 'Activated users still decline Pro', value: '38%', delta: '"Free is enough for my workflow"' },
        { label: 'Time in product · activated',  value: '3.2×',   delta: 'vs unactivated', delta_dir: 'up' }
      ]
    }
  ],

  diagnosis_options: [
    { dimension: 'who',  title: 'Wrong target customer',   description: "Teams convert a little better than solo users. Maybe we should stop fighting gravity and reorient the whole go-to-market around design teams." },
    { dimension: 'what', title: 'Aha moment too slow',     description: 'The free experience takes too long to deliver value. Users sign up, never reach the moment where Gridline becomes indispensable, and never feel any reason to pay.' },
    { dimension: 'how',  title: 'Broken funnel, no monitoring', description: "The desktop upgrade modal is broken. Three other silent regressions shipped this year and went unnoticed for weeks each. The funnel isn't monitored — every release is a coin flip." },
    { dimension: 'why',  title: 'Pricing is wrong',        description: 'The €19 Pro price feels arbitrary — neither cheap enough to be a no-brainer nor expensive enough to feel premium. The price-value perception is off, and customers walk away.' }
  ],

  levers: {
    who: [
      {
        id: 'team_focus',
        title: 'Reorient acquisition around design teams',
        effectiveness: 3,
        desc: "Stop targeting solo designers. Run campaigns and outreach focused on design leads at scaling product teams. Build a 'champion within a company' onboarding flow.",
        lever_narrative: 'Refocusing acquisition on design teams brought in fewer signups but dramatically better ones. Within 12 weeks, Team conversions doubled and the new accounts brought 4-7 seats each on average. The freemium math finally worked.'
      },
      {
        id: 'kill_pro',
        title: 'Sunset the Pro tier entirely',
        effectiveness: 2,
        desc: 'Stop selling Pro. Make solo use free forever, and sell only Team. Force the product into the segment where it actually works.',
        lever_narrative: 'Sunsetting Pro felt drastic, but the data backed it up. Existing Pro users converted to Team or moved to free. New paid revenue is now 100% Team accounts — higher quality, higher retention, but the transition cost some loyal Pro users.'
      },
      {
        id: 'champion_program',
        title: 'Build a "champion" referral program',
        effectiveness: 2,
        desc: 'Reward designers who bring their team onto Gridline with credits, swag, and recognition. Design teams come in through one champion.',
        lever_narrative: "The champion program turned Gridline's best free users into a sales channel. About 30% of new Team accounts in the next 3 months came through champion referrals — but the program took 6 weeks to design and 4 to launch."
      },
      {
        id: 'team_trial',
        title: 'Offer a 30-day Team trial to free accounts',
        effectiveness: 2,
        desc: 'Surface a 30-day full Team trial to free users with 2+ collaborators. Let them experience the team workflow before being asked to pay.',
        lever_narrative: 'The 30-day Team trial lifted Team conversions noticeably — about 40% of trial teams converted. But it also cannibalized some Pro upgrades, since people who would have paid €19 now waited for the free trial.'
      },
      {
        id: 'enterprise_pivot',
        title: 'Move upmarket to enterprise',
        effectiveness: 1,
        desc: 'Stop selling self-serve entirely. Hire an AE, target Fortune 500 design orgs, sell €40K/year contracts.',
        lever_narrative: 'The enterprise pivot brought in two early contracts within 4 months — promising signal. But it required hiring sales, longer cycles, and a fundamentally different motion. The freemium funnel went neglected, and free signups slowed.'
      }
    ],
    what: [
      {
        id: 'speedrun_onboarding',
        title: 'Compress onboarding to 60 seconds',
        effectiveness: 3,
        desc: "Auto-import a starter design system the first time someone logs in. Show value in under a minute, not 14. Make 'aha' the first screen.",
        lever_narrative: 'The 60-second onboarding doubled the percentage of new users who reached the first sync. Activation rates jumped — but conversion to paid only ticked up slightly, suggesting the time-to-value wasn\'t the main bottleneck after all.'
      },
      {
        id: 'figma_first',
        title: 'Reframe as a Figma-first product',
        effectiveness: 2,
        desc: 'Make the Figma plugin the primary surface. Treat the web app as secondary. Users never have to leave their design tool to feel value.',
        lever_narrative: "Figma-first reframing increased plugin installs and made Gridline feel native to designers' workflows. But it also blurred the upgrade prompt — users in Figma never saw the paid features, so paid conversions barely moved."
      },
      {
        id: 'opinionated_starter',
        title: 'Ship opinionated starter templates',
        effectiveness: 2,
        desc: 'Curate 6-8 best-practice design systems users can fork on signup. Skip the blank-canvas problem entirely.',
        lever_narrative: 'Opinionated starters made the empty state friendlier. New users started with something real instead of nothing. Engagement rose, but the people who needed convincing to upgrade still didn\'t — the missing link wasn\'t the starter content.'
      },
      {
        id: 'value_milestones',
        title: 'Surface value milestones in-app',
        effectiveness: 2,
        desc: 'Show users their token-reuse savings, version history depth, and team activity. Make the value visible so paying for more feels obvious.',
        lever_narrative: 'Value milestones helped users see what they were getting from Gridline. The dashboards became conversation starters in design teams — and indirectly drove some Team upgrades. But the lift was small.'
      },
      {
        id: 'ai_tokens',
        title: 'Add an AI token generator',
        effectiveness: 1,
        desc: "Use an LLM to auto-generate tokens from a Figma file. Make it feel magic. Designers love magic.",
        lever_narrative: 'The AI token generator got Twitter buzz and a small spike in signups, but it didn\'t address why people weren\'t paying. Engineering spent 7 weeks on it, the roadmap is now behind on the SSO that Team customers actually wanted.'
      }
    ],
    how: [
      {
        id: 'fix_modal',
        title: 'Fix the broken upgrade modal + add monitoring',
        effectiveness: 3,
        desc: 'Patch the Safari upgrade flow this week. Instrument every step so silent regressions are caught in hours, not months.',
        lever_narrative: "Patching the Safari path recovered the clicks that had been silently failing — about 40% of desktop Pro attempts. Pro signups bounced back within 2 weeks and the new monitoring caught two more regressions in the following quarter. A clean operational win, but the recovered conversions still belong mostly to solo Pro users whose 58% retention drags the long-term math."
      },
      {
        id: 'add_monitoring',
        title: 'Build conversion funnel monitoring',
        effectiveness: 2,
        desc: 'Instrument every step of the upgrade flow. Add alerts so any silent regression is caught within hours, not months.',
        lever_narrative: "Funnel monitoring caught two more silent issues in the next 8 weeks — a Stripe webhook bug and a missing pricing page on mobile. The team's response time to funnel issues went from months to hours."
      },
      {
        id: 'rebuild_pricing_page',
        title: 'Rebuild the pricing page from scratch',
        effectiveness: 2,
        desc: 'Add comparison tables, social proof, ROI calculator, and clearer Team-vs-Pro differentiation. Make upgrading feel obvious.',
        lever_narrative: 'The new pricing page improved pricing-page-to-upgrade conversion by 24%. Cleaner differentiation between Pro and Team also shifted some users from Pro to Team — small win, but the underlying funnel issue remained.'
      },
      {
        id: 'in_app_upgrade',
        title: 'Add in-app upgrade prompts at moments of friction',
        effectiveness: 2,
        desc: "Trigger contextual upgrade prompts when free users hit limits — not as popups, but inline at the moment of friction.",
        lever_narrative: 'In-app prompts at moments of friction lifted conversion in the first 4 weeks, especially for power users. But the gain plateaued — the people who were converting through these prompts were already team-shaped users in disguise.'
      },
      {
        id: 'test_coverage',
        title: 'Add automated tests for the entire upgrade flow',
        effectiveness: 1,
        desc: 'Write end-to-end tests for the payment path on every release. Prevents regressions like the modal bug from ever shipping again.',
        lever_narrative: 'Automated coverage caught two regressions in subsequent releases. Solid engineering hygiene, but it was a defensive move — it prevents future damage rather than fixing the current shortfall.'
      }
    ],
    why: [
      {
        id: 'drop_pro_price',
        title: 'Drop Pro to €9',
        effectiveness: 1,
        desc: 'Halve the Pro price. Remove the friction that "€19 feels arbitrary." Get people through the door at any cost.',
        lever_narrative: 'Dropping Pro to €9 lifted Pro signups about 30%, but the math is brutal: ARPU collapsed and the new €9 customers churn at the same rate as the old €19 ones. Revenue per Pro account is now half. The funnel grew, the business shrank.'
      },
      {
        id: 'free_pro',
        title: 'Make Pro free, charge only for Team',
        effectiveness: 3,
        desc: "Stop pretending solo users will pay. Make Pro features free forever. Charge only Team — that's where the money is anyway.",
        lever_narrative: "Making Pro free was painful for the first month, but it forced the right thing: every paid customer is now a Team. Pro-tier revenue went to zero, but Team conversions climbed sharply because the free tier was suddenly compelling enough to spread inside companies."
      },
      {
        id: 'usage_pricing',
        title: 'Switch to usage-based pricing',
        effectiveness: 2,
        desc: 'Charge per token sync, per export, per seat. Let customers pay for what they use instead of fitting into Pro/Team tiers.',
        lever_narrative: "Usage pricing felt fair to customers but unpredictable for the business. Some heavy free users became paying customers; some Team accounts paid less. Net revenue stayed roughly flat, but forecasting became nightmare."
      },
      {
        id: 'annual_discount',
        title: 'Push annual plans hard',
        effectiveness: 2,
        desc: "Offer 25% off for annual prepay. Lock customers in, smooth out the funnel, give your finance team predictable cash.",
        lever_narrative: 'Annual prepay collected upfront cash and stabilized retention for the next 12 months — but it didn\'t change the underlying conversion problem. The customers paying annually were the customers who would have stayed anyway.'
      },
      {
        id: 'paid_only_features',
        title: 'Move more features behind the paywall',
        effectiveness: 1,
        desc: 'Tighten the free tier. Move version history and advanced tokens to Pro. Make the free experience just frustrating enough.',
        lever_narrative: "Tightening the free tier triggered a Twitter backlash from the design community. Some users converted defensively, but free signups dropped 40% overnight as word spread that Gridline 'went greedy.' Net negative."
      }
    ]
  },

  consequences: {
    who: {
      narrative: `<p>You diagnosed the problem as <strong>WHO</strong> — Gridline was being sold to individual designers, but the freemium economics only work for design teams. Your intervention shifted who you target.</p>
    <p>Three months later, the funnel looks different. Free signups are slightly down because the messaging now filters for team-shaped users — but conversion to paid jumped, and almost all new paying customers are Team accounts (€49/seat × multiple seats). MRR climbed from €94K to €110K despite fewer free signups.</p>
    <p><span class="but">But.</span> Solo Pro customers — your existing base of 600+ paying users — feel abandoned. Some are renewing reluctantly. Lena is fielding angry emails from designers who liked Gridline as a personal tool. The transition is real and the criticism is loud, even though the math is finally right.</p>
    <p>Sequoia liked the move. They want to see one more month of the new shape before deciding on the Series A.</p>`,
      metrics: [
        { label: 'Free → paid conversion',  value: '14%',          status: 'success' },
        { label: 'Free signups',             value: '-15%',          status: 'neutral' },
        { label: 'Monthly revenue',          value: '€110K',         status: 'success' },
        { label: 'Solo Pro renewal rate',    value: 'Down sharply',  status: 'danger' },
        { label: 'New paid is Team accounts',value: '88%',           status: 'success' },
        { label: 'Customer satisfaction',    value: 'Polarized',     status: 'neutral' }
      ],
      mrr: 110000,
      mrr12: 148000,
      ripple_question: "Team accounts are growing fast. Solo Pro customers are unhappy. Sequoia wants one more good month. What do you do?",
      ripple_options: [
        { id: 'embrace_team',     title: 'Lean fully into Team',           desc: 'Stop trying to keep Pro happy. Reposition the brand entirely around design teams. Send a clear "we are now a team product" message.', systems_score: 2 },
        { id: 'sunset_pro_grace', title: 'Sunset Pro with a 6-month grace period', desc: "Announce that Pro is being discontinued, but give existing Pro users 6 months free of Team. Convert them or release them with grace.", systems_score: 2 },
        { id: 'hold_steady',      title: 'Hold steady, optimize what works', desc: 'Don\'t make any more big moves. Polish the team workflow, fix small bugs, and let the new shape mature before Sequoia\'s call.', systems_score: 1 },
        { id: 'two_brand',        title: 'Run two brands',                  desc: 'Spin Pro out into a separate "Gridline Solo" brand and serve solo designers as a side product while focusing the main company on teams.', systems_score: 0 }
      ]
    },
    what: {
      narrative: `<p>You diagnosed the problem as <strong>WHAT</strong> — the time to value was too long, and users were leaving before they understood what Gridline could do. Your intervention focused on what new users experience.</p>
    <p>Three months later, time-to-first-sync dropped from 14 minutes to under 2. Activation rates jumped meaningfully, and users who reach activation now go deeper into the product than before. Free signups are happy. Engagement is up. Daan is vindicated.</p>
    <p><span class="but">But.</span> Conversion to paid only ticked up slightly. The users who are activating still aren't upgrading. Why? Because the activation isn't the bottleneck — the value gap from "free works fine for me" to "I'd pay €19 for more" was always too small for solo users. The aha moment was real; it just didn't lead to a credit card.</p>
    <p>Engineering spent most of the quarter on the activation rebuild. The SSO and audit-log features Team customers had been asking for got pushed back another quarter.</p>`,
      metrics: [
        { label: 'Free → paid conversion',  value: '11%',           status: 'neutral' },
        { label: 'Time to first sync',       value: '<2 min',         status: 'success' },
        { label: 'Monthly revenue',          value: '€101K',         status: 'neutral' },
        { label: 'Free user activation',     value: '+62%',          status: 'success' },
        { label: 'Team feature roadmap',     value: '1 quarter behind', status: 'danger' },
        { label: 'Customer satisfaction',    value: 'Up (free users)', status: 'success' }
      ],
      mrr: 101000,
      mrr12: 112000,
      ripple_question: "Activation is fixed but conversion barely moved. Team customers are waiting on features. Where do you focus next?",
      ripple_options: [
        { id: 'investigate_who',    title: 'Investigate the WHO problem',   desc: "If activation isn't the bottleneck, the problem might be that solo users were never going to pay. Look at who actually converts and reorient.", systems_score: 2 },
        { id: 'ship_team_features', title: 'Ship the Team features now',     desc: 'Pause activation work and ship SSO + audit log. The Team customers waiting on these are your best revenue, and they\'re getting impatient.', systems_score: 2 },
        { id: 'add_paywalls',       title: 'Add gentle paywalls to activated users', desc: 'Now that more users hit activation, add upgrade prompts at the activation moment. Catch people while the value is fresh.', systems_score: 1 },
        { id: 'test_pricing',       title: 'Test pricing experiments',       desc: "Try 4 different price points and value propositions on activated users. See if any combination unlocks the conversion that the activation didn't.", systems_score: 1 }
      ]
    },
    how: {
      narrative: `<p>You diagnosed the problem as <strong>HOW</strong> — the Safari upgrade modal was broken, and the wider funnel wasn't monitored. Your intervention patched the bug and installed monitoring.</p>
    <p>Three months later, the upgrade modal is fixed and instrumented. Pro signups recovered from 60/mo back up to 135/mo and the new monitoring caught two more silent regressions along the way. This is a real operational win: Gridline is now an org that notices when its funnel breaks.</p>
    <p><span class="but">But.</span> Most of the recovered conversions are solo Pro users — the segment whose 12-month retention sits at 58%. The funnel is clean again, but the structural math is unchanged: every Pro upgrade you just re-enabled is a customer likely to churn within a year. MRR jumped in Q1 and then flattened as the recovered cohort started leaving.</p>
    <p>And while the team focused on the upgrade flow, the SSO feature Team customers had been requesting slipped another sprint.</p>`,
      metrics: [
        { label: 'Free → paid conversion',  value: '13%',           status: 'neutral' },
        { label: 'Upgrade modal error rate', value: '<1%',           status: 'success' },
        { label: 'Monthly revenue',          value: '€115K',         status: 'success' },
        { label: 'Pro signups recovered to', value: '~70% of pre-bug', status: 'neutral' },
        { label: 'Team features roadmap',    value: '2 sprints behind', status: 'danger' },
        { label: 'Funnel monitoring',        value: 'Now in place',  status: 'success' }
      ],
      mrr: 115000,
      mrr12: 118000,
      ripple_question: "The bug fix worked — and the monitoring you built caught three more silent regressions since. What's next?",
      ripple_options: [
        { id: 'tackle_who',        title: 'Now tackle the WHO problem',       desc: "You fixed the floor. Now look at the structural issue: Pro accounts convert poorly even when the funnel works. Reorient toward Teams.", systems_score: 2 },
        { id: 'optimize_funnel',   title: 'Keep optimizing the funnel',       desc: "The funnel is now monitored and the page works. Push for more incremental wins — pricing page, checkout, email sequences.", systems_score: 1 },
        { id: 'ship_team_features',title: 'Catch up on Team features',        desc: 'Team customers are paying the bills. Ship SSO and audit log this quarter to prevent churn from the segment that actually generates revenue.', systems_score: 2 },
        { id: 'reduce_pricing',    title: 'Test lower pricing',                desc: 'Now that the funnel works, run a price test. Maybe the €19 Pro tier is the next thing limiting conversion.', systems_score: 0 }
      ]
    },
    why: {
      narrative: `<p>You diagnosed the problem as <strong>WHY</strong> — the €19 Pro price felt arbitrary and was killing conversion. Your intervention changed how Gridline charges.</p>
    <p>Three months later, the pricing change had an effect. If you dropped Pro to €9, signups rose ~30%. If you made Pro free and only charged Team, the free tier grew sharply. Either way, more people are coming through.</p>
    <p><span class="but">But.</span> Revenue per paying customer is down. ARPU collapsed in the price-cut path; in the free-Pro path, the company gave away the entire Pro tier and now depends on Team conversions that take longer. MRR is at €115K but Lena and the board are nervous because the revenue mix is now fragile. And the design community has noticed two big pricing changes in 4 months — trust is shaky.</p>
    <p>Worst of all, the underlying funnel issue isn't fully resolved. Free users still take 14 minutes to activate, and the upgrade flow on desktop is still buggy. Pricing was a symptom of those problems, not their cause.</p>`,
      metrics: [
        { label: 'Free → paid conversion',  value: '12%',           status: 'neutral' },
        { label: 'ARPU per paying user',     value: 'Down 35%',      status: 'danger' },
        { label: 'Monthly revenue',          value: '€115K',         status: 'success' },
        { label: '"Price feels right"',      value: 'Up',            status: 'success' },
        { label: 'Underlying activation',    value: 'Still 14 min',  status: 'danger' },
        { label: 'Brand trust',              value: 'Shaky',         status: 'danger' }
      ],
      mrr: 112000,
      mrr12: 82000,
      ripple_question: "Conversions improved but ARPU collapsed. The underlying problems haven't been touched. What now?",
      ripple_options: [
        { id: 'reverse_price',      title: 'Reverse the price change',     desc: 'Admit the price wasn\'t the real problem. Restore Pro at €19 and frame it as a return to fair value. Some churn, but cleaner economics.', systems_score: 1 },
        { id: 'fix_real_problems',  title: 'Fix what pricing didn\'t fix', desc: "Stop tweaking pricing. Address the actual issues: broken upgrade flow, slow activation, wrong target customer. Pricing was a distraction.", systems_score: 2 },
        { id: 'go_team_only',       title: 'Commit fully to Team',         desc: 'If Pro is now barely profitable, just kill it. Make Gridline a team-only product. Accept the contraction now and rebuild as a team-first SaaS.', systems_score: 2 },
        { id: 'pricing_experiments',title: 'Run more pricing experiments', desc: "Test 4 more price points and packages. Maybe the right combination is still out there. Keep iterating until something sticks.", systems_score: 0 }
      ]
    }
  },

  simulated_teams: [
    {
      name: 'Token Loop', diagnosis: 'who', alignment: 'none',
      lever_ids: ['team_focus'],
      reasoning: 'Look at the conversion-by-account-type table. Solo: 6%. Teams of 3+: 24%. The whole paid business is essentially Teams. We\'re wasting the funnel on the wrong customer.',
      intervention_desc: 'Reorient all acquisition campaigns toward design leads at companies with 8+ designers. Build a team-focused onboarding flow. Treat solo signups as funnel for finding team champions, not as paying customers.',
      tradeoff_explanation: "We'll alienate our existing Pro users and the Twitter design community will accuse us of selling out, but Team accounts are the only path to Series A revenue.",
      tradeoffs: ['Existing customers confused', 'Internal resistance'],
      ripple_choice: 'embrace_team'
    },
    {
      name: 'Aha Moment', diagnosis: 'what', alignment: 'daan',
      lever_ids: ['speedrun_onboarding'],
      reasoning: "Daan's right — 14 minutes to first sync is brutal. People try Gridline and bounce before they see why it matters. If we compress activation to 60 seconds, conversions follow.",
      intervention_desc: 'Auto-import a starter design system the first time someone signs up. Show value within 60 seconds. Skip the empty state entirely and let users see Gridline at its best from screen one.',
      tradeoff_explanation: "Engineering will be tied up for 6 weeks and the SSO feature Team customers want will slip again, but if activation is the bottleneck this is worth it.",
      tradeoffs: ['Takes 3+ months to build', 'Customer satisfaction dips during transition'],
      ripple_choice: 'investigate_who'
    },
    {
      name: 'Pixel Path', diagnosis: 'how', alignment: 'pita',
      lever_ids: ['fix_modal'],
      reasoning: "Pita found a smoking gun: the desktop upgrade modal has been broken for 78% of users since v3.2. That's almost certainly most of the drop. Fix the bug, see what's left.",
      intervention_desc: 'Patch the desktop upgrade modal this week. Add end-to-end tests for the entire payment path. Build conversion funnel monitoring so silent regressions are caught in hours, not months.',
      tradeoff_explanation: "Bug fixes are unsexy and won't fix the deeper structural issues if they exist, but you can't diagnose anything until the obvious bug is gone.",
      tradeoffs: ['Operating costs increase', 'Customer satisfaction dips during transition'],
      ripple_choice: 'tackle_who'
    },
    {
      name: 'PriceFit', diagnosis: 'why', alignment: 'lena',
      lever_ids: ['drop_pro_price'],
      reasoning: '38% say "free is enough" — that\'s the largest category. The €19 Pro tier doesn\'t feel like a no-brainer. Drop it to €9 and the perceived value gap shrinks.',
      intervention_desc: "Drop Pro from €19 to €9 immediately. Email all existing Pro customers to thank them for being early supporters and lock them in at €9. Run a launch campaign positioning Gridline as 'the design system tool for the price of a coffee.'",
      tradeoff_explanation: "ARPU will collapse and our LTV math will change overnight, but if the funnel grows enough it'll compensate. Volume play.",
      tradeoffs: ['Revenue drops short-term', 'Internal resistance'],
      ripple_choice: 'pricing_experiments'
    },
    {
      name: 'Render Crew', diagnosis: 'what', alignment: 'none',
      lever_ids: ['ai_tokens'],
      reasoning: 'Designers love magic. An AI token generator turns Gridline from "another design tool" into "the AI thing for design systems." Press, viral signups, conversions.',
      intervention_desc: 'Build an LLM-powered token generator that ingests a Figma file and outputs a complete token library in under a minute. Launch on Product Hunt with a polished demo video.',
      tradeoff_explanation: "We'll spend 7 weeks of engineering on something that may or may not move conversions, but the brand uplift could be worth it even if conversions don't move directly.",
      tradeoffs: ['Takes 3+ months to build', 'Operating costs increase'],
      ripple_choice: 'add_paywalls'
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
    'Same data, different diagnoses. What made each team land where they did? Did the data drive the diagnosis, or did intuition pick first and the data confirm?',
    'Find a team that diagnosed differently from you. Look at their consequence. Was their path better, worse, or just different?',
    'Every team\'s lever-pull improved something and worsened something else. Which team named the most honest trade-off?',
    "Lena's theory was pricing. Daan's was activation. Pita's was the broken modal. But the data also showed something beyond the single bug: Gridline has shipped 4 silent funnel regressions this year, each going unnoticed for weeks. The company doesn't know when it's broken. Did any team catch the pattern rather than the one bug? What does it mean when the biggest risk is the organisation's blind spot, not a single interpretation?"
  ],

  long_term_reveal_note: "At 3 months, reorienting around design teams looked like a risky pivot — free signups dipped and loyal Pro users were loud. At 12 months, it's the only path that compounds. Teams that added ≥3 seats in month 1 are retaining at 94%; the solo Pro cohort Gridline had been farming retains at 58%. The HOW fix was a real operational win — the monitoring caught two more silent regressions — but everything it recovered was still solo-shaped, and that revenue leaks back out within a year. WHAT improved activation without moving paid conversions, and the WHY price cuts hollowed out ARPU. <strong>Fixing the funnel restores a broken business. Fixing the customer builds the right one.</strong>",

  long_term_scenes: [
    {
      heading: 'Month 3',
      body: 'Reorienting around design teams looked like a risky pivot. Free signups dipped and loyal Pro users were loud on Twitter.'
    },
    {
      heading: 'Month 12',
      body: "It's the only path that compounds. Teams that added ≥3 seats in month 1 retain at <strong>94%</strong>; the solo Pro cohort Gridline had been farming retains at <strong>58%</strong>."
    },
    {
      heading: 'What didn\u2019t compound',
      body: 'HOW was a real operational win, but everything it recovered was still solo-shaped — and that revenue leaks back out within a year. WHAT improved activation without moving paid conversions. WHY price cuts hollowed out ARPU.'
    },
    {
      heading: 'Takeaway',
      body: 'Fixing the funnel restores a broken business. Fixing the customer builds the right one.'
    }
  ],

  teaching_punchline: "Fixing the funnel restores a broken business. Fixing the customer builds the right one.",

  admin_bucket_analysis: {
    what: {
      verdict: 'Contributing fix',
      core_idea: '14 minutes to first sync. Users bounce before they see why Gridline matters.',
      pros: [
        'Real data gap: time-to-first-sync slipped 9 → 14 min; activation jumps +62% when fixed.',
        'Product-owned (Daan) — no cross-team negotiation, fastest to ship.'
      ],
      cons: [
        "Conversion still only 11%. Activation isn't why solo users refuse to pay.",
        'Pushes the SSO and audit-log that Team customers actually want another quarter.'
      ]
    },
    who: {
      verdict: 'Structural answer',
      core_idea: 'Teams convert at 23% and retain 94%. Solo Pros convert 11% and retain 58%. Freemium only pays for teams.',
      winner_reason: 'The only path where revenue compounds. MRR grows €94K → €110K → €148K while every other path flattens or goes backwards.',
      pros: [
        'Hardest data in the room: Team accounts convert 2× and retain 1.6× solo Pros.',
        'One decision realigns product, pricing and messaging together.'
      ],
      cons: [
        '600+ loyal solo Pros feel abandoned; loud design-Twitter pushback for a quarter.',
        'Sequoia wants Series A proof during the exact window of the pivot.'
      ]
    },
    how: {
      verdict: 'Surface fix',
      core_idea: 'The Safari upgrade modal has been broken for ~40% of Pro clicks for 4 months. Patch and instrument.',
      pros: [
        'Smoking gun is real — cheapest, fastest, highest-confidence fix in the room.',
        'Strongest short-term bump: 3-month MRR €115K. Buys runway with Sequoia.'
      ],
      cons: [
        'Recovered conversions are mostly solo Pros who churn at 58% — 12-month MRR only €118K.',
        'Treats the symptom. A clean funnel just delivers wrong-shaped customers faster.'
      ]
    },
    why: {
      verdict: 'Symptom chasing',
      core_idea: '€19 feels arbitrary. Drop Pro to €9, or make it free and only charge Team.',
      pros: [
        'Loudest survey voice: 38% "free is enough." Fastest to ship — CEO call, no eng bottleneck.',
        '"Free Pro / paid Team" variant is a partial WHO fix in disguise if followed through.'
      ],
      cons: [
        'ARPU collapses 35%; 12-month MRR falls to €82K — the only path going backwards.',
        'Broken Safari flow and slow activation untouched — pricing was a symptom, not the cause.'
      ]
    }
  },

  diagnosis_labels: {
    who:  { tag: 'WHO',  name: 'WHO — Wrong target customer' },
    what: { tag: 'WHAT', name: 'WHAT — Aha moment too slow' },
    how:  { tag: 'HOW',  name: 'HOW — Broken funnel, no monitoring' },
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
    default_base_mrr: 94000
  }

};
