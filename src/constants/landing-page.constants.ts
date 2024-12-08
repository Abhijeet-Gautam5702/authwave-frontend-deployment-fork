import { Mail, Database, RefreshCw, Shield, Lock, Code, Monitor } from "lucide-react";



export const securityFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-[#00B6F0]" />,
    title: "Token Security",
    bullets: [
      "JWT-based access/refresh tokens with expiration handling",
      "Automatic token rotation and revocation",
    ],
  },
  // ... rest of the securityFeatures array
];

export const apiSteps = [
  {
    title: "Install AuthWave",
    code: `npm install @authwave/sdk\n# or\nyarn add @authwave/sdk`,
  },
  // ... rest of the apiSteps array
]; 