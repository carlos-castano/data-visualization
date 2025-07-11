# World Values Distribution

This project is an interactive data visualization designed around a single, central question: **How are values distributed worldwide?**

It is built following data visualization best practices, where the primary goal is to provide a clear, intuitive answer at first glance, while also offering the depth required for users to explore the nuances of the data on their own.

**[➡️ Live Demo Link](https://carlos-castano.github.io/data-visualization/world-values/)**

## Preview

![Project Screenshot](https://github.com/carlos-castano/data-visualization/blob/main/world-values/donut-chart.png)

## ✨ Features & Design Philosophy

This project's design is guided by two core principles:

1.  **Clarity First: An Intuitive Overview**
   
    The first visualization is a composite chart that provides an immediate and intuitive answer to the main question. It combines:
    *   A minimally interactive **Chart.js donut chart** showing the proportional breakdown of the world population by ideological quadrant.
    *   A nested, interactive **Plotly bar chart** that provides a broad overview of the values for each region.

2.  **Depth on Demand: Avoiding Reductionism**

    A single chart can be reductionist. To counteract this, the second part of the page is a fully interactive **Tableau dashboard**. This element empowers the user to move beyond the summary and explore the data freely, filtering by country and examining the specific scores on the "Traditional-Secular" and "Survival-Self-expression" axes.

## 📊 Data Sources

This project's visualizations are built upon data from two primary, publicly available sources. Proper attribution is given to these organizations for their work in collecting and distributing this valuable data.

**1. World Values Survey (WVS)**
*   **Homepage:** [https://www.worldvaluessurvey.org/wvs.jsp](https://www.worldvaluessurvey.org/wvs.jsp)
*   **Citation:**
    > Inglehart, R., C. Haerpfer, A. Moreno, C. Welzel, K. Kizilova, J. Diez-Medrano, M. Lagos, P. Norris, E. Ponarin & B. Puranen (eds.). 2022. *World Values Survey: All Rounds - Country-Pooled Datafile*. Madrid, Spain & Vienna, Austria: JD Systems Institute & WVSA Secretariat. Dataset Version 3.0.0. [doi:10.14281/18241.17](https://doi.org/10.14281/18241.17)

**2. The World Bank**
*   **Dataset:** [Population, total](https://data.worldbank.org/indicator/SP.POP.TOTL)
*   **Details:** Data compiled from the United Nations Population Division, Eurostat, and national statistical offices. The dataset is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
---

This project is part of a larger collection of data visualization experiments, which can be found in the parent repository: [Data Visualization](https://github.com/carlos-castano/data-visualization).
