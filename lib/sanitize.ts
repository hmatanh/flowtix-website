/**
 * HTML-escape user-supplied text so it can be safely interpolated into
 * HTML text content. Also strips control characters (CR/LF/TAB/FF/VT/NUL)
 * as a first step so the same helper defuses email-header injection if
 * the form ever swaps Web3Forms for a self-hosted SMTP layer.
 *
 * ⚠ Safe for HTML text-content interpolation ONLY.
 *    NOT safe for href / src / url() - use a URL validator for those.
 *    NOT ideal for plain-text email bodies (apostrophes become
 *    `&#x27;`); use `sanitizeForEmail` for plain-text contexts.
 */
export function sanitizeInput(value: string): string {
  return value
    .replace(/[\r\n\t\f\v\0]+/g, " ")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim()
    .slice(0, 2000);
}

/**
 * Strip control chars + trim + length-cap for plain-text email bodies.
 * Does NOT HTML-escape - so `O'Reilly` stays `O'Reilly`, not `O&#x27;Reilly`.
 * Use this for any user-supplied value that flows into Web3Forms email
 * subjects/bodies or other plain-text channels.
 */
export function sanitizeForEmail(value: string): string {
  return value.replace(/[\r\n\t\f\v\0]+/g, " ").trim().slice(0, 2000);
}

export function sanitizeEmail(email: string): string {
  const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
  const cleaned = email.trim().toLowerCase().slice(0, 254);
  return emailRegex.test(cleaned) ? cleaned : "";
}

export function sanitizePhone(phone: string): string {
  return phone.replace(/[^0-9+\-\s()]/g, "").slice(0, 20);
}

export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  agreed: boolean;
};

export function validateForm(data: ContactFormData): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.length < 2)
    errors.name = "Please enter your full name";

  if (!sanitizeEmail(data.email))
    errors.email = "Please enter a valid email address";

  if (!data.service) errors.service = "Please select a service";

  if (!data.message || data.message.length < 10)
    errors.message = "Please tell us a bit more (at least 10 characters)";

  if (!data.agreed)
    errors.agreed = "Please accept the Privacy Policy to continue";

  return { valid: Object.keys(errors).length === 0, errors };
}
