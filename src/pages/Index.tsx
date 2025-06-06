
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard since this is a post-login banking app
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Loading EasyBank...</h1>
        <p className="text-xl text-gray-600">Redirecting to your dashboard</p>
      </div>
    </div>
  );
};

export default Index;
