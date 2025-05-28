
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, User, LogOut, CreditCard, ArrowRight, DollarSign, FileText, Phone, ArrowLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Accounts = () => {
  const navigate = useNavigate();

  const accounts = [
    { 
      name: 'Checking Account', 
      number: '****1234', 
      balance: '$2,450.67',
      type: 'Primary Checking',
      transactions: [
        { date: '2024-05-28', description: 'Transfer to Savings', amount: '-$500.00' },
        { date: '2024-05-27', description: 'Direct Deposit', amount: '+$2,150.00' },
        { date: '2024-05-26', description: 'Electric Bill Payment', amount: '-$89.32' }
      ]
    },
    { 
      name: 'Savings Account', 
      number: '****5678', 
      balance: '$8,921.43',
      type: 'High Yield Savings',
      transactions: [
        { date: '2024-05-28', description: 'Transfer from Checking', amount: '+$500.00' },
        { date: '2024-05-25', description: 'Interest Payment', amount: '+$12.45' },
        { date: '2024-05-20', description: 'Transfer to Checking', amount: '-$200.00' }
      ]
    },
    { 
      name: 'Business Account', 
      number: '****9012', 
      balance: '$15,234.89',
      type: 'Business Checking',
      transactions: [
        { date: '2024-05-28', description: 'Client Payment', amount: '+$3,500.00' },
        { date: '2024-05-27', description: 'Office Supplies', amount: '-$156.78' },
        { date: '2024-05-26', description: 'Payroll', amount: '-$2,800.00' }
      ]
    }
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
            <Bell className="h-6 w-6 text-gray-600" />
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
                  className="w-full justify-start"
                  onClick={() => navigate('/')}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start bg-blue-50 text-blue-600"
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
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Account Management</h2>
              <p className="text-gray-600">View and manage your accounts</p>
            </div>
          </div>

          <div className="space-y-6">
            {accounts.map((account, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{account.name}</CardTitle>
                      <p className="text-gray-500">{account.type} • {account.number}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">{account.balance}</p>
                      <p className="text-sm text-gray-500">Available Balance</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Recent Transactions</h4>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download Statement
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => navigate('/history')}>
                        View All Transactions
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {account.transactions.map((transaction, txIndex) => (
                      <div key={txIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
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
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Accounts;
