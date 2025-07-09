import { Film, Clapperboard, Camera, Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="animate-spin text-blue-500">
              <Film size={32} />
            </div>
            <div
              className="animate-bounce text-purple-500"
              style={{ animationDelay: "0.2s" }}
            >
              <Clapperboard size={32} />
            </div>
            <div
              className="animate-spin text-red-500"
              style={{ animationDelay: "0.4s", animationDirection: "reverse" }}
            >
              <Camera size={32} />
            </div>
            <div
              className="animate-pulse text-yellow-500"
              style={{ animationDelay: "0.6s" }}
            >
              <Zap size={32} />
            </div>
          </div>

          {/* Pulsing circles */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-ping"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="absolute inset-0 rounded-full border-2 border-red-500/30 animate-ping"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Searching Movies...</h2>
          <p className="text-gray-400">Finding the perfect films for you</p>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 h-2 rounded-full animate-pulse"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        {/* Floating cards animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-800/30 rounded-lg border border-gray-700/30 animate-float"
              style={{
                width: "60px",
                height: "80px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Random movie related text that cycles */}
        <div className="mt-8 text-sm text-gray-500 animate-pulse">
          <div className="animate-fade-in-out">🎬 Powered by AI • 🎬</div>
        </div>
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes fade-in-out {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
