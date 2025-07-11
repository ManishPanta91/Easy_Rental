import React from "react";

const FaqPage = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section 1: FAQs */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          FREQUENTLY ASKED QUESTIONS (FAQs){" "}
          <span className="text-[#025CA3]">ABOUT BIKE RENTAL</span>
        </h1>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
          <p>
            Our motorbikes are regularly inspected to ensure each rental goes
            smoothly. Our price covers the motorbike rental and a helmet only.
            We also provide pick-and-drop service at your hotel or chosen
            location for an additional charge.
          </p>

          <p>
            Please read carefully before renting bikes or joining our motorcycle
            tours in Nepal. Contact us via the booking{" "}
            <span className="text-[#025CA3] underline cursor-pointer">
              inquiry
            </span>{" "}
            form or WhatsApp: <strong>+9779826734623, +9779812345676</strong> for
            more details.
          </p>

          <p>
            Renting with EasyRental means you accept our terms and conditions.
            Please review the following carefully:
          </p>

          {/* Risks */}
          <div>
            <h2 className="text-xl font-semibold mt-10 mb-2">
              Risks and responsibilities:
            </h2>
            <p>
              I am aware of the potential hazards while traveling in Nepal. I
              will carry a valid driver's license and international permit,
              comply with traffic rules, wear protective gear, and will not ride
              under the influence of drugs or alcohol.
            </p>
          </div>

          {/* Cancellation */}
          <div>
            <h2 className="text-xl font-semibold mt-10 mb-2">
              Cancellation policy:
            </h2>
            <p>
              All rental/tour bookings are non-refundable. No refunds will be
              given for cancellations after booking or for unused services.
            </p>

            <h3 className="text-lg font-medium mt-4">Insurance:</h3>
            <p>
              Insurance is not typically included with rentals in Nepal. In case
              of accidents, injuries, or damage, the renter is fully responsible
              for all costs and liabilities.
            </p>
          </div>

          {/* Bike Damage */}
          <div>
            <h2 className="text-xl font-semibold mt-10 mb-2">Bike Damage:</h2>
            <p>
              The bike must be returned in the same condition as received.
              Damage (scratches, theft, accidents, etc.) will result in charges.
              If the bike or documents are not returned, the renter is
              responsible for all related costs, including transport, repair,
              food, and accommodation.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-16"></div>

        {/* Section 2: Things to Remember */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          Few things to remember before hiring a bike:
        </h2>

        {/* Booking Info */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">
            1. Booking information on Motorbike rental
          </h3>
          <p className="mb-2">
            To book on your requested date, we require a 40% advance payment.
            This reservation fee is non-refundable. Payment methods include IME,
            bank transfer, etc.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Full payment must be completed before pickup.</li>
            <li>We accept payments in NPR or USD.</li>
            <li>Credit cards are not accepted.</li>
          </ul>
        </div>

        {/* Rental Requirements */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">
            2. What should I submit for Rental?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Motorcycle driving license is required.</li>
            <li>Original passport with Nepal visa or a local guarantor.</li>
            <li>
              Or, one ID card + refundable cash deposit (USD 500 to USD 1000
              depending on the bike).
            </li>
            <li>International motorcycle license is mandatory.</li>
          </ul>
        </div>

        {/* License Info */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">
            3. What license is required for Motorbike rental or Tours?
          </h3>
          <p>
            A motorcycle license is required. Car driving licenses are not
            accepted for bike rentals in Nepal.
          </p>
        </div>

        {/* What's Included */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            4. What is included in the Motorcycle Rental price?
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bike and helmet are included.</li>
            <li>
              Fuel is not included, but we provide 2–3 liters to reach a nearby
              fuel station.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
