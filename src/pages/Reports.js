import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import './Reports.css';

const monthlyDonations = [
  { month: 'Enero', donations: 4000 },
  { month: 'Febrero', donations: 3000 },
  { month: 'Marzo', donations: 5000 },
  { month: 'Abril', donations: 7000 },
  { month: 'Mayo', donations: 6000 },
];

const donationGoal = [
  { name: 'Objetivo Alcanzado', value: 65 },
  { name: 'Faltante para el Objetivo', value: 35 },
];

const topDonors = [
  { name: 'Donante A', amount: 5000 },
  { name: 'Donante B', amount: 3000 },
  { name: 'Donante C', amount: 2000 },
  { name: 'Donante D', amount: 1000 },
];

const yearlyComparison = [
  { year: '2022', donations: 25000 },
  { year: '2023', donations: 40000 },
  { year: '2024', donations: 60000 },
];

function Reports() {

  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="reports-container">
      <button onClick={handleBackToDashboard} className="back-button">
        Home
      </button>
      <h1 className="reports-title">Indicadores Económicos de Donaciones</h1>
      <p className="thank-you-message">
        ¡Gracias por tu donación! Con tu ayuda, estamos haciendo grandes cosas en nuestro proyecto
      </p>
      <div className="charts-dashboard">
        <div className="chart">
          <h3>Donaciones Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyDonations}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="donations" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Objetivo de Donaciones</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Pie data={donationGoal} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
                {donationGoal.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#0088FE' : '#FFBB28'} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Top Donantes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={topDonors}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Comparativa de Donaciones Año a Año</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={yearlyComparison}>
              <defs>
                <linearGradient id="colorDonations" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="donations" stroke="#8884d8" fillOpacity={1} fill="url(#colorDonations)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Reports;
