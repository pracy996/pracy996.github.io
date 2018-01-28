let week2Chart = document.getElementById('week2Chart').getContext('2d');

let Chart2 = new Chart(week2Chart, {
  type: 'bar',
  data: {
     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
     datasets: [{
         data: [27, 39, 87, 121, 36],
         label: "Printforce",
         borderColor: "#3e95cd",
         backgroundColor:'#ff4d4d',
         fill: false
       }, {
         data: [62, 8, 24, 2, 10],
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
       text: 'Jobs Despatched W/E 19-01-18'
     }
   }
  })
