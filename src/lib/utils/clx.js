import clsx from "clsx";

export const gradientBgClasses = (forecastColor) => {
  return clsx(
    "p-10 flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b",
    {
      "from-sky-950 to-sky-400": forecastColor === "sky",
      "from-indigo-950 to-fuchsia-400": forecastColor === "fuchsia",
      "from-zinc-800 to-zinc-400": forecastColor === "zinc",
      "from-slate-700 to-slate-400": forecastColor === "slate",
    }
  );
};

export const gradientCardClasses = (forecastColor) => {
  return clsx(
    "text-white min-w-[300px] bg-gradient-to-b py-4 rounded-3xl shadow-lg",
    {
      "from-sky-950 to-sky-300": forecastColor === "sky",
      "from-indigo-950 to-fuchsia-400": forecastColor === "fuchsia",
      "from-zinc-800 to-zinc-400": forecastColor === "zinc",
      "from-slate-700 to-slate-400": forecastColor === "slate",
    }
  );
};
