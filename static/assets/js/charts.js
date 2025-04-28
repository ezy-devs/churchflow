const incomeCtx = document.getElementById('incomeChart').getContext('2d');

      const incomeChart = new Chart(incomeCtx, {
        type: 'doughnut',
        data: {
          labels: ['Tithes', 'Offerings', 'Donations', 'Other'],
          datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'bottom'
            },
            centerText: true,
            tooltip: {
              enabled: true
            }
          },
          cutout: '70%'
        }
      });

      // Add text at the center of the chart
      Chart.register({
        id: 'centerText',
        beforeDraw(chart) {
          const { width } = chart;
          const { height } = chart;
          const ctx = chart.ctx;
          ctx.restore();
          const fontSize = (height / 200).toFixed(2);
          ctx.font = `${fontSize}em sans-serif`;
          ctx.textBaseline = 'middle';
          const text = 'Income';
          const textX = Math.round((width - ctx.measureText(text).width) / 2);
          const textY = height / 2.5;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      });

      
// Attendance overview chart

const ctx = document.getElementById('attendanceChart').getContext('2d');

const attendanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Sunday Service',
                data: [120, 150, 130, 160],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                tension: 0.4
            },
            {
                label: 'Midweek Service',
                data: [80, 90, 85, 100],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            centerText: false // Disable the centerText plugin for this chart
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Weeks'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Attendance Count'
                },
                beginAtZero: true
            }
        }
    }
});
