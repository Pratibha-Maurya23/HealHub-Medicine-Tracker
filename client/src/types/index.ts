export interface Medicine {
  id: string;
  name: string;
  quantity: number;
  price: number;
  description: string;
  expiryDate: string;
  available: boolean;
  pharmacyId: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  city: string;
  contact: string;
  email: string;
  medicines: Medicine[];
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  status: 'available' | 'busy' | 'on-duty';
  hospitalId: string;
  phone: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  city: string;
  contact: string;
  beds: {
    icu: number;
    general: number;
    emergency: number;
  };
  doctors: Doctor[];
  active: boolean;
}

export interface Ambulance {
  id: string;
  plateNumber: string;
  status: 'available' | 'on-duty' | 'maintenance';
  latitude: number;
  longitude: number;
  hospitalId: string;
}

export interface Pharmacist {
  id: string;
  name: string;
  email: string;
  pharmacy: Pharmacy;
  verified: boolean;
  createdAt: string;
  lastActive: string;
}
