import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-pricing-table': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'pricing-table-id': string;
        'publishable-key': string;
      };
    }
  }
}

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-gray-600">Select the plan that best fits your needs</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <stripe-pricing-table 
            pricing-table-id="prctbl_1QB1TcBUDch2erzUEIopZnI3"
            publishable-key="pk_test_51QB1M4BUDch2erzUxdsQEMQLKP4YWPaUPB7jLQI0KOmPQNIZt2aOU95pDcgvTleadxY2uMXoCRYp66i2H2EkVKei00QQWQQwed"
          >
          </stripe-pricing-table>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;