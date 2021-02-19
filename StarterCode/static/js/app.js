/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code 




*/

// testing area








// });
// 
// 
// 
// 
//  d3.json("././samples.json").then(function(data) {

         //
        //  var samples = data.samples;
        //  console.log(samples);
        //  // Parse and filter the data to get the sample's OTU data
         // Pay attention to what data is required for each chart

         //var pers = samples.filter(subject => subject.id === sample)[0];
         //console.log(person)
         // Create bar chart in correct location
 


// 


// Define a function that will create metadata for given sample
function buildMetadata(selection) {
    
    // Read the json data
    d3.json("././samples.json").then(function(data) {
              
        // Parse and filter the data to get the sample's metadata
        var samp_md = data.metadata;
        console.log("read json & get data in metadata function")
        console.log(samp_md)

        //let bigCities = cities.filter(city => city.population > 3000000);
        //console.log(bigCities);
        var filt_md = samp_md.filter(pick => pick.id === selection);
        console.log("filtered[0] position in metadata function")
        console.log(filt_md[0]);

        // Specify the location of the metadata and update it
        var metadata = d3.select("#sample-metadata").html("");

        Object.entries(filt_md[0]).forEach(([key, value]) => {
                metadata.append("p").text('${key}:${value}');
                  
        });
    });
};
// 
// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data
    d3.json("././samples.json").then(function(data) {

        //
        var samples = data.samples;
        console.log(samples);
        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        var pardata = samples.filter(subject => subject.id === sample)[0];
        //console.log(person)
        // Create bar chart in correct location




        //Create bubble chart in correct location

  
    
    });

};

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