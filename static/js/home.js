
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


  const container = document.getElementById('container');
  const width = container.clientWidth;
  const height = container.clientHeight;
  const cx = width * 0.5;
  const cy = height * 0.5;
  const radius = Math.min(width, height) / 2 - 80;
const data = {
  "name": "엠시스",
  "children": [
    {
      "name": "그림그리기모임",
      "color": "red",
      "children": [
        {
          "name": "황재찬",
          "children": [
            {"name": "고영찬", "value": 100},
            {"name": "박찬혁", "value": 1},
            {"name": "1아무개", "value": 1},
            {"name": "2아무개", "value": 1}
          ]
        }
        , 
        {
          "name": "아무개",
          "children": [
            {"name": "고영찬", "value": 100},
            {"name": "박찬혁", "value": 1},
            {"name": "아무개", "value": 1},
            {"name": "아무개2", "value": 1}
          ]
        }
      ]
    }
    ,
    {
      "name": "알고리즘 스터디",
      "color": "blue",
      "children": [
        {"name": "고영찬", "value": 100},
        {"name": "박찬혁", "value": 1},
        {"name": "1저시기", "value": 1},
        {"name": "2머시기", "value": 1}
      ]
    },
    {
      "name": "객설팀",
      "color": "green",
      "children": [
        {
          "name": "파시오네",
          "children": [
            {"name": "황재찬", "value": 100},
            {"name": "고영찬", "value": 1},
            {"name": "박찬혁", "value": 1},
          ]
        },
        {
          "name": "조서김",
          "children": [
            {"name": "조아무개", "value": 100},
            {"name": "아무개", "value": 1},
            {"name": "휴학", "value": 1},
          ]
        }
      ]
    },
    {
      "name": "저시기 모임",
      "color": "purple",
      "children": [
        {
          "name": "저시기 모임 1",
          "children": [
            {"name": "아무개", "value": 100},
            {"name": "아무개2", "value": 1},
            {"name": "아무개3", "value": 1},
            {"name": "아무개4", "value": 1}
          ]
        },
        {
          "name": "저시기 모임 2",
          "children": [
            {"name": "아무개", "value": 1},
            {"name": "아무개1", "value": 1},
            {"name": "아무개2", "value": 1}
          ]
        }
      ]
    }
  ]
};

const colors = {
  "red": "#ff0000", // 빨강색
  "blue": "#0000ff", // 파랑색
  "green": "#00ff00", // 초록색
  "yellow": "#ffff00", // 노랑색
  "purple": "#800080" // 보라색
};

// const width = 928;
// const height = width;
// const cx = width * 0.5; // adjust as needed to fit
// const cy = height * 0.54; // adjust as needed to fit
// const radius = Math.min(width, height) / 2 - 80;
  
const tree = d3.cluster()
.size([2 * Math.PI, radius])
.separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

// Sort the tree and apply the layout.
const root = tree(d3.hierarchy(data)
.sort((a, b) => d3.ascending(a.data.name, b.data.name)));

function getColor(d) {
  while (d.depth > 1) d = d.parent;
  return colors[d.data.color] || "#999";
}

const zoom = d3.zoom()
.scaleExtent([0.5, 5])
.on("zoom", (event) => {
  svg.attr("transform", event.transform);
});

// Creates the SVG container.
const svg = d3.create("svg")
.attr("width", width)
.attr("height", height)
.attr("viewBox", [-cx, -cy, width, height])
.call(zoom);

// 링크 연결.
svg.append("g")
.attr("fill", "none")
.attr("stroke-opacity", 0.4)
.attr("stroke-width", 1.5)
.selectAll()
.data(root.links())
.join("path")
  .attr("d", d3.linkRadial()
    .angle(d => d.x)
    .radius(d => d.y))
  .attr("stroke", d => getColor(d.target));

// 노드 삽입.
svg.append("g")
.selectAll()
.data(root.descendants())
.join("circle")
.attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
.attr("fill", d => d.children ? "#555" : "#999")
.attr("r", 2.5);

// Append labels.
svg.append("g")
.attr("stroke-linejoin", "round")
.attr("stroke-width", 3)
.selectAll()
.data(root.descendants())
.join("text")
.attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0) rotate(${d.x >= Math.PI ? 180 : 0})`)
.attr("dy", "0.31em")
.attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
.attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
.attr("paint-order", "stroke")
.attr("stroke", "white")
.attr("fill", "currentColor")
.text(d => d.data.name);

container.append(svg.node());