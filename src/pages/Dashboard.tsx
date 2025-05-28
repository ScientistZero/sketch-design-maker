
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, User, LogOut, CreditCard, ArrowRight, DollarSign, FileText, Phone, Diagram3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [notifications] = useState(3);

  const accounts = [
    { name: 'Checking Account', number: '****1234', balance: '$2,450.67' },
    { name: 'Savings Account', number: '****5678', balance: '$8,921.43' },
    { name: 'Business Account', number: '****9012', balance: '$15,234.89' }
  ];

  const recentActivity = [
    { date: '2024-05-28', description: 'Transfer to Savings', amount: '-$500.00' },
    { date: '2024-05-27', description: 'Direct Deposit', amount: '+$2,150.00' },
    { date: '2024-05-26', description: 'Electric Bill Payment', amount: '-$89.32' },
    { date: '2024-05-25', description: 'ATM Withdrawal', amount: '-$60.00' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">EasyBank</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
              {notifications > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-gray-600" />
              <span className="text-gray-700">John Doe</span>
            </div>
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start bg-blue-50 text-blue-600"
                  onClick={() => navigate('/')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/accounts')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Accounts
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/transfers')}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Fund Transfers
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/bills')}
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Bill Payments
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/history')}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Transaction History
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/support')}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Customer Support
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => navigate('/use-case-diagram')}
                >
                  <Diagram3 className="mr-2 h-4 w-4" />
                  Use Case Diagram
                </Button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
            <p className="text-gray-600">Here's your account overview</p>
          </div>

          {/* Account Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {accounts.map((account, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <p className="text-sm text-gray-500">{account.number}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600">{account.balance}</p>
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    View Details →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  className="h-16 flex-col" 
                  variant="outline"
                  onClick={() => navigate('/transfers')}
                >
                  <ArrowRight className="h-6 w-6 mb-2" />
                  Transfer Funds
                </Button>
                <Button 
                  className="h-16 flex-col" 
                  variant="outline"
                  onClick={() => navigate('/bills')}
                >
                  <DollarSign className="h-6 w-6 mb-2" />
                  Pay Bill
                </Button>
                <Button 
                  className="h-16 flex-col" 
                  variant="outline"
                  onClick={() => navigate('/accounts')}
                >
                  <CreditCard className="h-6 w-6 mb-2" />
                  View Accounts
                </Button>
                <Button 
                  className="h-16 flex-col" 
                  variant="outline"
                  onClick={() => navigate('/support')}
                >
                  <Phone className="h-6 w-6 mb-2" />
                  Get Support
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Activity</CardTitle>
              <Button 
                variant="link" 
                onClick={() => navigate('/history')}
              >
                View All →
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    <p className={`font-medium ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
