import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="terms-and-conditions"
      className="max-w-5xl mx-auto px-6 py-24 text-muted-foreground"
    >
      <div className="glass-card p-8 rounded-3xl shadow-xl backdrop-blur-lg border border-border animate-fade-in">
        <h1 className="text-4xl font-bold mb-10 text-gradient text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              1. Service Booking
            </h2>
            <p>
              Services are booked only through direct phone or WhatsApp
              communication. Submitting a message does not confirm the
              appointment until manually acknowledged.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              2. Customer Responsibilities
            </h2>
            <p>
              Customers must provide accurate location and appliance details.
              Any delay caused due to misinformation is not our responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              3. Payment Terms
            </h2>
            <p>
              Payment is due after service completion. We accept UPI or cash.
              Pricing is discussed upfront before work begins.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              4. Warranty Policy
            </h2>
            <p>
              Warranty varies depending on the service and will be mentioned
              before completion. No universal warranty is provided unless
              agreed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              5. Use of Photos
            </h2>
            <p>
              We may take photos of appliances before or after service for our
              internal records or to upload on Google Maps. These will never
              include personal info.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              6. Testimonials Display
            </h2>
            <p>
              Reviews shared on WhatsApp or Google Maps may be displayed on our
              website including your name and feedback. You may request removal
              anytime by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              7. Limited Liability
            </h2>
            <p>
              We are not responsible for issues unrelated to the service
              performed. Liability is limited strictly to the scope of work.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              8. Right to Refuse Service
            </h2>
            <p>
              We reserve the right to decline service in situations involving
              unsafe environments, rude behavior, or suspicious activity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">
              9. Updates to Terms
            </h2>
            <p>
              These terms may be updated anytime without notice. Please check
              this page periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
