/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code 




*/

// testing area
d3.json("././samples.json").then(function(data) {
    console.log(data);
    var samp_md = data.metadata;
    console.log("sample metadata")
    console.log(samp_md);

    var samp_md2 = samp_md.filter(pick => pick.id === Selection);
    console.log("pick at positon 0")
    console.log(samp_md2[0]);



});

// Define a function that will create metadata for given sample
function buildMetadata(sample) {
    
    // Read the json data
    //d3.json(url).then(function(data) {
    //    console.log(data);
    //  });
    d3.json("././samples.json").then(function(data) {
        //console.log(data.names);
      });
      
    // Parse and filter the data to get the sample's metadata
    var samp_md = data.metadata;

    //let bigCities = cities.filter(city => city.population > 3000000);
    //console.log(bigCities);
    var samp_md2 = samp_md.filter(pick => pick.id == Selection);
    console.log(pick[0]);

    // Specify the location of the metadata and update it
    
}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

// Define function that will run on page load
function init() {

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

}

function optionChanged(newSample){

    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();