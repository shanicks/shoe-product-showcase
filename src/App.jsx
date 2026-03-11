import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1E1F22] via-[#2A2C30] to-[#0F1012] text-white overflow-hidden">
      <Header />
      <Hero />
    </div>
  );
}
