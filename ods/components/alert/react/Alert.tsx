/* ds:alert v0.2 — canonical OS-000 binding (React) — 2026-10-21 */
/* Visual contract lives in ../alert.css. Actions use the ODS button (button.css). */
/* Content model assimilated from Alert by Sean Hello (ReUI, 21st.dev, MIT). */
/* Adapted: action links open in a new tab (target="_blank" rel="noopener"). */
import { useId, type ReactNode } from 'react'
// @ts-ignore -- plain ES module helpers without types
import { roleFor, ALERT_ICONS } from '../alert.js'

export type AlertTone = 'neutral' | 'info' | 'success' | 'warning' | 'error'
export type AlertAction = { label: string; onClick?: () => void; href?: string; variant?: 'outlined' | 'ghost' | 'important' }

export type AlertProps = {
  tone?: AlertTone
  title: ReactNode
  children?: ReactNode
  /** Up to two ODS buttons. At most one important, and only for the main fix. */
  actions?: AlertAction[]
  /** Shows the close button. The consumer removes the alert. */
  onClose?: () => void
  closeLabel?: string
  showIcon?: boolean
  /** live: announce (role status/alert). static: present at load, no live role. */
  announce?: 'live' | 'static'
  className?: string
}

function Glyph({ d }: { d: string }) {
  return <span className="ods-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d={d} /></svg></span>
}

export function Alert({ tone = 'neutral', title, children, actions = [], onClose, closeLabel = 'Close', showIcon = true, announce = 'live', className }: AlertProps) {
  const id = useId()
  const classes = ['og-alert', `og-alert--${tone}`]
  if (!showIcon) classes.push('og-alert--no-icon')
  if (className) classes.push(className)
  const role = announce === 'live' ? (roleFor(tone) as 'alert' | 'status') : undefined
  return (
    <div className={classes.join(' ')} role={role} aria-labelledby={`${id}-t`}>
      {showIcon ? <span className="og-alert__icon"><Glyph d={ALERT_ICONS[tone]} /></span> : null}
      <div className="og-alert__body">
        <p className="og-alert__title" id={`${id}-t`}>{title}</p>
        {children ? <div className="og-alert__description">{children}</div> : null}
        {actions.length ? (
          <div className="og-alert__actions">
            {actions.slice(0, 2).map((a) => {
              const cls = `ods-button ods-button--${a.variant ?? 'outlined'} ods-button--s`
              return a.href
                ? <a key={a.label} className={cls} href={a.href} target="_blank" rel="noopener">{a.label}</a>
                : <button key={a.label} className={cls} type="button" onClick={a.onClick}>{a.label}</button>
            })}
          </div>
        ) : null}
      </div>
      {onClose ? <button className="og-alert__close" type="button" aria-label={closeLabel} onClick={onClose}><Glyph d={ALERT_ICONS.close} /></button> : null}
    </div>
  )
}

export default Alert
