import { useEffect } from "react";
import { NavBar } from "./ui/components/NavBar/NavBar";
import { openMateoService } from "./lib/services/open-mateo.service";

function App() {
  const { getWeather } = openMateoService;
  useEffect(() => {
    getWeather(52.52, 13.41).then((res) => {
      console.log(res);
    });
  }, [getWeather]);
  return (
    <>
      <NavBar />
      <div className="p-10 text-center bg-gradient-to-b from-indigo-950 to-fuchsia-400 min-h-screen"></div>
    </>
  );
}

export default App;
