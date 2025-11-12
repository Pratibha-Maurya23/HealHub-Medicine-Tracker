# Medicine & Healthcare Availability Tracker

A comprehensive three-panel healthcare platform built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features Overview

### Three Main Panels

1. **User Panel** - Public patients interface for finding medicines, hospitals, doctors, and emergency services
2. **Pharmacist Panel** - Medicine inventory management and hospital data overview
3. **Admin Panel** - System monitoring, pharmacist management, and activity logs

## Project Structure

```
src/
├── components/
│   └── (Shared components if needed)
├── layouts/
│   ├── UserLayout.tsx          # User panel layout with navbar
│   ├── PharmacistLayout.tsx      # Pharmacist sidebar layout
│   └── AdminLayout.tsx           # Admin sidebar layout
├── pages/
│   ├── user/
│   │   ├── Home.tsx             # Hero section & feature overview
│   │   ├── SearchMedicine.tsx    # Medicine search interface
│   │   ├── Hospitals.tsx         # Hospital beds & doctor availability
│   │   ├── Emergency.tsx         # Emergency services & ambulances
│   │   ├── Contact.tsx           # Contact form & support info
│   │   └── Login.tsx             # User authentication
│   ├── pharmacist/
│   │   ├── Dashboard.tsx         # Stats & activity charts
│   │   ├── MedicineManagement.tsx # Add/edit/delete medicines
│   │   └── Overview.tsx          # Hospital data overview
│   └── admin/
│       ├── Dashboard.tsx         # System overview & statistics
│       ├── Pharmacists.tsx       # Manage pharmacists
│       ├── ActivityLogs.tsx      # View system activity
│       └── Hospitals.tsx         # Hospital & ambulance tracking
├── data/
│   └── dummyData.ts             # All mock data & search functions
├── types/
│   └── index.ts                 # TypeScript interfaces
├── App.tsx                      # React Router setup
├── index.css                    # Tailwind & animations
└── main.tsx                     # React entry point
```

## Routes

### User Routes
- `/user` - Home page
- `/user/search` - Medicine search
- `/user/hospitals` - Hospital & doctor availability
- `/user/emergency` - Emergency services
- `/user/contact` - Contact form
- `/user/login` - Authentication

### Pharmacist Routes
- `/pharmacist` - Dashboard
- `/pharmacist/medicines` - Medicine management
- `/pharmacist/overview` - Hospital overview

### Admin Routes
- `/admin` - Dashboard
- `/admin/pharmacists` - Pharmacist management
- `/admin/logs` - Activity logs
- `/admin/hospitals` - Hospital tracking

## Key Features

### User Panel
- Real-time medicine search across pharmacies
- Hospital bed availability status (ICU, General, Emergency)
- Doctor availability by specialization
- Emergency service integration with ambulance tracking
- Contact and support information

### Pharmacist Panel
- Dashboard with key metrics (total medicines, low stock alerts)
- Medicine inventory management (add/edit/delete)
- Daily medicine update charts
- Hospital data overview
- Low stock alerts

### Admin Panel
- System statistics and metrics
- Daily activity tracking
- Pharmacist management and verification
- Comprehensive activity logs
- Hospital and ambulance status management

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Router v6** - Client-side routing
- **Recharts** - Data visualization charts
- **Lucide React** - Icon library

## Dummy Data

The application includes comprehensive mock data:
- 2 Pharmacies with medicines
- 2 Hospitals with doctors and bed availability
- 3 Ambulances with status tracking
- 2 Pharmacists with verification status
- Activity logs and daily statistics

## Animations

- Page transitions with fade-in effects
- Staggered card animations
- Smooth hover states
- Sidebar collapse animations
- Chart animations on load

## Color Palette

- **Primary**: Teal (#14b8a6) - Healthcare/wellness
- **Secondary**: Blue - Professional/trust
- **Success**: Green - Available/active
- **Warning**: Orange - Caution
- **Error**: Red - Emergency/danger
- **Neutral**: Gray - Text and backgrounds

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Navigation

Access the different panels:
- User Panel: `http://localhost:5173/user`
- Pharmacist Panel: `http://localhost:5173/pharmacist`
- Admin Panel: `http://localhost:5173/admin`

## Future Enhancements

- Real-time database integration with Supabase
- User authentication system
- Push notifications for low stock alerts
- Google Maps integration for real location tracking
- SMS and email notifications
- Analytics dashboard
- Dark mode toggle
- Multi-language support
- Mobile app version

## Code Organization

- Each page is a self-contained component
- Layouts handle navigation and structure
- Data is centralized in dummyData.ts
- Types are defined in types/index.ts
- All styling uses Tailwind CSS
- Animations use Framer Motion

## Performance

- Lazy loading of routes with React Router
- Optimized chart rendering with Recharts
- Efficient re-renders with React hooks
- CSS animations for smooth transitions
- Gzipped bundle size: ~209KB
