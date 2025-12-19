export const pharmacies = [
  {
    id: 'p1',
    name: 'HealthCare Pharmacy',
    address: '123 Main Street, Downtown',
    city: 'New York',
    contact: '+1 234-567-8900',
    email: 'health@pharmacy.com',
    medicines: [
      {
        id: 'm1',
        name: 'Paracetamol 500mg',
        quantity: 150,
        price: 5.99,
        description: 'For fever and pain relief',
        expiryDate: '2025-12-31',
        available: true,
        pharmacyId: 'p1'
      },
      {
        id: 'm2',
        name: 'Ibuprofen 400mg',
        quantity: 80,
        price: 7.99,
        description: 'For inflammation and pain',
        expiryDate: '2025-11-30',
        available: true,
        pharmacyId: 'p1'
      },
      {
        id: 'm3',
        name: 'Amoxicillin 500mg',
        quantity: 0,
        price: 12.99,
        description: 'Antibiotic',
        expiryDate: '2025-10-31',
        available: false,
        pharmacyId: 'p1'
      }
    ]
  },
  {
    id: 'p2',
    name: 'MediCare Plus',
    address: '456 Oak Avenue, Central',
    city: 'Boston',
    contact: '+1 234-567-8901',
    email: 'care@mediplus.com',
    medicines: [
      {
        id: 'm4',
        name: 'Paracetamol 500mg',
        quantity: 200,
        price: 6.49,
        description: 'For fever and pain relief',
        expiryDate: '2025-12-31',
        available: true,
        pharmacyId: 'p2'
      },
      {
        id: 'm5',
        name: 'Aspirin 325mg',
        quantity: 120,
        price: 4.99,
        description: 'Blood thinner',
        expiryDate: '2025-11-15',
        available: true,
        pharmacyId: 'p2'
      }
    ]
  }
];

export const hospitals = [
  {
    id: 'h1',
    name: 'City General Hospital',
    address: '789 Health Boulevard',
    city: 'New York',
    contact: '+1 555-0123',
    beds: { icu: 8, general: 45, emergency: 12 },
    doctors: [
      {
        id: 'd1',
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiology',
        status: 'available',
        hospitalId: 'h1',
        phone: '+1 555-0001'
      },
      {
        id: 'd2',
        name: 'Dr. Michael Chen',
        specialization: 'Emergency Medicine',
        status: 'busy',
        hospitalId: 'h1',
        phone: '+1 555-0002'
      },
      {
        id: 'd3',
        name: 'Dr. Emily Davis',
        specialization: 'Neurology',
        status: 'on-duty',
        hospitalId: 'h1',
        phone: '+1 555-0003'
      }
    ],
    active: true
  },
  {
    id: 'h2',
    name: 'Boston Medical Center',
    address: '321 Elm Street, West Side',
    city: 'Boston',
    contact: '+1 555-0124',
    beds: { icu: 12, general: 60, emergency: 15 },
    doctors: [
      {
        id: 'd4',
        name: 'Dr. James Wilson',
        specialization: 'Orthopedics',
        status: 'available',
        hospitalId: 'h2',
        phone: '+1 555-0004'
      },
      {
        id: 'd5',
        name: 'Dr. Lisa Anderson',
        specialization: 'Pediatrics',
        status: 'available',
        hospitalId: 'h2',
        phone: '+1 555-0005'
      }
    ],
    active: true
  }
];

export const ambulances = [
  {
    id: 'a1',
    plateNumber: 'AMB-001',
    status: 'available',
    latitude: 40.7128,
    longitude: -74.006,
    hospitalId: 'h1'
  },
  {
    id: 'a2',
    plateNumber: 'AMB-002',
    status: 'on-duty',
    latitude: 40.758,
    longitude: -73.9855,
    hospitalId: 'h1'
  },
  {
    id: 'a3',
    plateNumber: 'AMB-003',
    status: 'available',
    latitude: 42.3601,
    longitude: -71.0589,
    hospitalId: 'h2'
  }
];

export const pharmacists = [
  {
    id: 'ph1',
    name: 'John Smith',
    email: 'john@pharmacy.com',
    pharmacy: pharmacies[0],
    verified: true,
    createdAt: '2024-01-15',
    lastActive: '2024-11-12'
  },
  {
    id: 'ph2',
    name: 'Maria Garcia',
    email: 'maria@medicare.com',
    pharmacy: pharmacies[1],
    verified: true,
    createdAt: '2024-02-20',
    lastActive: '2024-11-11'
  }
];

export const activityLogs = [
  { id: 'l1', type: 'medicine_added', message: 'Added 100 units of Paracetamol 500mg', timestamp: '2024-11-12 14:30', pharmacist: 'John Smith' },
  { id: 'l2', type: 'medicine_removed', message: 'Removed 50 units of Aspirin 325mg', timestamp: '2024-11-12 13:15', pharmacist: 'Maria Garcia' },
  { id: 'l3', type: 'emergency_call', message: 'Emergency call received from Central', timestamp: '2024-11-12 12:45', user: 'System' },
  { id: 'l4', type: 'ambulance_dispatched', message: 'Ambulance AMB-001 dispatched', timestamp: '2024-11-12 12:40', user: 'System' }
];

export const dailyStats = [
  { date: 'Mon', medicines: 45, beds: 12, emergencies: 3 },
  { date: 'Tue', medicines: 52, beds: 15, emergencies: 2 },
  { date: 'Wed', medicines: 48, beds: 10, emergencies: 4 },
  { date: 'Thu', medicines: 61, beds: 18, emergencies: 2 },
  { date: 'Fri', medicines: 55, beds: 22, emergencies: 5 },
  { date: 'Sat', medicines: 42, beds: 8, emergencies: 3 },
  { date: 'Sun', medicines: 38, beds: 14, emergencies: 6 }
];

export const cities = ['New York', 'Boston', 'Los Angeles', 'Chicago', 'Houston'];

export function searchMedicines(medicineName, city) {
  if (!medicineName.trim()) return [];

  const searchTerm = medicineName.toLowerCase();
  const results = [];

  pharmacies.forEach(pharmacy => {
    if (city && pharmacy.city !== city) return;

    pharmacy.medicines.forEach(medicine => {
      if (medicine.name.toLowerCase().includes(searchTerm)) {
        results.push(medicine);
      }
    });
  });

  return results;
}

export function getPharmacyById(id) {
  return pharmacies.find(p => p.id === id);
}

export function getHospitalById(id) {
  return hospitals.find(h => h.id === id);
}
