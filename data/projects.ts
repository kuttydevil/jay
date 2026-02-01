
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'pwoli-movies',
    title: 'PwoliMovies',
    tagline: 'Decentralized 4K PWA with Watch Parties.',
    category: 'Streaming / PWA',
    executiveSummary: 'PwoliMovies is a modern, single-page application (SPA) that aggregates movie and TV show metadata to provide a seamless streaming experience. Unlike traditional sites, it utilizes a decentralized architecture: it scrapes external APIs and torrent networks (WebTorrent) to find content dynamically, meaning it hosts no illegal files directly. It features a Netflix-caliber UI, robust internationalization (i18n), and is optimized to function as both a standalone PWA and a Telegram Mini App.',
    techStack: [
      'React 18 (TypeScript)',
      'Vite',
      'Tailwind CSS',
      'SWR',
      'React Router DOM v6',
      'PeerJS (WebRTC)',
      'TMDB API',
      'Telegram Web App SDK'
    ],
    keyFeatures: [
      { title: 'Hybrid Streaming Engine', content: 'Users can choose between direct HTTP streaming (via iframe embeds) or Peer-to-Peer streaming using Magnet links.' },
      { title: 'Social Watch Party', content: 'A custom-built room system allowing users to sync video playback with friends in real-time using WebRTC (PeerJS).' },
      { title: 'Internationalization (i18n)', content: 'Full support for multiple languages with URL-based routing (e.g., /en/, /hi/, /es/).' },
      { title: 'Smart Search', content: 'A debounced live-search bar with predictive suggestions and segmented filtering (Movies vs. TV).' },
      { title: 'Progressive Web App (PWA)', content: 'Installable on mobile/desktop with offline fallback capabilities via Service Workers.' },
    ],
    architecture: [
      { title: 'The Data Layer', content: 'Implemented a robust API service layer. Instead of simple fetch calls, used a custom fetchData function with deduplication and in-memory caching. The Torrent Logic hits multiple proxies simultaneously (Promise.allSettled) and cleans filenames using Regex.' },
      { title: 'The SEO Engine', content: 'A custom hook programmatically updates the <head> of the document, changing Title, Description, and OpenGraph tags based on the current route. Includes smart hreflang generation.' },
      { title: 'The Watch Party System', content: 'The host generates a PeerID. The app creates a shareable link. When a guest joins, the host sends data packets (sync_magnet, countdown) to synchronize playback instantly.' },
      { title: 'Telegram Integration', content: 'Detects if running inside Telegram, adapts the UI theme, and utilizes Telegram CloudStorage to sync watch history across devices.' }
    ],
    technicalHighlights: [
      { title: 'Zero-Backend Architecture', content: 'Full-featured streaming platform without a dedicated backend database. All user data is stored client-side or in Telegram cloud.' },
      { title: 'Complex Regex Parsing', content: 'Advanced Regex patterns to sanitize torrent filenames, extract resolution (4K, 1080p), and determine audio codecs for quality badges.' },
      { title: 'Performance Optimization', content: 'ServiceWorker implementation with a "Network First" strategy for navigation but aggressive asset caching.' },
      { title: 'Bot Protection', content: 'Specific routing logic in robots.txt and sitemap.xml to guide Googlebot while blocking spider traps.' }
    ]
  },
  {
    id: 'magnetar',
    title: 'Magnetar',
    tagline: 'Browser-based BitTorrent with WASM.',
    category: 'P2P / WebAssembly',
    executiveSummary: 'Magnetar is a decentralized media player that allows users to stream high-quality video (4K, HDR, HEVC) directly from the BitTorrent network via Magnet links, without requiring a backend server or external software. It overcomes traditional browser limitations by implementing a custom Service Worker proxy to stream binary data to the HTML5 video player and utilizes WebAssembly (FFmpeg) to decode professional audio formats.',
    techStack: [
      'React 18',
      'TypeScript',
      'WebTorrent',
      'Video.js',
      'FFmpeg.wasm',
      'Service Workers',
      'IndexedDB',
      'Vite'
    ],
    keyFeatures: [
      { title: 'Instant Playback', content: 'Streams video sequentially based on priority, allowing playback to start before the file is fully downloaded.' },
      { title: 'Universal Format Support', content: 'Automatically detects unsupported audio codecs (AC3, EAC3, DTS) and transcodes them in real-time to WAV using WebAssembly.' },
      { title: 'Smart Caching (Offline Mode)', content: 'Uses a custom IDBChunkStore to save downloaded chunks to IndexedDB, enabling instant resume across sessions and offline playback.' },
      { title: 'Network Visualization', content: '"Stats for Nerds" overlay providing real-time data on swarm health, peer connections, and throughput.' },
    ],
    architecture: [
      { title: 'The Streaming Pipeline', content: 'The Service Worker intercepts HTTP requests from the video player and opens a MessageChannel to the Main Thread. The Main Thread pulls binary chunks from the P2P swarm and streams them back via the Service Worker.' },
      { title: 'Audio Transcoding Engine', content: 'Analyzes file mimetype. If unsupported, spins up an FFmpeg WebAssembly instance to pipe audio tracks through FFmpeg, converting to PCM/WAV on the fly.' },
      { title: 'Persistence Layer', content: 'Custom storage adapter for WebTorrent that intercepts read/write requests and saves pieces as Blobs into IndexedDB.' }
    ],
    technicalHighlights: [
      { title: 'Polyfilling Node.js', content: 'Shimmed complex Node.js modules (Buffer, stream, events) to make the BitTorrent protocol work inside a browser.' },
      { title: 'Complex Peer ID Generation', content: 'Implemented logic to mimic various torrent clients (Azureus, uTorrent) to prevent blocking.' },
      { title: 'Memory Management', content: 'Implemented strict memory limits (1.5GB) in the WASM transcoder to prevent browser tab crashes.' }
    ]
  },
  {
    id: 'aura-console',
    title: 'Aura Console',
    tagline: 'Multimodal Live Interface.',
    category: 'AI / Real-time',
    executiveSummary: 'Aura Console is a next-generation AI interface that interacts with the user through low-latency voice, webcam video, and screen sharing simultaneously. Unlike traditional chatbots, this application uses a persistent WebSocket connection to stream audio and video to the Gemini Multimodal Live API. It features a unique "Self-Improving" capability where the AI can write its own JavaScript tools on the fly.',
    techStack: [
      'React 18',
      'TypeScript',
      'Gemini Multimodal Live API',
      'Web Audio API',
      'Zustand',
      'Vega-Lite',
      'Web Workers'
    ],
    keyFeatures: [
      { title: 'Real-Time Voice Mode', content: 'Full-duplex audio streaming allowing users to talk to the AI naturally with interruptibility.' },
      { title: 'Visual Context', content: 'Streams webcam feed or screen capture to the AI, allowing it to analyze what the user is looking at in real-time.' },
      { title: 'Dynamic Tool Creation', content: 'The AI can propose new features (e.g., "Create a timer") and upon approval, the app compiles and executes this code.' },
      { title: 'Live Logger', content: 'A developer console that visualizes raw JSON events, audio buffers, and tool calls.' }
    ],
    architecture: [
      { title: 'The WebSocket Client', content: 'Wraps the @google/genai library and manages connection state. Extends EventEmitter to handle binary audio events and JSON tool calls.' },
      { title: 'The Audio Pipeline', content: 'Uses AudioWorklets to process mic input (downsampling to 16kHz PCM) off the main thread. AudioStreamer buffers incoming PCM chunks for smooth playback.' },
      { title: 'Dynamic Tool Execution', content: 'AI sends code strings which are executed inside a secured Web Worker using new Function(), keeping the main thread safe.' },
      { title: 'Visual Streaming', content: 'Captures video frames via canvas, scales them down, converts to Base64, and streams to the AI over the socket.' }
    ],
    technicalHighlights: [
      { title: 'AudioWorklet Implementation', content: 'Moved audio processing off the main thread to prevent UI freezing and audio crackling.' },
      { title: 'Bi-directional Buffering', content: 'Custom jitter buffer queues incoming audio chunks and plays them sequentially to handle network latency.' },
      { title: 'Sandboxed Code Execution', content: 'Security layer running AI-generated code in a distinct Worker scope.' }
    ]
  },
  {
    id: 'the-council',
    title: 'The Council',
    tagline: 'Multi-Agent Audio Simulation.',
    category: 'AI / Simulation',
    executiveSummary: 'The Council is a Progressive Web App (PWA) that transforms the Google Gemini Multimodal Live API into a "Boardroom Simulator." Instead of talking to a single AI, the user acts as the Chairperson observing 10 autonomous agents. The system uses advanced prompt engineering and tool-use to force the AI to simulate interactions between agents—interrupting each other, handing off conversation, and voting.',
    techStack: [
      'React 18',
      'TypeScript',
      'Gemini Multimodal Live API',
      'Web Audio API',
      'Tailwind CSS',
      'Service Workers'
    ],
    keyFeatures: [
      { title: 'Multi-Persona Simulation', content: 'Maintains 10 distinct acoustic/personality profiles. AI modifies pitch/speed to sound like different people.' },
      { title: 'Hot Potato Protocol', content: 'Strict conversational handoff system. Agents must use tools to pass the turn to specific peers.' },
      { title: 'Live Voting System', content: 'Real-time dashboard tracking consensus. Agents use cast_vote tools to register opinions.' },
      { title: 'Precise Speaker Detection', content: 'Custom audio scheduling engine syncs UI avatars exactly with audio playback.' }
    ],
    architecture: [
      { title: 'The "Brain"', content: 'Manages WebSocket lifecycle with session resumption logic to preserve debate context if connection drops.' },
      { title: 'The Audio Scheduler', content: 'Queues audio chunks and uses a high-frequency polling loop to sync visual avatars with the specific millisecond of playback.' },
      { title: 'State Machine via Tools', content: 'Uses tool calls (address_member, cast_vote) not just for data, but to control application state and UI flow.' }
    ],
    technicalHighlights: [
      { title: 'Prompt Engineering Architecture', content: 'Masterclass in conditioning, explicitly programming acoustic profiles and behavior protocols into the system prompt.' },
      { title: 'Intelligent Audio Buffering', content: 'Queue system serializes decoding of audio chunks to prevent race conditions and out-of-order playback.' },
      { title: 'PCM Transcoding', content: 'Manually implemented float32ToInt16PCM conversion to handle raw binary protocols.' }
    ]
  },
  {
    id: 'pwoli-search',
    title: 'PwoliSearch Pro',
    tagline: 'Serverless Torrent Aggregator.',
    category: 'Search / Serverless',
    executiveSummary: 'PwoliSearch Pro is a modern search engine that aggregates results from over 15 distinct torrent networks into a single, ad-free interface. It operates a custom-built API that scrapes, parses, and normalizes HTML data from source sites in real-time, handling domain rotation and mirror management automatically.',
    techStack: [
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Cheerio',
      'Vercel Serverless'
    ],
    keyFeatures: [
      { title: '"Combo" Search Mode', content: 'Triggers parallel requests to all supported providers simultaneously, aggregating thousands of results in seconds.' },
      { title: 'Smart Mirror Rotation', content: 'Automatically iterates through known domain mirrors to bypass ISP blocks or downtime.' },
      { title: 'Deep Metadata Extraction', content: 'Enters detail pages to extract high-res posters and file lists, even from unstructured forum posts.' },
      { title: 'Cinematic UI', content: 'Dynamic interface with skeleton loading, backdrop blurs, and CSS-based particle animations.' }
    ],
    architecture: [
      { title: 'Serverless Scraper API', content: 'Express app wrapped for Serverless. Uses a Factory Pattern to dynamically load scraping modules based on user request.' },
      { title: 'Scraping Logic', content: 'Implements domain resilience loops. Uses Regex to parse raw text from forum posts into structured data.' },
      { title: 'Aggregation Layer', content: 'Executes scrapers concurrently using Promise.allSettled, ensuring partial failures don\'t crash the search.' }
    ],
    technicalHighlights: [
      { title: 'Polymorphic Scraping', content: 'Handles disparate data structures (JSON, HTML Tables, DOM trees) within a single unified interface.' },
      { title: 'Advanced CSS', content: 'Custom keyframe animations and glassmorphism utility classes for a native app feel.' },
      { title: 'Error Boundaries', content: 'Defensive scraping logic ensures stability even if source site HTML structures change.' }
    ]
  },
  {
    id: 'prohome-assist',
    title: 'ProHome Assist',
    tagline: 'AI Diagnostics & PWA.',
    category: 'AI / Service',
    executiveSummary: 'ProHome Assist is a next-generation service platform for the Qatar market. It uses Google Gemini (Vision + Text) to visually analyze home maintenance problems and conduct structured diagnostic interviews in multiple languages (Arabic, Hindi, Urdu). It requires zero backend infrastructure for bookings, utilizing WhatsApp Deep Linking and Client-Side Canvas generation.',
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Google Gemini 1.5 Flash',
      'Tailwind CSS',
      'Service Workers'
    ],
    keyFeatures: [
      { title: 'AI Visual Diagnosis', content: 'Users upload photos of defects. AI identifies equipment models and damage to initiate context-aware chats.' },
      { title: 'Polyglot AI Interviewer', content: 'Dynamically switches languages to interview users, then translates summaries for technicians.' },
      { title: 'Digital Receipt Generation', content: 'Generates professional booking cards with QR codes entirely in the browser using Canvas API.' },
      { title: 'Stateless Booking', content: 'Persists state in LocalStorage and hands off final transactions to WhatsApp, reducing hosting costs to $0.' }
    ],
    architecture: [
      { title: 'AI Triage Engine', content: 'Robust wrapper around Gemini API with strict system prompts to limit questions and ensure structured outputs. Implements exponential backoff.' },
      { title: 'Client-Side Image Generation', content: 'Programmatically draws booking details and user photos onto an HTML5 Canvas to generate shareable receipt images.' },
      { title: 'PWA & Offline Strategy', content: 'Caches App Shell and assets for instant loading on 4G connections.' }
    ],
    technicalHighlights: [
      { title: 'React 19 Implementation', content: 'Utilizes the latest bleeding-edge React features.' },
      { title: 'Complex Prompt Engineering', content: 'Engineered a state-machine within the prompt to force the LLM to behave like a structured form wizard.' },
      { title: 'SEO Engineering', content: 'Embedded massive structured JSON-LD graphs for local business schema.' }
    ]
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI',
    tagline: 'Modular AI-Native ERP.',
    category: 'Enterprise / SaaS',
    executiveSummary: 'Nexus AI is a comprehensive ERP platform where a central LLM orchestrates operations across multiple verticals. It uses a "Plugin Architecture" to hot-swap AI system prompts and tools based on the active business mode. It features a Self-Writing Automation Engine where the AI compiles natural language rules into executable JSON logic.',
    techStack: [
      'React 19',
      'TypeScript',
      'Supabase',
      'Google Gemini 1.5 Pro',
      'Deno',
      'Recharts'
    ],
    keyFeatures: [
      { title: 'Polymorphic Dashboard', content: 'UI morphs based on active plugins, rendering different metrics and tools without page reloads.' },
      { title: 'Natural Language Automation', content: 'Users describe rules in English; AI translates them into stored JSON logic executed by the system.' },
      { title: 'AI Thought Trace', content: 'Debugging tool showing the raw "Chain of Thought" and function calls for every AI action.' },
      { title: 'Live Collaboration', content: 'Uses Supabase Realtime to sync data instantly across clients.' }
    ],
    architecture: [
      { title: 'Plugin Architecture', content: 'Strict interfaces for business configs allow hot-loading of system prompts and tool definitions.' },
      { title: 'Central Dispatcher', content: 'Routes LLM tool calls to internal services and logs activity for audit trails.' },
      { title: 'Automation Engine', content: 'Evaluates JSON-based logic rules against live data to trigger side effects.' },
      { title: 'Serverless Edge Functions', content: 'Deno-based cron jobs trigger AI analysis tasks automatically.' }
    ],
    technicalHighlights: [
      { title: 'Explainable AI (XAI)', content: 'Renders raw chain-of-thought to build enterprise trust.' },
      { title: 'Database-Driven Realtime State', content: 'Custom hooks subscribe to PostgreSQL changes for a completely reactive UI.' },
      { title: 'Defensive Prompting', content: 'Structured prompts with few-shot examples ensure deterministic code generation.' }
    ]
  },
  {
    id: 'p4parts',
    title: 'P4Parts Qatar',
    tagline: 'SEO-First E-commerce PWA.',
    category: 'E-commerce',
    executiveSummary: 'P4Parts is a specialized marketplace for automotive spare parts. It is engineered for organic search dominance with a serverless function that auto-generates XML sitemaps for thousands of products. It includes a custom Admin Dashboard for inventory management and a VIN-first search interface.',
    techStack: [
      'React 18',
      'TypeScript',
      'Supabase',
      'Vercel Serverless',
      'Tailwind CSS'
    ],
    keyFeatures: [
      { title: 'Serverless SEO Engine', content: 'Custom API endpoint that queries the DB in real-time to generate up-to-the-second XML sitemaps.' },
      { title: 'Custom Admin CMS', content: 'Secure dashboard for inventory management with client-side image compression.' },
      { title: 'VIN-Match Workflow', content: 'Specialized inquiry form for car registration/VIN verification.' },
      { title: 'WhatsApp Logistics', content: 'Checkout flow generates pre-filled WhatsApp messages for delivery drivers.' }
    ],
    architecture: [
      { title: 'Serverless SEO', content: 'Dynamic route fetches all products and constructs XML with correct lastmod dates on the fly.' },
      { title: 'Schema Injection', content: 'Programmatically generates JSON-LD structured data for products and local business info.' },
      { title: 'Admin CMS', content: 'Optimistic UI updates for order status changes. Secure CRUD interface.' }
    ],
    technicalHighlights: [
      { title: 'Regex-Heavy Validation', content: 'Strict input sanitization for region-specific phone formats.' },
      { title: 'Database Security (RLS)', content: 'Strict Row Level Security policies ensure API security.' },
      { title: 'Performance Animation', content: 'CSS-based animations for logistics visualizations to keep main thread free.' }
    ]
  },
  {
    id: 'al-qatarsouq',
    title: 'Al QatarSouq',
    tagline: 'AI-Native Marketplace.',
    category: 'Marketplace / AI',
    executiveSummary: 'Al QatarSouq is a multi-vendor e-commerce ecosystem powered by "Agentic" AI. Sellers use an AI Growth Engine to generate marketing campaigns and assets. The platform includes AI-powered Identity Verification (KYC) and a real-time logistics dashboard.',
    techStack: [
      'React 18',
      'TypeScript',
      'TanStack Query',
      'Supabase',
      'Gemini 1.5 Pro'
    ],
    keyFeatures: [
      { title: 'AI Growth Engine', content: '"Architect" and "Creator" agents plan campaigns and generate visual assets.' },
      { title: 'Automated KYC', content: 'AI performs OCR on IDs and cross-references data to prevent fraud.' },
      { title: 'Dynamic Inventory Intelligence', content: 'Predicts stock depletion and suggests reordering.' },
      { title: 'Smart Delivery Routing', content: 'AI optimizes delivery routes for drivers.' }
    ],
    architecture: [
      { title: 'Agentic Workflow', content: 'Uses system prompts to create specialized agents (Architect/Creator) that output structured JSON blueprints.' },
      { title: 'Atomic Order Processing', content: 'PostgreSQL Stored Procedure handles complex multi-seller orders in a single transaction.' },
      { title: 'Real-Time Logistics', content: 'Supabase Realtime updates tracking pages instantly when drivers update status.' }
    ],
    technicalHighlights: [
      { title: 'Database Diagnostics', content: 'Admin tool queries Postgres system catalogs to find and fix missing security policies.' },
      { title: 'Dual-Language Architecture', content: 'Full RTL layout support and dynamic font switching for Arabic.' },
      { title: 'Defensive AI Coding', content: 'Logs raw AI output to debug hallucinations in production.' }
    ]
  },
  {
    id: 'flowtiva',
    title: 'Flowtiva',
    tagline: 'AI Business Automation Suite.',
    category: 'SaaS / Automation',
    executiveSummary: 'Flowtiva is an autonomous "nervous system" for business. It utilizes a proprietary "Headless Browser Fleet" to automate WhatsApp and Instagram without official APIs. It features a Visual Workflow Builder and an AI Viral Reposter that uses Computer Vision to rewrite and repost trending content.',
    techStack: [
      'React 18',
      'React Flow',
      'Python',
      'Selenium',
      'OpenCV',
      'Supabase',
      'Gemini 1.5 Pro'
    ],
    keyFeatures: [
      { title: 'Hybrid Automation', content: 'Automates messaging via browser simulation to bypass API limits.' },
      { title: 'Visual Workflow Builder', content: 'Drag-and-drop canvas for creating logic (If -> Then) without code.' },
      { title: 'AI Viral Reposter', content: 'Watches competitors, understands video context via Vision AI, and reposts with new captions.' },
      { title: 'Self-Healing Worker Fleet', content: 'Orchestrator monitors and restarts zombie browser processes.' }
    ],
    architecture: [
      { title: 'Command & Control', content: 'Python orchestrator monitors DB for start signals and spawns subprocesses.' },
      { title: 'Browser Automation', content: 'Selenium wrapper with stealth scripts to simulate human activity and avoid detection.' },
      { title: 'Visual Logic Engine', content: 'Traverses the React Flow graph to execute automation steps.' }
    ],
    technicalHighlights: [
      { title: 'Concurrency Locking', content: 'Postgres RPC functions ensure atomic job claiming in a multi-server environment.' },
      { title: 'AI Governance', content: 'Tracks token usage and enforces rate limits per tenant.' },
      { title: 'Multi-Tenancy RLS', content: 'Strict data isolation ensures users only access their own data.' }
    ]
  }
];
