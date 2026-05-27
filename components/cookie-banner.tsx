"use client";

import { useSyncExternalStore, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "rh-cookie-accepted";

// useSyncExternalStore lets us read from localStorage in an SSR-safe,
// concurrent-mode-safe way without setState-in-effect.
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

// Pretend dismissed on the server so nothing flashes in during hydration.
function getServerSnapshot() {
  return true;
}

export function CookieBanner() {
  const persistedDismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  // Local override for the immediate click — flips before the next storage event.
  const [locallyDismissed, setLocallyDismissed] = useState(false);

  if (persistedDismissed || locallyDismissed) return null;

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setLocallyDismissed(true);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6 fade-up"
    >
      <div className="mx-auto max-w-3xl bg-ink text-paper rounded-lg shadow-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm flex-1">
          We use only essential cookies to remember this choice. No tracking, no
          analytics, no third parties.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/privacy"
            className="text-sm underline underline-offset-2 hover:text-mint"
          >
            Privacy
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="bg-mint text-ink text-sm font-medium px-4 py-2 rounded-md hover:bg-signal hover:text-paper transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
