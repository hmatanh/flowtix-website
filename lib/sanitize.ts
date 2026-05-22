export function sanitizeInput(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim()
    .slice(0, 2000);
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
