<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { feature } from "topojson-client"; // Import the feature function

  let width = 600;
  let height = 600;

  onMount(async () => {
    // Load the TopoJSON data
    const countyData = await d3.json("/maps/countytopo.json"); // Adjust the path as needed

    const cityData = await d3.json("/maps/citytopo.json"); // Adjust the path as needed

    // Convert TopoJSON to GeoJSON
    const counties = feature(countyData, countyData.objects.counties); // Adjust 'counties' to match your TopoJSON object name

    const cities = feature(cityData, cityData.objects.cities); // Adjust 'cities' to match your TopoJSON object name

    const svg = d3.select("#map").attr("width", width).attr("height", height);

    // Create a projection centered on Seattle
    const projection = d3
      .geoMercator()
      .center([-122.3321, 47.8]) // Center on Seattle
      .scale(140000) // Adjust the scale for better visibility
      .translate([width / 2, height / 2]); // Center the map in the SVG

    const path = d3.geoPath().projection(projection);

    // Draw counties
    svg
      .selectAll(".county")
      .data(counties.features) // Bind each county feature
      .enter()
      .append("path")
      .attr("class", "county")
      .attr("d", path)
      .style("fill", "lightgray")
      .style("opacity", 0.5)
      // .style("stroke", "white");

    // Add labels for each county
    svg
      .selectAll(".city")
      .data(cities.features) // Bind each city feature
      .enter()
      .append("g") // Use 'g' to group path and text for each city
      .append("path") // Use 'path' to render shapes
      .attr("class", "city")
      .attr("d", path) // Use the same path generator
      .style("fill", "lightgray") // Set color for cities
      .style("stroke", "black") // Set stroke for cities
      .on("mouseover", function (event, d) {
        d3.select(this)
          .style("fill", "lightblue")
          .style("cursor", "pointer")
          .transition() // Add transition for smooth effect
          .duration(100) // Set transition duration to 0.1 seconds
          .attr("transform", "translate(-5,-5)") // Move shape up and left
          .style("filter", "drop-shadow(2px 2px 5px rgba(0, 0, 0, 1))") // Add block shadow
          d3.select(this.parentNode).raise()
      })
      .on("click", function (event, d) {
        window.open("https://www.google.com", "_blank");
      })
      .on("mouseout", function () {
        d3.select(this)
          .style("fill", "lightgray")
          .transition() // Add transition for smooth effect
          .duration(100) // Set transition duration to 0.1 seconds
          .attr("transform", "translate(0,0)") // Reset position
          .style("filter", "none"); // Remove shadow
      });

    svg
      .selectAll(".city-label")
      .data(cities.features) // Bind each city feature
      .enter()
      .append("text") // Use 'text' to render city labels
      .attr("class", "city-label")
      .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; }) // Position the label at the centroid of the city
      .attr("dy", ".35em") // Adjust vertical alignment
      .text(function(d) { return d.properties.name; }); // Display the city name
  });
</script>

<svg id="map" class=""></svg>

<style>
  /* Add any additional styles here */
</style>
