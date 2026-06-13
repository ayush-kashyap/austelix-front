export default function AuthLayout({ children }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-900 p-12 text-white lg:flex">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(99,102,241,.35), transparent 55%)",
          }}
        />
        <div className="relative flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="M8 16V8l4 5 4-5v8" />
            </svg>
          </span>
          <span className="font-semibold">Austelix CMS</span>
        </div>
        <div className="relative">
          <h2 className="text-3xl font-semibold leading-tight">
            Publish with confidence.
          </h2>
          <p className="mt-3 max-w-sm text-zinc-400">
            A modern content studio for managing articles, media, and your whole
            editorial workflow.
          </p>
        </div>
        <div className="relative text-xs text-zinc-500">
          © 2026 Austelix. All rights reserved.
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
