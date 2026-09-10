export default function LoginButton() {
  return (
    <a
      href="/auth/login"
      className="group flex w-full items-center justify-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      Continue with Auth0
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        &rarr;
      </span>
    </a>
  );
}
