import { subjectTabs } from '../../utils/subjectConstants.js';

export default function SubjectTabNav({ activeTab, onChange }) {
  return (
    <nav className="subject-tab-nav">
      {subjectTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          className={`subject-tab-button${activeTab === tab ? ' subject-tab-active' : ''}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

