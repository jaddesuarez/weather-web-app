import { HourCard } from "../HourCard/HourCard";

export const HourlyCard = () => {
  return (
    <div className="text-white min-w-[300px] bg-gradient-to-b from-indigo-950 to-fuchsia-400 py-4 rounded-3xl shadow-lg">
      <div className="flex justify-between px-8">
        <p>Today</p>
        <p>January, 15</p>
      </div>
      <div className="w-full h-[1px] bg-white/30"></div>
      <div className="flex gap-4 justify-center mt-4">
        <HourCard temperature={10} hour={10} />
        <HourCard temperature={10} hour={10} />
        <HourCard temperature={10} hour={10} />
        <HourCard temperature={10} hour={10} />
        <HourCard temperature={10} hour={10} />
      </div>
    </div>
  );
};
