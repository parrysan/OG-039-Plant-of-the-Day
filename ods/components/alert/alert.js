/* ds:alert v0.2 — OS-000 Alert (vanilla helpers) — 2026-10-21
   Content model assimilated from Alert by Sean Hello (ReUI, 21st.dev, MIT). */

export const TONES = ['neutral', 'info', 'success', 'warning', 'error']

/** Errors interrupt (role="alert"); everything else is polite (role="status"). */
export function roleFor(tone) {
  return tone === 'error' ? 'alert' : 'status'
}

/** Material Symbols (filled, 24px) paths per tone, plus close. Apache-2.0 via Iconify material-symbols. */
export const ALERT_ICONS = {
  neutral: 'M11 17h2v-6h-2zm1.713-8.287Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22',
  info: 'M11 17h2v-6h-2zm1.713-8.287Q13 8.425 13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9t.713-.288M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22',
  success: 'm10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22',
  warning: 'M1 21L12 2l11 19zm11.713-3.287Q13 17.425 13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18t.713-.288M11 15h2v-5h-2z',
  error: 'M12.713 16.713Q13 16.425 13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17t.713-.288M11 13h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22',
  close: 'M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z',
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/** Wire every .og-alert__close under root: remove the alert, keep focus on the page. */
export function initAlerts(root = document) {
  for (const button of root.querySelectorAll('.og-alert__close')) {
    button.addEventListener('click', () => {
      const alert = button.closest('.og-alert')
      if (!alert) return
      const all = [...document.querySelectorAll(FOCUSABLE)].filter((el) => !alert.contains(el))
      const next = all.find((el) => alert.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING) ?? all[all.length - 1]
      alert.dispatchEvent(new CustomEvent('og-alert-close', { bubbles: true }))
      alert.remove()
      if (next) next.focus()
    })
  }
}
