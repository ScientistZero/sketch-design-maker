
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bell, User, LogOut, CreditCard, ArrowRight, DollarSign, FileText, Phone, ArrowLeft, Send, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'agent', text: 'Hello! How can I help you today?', time: '2:30 PM' },
    { id: 2, sender: 'user', text: 'I need help with a transfer that failed', time: '2:31 PM' },
    { id: 3, sender: 'agent', text: 'I\'d be happy to help you with that. Can you provide me with the transaction ID?', time: '2:32 PM' }
  ]);

  const faqItems = [
    {
      question: 'How do I transfer money between my accounts?',
      answer: 'You can transfer money by going to Fund Transfers > Between My Accounts, selecting your accounts, entering the amount, and confirming the transfer.'
    },
    {
      question: 'What are the daily transfer limits?',
      answer: 'Daily transfer limits are $5,000 for online transfers between your accounts and $2,500 for transfers to other EasyBank users.'
    },
    {
      question: 'How do I add a new payee for bill payments?',
      answer: 'Go to Bill Payments > Manage Payees, click "Add New Payee", and enter the payee information including name, account number, and category.'
    },
    {
      question: 'Can I schedule recurring payments?',
      answer: 'Yes, when scheduling a payment, you can set it to repeat monthly, quarterly, or annually. The payment will be automatically processed on the scheduled dates.'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
      
      // Simulate agent response
      setTimeout(() => {
        const agentResponse = {
          id: chatMessages.length + 2,
          sender: 'agent',
          text: 'Thank you for your message. I\'m looking into that for you now.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, agentResponse]);
      }, 1500);
    }
  };

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
                  className="w-full justify-start bg-blue-50 text-blue-600"
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
              <h2 className="text-2xl font-bold text-gray-900">Customer Support</h2>
              <p className="text-gray-600">Get help with your banking needs</p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex space-x-4 border-b">
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'chat' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600'}`}
                onClick={() => setActiveTab('chat')}
              >
                Live Chat
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'email' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600'}`}
                onClick={() => setActiveTab('email')}
              >
                Email Support
              </button>
              <button
                className={`px-4 py-2 font-medium ${activeTab === 'faq' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600'}`}
                onClick={() => setActiveTab('faq')}
              >
                FAQ
              </button>
            </div>
          </div>

          {activeTab === 'chat' && (
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <CardTitle>Live Chat Support</CardTitle>
                <div className="ml-auto">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600">Agent Online</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-4 py-2 rounded-lg ${
                        msg.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border'
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'email' && (
            <Card>
              <CardHeader>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select id="category" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value="">Select category</option>
                    <option value="transfers">Fund Transfers</option>
                    <option value="bills">Bill Payments</option>
                    <option value="accounts">Account Issues</option>
                    <option value="security">Security Concerns</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message"
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md h-32"
                    placeholder="Please describe your issue in detail..."
                  ></textarea>
                </div>
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <select id="priority" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <Button className="w-full">Send Support Request</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                        <h4 className="font-medium text-gray-900 mb-2">{item.question}</h4>
                        <p className="text-gray-600 text-sm">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" onClick={() => navigate('/transfers')}>
                      Transfer Help
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/bills')}>
                      Bill Payment Help
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/accounts')}>
                      Account Help
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab('chat')}>
                      Start Live Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Support;
