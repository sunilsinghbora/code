import React from "react";
import { motion } from "framer-motion";

export default function FloorPlan() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <motion.svg
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        width="800"
        height="1600"
        viewBox="0 0 900 1800"
        className="bg-white rounded-2xl shadow-xl"
      >
        {/* Outer boundary (plot) */}
        <rect x="50" y="50" width="800" height="1700" fill="none" stroke="green" strokeWidth="3" />

        {/* Building footprint */}
        <rect x="100" y="250" width="700" height="1300" fill="none" stroke="black" strokeWidth="3" />

        {/* Front setback */}
        <text x="400" y="200" textAnchor="middle" fontSize="22">Front setback 2.4m</text>

        {/* Rooms */}
        {/* Front-right bedroom */}
        <rect x="500" y="1350" width="300" height="250" fill="#fef3c7" stroke="black" strokeWidth="2" />
        <text x="650" y="1470" textAnchor="middle" fontSize="18">Bedroom</text>

        {/* Kitchen front-left */}
        <rect x="100" y="1350" width="200" height="250" fill="#e0f2fe" stroke="black" strokeWidth="2" />
        <text x="200" y="1470" textAnchor="middle" fontSize="18">Kitchen</text>

        {/* Dining middle-right */}
        <rect x="500" y="1050" width="300" height="250" fill="#f3e8ff" stroke="black" strokeWidth="2" />
        <text x="650" y="1180" textAnchor="middle" fontSize="18">Dining</text>

        {/* Toilets */}
        <rect x="300" y="1100" width="100" height="150" fill="#dcfce7" stroke="black" strokeWidth="2" />
        <text x="350" y="1180" textAnchor="middle" fontSize="16">Toilet</text>

        <rect x="400" y="1100" width="100" height="150" fill="#dcfce7" stroke="black" strokeWidth="2" />
        <text x="450" y="1180" textAnchor="middle" fontSize="16">Toilet</text>

        {/* Back bedrooms */}
        <rect x="100" y="800" width="350" height="250" fill="#fee2e2" stroke="black" strokeWidth="2" />
        <text x="275" y="920" textAnchor="middle" fontSize="18">Bedroom</text>

        <rect x="450" y="800" width="350" height="250" fill="#fee2e2" stroke="black" strokeWidth="2" />
        <text x="625" y="920" textAnchor="middle" fontSize="18">Bedroom</text>

        {/* Staircase */}
        <rect x="700" y="1350" width="100" height="150" fill="#f1f5f9" stroke="black" strokeWidth="2" />
        <text x="750" y="1420" textAnchor="middle" fontSize="16">Stair</text>

        {/* Corridor */}
        <rect x="300" y="950" width="150" height="650" fill="none" stroke="gray" strokeDasharray="5,5" />
        <text x="375" y="1250" textAnchor="middle" fontSize="16">Corridor</text>

        {/* Labels */}
        <text x="450" y="1750" textAnchor="middle" fontSize="24" fontWeight="bold">Estimated Built-up: 93.4 m² (≈ 997 ft²)</text>
      </motion.svg>
    </div>
  );
}
