import { useEffect, useState } from "react";

function Settings() {
  // Lazy initialization for localStorage preferences
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [compactMode, setCompactMode] = useState(() => {
    return localStorage.getItem("compactMode") === "true";
  });

  const [animations, setAnimations] = useState(() => {
    return localStorage.getItem("animations") !== "false";
  });

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") !== "false";
  });

  const [taskCount, setTaskCount] = useState(0);

  // Function to safely check and fetch task count
  const updateTaskCount = () => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        setTaskCount(Array.isArray(tasks) ? tasks.length : 0);
      } else {
        setTaskCount(0);
      }
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      setTaskCount(0);
    }
  };

  useEffect(() => {
    updateTaskCount();

    // Listen to storage changes across tabs or custom app updates
    window.addEventListener("storage", updateTaskCount);
    return () => window.removeEventListener("storage", updateTaskCount);
  }, []);

  // Sync Dark Mode state to localStorage & body class
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  // Sync Compact Mode state to localStorage & body class
  useEffect(() => {
    localStorage.setItem("compactMode", compactMode);
    document.body.classList.toggle("compact-mode", compactMode);
  }, [compactMode]);

  // Sync Animations state to localStorage & body class
  useEffect(() => {
    localStorage.setItem("animations", animations);
    document.body.classList.toggle("no-animations", !animations);
  }, [animations]);

  // Sync Notifications state to localStorage
  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  function clearTasks() {
    const confirmed = window.confirm(
      "Are you sure you want to delete ALL tasks?"
    );

    if (!confirmed) return;

    localStorage.removeItem("tasks");
    setTaskCount(0);
    alert("All tasks have been deleted.");
  }

  function resetSettings() {
    const confirmed = window.confirm("Reset all application settings?");

    if (!confirmed) return;

    setDarkMode(false);
    setCompactMode(false);
    setAnimations(true);
    setNotifications(true);

    alert("Settings have been reset successfully.");
  }

  return (
    <div className="page settings-page">
      {/* TITLE */}
      <div className="settings-header">
        <span>⚙️</span>
        <div>
          <h1>Settings</h1>
          <p>Customize your Elias App experience.</p>
        </div>
      </div>

      {/* APPEARANCE */}
      <div className="settings-section">
        <h2>🎨 Appearance</h2>
        <p className="settings-description">
          Customize how the application looks.
        </p>

        {/* DARK MODE */}
        <div className="setting-row">
          <div className="setting-icon">{darkMode ? "🌙" : "☀️"}</div>
          <div className="setting-info">
            <h3>Dark Mode</h3>
            <p>Use a darker appearance for the application.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* COMPACT MODE */}
        <div className="setting-row">
          <div className="setting-icon">📱</div>
          <div className="setting-info">
            <h3>Compact Mode</h3>
            <p>Reduce spacing to show more content.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={compactMode}
              onChange={(e) => setCompactMode(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* ANIMATIONS */}
        <div className="setting-row">
          <div className="setting-icon">✨</div>
          <div className="setting-info">
            <h3>Animations</h3>
            <p>Enable smooth application animations.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={animations}
              onChange={(e) => setAnimations(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <div className="settings-section">
        <h2>🔔 Notifications</h2>
        <p className="settings-description">
          Manage notification preferences.
        </p>
        <div className="setting-row">
          <div className="setting-icon">🔔</div>
          <div className="setting-info">
            <h3>Notifications</h3>
            <p>Allow application notifications.</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* DATA */}
      <div className="settings-section">
        <h2>💾 Data Management</h2>
        <p className="settings-description">
          Manage the tasks stored in your browser.
        </p>

        <div className="data-info">
          <div>
            <span>📋</span>
            <div>
              <strong>{taskCount}</strong>
              <small>Saved Tasks</small>
            </div>
          </div>
        </div>

        <button className="danger-button" onClick={clearTasks}>
          🗑️ Clear All Tasks
        </button>
      </div>

      {/* RESET */}
      <div className="settings-section">
        <h2>🔄 Reset</h2>
        <p className="settings-description">
          Restore application settings to default.
        </p>

        <button className="reset-button" onClick={resetSettings}>
          🔄 Reset Settings
        </button>
      </div>

      {/* APP INFORMATION */}
      <div className="settings-section app-info">
        <h2>ℹ️ Application Information</h2>

        <div className="info-row">
          <span>Application</span>
          <strong>Elias To-Do App</strong>
        </div>

        <div className="info-row">
          <span>Version</span>
          <strong>1.0.0</strong>
        </div>

        <div className="info-row">
          <span>Technology</span>
          <strong>React + Vite</strong>
        </div>

        <div className="info-row">
          <span>Storage</span>
          <strong>Local Storage</strong>
        </div>
      </div>
    </div>
  );
}

export default Settings;