'use client';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';

const Map = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false });

export default function MapSection({ lat, lng, label }: { lat: number; lng: number; label: string }) {
  const center = useMemo(() => ({ lat, lng }), [lat, lng]);
  return (
    <div className="overflow-hidden rounded-2xl border">
      <Map center={center} zoom={14} style={{ height: 320 }} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        <Marker position={center}>
          <Popup>{label}</Popup>
        </Marker>
      </Map>
    </div>
  );
}
