export default function Hero() {
  return (
    <section className="mx-auto flex max-w-container-max flex-col items-center px-gutter py-xxl text-center">
      <h1 className="mb-md max-w-3xl font-display-lg text-display-lg">
        Build your dream career with professional resumes
      </h1>

      <p className="mb-xl max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
        Create a stunning CV in minutes with our AI-powered builder. Choose from
        expert-designed templates and land your next job.
      </p>

      <button
        type="button"
        className="mb-xxl inline-flex items-center justify-center rounded-DEFAULT bg-primary-container px-6 py-3 text-lg font-label-md text-label-md text-on-primary shadow-sm transition-all duration-200 hover:bg-primary-container/90 active:scale-95"
      >
        Create Your CV
      </button>

      <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-surface-container-high bg-surface-container-lowest shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)]">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxY86RiUaLDHVSwD7GgISY7jNFSvduwNClo40jvf6OGQ6AHtF3utFLRHq3w-enhRDnAGu3AKZnm61rQdf3sb8fiZG5dMs5cjUnLaTQp6GeFpKVxiXaDwTERU2ED1mvLx_DFr2iykh_GXKtnfUO0hMaLnuLZCp6ZdHHRciVJnO5xuwcwN4LMgS7CsvWWiJQ4Vc3x3wcVGhs5lxXaL9HgmRkEu7a7DpD5QV35o26UiMdKWaHPBzybEUZ"
          alt="ResumeFlow resume builder interface"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
