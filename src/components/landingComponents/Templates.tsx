const templates = [
  {
    name: "Modern",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQqkAqdGkXtXBRz9k5jVdfUE6Rv66ZjlVHXKKGE9pwzebeNIXSJRNYt5SOmQgxubqVZRs18RxPp9bLJ_ss1pJGqb1rtlX6_e7gD2qADOc-Aq8IgPLkj8_YsXONIJYZqkNBNqBZZF1Q_C7PeT5UaEVmUSncmj7NlOeTtjL98vLfzf2W74Y47qRLvvirJSwwKee8gcuOa89W1Gy8yiTdS-bhv956fPHGSju2dlpR5VuTNT9C367a_Yb0",
  },
  {
    name: "Professional",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3qwHPhOB9-zqqgK7m9UgbP5PC-8pMd1WA0wI2VizA8ohxGX58JnlzAQgjeSarIjXhclsz65OULZWBmMXj_ringBaGGl6O1RmXZiR4Zj1ngcEvbKB6Sp8MZn03-2f6b_g0bB1HwkFWSPm56duqVQlx-z3q_uL-Wsfoxufm3RzgTvaxEZAC58xDo6ZmHQWMgqspzjwvYmx3U0F3WJyGfomv5NxdukyrlEjhFm-EE1H780GUiQen9eS-",
  },
  {
    name: "Minimal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBD7syaU5MmVT_76xdjvZGFfQCgESvd3C_-xer996eEMfxkcJjMtaL85MOG4salxfFc9arB9c_MVN5zC5uAeinnveLhLm7ZH018gAYivrdBFsGN5fbTu7ajSa5WbVZ2JeXUzb8PYbkIGYKKOJ3Eu1ewQUwF2iFl7tXZ_YraWzYymFBXhUc_qUFQiMhT3p6Dhy2MVT1ksPOYBIwIQETpfi7pzZOlR-ajdRkQaAJ-FtBuF9TcwTONtIDd",
  },
  {
    name: "Creative",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaK8UWBSUdyHlCLFcQRtITiGV-q5shdF2aOtoHqjZpluOyhWzaKbt-09mqzu6otT5O7tdHBy7z4BDWbnnm34-yzp5Yxnh0E2JOQrk2YYiRRmcWc-ZW_0HtmsE7O-oHz3Z6zy_b6kIKoJ4GzdVDaSc05KrmvKkBJ-gjo86a6eGQEXeehLo80LVMIOt9NJtzd7BPYLkaSt8J_9M3cgbx4pYC62iRjA_3Cns7ktBajKsp-2Re_rkbBfsr",
  },
];

export default function Templates() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xxl">
      <div className="mb-xl flex items-end justify-between">
        <div>
          <h2 className="mb-sm font-headline-lg text-headline-lg">
            Professional Templates
          </h2>

          <p className="font-body-md text-body-md text-on-surface-variant">
            Designs that stand out to recruiters.
          </p>
        </div>

        <button
          type="button"
          className="hidden items-center font-label-md text-label-md text-primary hover:underline sm:flex"
        >
          View all templates
          <span className="material-symbols-outlined ml-xs text-sm">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-4">
        {templates.map((template) => (
          <div
            key={template.name}
            className="group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container-lowest shadow-sm transition-all duration-300 hover:shadow-[0_10px_15px_-3px_rgb(37,99,235,0.1),0_4px_6px_-4px_rgb(37,99,235,0.1)]"
          >
            <img
              src={template.image}
              alt={`${template.name} resume template`}
              className="aspect-[210/297] w-full border-b border-outline-variant object-cover"
            />

            <div className="p-sm text-center">
              <span className="font-label-md text-label-md">
                {template.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
