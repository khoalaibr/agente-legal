import { clsx } from 'clsx';

// Definimos los tipos para las pestañas
type Tab = {
  name: string;
  count: number;
};

type CaseTabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabName: string) => void;
};

export function CaseTabs({ tabs, activeTab, onTabClick }: CaseTabsProps) {
  return (
    <div className="mb-6 border-b border-secondary-200">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabClick(tab.name)}
            className={clsx(
              'py-2 px-4 text-sm font-medium whitespace-nowrap',
              {
                'border-b-2 border-accent-600 text-accent-600': activeTab === tab.name,
                'border-b-2 border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300': activeTab !== tab.name,
              }
            )}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
}
