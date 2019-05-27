import React from 'react';

import { useMousePosition } from '@react-hook/mouse-position';

const App = () => {
  const [mousePositionRef, mousePosition] = useMousePosition(0, 0, 60);
  const [scale, setScale] = React.useState(1);
  const [points, setPoints] = React.useState([100, 100, 100, 900, 900, 900, 900, 100]);
  const [drawing, setDrawing] = React.useState(false);
  const [panning, setPanning] = React.useState(false);
  const [translate, setTranslate] = React.useState({ x: 0, y: 0 });
  const [origin, setOrigin] = React.useState({ x: 0, y: 0 });
  // console.log(mousePosition.elementHeight, mousePosition.elementWidth);

  const handleWheel = e => {
    if (e.deltaY < 0) {
      setScale(prevScale => prevScale + 1);
    } else {
      setScale(prevScale => {
        if (prevScale <= 1) {
          // parseFloat('0.5');
          return prevScale;
        }
        return prevScale - 1;
      });
    }
  };

  const handleMouseDown = () => {
    setOrigin({ x: mousePosition.x, y: mousePosition.y });
    setPanning(true);
  };

  const handleMouseMove = e => {
    e.preventDefault();
    if (!panning) return;

    const xDiff = origin.x - mousePosition.x;
    const yDiff = origin.y - mousePosition.y;

    setOrigin({ x: mousePosition.x, y: mousePosition.y });
    setTranslate({ x: translate.x - xDiff, y: translate.y - yDiff });
  };

  const handleMouseUp = e => {
    e.preventDefault();
    setPanning(false);
    // setOrigin({ x: 0, y: 0 });
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
          onMouseDown={handleMouseDown}
          onMouseMove={e => handleMouseMove(e)}
          onMouseUp={e => handleMouseUp(e)}
          onWheel={handleWheel}
        >
          <g id="canvas" transform={`translate(${translate.x},${translate.y}) scale(${scale})`}>
            <g>
              <polyline fill="none" points={points} stroke="#000" strokeWidth="6" />
            </g>
            <g>
              {drawing && (
                <line
                  x1={points[points.length - 2]}
                  y1={points[points.length - 1]}
                  x2={mousePosition.x}
                  y2={mousePosition.y}
                  strokeDasharray="5, 5"
                  strokeWidth="2"
                  stroke="#006BF7"
                />
              )}
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default App;
