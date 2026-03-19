"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    label: "Step 1 of 4",
    title: "No name, no email, no small talk. Just spill.",
    desc: "No account, no login, no awkward sign-up form. This is a judgment-free zone — drop your story and go.",
    tag: "Zero account required",
    tagClass: "bg-blue-100 text-blue-700",
    bgClass: "bg-blue-50",
    illustration: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <rect x="18" y="12" width="44" height="56" rx="5" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="1" />
        <rect x="26" y="24" width="28" height="2.5" rx="1.2" fill="#93C5FD" />
        <rect x="26" y="31" width="22" height="2.5" rx="1.2" fill="#93C5FD" />
        <rect x="26" y="38" width="26" height="2.5" rx="1.2" fill="#93C5FD" />
        <rect x="26" y="45" width="18" height="2.5" rx="1.2" fill="#93C5FD" />
        <g transform="rotate(-35 62 44)">
          <rect x="54" y="28" width="8" height="26" rx="2" fill="#FBBF24" />
          <polygon points="54,54 58,62 62,54" fill="#F87171" />
          <rect x="54" y="28" width="8" height="5" rx="1.5" fill="#D1D5DB" />
        </g>
        <circle cx="62" cy="18" r="11" fill="#2563EB" />
        <text x="62" y="22" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">✓</text>
      </svg>
    ),
  },
  {
    label: "Step 2 of 4",
    title: "AI polishes your story and covers your tracks",
    desc: "Our AI sharpens your story into something worth reading — and quietly takes care of any details that could hit a little too close to home.",
    tag: "Polished and anonymized",
    tagClass: "bg-green-100 text-green-700",
    bgClass: "bg-green-50",
    illustration: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
          </marker>
        </defs>
        <rect x="8" y="20" width="34" height="40" rx="4" fill="#BBF7D0" stroke="#6EE7B7" strokeWidth="1" />
        <rect x="14" y="28" width="22" height="2" rx="1" fill="#6EE7B7" />
        <rect x="14" y="33" width="18" height="2" rx="1" fill="#6EE7B7" />
        <rect x="14" y="38" width="16" height="2" rx="1" fill="#FCA5A5" />
        <line x1="13" y1="39" x2="31" y2="39" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="43" width="20" height="2" rx="1" fill="#6EE7B7" />
        <rect x="14" y="48" width="14" height="2" rx="1" fill="#6EE7B7" />
        <path d="M46 44 L54 44" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arr2)" />
        <rect x="56" y="20" width="26" height="40" rx="4" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1" />
        <rect x="61" y="28" width="16" height="2" rx="1" fill="#86EFAC" />
        <rect x="61" y="33" width="13" height="2" rx="1" fill="#86EFAC" />
        <rect x="61" y="38" width="14" height="2" rx="1" fill="#4ADE80" />
        <rect x="61" y="43" width="16" height="2" rx="1" fill="#86EFAC" />
        <rect x="61" y="48" width="11" height="2" rx="1" fill="#86EFAC" />
        <circle cx="62" cy="18" r="9" fill="#16A34A" />
        <text x="62" y="22" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif">AI</text>
      </svg>
    ),
  },
  {
    label: "Step 3 of 4",
    title: "Meet your story's alter ego",
    desc: "Once submitted, you'll see the AI-generated version — complete with a persona and title. Like what you see? Great. Want to tweak it? Go for it. It's still yours.",
    tag: "Edit anytime after submitting",
    tagClass: "bg-orange-100 text-orange-700",
    bgClass: "bg-orange-50",
    illustration: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <rect x="12" y="14" width="64" height="58" rx="6" fill="#FFEDD5" stroke="#FED7AA" strokeWidth="1" />
        <rect x="19" y="22" width="50" height="16" rx="8" fill="#FB923C" opacity="0.18" />
        <circle cx="29" cy="30" r="5" fill="#FB923C" opacity="0.5" />
        <rect x="37" y="26" width="26" height="3" rx="1.5" fill="#EA580C" opacity="0.5" />
        <rect x="37" y="31" width="18" height="2.5" rx="1.2" fill="#FED7AA" />
        <rect x="19" y="44" width="50" height="3" rx="1.5" fill="#FED7AA" />
        <rect x="19" y="51" width="46" height="2" rx="1" fill="#FED7AA" />
        <rect x="19" y="56" width="40" height="2" rx="1" fill="#FED7AA" />
        <rect x="19" y="61" width="34" height="2" rx="1" fill="#FED7AA" />
        <circle cx="66" cy="62" r="12" fill="#EA580C" />
        <g transform="translate(59,55) rotate(-15 7 7)">
          <rect x="4" y="2" width="5" height="12" rx="1.5" fill="#FFEDD5" />
          <polygon points="4,14 6.5,19 9,14" fill="#FED7AA" />
          <rect x="4" y="2" width="5" height="3" rx="1" fill="#FCA5A5" />
        </g>
        <circle cx="68" cy="16" r="10" fill="#EA580C" />
        <text x="68" y="20" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">✦</text>
      </svg>
    ),
  },
  {
    label: "Step 4 of 4",
    title: "Your story enters the spotlight queue",
    desc: "Every submission is reviewed before it goes live — the best ones get featured. Subscribe to our newsletter so you're the first to know when yours hits the big screen.",
    tag: "Get notified via newsletter",
    tagClass: "bg-amber-100 text-amber-700",
    bgClass: "bg-amber-50",
    illustration: (
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none">
        <path d="M44 10 L22 68 L66 68 Z" fill="#FDE68A" opacity="0.5" />
        <rect x="18" y="58" width="52" height="18" rx="4" fill="#FCD34D" opacity="0.4" />
        <rect x="24" y="62" width="40" height="10" rx="2.5" fill="#FBBF24" opacity="0.35" />
        <rect x="29" y="64.5" width="20" height="2" rx="1" fill="#92400E" opacity="0.4" />
        <rect x="29" y="69" width="14" height="2" rx="1" fill="#92400E" opacity="0.3" />
        <line x1="44" y1="8" x2="44" y2="4" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="51" y1="10" x2="53" y2="6" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <line x1="37" y1="10" x2="35" y2="6" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
        <rect x="28" y="30" width="32" height="22" rx="4" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1" />
        <path d="M28 35 L44 44 L60 35" fill="none" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="60" cy="30" r="10" fill="#D97706" />
        <text x="60" y="34" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">★</text>
      </svg>
    ),
  },
];

