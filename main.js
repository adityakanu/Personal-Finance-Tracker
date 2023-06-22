const navItems = document.querySelectorAll('li');



navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});


// chart 0
var xArray1 = ["Completed", "Pending"];
var yArray1 = [55, 45];

var layout1 = {title:"Training Status"};

var data1 = [{labels:xArray1, values:yArray1, type:"pie"}];

Plotly.newPlot("chart-0", data1, layout1);

// // chart 1
// var xArray1 = ["English", "Science", "GK", "Aptitude", "Mathematics"];
// var yArray1 = [55, 49, 44, 24, 15];

// var layout1 = {title:"Subjet Analysis"};

// var data1 = [{labels:xArray1, values:yArray1, type:"pie"}];

// Plotly.newPlot("chart-1", data1, layout1);

// // chart 2

// var xArray2 = ["English", "Science", "GK", "Aptitude", "Mathematics"];
// var yArray2 = [55, 49, 44, 24, 15];

// var data2 = [{
//   x: xArray2,
//   y: yArray2,
//   type: "bar"  }];
// var layout2 = {title:"Subject Score"};

// Plotly.newPlot("chart-2", data2, layout2);




// chart 3

var xArray4 = [50,60,70,80,90,100,110,120,130,140,150];
var yArray4 = [7,8,8,9,9,9,10,11,14,14,15];

// Define Data
var data4 = [{
  x: xArray4,
  y: yArray4,
  mode:"markers",
  type:"scatter"
}];

// Define Layout
var layout4 = {
  xaxis: {range: [40, 160], title: "Training Submissions"},
  yaxis: {range: [5, 16], title: "Trainings"},
  title: "Daily Progress"
};

Plotly.newPlot("chart-4", data4, layout4);

const navItem = document.querySelectorAll('li');



navItem.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItem.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});