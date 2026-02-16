export default function HowItWorks() {
  const steps = [
    "Sign up and choose your learning goals.",
    "AI builds your custom learning roadmap.",
    "Track progress and improve daily.",
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          How It Works
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-lg text-gray-700">
                <span className="font-bold mr-2">{index + 1}.</span>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}