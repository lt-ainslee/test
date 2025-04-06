// 肺功能分级(GOLD)饼图
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('lungFunctionChart').getContext('2d');
    
    // 模拟数据 - GOLD分级患者分布
    const data = {
        labels: ['GOLD 1级', 'GOLD 2级', 'GOLD 3级', 'GOLD 4级'],
        datasets: [{
            data: [15, 35, 30, 20], // 百分比分布
            backgroundColor: [
                '#4CAF50', // 绿色 - 1级
                '#2196F3', // 蓝色 - 2级
                '#FF9800', // 橙色 - 3级
                '#F44336'  // 红色 - 4级
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, config);
});
