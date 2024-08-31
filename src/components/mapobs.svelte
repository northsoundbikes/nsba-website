<script>
  import { onMount } from "svelte";
  import * as Plot from "@observablehq/plot"; // Import Observable Plot
  import { feature } from "topojson-client"; // Import the feature function
  import * as d3 from "d3";

  let width = 600;
  let height = 600;

  onMount(async () => {
    // Load the TopoJSON data
    const countyData = await fetch("/maps/countytopo.json").then((res) =>
      res.json(),
    ); // Adjust the path as needed
    const cityData = await fetch("/maps/citytopo.json").then((res) =>
      res.json(),
    ); // Adjust the path as needed

    // Convert TopoJSON to GeoJSON
    const counties = feature(countyData, countyData.objects.counties);
    const cities = feature(cityData, cityData.objects.cities);

    const projection = d3
      .geoMercator()
      .center([-122.3321, 47.8]) // Center on Seattle
      .scale(140000); // Adjust the scale for better visibility
    // .translate([width / 2, height / 2]); // Center the map in the SVG

    // Create the plot
    const svg = Plot.plot({
      // width: 600,
      // height: 600,
      x: {
        axis: null,
      },
      y: {
        axis: null,
      },
      // projection: d3.geoMercator().center([-122.3321, 47.8]),
      projection: d3
          .geoMercator()
          .center([-122.325, 47.755])
          .scale(60000)
          .translate([width / 2, height / 2]),
      marks: [
        Plot.geo(counties.features, {
          fill: "lightgray",
          stroke: "white",
          title: (d) => d.properties.name, // Tooltip for counties
        }),
        Plot.geo(cities.features, {
          fill: "lightgray",
          stroke: "black",
          strokeWidth: 3,
          pointerEvents: "auto",
          href: "https://google.com",
        }),
      ],
    });

    // Append the plot to the SVG
    document.getElementById("map").appendChild(svg);
  });
</script>

<svg id="map" class="basis-[600px] overflow-visible"></svg>
