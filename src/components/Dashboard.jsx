import React from 'react';
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, ShoppingCart } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '12,345', change: '+12.5%', positive: true, icon: <Users size={20} /> },
  { label: 'Revenue', value: '$48,250', change: '+8.2%', positive: true, icon: <DollarSign size={20} /> },
  { label: 'Active Now', value: '1,234', change: '+23.1%', positive: true, icon: <Activity size={20} /> },
  { label: 'Orders', value: '3,456', change: '-2.4%', positive: false, icon: <ShoppingCart size={20} /> }
];

function Dashboard() {
  return (
    <section className="dashboard" id="dashboard">
      <div className="dashboard-container">
        <div className="section-header">
          <h2>Live Dashboard</h2>
          <p>Real-time analytics and insights at your fingertips</p>
        </div>
        <div className="dashboard-preview">
          <div className="dashboard-header">
            <span className="dashboard-title">Analytics Overview</span>
            <span style={{ color: '#64748b', fontSize: '0.875rem' }}>Last 30 days</span>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="stat-label">{stat.label}</span>
                  <span style={{ color: '#667eea' }}>{stat.icon}</span>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  {stat.positive ? <TrendingUp size={14} style={{ display: 'inline', marginRight: '4px' }} /> : <TrendingDown size={14} style={{ display: 'inline', marginRight: '4px' }} />}
                  {stat.change} from last month
                </div>
              </div>
            ))}
          </div>
          <div className="chart-placeholder">
            Interactive Chart Component Placeholder
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
