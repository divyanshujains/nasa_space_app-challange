import { Calendar, Globe, Lightbulb, MapPin, Rocket, Trophy, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          What is the <span className="text-blue-600">NASA Space Apps Challenge?</span>
        </h2>
        
        <div className="text-center mb-12">
          <a 
            href="https://spaceappschallenge.org" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 text-xl font-semibold underline hover:text-yellow-400 transition-colors"
          >
            spaceappschallenge.org
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* WHAT */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start  gap-4">
              <div className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap">
                WHAT?
              </div>
              <div className="p-3 rounded-full bg-blue-600/10">
                <Rocket className="h-3 w-3 text-blue-600" />
              </div>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              The largest annual global hackathon that engages NASA and Space Agency Partners' free and open data to address real-world challenges on Earth and in space
            </p>
          </div>

          {/* WHO */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap">
                WHO?
              </div>
              <div className="p-3 rounded-full bg-blue-600/10">
                <Users className="h-3 w-3 text-blue-600" />
              </div>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Everyone! Coders, scientists, designers, storytellers, business people, makers, builders, technologists...no matter their background, age, or skills
            </p>
          </div>

          {/* WHEN */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap">
                WHEN?
              </div>
              <div className="p-3 rounded-full bg-blue-600/10">
                <Calendar className="h-3 w-3 text-blue-600" />
              </div>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed text-lg font-semibold">
              October 4-5, 2025
            </p>
          </div>

          {/* WHERE */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap">
                WHERE?
              </div>
              <div className="p-3 rounded-full bg-blue-600/10">
                <MapPin className="h-3 w-3 text-blue-600" />
              </div>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              At in-person and virtual Local Events worldwide
            </p>
          </div>
        </div>

        {/* HOW Section */}
        <div className="gradient-border p-8 card-hover mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap">
              HOW?
            </div>
            <div className="p-3 rounded-full bg-blue-600/10">
              <Trophy className="h-3 w-3 text-blue-600" />
            </div>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl font-bold mt-0.5">•</span>
              <span>Challenges are created by NASA Subject Matter Experts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl font-bold mt-0.5">•</span>
              <span>Participants join a team & pick a challenge to tackle</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl font-bold mt-0.5">•</span>
              <span>NASA Space Apps judges evaluate projects and NASA recognizes the 10 Global Winners</span>
            </li>
          </ul>
        </div>

        {/* WHY Section */}
        <div className="gradient-border p-8 card-hover mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-lg font-bold text-sm whitespace-nowrap">
              WHY?
            </div>
            <div className="p-3 rounded-full bg-blue-600/10">
              <Lightbulb className="h-3 w-3 text-blue-600" />
            </div>
          </div>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl font-bold mt-0.5">•</span>
              <span>Raise awareness of NASA's open data</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl font-bold mt-0.5">•</span>
              <span>Inspire creativity and collaboration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl font-bold mt-0.5">•</span>
              <span>Nurture an interest in STEM</span>
            </li>
          </ul>
        </div>

        {/* Local Event Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 gradient-border px-8 py-4 card-hover">
            <Globe className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold">Bhopal, India Local Event</span>
          </div>
        </div>
      </div>
    </section>
  );
}