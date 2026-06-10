/** Free vector tiles — no API key (https://openfreemap.org) */
export const MAP_STYLE_URL = "https://tiles.openfreemap.org/styles/dark";

export function add3DBuildings(map: import("maplibre-gl").Map) {
  if (map.getLayer("ec-3d-buildings")) return;

  const style = map.getStyle();
  if (!style?.sources) return;

  const vectorSource = Object.entries(style.sources).find(
    ([, source]) => source.type === "vector"
  )?.[0];

  if (!vectorSource) return;

  const labelLayer = style.layers?.find(
    (layer) =>
      layer.type === "symbol" &&
      "layout" in layer &&
      layer.layout &&
      "text-field" in layer.layout
  );

  map.addLayer(
    {
      id: "ec-3d-buildings",
      source: vectorSource,
      "source-layer": "building",
      type: "fill-extrusion",
      minzoom: 14,
      paint: {
        "fill-extrusion-color": [
          "interpolate",
          ["linear"],
          ["coalesce", ["get", "render_height"], ["get", "height"], 12],
          0,
          "#0f0f0f",
          80,
          "#1e3a5f",
          200,
          "#141414",
        ],
        "fill-extrusion-height": [
          "coalesce",
          ["get", "render_height"],
          ["get", "height"],
          12,
        ],
        "fill-extrusion-base": [
          "coalesce",
          ["get", "render_min_height"],
          ["get", "min_height"],
          0,
        ],
        "fill-extrusion-opacity": 0.82,
      },
    },
    labelLayer?.id
  );
}
