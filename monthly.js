let monthChart = document.getElementById('monthChart').getContext('2d');

let Chart4 = new Chart(monthChart, {
  type: 'bar',
  data: {
     labels: ["Week 1", "Week 2", "Week 3", "Week 4",],
     datasets: [{
         data: [198, 310, 348],
         label: "Printforce",
         borderColor: "#3e95cd",
         backgroundColor:'#ff4d4d',
         fill: false
       }, {
         data: [58, 106, 108],
         label: "Wee/Hero",
         borderColor: "#8e5ea2",
         backgroundColor:'#3366ff',
         fill: false
       },
       {
         data: [350, 1835],
         label: "Stand Books",
         borderColor: "#8e5ea2",
         backgroundColor:'#ffff4d',
         fill: false
       },
       {
         data: [60, 2400],
         label: "Prem Books",
         borderColor: "#8e5ea2",
         backgroundColor:'#00e600',
         fill: false
       }
     ]
   },
   options: {
     title: {
       display: true,
       text: 'Jobs Despatched January 2018'
     }
   }
  })
