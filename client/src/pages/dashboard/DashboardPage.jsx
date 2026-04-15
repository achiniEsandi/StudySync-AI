export default function DashboardPage() {
  return (
    <section className="page-grid">
      <article className="hero-panel">
        <div>
          <p className="section-kicker">Dashboard</p>
          <h1>A quiet overview of your study workflow.</h1>
          <p className="hero-text">
            Use the dashboard to move between planning, tracking, and
            analytics as your data becomes available.
          </p>
        </div>
      </article>

      <section className="content-grid">
        <article className="surface-card">
          <p className="section-kicker">Planner</p>
          <h3>Study sessions</h3>
          <p>
            Your upcoming sessions will appear here once the planner is
            connected to real data.
          </p>
        </article>

        <article className="surface-card">
          <p className="section-kicker">Analytics</p>
          <h3>Performance insights</h3>
          <p>
            Predictions, trends, and summaries will appear here after records
            are added.
          </p>
        </article>
      </section>
    </section>
  );
}
