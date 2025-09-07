import { AlertTriangle, Info, MapPin, Clock, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { useState } from 'react';

export function Announcements() {
  const [activeFilter, setActiveFilter] = useState('all');

  const announcements = [
    {
      id: 1,
      type: 'emergency',
      title: 'Flash Flood Warning',
      message: 'Heavy monsoon rains expected between 2-6 PM. Avoid low-lying areas and parking basements.',
      timestamp: '2 hours ago',
      priority: 'high',
      icon: AlertTriangle
    },
    {
      id: 2,
      type: 'maintenance',
      title: 'Library Building Maintenance',
      message: 'The main library will be closed for HVAC maintenance from 6 AM - 8 AM tomorrow.',
      timestamp: '5 hours ago',
      priority: 'medium',
      icon: MapPin
    },
    {
      id: 3,
      type: 'info',
      title: 'Safety Drill Scheduled',
      message: 'Monthly fire drill will be conducted on Friday at 10 AM. Please follow evacuation procedures.',
      timestamp: '1 day ago',
      priority: 'low',
      icon: Info
    },
    {
      id: 4,
      type: 'emergency',
      title: 'Campus Security Alert',
      message: 'Suspicious activity reported near parking lot C. Extra security patrols have been deployed.',
      timestamp: '2 days ago',
      priority: 'high',
      icon: AlertTriangle
    },
    {
      id: 5,
      type: 'emergency',
      title: 'Haze Alert - API Level Rising',
      message: 'Air Pollutant Index (API) has reached unhealthy levels. Limit outdoor activities and wear N95 masks if necessary.',
      timestamp: '6 hours ago',
      priority: 'medium',
      icon: AlertTriangle
    },
    {
      id: 6,
      type: 'info',
      title: 'New Safety App Features',
      message: 'The campus safety app now includes real-time disaster sensor monitoring and enhanced reporting.',
      timestamp: '3 days ago',
      priority: 'low',
      icon: Info
    }
  ];

  const filteredAnnouncements = activeFilter === 'all' 
    ? announcements 
    : announcements.filter(announcement => announcement.type === activeFilter);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-gradient-to-r from-red-500 to-red-600 text-white';
      case 'medium': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white';
      default: return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
    }
  };

  const getCardBgColor = (type: string, priority: string) => {
    if (priority === 'high') {
      return 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200';
    } else if (type === 'maintenance') {
      return 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200';
    } else {
      return 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200';
    }
  };

  const getIconColor = (type: string, priority: string) => {
    if (priority === 'high') return 'text-red-600';
    if (type === 'maintenance') return 'text-yellow-600';
    return 'text-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Header */}
      <div className="relative px-6 py-8 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599666882726-fe28581e3147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwc2Nob29sJTIwYnVpbGRpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzU3MjI0MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/90 to-orange-800/90"></div>
        <div className="relative flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-lg">
            <img 
              src="https://i.ibb.co/3mcqsssw/11-ezgif-com-webp-to-png-converter.png" 
              alt="Campus Safety Logo" 
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold drop-shadow-lg">Safety Alerts</h1>
            <p className="text-yellow-100 drop-shadow-md">Stay informed about campus safety updates</p>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-6">
        {/* Filter Options */}
        <Card className="p-4 bg-white shadow-lg">
          <div className="flex space-x-3 overflow-x-auto pb-2">
            <button onClick={() => setActiveFilter('all')}>
              <Badge className={`whitespace-nowrap shadow-lg transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                All
              </Badge>
            </button>
            <button onClick={() => setActiveFilter('emergency')}>
              <Badge className={`whitespace-nowrap transition-colors ${
                activeFilter === 'emergency'
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'
              }`}>
                Emergency
              </Badge>
            </button>
            <button onClick={() => setActiveFilter('maintenance')}>
              <Badge className={`whitespace-nowrap transition-colors ${
                activeFilter === 'maintenance'
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                  : 'bg-yellow-50 border-yellow-200 text-yellow-600 hover:bg-yellow-100'
              }`}>
                Maintenance
              </Badge>
            </button>
            <button onClick={() => setActiveFilter('info')}>
              <Badge className={`whitespace-nowrap transition-colors ${
                activeFilter === 'info'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100'
              }`}>
                Info
              </Badge>
            </button>
          </div>
        </Card>

        {/* Announcements List */}
        <div className="space-y-4 mb-8">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((announcement) => {
              const Icon = announcement.icon;
              
              return (
                <Card key={announcement.id} className={`p-5 shadow-lg transition-all duration-200 hover:shadow-xl ${getCardBgColor(announcement.type, announcement.priority)}`}>
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`p-3 rounded-full ${announcement.priority === 'high' ? 'bg-red-100' : announcement.type === 'maintenance' ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                          <Icon className={`h-6 w-6 ${getIconColor(announcement.type, announcement.priority)}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 text-lg">{announcement.title}</h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-500">{announcement.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getPriorityColor(announcement.priority)} text-xs shadow-md`}>
                        {announcement.priority.toUpperCase()}
                      </Badge>
                    </div>
                    
                    {/* Message */}
                    <div className="pl-16">
                      <p className="text-gray-700 leading-relaxed">
                        {announcement.message}
                      </p>
                    </div>

                    {/* Action indicators for high priority */}
                    {announcement.priority === 'high' && (
                      <div className="pl-16 flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-red-500" />
                        <span className="text-sm font-medium text-red-600">Immediate attention required</span>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })
          ) : (
            <Card className="p-8 bg-white shadow-lg text-center">
              <div className="text-gray-500">
                <Info className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p className="text-lg font-medium">No announcements found</p>
                <p className="text-sm">There are no {activeFilter} announcements at this time.</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
