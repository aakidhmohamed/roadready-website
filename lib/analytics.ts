export type KleenCarEvent =
  | 'hero_cta_clicked' | 'header_cta_clicked' | 'offer_cta_clicked' | 'final_cta_clicked' | 'mobile_sticky_cta_clicked'
  | 'quiz_started' | 'quiz_step_viewed' | 'quiz_step_answered' | 'quiz_completed' | 'recommendation_viewed'
  | 'package_changed' | 'enquiry_started' | 'enquiry_attempted' | 'enquiry_accepted' | 'enquiry_failed' | 'whatsapp_clicked';

export function trackKleenCarEvent(name: KleenCarEvent, properties: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  // Adapter boundary: never include form values or other personal data in event properties.
  window.dispatchEvent(new CustomEvent('kleencar:analytics', { detail: { name, properties } }));
}

