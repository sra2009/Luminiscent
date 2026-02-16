export default function Features() {
  const features = [
    {
      title: "Personalized Learning",
      description: "AI adapts to your pace and learning style in real-time.",
    },
    {
      title: "Smart Assessments",
      description: "Track progress with intelligent quizzes and insights.",
    },
    {
      title: "24/7 AI Mentor",
      description: "Always available guidance whenever you need help.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border rounded-2xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}