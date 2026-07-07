"use client";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 space-y-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold text-zinc-100">404</h1>
        <div className="h-6 w-[1px] bg-zinc-800" />
        <p className="text-sm text-zinc-400">Page not found</p>
      </div>

      <button
        onClick={() => window.history.back()}
        className="bg-brand-red text-white hover:bg-brand-red/90 font-condensed text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow-md transform hover:scale-[1.02] cursor-pointer focus:outline-none"
      >
        Go Back
      </button>
    </div>
  );
}

export default NotFound;