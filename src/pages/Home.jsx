import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44client';
import { useQuery } from '@tanstack/react-query';
import { Sparkles, Heart, Coins, Trophy, ArrowLeft } from 'lucide-react';

const features = [
  { icon: '🐉', title: '4 Mythical Pets', desc: 'Dragon, Cerberus, Kitsune, Phoenix' },
  { icon: '🥚', title: '3 Life Stages', desc: 'Egg → Hatchling → Fully Grown' },
  { icon: '💰', title: 'Economy System', desc: 'Earn coins through mini-games' },
  { icon: '🏆', title: 'Achievements', desc: 'Unlock badges as you progress' },
];

export default function Home() {
  const navigate = useNavigate();
  const { data: pets, isLoading } = useQuery({
    queryKey: ['pets'],
    queryFn: () => base44.entities.Pet.list(),
  });

  const hasPet = pets && pets.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Back button if user has pet */}
      {hasPet && (
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-purple-300 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Game
            </button>
          </motion.div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-12 h-12 text-yellow-400" />
            Mythical Pet Care Adventure
            <Sparkles className="w-12 h-12 text-yellow-400" />
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Adopt, nurture, and grow your own magical creature. Complete mini-games, earn coins, and unlock achievements as your pet evolves through life stages.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-purple-500/50 transition"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to={hasPet ? '/pet-care' : '/pet-adopt'}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105"
          >
            {hasPet ? 'Continue Game' : 'Start Adventure'}
          </Link>
          {hasPet && (
            <button
              onClick={() => navigate('/pet-adopt')}
              className="px-8 py-3 bg-white/20 text-white rounded-lg font-bold hover:bg-white/30 transition"
            >
              Adopt Another Pet
            </button>
          )}
        </motion.div>

        {/* Stats preview */}
        {hasPet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 text-center"
          >
            <div className="bg-white/10 rounded-lg p-4">
              <Heart className="w-6 h-6 text-red-400 mx-auto mb-2" />
              <p className="text-white font-bold">Active Pet</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Coins className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-bold">Economy Active</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Trophy className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-bold">Achievements</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
