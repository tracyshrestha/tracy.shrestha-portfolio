import Work from "../components/Work";
import Intro from "../components/Introduction/Intro";

function Home() {
  return (
    <div className="h-full bg-black">
      
      <div className="h-lvh">
        <Intro />
      </div>
      <div className="">
        <Work />
      </div>
    </div>
  );
}

export default Home;
