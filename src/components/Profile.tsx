"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

function getInitials(name?: string | null, email?: string | null) {
  if (name?.trim()) {
    const parts = name.trim().split(/\s+/);
    return parts.length > 1
      ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  }

  return email?.slice(0, 2).toUpperCase() ?? "U";
}

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p className="text-sm text-muted">Loading profile...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-700">Unable to load your profile.</p>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full items-center gap-3 rounded-2xl border border-line bg-mist p-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
        {getInitials(user.name, user.email)}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink">{user.name ?? "Authenticated user"}</p>
        <p className="truncate text-xs text-muted">{user.email ?? "Your Auth0 account"}</p>
      </div>
      <span className="ml-auto size-2 shrink-0 rounded-full bg-green-500" aria-label="Online" />
    </div>
  );
}
