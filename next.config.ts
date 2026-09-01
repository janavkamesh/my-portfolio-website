import type { NextConfig } from "next";
import os from "os";

// Only run QR code generation in development mode
if (process.env.NODE_ENV === "development" && !process.env.QR_SHOWN) {
  // Set flag so we only show it once (Next.js can reload config)
  process.env.QR_SHOWN = "1";
  
  // Find local IP prioritizing active Wi-Fi / Ethernet
  const getLocalIp = () => {
    const interfaces = os.networkInterfaces();
    const candidateIps: string[] = [];
    const priorityNames = ["wi-fi", "wifi", "wlan", "ethernet", "eth", "en"];

    for (const name of Object.keys(interfaces)) {
      const lowerName = name.toLowerCase();
      if (lowerName.includes("vethernet") || lowerName.includes("virtual") || lowerName.includes("wsl") || lowerName.includes("host-only")) {
        continue;
      }
      for (const iface of interfaces[name] || []) {
        if (iface.family === "IPv4" && !iface.internal) {
          if (priorityNames.some((p) => lowerName.includes(p))) {
            return iface.address;
          }
          candidateIps.push(iface.address);
        }
      }
    }
    return candidateIps[0] || "localhost";
  };

  const ip = getLocalIp();
  const port = process.env.PORT || 3000;
  const localUrl = `http://${ip}:${port}`;

  // Use dynamic import so it doesn't break production builds
  // if qrcode-terminal isn't in dependencies
  import("qrcode-terminal").then((qrcode) => {
    console.log(`\n\x1b[36m=========================================\x1b[0m`);
    console.log(`\x1b[36m📱 Scan to view on your mobile device:\x1b[0m`);
    console.log(`\x1b[36m🔗 ${localUrl}\x1b[0m`);
    
    // generate small QR code
    qrcode.default.generate(localUrl, { small: true });
    
    console.log(`\x1b[36m=========================================\x1b[0m\n`);
  }).catch(() => {
    // If qrcode-terminal is not available, fail silently
  });
}

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.106",
    "192.168.0.*",
    "192.168.*.*",
    "localhost:3000",
    "localhost",
  ],
};

export default nextConfig;
