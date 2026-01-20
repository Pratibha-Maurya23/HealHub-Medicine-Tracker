# 💊 Medicine & Healthcare Availability Tracker

A full-featured web application designed to help users track **medicine availability**, **hospital bed & doctor status**, and **emergency services** (like nearby ambulances and hospitals).  
It includes separate panels for **Users** and **Pharmacists**, to manage and monitor healthcare resources efficiently.

---

## 🚀 Features

### 🏥 User Panel
- Search for medicines by name or location.  
- Check real-time hospital bed availability (ICU, General, Emergency).  
- View doctor availability and their specialization.  
- Locate nearby ambulances and hospitals on an interactive map.  
- Emergency quick-action buttons: **“Call Ambulance”** and **“Navigate to Nearest Hospital”**.  
- Responsive and accessible design for mobile and desktop.

### 💊 Pharmacist Panel
- Secure login and registration for pharmacists.  
- Add, edit, or delete medicines with details (price, stock, expiry).  
- Real-time inventory management dashboard.  
- View analytics: total medicines, low-stock alerts, daily updates.  
- Read-only hospital bed/doctor status for quick reference.  

---

## 🧩 Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend** | React.js, Tailwind CSS, Framer Motion, Lucide-react Icons |
| **Routing** | React Router v6 |
| **State Management** | React Context / useState |
| **Visualization** | Chart.js / Recharts |
| **Maps (Simulation)** | Google Maps API / Static Map |
| **Deployment (Future)** | AWS / Netlify / Vercel |

---

## 📁 Folder Structure

```
/src
├── assets/ # Images, icons
├── components/ # Reusable components (Navbar, Footer, Cards)
├── layouts/ # Page layouts for Admin, Pharmacist, User
├── pages/
│ ├── User/
│ │ ├── Home.jsx
│ │ ├── SearchMedicine.jsx
│ │ ├── HospitalAvailability.jsx
│ │ ├── Emergency.jsx
│ │ └── Contact.jsx
│ ├── Pharmacist/
│ │ ├── Dashboard.jsx
│ │ ├── ManageMedicine.jsx
│ │ └── Login.jsx
│ └── Auth/
│ ├── Login.jsx
│ └── Signup.jsx
├── utils/
│ └── axiosConfig.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```
git clone https://github.com/Pratibha-Maurya23/HealHub-Medicine-Tracker.git
cd HealHub-Medicine-Tracker.
npm install
npm run dev
http://localhost:5173/

```

## 🧠 Future Enhancements

- ✅ **Real-time ambulance & hospital data integration**  
- ✅ **Authentication & Role-based Access Control (JWT)**  
- ✅ **Admin notifications and alert system**  
- ✅ **Cloud-based database integration (MongoDB Atlas / AWS DynamoDB)**  
- ✅ **AI-powered prediction of medicine shortage in localities**  
- ✅ **Integration with government health APIs**

---

## 🎨 UI/UX Design Goals

- 🎨 Modern healthcare-friendly UI (**blue, teal, and white** tones)  
- 🧭 Intuitive dashboards for pharmacists and admins  
- 📱 Mobile-first responsive layouts  
- 🌈 Smooth animations using **Framer Motion**  
- ♿ Accessibility-focused design (**WCAG friendly**)

---

## 👩‍💻 Contributors

| Role | Name |
|------|------|
| **Project Lead / Backend Developer** | Pratibha Maurya |
| **Frontend Developer** | Mohd Sami |
| **Ideation** | Mohd Aman  |

---

## 💬 Contact

📧 **Email:** pratibhacse20@gmail.com 
 
---

> 🩺💻 *“Empowering healthcare with technology — one click at a time.”*

---

