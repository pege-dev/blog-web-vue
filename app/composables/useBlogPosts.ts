export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  imageUrl: string
  author: {
    name: string
    avatar: string
    role: string
  }
  tags: string[]
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'digital-minimalism',
    title: 'The Future of Digital Minimalism',
    excerpt: 'An exploration of how we can reclaim our attention in the age of constant distraction and notification overload.',
    content: `
      <p>In an era where our attention is constantly being pulled in a thousand different directions, digital minimalism has emerged as a powerful philosophy for reclaiming our focus and mental clarity.</p>
      
      <h2>What is Digital Minimalism?</h2>
      <p>Digital minimalism is a philosophy of technology use in which you focus your online time on a small number of carefully selected and optimized activities that strongly support things you value, and then happily miss out on everything else.</p>
      
      <p>This approach stands in stark contrast to the maximalist mindset that dominates our current relationship with technology—the idea that more connectivity is always better, and that missing out on any potential benefit is a loss.</p>
      
      <h2>The Cost of Constant Connectivity</h2>
      <p>Research has shown that the average person checks their phone 96 times per day. Each of these interruptions fragments our attention and makes it harder to engage in deep, meaningful work.</p>
      
      <blockquote>The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy. — Cal Newport</blockquote>
      
      <h2>Practical Steps to Digital Minimalism</h2>
      <p>Here are some actionable steps you can take to embrace digital minimalism:</p>
      <ul>
        <li><strong>Audit your digital tools:</strong> Make a list of all the apps and services you use regularly. For each one, ask yourself: Does this directly support something I deeply value?</li>
        <li><strong>Establish phone-free zones:</strong> Designate certain times and places where phones are not allowed—like the dinner table or the first hour after waking up.</li>
        <li><strong>Batch your communication:</strong> Instead of responding to messages as they arrive, set specific times to check and respond to emails and messages.</li>
        <li><strong>Embrace boredom:</strong> Resist the urge to fill every moment of downtime with digital stimulation. Boredom can be a catalyst for creativity.</li>
      </ul>
      
      <h2>The Benefits of Going Minimal</h2>
      <p>Those who have embraced digital minimalism report significant improvements in their quality of life:</p>
      <ul>
        <li>Increased focus and productivity</li>
        <li>Better sleep quality</li>
        <li>Deeper relationships with friends and family</li>
        <li>More time for hobbies and creative pursuits</li>
        <li>Reduced anxiety and improved mental health</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Digital minimalism isn't about rejecting technology—it's about being intentional with how we use it. By carefully curating our digital lives, we can harness the benefits of technology while avoiding its pitfalls.</p>
      
      <p>The goal is not to live without technology, but to live with technology in a way that supports our values and enhances our lives rather than diminishing them.</p>
    `,
    category: 'Lifestyle',
    date: 'Oct 26, 2023',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      role: 'Senior Editor'
    },
    tags: ['Productivity', 'Technology', 'Wellness', 'Focus']
  },
  {
    id: '2',
    slug: 'serif-typography',
    title: 'Understanding Serif Typography',
    excerpt: 'Why font choice matters more than you think in modern web design and how to pair them effectively.',
    content: `
      <p>Typography is one of the most powerful tools in a designer's arsenal. The fonts we choose communicate far more than just the words they display—they convey mood, personality, and credibility.</p>
      
      <h2>The Anatomy of Serif Fonts</h2>
      <p>Serif fonts are characterized by small decorative strokes (called "serifs") at the ends of their letterforms. These serifs originated from the Roman alphabet inscriptions, where the stone carvers would add finishing strokes to their letters.</p>
      
      <p>Common serif fonts include Times New Roman, Georgia, Garamond, and the increasingly popular Newsreader—which we use here at The Daily Blog.</p>
      
      <h2>When to Use Serif Fonts</h2>
      <p>Serif fonts excel in certain contexts:</p>
      <ul>
        <li><strong>Long-form content:</strong> The serifs help guide the eye along lines of text, making them ideal for articles and books.</li>
        <li><strong>Print materials:</strong> Serifs were designed for print and still perform beautifully in that medium.</li>
        <li><strong>Establishing authority:</strong> Serif fonts convey tradition, reliability, and professionalism.</li>
        <li><strong>Editorial design:</strong> Newspapers and magazines have long relied on serif fonts for their timeless appeal.</li>
      </ul>
      
      <h2>Pairing Serifs with Sans-Serifs</h2>
      <p>One of the most effective typographic techniques is pairing a serif font with a sans-serif font. This creates visual contrast and hierarchy while maintaining harmony.</p>
      
      <blockquote>Good typography is invisible. Bad typography is everywhere. — Oliver Reichenstein</blockquote>
      
      <p>Some classic pairings include:</p>
      <ul>
        <li>Newsreader (serif) + Noto Sans (sans-serif)</li>
        <li>Playfair Display (serif) + Source Sans Pro (sans-serif)</li>
        <li>Merriweather (serif) + Open Sans (sans-serif)</li>
      </ul>
      
      <h2>The Future of Serif Typography</h2>
      <p>After years of sans-serif dominance in digital design, we're seeing a renaissance of serif fonts on the web. High-resolution displays have made serifs more legible than ever, and designers are rediscovering their warmth and character.</p>
      
      <p>Variable fonts are also opening new possibilities, allowing designers to fine-tune weight, width, and other properties for optimal readability across devices.</p>
    `,
    category: 'Design',
    date: 'Oct 24, 2023',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80',
    author: {
      name: 'Marcus Webb',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      role: 'Design Lead'
    },
    tags: ['Typography', 'Design', 'Web Design', 'Fonts']
  },
  {
    id: '3',
    slug: 'week-in-tokyo',
    title: 'A Week in Tokyo',
    excerpt: 'Exploring the hidden alleys, neon lights, and incredible culinary scene of Shinjuku.',
    content: `
      <p>Tokyo is a city of contrasts—ancient temples stand in the shadow of gleaming skyscrapers, and quiet residential streets give way to neon-lit entertainment districts. After spending a week exploring this incredible metropolis, I'm convinced it's one of the most fascinating cities on Earth.</p>
      
      <h2>Day 1-2: Shinjuku and Shibuya</h2>
      <p>My journey began in Shinjuku, the bustling commercial hub of Tokyo. The sheer scale of Shinjuku Station—the world's busiest railway station—is overwhelming at first, but you quickly learn to navigate its labyrinthine corridors.</p>
      
      <p>The Golden Gai district, with its narrow alleys packed with tiny bars, became my evening haunt. Each bar seats only 6-8 people, creating an intimate atmosphere where conversations with locals flow as freely as the sake.</p>
      
      <h2>Day 3-4: Traditional Tokyo</h2>
      <p>Seeking respite from the urban intensity, I spent two days exploring Tokyo's traditional side. The Senso-ji Temple in Asakusa, Tokyo's oldest temple, offers a glimpse into Japan's spiritual heritage.</p>
      
      <blockquote>In Tokyo, the past and future exist simultaneously, creating a unique temporal experience unlike anywhere else in the world.</blockquote>
      
      <p>The Meiji Shrine, nestled in a forest in the heart of the city, provides a peaceful escape from the surrounding Harajuku fashion district.</p>
      
      <h2>Day 5-6: Food Adventures</h2>
      <p>Tokyo has more Michelin stars than any other city in the world, but some of the best food I had was at humble ramen shops and izakayas. Highlights included:</p>
      <ul>
        <li><strong>Tsukiji Outer Market:</strong> Fresh sushi for breakfast—a life-changing experience</li>
        <li><strong>Omoide Yokocho:</strong> Yakitori grilled over charcoal in smoky alleyways</li>
        <li><strong>Depachika:</strong> Department store basement food halls with incredible variety</li>
        <li><strong>Late-night ramen:</strong> The perfect end to any evening</li>
      </ul>
      
      <h2>Day 7: Reflections</h2>
      <p>A week in Tokyo barely scratches the surface. The city rewards repeated visits, revealing new layers with each exploration. I left with a full camera roll, a satisfied stomach, and plans to return.</p>
    `,
    category: 'Travel',
    date: 'Oct 22, 2023',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      role: 'Travel Writer'
    },
    tags: ['Travel', 'Japan', 'Tokyo', 'Food', 'Culture']
  },
  {
    id: '4',
    slug: 'coding-for-designers',
    title: 'Coding for Designers',
    excerpt: 'Bridging the gap between visual design and frontend development to create better products.',
    content: `
      <p>The line between design and development is blurring. Today's most effective designers understand code, and the best developers have an eye for design. This convergence is creating better products and more collaborative teams.</p>
      
      <h2>Why Designers Should Learn to Code</h2>
      <p>Understanding code doesn't mean you need to become a full-stack developer. Even a basic understanding of HTML, CSS, and JavaScript can transform how you approach design:</p>
      <ul>
        <li><strong>Better communication:</strong> Speaking the same language as developers reduces friction and misunderstandings.</li>
        <li><strong>Realistic designs:</strong> Understanding technical constraints helps you design solutions that are actually buildable.</li>
        <li><strong>Faster iteration:</strong> Being able to prototype in code speeds up the design process.</li>
        <li><strong>Career growth:</strong> Hybrid skills are increasingly valuable in the job market.</li>
      </ul>
      
      <h2>Where to Start</h2>
      <p>If you're a designer looking to learn code, here's a recommended path:</p>
      
      <h3>1. HTML & CSS (Week 1-4)</h3>
      <p>Start with the fundamentals. HTML provides structure, CSS provides style. Together, they're the foundation of every website.</p>
      
      <h3>2. CSS Frameworks (Week 5-6)</h3>
      <p>Learn Tailwind CSS or Bootstrap to speed up your styling workflow. These frameworks provide pre-built components and utility classes.</p>
      
      <h3>3. JavaScript Basics (Week 7-10)</h3>
      <p>JavaScript adds interactivity. Start with DOM manipulation and event handling before moving to frameworks.</p>
      
      <blockquote>Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs</blockquote>
      
      <h2>Tools for Designer-Developers</h2>
      <p>Several tools are designed specifically for designers who code:</p>
      <ul>
        <li><strong>Figma:</strong> Design tool with developer handoff features</li>
        <li><strong>VS Code:</strong> Code editor with excellent design-friendly extensions</li>
        <li><strong>CodePen:</strong> Browser-based environment for experimenting with code</li>
        <li><strong>Storybook:</strong> Tool for building and documenting UI components</li>
      </ul>
      
      <h2>The Future is Hybrid</h2>
      <p>As design systems and component libraries become standard, the ability to work across disciplines becomes increasingly valuable. The designers who thrive will be those who can translate their vision into working code.</p>
    `,
    category: 'Tech',
    date: 'Oct 20, 2023',
    readTime: '8 min read',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80',
    author: {
      name: 'Alex Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      role: 'Product Designer'
    },
    tags: ['Coding', 'Design', 'Web Development', 'Career']
  },
  {
    id: '5',
    slug: 'sustainable-living',
    title: 'Sustainable Living 101',
    excerpt: 'Small changes you can make in your daily routine to reduce your environmental footprint.',
    content: `
      <p>Climate change can feel overwhelming, but individual actions do matter. While systemic change is essential, the choices we make in our daily lives collectively have a significant impact. Here's how to start living more sustainably without completely overhauling your lifestyle.</p>
      
      <h2>Start in the Kitchen</h2>
      <p>Food production accounts for about 26% of global greenhouse gas emissions. Small changes in how we eat can make a big difference:</p>
      <ul>
        <li><strong>Reduce food waste:</strong> Plan meals, use leftovers creatively, and compost what you can't eat.</li>
        <li><strong>Eat more plants:</strong> You don't have to go fully vegan—even reducing meat consumption by one day a week helps.</li>
        <li><strong>Buy local and seasonal:</strong> Reduces transportation emissions and supports local farmers.</li>
        <li><strong>Avoid single-use plastics:</strong> Bring reusable bags, containers, and water bottles.</li>
      </ul>
      
      <h2>Rethink Transportation</h2>
      <p>Transportation is another major source of emissions. Consider these alternatives:</p>
      <ul>
        <li>Walk or bike for short trips</li>
        <li>Use public transportation when possible</li>
        <li>Carpool or use ride-sharing services</li>
        <li>If buying a car, consider electric or hybrid options</li>
      </ul>
      
      <blockquote>We don't need a handful of people doing zero waste perfectly. We need millions of people doing it imperfectly. — Anne Marie Bonneau</blockquote>
      
      <h2>Energy at Home</h2>
      <p>Simple changes can significantly reduce your home energy consumption:</p>
      <ul>
        <li><strong>Switch to LED bulbs:</strong> They use 75% less energy than incandescent bulbs.</li>
        <li><strong>Unplug devices:</strong> "Phantom load" from plugged-in devices wastes energy.</li>
        <li><strong>Adjust your thermostat:</strong> Even 1-2 degrees makes a difference.</li>
        <li><strong>Consider renewable energy:</strong> Many utilities offer green energy options.</li>
      </ul>
      
      <h2>The Mindset Shift</h2>
      <p>Perhaps the most important change is shifting from a consumption mindset to a stewardship mindset. Before buying something new, ask yourself:</p>
      <ul>
        <li>Do I really need this?</li>
        <li>Can I borrow, rent, or buy it secondhand?</li>
        <li>How long will it last?</li>
        <li>What happens to it when I'm done with it?</li>
      </ul>
      
      <p>Sustainable living isn't about perfection—it's about progress. Start with one or two changes, build habits, and gradually expand your efforts. Every action counts.</p>
    `,
    category: 'Lifestyle',
    date: 'Oct 18, 2023',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    author: {
      name: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
      role: 'Sustainability Editor'
    },
    tags: ['Sustainability', 'Environment', 'Lifestyle', 'Green Living']
  },
  {
    id: '6',
    slug: 'future-web-design',
    title: 'The Future of Web Design in 2024',
    excerpt: 'An in-depth look at the trends shaping the internet. From AI-generated layouts to maximalist typography.',
    content: `
      <p>Web design is evolving faster than ever. As we look ahead to 2024, several trends are emerging that will reshape how we create and experience the web.</p>
      
      <h2>AI-Powered Design</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the design process. From generating layouts to writing copy, AI tools are augmenting human creativity:</p>
      <ul>
        <li><strong>Generative design:</strong> AI can create multiple design variations based on constraints and preferences.</li>
        <li><strong>Personalization at scale:</strong> Websites that adapt in real-time to individual users.</li>
        <li><strong>Automated accessibility:</strong> AI tools that identify and fix accessibility issues.</li>
      </ul>
      
      <h2>The Return of Maximalism</h2>
      <p>After years of minimalist dominance, we're seeing a shift toward bolder, more expressive designs:</p>
      <ul>
        <li>Large, experimental typography</li>
        <li>Vibrant color palettes</li>
        <li>Complex layouts and overlapping elements</li>
        <li>Rich animations and micro-interactions</li>
      </ul>
      
      <blockquote>Good design is obvious. Great design is transparent. — Joe Sparano</blockquote>
      
      <h2>Immersive Experiences</h2>
      <p>The line between websites and applications continues to blur. Users expect immersive, app-like experiences:</p>
      <ul>
        <li><strong>3D elements:</strong> WebGL and Three.js are making 3D more accessible.</li>
        <li><strong>Scroll-triggered animations:</strong> Storytelling through scrolling.</li>
        <li><strong>Spatial interfaces:</strong> Preparing for AR/VR integration.</li>
      </ul>
      
      <h2>Performance as a Feature</h2>
      <p>With Core Web Vitals affecting search rankings, performance is no longer optional:</p>
      <ul>
        <li>Edge computing and CDNs</li>
        <li>Image optimization and lazy loading</li>
        <li>Code splitting and tree shaking</li>
        <li>Server-side rendering and static generation</li>
      </ul>
      
      <h2>Sustainable Web Design</h2>
      <p>The environmental impact of the internet is gaining attention. Sustainable web design focuses on:</p>
      <ul>
        <li>Reducing page weight and data transfer</li>
        <li>Choosing green hosting providers</li>
        <li>Optimizing for energy efficiency</li>
        <li>Designing for longevity</li>
      </ul>
      
      <p>The future of web design is exciting, challenging, and full of possibilities. The designers who thrive will be those who embrace new technologies while staying grounded in timeless principles of good design.</p>
    `,
    category: 'Technology',
    date: 'Oct 24, 2023',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
    author: {
      name: 'Jordan Lee',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      role: 'Tech Editor'
    },
    tags: ['Web Design', 'Technology', 'Trends', 'AI', 'UX']
  }
]

export const useBlogPosts = () => {
  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug)
  }

  const getAllPosts = (): BlogPost[] => {
    return blogPosts
  }

  const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
    const currentPost = getPostBySlug(currentSlug)
    if (!currentPost) return blogPosts.slice(0, limit)
    
    return blogPosts
      .filter(post => post.slug !== currentSlug)
      .filter(post => post.category === currentPost.category || post.tags.some(tag => currentPost.tags.includes(tag)))
      .slice(0, limit)
  }

  return {
    getPostBySlug,
    getAllPosts,
    getRelatedPosts
  }
}
