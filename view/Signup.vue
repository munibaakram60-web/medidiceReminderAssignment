<template>
  <div class="signup-container">

    <!-- Background circles -->
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>

    <!-- Signup Card -->
    <div class="signup-card">

      <h1>Create Account ✨</h1>
      <p>Join us and manage your medicines easily</p>

      <!-- Full Name -->
      <div class="input-box">
        <span>👤</span>
        <input type="text" placeholder="Full Name" />
      </div>

      <!-- Email -->
      <div class="input-box">
        <span>📧</span>
        <input type="email" placeholder="Email Address" />
      </div>

      <!-- Phone -->
      <div class="input-box">
        <span>📱</span>
        <input type="text" placeholder="Phone Number" />
      </div>

      <!-- Age -->
      <div class="input-box">
        <span>🎂</span>
        <input type="number" placeholder="Age" />
      </div>

      <!-- Gender -->
      <div class="input-box">
        <span>⚧</span>
        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <!-- Password -->
      <div class="input-box">
        <span>🔒</span>
        <input type="password" placeholder="Password" />
      </div>

      <!-- Confirm Password -->
      <div class="input-box">
        <span>🔑</span>
        <input type="password" placeholder="Confirm Password" />
      </div>

      <!-- Signup Button -->
      <router-link to="/dashboard">
        <button>Create Account</button>
      </router-link>

      <!-- Login Link -->
      <p class="login-text">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>

    </div>

  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.signup-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #1e3a8a, #2563eb, #60a5fa);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Background circles */
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

/* Signup card */
.signup-card {
  width: 450px;
  padding: 35px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  color: white;
  text-align: center;
}

.signup-card h1 {
  margin-bottom: 10px;
}

.signup-card p {
  margin-bottom: 20px;
}

/* Inputs */
.input-box {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.2);
  padding: 12px;
  margin: 12px 0;
  border-radius: 12px;
}

.input-box span {
  margin-right: 10px;
}

.input-box input,
.input-box select {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: white;
}

.input-box input::placeholder {
  color: #e5e7eb;
}

select option {
  color: black;
}

/* Button */
button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 12px;
  background: white;
  color: #1e3a8a;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background: #dbeafe;
}

/* Login text */
.login-text {
  margin-top: 20px;
}

.login-text a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>