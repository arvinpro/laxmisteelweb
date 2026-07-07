import { ProductSpec } from '../types/types';

export const PRODUCT_SPECSToCompare: ProductSpec[] = [
  { feature: "Minimum Yield Strength", fe500: "500 MPa", fe500d: "500 MPa" },
  { feature: "Ductility Level (Elongation at Ultimate)", fe500: "Min 12.0%", fe500d: "Min 16.0% (Critical for seismic waves)" },
  { feature: "Earthquake & Seismic Performance", fe500: "Good", fe500d: "Excellent (Specially tailored for Nepal Faultline)" },
  { feature: "Bendability & Re-bendability Radius", fe500: "Standard (4d mandrel)", fe500d: "Superior (3d mandrel - tighter bends without cracking)" },
  { feature: "Recommended Structural Uses", fe500: "General columns, standard slabs", fe500d: "High-Rise towers, bridges, dams, seismic column grids" },
  { feature: "Chemical limits (Carbon + Sulfur + Phos)", fe500: "Max 0.25% Carbon", fe500d: "Max 0.20% Carbon (Meticulously pure for superior bonding)" },
  { feature: "Available Nominal Sizes (mm)", fe500: "8mm – 32mm", fe500d: "8mm – 32mm" }
];
