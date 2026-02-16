/**
 * EmailJS Configuration
 * Production-ready configuration for EmailJS service
 */

const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  receiveEmail: import.meta.env.VITE_EMAILJS_RECEIVE_EMAIL,
};

// Validate required environment variables
const requiredEnvVars = ["publicKey", "serviceId", "templateId", "receiveEmail"];
const missingVars = requiredEnvVars.filter(
  (key) => !emailjsConfig[key as keyof typeof emailjsConfig]
);

if (missingVars.length > 0) {
  console.warn(
    `Missing EmailJS configuration: ${missingVars.join(", ")}. Please check your .env.local file.`
  );
}

export default emailjsConfig;
