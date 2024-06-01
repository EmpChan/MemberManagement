import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const data = {
  "name": "영",
  "children": [
    {
      "name": "하나",
      "children": [
        {
          "name": "황재찬",
          "children": [
            {"name": "고영찬", "value": 1},
            {"name": "박찬혁", "value": 1},
            {"name": "1", "value": 1},
            {"name": "2", "value": 1}
          ]
        },
        {
          "name": "고영찬",
          "children": [
            {"name": "4", "value": 1},
            {"name": "5", "value": 1},
            {"name": "6", "value": 1}
          ]
        }
      ]
    },
    {
      "name": "박찬혁",
      "children": [
        {
          "name": "하나",
          "children": [
            {"name": "둘", "value": 1},
            {"name": "셋", "value": 1},
            {"name": "넷", "value": 1}
          ]
        }
      ]
    },
    {
      "name": "두루",
      "children": [
        {
          "name": "10",
          "children": [
            {"name": "11", "value": 1},
            {"name": "22", "value": 1},
            {"name": "33", "value": 1},
            {"name": "44", "value": 1}
          ]
        },
        {
          "name": "12",
          "children": [
            {"name": "1234", "value": 1},
            {"name": "1324", "value": 1},
            {"name": "1234", "value": 1}
          ]
        },
        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },
        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },        {
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        },{
          "name": "13244",
          "children": [
            {"name": "ㅇ나나", "value": 1},
            {"name": "떡볶이", "value": 1},
            {"name": "싫어", "value": 1}
          ]
        }
      ]
    }
  ]
};

const width = 600;
const height = width;
const cx = width * 0.5; // adjust as needed to fit
const cy = height * 0.5; // adjust as needed to fit
const radius = Math.min(width, height) / 2 - 220;

const colors = {
  "파랑": "#1f77b4",
  "주황": "#ff7f0e",
  "녹색": "#2ca02c",
  "빨간": "#d62728",
  "보라": "#9467bd"
};

// Create a radial cluster layout. The layout’s first dimension (x) is the angle, while the second (y) is the radius.
const tree = d3.cluster()
    .size([2 * Math.PI, radius])
    .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

// Sort the tree and apply the layout.
const root = tree(d3.hierarchy(data)
    .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

// Function to determine the color based on the highest level parent.
function getColor(d) {
  while (d.depth > 1) d = d.parent;
  return colors[d.data.name] || "#999";
}

// Creates the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-cx, -cy, width, height])
    .attr("style", "width: 100%; height: auto; font: 17px sans-serif;"); //字体大小

// Append links.
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

// Append nodes.
svg.append("g")
  .selectAll()
  .data(root.descendants())
  .join("circle")
    .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .attr("fill", d => getColor(d))
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