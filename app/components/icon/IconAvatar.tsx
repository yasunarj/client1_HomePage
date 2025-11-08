import * as React from "react";

const Steam = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    {...props}
  >
    <path d="M7 18c-.8-1.2-.8-2.4 0-3.6S8.2 12.8 7.8 11.6C7.4 10.4 6 9.6 6 8" />
    <path d="M12 18c-.8-1.2-.8-2.4 0-3.6s1.2-1.6.8-2.8-.2-2.0-.8-2.8" />
    <path d="M17 18c-.8-1.2-.8-2.4 0-3.6s1.2-1.6.8-2.8-.2-2.0-.8-2.8" />
    <path d="M4 20h16" />
  </svg>
);

const Bucket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    {...props}
  >
    <path d="M6 8h12l-1.2 9.5a3 3 0 0 1-3 2.5H10.2a3 3 0 0 1-3-2.5L6 8Z" />
    <path d="M8 8a4 4 0 0 1 8 0" />
    <path d="M7 12h10" />
  </svg>
);

const Towel = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    {...props}
  >
    <path d="M7 4h8a3 3 0 0 1 3 3v11a2 2 0 0 1-2 2H8a3 3 0 0 1-3-3V7a3 3 0 0 1 2-3Z" />
    <path d="M9 7v13" />
  </svg>
);

const Vihta = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    {...props}
  >
    <path d="M12 14c2-2 4.5-5.5 4-7s-3-.5-4 1c-1-1.5-3-2.5-4-1s2 5 4 7Z" />
    <path d="M12 14v7" />
  </svg>
);

const Hat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    {...props}
  >
    <path d="M4 16c1-4 3-8 8-8s7 4 8 8" />
    <path d="M3 16h18" />
    <path d="M12 6c0-1 .8-2 2-2" />
  </svg>
);

const Thermometer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    {...props}
  >
    <path d="M10 4a2 2 0 0 1 4 0v7.1a4 4 0 1 1-4 0V4Z" />
    <path d="M12 12v-1" />
  </svg>
);

const ICONS = [Steam, Bucket, Towel, Vihta, Hat, Thermometer] as const;
const PALETTES = [
  { bg: "#FDE68A", fg: "#92400E" }, // warm amber
  { bg: "#BBF7D0", fg: "#065F46" }, // mint
  { bg: "#BFDBFE", fg: "#1E40AF" }, // blue
  { bg: "#FBCFE8", fg: "#9D174D" }, // pink
  { bg: "#FDE2E2", fg: "#991B1B" }, // red
  { bg: "#E9D5FF", fg: "#6D28D9" }, // violet
];

const hash = (str: string) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
};

type Props = {
  seed: string; // 名前などの任意文字列
  size?: number; // px (外側の正円)
  className: string; // Tailwind等の追加
  iconIndexOverride?: number; // 固定したい場合に 0-5 を指定
  paletteIndexOverride?: number;
  title?: string; // アクセシビリティ用
};

const IconAvatar = ({
  seed,
  size = 64,
  className = "",
  iconIndexOverride,
  paletteIndexOverride,
  title,
}: Props) => {
  const h = hash(seed);
  const Icon = ICONS[iconIndexOverride ?? h % ICONS.length];
  const palette =
    PALETTES[paletteIndexOverride ?? Math.floor(h / 7) % PALETTES.length];

  return (
    <div 
      className={`flex items-center justify-center rounded-full shadow-sm ${className}`}
      style={{ width: size, height: size, background: palette.bg, color: palette.fg }}
      aria-label={title ?? `${seed} のアイコン`}
      title={title ?? `${seed}`}
    >
      <Icon width={Math.round(size * 0.58)} height={Math.round(size * 0.58)} />
    </div>
  );
};

export default IconAvatar;
