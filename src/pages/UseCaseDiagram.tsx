
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const UseCaseDiagram = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">EasyBank System - Use Case Diagram</h1>
            <p className="text-gray-600">Based on Software Requirements Specification (SRS)</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <svg width="1200" height="800" viewBox="0 0 1200 800" className="w-full h-auto border border-gray-200">
            {/* System Boundary */}
            <rect x="250" y="50" width="700" height="650" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray="5,5" />
            <text x="580" y="40" textAnchor="middle" className="fill-blue-600 text-lg font-bold">EasyBank System</text>

            {/* Actors */}
            {/* Retail Customer */}
            <g>
              <circle cx="100" cy="150" r="20" fill="#10b981" stroke="#047857" strokeWidth="2" />
              <line x1="100" y1="170" x2="100" y2="220" stroke="#047857" strokeWidth="2" />
              <line x1="80" y1="190" x2="120" y2="190" stroke="#047857" strokeWidth="2" />
              <line x1="100" y1="220" x2="85" y2="250" stroke="#047857" strokeWidth="2" />
              <line x1="100" y1="220" x2="115" y2="250" stroke="#047857" strokeWidth="2" />
              <text x="100" y="270" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Retail Customer</text>
            </g>

            {/* Business Customer */}
            <g>
              <circle cx="100" cy="350" r="20" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
              <line x1="100" y1="370" x2="100" y2="420" stroke="#d97706" strokeWidth="2" />
              <line x1="80" y1="390" x2="120" y2="390" stroke="#d97706" strokeWidth="2" />
              <line x1="100" y1="420" x2="85" y2="450" stroke="#d97706" strokeWidth="2" />
              <line x1="100" y1="420" x2="115" y2="450" stroke="#d97706" strokeWidth="2" />
              <text x="100" y="470" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Business Customer</text>
            </g>

            {/* Customer Support */}
            <g>
              <circle cx="100" cy="550" r="20" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2" />
              <line x1="100" y1="570" x2="100" y2="620" stroke="#7c3aed" strokeWidth="2" />
              <line x1="80" y1="590" x2="120" y2="590" stroke="#7c3aed" strokeWidth="2" />
              <line x1="100" y1="620" x2="85" y2="650" stroke="#7c3aed" strokeWidth="2" />
              <line x1="100" y1="620" x2="115" y2="650" stroke="#7c3aed" strokeWidth="2" />
              <text x="100" y="670" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Customer Support</text>
              <text x="100" y="685" textAnchor="middle" className="fill-gray-700 text-sm font-medium">Representative</text>
            </g>

            {/* Use Cases */}
            {/* Authentication */}
            <ellipse cx="350" cy="120" rx="70" ry="25" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
            <text x="350" y="115" textAnchor="middle" className="fill-gray-700 text-xs font-medium">User Registration</text>
            <text x="350" y="128" textAnchor="middle" className="fill-gray-700 text-xs font-medium">and Login</text>

            {/* Account Management */}
            <ellipse cx="450" cy="200" rx="80" ry="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="450" y="195" textAnchor="middle" className="fill-gray-700 text-xs font-medium">View Account</text>
            <text x="450" y="208" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Balances & History</text>

            {/* Fund Transfers */}
            <ellipse cx="600" cy="150" rx="70" ry="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
            <text x="600" y="145" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Transfer Funds</text>
            <text x="600" y="158" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Between Accounts</text>

            {/* Bill Payments */}
            <ellipse cx="750" cy="200" rx="65" ry="25" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
            <text x="750" y="195" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Pay Bills to</text>
            <text x="750" y="208" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Registered Payees</text>

            {/* Download Statements */}
            <ellipse cx="380" cy="300" rx="70" ry="25" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" />
            <text x="380" y="295" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Download</text>
            <text x="380" y="308" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Statements</text>

            {/* Search Transactions */}
            <ellipse cx="550" cy="280" rx="70" ry="25" fill="#f3e8ff" stroke="#a855f7" strokeWidth="2" />
            <text x="550" y="275" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Search Transaction</text>
            <text x="550" y="288" textAnchor="middle" className="fill-gray-700 text-xs font-medium">History</text>

            {/* Add Payees */}
            <ellipse cx="720" cy="300" rx="60" ry="25" fill="#fed7d7" stroke="#f56565" strokeWidth="2" />
            <text x="720" y="295" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Add Payees</text>
            <text x="720" y="308" textAnchor="middle" className="fill-gray-700 text-xs font-medium">& Schedule Payments</text>

            {/* Customer Support Chat */}
            <ellipse cx="450" cy="400" rx="75" ry="25" fill="#e6fffa" stroke="#38b2ac" strokeWidth="2" />
            <text x="450" y="395" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Access Customer</text>
            <text x="450" y="408" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Support (Chat)</text>

            {/* Email Support */}
            <ellipse cx="650" cy="400" rx="70" ry="25" fill="#fff5f5" stroke="#e53e3e" strokeWidth="2" />
            <text x="650" y="395" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Submit Email</text>
            <text x="650" y="408" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Queries</text>

            {/* Support Representative Functions */}
            <ellipse cx="500" cy="550" rx="75" ry="25" fill="#faf5ff" stroke="#9f7aea" strokeWidth="2" />
            <text x="500" y="545" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Assist Customers</text>
            <text x="500" y="558" textAnchor="middle" className="fill-gray-700 text-xs font-medium">via Chat/Email</text>

            <ellipse cx="700" cy="550" rx="70" ry="25" fill="#f0fff4" stroke="#68d391" strokeWidth="2" />
            <text x="700" y="545" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Access Customer</text>
            <text x="700" y="558" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Account Information</text>

            {/* Relationships - Retail Customer */}
            <line x1="120" y1="150" x2="280" y2="120" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="180" x2="370" y2="200" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="160" x2="530" y2="150" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="200" x2="680" y2="200" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="220" x2="310" y2="300" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="210" x2="480" y2="280" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="240" x2="650" y2="300" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="280" x2="380" y2="400" stroke="#047857" strokeWidth="2" />
            <line x1="120" y1="290" x2="580" y2="400" stroke="#047857" strokeWidth="2" />

            {/* Relationships - Business Customer */}
            <line x1="120" y1="350" x2="280" y2="120" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="360" x2="370" y2="200" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="340" x2="530" y2="150" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="370" x2="680" y2="200" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="380" x2="310" y2="300" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="375" x2="480" y2="280" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="385" x2="650" y2="300" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="390" x2="380" y2="400" stroke="#d97706" strokeWidth="2" />
            <line x1="120" y1="395" x2="580" y2="400" stroke="#d97706" strokeWidth="2" />

            {/* Relationships - Customer Support */}
            <line x1="120" y1="530" x2="425" y2="550" stroke="#7c3aed" strokeWidth="2" />
            <line x1="120" y1="540" x2="625" y2="550" stroke="#7c3aed" strokeWidth="2" />

            {/* Include relationships (dotted lines) */}
            <line x1="450" y1="375" x2="500" y2="525" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="650" y1="375" x2="500" y2="525" stroke="#666" strokeWidth="1" strokeDasharray="3,3" />

            {/* Legend */}
            <g transform="translate(1000, 100)">
              <rect x="0" y="0" width="180" height="200" fill="#f9fafb" stroke="#d1d5db" strokeWidth="1" />
              <text x="90" y="20" textAnchor="middle" className="fill-gray-700 text-sm font-bold">Legend</text>
              
              <circle cx="20" cy="40" r="8" fill="#10b981" stroke="#047857" strokeWidth="1" />
              <text x="35" y="45" className="fill-gray-700 text-xs">Actors (Users)</text>
              
              <ellipse cx="65" cy="65" rx="25" ry="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1" />
              <text x="35" y="75" className="fill-gray-700 text-xs">Use Cases</text>
              
              <line x1="10" y1="90" x2="40" y2="90" stroke="#047857" strokeWidth="2" />
              <text x="45" y="95" className="fill-gray-700 text-xs">Association</text>
              
              <line x1="10" y1="110" x2="40" y2="110" stroke="#666" strokeWidth="1" strokeDasharray="2,2" />
              <text x="45" y="115" className="fill-gray-700 text-xs">Include</text>
              
              <rect x="10" y="130" width="160" height="60" fill="none" stroke="#2563eb" strokeWidth="1" strokeDasharray="3,3" />
              <text x="90" y="150" textAnchor="middle" className="fill-gray-700 text-xs">System Boundary</text>
              <text x="90" y="165" textAnchor="middle" className="fill-gray-700 text-xs">(Defines system scope</text>
              <text x="90" y="180" textAnchor="middle" className="fill-gray-700 text-xs">and external actors)</text>
            </g>

            {/* Compliance Note */}
            <g transform="translate(250, 720)">
              <rect x="0" y="0" width="500" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
              <text x="250" y="20" textAnchor="middle" className="fill-amber-800 text-sm font-bold">Security & Compliance Requirements</text>
              <text x="250" y="35" textAnchor="middle" className="fill-amber-700 text-xs">• PCI DSS Compliance for data security</text>
              <text x="250" y="50" textAnchor="middle" className="fill-amber-700 text-xs">• WCAG 2.1 Accessibility Standards • Data encryption in transit and at rest</text>
            </g>
          </svg>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Use Case Diagram Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Key Actors & Responsibilities:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><strong className="text-green-600">Retail Customers:</strong> Individual banking users accessing core services</li>
                <li><strong className="text-amber-600">Business Customers:</strong> Small business owners managing business accounts</li>
                <li><strong className="text-purple-600">Customer Support Representatives:</strong> Bank employees assisting customers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Core System Features:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Account management and transaction history</li>
                <li>• Inter-account and external fund transfers</li>
                <li>• Bill payment system with payee management</li>
                <li>• Multi-channel customer support (chat/email)</li>
                <li>• Document management (statement downloads)</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Usability Goal:</strong> All core tasks (fund transfers, bill payments) achievable within 3 clicks, 
              with &lt;5% error rate for new users and &lt;3 second load times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCaseDiagram;
