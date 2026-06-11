import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";

export default function App() {
  return (
    <main className="bg-black min-h-screen" style={{ color: "#E1E0CC" }}>
      <Hero />
      <About />
      <Features />
    </main>
  );
}
