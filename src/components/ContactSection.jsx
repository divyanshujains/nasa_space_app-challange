import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 px-4 relative bg-secondary/30 overflow-hidden"
    >
      {/* Space Background Images */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&q=80"
          alt="Space background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Floating NASA/Space Elements */}
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block animate-pulse">
        <img
          src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=300&q=80"
          alt="Planet"
          className="w-32 h-32 rounded-full"
        />
      </div>

      <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?w=300&q=80"
          alt="Rocket"
          className="w-24 h-24 rounded-full animate-bounce"
        />
      </div>

      {/* Contact Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-center tracking-tight">
          Get In{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        {/* Grid Layout: Left side = Image + text, Right side = Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Explore the Universe of Ideas
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg">
              Just like space exploration, every project begins with curiosity
              and imagination. Let's launch your ideas into reality together.
            </p>
            <img
              src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Space inspiration"
              className="rounded-2xl h-94  object-cover shadow-lg mx-auto lg:mx-0 w-full max-w-sm"
            />
          </div>

          {/* Right Side = Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none border border-white/20"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none border border-white/20"
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/20 focus:bg-white/30 outline-none border border-white/20"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-all",
                isSubmitting && "opacity-50 cursor-not-allowed"
              )}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
