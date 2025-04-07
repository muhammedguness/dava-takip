import Layout from '../components/layout/Layout';
import StatsCard from '../components/dashboard/StatsCard';
import RecentCases from '../components/dashboard/RecentCases';
import UpcomingHearings from '../components/dashboard/UpcomingHearings';

export default function Dashboard() {
  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatsCard title="Aktif Davalar" value="12" />
          <StatsCard title="Bu Ay Duruşmalar" value="5" />
          <StatsCard title="Bekleyen Görevler" value="8" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RecentCases />
          <UpcomingHearings />
        </div>
      </div>
    </Layout>
  );
} 