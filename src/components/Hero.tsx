import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Learn Anything With{" "}
          <span className="text-purple-600">AI-Powered</span>{" "}
          Guidance
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Personalized learning paths, real-time feedback, and adaptive
          curriculum designed just for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Start Learning
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}