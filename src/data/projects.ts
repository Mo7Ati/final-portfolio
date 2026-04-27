export type ProjectLink = { label: string; url: string }

export type ProjectScreenshot = {
  src: string
  caption?: string
  poster?: string
}

export type ProjectSection = {
  title: string
  description?: string
  screenshots: ProjectScreenshot[]
}

export type ProjectMedia = {
  cover: string
  gallery: string[]
  video: string
}

export type Project = {
  n: string
  slug: string
  name: string
  desc: string
  tags: string[]
  role: string
  year: string
  summary: string
  highlights: string[]
  media: ProjectMedia
  links: ProjectLink[]
  sections: ProjectSection[]
  portrait?: boolean
}

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export const PROJECTS: Project[] = [
  {
    n: "01",
    slug: "dawly-store",
    name: "Dawly Store",
    desc: "Multivendor e-commerce platform connecting customers and store owners in one marketplace.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Laravel",
      "Inertia",
      "Tailwind",
      "shadcn",
      "Stripe",
      "Sanctum",
      "MySQL",
      "PHP",
      "laravel Cloud"
    ],
    role: "Full-stack",
    year: "2025",
    summary:
      "Dawly Store is a multivendor e-commerce platform built around three actors — customers who shop across stores, vendors who run their own storefront, and administrators who oversee the whole marketplace. A Next.js storefront consumes a Laravel REST API, while the admin and store dashboards run inside Laravel via Inertia.js and React.",
    highlights: [
      "Customer storefront with dynamic landing sections, category and store browsing, filtering, and product detail pages",
      "Cart grouped by store, address-aware checkout, and Stripe-powered payments with SSL encryption",
      "Admin dashboard for platform-wide management of stores, orders, products, transactions, wallets, admins, roles, and landing-page sections",
      "Per-store dashboard for vendors to manage products, categories, options, add-ons, orders, subscriptions, and billing",
      "Auth with Laravel Sanctum and Fortify — login, registration, password reset — plus separate guards for customers, stores, and admins",
      "Subscription and commission engine: vendor plans with checkout, swap, resume, cancel, and billing history",
      "Landing CMS: admins reorder and configure hero, stores, products, categories, features, and become-vendor sections",
      "Deployed with Next.js on Vercel and Laravel on a DigitalOcean droplet managed with Laravel Forge",
    ],
    media: {
      cover: "/projects/dawly-store/home.png",
      gallery: [],
      video: "",
    },
    links: [
      // { label: "Storefront", url: "https://dawly.store" },
      // { label: "Admin dashboard", url: "https://manage.dawly.store/admin" },
      // { label: "Store dashboard", url: "https://manage.dawly.store/store" },
      { label: "GitHub · frontend", url: "https://github.com/Mo7Ati/dawlyStore_frontend" },
      { label: "GitHub · backend", url: "https://github.com/Mo7Ati/dawlyStor_backend" },
    ],
    sections: [
      {
        title: "Storefront",
        description:
          "Public-facing Next.js app. Landing composed from backend-driven sections, mega-menu navigation, multi-store browsing, per-store product grids with filters, and a checkout flow that validates stock and pricing against the Laravel API on every step.",
        screenshots: [
          { src: "/projects/dawly-store/home.png", caption: "Landing — hero, categories, latest products, trusted stores, become-vendor" },
          { src: "/projects/dawly-store/stores.png", caption: "Browse stores with category filter, search, and pagination" },
          { src: "/projects/dawly-store/store.png", caption: "Store page — header, product grid, filters by category / price / rating" },
          { src: "/projects/dawly-store/product_details.png", caption: "Product page — options, add-ons, delivery estimate, add to cart" },
          { src: "/projects/dawly-store/Cart.png", caption: "Cart grouped by store with per-line quantity and running totals" },
          { src: "/projects/dawly-store/checkout.png", caption: "Checkout — address selection, order summary, Stripe payment handoff" },
        ],
      },
      {
        title: "Admin Dashboard",
        description:
          "Laravel + Inertia + React admin running at /admin. Full oversight of the marketplace — stores, orders, products, transactions, wallets, admin accounts, roles, and the landing-page sections CMS.",
        screenshots: [
          { src: "/projects/dawly-store/admin_dashboard.png", caption: "Overview — customer / store / order / revenue totals and time-series charts" },
          { src: "/projects/dawly-store/orders.png", caption: "Orders across all stores with status, payment status, and totals" },
        ],
      },
      {
        title: "Store Dashboard",
        description:
          "Vendor-scoped dashboard at /store. Each store owner manages their own products, categories, options, add-ons, orders, transactions, and subscription plan — isolated via the auth:store guard.",
        screenshots: [
          { src: "/projects/dawly-store/store_dashboard.png", caption: "Store overview — orders, revenue, and products for the signed-in vendor" },
          { src: "/projects/dawly-store/orders.png", caption: "Store-scoped orders list with search, filters, and pagination" },
        ],
      },
    ],
  },
  {
    n: "02",
    slug: "realtime-chat",
    name: "Real-Time Web Chat",
    desc: "Full-featured chat platform with 1-1 and group messaging, live presence, media sharing, and instant sync across clients.",
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "Laravel Reverb",
      "Laravel Echo",
      "WebSockets",
      "Tailwind",
      "shadcn",
      "Laravel Cloud",
      "Laravel Nightwatch",
    ],
    role: "Full-stack",
    year: "2025",
    summary:
      "A real-time chat platform built around WebSockets — Laravel on the backend broadcasting via Laravel Reverb, React + TypeScript on the frontend listening through Laravel Echo. Messages, presence, typing indicators, and seen receipts all sync live across every connected client without a refresh, wrapped in a clean Tailwind + shadcn/ui interface.",
    highlights: [
      "1-to-1 and group chats with real-time message sync over WebSockets",
      "Live presence — online / offline status updates as users connect and disconnect",
      "Typing indicators and seen receipts, broadcast per conversation",
      "Contact system with a full request flow: search → send request → accept → chat instantly",
      "Media sharing for images, videos, and documents with inline previews",
      "Instant cross-client updates for every action — sent, read, joined, left, status change",
      "Social login via Google and GitHub, alongside email-based auth",
      "Backend deployed on Laravel Cloud and monitored with Laravel Nightwatch; frontend on Vercel",
    ],
    media: { cover: "", gallery: [], video: "" },
    links: [
      { label: "Frontend Source Code", url: "https://github.com/Mo7Ati/messenger-react" },
      { label: "Backend Source Code", url: "https://github.com/Mo7Ati/Messenger-laravel" }
    ],
    sections: [{
      title: "Chat Website",
      screenshots: [{ src: "/projects/realtime-chat/messenger.mp4" }]
    }],
  },
  {
    n: "03",
    slug: "sonic-marketplace",
    name: "Sonic Marketplace",
    desc: "Multi-branch restaurant ordering platform with two Filament panels and a Sanctum-powered customer API.",
    tags: [
      "Laravel",
      "PHP",
      "Filament",
      "Laravel Modules",
      "Sanctum",
      "Spatie Translatable",
      "Spatie Media Library",
      "Bavix Wallet",
      "Filament Shield",
      "Blade",
      "MySQL",
      "Vite",
    ],
    role: "Full-stack",
    year: "2025",
    summary:
      "A multi-branch restaurant ordering platform built as a modular Laravel monolith. A Laravel 13 + Filament 5 backend powers two separate dashboards — administrators oversee the whole platform, store owners manage their branches and menus, while a Sanctum-secured REST API serves the customer-facing clients.",
    highlights: [
      "Two Filament panels — Admin and Store — each scoped to its own guard and role set",
      "Modular monolith with nwidart/laravel-modules",
      "Customer REST API behind Laravel Sanctum authentication",
      "Menu engine: products with option groups, options, paid additions, tags, and media via Spatie Media Library",
      "Orders flow end-to-end — customer places, cashier fulfills at a branch, admin oversees transactions and commissions",
      "Roles & abilities powered by Filament Shield, layered on top of custom RoleAbility / RoleUser tables",
      "Multi-language content via spatie/laravel-translatable with Filament translatable tabs and a language switcher",
      "Wallet & transactions engine using bavix/laravel-wallet for platform balances and store payouts",
      "Landing CMS: admins compose homepage sections and section items consumed by the customer API",
      "Deployed on Laravel Cloud and monitored with Laravel Nightwatch",
    ],
    media: { cover: "", gallery: [], video: "" },
    links: [
      { label: "Source Code", url: "https://github.com/Mo7Ati/Sonic" },
    ],
    sections: [
      {
        title: "Admin Panel",
        description:
          "Filament panel at /admin for platform owners — manages stores, branches, categories, products, options and additions, orders, transactions, wallets, landing sections, admins, roles, and abilities across the whole marketplace.",
        screenshots: [{ src: "/projects/sonic-marketplace/admin-panel.png" }],
      },
      {
        title: "Store Panel",
        description:
          "Filament panel at /store for store owners — each store manages its own branches, working hours, menu (products, option groups, additions), tags, orders, and staff, isolated via the store guard.",
        screenshots: [{ src: "/projects/sonic-marketplace/store-panel.png" }],
      },
      {
        title: "Customer API",
        description:
          "Laravel Sanctum REST API consumed by the customer-facing clients. Exposes registration and login, translated catalogue browsing, product detail with options and add-ons, cart and address management, order placement, and a landing feed driven by the admin-side CMS.",
        screenshots: [],
      },
    ],
  },
  {
    n: "04",
    slug: "sonic-mobile",
    name: "Sonic Mobile",
    desc: "React Native customer app for the Sonic Marketplace — browse branches, configure products, and place orders on iOS and Android.",
    tags: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "TanStack Query",
      "Axios",
      "i18next",
      "React Hook Form",
      "Reanimated",
      "Expo SecureStore",
      "AsyncStorage",
      "Sanctum",
    ],
    role: "Mobile",
    year: "2025",
    portrait: true,
    summary:
      "The customer-facing mobile client for the Sonic multi-branch restaurant platform. Built with Expo and expo-router file-based routing in TypeScript, it consumes the Laravel Sanctum REST API from the Sonic Marketplace backend and delivers a fully bilingual (Arabic / English) ordering experience with live catalogue browsing, rich product configuration, and an authenticated order flow.",
    highlights: [
      "File-based routing with expo-router — grouped (auth) and (tabs) stacks plus dynamic branch/[id], product/[id], and store-category/[id] routes",
      "Sanctum-backed auth flow: login, register, forgot password, and reset password — tokens persisted via expo-secure-store",
      "Bottom-tab shell for Home, Orders, and Profile, with a root modal route for in-flow dialogs",
      "Home feed composed of admin-driven landing sections served by the Sonic CMS and rendered with a Reanimated carousel",
      "Store-category screen with filter chips and a branches section for discovering nearby locations",
      "Branch page with hero + compact sticky headers, category tabs, category-scoped product grid / list, and a persistent cart bottom bar",
      "Product detail with image header, option groups, paid additions, quantity control, and an add-to-cart bar",
      "Bilingual UX via i18next + expo-localization with per-feature JSON namespaces (auth, branch, home, orders, product, profile, store_category)",
      "Data layer built on TanStack Query + Axios with typed services per domain (auth, branch, home, product, store-categories)",
      "Forms via react-hook-form, haptics via expo-haptics, and toasts via react-native-toast-message for consistent feedback",
    ],
    media: { cover: "/projects/sonic-mobile/home.jpeg", gallery: [], video: "" },
    links: [
      { label: "Source Code", url: "https://github.com/Mo7Ati/Sonic-Mobile" },
    ],
    sections: [
      {
        title: "Home & Tabs",
        description:
          "Grouped (tabs) stack hosting Home, Orders, and Profile. The Home feed is composed from admin-driven landing sections served by the Sonic CMS and rendered with a Reanimated carousel; Orders and Profile consume the authenticated customer API.",
        screenshots: [
          { src: "/projects/sonic-mobile/home.jpeg", caption: "Home feed — admin-driven landing sections with a Reanimated carousel" },
        ],
      },
      {
        title: "Store Category",
        description:
          "Dynamic store-category/[id] route listing branches by category. Includes filter chips, a branches section, skeleton loading states, and an error state — all driven by a dedicated use-store-category-page hook on top of TanStack Query.",
        screenshots: [
          { src: "/projects/sonic-mobile/store-category.jpeg", caption: "Store category — filter chips and branches list" },
        ],
      },
      {
        title: "Branch",
        description:
          "Dynamic branch/[id] route for a single store branch. A hero header collapses into a compact sticky header as the user scrolls, category tabs switch the in-view section, products render as grid or list items, and a cart bottom bar tracks the running order.",
        screenshots: [
          { src: "/projects/sonic-mobile/store.jpeg", caption: "Branch — hero header, category tabs, product grid, cart bottom bar" },
        ],
      },
      {
        title: "Product",
        description:
          "Dynamic product/[id] route for configuring an item. An image header, option groups, paid additions section, and an add-to-cart bar together let customers pick required options and optional add-ons before committing the line to the cart.",
        screenshots: [
          { src: "/projects/sonic-mobile/product.jpeg", caption: "Product — image header, option groups, additions, add-to-cart bar" },
        ],
      },
      {
        title: "Auth",
        description:
          "Grouped (auth) stack with login, register, forgot-password, and reset-password screens. Credentials are exchanged with the Sonic Sanctum API and the returned token is persisted in expo-secure-store, then attached to every Axios request from the auth context.",
        screenshots: [],
      },
    ],
  },
];

export function getProjectBySlug(slug: string | undefined): Project | undefined {
  if (slug == null) return undefined
  return PROJECTS.find((p) => p.slug === slug)
}
