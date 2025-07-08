import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const consumoPorSetor = [
  { consumoPorSetor: 'Irrigação', consumo: 500 },
  { consumoPorSetor: 'Abastecimento Urbano', consumo: 240 },
  { consumoPorSetor: 'Indústria', consumo: 100 },
];

const BarChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <ReBarChart
          data={consumoPorSetor}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="consumoPorSetor" label={{ value: 'Mês', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Consumo por Setor', angle: -90, position: 'insideLeft'}} />
          <Tooltip />
          <Legend />
          <Bar dataKey="consumo" fill="#8884d8" name="" />    
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
