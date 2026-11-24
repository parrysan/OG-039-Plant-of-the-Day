'use client'
/* ds:accordion v1.2 — ODS owns content/state; Base UI owns disclosure behaviour. Single-open by default
   (the OGANIKO rule); mode="multiple" is the opt-in exception. accordion.css eases open/close.
   CSS is loaded once from src/app/globals.css. */
import type { ReactNode } from 'react'
import { Accordion as BaseAccordion } from '@base-ui/react/accordion'

export interface AccordionItem {
  /** Unique, stable and non-empty within this accordion. */
  id: string
  /** The question, as readers would ask it. No links or buttons in it. @maxLength 80 */
  title: string
  /** The answer: paragraphs, lists and named links. */
  content: ReactNode
}

export interface AccordionProps {
  /** Questions in reading order. @minItems 2 */
  items: AccordionItem[]
  /** `single` keeps one answer open (the OGANIKO rule); `multiple` is the opt-in exception. */
  mode?: 'single' | 'multiple'
  /** Heading level of each question, from the page outline. */
  headingLevel?: 2 | 3 | 4 | 5 | 6
  /** Controlled open ids. At most one in single mode. */
  expandedItems?: string[]
  /** Ids open at first (uncontrolled). At most one in single mode. */
  defaultExpandedItems?: string[]
  /** Called with the new set of open ids. */
  onExpandedChange?: (ids: string[]) => void
}

export function Accordion({ items, mode = 'single', headingLevel = 3, expandedItems, defaultExpandedItems, onExpandedChange }: AccordionProps) {
  const Heading = `h${headingLevel}` as const
  return <BaseAccordion.Root<string> className="ods-accordion" multiple={mode === 'multiple'} value={expandedItems} defaultValue={defaultExpandedItems} onValueChange={(ids) => onExpandedChange?.(ids)} keepMounted>
    {items.map(({ id, title, content }) => <BaseAccordion.Item key={id} value={id} className="ods-accordion-item">
      <BaseAccordion.Header render={<Heading />} className="ods-accordion-heading">
        <BaseAccordion.Trigger className="ods-accordion-trigger">
          <span>{title}</span>
          <span className="ods-accordion-mark" aria-hidden="true">
            {/* Material Symbols expand_more; same family as the existing Icon contract. */}
            <svg viewBox="0 0 24 24" fill="currentColor" focusable="false"><path d="m12 15-5-5 1.4-1.4 3.6 3.6 3.6-3.6L17 10Z" /></svg>
          </span>
        </BaseAccordion.Trigger>
      </BaseAccordion.Header>
      <BaseAccordion.Panel className="ods-accordion-panel"><div className="ods-accordion-content">{content}</div></BaseAccordion.Panel>
    </BaseAccordion.Item>)}
  </BaseAccordion.Root>
}
