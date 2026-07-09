import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

function Account({ onBack }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 relative">
      <button
        onClick={onBack}
        className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-700 cursor-pointer"
        aria-label="Close and return home"
      >
        <X className="w-6 h-6 sm:pb-5 w-8 h-8" />
      </button>

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
        <button onClick={onBack} className="cursor-pointer">
          <p className="font-display text-xl font-semibold text-indigo-600 mb-4">
            Sign Up With Boddie
          </p>
        </button>

        <h1 className="text-3xl font-bold mb-2">Create an account</h1>
        <p className="text-sm text-neutral-500 mb-6">
          Save your favorites, track your orders, and get early access to new
          drops before anyone else.
        </p>

        <label className="text-sm font-semibold block mb-1">Your email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 mb-4 text-sm outline-none focus:border-indigo-500"
        />

        <label className="text-sm font-semibold block mb-1">Password</label>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••"
            className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 cursor-pointer"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button className="w-full bg-indigo-600 text-white font-medium rounded-full py-2.5 mb-6 cursor-pointer hover:bg-indigo-700">
          Get Started
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-xs text-neutral-400">or continue with</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="flex gap-3 mb-6">
          <button className="flex-1 bg-neutral-100 rounded-xl py-2.5 font-semibold text-sm cursor-pointer hover:bg-neutral-200">
            Be
          </button>
          <button className="flex-1 bg-neutral-100 rounded-xl py-2.5 font-semibold text-sm cursor-pointer hover:bg-neutral-200">
            G
          </button>
          <button className="flex-1 bg-neutral-100 rounded-xl py-2.5 font-semibold text-sm cursor-pointer hover:bg-neutral-200">
            f
          </button>
        </div>

        <p className="text-center text-sm text-neutral-500">
          Don't have an account?{" "}
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Account;
