import React from 'react';
import { Link } from 'react-router-dom';
import StorySection from '../components/StorySection';
import ProgressBar from '../components/ProgressBar';
import DonationList from '../components/DonationList';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Memorial Fund</h1>
        <p className="text-xl text-gray-600">In loving memory of [Name]</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <StorySection />
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Fundraising Progress</h2>
            <ProgressBar current={2500} goal={10000} />
            <div className="flex justify-between mt-3">
              <span className="text-gray-600">GHS 2,500 raised</span>
              <span className="text-gray-600">GHS 10,000 goal</span>
            </div>
            <Link 
              to="/donate" 
              className="w-full block text-center bg-primary text-white py-3 rounded-md mt-6 hover:bg-teal-800 transition-colors"
            >
              Donate Now
            </Link>
          </div>
          <DonationList />
        </div>
      </div>
    </div>
  );
};

export default Home;