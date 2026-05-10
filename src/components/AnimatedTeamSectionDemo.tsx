'use client';
import { AnimatedTeamSection } from "@/components/ui/team-section";

const teamMembers = [
  {
    name: "Ajay Kumar",
    image: "/images/team/ajay.png",
  },
  {
    name: "Amit",
    image: "/images/team/amit.png",
  },
  {
    name: "Khushi",
    image: "/images/team/khushi.png",
  },
  {
    name: "Navdeep Sharma",
    image: "/images/team/navdeep.png",
  },
  {
    name: "Umesh",
    image: "/images/team/umesh.png",
  },
];

export default function AnimatedTeamSectionDemo() {
  return (
    <div id="about" className="w-full bg-[#020203]">
      <AnimatedTeamSection
        title="Our commitment to integrity and innovation"
        description="At REWON, we believe in forging strong partnerships built on integrity and honesty. Our mission is to drive innovation and ensure our clients success through dedicated service and creative solutions."
        members={teamMembers}
      />
    </div>
  );
}
