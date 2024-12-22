import React from 'react';
import { BarChart2, ThumbsUp, MessageCircle, Clock } from 'lucide-react';

function Dashboard() {
  const ideas = [
    {
      id: 1,
      title: 'AI-Powered Customer Service',
      description: 'Implement AI chatbots for 24/7 customer support',
      votes: 42,
      comments: 15,
      status: 'In Review'
    },
    {
      id: 2,
      title: 'Green Energy Initiative',
      description: 'Solar panel installation for office buildings',
      votes: 38,
      comments: 12,
      status: 'Approved'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Ideas</h3>
            <BarChart2 className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Total Votes</h3>
            <ThumbsUp className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Comments</h3>
            <MessageCircle className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-3xl font-bold">89</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Pending</h3>
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <p className="text-3xl font-bold">7</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Ideas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-center py-3 px-4">Votes</th>
                <th className="text-center py-3 px-4">Comments</th>
                <th className="text-center py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea) => (
                <tr key={idea.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{idea.title}</td>
                  <td className="py-3 px-4">{idea.description}</td>
                  <td className="py-3 px-4 text-center">{idea.votes}</td>
                  <td className="py-3 px-4 text-center">{idea.comments}</td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      idea.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {idea.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;