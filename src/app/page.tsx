import Hero from "./_components/home/Hero";
import About from "./_components/home/About";
import Developer from "./_components/home/Developer";
import Location from "./_components/home/Location";
import Gallery from "./_components/home/Gallery";
import Highlights from "./_components/home/HighLights";
import ProjectStatus from "./_components/home/ProjectStatus";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Hero />
			<About />
			<Highlights />
			<Location />
			<Gallery />
			<Developer />
			<ProjectStatus />
		</main>
	);
}
