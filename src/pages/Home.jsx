
function Home() {
  return (
    <div className="page home-page">

      <div className="home-content">

        <div className="home-icon">
          🚀
        </div>

        <h1>
          Welcome to <span>Elias Todo</span>
        </h1>

        <p className="home-subtitle">
          Organize your tasks. Manage your time.
          <br />
          Get things done.
        </p>

        <div className="home-cards">

          <div className="home-card">
            <div className="card-icon">
              ✅
            </div>

            <h3>
              Manage Tasks
            </h3>

            <p>
              Easily create, complete and
              delete your daily tasks.
            </p>
          </div>


          <div className="home-card">
            <div className="card-icon">
              🎯
            </div>

            <h3>
              Set Priorities
            </h3>

            <p>
              Mark your tasks as High,
              Medium or Low priority.
            </p>
          </div>


          <div className="home-card">
            <div className="card-icon">
              💾
            </div>

            <h3>
              Save Automatically
            </h3>

            <p>
              Your tasks are automatically
              saved in your browser.
            </p>
          </div>

        </div>


        <div className="home-message">

          <h2>
            🚀 Ready to get started?
          </h2>

          <p>
            Click the <strong>To-Do</strong> button
            above and start organizing your day!
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;

