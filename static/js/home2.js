import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const testdata = {
  "name": "엠시스",
  "children": [
    {
      "name": "그림그리기모임",
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
      "children": [
        {"name": "고영찬", "value": 100},
        {"name": "박찬혁", "value": 1},
        {"name": "1저시기", "value": 1},
        {"name": "2머시기", "value": 1}
      ]
    },
    {
      "name": "객설팀",
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
    },
    {
      "name": "저시기 모임4",
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
    },
    {
      "name": "저시기 모임5",
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
    },
    {
      "name": "저시기 모임8",
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
            {"name": "저시기 모임",
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
              },
            {"name": "아무개1", "value": 1},
            {"name": "아무개2", "value": 1}
          ]
        }
      ]
    }
  ]
};

const predefinedColors = [
  "#ff0000", "#0000ff", "#00ff00", "#EA3FF7", 
  "#ffa500","#00bfff", "#000000", "#D40765",
  "#058F08", "#F1FF00","#C8BFE7" ,"#A68760",
  ,"#189C90" ,"#5A31FF"
];

function draw(data) {
  const container = document.getElementById('container');
  const width = container.clientWidth * 1.3;
  const height = container.clientHeight * 1.3;
  const cx = width * 0.5;
  const cy = height * 0.5;
  const radius = Math.min(width, height) / 2 - 80;

  const tree = d3.cluster()
    .size([2 * Math.PI, radius])
    .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

  const root = tree(d3.hierarchy(data)
    .sort((a, b) => d3.ascending(a.data.name, b.data.name)));

  function assignColors(root) {
    const colorMap = new Map();
    let colorIndex = 0;

    function traverse(node) {
      if (!colorMap.has(node.data.name)) {
        colorMap.set(node.data.name, predefinedColors[colorIndex % predefinedColors.length]);
        colorIndex++;
      }
      if (node.children) {
        node.children.forEach(child => traverse(child));
      }
    }

    traverse(root);
    return colorMap;
  }

  const colorMap = assignColors(root);

  function getColor(d) {
    while (d.depth > 1) d = d.parent;
    return colorMap.get(d.data.name) || "#999";
  }

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-cx, -cy, width, height]);

  const g = svg.append("g");

  // 링크 연결.
  g.append("g")
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
  g.append("g")
    .selectAll()
    .data(root.descendants())
    .join("circle")
    .attr("transform", d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
    .attr("fill", d => d.children ? "#555" : getColor(d))
    .attr("r", 2.5);

  g.append("g")
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

  // 줌 이벤트 추가
  const zoom = d3.zoom()
    .scaleExtent([0.5, 5])
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

  svg.call(zoom);

  container.append(svg.node());
}

draw(testdata);
