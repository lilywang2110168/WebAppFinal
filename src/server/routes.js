/* Copyright G. Hemingway @2017 - All rights reserved */
"use strict";

let _       = require('underscore');

var spawn = require('child_process').spawn,
    py    = spawn('python', ['TestPySpark.py']),
    data = [1,2,3,4,5,6,7,8,9],
    dataString = '';

py.stdout.on('data', function(data){
    dataString += data.toString();
});
py.stdout.on('end', function(){
    console.log("The sum of the integers is:", dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();

module.exports = (app) => {
    //var spawn = require('child-process-close').spawn ,
        //py = spawn('python', ['testPySpark.py']);
    //sends back the products that belong to this brand
    app.get('/v1/brand/:brandname', function(req, res) {
        let data=[{
            id:12345,
            name: "ipadMini",
            image: "https://cdn.pastemagazine.com/www/articles/iPad%20Air.jpg",
            description: "The iPad is a 9.7 inch touch screen tablet PC made by Apple."},
            {
                id:12346,
                image:"https://d3nevzfk7ii3be.cloudfront.net/igi/Fjh4QLohID2A5xd4.standard",
                name: "Macbook Pro",
                description: "MacBook Pro is faster and more powerful than before, yet remarkably thin and light. "},
        ];
        res.status(200).send(data);
    });


    app.get('/v1/product/:productID', function(req, res) {
        let data={
            id:12347,
            name: "Macbook Air",
            description: "The MacBook Air is a line of Macintosh subnotebook computers developed and manufactured by Apple Inc.",
            image:"https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKAIR/MACBOOKAIR?wid=500&hei=298&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=lA5lr0"
        };
        res.status(200).send(data);

    });


            //sends back analytics
            app.get('/v1/analytics/:productID', function(req, res) {
                var PythonShell = require('python-shell');
                let data={
                id:123,
                name: 'Apple 13" MacBook Pro, Retina Display',
                features:['screen size', "word processing", 'size',"performance", 'price'],
                featureScores:[4.5, 4.14, 4.3, 4.3, 4.2, 4.2],
                featureSummaries: ["This computer is a wonderful laptop computer with a nice screen size",
                    "I would highly recommend this as a gaming, web surfing or word processing computer",
                    "Some way to see a larger letter size would be useful, (or optional lens to put in front of it)",
                    "This shows in the magnificent performance both in office applications and 3D gaming",
                    "Pay a few dollars more for a quality product (Mailbug) and far more useful",
                    "The new lower price and the free double RAM really make this hard to pass up"],
                graph:"This is a demographics graph",
                description:"Just when you thought your MacBook Pro was state of the art, Apple introduces the MF839LL/A 13\" MacBook Pro with new advanced processing power and graphics. New connectivity capabilities potentially speed large file transfers beyond any current connection. All MacBook Pro models are state-of-the-art. This new one takes it out to another edge. New Thunderbolt technology lets you connect high-performance peripherals and high-resolution displays to one port - with data transfer rates up to 10 Gbps.",
                image:"https://crdms.images.consumerreports.org/prod/products/cr-legacy/production/products/testedmodel/profile/cr/jpg/598/374087-laptopcomputers-apple-macbookpro13inchwithretinadisplaymf839lla.jpg",
                percentFemale:0.4,

                coordinates:[ {"lat": 17.189877, "lng": -88.49765},
                    {"lat": 38.24935809999999, "lng": -122.0399663},
                    {"lat": 41.2033216, "lng": -77.1945247},
                    {"lat": 39.1031182, "lng": -84.5120196},
                    {"lat": 40.0583238, "lng": -74.4056612},
                    {"lat": 40.789142, "lng": -73.13496099999999},
                    {"lat": -34.6036844, "lng": -58.3815591},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 35.7595731, "lng": -79.01929969999999},
                    {"lat": 34.7698021, "lng": -84.9702228},
                    {"lat": 37.09024, "lng": -95.712891},
                    {"lat": 36.1699412, "lng": -115.1398296},
                    {"lat": 39.3209801, "lng": -111.0937311},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 34.0522342, "lng": -118.2436849},
                    {"lat": 55.378051, "lng": -3.435973},
                    {"lat": 37.5482697, "lng": -121.9885719},
                    {"lat": 36.778261, "lng": -119.4179324},
                    {"lat": 32.7301294, "lng": -97.3603565},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 45.36567609999999, "lng": -122.6123141},
                    {"lat": 39.011902, "lng": -98.4842465},
                    {"lat": 41.49932, "lng": -81.6943605},
                    {"lat": 36.778261, "lng": -119.4179324},
                    {"lat": 36.778261, "lng": -119.4179324},
                    {"lat": 37.09024, "lng": -95.712891},
                    {"lat": 33.0185039, "lng": -80.17564809999999},
                    {"lat": 41.6032207, "lng": -73.087749},
                    {"lat": 40.1545535, "lng": -75.22156509999999},
                    {"lat": 40.0583238, "lng": -74.4056612},
                    {"lat": 37.09024, "lng": -95.712891},
                    {"lat": 36.1539816, "lng": -95.99277500000001},
                    {"lat": 36.9800563, "lng": -85.61219059999999},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 33.3061605, "lng": -111.8412502},
                    {"lat": 29.7604267, "lng": -95.3698028},
                    {"lat": 25.0479835, "lng": -77.355413},
                    {"lat": 5.967518000000001, "lng": -62.53556099999999},
                    {"lat": 32.3546679, "lng": -89.3985283},
                    {"lat": 26.640628, "lng": -81.8723084},
                    {"lat": 32.5093109, "lng": -92.1193012},
                    {"lat": 40.336419, "lng": -74.43304739999999},
                    {"lat": 47.49061630000001, "lng": -117.5854813},
                    {"lat": 44.7893446, "lng": -93.60183889999999},
                    {"lat": 47.30732279999999, "lng": -122.2284532},
                    {"lat": 44.3148443, "lng": -85.60236429999999},
                    {"lat": 27.8536365, "lng": -82.382593},
                    {"lat": 41.8397865, "lng": -87.95355339999999},
                    {"lat": 6.42375, "lng": -66.58973},
                    {"lat": 36.0726354, "lng": -79.7919754},
                    {"lat": 41.6687897, "lng": -70.29624079999999},
                    {"lat": 40.0583238, "lng": -74.4056612},
                    {"lat": 39.0997265, "lng": -94.5785667},
                    {"lat": 33.9022367, "lng": -118.081733},
                    {"lat": 30.267153, "lng": -97.7430608},
                    {"lat": 36.1699412, "lng": -115.1398296},
                    {"lat": 38.7046829, "lng": -90.68144869999999},
                    {"lat": 37.3822732, "lng": -89.6662063},
                    {"lat": 35.7564719, "lng": -83.9704593},
                    {"lat": 32.072176, "lng": 34.808871},
                    {"lat": 40.7127837, "lng": -74.0059413},
                    {"lat": 45.5228939, "lng": -122.989827},
                    {"lat": 40.4172871, "lng": -82.90712300000001},
                    {"lat": 36.4072485, "lng": -105.5730665},
                    {"lat": 40.7127837, "lng": -74.0059413},
                    {"lat": 43.9969291, "lng": -85.85957979999999},
                    {"lat": 39.9306677, "lng": -75.32018780000001},
                    {"lat": 37.9642529, "lng": -91.8318334},
                    {"lat": 33.672995, "lng": -117.8408722},
                    {"lat": 30.267153, "lng": -97.7430608},
                    {"lat": 43.9695148, "lng": -99.9018131},
                    {"lat": 29.6516344, "lng": -82.32482619999999},
                    {"lat": 37.7749295, "lng": -122.4194155},
                    {"lat": 32.715738, "lng": -117.1610838},
                    {"lat": 36.68440289999999, "lng": -121.802173},
                    {"lat": 42.3600825, "lng": -71.0588801},
                    {"lat": 37.09024, "lng": -95.712891},
                    {"lat": 42.670782, "lng": -83.0329934},
                    {"lat": 10.691803, "lng": -61.222503},
                    {"lat": 34.5203411, "lng": -106.241127},
                    {"lat": 41.079273, "lng": -85.1393513},
                    {"lat": 43.1938516, "lng": -71.5723953},
                    {"lat": 32.7766642, "lng": -96.79698789999999},
                    {"lat": 33.5206608, "lng": -86.80248999999999},
                    {"lat": 35.4675602, "lng": -97.5164276},
                    {"lat": 33.7489954, "lng": -84.3879824},
                    {"lat": 40.7684331, "lng": -73.5251253},
                    {"lat": 42.2779809, "lng": -88.861766},
                    {"lat": 36.778261, "lng": -119.4179324},
                    {"lat": 43.8231096, "lng": -111.7924237},
                    {"lat": 40.7127837, "lng": -74.0059413},
                    {"lat": 33.9533487, "lng": -117.3961564},
                    {"lat": 33.7514966, "lng": -84.7477136},
                    {"lat": 28.5383355, "lng": -81.3792365},
                    {"lat": 28.5552719, "lng": -82.3878709},
                    {"lat": 41.3775987, "lng": -71.82728709999999},
                    {"lat": 40.7127837, "lng": -74.0059413},
                    {"lat": 6.42375, "lng": -66.58973},
                    {"lat": 40.789142, "lng": -73.13496099999999},
                    {"lat": 47.7510741, "lng": -120.7401386},
                    {"lat": 37.7749295, "lng": -122.4194155},
                    {"lat": 32.715738, "lng": -117.1610838},
                    {"lat": 6.42375, "lng": -66.58973},
                    {"lat": 41.5800945, "lng": -71.4774291},
                    {"lat": 34.7659145, "lng": -84.7699385},
                    {"lat": 32.0835407, "lng": -81.09983419999999},
                    {"lat": 37.3541079, "lng": -121.9552356},
                    {"lat": 37.8271784, "lng": -122.2913078},
                    {"lat": 40.0583238, "lng": -74.4056612},
                    {"lat": 43.16103, "lng": -77.6109219},
                    {"lat": 39.0457549, "lng": -76.64127119999999},
                    {"lat": 29.7604267, "lng": -95.3698028},
                    {"lat": 18.735693, "lng": -70.162651},
                    {"lat": 38.5950532, "lng": -90.54623389999999},
                    {"lat": -1.831239, "lng": -78.18340599999999},
                    {"lat": 37.385672, "lng": -118.178864},
                    {"lat": 33.7489954, "lng": -84.3879824},
                    {"lat": 39.5500507, "lng": -105.7820674},
                    {"lat": 28.5999998, "lng": -81.33923519999999},
                    {"lat": 48.1919889, "lng": -114.3168131},
                    {"lat": 43.0730517, "lng": -89.4012302},
                    {"lat": 28.4103506, "lng": -80.61881559999999},
                    {"lat": 37.63909719999999, "lng": -120.9968782},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 42.4072107, "lng": -71.3824374},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 36.778261, "lng": -119.4179324},
                    {"lat": 41.2306979, "lng": -73.064036},
                    {"lat": 39.755927, "lng": -77.57776919999999},
                    {"lat": 39.2037144, "lng": -76.86104619999999},
                    {"lat": 56.130366, "lng": -106.346771},
                    {"lat": 37.09024, "lng": -95.712891},
                    {"lat": 31.9685988, "lng": -99.9018131},
                    {"lat": 29.7604267, "lng": -95.3698028},
                    {"lat": 51.5073509, "lng": -0.1277583},
                    {"lat": 10.1579312, "lng": -67.9972104},
                    {"lat": 47.6739881, "lng": -122.121512},
                    {"lat": 40.7263542, "lng": -73.9865533},
                    {"lat": 37.09024, "lng": -95.712891},
                    {"lat": 34.1083449, "lng": -117.2897652},
                    {"lat": 34.19495819999999, "lng": -118.3518845},
                    {"lat": 37.5296593, "lng": -122.0402399},
                    {"lat": 39.9205411, "lng": -105.0866504},
                    {"lat": 26.3683064, "lng": -80.1289321},
                    {"lat": 38.2526647, "lng": -85.7584557},
                    {"lat": 39.1156615, "lng": -77.56360149999999},
                    {"lat": 44.3148443, "lng": -85.60236429999999},
                    {"lat": 35.26660270000001, "lng": -78.03752800000001},
                    {"lat": 42.4436478, "lng": -82.90686029999999},
                    {"lat": 46.3043015, "lng": -119.3614092},
                    {"lat": 41.6687897, "lng": -70.29624079999999},
                    {"lat": 40.0583238, "lng": -74.4056612},
                    {"lat": 33.4483771, "lng": -112.0740373},
                    {"lat": -23.5505199, "lng": -46.63330939999999},
                    {"lat": 39.7570466, "lng": -76.8152533},
                    {"lat": 28.2336196, "lng": -82.18119469999999},
                    {"lat": 41.8781136, "lng": -87.6297982},
                    {"lat": 43.1303407, "lng": -77.475551},
                    {"lat": 33.4483771, "lng": -112.0740373},
                    {"lat": 27.6648274, "lng": -81.5157535},
                    {"lat": 43.653226, "lng": -79.3831843},
                    {"lat": 37.9642529, "lng": -91.8318334},
                    {"lat": 56.130366, "lng": -106.346771},
                    {"lat": 29.5074538, "lng": -95.0949303},
                    {"lat": 36.6002378, "lng": -121.8946761},
                    {"lat": 30.3321838, "lng": -81.65565099999999},
                    {"lat": 13.909444, "lng": -60.978893},
                    {"lat": 34.0928092, "lng": -118.3286614},
                    {"lat": 31.9685988, "lng": -99.9018131},
                    {"lat": 33.1958696, "lng": -117.3794834},
                    {"lat": 37.7249296, "lng": -122.1560768},
                    {"lat": 18.109581, "lng": -77.297508},
                    {"lat": 35.2270869, "lng": -80.8431267},
                    {"lat": 30.3960318, "lng": -88.88530779999999},
                    {"lat": 32.2217429, "lng": -110.926479},
                    {"lat": 43.8041334, "lng": -120.5542012},
                    {"lat": 44.0682019, "lng": -114.7420408},
                    {"lat": 10.3757217, "lng": -61.23355919999999},
                    {"lat": 33.2000368, "lng": -117.2425355},
                    {"lat": 39.0558235, "lng": -95.68901849999999},
                    {"lat": 38.0171441, "lng": -122.2885808},
                    {"lat": 42.3159098, "lng": -75.6385205},
                    {"lat": 40.7127837, "lng": -74.0059413},
                    {"lat": 40.7127837, "lng": -74.0059413},
                    {"lat": 37.7749295, "lng": -122.4194155},
                    {"lat": 38.2526647, "lng": -85.7584557},
                    {"lat": 34.73599, "lng": -82.32402440000001},
                    {"lat": 40.0992294, "lng": -83.1140771},
                    {"lat": 40.6936488, "lng": -89.5889864},
                    {"lat": 38.4087993, "lng": -121.3716178},
                    {"lat": 18.735693, "lng": -70.162651}
                ],
                reviewerID:['12342341234',
                    '123412341qwer234',
                    'asfdasdfasdf',
                    'asfasdfasdfasdf',
                    'adfasdfasdf']
            };
        res.status(200).send(data);

    });


    //sends back features of a category
    app.get('/v1/category/:category', function(req, res) {
        let data=['screen resolution', "word processing", 'price',"customer service", 'light weight'];
        res.status(200).send(data);
    });



    //sends back products that rank from highest to lowest
    app.get('/v1/feature/:features', function(req, res) {
        let data=[{
            id:"0000031852",
            name: "iPad",
            image: "https://cdn.pastemagazine.com/www/articles/iPad%20Air.jpg",

            description: "The iPad is a 9.7 inch touch screen tablet PC made by Apple."},
            {
                id:"0000031852",
                name: "Macbook Pro",
                image:"https://d3nevzfk7ii3be.cloudfront.net/igi/Fjh4QLohID2A5xd4.standard",
                description: "MacBook Pro is faster and more powerful than before, yet remarkably thin and light."},
        ];
        res.status(200).send(data);
    });
};