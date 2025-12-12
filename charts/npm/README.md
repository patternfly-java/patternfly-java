# PatternFly Charts

This package contains a subset of the [PatternFly React Charts](https://www.patternfly.org/charts/about-charts) wrapped as web components.

The package is a prerequisite if you want to use charts in [PatternFly Java](https://patternfly-java.github.io/), but can also be used independently.

## Available charts

The following charts are available:

- `<pfj-chart-donut>` → [`ChartDonut`](https://www.patternfly.org/charts/donut-chart)
- `<pfj-chart-donut-threshold>` → [`ChartDonutThreshold`](https://www.patternfly.org/charts/donut-utilization-chart#donut-utilization-threshold-examples)
- `<pfj-chart-donut-utilization>` → [`ChartDonutUtilization`](https://www.patternfly.org/charts/donut-utilization-chart#donut-utilization-examples)
- `<pfj-chart-bullet>` → [`ChartBullet`](https://www.patternfly.org/charts/bullet-chart)

## Usage

```html
<pfj-chart-donut
        id="chart-donut-0"
        width="300"
        height="300"
        title="Pets"
        sub-title="Count"
></pfj-chart-donut>

<pfj-chart-donut-utilization
        width="300"
        height="300"
        title="60%"
        sub-title="Utilization"
        data='{"x":"Storage","y":60}'
></pfj-chart-donut-utilization>

<pfj-chart-donut-threshold
        aria-desc="Storage capacity"
        aria-title="Donut utilization chart with static threshold example"
        constrain-to-visible-area
        data='[{"x":"Warning at 60%","y":60},{"x":"Danger at 90%","y":90}]'
        width="300"
        height="300"
>
    <pfj-chart-donut-utilization
            id="chart-donut-utilization-0"
            sub-title="of 100 GBps"
            title="0%"
            thresholds='[{"value": 60}, {"value": 90}]'
    ></pfj-chart-donut-utilization>
</pfj-chart-donut-threshold>

<script type="module">
    const cd = document.getElementById('chart-donut-0');
    cd.data = [
        {x: 'Cats', y: 25},
        {x: 'Dogs', y: 55},
        {x: 'Birds', y: 20}
    ];
    cd.labels = ({datum}) => `${datum.x}: ${datum.y}%`;

    const cdu = document.getElementById('chart-donut-utilization-0');
    cdu.data = {x: 'Storage capacity', y: 0};
    setInterval(() => {
        let previous = cdu.data.y;
        let current = (previous + 10) % 100;
        cdu.data = {x: 'Storage capacity', y: current};
        cdu.title = `${current}%`;
        cdu.subTitle = `${current} of 100 GBps`;
    }, 1000);
</script>
```

