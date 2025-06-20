import { Tab, TabButton } from './styles';

const TabBar = ({ activeTab, onTabChange, tabs }) => {
  return (
    <Tab className="tab-bar">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          className={activeTab === tab.id ? 'active' : ''}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </Tab>
  );
};

export default TabBar;