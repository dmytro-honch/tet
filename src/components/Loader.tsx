import React from 'react';

export function Loader() {

  return <div className="loader__container">
    <svg className="loader" width="220" height="70" viewBox="0 0 220 70">
      <g className="f1">
        {lArray.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
      </g>
      <g className="f2">
        {oArray.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
      </g>
      <g className="f3">
        <g>
          {a1Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
        <g>
          {a2Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
      </g>
      <g className="f4">
        <g>
          {d1Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
        <g>
          {d2Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
      </g>
      <g className="f5">
        {iArray.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
      </g>
      <g className="f6">
        <g>
          {n1Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
        <g>
          {n2Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
      </g>
      <g className="f7">
        <g>
          {g1Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
        <g>
          {g2Array.map((r) => <rect x={r.x} y={r.y} width="10" height="10" key={'key'+r.x+r.y} />)}
        </g>
      </g>
    </svg>
  </div>;
}


const lArray = [
  {x: 0, y: 10},
  {x: 0, y: 20},
  {x: 0, y: 30},
  {x: 10, y: 30}];

const oArray = [
  {x: 30, y: 20},
  {x: 40, y: 20},
  {x: 30, y: 30},
  {x: 40, y: 30}];

const a1Array = [
  {x: 60, y: 0},
  {x: 60, y: 10},
  {x: 60, y: 20},
  {x: 60, y: 30}];

const a2Array = [
  {x: 70, y: 10},
  {x: 70, y: 20},
  {x: 80, y: 20},
  {x: 80, y: 30}
]

const d1Array = [
  {x: 100, y: 20},
  {x: 100, y: 30},
  {x: 110, y: 20},
  {x: 110, y: 30}];

const d2Array = [
  {x: 120, y: 0},
  {x: 120, y: 10},
  {x: 120, y: 20},
  {x: 120, y: 30}]

const iArray = [
  {x: 140, y: 0},
  {x: 140, y: 10},
  {x: 140, y: 20},
  {x: 140, y: 30}];

const n1Array = [
  {x: 160, y: 0},
  {x: 160, y: 10},
  {x: 160, y: 20},
  {x: 160, y: 30}];

const n2Array = [
  {x: 170, y: 10},
  {x: 180, y: 10},
  {x: 180, y: 20},
  {x: 180, y: 30}]

const g1Array = [
  {x: 200, y: 20},
  {x: 210, y: 20},
  {x: 200, y: 30},
  {x: 210, y: 30}];

const g2Array = [
  {x: 210, y: 40},
  {x: 200, y: 50},
  {x: 210, y: 50},
  {x: 210, y: 60}];
