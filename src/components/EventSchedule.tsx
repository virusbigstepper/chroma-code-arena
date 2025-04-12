import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { CalendarDays, Flag, Trophy, Users } from "lucide-react";

export default function EventSchedule() {
  const data = [
    {
      title: "Registration Phase",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Team registration opens for HashCode 2024. Form your team of three and secure your spot in this exciting competition.
          </p>
          <div className="space-y-2 mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              <Users className="text-icpc-yellow" size={16} />
              Team Formation (3 members per team)
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              <CalendarDays className="text-icpc-blue" size={16} />
              Registration Deadline: March 15, 2024
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Qualification Round",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Teams will participate in an online qualification round to test their problem-solving abilities and secure their spot in the main event.
          </p>
          <div className="space-y-2 mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              <Flag className="text-icpc-red" size={16} />
              Online Qualification Round: March 20, 2024
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              <CalendarDays className="text-icpc-blue" size={16} />
              Duration: 4 hours
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Main Event",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-4">
            The final showdown where qualified teams compete in an intense algorithmic battle.
          </p>
          <div className="space-y-2 mb-8">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              <Trophy className="text-icpc-yellow" size={16} />
              Final Round: April 1, 2024
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              <CalendarDays className="text-icpc-blue" size={16} />
              Duration: 5 hours
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✨ Prize Distribution Ceremony
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="schedule" className="relative">
      <Timeline data={data} />
    </section>
  );
} 