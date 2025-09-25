/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'luxury-heading': ['Playfair Display', 'serif'],
        'luxury-body': ['Source Serif Pro', 'serif'],
        'luxury-japanese': ['Noto Serif JP', 'serif'],
      },
      colors: {
        // Active Pilates Gold Color System
        'primary-gold': {
          DEFAULT: '#FFB000',  // より明るく活発な金色
          light: '#FFC947',    // 明るくエネルギッシュ
          dark: '#E09900',     // 深みのある活発な金色
        },
        'secondary-brown': {
          DEFAULT: '#8B4513',  // より温かみのあるブラウン
          light: '#A0522D',    // 活発で親しみやすい
          dark: '#654321',     // 深みがありながら重すぎない
        },
        'accent-cream': '#FFF8DC',    // より明るくフレッシュなクリーム
        'accent-light-gold': '#FFFACD', // 軽やかで活発な印象
        'accent-warm-white': '#FFFEF7', // 清潔で明るい
        'text-primary': '#2F1B14',   // 読みやすく温かみのある
        'text-secondary': '#8B4513', // アクティブなブラウン
        'border-gold': '#FFB000',    // 活発なゴールドボーダー
        
        // Keep existing shadcn colors for compatibility
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #FFB000 0%, #FFC947 50%, #FFF8DC 100%)',
        'luxury-gradient-dark': 'linear-gradient(135deg, #E09900 0%, #FFB000 50%, #FFC947 100%)',
        'pilates-energy': 'linear-gradient(135deg, #FFB000 0%, #FF8C00 25%, #FFC947 50%, #FFFACD 100%)',
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(255, 176, 0, 0.25), 0 1px 3px rgba(0,0,0,0.12)',
        'luxury-lg': '0 8px 40px rgba(255, 176, 0, 0.3), 0 2px 6px rgba(0,0,0,0.15)',
        'pilates-glow': '0 4px 25px rgba(255, 140, 0, 0.4), 0 2px 8px rgba(255, 176, 0, 0.2)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}