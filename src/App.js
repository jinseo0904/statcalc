
import './App.css';
import NormalCdf from './component/NormalCdf';
import InvNorm from './component/InvNorm';
import ConfInterval from './component/ConfInterval';
import { ReactComponent as StatIcon } from './favicon.svg';
import ProportionSE from './component/ProportionSE';


function App() {
  return (
    <div className="App" style={{
    }}>
      <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontFamily: 'Lato' }}>
        <StatIcon width="150" height="150" />
        {/* Text */}
        <h1 style={{ fontSize: '50px', marginLeft: '10px' }}>Statistics Calculator</h1>
      </div>
      <div className='calcFirstLayer'>
      <NormalCdf />
      <InvNorm />
      </div>
      <div className='calcFirstLayer'>
        <ConfInterval />
        <ProportionSE />
      </div>
    </div>
  );
}

export default App;
