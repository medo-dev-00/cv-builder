import Features from "@/components/landingComponents/Features";
import Header from "@/components/landingComponents/Header";
import Hero from "@/components/landingComponents/Hero";
import Templates from "@/components/landingComponents/Templates";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body-md text-on-background">
      <Header />

      <main className="flex-grow pt-xxl">
        <Hero />
        <Features />
        <Templates />
      </main>

      <footer className="w-full border-t border-outline-variant bg-surface-bright py-xl">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between px-gutter md:flex-row">
          <div className="mb-md font-headline-md text-headline-md font-bold text-primary md:mb-0">
            ResumeFlow
          </div>

          <nav className="mb-md flex space-x-gutter md:mb-0">
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant opacity-80 transition-opacity hover:text-primary hover:opacity-100"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant opacity-80 transition-opacity hover:text-primary hover:opacity-100"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant opacity-80 transition-opacity hover:text-primary hover:opacity-100"
            >
              Contact
            </a>
          </nav>

          <div className="font-body-sm text-body-sm text-on-surface-variant">
            © 2026 ResumeFlow AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
