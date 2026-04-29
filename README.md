# BlassaReviews 🏘️

> **Fix Your City, Together** — A community-driven platform empowering citizens to report and track urban infrastructure issues with complete transparency.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Fastify](https://img.shields.io/badge/Fastify-5.0-000000?logo=fastify)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwindcss)
![Cloudinary](https://img.shields.io/badge/Cloudinary-2.0-3448C5?logo=cloudinary)

---

## 📖 About

BlassaReviews bridges the gap between citizens and city authorities. Inspired by the traditional Moroccan concept — where communities gather, voices are heard, and decisions are made collectively.

**Citizens can:**
- 📝 Report issues (potholes, broken lights, damaged sidewalks, etc.)
- 📸 Upload photos as evidence
- 📍 Pinpoint exact locations on a map
- 🔍 Track status from pending → in progress → resolved

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📝 **Report Issues** | Submit infrastructure problems with title, category, description, and photo |
| 🗺️ **Live Map** | View all reports on an interactive map with markers and popups |
| 🔍 **Filter & Search** | Filter by status and search by title, address, or neighborhood |
| 📊 **Statistics Dashboard** | See total reports and breakdown by status |
| 📸 **Image Upload** | Upload images via Cloudinary |
| 📍 **Geolocation** | Auto-detect current location or manually enter coordinates |
| 📱 **Responsive Design** | Works on all devices |
| 🔔 **Toast Notifications** | Real-time feedback during submission |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS |
| Backend | Fastify, Node.js |
| Database | PostgreSQL |
| Storage | Cloudinary |
| Maps | Custom map components |
| Icons | FontAwesome |

---

## 📁 Project Structure

```
blassareviews/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── NavBar.tsx                  # Navigation
│   ├── footer.tsx                  # Footer
│   ├── About/
│   │   └── page.tsx                # About page
│   ├── ReportAnIssue/
│   │   ├── page.tsx                # Report form page
│   │   ├── FormReport.tsx          # Form component
│   │   └── sendData.ts             # Server action
│   └── ViewReports/
│       ├── page.tsx                # Reports page
│       ├── Reports.tsx             # Main component with map
│       └── ReportsData.ts          # API fetch functions
├── server/
│   ├── server.ts                   # Fastify server
│   └── uploadImageToCloudinary.ts  # Cloudinary upload
├── public/                         # Static assets
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL (v14+)
- Cloudinary account (free)

### Installation

**1. Clone the repo**
```bash
git clone https://github.com/yourusername/blassareviews.git
cd blassareviews
```

**2. Install frontend dependencies**
```bash
npm install
```

**3. Install backend dependencies**
```bash
cd server
npm install
cd ..
```

**4. Create `.env` file in root**
```env
DATABASE=postgresql://username:password@localhost:5432/blassareviews
CLOUD_NAME=your_cloud_name
API_CLOUD_KEY=your_api_key
API_CLOUD_SECRET=your_api_secret
```

**5. Setup database**
```sql
CREATE DATABASE blassareviews_db;

CREATE TABLE blassareviews (
    id           INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    issue_title  TEXT NOT NULL,
    category     INTEGER NOT NULL,
    description  TEXT NOT NULL,
    address      TEXT NOT NULL,
    neighborhood TEXT,
    date         DATE NOT NULL,
    status       TEXT NOT NULL,
    image        TEXT NOT NULL,
    latitude     DOUBLE PRECISION,
    longitude    DOUBLE PRECISION
);
```

**6. Run backend**
```bash
cd server
npm run dev
# Runs on http://localhost:3001
```

**7. Run frontend (new terminal)**
```bash
npm run dev
# Runs on http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reports` | Get all reports |
| GET | `/locations` | Get map locations (id, title, lat, lng) |
| POST | `/reports` | Submit new report with image |

### POST Example
```typescript
const formData = new FormData();
formData.append("data", JSON.stringify(reportData));
formData.append("image", imageFile);

fetch("http://localhost:3001/reports", {
    method: "POST",
    body: formData
});
```

---

## 📊 Database Schema

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key, auto-increments |
| issue_title | VARCHAR(255) | Title of the issue |
| category | INTEGER | 1-8 (pothole, streetlight, etc.) |
| description | TEXT | Detailed description |
| address | VARCHAR(255) | Street address |
| neighborhood | VARCHAR(255) | District/neighborhood (optional) |
| date | DATE | Report date (YYYY-MM-DD) |
| status | VARCHAR(50) | pending / in progress / resolved |
| image | TEXT | Cloudinary image URL |
| latitude | DECIMAL(10,8) | GPS coordinate |
| longitude | DECIMAL(11,8) | GPS coordinate  |

---

### Categories
| ID | Category |
|----|----------|
| 1 | Pothole |
| 2 | Broken Streetlight |
| 3 | Malfunctioning Elevator |
| 4 | Damaged Sidewalk |
| 5 | Broken Water Pipe |
| 6 | Overflowing Trash |
| 7 | Graffiti |
| 8 | Other |

---

## 📧 Contact

Younes Oubellal - younesoubllal@gmail.com

Project Link: [Github](https://github.com/mr-youbella/BlassaReviews)

---

## 🙏 Acknowledgments

- Inspired by Moroccan community values (jema'a)
- Built with ❤️ for better cities

---

*BlassaReviews — Fix Your City, Together* 🏘️
