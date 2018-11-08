$(document).ready(function(){
  console.log('scripts loaded');

    var foodurl = 'js/food-environments.json';
    var foodEnvironments = '';
    var sugarurl = 'js/total-use-sugar.json';
    var totalSugar = '';
    var sugartimeurl = 'js/sugar-overtime.json';
    var sugarOvertime = '';
    var sugarDeliveriesUrl = 'js/sugar-deliveries.json';
    var sugarDeliveries = '';

    $.ajax({
      type: 'GET',
      url: sugarDeliveriesUrl,
      data: sugarDeliveries,
      async: true,
      dataType: 'json',
      success:function(sugarDeliveries){
        console.log(sugarDeliveries);
        var chart = new Taucharts.Chart({
            data: sugarDeliveries,
            type: 'line',
            x: 'Year',
            y: '1000 Tons',
            color: 'User',
            guide: {
                  x: { min: 1997, max: 2017, nice: false }
              },
              plugins: [
                Taucharts.api.plugins.get('tooltip')({
                  fields: []
                }),//comma
                Taucharts.api.plugins.get('legend')(),
              ]//close plugins
        }).renderTo('#linegraph');
      }//close success

    });//close ajax


    $.ajax({
      type: 'GET',
      url: foodurl,
      data: foodEnvironments,
      async: true,
      dataType: 'json',
      success:function(foodEnvironments){
        console.log(foodEnvironments);
        var chart = new Taucharts.Chart({
                    guide: {
                      x: {label:'Median Household Income, 2015'},  // custom label for X axis
                      y: {label:'Adult obesity rate, 2013'},    // custom label for Y axis
                      padding: {b:40,l:40,t:10,r:10}   // chart paddings
                    },
                    data: foodEnvironments,
                    type: 'scatterplot',
                    x: 'Median Household Income, 2015',
                    y: 'Adult obesity rate, 2013',
                    /*guide: {
                        x: {min: 0, max: 100, nice: false},
                        y: {min: 0, max: 100}
                    },*/
                    color: 'Adult diabetes rate, 2013', // every team will be represented by different color
                    size: 'Median Household Income, 2015',
                    plugins: [
                      Taucharts.api.plugins.get('tooltip')({
                        fields: ['State', 'County', 'Adult obesity rate, 2013', 'Adult diabetes rate, 2013', 'Median Household Income, 2015']
                      }),//comma
                      Taucharts.api.plugins.get('legend')(),
                    ]//close plugins
                });//close TauCharts
                chart.renderTo('#chart1');
      }//close success

    });//close ajax

    $.ajax({
      type: 'GET',
      url: foodurl,
      data: foodEnvironments,
      async: true,
      dataType: 'json',
      success:function(foodEnvironments){
        console.log(foodEnvironments);
        var chart = new Taucharts.Chart({
                    guide: {
                      x: {label:'Population with low access to stores, 2010'},  // custom label for X axis
                      y: {label:'Adult obesity rate, 2013'},    // custom label for Y axis
                      padding: {b:40,l:40,t:10,r:10}   // chart paddings
                    },
                    data: foodEnvironments,
                    type: 'scatterplot',
                    x: 'Population with low access to stores, 2010',
                    y: 'Adult obesity rate, 2013',
                    /*guide: {
                        x: {min: 0, max: 100, nice: false},
                        y: {min: 0, max: 100}
                    },*/
                    color: 'Adult diabetes rate, 2013', // every team will be represented by different color
                    size: 'Median Household Income, 2015',
                    plugins: [
                      Taucharts.api.plugins.get('tooltip')({
                        fields: ['State', 'County', 'Adult obesity rate, 2013', 'Adult diabetes rate, 2013', 'Median Household Income, 2015']
                      }),//comma
                      Taucharts.api.plugins.get('legend')(),
                    ]//close plugins
                });//close TauCharts
                chart.renderTo('#chart2');
      }//close success

});//close ajax

        $('#table').DataTable({
             "ajax":"/js/food-environments.txt",
             "columns": [
               {"data":"State"},
               {"data":"County"},
               {"data":"Adult obesity rate, 2013"},
               {"data":"Number of grocery stores per thousand people, 2014"},
               {"data":"Number of supercenters & club stores per thousand people, 2014"},
               {"data":"Number of convenience stores per thousand people, 2014"},
               {"data":"Fast food restaurants per thousand people, 2014"}
             ], //close columns
             "order": [[ 2, 'desc' ]]
           });//close ajax

});// close wrapper
