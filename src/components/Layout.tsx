import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { User, MessageCircle, Download } from 'lucide-react';
import JSZip from 'jszip';

export default function Layout() {
  const handleDownload = async () => {
    const zip = new JSZip();

    // Create directory structure
    const src = zip.folder("src");
    const components = src?.folder("components");
    const pages = src?.folder("pages");

    // Add all project files
    const files = {
      // Root files
      'package.json': JSON.stringify({
        name: "j-network",
        private: true,
        version: "1.0.0",
        type: "module",
        scripts: {
          "dev": "vite",
          "build": "vite build",
          "preview": "vite preview"
        },
        dependencies: {
          "lucide-react": "^0.344.0",
          "react": "^18.3.1",
          "react-dom": "^18.3.1",
          "react-router-dom": "^6.22.3"
        },
        devDependencies: {
          "@types/react": "^18.3.5",
          "@types/react-dom": "^18.3.0",
          "@vitejs/plugin-react": "^4.3.1",
          "autoprefixer": "^10.4.18",
          "postcss": "^8.4.35",
          "tailwindcss": "^3.4.1",
          "typescript": "^5.5.3",
          "vite": "^5.4.2"
        }
      }, null, 2),
      'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>J-Network</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
      'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});`,
      'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`,
      'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
};`,
      'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}`
    };

    // Add root files
    Object.entries(files).forEach(([filename, content]) => {
      zip.file(filename, content);
    });

    // Add src files
    const srcFiles = {
      'main.tsx': `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
      'App.tsx': `import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ChatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}`,
      'index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-900 text-gray-100;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  @apply bg-transparent;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-700/50 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-600;
}

html {
  scroll-behavior: smooth;
}`
    };

    Object.entries(srcFiles).forEach(([filename, content]) => {
      src?.file(filename, content);
    });

    // Add all component files
    const componentFiles = {
      'Layout.tsx': document.querySelector('[data-filepath="src/components/Layout.tsx"]')?.textContent || '',
      'Chat.tsx': document.querySelector('[data-filepath="src/components/Chat.tsx"]')?.textContent || '',
      'ChatMessage.tsx': document.querySelector('[data-filepath="src/components/ChatMessage.tsx"]')?.textContent || '',
      'ExperienceBar.tsx': document.querySelector('[data-filepath="src/components/ExperienceBar.tsx"]')?.textContent || '',
      'ProgressCard.tsx': document.querySelector('[data-filepath="src/components/ProgressCard.tsx"]')?.textContent || '',
      'Timeline.tsx': document.querySelector('[data-filepath="src/components/Timeline.tsx"]')?.textContent || '',
      'TypingIndicator.tsx': document.querySelector('[data-filepath="src/components/TypingIndicator.tsx"]')?.textContent || ''
    };

    Object.entries(componentFiles).forEach(([filename, content]) => {
      components?.file(filename, content);
    });

    // Add all page files
    const pageFiles = {
      'ChatPage.tsx': document.querySelector('[data-filepath="src/pages/ChatPage.tsx"]')?.textContent || '',
      'ProfilePage.tsx': document.querySelector('[data-filepath="src/pages/ProfilePage.tsx"]')?.textContent || '',
      'HomePage.tsx': document.querySelector('[data-filepath="src/pages/HomePage.tsx"]')?.textContent || ''
    };

    Object.entries(pageFiles).forEach(([filename, content]) => {
      pages?.file(filename, content);
    });

    try {
      // Create and download the zip file
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'j-network.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error creating zip file:', error);
      alert('Failed to create download. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="text-xl font-bold text-gray-100">
              Willy
            </NavLink>
            
            <nav className="flex items-center space-x-4">
              <button
                onClick={handleDownload}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700/30"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? 'bg-gray-700/50 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }`
                }
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat</span>
              </NavLink>
              
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 ${
                    isActive
                      ? 'bg-gray-700/50 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }`
                }
              >
                <User className="w-4 h-4" />
                <span>Profile</span>
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}