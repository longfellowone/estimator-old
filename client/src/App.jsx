import React from 'react';

import { useMousePosition } from '@react-hook/mouse-position';

const App = () => {
  const [mousePositionRef, mousePosition] = useMousePosition(0, 0, 120);
  const [scale, setScale] = React.useState(1);
  const [translate] = React.useState({ x: 0, y: 0 });
  const [points, setPoints] = React.useState([100, 100, 100, 900, 900, 900, 900, 100]);

  // console.log(mousePosition.x, mousePosition.y);
  // console.log(mousePosition.elementHeight, mousePosition.elementWidth);

  const handleMouseUp = () => {
    setPoints(prevPoints => [...prevPoints, mousePosition.x, mousePosition.y]);
  };

  const handleWheel = e => {
    if (e.deltaY < 0) {
      setScale(prevScale => prevScale + 1);
    } else {
      setScale(prevScale => {
        if (prevScale === 1) {
          return prevScale;
        }
        return prevScale - 1;
      });
    }
  };

  return (
    <>
      <div className="bg-green-700 p-8 mx-auto flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="text-3xl">{scale}</div>
        </div>
        <svg
          width="1000"
          height="1000"
          className="bg-white"
          ref={mousePositionRef}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
        >
          <g id="canvas" transform={`translate(${translate.x},${translate.y}) scale(${scale})`}>
            <g>
              <polyline fill="none" points={points} stroke="#000" strokeWidth="6" />
            </g>
            <g>
              <line
                x1={points[points.length - 2]}
                y1={points[points.length - 1]}
                x2={mousePosition.x}
                y2={mousePosition.y}
                strokeDasharray="5, 5"
                strokeWidth="2"
                stroke="#006BF7"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default App;
