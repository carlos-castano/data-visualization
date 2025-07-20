# EU27 Climate Change Policies Under Scrutiny

This project is an interactive data visualization designed around a central question: **Do the numbers behind the EU's environmental tax policies really make sense?**

It is built following data visualization best practices, where the primary goal is to provide a clear, intuitive answer at first glance, while also offering the depth required for users to explore the nuances of the data on their own.

**[➡️ Live Demo Link](https://carlos-castano.github.io/data-visualization/EU27-climate-change-policies/)**

## Preview

![Project Screenshot](https://github.com/carlos-castano/data-visualization/blob/main/eu27-climate-change-policies/bubble-chart.png)

## Considerations

> - Since 2023, the EU-27 target for 2030 involves a 29.4% cut in emissions, and the target for 2050 ranges from 68.62% to ∞%.
> - As greenhouse gases vary in their origins and effects, they are all measured in tons of CO₂ equivalents.
> - Throughout this visualization, the term «Energy» is used as energy available from a raw source. Including the end product such as heat or electricity but also its transformation and transport.
> - No data is available for Malta.

## ✨ Features & Design Philosophy

This project's design is guided by a narrative-driven approach, unfolding across three sequential visualizations:

1.  **The Big Picture: Identifying the Source**
    
    The first visualization is a **Doughnut chart** that shows the percentage of emissions by activity group within the EU-27. It immediately highlights that the vast majority of emissions stem from processes related to energy production, setting the stage for the next chart.

2.  **Comparative Analysis: Energy Mix in Context**

    The second visualization is a **stacked horizontal bar chart** that details the energy mix of the top 5 global energy consumers: China, the United States, the EU-27, India, and Russia. This provides crucial context, showing how the EU-27's energy profile compares to other major players.
    *   An interactive button allows the user to switch the view to a detailed breakdown of all EU-27 countries.
    *   Tooltips feature a color-coded shadow (from red to green) to give a quick visual cue of how "green" each economy's energy mix is.

3.  **The Core Issue: Uncovering Tax Imbalances**

    The final and main visualization is an animated **bubble chart** that addresses the central question of the project. It plots each country's low-carbon energy mix against its cumulative emissions-tax balance since 2015.
    *   **Objective:** To reveal whether a country is overpaying or underpaying in environmental taxes relative to its share of EU emissions.
    *   **Animation:** A time-slider control allows the user to observe how these balances have evolved over the years.
    *   **Bubble Size:** The size of each bubble represents a country's voting power in the EU Parliament, offering a layer of political context to the economic data.

## 📊 Data Sources

This project's visualizations are built upon data from multiple primary, publicly available sources. Proper attribution is given to these organizations for their work in collecting and distributing this valuable data.

**1. Pie chart**: 
*   European Commission, Eurostat, *Greenhouse gas emissions by source sector*, Publication Office of the European Union, 18/04/2024 [[link]](https://ec.europa.eu/eurostat/databrowser/product/view/env_air_gge)

**2. Bar chart**: 
*   *Energy Institute - Statistical Review of World Energy (2024) — with major processing by Our World in Data. Primary energy consumption by source, 2023*. [[link]](https://ourworldindata.org/grapher/primary-energy-source-bar)

**3. Bubble chart**:
*   **Environmental taxes**: European Commission, Eurostat, *Environmental taxes by economic activity (NACE Rev. 2)*, Publication Office of the European Union, 15/07/2024 [[link]](https://ec.europa.eu/eurostat/databrowser/view/env_ac_taxind2/default/table)
*   **EU 27 GDP**: European Commission, Eurostat, *GDP and main aggregates- international data cooperation annual data*, Publication Office of the European Union, 17/01/2025 [[link]](https://ec.europa.eu/eurostat/databrowser/view/naida_10_gdp__custom_14892109/default/table)
*   **Energy mix**: *Energy Institute - Statistical Review of World Energy (2024) — with major processing by Our World in Data. Primary energy consumption by source, 2023* [[link]](https://ourworldindata.org/grapher/primary-energy-source-bar)
*   **Greenhouse gas emissions**: *Jones et al. (2024) – with major processing by Our World in Data. Annual greenhouse gas emissions including land use. Jones et al., National contributions to climate change 2024.2.* [[link]](https://ourworldindata.org/co2-and-greenhouse-gas-emissions)
---

This project is part of a larger collection of data visualization experiments, which can be found in the parent repository: [Data Visualization](https://github.com/carlos-castano/data-visualization).