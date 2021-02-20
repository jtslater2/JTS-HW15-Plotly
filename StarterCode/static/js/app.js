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
    console.log("selection value is");
    console.log(selection);
    // Read the json data
    d3.json("././samples.json").then(function(data) {
              
        // Parse and filter the data to get the sample's metadata
        var samp_md = data.metadata;
        console.log("read json & get data in metadata function")
        console.log(samp_md[0])

        //let bigCities = cities.filter(city => city.population > 3000000);
        //console.log(bigCities);
        var filt_md = samp_md.filter(pick => pick.id == selection);
        console.log("filtered[0] position in metadata function")
        console.log(filt_md[0]);

        // Specify the location of the metadata and update it
        var metadata = d3.select("#sample-metadata").html("");

        Object.entries(filt_md[0]).forEach(([key, value]) => {
                metadata.append("p").text(key +" : "+value);
                //metadata.append("p").text('${key}:${value}');
        });
        console.log("metadata fill")
        console.log(metadata)
        
                  
    });
};
// 
// Define a function that will create charts for given sample
function buildCharts(selection) {

    // // Read the json data
    d3.json("././samples.json").then(function(data) {

    //     //
    var samples_data = data.samples;
    console.log("samples_data in chart func");
    console.log(samples_data);
    //     // Parse and filter the data to get the sample's OTU data
    //     // Pay attention to what data is required for each chart



    var filter_data = samples_data.filter(pick => pick.id == selection)[0];
    console.log("filter_data in chart func");
    console.log(filter_data);

    


    var ybar_values = filter_data.sample_values;
    console.log(ybar_values);
   
    var ybar_value10 = ybar_values.slice(0,10).reverse()
    console.log("ybar 10 values")
    console.log(ybar_value10);

    var xbar_values = filter_data.otu_ids;
    console.log(xbar_values);
    var xbar_value10 = xbar_values.slice(0,10).reverse()

    
    var xbar_label10 = [];
    xbar_value10.forEach((suffix) =>{
        xbar_label10.push("OTU " + suffix)
    });
    console.log("xbar_labels 10")
    console.log(xbar_label10)

    
    // var bar_id_label = filt_id.slice(0,10);
    // console.log(bar_id_label);

    // var xbar_values = filter_data.sample_values;
    // console.log(xbar_values);

    // var filt_chart = filt_valu.slice(0,10);
    // console.log(filt_chart);

        // var pardata = samples.filter(subject => subject.id === sample)[0];
        //console.log(person)

        // hardcode chart to start
        // Create bar chart in correct location
    trace1 = {
                type:"bar",
                x: ybar_value10,
                y: xbar_label10,
                text: xbar_label10,
                orientation: "h",
            };
    data1 = [trace1];
    
    layout1 = {title: "Belly Button Data",
               xaxis:{title: "Samples"},
               yaxis:{title: "IDs"}
            };
    Plotly.newPlot("bar", data1, layout1);


        //Create bubble chart in correct location



        

    // trace2 = {
    //     mode:"markers",
    //     x: filt_valu,
    //     y: bar_id_label,
    //     text: filt_id,
    //     marker: {
    //             size: bar_id_label,
    //             color: filt_id,
    //     },
    //     };
    // data2 = [trace2];

    // layout2 = {title: "Bubble Chart",
    //        xaxis:{title: "IDs"},
    //        yaxis:{title: "Samples"}
    //     };
    // Plotly.newPlot("bubble", data2, layout2);

    });


    



    


};

// Define function that will run on page load
function init() {
    // test buildMetadata with hardcode
    // buildMetadata(947)
    
    // Read json data
    d3.json("././samples.json").then((seldata) => {

        // Parse and filter data to get sample names
        var parse_md = seldata.names;
        console.log("parse_md in init function")
        console.log(parse_md);

        // Add dropdown option for each sample
        var ddmenu = d3.select('#selDataset');
        
        parse_md.forEach((name) => {
            ddmenu.append("option").property("value", name).text(name);
        })
            //parse_md

        

    // Use first sample to build metadata and initial plots - id 941
    buildMetadata(940);

    buildCharts(940);
});

};

function optionChanged(newseldata){

    // Update metadata with newly selected sample
    buildMetadata(newseldata);

    // Update charts with newly selected sample
    buildCharts(newseldata);
};

// Initialize dashboard on page load
init();