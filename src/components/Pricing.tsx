import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      features: ["Basic AI guidance", "Limited lessons", "Community access"],
    },
    {
      name: "Pro",
      price: "$19/mo",
      features: ["Full AI mentor", "Unlimited lessons", "Progress analytics"],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="p-10 bg-white rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-gray-600">
                    {f}
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}