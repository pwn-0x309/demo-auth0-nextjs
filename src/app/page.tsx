import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Profile from "@/components/Profile";
import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12">
      <div className="pointer-events-none absolute -left-32 -top-40 size-96 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-24 size-[30rem] rounded-full bg-lilac/50 blur-3xl" />

      <section className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-card backdrop-blur sm:p-10">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-accent">a0</span>
            <span className="text-sm font-bold tracking-tight text-ink">Auth0 demo</span>
          </div>
          <span className="rounded-full border border-line px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Next.js 16
          </span>
        </div>

        {user ? (
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">Session active</p>
              <h1 className="text-3xl font-bold tracking-[-0.04em] text-ink">Welcome back.</h1>
              <p className="mt-3 text-sm leading-6 text-muted">Your app session is secured by Auth0 and ready to use.</p>
            </div>
            <Profile />
            <LogoutButton />
          </div>
        ) : (
          <div className="space-y-7">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-dark">Identity, simplified</p>
              <h1 className="text-4xl font-bold tracking-[-0.05em] text-ink">Sign in to begin.</h1>
              <p className="mt-4 text-sm leading-6 text-muted">A small, production-minded starting point for authentication in Next.js.</p>
            </div>
            <LoginButton />
            <p className="text-center text-xs leading-5 text-muted">You will be redirected to Auth0 Universal Login.</p>
          </div>
        )}

        <div className="mt-10 flex items-center gap-3 text-xs text-muted">
          <span className="h-px flex-1 bg-line" />
          <span>Secure by default</span>
          <span className="h-px flex-1 bg-line" />
        </div>
      </section>
    </main>
  );
}
