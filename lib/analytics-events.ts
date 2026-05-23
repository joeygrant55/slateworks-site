import { track } from "@vercel/analytics";

export type AnalyticsProperties = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, properties?: AnalyticsProperties) {
  track(name, properties);
}

export const analyticsEvents = {
  ctaClick: "CTA Clicked",
  leadFormStarted: "Lead Form Started",
  leadFormSubmitted: "Lead Form Submitted",
  leadFormFailed: "Lead Form Failed",
  assessmentStepCompleted: "Assessment Step Completed",
  assessmentSubmitted: "Assessment Submitted",
  assessmentFailed: "Assessment Failed",
};
