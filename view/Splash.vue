<template>
  <div class="splash-container">

    <!-- Floating circles -->
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>

    <!-- Main Card -->
    <div class="glass-card">

      <div class="logo-section">
        <div class="icon">💊</div>
        <h1>Medicine Reminder</h1>
      </div>

      <p class="subtitle">
        Smart way to manage your medicines, reminders, and health records.
      </p>

      <div class="features">
        <p>⏰ Timely Reminders</p>
        <p>📅 Daily Schedule</p>
        <p>📊 Health Tracking</p>
      </div>

      <router-link to="/login">
        <button>Start Journey →</button>
      </router-link>

    </div>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.splash-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3a8a, #2563eb, #60a5fa);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Floating background circles */
.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
}

.circle1 {
  width: 250px;
  height: 250px;
  top: 10%;
  left: 15%;
}

.circle2 {
  width: 180px;
  height: 180px;
  bottom: 15%;
  right: 20%;
}

/* Glass Card */
.glass-card {
  width: 420px;
  padding: 40px;
  text-align: center;
  background: rgba(255,255,255,0.15);
  border-radius: 25px;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  color: white;
}

.logo-section {
  margin-bottom: 20px;
}

.icon {
  font-size: 70px;
  margin-bottom: 15px;
}

.logo-section h1 {
  font-size: 36px;
}

.subtitle {
  font-size: 17px;
  margin: 20px 0;
  line-height: 1.6;
}

.features {
  margin: 25px 0;
}

.features p {
  margin: 12px 0;
  font-size: 18px;
}

button {
  margin-top: 20px;
  padding: 14px 25px;
  border: none;
  border-radius: 12px;
  background: white;
  color: #1e3a8a;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #dbeafe;
}
</style>