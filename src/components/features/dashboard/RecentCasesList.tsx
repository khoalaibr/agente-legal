import { Card } from '../../ui/Card';
import { useAppSelector } from '../../../hooks/useRedux';
import { CaseCard } from './CaseCard';

export function RecentCasesList() {
  const recentCases = useAppSelector((state) => state.dashboard.recentCases);

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-secondary-900">Casos Recientes</h2>
        <a href="#" className="text-sm text-accent-600 hover:text-accent-800 font-medium">
          Ver todos
        </a>
      </div>
      <div className="space-y-4">
        {recentCases.map((caseData) => (
          <CaseCard key={caseData.id} caseData={caseData} />
        ))}
      </div>
    </Card>
  );
}
