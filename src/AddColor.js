import { useState } from 'react';
import { ColorBox } from './ColorBox.js';

export function AddColor() {

  const [colorList, setColorList] = useState(["grey", "aqua", "pink"]);
  const [color, setColor] = useState("orange");
  const style = {
    backgroundColor: color
  };
  return (
    <div>
      <div>
        <input onChange={(event) => setColor(event.target.value)}
          value={color}
          style={style} type="text" />
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => {
        return <ColorBox color={clr} />;
      }
      )}
    </div>
  );
}
