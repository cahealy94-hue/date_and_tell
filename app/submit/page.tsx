// app/submit/page.tsx
// Full submit story page — carousel lives below the form, same pattern as homepage.

import HowItWorksCarousel from "@/components/HowItWorksCarousel";

export const metadata = {
  title: "Submit Your Story | Date&Tell",
  description:
    "Share your dating story anonymously. No account needed — our AI polishes it and keeps you completely anonymous.",
};

export default function SubmitStoryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Share your story
          </h1>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            No names, no receipts. Just the story — told anonymously, polished
            by AI, and potentially featured in our next newsletter.
          </p>
        </div>

        {/* Textarea + lock badge + submit */}
        <div className="relative mb-3.5">
          <textarea
            placeholder="Tell your story anonymously..."
            maxLength={750}
            className="w-full min-h-[180px] rounded-xl border border-gray-200 bg-white px-4 pt-4 pb-10 text-[15px] leading-relaxed placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <span className="flex items-center gap-1 text-[11.5px] text-gray-400 font-medium">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Your identity is never stored
            </span>
            <span className="text-[11.5px] text-gray-400">0 / 750</span>
          </div>
        </div>

        <div className="flex justify-end mb-8">
          <button className="bg-blue-600 text-white text-[14px] font-medium px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
            Submit story →
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-8" />

        {/* How It Works carousel */}
        <HowItWorksCarousel />

      </div>
    </main>
  );
}
