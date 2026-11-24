/* ds:status-pill v0.1 — CSS-first; tone maps to semantic status roles. */
import type { HTMLAttributes, ReactNode } from 'react'

export type StatusPillTone = 'neutral' | 'success' | 'warning' | 'info' | 'draft' | 'validation'

export interface StatusPillProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children: ReactNode
  tone?: StatusPillTone
  size?: 'sm' | 'md'
  dot?: boolean
}

export function StatusPill({ children, tone = 'neutral', size = 'md', dot = false, className, ...rest }: StatusPillProps) {
  return <span {...rest} className={['ods-status-pill', className].filter(Boolean).join(' ')} data-tone={tone} data-size={size}>
    {dot && <span className="ods-status-pill-dot" aria-hidden="true" />}
    {children}
  </span>
}
