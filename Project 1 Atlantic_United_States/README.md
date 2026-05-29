# LifeManager Analytics Dashboard 🎵 🔁 💳

A responsive, full-stack personal management and analytics web application. This project features an end-to-end data engineering pipeline that pulls relational chart data from a local Microsoft SQL Server database, transforms and aggregates it via a Jupyter Notebook processing layer, and feeds live visualization assets into an interactive Flask-driven web front-end.
 
## Application Core Views
The web application is fully modularized and responsive across three target interfaces:
1. **🎵 Music Trends Panel (Data Blue Theme):** Displays real-time chart frequency insights and popularity tracking derived from an active database connection holding over 27,000 corporate streaming records.
2. **🔁 Routine Tracker Workspace (Habit Purple Theme):** Monitors personal analytics consistency, habit tracking logs, and analytical task metrics.
3. **💳 Expense Ledger Management (Financial Teal Theme):** Evaluates asset and resource allocation alongside monthly project ledger spending configurations.


## Key Technical Features
* **Relational Database Engine Integration:** Established robust authentication to local **Microsoft SQL Server Management Studio (SSMS)** via a secure `pyodbc` database driver wrapper.
* **Automated Data Transformation Pipelines:** Handled advanced time-series parsing, data cleaning, and aggregation logic using **Pandas DataFrames** to prepare heavy metrics into clean visualization arrays.
* **Cohesive Aesthetic Identity Coding:** Designed dedicated chromatic styles (Teal, Purple, Blue) across charts and templates to group visual analytics contextually by business application.
* **High-Contrast Fluid Theme Inverter:** Configured a custom **Vanilla JavaScript DOM-manipulation engine** that handles seamless global UI switching between a crisp Light Mode canvas and an elegant dark-theme Night Mode workspace instantly.
* **Full-Stack Backend Routing:** Utilized the **Flask web framework** to build a reliable backend routing mechanism (`/`, `/routine`, `/expenses`), eliminating cache vulnerabilities and enabling continuous structural hot-reloading.
