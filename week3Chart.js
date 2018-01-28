let week3Chart = document.getElementById('week3Chart').getContext('2d');

let Chart3 = new Chart(week3Chart, {
  type: 'bar',
  data: {
     labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
     datasets: [{
         data: [41, 68, 118, 121],
         label: "Printforce",
         borderColor: "#3e95cd",
         backgroundColor:'#ff4d4d',
         fill: false
       }, {
         data: [24, 22, 27, 35],
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
       text: 'Jobs Despatched W/E 26-01-18'
     }
   }
  })
