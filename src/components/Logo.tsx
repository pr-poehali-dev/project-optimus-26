export function OnTrackLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#7C3AED" />
      <path
        d="M6 14 L11 19 L22 8"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="14" r="1.5" fill="white" opacity="0.5" />
      <circle cx="14" cy="14" r="1.5" fill="white" opacity="0.5" />
      <circle cx="22" cy="8" r="1.5" fill="white" />
    </svg>
  )
}
