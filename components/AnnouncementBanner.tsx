'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle, ArrowRight } from 'lucide-react'

const BANNER_KEY = 'dat_comments_banner_dismissed'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show if not previously dismissed
    const dismissed = localStorage.getItem(BANNER_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="announcement-banner" role="banner" aria-label="New feature announcement">
      <div className="banner-inner">
        <div className="banner-content">
          <span className="banner-badge">
            <MessageCircle size={12} strokeWidth={2} />
            New
          </span>
          <p className="banner-text">
            <strong>Comments are here.</strong>{' '}
            React to stories and join the conversation.
          </p>
          <a href="/stories" className="banner-cta">
            Try it <ArrowRight size={12} strokeWidth={2.5} />
          </a>
        </div>
        <button
          className="banner-close"
          onClick={dismiss}
          aria-label="Dismiss announcement"
        >
          <X size={14} strokeWidth={2} />
        </button>
      </div>

      <style jsx>{`
        .announcement-banner {
          background: #2563eb;
          color: white;
          width: 100%;
          z-index: 50;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .banner-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.6rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 0;
        }

        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          padding: 0.15rem 0.6rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .banner-text {
          margin: 0;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.95);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .banner-text strong {
          color: white;
          font-weight: 700;
        }

        .banner-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          padding-bottom: 1px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: border-color 0.15s;
        }

        .banner-cta:hover {
          border-color: white;
        }

        .banner-close {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transition: color 0.15s, background 0.15s;
        }

        .banner-close:hover {
          color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 480px) {
          .banner-text {
            display: none;
          }

          .banner-content {
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
