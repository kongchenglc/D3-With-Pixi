import { useCallback } from 'react'
import './App.css';
import { ForceGraph } from './ForceGraph'
import data from './data/data.json'

import './Line'

function App() {
  const nodeHoverTooltip = useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);

  return (
    <div className="App">
      <ForceGraph links={data.links} nodes={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
    </div>
  );
}

export default App;
