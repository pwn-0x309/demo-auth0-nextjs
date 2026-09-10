export default function LogoutButton() {
  return (
    <a
      href="/auth/logout"
      className="flex w-full items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-mist focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      Sign out
    </a>
  );
}
