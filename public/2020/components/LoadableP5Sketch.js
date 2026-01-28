import React, { useEffect, useRef } from "react"
import p5 from "p5"

const LoadableP5Sketch = ({ sketch }) => {
  const sketchEl = useRef(null);
  useEffect(() => {
    while (sketchEl.current.hasChildNodes()) {
      sketchEl.current.removeChild(sketchEl.current.lastChild);
    }
    new p5(sketch, sketchEl.current)
    /* return cleanup */
  }, [sketch]);
  return <div ref={sketchEl} />
}


export default LoadableP5Sketch;