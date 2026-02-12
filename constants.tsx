
import React from 'react';
import { Server, Cloud, Shield, Wifi, Phone, Code, Cpu, Activity } from 'lucide-react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'it-support',
    title: 'Managed IT Support',
    category: 'Infrastructure',
    description: 'Proactive maintenance and 24/7 technical support for your entire business ecosystem.',
    icon: 'Server',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000',
    longDescription: 'Our Managed IT Support services provide peace of mind by handling everything from desktop support to complex server architecture. We use advanced RMM tools to prevent issues before they disrupt your productivity.'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Computing',
    category: 'Cloud',
    description: 'Migrate and scale with Microsoft 365, Azure, and secure cloud backup solutions.',
    icon: 'Cloud',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000',
    longDescription: 'Harness the power of the cloud. We specialize in Azure deployments, Microsoft 365 migrations, and hybrid cloud environments tailored to the South African business landscape.'
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    category: 'Security',
    description: 'Protect your digital assets with advanced firewalling, endpoint protection, and threat monitoring.',
    icon: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000',
    longDescription: 'In an era of rising cyber threats, we provide multi-layered security including Managed Firewalls, Antivirus, Ransomware protection, and secure VPNs for remote workforces.'
  },
  {
    id: 'fibre-connectivity',
    title: 'Business Fibre & LTE',
    category: 'Connectivity',
    description: 'Uncapped, ultra-fast connectivity with redundant failover options.',
    icon: 'Wifi',
    imageUrl: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa81?q=80&w=2000',
    longDescription: 'Reliable internet is the backbone of modern business. We offer high-speed Fibre-to-the-Business (FTTB) and robust LTE-A solutions with 99.9% uptime guarantees.'
  },
  {
    id: 'voip-telephony',
    title: 'VOIP & PBX',
    category: 'Communication',
    description: 'Cloud-hosted telephony that scales with your business and reduces call costs.',
    icon: 'Phone',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000',
    longDescription: 'Replace aging hardware with Cloud PBX solutions. Enjoy features like auto-attendants, call recording, and seamless integration across mobile and desktop devices.'
  },
  {
    id: 'hardware-procurement',
    title: 'Hardware Procurement',
    category: 'Infrastructure',
    description: 'Enterprise-grade hardware from Dell, HP, Lenovo, and Cisco at competitive rates.',
    icon: 'Cpu',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000',
    longDescription: 'We help you select and source the right equipment. From laptops and servers to networking switches and UPS systems, we provide full lifecycle management.'
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  Server: <Server className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />
};
