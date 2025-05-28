
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bell, User, LogOut, CreditCard, ArrowRight, DollarSign, FileText, Phone, ArrowLeft, Search, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const History = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('all');
  const [dateRange, setDateRange] = useState('30');

  const transactions = [
    { id: 1, date: '2024-05-28', description: 'Transfer to Savings', account: 'Checking ****1234', amount: '-$500.00', type: 'Transfer' },
    { id: 2, date: '2024-05-28', description: 'Transfer from Checking', account: 'Savings ****5678', amount: '+$500.00', type: 'Transfer' },
    { id: 3, date: '2024-05-28', description: 'Client Payment', account: 'Business ****9012', amount: '+$3,500.00', type: 'Deposit' },
    { id: 4, date: '2024-05-27', description: 'Direct Deposit', account: 'Checking ****1234', amount: '+$2,150.00', type: 'Deposit' },
    { id: 5, date: '2024-05-27', description: 'Office Supplies', account: 'Business ****9012', amount: '-$156.78', type: 'Purchase' },
    { id: 6, date: '2024-05-26', description: 'Electric Bill Payment', account: 'Checking ****1234', amount: '-$89.32', type: 'Bill Payment' },
    { id: 7, date: '2024-05-26', description: 'Payroll', account: 'Business ****9012', amount: '-$2,800.00', type: 'Transfer' },
    { id: 8, date: '2024-05-25', description: 'ATM Withdrawal', account: 'Checking ****1234', amount: '-$60.00', type: 'ATM' },
    { id: 9, date: '2024-05-25', description: 'Interest Payment', account: 'Savings ****5678', amount: '+$12.45', type: 'Interest' },
    { id: 10, date: '2024-05-24', description: 'Online Purchase', account: 'Checking ****1234', amount: '-$45.99', type: 'Purchase' }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.account.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAccount = selectedAccount === 'all' || transaction.account.includes(selectedAccount);
    return matchesSearch && matchesAccount;
  });

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
                  className="w-full justify-start bg-blue-50 text-blue-600"
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
              <h2 className="text-2xl font-bold text-gray-900">Transaction History</h2>
              <p className="text-gray-600">View and search your transaction history</p>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="search">Search Transactions</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="search"
                      placeholder="Search description or account..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="account">Account</Label>
                  <select 
                    id="account"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    value={selectedAccount}
                    onChange={(e) => setSelectedAccount(e.target.value)}
                  >
                    <option value="all">All Accounts</option>
                    <option value="1234">Checking ****1234</option>
                    <option value="5678">Savings ****5678</option>
                    <option value="9012">Business ****9012</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="dateRange">Date Range</Label>
                  <select 
                    id="dateRange"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  >
                    <option value="7">Last 7 days</option>
                    <option value="30">Last 30 days</option>
                    <option value="90">Last 3 months</option>
                    <option value="365">Last year</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Export CSV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction List */}
          <Card>
            <CardHeader>
              <CardTitle>Transactions ({filteredTransactions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h4 className="font-medium">{transaction.description}</h4>
                          <p className="text-sm text-gray-500">{transaction.account}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm text-gray-500">{transaction.date}</span>
                            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                              {transaction.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-medium text-lg ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredTransactions.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No transactions found matching your criteria.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default History;