export default function HowItWorksCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent(i);

  const nav = (dir: number) => {
    setCurrent((prev) => {
      const next = prev + dir;
      if (next < 0 || next >= STEPS.length) return prev;
      return next;
    });
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev < STEPS.length - 1 ? prev + 1 : 0));
    }, 3800);
  };

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  return (
    <div className="w-full">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-3">
        How it works
      </p>

      {/* Carousel */}
      <div
        className="overflow-hidden rounded-xl"
        onMouseEnter={clearTimer}
        onMouseLeave={startTimer}
      >
        <div
          className="flex transition-transform duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="min-w-full flex border border-gray-100 rounded-xl bg-white overflow-hidden min-h-[152px]"
            >
              {/* Illustration panel */}
              <div
                className={`w-[130px] shrink-0 flex items-center justify-center p-4 ${step.bgClass}`}
              >
                {step.illustration}
              </div>

              {/* Text panel */}
              <div className="flex-1 p-5 border-l border-gray-100 flex flex-col justify-center">
                <p className="text-[10.5px] font-medium tracking-widest uppercase text-gray-400 mb-1">
                  {step.label}
                </p>
                <p className="text-[14.5px] font-medium text-gray-900 leading-snug mb-1.5">
                  {step.title}
                </p>
                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
                <span
                  className={`inline-block mt-2.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full w-fit ${step.tagClass}`}
                >
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-3 px-0.5">
        <button
          onClick={() => nav(-1)}
          disabled={current === 0}
          className="text-[13px] px-3 py-1 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ← Prev
        </button>

        <div className="flex gap-1.5 items-center">
          {STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => nav(1)}
          disabled={current === STEPS.length - 1}
          className="text-[13px] px-3 py-1 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
