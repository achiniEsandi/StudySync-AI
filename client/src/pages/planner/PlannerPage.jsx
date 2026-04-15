export default function PlannerPage() {
  return (
    <section className="page-grid">
      <article className="hero-panel">
        <div>
          <p className="section-kicker">Planner</p>
          <h1>Organize study sessions with a clear, simple structure.</h1>
          <p className="hero-text">
            Create sessions, assign time, and review what is coming up next.
          </p>
        </div>
        <button type="button" className="btn btn-primary">
          Create new session
        </button>
      </article>

      <section className="planner-grid">
        <article className="surface-card">
          <p className="section-kicker">Upcoming</p>
          <h3>No sessions yet</h3>
          <p>
            When you create study sessions, they will be listed here in a clean
            timeline.
          </p>
        </article>

        <article className="surface-card">
          <p className="section-kicker">Notes</p>
          <h3>Planner state</h3>
          <p>
            This area can hold summaries, filters, or selected session details
            once planner data is connected.
          </p>
        </article>
      </section>
    </section>
  );
}
