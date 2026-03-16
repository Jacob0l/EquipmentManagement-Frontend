# Equipment Management Frontend

React application for visualizing equipment calibration activity and costs in a dashbaord and equipment management.

The dashboard allows users to explore calibration data across a selected time range and view analytics such as cost breakdowns, vendor activity, and calibration counts.

The frontend communicates with the Equipment Management API.

---

## Tech Stack

* React
* TypeScript
* Vite
* Recharts
* Fetch API
* Custom CSS

No UI component libraries were used; all styling is custom CSS.

---

## Features

### Dashboard Analytics

The dashboard provides several data visualizations based on a selected date range.

#### Calibration Cost Breakdown

A **pie chart** shows how calibration costs are distributed across equipment categories:

* Electrical
* Hydraulic
* Mechanical
* Pneumatic

Each category displays:

* Total cost
* Percentage of overall calibration spend

Clicking a category reveals additional details:

* Companies performing calibrations
* Number of calibrations performed
* Total paid to each company

---

### Calibration Activity

A **stacked bar chart** displays the number of calibrations completed within the selected time range.

This allows users to quickly identify calibration trends over time.

Charts are implemented using **Recharts**.

---

### Equipment Table

The equipment table supports:

* Server-side pagination
* Column sorting
* Category filtering
* Embedded CRUD operations

Pagination is handled by the backend API to ensure efficient queries.

Example page navigation:

```
1 ... 4 5 6 ... 10
```

---

## Project Structure

The project was created using **Vite** and follows a modular folder structure.

```
src
│
├── components
├── pages
├── services
├── layouts
├── types
├── utils
└── styles
```

Responsibilities:

* **components** – reusable UI elements
* **pages** – route-level views
* **services** – API communication
* **layouts** – application layout structure
* **types** – TypeScript interfaces
* **utils** – helper utilities
* **styles** – CSS styling

---

## Authentication (Planned)

Upcoming features:

* Login page
* JWT authentication
* Role-based UI access
* Protected routes

Roles will control access to certain operations such as equipment management.

---

## Roadmap

Upcoming improvements:

* Implement authentication
* Add protected routes
* Improve dashboard analytics
* CI/CD pipeline with GitHub Actions
* Deploy frontend to Azure Static Web Apps

---

## Running the Frontend

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

The application expects the backend API to be running locally.

---

## Project Purpose

This project was built to demonstrate:

* Modern React development using TypeScript
* Interactive data visualization
* Server-driven UI data
* Integration with a .NET Web API
* Full-stack deployment workflows
