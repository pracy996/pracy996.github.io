let week4Chart = document.getElementById('week4Chart').getContext('2d');

let Chart4 = new Chart(week4Chart, {
  type: 'bar',
  data: {
     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
     datasets: [{
         data: [67, 83, 140],
         label: "Printforce",
         borderColor: "#3e95cd",
         backgroundColor:'#ff4d4d',
         fill: false
       }, {
         data: [23, 28, 26],
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
       text: 'Jobs Despatched W/E 31-01-18'
     }
   }
  })
