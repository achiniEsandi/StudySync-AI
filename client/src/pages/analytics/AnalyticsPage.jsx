import PerformanceChart from '../../components/charts/PerformanceChart.jsx';

export default function AnalyticsPage() {
  return (
    <section className="page-grid">
      <article className="hero-panel">
        <div>
          <p className="section-kicker">Analytics</p>
          <h1>Review progress and prediction results in one place.</h1>
          <p className="hero-text">
            This section stays intentionally empty until real study and
            performance data is available.
          </p>
        </div>
      </article>

      <section className="analytics-grid">
        <PerformanceChart />

        <article className="surface-card">
          <p className="section-kicker">Summary</p>
          <h3>No analytics yet</h3>
          <p>
            Once records are added, this panel can show highlights, weak areas,
            and prediction summaries.
          </p>
        </article>
      </section>
    </section>
  );
}
