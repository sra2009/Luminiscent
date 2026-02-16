import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-purple-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of students already learning smarter with AI.
        </p>

        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
          Get Started Now
        </Button>
      </div>
    </section>
  );
}