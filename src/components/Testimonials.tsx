export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content:
        "This platform completely changed how I learn. The AI feels like a personal tutor!",
    },
    {
      name: "Michael Lee",
      role: "Developer",
      content:
        "I improved my coding skills twice as fast using the adaptive learning system.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          What Learners Say
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <div key={index} className="p-8 border rounded-2xl">
              <p className="text-gray-600 mb-4">"{t.content}"</p>
              <h4 className="font-semibold text-gray-900">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}