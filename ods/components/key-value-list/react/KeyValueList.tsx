/* ds:key-value-list v0.1 — canonical OS-000 binding (React) — 2026-10-20 */
/* Visual contract lives in ../key-value-list.css. */
/* Content model assimilated from Key-value list by corr (ui.corr.sh, 21st.dev, MIT). */
import type { ReactNode } from 'react'

export type KeyValueItem = {
  /** Short noun, e.g. "Material". */
  label: ReactNode
  /** The fact. Text, a link or an ODS status pill. */
  value: ReactNode
  /** Optional helper line under the value. */
  hint?: ReactNode
  /** Stable key; defaults to the index. */
  id?: string
}

export type KeyValueListProps = {
  items: KeyValueItem[]
  /** inline: label column + value (stacks under 30em). stacked: label above value. */
  layout?: 'inline' | 'stacked'
  /** Hairline between rows. */
  divided?: boolean
  /** Card edge around the list (implies divided). */
  bordered?: boolean
  /** Names the list for screen readers when there is no visible heading next to it. */
  'aria-label'?: string
  'aria-labelledby'?: string
  className?: string
}

export function KeyValueList({ items, layout = 'inline', divided = false, bordered = false, className, ...aria }: KeyValueListProps) {
  const classes = ['og-kv']
  if (layout === 'stacked') classes.push('og-kv--stacked')
  if (divided || bordered) classes.push('og-kv--divided')
  if (bordered) classes.push('og-kv--bordered')
  if (className) classes.push(className)
  return (
    <dl className={classes.join(' ')} {...aria}>
      {items.map((item, index) => (
        <div className="og-kv__row" key={item.id ?? index}>
          <dt className="og-kv__label">{item.label}</dt>
          <dd className="og-kv__value">
            {item.value}
            {item.hint ? <span className="og-kv__hint">{item.hint}</span> : null}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default KeyValueList
