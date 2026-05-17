export default function Hero() {
  return (
    <section className="bg-[var(--background)] px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Trusted Digital Service Center
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-[var(--foreground)]">
            Modern Financial & Technology Services For Your Everyday Needs
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-[var(--muted)]">
            Bobyemi Limited provides reliable financial transactions,
            electronics repairs, CCTV solutions, and digital support
            services for individuals and businesses in Port Harcourt.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:bg-[var(--primary-dark)]">
              Explore Services
            </button>

            <button className="rounded-lg border border-[var(--border)] px-6 py-3 font-medium transition hover:bg-white">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="grid gap-6 sm:grid-cols-2">
          
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              Financial Services
            </h3>

            <p className="text-sm leading-6 text-[var(--muted)]">
              Fast deposits, withdrawals, electricity recharge, and
              utility payment support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              CCTV Solutions
            </h3>

            <p className="text-sm leading-6 text-[var(--muted)]">
              Professional CCTV installation, maintenance, and
              security system support.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              Device Repairs
            </h3>

            <p className="text-sm leading-6 text-[var(--muted)]">
              Smart TV, electronics, and digital device diagnostics
              and repair services.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold">
              NIN Registration
            </h3>

            <p className="text-sm leading-6 text-[var(--muted)]">
              Identity registration and digital assistance services
              for the local community.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}