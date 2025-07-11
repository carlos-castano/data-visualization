const ctx = document.getElementById('donutChart');

const populations = {
        'Conservative': '1,341,992,051',
        'Moderate Conservative': '1,409,274,229',
        'Moderate Liberal': '2,104,880,130',
        'Liberal': '401,126,409'
    };

const externalTooltipHandler = (context) => {
    const {chart, tooltip} = context;
    const tooltipEl = document.getElementById('custom-tooltip');

    if (tooltip.opacity === 0) {
        tooltipEl.style.display = 'none';
        return;
    }

    const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';

    const dataPoint = tooltip.dataPoints[0];
    const label = dataPoint.label;
    const value = dataPoint.raw;
    const backgroundColor = dataPoint.dataset.backgroundColor[dataPoint.dataIndex];
    const population = populations[label];

    tooltipEl.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <div style="width: 14px; height: 14px; background:${backgroundColor}; border-radius: 2px;"></div>
            <strong style="font-size: 18px;">${value}%</strong>
        </div>
        <div style="font-size: 16px;">👤 ${population}</div>
    `;

    tooltipEl.style.display = 'block';
};

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: Object.keys(populations),
        datasets: [{
            data: [25.59, 26.87, 40.13, 7.65],
            backgroundColor: ['#3498db', '#60a7d7', '#de8378', '#e74c3c'],
            borderColor: '#1a1a1a',
            borderWidth: 3,
            hoverOffset: 5,
            cutout: '90%'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: false,
                external: externalTooltipHandler
            }
        }
    }
});