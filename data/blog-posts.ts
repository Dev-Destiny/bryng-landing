export interface BlogAuthor {
  name: string;
  role: string;
  /** Initials used in the editorial avatar placeholder until a portrait is added. */
  initials: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  featured?: boolean;
  coverImage?: string;
  /** Art direction for the cover until a final editorial image is available. */
  coverGradient?: string;
  coverTitle: string;
  author: BlogAuthor;
  content: string;
}

const editorialAuthor: BlogAuthor = {
  name: "Bryng Editorial",
  role: "Editorial team",
  initials: "BE",
};

export const blogPosts: BlogPost[] = [
  {
    slug: "paid-for-academic-support-what-to-do-next",
    title: "Paid for academic support and stopped getting replies? Start here.",
    excerpt:
      "Keep a clear record, contact your payment provider, and take a moment before sending more money or sharing more personal information.",
    date: "2026-10-01",
    readTime: 5,
    category: "Student safety",
    featured: true,
    coverImage: "/blog_image_1.jpg",
    coverGradient:
      "linear-gradient(135deg, #17132c 0%, #493f80 52%, #8c83d9 100%)",
    coverTitle: "Pause. Keep your records.",
    author: editorialAuthor,
    content: `
<p>If someone you paid for a service has stopped replying, the uncertainty can make it tempting to send another payment or keep messaging until you get an answer. Pause first. Save what you already have, use the payment provider's official support route, and avoid sharing more sensitive information while you work out what happened.</p>

<h2>Save a complete, calm record</h2>
<p>Keep the original messages, the agreed scope and deadline, invoices, receipts, and any files you received. Save them somewhere you control. Make a short timeline with dates and what happened; stick to facts and avoid editing the screenshots. A tidy record makes it easier to explain the situation to a bank, payment provider, school adviser, or consumer-support service.</p>

<h2>Send one clear follow-up</h2>
<p>Write a brief message that names the agreed next step and gives a reasonable response date. For example: <em>“We agreed that you would send the outline by Thursday. I haven't received it yet. Please let me know by tomorrow at 5 pm whether you can still meet that plan.”</em> Keep the tone neutral and retain a copy.</p>
<p>Avoid threats, public accusations, or sharing the other person's private details online. Those steps can make a disagreement harder to resolve and may expose your own information too.</p>

<h2>Contact the payment provider through its official channel</h2>
<p>Ask whether the transaction can be reviewed, disputed, or recalled. The options depend on how you paid, how long ago the payment was made, and the provider's rules, so do not assume a refund is guaranteed. Use the phone number or help page from the provider's official website or app, and never give anyone your password, PIN, or one-time security code.</p>

<h2>Protect your academic work and account</h2>
<ul>
  <li>Change passwords if you shared account access, and turn on two-step verification where available.</li>
  <li>Remove access to cloud documents or university accounts that the other person no longer needs.</li>
  <li>Check your course or institution's rules before using further outside help.</li>
  <li>If a deadline is close, contact your lecturer, tutor, or student support office early and explain what support you need.</li>
</ul>

<h2>For next time, agree on the basics in writing</h2>
<p>Before paying for any legitimate support service, confirm what it includes, when it will happen, the total cost, how revisions work, and what happens if either side needs to cancel. Pay through a method whose terms you understand, and keep a copy of those terms. No payment setup removes every risk, so read the provider's own refund and dispute policy rather than relying on a slogan.</p>

<p>You deserve support that helps you understand and improve your own work. Keep assessed writing and decisions yours, and check your institution's academic-integrity rules whenever you are unsure.</p>
    `,
  },
  {
    slug: "questions-to-ask-before-choosing-academic-support",
    title: "Choosing academic support online: questions to ask before you pay",
    excerpt:
      "Use these questions to understand the service, costs, communication, and boundaries before you commit.",
    date: "2026-10-07",
    readTime: 6,
    category: "Choosing support",
    coverImage: "/blog_image_2.jpg",
    coverGradient:
      "linear-gradient(135deg, #30220c 0%, #906321 55%, #e9b65a 100%)",
    coverTitle: "Ask before you pay.",
    author: editorialAuthor,
    content: `
<p>“Academic support” can mean very different things: a tutoring session, feedback on a draft, help understanding a method, proofreading, or something that crosses your course's rules. Before you choose a person or service, make the offer specific enough that you can decide whether it is useful and allowed.</p>

<h2>1. What will I receive?</h2>
<p>Ask for a plain-language description of the session or deliverable. Is it a live explanation, comments on your own draft, a study plan, or a set of practice questions? If the answer is vague, ask for an example of the format without requesting another student's private work.</p>
<p>Be cautious if someone offers to write or substantially complete assessed work for you. That may breach your institution's rules and can put your academic standing at risk. A safer brief asks for teaching, feedback, or guidance that leaves the thinking and final submission in your hands.</p>

<h2>2. Does this fit my course rules?</h2>
<p>Check your module handbook or academic-integrity policy. Rules differ between institutions and even between assignments. If you cannot tell whether proofreading, editing, or AI assistance is allowed, ask your lecturer or academic-skills team before sharing a draft.</p>

<h2>3. What is the full cost and cancellation policy?</h2>
<p>Get the total price in writing, including any platform, transfer, or booking charges. Ask when payment is due, what happens if a session is cancelled, and whether missed appointments or unused time are refundable. Read the actual terms and save a copy; a reassuring chat message is not a substitute for knowing the policy.</p>

<h2>4. How will we communicate and protect my information?</h2>
<p>Agree on where messages and files will be shared, who can access them, and how long they will be kept. Share only what is needed for the support. Remove student numbers, login details, personal information, and other people's work from documents unless they are essential and you have permission to include them.</p>

<h2>5. How will I know if the support is working?</h2>
<p>Choose a goal you can check after the session. For example: “I can explain the difference between these two methods,” or “I have a three-step plan for revising my introduction.” This keeps the focus on your learning rather than on receiving work to submit.</p>

<h2>A simple message you can adapt</h2>
<blockquote><p>“I’m working on [topic] and I’m stuck on [specific question]. I’m looking for a [tutoring session / feedback on my own draft / study plan]. Could you explain what the session includes, the total cost, your cancellation terms, and how you handle my files? I’ll check that this kind of support is allowed by my course.”</p></blockquote>

<p>Good support should leave you clearer about the subject and more confident doing the work yourself. If the offer depends on secrecy, asks for your university login, or promises a grade, take a step back and seek advice from your institution.</p>
    `,
  },
  {
    slug: "escrow-explained-questions-to-ask",
    title: "Escrow, explained: what to check before using a payment service",
    excerpt:
      "Understand the basic idea of third-party payment holding, then check the provider's terms before relying on it.",
    date: "2026-10-12",
    readTime: 5,
    category: "Payments & escrow",
    coverGradient:
      "linear-gradient(135deg, #0c2d26 0%, #176d5b 55%, #67c9a4 100%)",
    coverTitle: "Follow the funds.",
    coverImage: "/blog_image_3.jpg",
    author: editorialAuthor,
    content: `
<p>Escrow is a payment arrangement in which a third party holds money until stated conditions are met. It can add structure to a transaction, but the word alone does not tell you who holds the funds, what counts as completion, or how a disagreement is handled. Those details belong in the provider's terms.</p>

<h2>How the basic model works</h2>
<ol>
  <li>The customer and provider agree on the work, price, timing, and release conditions.</li>
  <li>The customer sends the payment to the escrow provider, which confirms whether it has received the funds.</li>
  <li>The provider completes the agreed work or milestone.</li>
  <li>The customer reviews it against the written agreement. The funds are released or handled under the provider's stated process.</li>
</ol>
<p>Services vary. Some hold the full amount, some support staged payments, and some use the term “escrow” for a different payment flow. Do not assume funds are protected until you have checked the provider, the process, and the applicable terms.</p>

<h2>Questions to check in the terms</h2>
<ul>
  <li><strong>Who holds the money?</strong> Identify the legal entity and where to contact it.</li>
  <li><strong>When can funds be released?</strong> Look for a clear review period, release trigger, and what happens if no one responds.</li>
  <li><strong>How do disputes work?</strong> Check deadlines, evidence requirements, fees, and who makes the decision.</li>
  <li><strong>What is refundable?</strong> Read the cancellation and refund rules, including any deductions.</li>
  <li><strong>What will it cost?</strong> Confirm all service, withdrawal, currency-conversion, and payment fees.</li>
  <li><strong>Is the service regulated where I live?</strong> Verify the company and protections through the relevant official regulator or consumer authority.</li>
</ul>

<h2>Write a useful agreement before paying</h2>
<p>Describe the service in a way both sides can check: the specific task, what will be delivered, when it is due, how many revisions are included, and what counts as approval. If you are paying in stages, tie each payment to a concrete step. Keep the agreement and receipts somewhere you can access later.</p>

<h2>Keep the academic boundary clear</h2>
<p>For academic support, payment structure does not change your institution's rules. Use tutoring, feedback, or other permitted help to build your understanding; do not pay someone to produce assessed work that you will submit as your own. When the policy is unclear, ask your institution before proceeding.</p>

<p>Escrow can describe a useful mechanism, but it is not a guarantee by itself. Read the exact service terms, confirm who is responsible for the funds, and choose support that protects your learning as well as your payment.</p>
    `,
  },
  {
    slug: "ask-for-academic-help-without-handing-over-your-work",
    title: "How to ask for academic help without handing over your work",
    excerpt:
      "Turn a broad request into a focused question that gets you useful guidance while keeping the work and learning yours.",
    date: "2026-10-15",
    readTime: 5,
    category: "Study skills",
    coverImage: "/blog_image_4.jpg",
    coverGradient:
      "linear-gradient(135deg, #32172a 0%, #94527c 55%, #e8a4ba 100%)",
    coverTitle: "Bring a question. Leave with a plan.",
    author: editorialAuthor,
    content: `
<p>“Can you help me with my assignment?” is a completely understandable place to start, especially when the brief feels huge. But a smaller, clearer ask makes it easier for a tutor, writing adviser, or study partner to help you learn without taking over the work.</p>

<h2>Start with the point where you got stuck</h2>
<p>Write down the assignment's goal in your own words, what you have tried, and the one question you want answered. You do not need to send your whole draft to ask about a concept or plan.</p>
<ul>
  <li>Instead of “fix my essay,” ask “Can you show me how to make this paragraph's claim more specific?”</li>
  <li>Instead of “do my statistics,” ask “Can you explain when this test is appropriate and help me check my assumptions?”</li>
  <li>Instead of “write my introduction,” ask “Could you help me identify what context a reader needs before my research question?”</li>
</ul>

<h2>Bring your own attempt</h2>
<p>Try a first step before the session: a rough outline, a worked example, a paragraph, or a list of what you already understand. A tutor can then respond to your thinking, point out a gap, and explain a next step. Rough work is useful; it does not need to be polished.</p>

<h2>Agree on the kind of help</h2>
<p>Say what would be useful: explanation, feedback, practice, or help planning your time. For draft feedback, ask for comments you can act on—such as where an argument is unclear or whether evidence supports a claim—rather than asking someone to rewrite the work for you. Before sharing, check that your course permits this kind of support.</p>

<h2>Keep a short learning record</h2>
<p>Afterwards, note three things: what you understand now, what you still need to check, and what you will do next. Use feedback as a prompt to revise in your own words. If a suggestion changes the meaning or makes a claim you cannot support, leave it out and ask a follow-up question.</p>

<h2>Copy-and-edit request</h2>
<blockquote><p>“I’m working on [assignment/topic]. I’ve tried [your attempt], and I’m stuck on [specific question]. Could we focus on [explanation / feedback / practice]? I want to make sure the support fits my course rules, so please don’t write or rewrite assessed sections for me.”</p></blockquote>

<p>Asking for focused help is not a sign that you should already know everything. It is a way to get unstuck while staying the author of your own work.</p>
    `,
  },
  {
    slug: "a-30-minute-plan-for-getting-unstuck",
    title: "A 30-minute reset for when a big assignment feels impossible",
    excerpt:
      "Use one short work session to turn a vague, stressful task into a concrete next step—and a plan for the rest.",
    date: "2026-10-15",
    readTime: 5,
    category: "Study skills",
    coverImage: "/blog_image_5.jpg",
    coverGradient:
      "linear-gradient(135deg, #122843 0%, #35709a 55%, #9fd2dc 100%)",
    coverTitle: "One next step is enough.",
    author: editorialAuthor,
    content: `
<p>When an assignment feels too big to start, planning can quietly turn into another way to avoid it. Try a short reset instead. The goal is not to finish the assignment in 30 minutes; it is to leave with a first action you can actually begin.</p>

<h2>Minutes 0–5: translate the brief</h2>
<p>Open the assignment instructions and highlight the action words: compare, explain, evaluate, design, or reflect. Then write one sentence in your own words about what you need to produce. Note the deadline and any required format. If a key instruction is unclear, mark it as a question for your lecturer rather than guessing.</p>

<h2>Minutes 5–12: make a tiny task list</h2>
<p>Break the work into visible steps. A common starting list might be: understand the question, find sources, choose an approach, outline, draft, revise, and check references. Cross out steps that do not apply. Pick the earliest step you can do without waiting for anyone.</p>

<h2>Minutes 12–22: do one small piece</h2>
<p>Set a timer and work on one task only. For example, collect three promising sources, write a rough answer to the prompt, or list the evidence you need. Keep the result messy and private if that helps you start. Do not use this block to perfect formatting or rewrite the whole plan.</p>

<h2>Minutes 22–27: decide what is still missing</h2>
<p>Look at what you made. What is the main uncertainty now: the topic, the method, the evidence, or how to organize it? Turn that uncertainty into a clear question. You can bring that question to office hours, a library session, or permitted academic-skills support.</p>

<h2>Minutes 27–30: schedule the next block</h2>
<p>Choose a time for your next focused session and give it one concrete outcome, such as “draft three section headings.” Add a little buffer before the actual deadline for unexpected delays and a final review. If the task cannot fit your available time, contact your instructor or student support service early to discuss options.</p>

<h2>If you still feel stuck</h2>
<p>Try changing the conditions: work somewhere quieter, put your phone out of reach for one timer, or ask a classmate to sit with you while you work independently. If stress is affecting your sleep or ability to function, reach out to your institution's wellbeing or counselling service. You do not have to solve everything in one session.</p>

<p>Progress often starts with one small action that makes the next one easier to see. Finish the 30 minutes with a plan, then come back to it when you have the time and energy to continue.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
