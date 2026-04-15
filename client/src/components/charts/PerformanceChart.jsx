export default function PerformanceChart() {
  return (
    <section className="chart-card">
      <div className="chart-header">
        <div>
          <p className="section-kicker">Performance chart</p>
          <h3>Prediction trend</h3>
        </div>
      </div>

      <div className="empty-chart">
        <div className="empty-chart-grid" />
        <p>No analytics data yet.</p>
        <span>Performance trends will appear here once records are available.</span>
      </div>
    </section>
  );
}
