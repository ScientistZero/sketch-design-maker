
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bell, User, LogOut, CreditCard, ArrowRight, DollarSign, FileText, Phone, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Transfers = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my-accounts');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [transferData, setTransferData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    description: ''
  });

  const accounts = [
    { id: 'checking', name: 'Checking Account ****1234', balance: '$2,450.67' },
    { id: 'savings', name: 'Savings Account ****5678', balance: '$8,921.43' },
    { id: 'business', name: 'Business Account ****9012', balance: '$15,234.89' }
  ];

  const handleReviewTransfer = () => {
    if (transferData.fromAccount && transferData.toAccount && transferData.amount) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmTransfer = () => {
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  const handleNewTransfer = () => {
    setShowSuccess(false);
    setTransferData({ fromAccount: '', toAccount: '', amount: '', description: '' });
  };

  if (showSuccess) {
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

        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
              </div>
              <CardTitle className="text-2xl text-green-600">Transfer Successful!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Your transfer of ${transferData.amount} has been completed successfully.
              </p>
              <div className="space-y-2">
                <Button className="w-full" onClick={handleNewTransfer}>
                  Make Another Transfer
                </Button>
                <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
                  Go to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showConfirmation) {
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

        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Confirm Transfer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">From:</span>
                  <span className="font-medium">
                    {accounts.find(acc => acc.id === transferData.fromAccount)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">To:</span>
                  <span className="font-medium">
                    {accounts.find(acc => acc.id === transferData.toAccount)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-medium text-lg">${transferData.amount}</span>
                </div>
                {transferData.description && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Description:</span>
                    <span className="font-medium">{transferData.description}</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Button className="w-full" onClick={handleConfirmTransfer}>
                  Confirm Transfer
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setShowConfirmation(false)}>
                  Cancel / Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
                  className="w-full justify-start bg-blue-50 text-blue-600"
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
              <h2 className="text-2xl font-bold text-gray-900">Fund Transfers</h2>
              <p className="text-gray-600">Transfer money between accounts</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex space-x-4 border-b">
                <button
                  className={`px-4 py-2 font-medium ${activeTab === 'my-accounts' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600'}`}
                  onClick={() => setActiveTab('my-accounts')}
                >
                  Between My Accounts
                </button>
                <button
                  className={`px-4 py-2 font-medium ${activeTab === 'other-users' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-600'}`}
                  onClick={() => setActiveTab('other-users')}
                >
                  To Another EasyBank User
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeTab === 'my-accounts' ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fromAccount">From Account</Label>
                      <select 
                        id="fromAccount"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={transferData.fromAccount}
                        onChange={(e) => setTransferData({...transferData, fromAccount: e.target.value})}
                      >
                        <option value="">Select account</option>
                        {accounts.map(account => (
                          <option key={account.id} value={account.id}>
                            {account.name} - {account.balance}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="toAccount">To Account</Label>
                      <select 
                        id="toAccount"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={transferData.toAccount}
                        onChange={(e) => setTransferData({...transferData, toAccount: e.target.value})}
                      >
                        <option value="">Select account</option>
                        {accounts.filter(acc => acc.id !== transferData.fromAccount).map(account => (
                          <option key={account.id} value={account.id}>
                            {account.name} - {account.balance}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="amount">Amount ($)</Label>
                    <Input 
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      value={transferData.amount}
                      onChange={(e) => setTransferData({...transferData, amount: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Input 
                      id="description"
                      placeholder="Transfer description"
                      value={transferData.description}
                      onChange={(e) => setTransferData({...transferData, description: e.target.value})}
                    />
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={handleReviewTransfer}
                    disabled={!transferData.fromAccount || !transferData.toAccount || !transferData.amount}
                  >
                    Review Transfer
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">External transfer feature coming soon</p>
                  <div className="space-y-4">
                    <Input placeholder="Recipient's email or phone" disabled />
                    <Input placeholder="Amount" disabled />
                    <Button disabled className="w-full">Send Transfer Request</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Transfers;
