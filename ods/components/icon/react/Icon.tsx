/* ds:icon v0.2 — renders one supplied Material Symbols path in the .ods-icon span. No loader.
   CSS is loaded once from src/app/globals.css. */
import type { HTMLAttributes } from 'react'

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** One path from an approved set, e.g. strIcons.warning. */
  path: string
  size?: 'sm' | 'md' | 'lg'
}

export function Icon({ path, size = 'md', className, ...rest }: IconProps) {
  return <span aria-hidden="true" {...rest} className={['ods-icon', className].filter(Boolean).join(' ')} data-size={size}>
    <svg viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d={path} /></svg>
  </span>
}
