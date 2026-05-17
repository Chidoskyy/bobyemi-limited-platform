export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--primary)]">
            BOBYEMI LIMITED
          </h1>
        </div>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <button className="rounded-lg bg-[var(--primary)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[var(--primary-dark)]">
          Get Started
        </button>
      </nav>
    </header>
  );
}