/* ds:logo v0.1 — CSS-first. The mark is a brand file, never a leaf drawn next to typed text.
   Adapted for Next: public URLs. CSS is loaded once from src/app/globals.css. */
import type { ImgHTMLAttributes } from 'react'

export const LOGO_HEIGHTS = [24, 32, 40, 56] as const
export type LogoHeight = (typeof LOGO_HEIGHTS)[number]
export type LogoVariant = 'lockup' | 'lockup-reversed' | 'leaf'

const SRC: Record<LogoVariant, string> = {
  lockup: '/brand/oganiko-lockup.svg',
  'lockup-reversed': '/brand/oganiko-lockup-reversed.svg',
  leaf: '/brand/oganiko-leaf.svg',
}

export interface LogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'height' | 'width' | 'children'> {
  /** lockup on light surfaces. lockup-reversed on dark. leaf only for a favicon or a tiny space, never beside typed text. */
  variant?: LogoVariant
  /** Height step in px at the default root size. The width follows the file. */
  height?: LogoHeight
  alt?: string
}

export function Logo({ variant = 'lockup', height = 32, alt = 'OGANIKO', className, ...rest }: LogoProps) {
  const leaf = variant === 'leaf'
  return <img
    {...rest}
    className={['ods-logo', className].filter(Boolean).join(' ')}
    data-variant={variant}
    data-height={height}
    src={SRC[variant]}
    alt={alt}
    width={leaf ? 32 : 1251}
    height={leaf ? 32 : 291}
  />
}

/** What a header or footer may use for its mark: the logo component, or one image file. */
export type LogoSource =
  | { source: 'logo'; variant?: LogoVariant; height?: LogoHeight; alt?: string }
  | { source: 'file'; src: string; alt: string; width: number; height: number }

export function LogoMark({ logo }: { logo: LogoSource }) {
  if (logo.source === 'file') return <img src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
  return <Logo variant={logo.variant} height={logo.height} alt={logo.alt} />
}
