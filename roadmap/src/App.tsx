
import './App.css';
import { RoadmapItem } from './items/roadmap-item';

function App() {
  return (
    <div><h1 className='main-title'>ROADMAP</h1>
      <div className="main">

        <RoadmapItem title="Persistent galaxy" desc="All players will see the same sectors served from the backend" />
        <RoadmapItem title="Planet focused UI" desc="A page for each planet that will allow building, managing etc." />
        <RoadmapItem title="Buildable buildings" desc="Find the resources on the planet, then start the building process and add the building to the planet" />
        <RoadmapItem title="Fully flush out UI" desc="All menus need to be completed" />
        <RoadmapItem title="Fleet movement" desc="Allow fleets to be sent from planet to planet, and from star to star" />
        <RoadmapItem title="Claim planets" desc="Let players claim planets" />
        <div className='main'>
        </div>
        <p className='finish'>Open beta!</p>
      </div></div>
  );
}

export default App;
