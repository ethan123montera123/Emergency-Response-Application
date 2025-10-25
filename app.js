// Example: Earthquake API Fetch + PWA Setup
const quakeAPI = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

async function fetchEarthquakes() {
    const res = await fetch(quakeAPI);
    const data = await res.json();
    const latest = data.features.slice(0, 5);
    console.log("Recent Earthquakes:", latest);
}

fetchEarthquakes();

// Register Service Worker for PWA
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(() => {
        console.log("Service Worker Registered ✅");
    });
}
