
import { LeaderboardEntry } from "@/types/quiz";
import { Star, Trophy, School } from "lucide-react";

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export const Leaderboard = ({ entries }: LeaderboardProps) => {
  const sortedEntries = [...entries].sort((a, b) => b.score - a.score);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          Leaderboard
        </h2>
        <div className="space-y-4">
          {sortedEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 border transition-all hover:shadow-md"
            >
              <div className="text-2xl font-bold text-gray-500 w-8">
                #{index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{entry.playerName}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <School className="w-4 h-4" />
                  {entry.school}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{entry.stars}</span>
                </div>
                <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
                  {entry.score} pts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
