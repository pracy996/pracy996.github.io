
let myChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(myChart, {
  type: 'bar',
  data: {
     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
     datasets: [{
         data: [13, 24, 61, 64, 36],
         label: "Printforce",
         borderColor: "#3e95cd",
         backgroundColor:'#ff4d4d',
         fill: false
       }, {
         data: [6, 4, 12, 11, 25],
         label: "Wee/Hero",
         borderColor: "#8e5ea2",
         backgroundColor:'#3366ff',
         fill: false
       }
     ]
   },
   options: {
     title: {
       display: true,
       text: 'Jobs Despatched W/E 12-01-18'
     }
   }
  })
