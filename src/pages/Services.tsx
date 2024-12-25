import React from 'react';
import { PhoneCall, Video, MessageSquare, Headphones } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive communication solutions for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<PhoneCall className="h-12 w-12 text-blue-600" />}
            title="Voice Calls"
            description="Crystal clear voice calls with HD quality and minimal latency"
            features={[
              "HD Voice Quality",
              "Call Recording",
              "Conference Calling",
              "Custom Caller ID"
            ]}
          />

          <ServiceCard
            icon={<Video className="h-12 w-12 text-blue-600" />}
            title="Video Conferencing"
            description="Professional video meetings with advanced features"
            features={[
              "HD Video Quality",
              "Screen Sharing",
              "Virtual Backgrounds",
              "Meeting Recording"
            ]}
          />

          <ServiceCard
            icon={<MessageSquare className="h-12 w-12 text-blue-600" />}
            title="Messaging"
            description="Secure instant messaging for teams and businesses"
            features={[
              "End-to-end Encryption",
              "File Sharing",
              "Group Chats",
              "Message History"
            ]}
          />

          <ServiceCard
            icon={<Headphones className="h-12 w-12 text-blue-600" />}
            title="Customer Support"
            description="24/7 support solutions for your business"
            features={[
              "Live Chat Support",
              "Ticket System",
              "Knowledge Base",
              "Priority Support"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-2xl font-semibold text-gray-900 ml-4">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}