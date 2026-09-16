// =============================================================================
// Centralized blog data. Pages and components read exclusively from here.
// Content is stored as typed blocks so the renderer stays presentation-only.
// =============================================================================

export const siteConfig = {
  name: "Austelix",
  url: "https://austelix.com",
  tagline: "Intelligent Core, Powerful Brands",
  blogPath: "/blogs",
  twitter: "@austelix",
  defaultOgImage: "/blog/cover-1.jpg",
};

export const authors = {
  ayush: {
    name: "Ayush Kashyap",
    role: "Founder, CTO",
    image: "/blog/author-1.png",
  },
  priya: {
    name: "Priya Nair",
    role: "Head of Design",
    image: "/blog/author-2.png",
  },
  rohan: {
    name: "Rohan Mehta",
    role: "Lead Engineer",
    image: "/blog/author-3.png",
  },
};

export const blogs = [
  {
    id: 1,
    slug: "future-of-ai-in-business",
    title: "The Future of AI in Business",
    excerpt:
      "AI is moving from novelty to infrastructure. Here is how we think about building products that put intelligence to work without losing the human in the loop.",
    coverImage: "/blog/cover-1.jpg",
    author: authors.ayush.name,
    authorImage: authors.ayush.image,
    authorRole: authors.ayush.role,
    publishedAt: "2026-05-28",
    readTime: "6 min read",
    category: "AI",
    tags: ["AI", "Automation", "Strategy"],
    featured: true,
    content: [
      {
        type: "paragraph",
        value:
          "For most of the last decade, artificial intelligence lived in demos. It was impressive in a controlled setting and fragile everywhere else. That era is ending. AI is quietly becoming infrastructure, the kind of thing a product depends on the way it depends on a database or a payment gateway.",
      },
      {
        type: "heading",
        value: "From features to foundations",
      },
      {
        type: "paragraph",
        value:
          "The most useful AI is invisible. It does not announce itself with a chat bubble. It removes a step, anticipates an intent, or turns a five-minute task into a single click. When intelligence is woven into the foundations of a product, the experience feels less like talking to a machine and more like the software simply understanding what you need.",
      },
      {
        type: "image",
        src: "/blog/content-1.jpg",
        alt: "Abstract visualization of connected intelligence",
        caption: "Intelligence works best when it disappears into the workflow.",
      },
      {
        type: "heading",
        value: "Keep the human in the loop",
      },
      {
        type: "paragraph",
        value:
          "Automation without oversight is a liability. The teams that win with AI are the ones that treat it as an accelerant for human judgment, not a replacement for it. We design for moments where a person can review, correct, and teach the system, so trust compounds over time.",
      },
      {
        type: "quote",
        value:
          "The goal is not to remove people from the work. It is to remove the work that should never have required a person.",
        cite: "Ayush Kashyap",
      },
      {
        type: "heading",
        value: "What we build toward",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Systems that explain their reasoning, not just their output.",
          "Defaults that are safe, with power available on demand.",
          "Feedback loops that make the product better the more it is used.",
        ],
      },
      {
        type: "paragraph",
        value:
          "The companies that treat AI as a foundation rather than a feature will define the next decade of software. The opportunity is not to bolt intelligence onto old workflows, but to rethink what those workflows could be.",
      },
      {
        type: "code",
        language: "javascript",
        value:
          "// Intelligence as a default, not an afterthought\nasync function suggestNextAction(context) {\n  const signals = await collectSignals(context);\n  const ranked = await model.rank(signals);\n  return ranked.filter((s) => s.confidence > 0.8);\n}",
      },
    ],
  },
  {
    id: 2,
    slug: "designing-for-trust",
    title: "Designing for Trust: Our Product Principles",
    excerpt:
      "Trust is not a feature you ship. It is the sum of a thousand small decisions about clarity, consistency, and respect for the person on the other side of the screen.",
    coverImage: "/blog/cover-2.jpg",
    author: authors.priya.name,
    authorImage: authors.priya.image,
    authorRole: authors.priya.role,
    publishedAt: "2026-05-14",
    readTime: "5 min read",
    category: "Design",
    tags: ["Design", "Product", "UX"],
    featured: false,
    content: [
      {
        type: "paragraph",
        value:
          "People decide whether they trust a product in seconds, long before they can articulate why. That judgment is built from details: how an interface handles an error, whether a button does exactly what it says, how honest the empty states are.",
      },
      {
        type: "heading",
        value: "Clarity over cleverness",
      },
      {
        type: "paragraph",
        value:
          "A clever interface impresses once. A clear interface earns trust every day. We choose plain language over jargon, predictable patterns over novelty, and visible state over hidden magic. The best compliment a design can receive is that nobody noticed it.",
      },
      {
        type: "quote",
        value: "Simplicity is the most sophisticated form of respect for your user's time.",
        cite: "Priya Nair",
      },
      {
        type: "heading",
        value: "Consistency is a promise",
      },
      {
        type: "paragraph",
        value:
          "When an action keeps its name through an entire flow, when the same gesture always produces the same result, the product becomes learnable. Consistency tells the user that the system is dependable, and dependability is the bedrock of trust.",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Say what will happen before it happens.",
          "Make the reversible obvious and the irreversible deliberate.",
          "Treat every error as a moment to give direction, not blame.",
        ],
      },
      {
        type: "image",
        src: "/blog/content-2.jpg",
        alt: "Concentric design system rings",
        caption: "A design system is a shared vocabulary for trust.",
      },
      {
        type: "paragraph",
        value:
          "Trust is slow to build and quick to lose. We protect it by treating every interaction as a small contract, and by keeping every promise the interface makes.",
      },
    ],
  },
  {
    id: 3,
    slug: "scaling-without-complexity",
    title: "Scaling Systems Without Scaling Complexity",
    excerpt:
      "Growth has a way of turning clean systems into tangled ones. The teams that scale well are the ones that treat simplicity as an engineering discipline.",
    coverImage: "/blog/cover-3.jpg",
    author: authors.rohan.name,
    authorImage: authors.rohan.image,
    authorRole: authors.rohan.role,
    publishedAt: "2026-04-30",
    readTime: "7 min read",
    category: "Engineering",
    tags: ["Engineering", "Architecture", "Scale"],
    featured: false,
    content: [
      {
        type: "paragraph",
        value:
          "Every system starts simple. Then traffic grows, the team grows, and the edges multiply. Complexity is not added in a single decision; it accumulates in a hundred reasonable ones. Fighting it requires intention.",
      },
      {
        type: "heading",
        value: "Boundaries before abstractions",
      },
      {
        type: "paragraph",
        value:
          "Premature abstraction is how good systems become unmaintainable. We draw clear boundaries first, let patterns emerge from real usage, and only then extract the abstraction that the code is asking for. The right abstraction feels discovered, not imposed.",
      },
      {
        type: "code",
        language: "javascript",
        value:
          "// A boundary is a contract, not a guess\nexport function createPaymentService(deps) {\n  return {\n    charge: (order) => deps.gateway.charge(order),\n    refund: (id) => deps.gateway.refund(id),\n  };\n}",
      },
      {
        type: "heading",
        value: "Make the common path obvious",
      },
      {
        type: "paragraph",
        value:
          "Most requests do the same few things. When the common path is fast and obvious, the rare path can afford to be careful. We optimize for the ninety percent and design escape hatches for the rest, rather than burdening every request with the weight of every edge case.",
      },
      {
        type: "quote",
        value:
          "Scaling is not about handling more. It is about handling more without your team having to hold more in their heads.",
        cite: "Rohan Mehta",
      },
      {
        type: "heading",
        value: "Observability is a feature",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Instrument the boundaries, not the internals.",
          "Trace a request end to end before you need to.",
          "Alert on symptoms users feel, not metrics that only engineers see.",
        ],
      },
      {
        type: "paragraph",
        value:
          "A system you can observe is a system you can keep simple, because you can see exactly where complexity is trying to creep in and cut it off early.",
      },
    ],
  },
  {
    id: 4,
    slug: "idea-to-impact",
    title: "From Idea to Impact: How We Build Products",
    excerpt:
      "Great products are not born from assumptions. They emerge from discovery, disciplined building, and a relentless focus on the outcome they create.",
    coverImage: "/blog/cover-4.jpg",
    author: authors.ayush.name,
    authorImage: authors.ayush.image,
    authorRole: authors.ayush.role,
    publishedAt: "2026-04-16",
    readTime: "5 min read",
    category: "Product",
    tags: ["Product", "Process", "Strategy"],
    featured: false,
    content: [
      {
        type: "paragraph",
        value:
          "Our process can be reduced to three words: discover, build, impact. They are not a tagline. They describe how a vague problem becomes a product that people rely on.",
      },
      {
        type: "heading",
        value: "Discover the right problem",
      },
      {
        type: "paragraph",
        value:
          "We resist the urge to start with solutions. Instead we study people, their workflows, and the gaps they have learned to tolerate. The most valuable problems are often the ones nobody complains about because they assume the friction is permanent.",
      },
      {
        type: "quote",
        value: "If you solve the wrong problem beautifully, you have still solved the wrong problem.",
        cite: "Ayush Kashyap",
      },
      {
        type: "heading",
        value: "Build with restraint",
      },
      {
        type: "paragraph",
        value:
          "A first version should be embarrassingly focused. We ship the smallest thing that creates real value, put it in front of real users, and let their behavior tell us what to build next. Every feature has to earn its place.",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Validate the problem before writing a line of code.",
          "Ship a narrow slice and watch how it is actually used.",
          "Expand only where evidence pulls you, not where ego pushes you.",
        ],
      },
      {
        type: "heading",
        value: "Measure the impact",
      },
      {
        type: "paragraph",
        value:
          "A launch is not success. Success is the outcome the product creates: time saved, decisions simplified, opportunities unlocked. We measure what changed for the user, and we keep iterating until that change is undeniable.",
      },
    ],
  },
  {
    id: 5,
    slug: "security-by-default",
    title: "Security by Default in Modern SaaS",
    excerpt:
      "Security cannot be a setting users have to find. It has to be the path of least resistance, built into the defaults and invisible until it matters.",
    coverImage: "/blog/cover-5.jpg",
    author: authors.rohan.name,
    authorImage: authors.rohan.image,
    authorRole: authors.rohan.role,
    publishedAt: "2026-04-02",
    readTime: "6 min read",
    category: "Security",
    tags: ["Security", "SaaS", "Engineering"],
    featured: false,
    content: [
      {
        type: "paragraph",
        value:
          "The most common security failures are not exotic exploits. They are defaults that asked too much of the user: a permission left open, a token that never expired, a setting nobody understood. Security by default means the safe choice is the easy choice.",
      },
      {
        type: "heading",
        value: "Least privilege, always",
      },
      {
        type: "paragraph",
        value:
          "Every component, service, and credential should have exactly the access it needs and nothing more. When access is scoped tightly from the start, a mistake stays contained instead of cascading.",
      },
      {
        type: "code",
        language: "javascript",
        value:
          "// Scope tokens to intent, expire aggressively\nconst token = issueToken({\n  scope: ['orders:read'],\n  ttlSeconds: 900,\n});",
      },
      {
        type: "heading",
        value: "Make the secure path the default path",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Encrypt in transit and at rest without anyone opting in.",
          "Rotate secrets automatically, not when someone remembers.",
          "Log access in a way that is useful during an incident, not after.",
        ],
      },
      {
        type: "quote",
        value: "If staying secure requires discipline from the user, you have designed the security wrong.",
        cite: "Rohan Mehta",
      },
      {
        type: "paragraph",
        value:
          "Good security is quiet. Users should never have to think about it, because the system has already made the safe choice on their behalf.",
      },
    ],
  },
  {
    id: 6,
    slug: "why-simplicity-wins",
    title: "Why Simplicity Wins",
    excerpt:
      "Complexity is easy to add and hard to remove. The products that last are the ones disciplined enough to keep saying no.",
    coverImage: "/blog/cover-6.jpg",
    author: authors.priya.name,
    authorImage: authors.priya.image,
    authorRole: authors.priya.role,
    publishedAt: "2026-03-19",
    readTime: "4 min read",
    category: "Company",
    tags: ["Company", "Philosophy", "Product"],
    featured: false,
    content: [
      {
        type: "paragraph",
        value:
          "Every product faces constant pressure to do more. More features, more options, more surface area. Simplicity is the discipline of resisting that pressure in service of the people who use what you build.",
      },
      {
        type: "heading",
        value: "The cost of one more option",
      },
      {
        type: "paragraph",
        value:
          "A new option is never free. It adds a decision for every user, a path for every test, and a line in every explanation. The feature that helps one percent of users can quietly tax the other ninety-nine.",
      },
      {
        type: "quote",
        value: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
        cite: "Antoine de Saint-Exupery",
      },
      {
        type: "heading",
        value: "Saying no is a strategy",
      },
      {
        type: "paragraph",
        value:
          "Focus is a series of small refusals. We say no to good ideas so that the great ones have room to breathe. The result is a product that does fewer things, and does them so well that nothing else is missed.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Remove before you add.",
          "Default to the choice most people need.",
          "Let depth be discovered, never required.",
        ],
      },
      {
        type: "paragraph",
        value:
          "Simplicity is not the absence of capability. It is capability arranged so well that it feels effortless.",
      },
    ],
  },
];
