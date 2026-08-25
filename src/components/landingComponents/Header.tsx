export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-surface/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container-max items-center justify-between px-gutter">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          ResumeFlow
        </div>

        <nav className="hidden items-center space-x-gutter md:flex">
          <a
            href="#templates"
            className="font-label-md text-label-md text-on-surface-variant transition-colors duration-150 hover:text-primary"
          >
            Templates
          </a>

          <a
            href="#pricing"
            className="font-label-md text-label-md text-on-surface-variant transition-colors duration-150 hover:text-primary"
          >
            Pricing
          </a>

          <a
            href="#resources"
            className="font-label-md text-label-md text-on-surface-variant transition-colors duration-150 hover:text-primary"
          >
            Resources
          </a>
        </nav>

        <div className="flex items-center space-x-sm">
          <button
            type="button"
            className="hidden items-center justify-center rounded-DEFAULT border border-primary bg-transparent px-4 py-2 font-label-md text-label-md text-primary transition-colors duration-150 hover:bg-primary/5 md:inline-flex"
          >
            Log In
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-DEFAULT bg-primary-container px-4 py-2 font-label-md text-label-md text-on-primary transition-all duration-200 hover:bg-primary-container/90 active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
