import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotCompleted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center text-white px-6">
      {/* Glowing neon circle background */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[400px] h-[400px] rounded-full bg-[#00ffff44] blur-3xl animate-pulse"></div>
      </div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold mb-6 neon-text"
      >
        🚧 Project In Progress
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-400 max-w-md mb-8"
      >
        This project isn’t ready yet — but we’re crafting something awesome!  
        Check back soon 👀
      </motion.p>

      {/* Go Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-medium transition-all duration-300 shadow-[0_0_20px_#00ffff55]"
      >
        ← Go Back
      </motion.button>
    </div>
  );
}
