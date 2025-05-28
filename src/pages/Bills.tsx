
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bell, User, LogOut, CreditCard, ArrowRight, DollarSign, FileText, Phone, ArrowLeft, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Bills = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('payees');

  const payees = [
    { name: 'Electric Company', account: 'Account #12345', lastPaid: '2024-05-15', amount: '$89.32' },
    { name: 'Water Utility', account: 'Account #67890', lastPaid: '2024-05-10', amount: '$45.67' },
    { name: 'Internet Provider', account: 'Account #54321', lastPaid: '2024-05-05', amount: '$79.99' }
  ];

  const scheduledPayments = [
    { payee: 'Electric Company', amount: '$89.32', dueDate: '2024-06-15', status: 'Scheduled' },
    { payee: 'Credit Card', amount: '$250.00', dueDate: '2024-06-20', status: 'Scheduled' }
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
                  className="w-full justify-start bg-blue-50 text-blue-600"
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
              <h2 className="text-2xl font-bold text-gray-900">Bill Payments</h2>
              <p className="text-gray-600">Manage payees and schedule payments</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex space-x-4 border-b">
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'payees' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600'}`}
                onClick={() => setActiveTab('payees')}
              >
                Manage Payees
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'schedule' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600'}`}
                onClick={() => setActiveTab('schedule')}
              >
                Schedule Payments
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'history' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600'}`}
                onClick={() => setActiveTab('history')}
              >
                Payment History
              </button>
            </div>
          </div>

          {activeTab === 'payees' && (
            <div className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Your Payees</CardTitle>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Payee
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {payees.map((payee, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium">{payee.name}</h4>
                          <p className="text-sm text-gray-500">{payee.account}</p>
                          <p className="text-sm text-gray-500">Last paid: {payee.lastPaid}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{payee.amount}</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Pay Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Add New Payee</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="payeeName">Payee Name</Label>
                      <Input id="payeeName" placeholder="Enter payee name" />
                    </div>
                    <div>
                      <Label htmlFor="payeeAccount">Account Number</Label>
                      <Input id="payeeAccount" placeholder="Enter account number" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="payeeCategory">Category</Label>
                    <select id="payeeCategory" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                      <option value="">Select category</option>
                      <option value="utilities">Utilities</option>
                      <option value="credit-card">Credit Card</option>
                      <option value="loan">Loan</option>
                      <option value="insurance">Insurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <Button className="w-full">Add Payee</Button>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Schedule New Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="selectPayee">Select Payee</Label>
                      <select id="selectPayee" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                        <option value="">Choose payee</option>
                        {payees.map((payee, index) => (
                          <option key={index} value={payee.name}>{payee.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="paymentAmount">Amount</Label>
                      <Input id="paymentAmount" type="number" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="paymentDate">Payment Date</Label>
                      <Input id="paymentDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="fromAccount">From Account</Label>
                      <select id="fromAccount" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                        <option value="">Select account</option>
                        <option value="checking">Checking Account ****1234</option>
                        <option value="savings">Savings Account ****5678</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="memo">Memo (Optional)</Label>
                    <Input id="memo" placeholder="Payment memo" />
                  </div>
                  <Button className="w-full">Schedule Payment</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Scheduled Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scheduledPayments.map((payment, index) => (
                      <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium">{payment.payee}</h4>
                          <p className="text-sm text-gray-500">Due: {payment.dueDate}</p>
                          <span className="inline-block mt-1 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                            {payment.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-lg">{payment.amount}</p>
                          <div className="space-x-2 mt-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'history' && (
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <div>
                      <h4 className="font-medium">Electric Company</h4>
                      <p className="text-sm text-gray-500">2024-05-15</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$89.32</p>
                      <span className="text-sm text-green-600">Completed</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <div>
                      <h4 className="font-medium">Water Utility</h4>
                      <p className="text-sm text-gray-500">2024-05-10</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$45.67</p>
                      <span className="text-sm text-green-600">Completed</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <h4 className="font-medium">Internet Provider</h4>
                      <p className="text-sm text-gray-500">2024-05-05</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$79.99</p>
                      <span className="text-sm text-green-600">Completed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Bills;
