<template>
  <div class="login-container">

    <!-- Background circles -->
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>

    <!-- Login Card -->
    <div class="login-card">

      <h1>Welcome Back 👋</h1>
      <p>Login to manage your medicines and stay healthy</p>

      <!-- Email -->
      <div class="input-box">
        <span>📧</span>
        <input type="email" placeholder="Enter your email" />
      </div>

      <!-- Password -->
      <div class="input-box">
        <span>🔒</span>
        <input type="password" placeholder="Enter your password" />
      </div>

      <!-- Forgot Password -->
      <div class="forgot">
        <router-link to="/forgot-password">Forgot Password?</router-link>
      </div>

      <!-- Login Button -->
      <router-link to="/dashboard">
        <button>Login</button>
      </router-link>

      <!-- Signup -->
      <p class="signup-text">
        Don't have an account?
        <router-link to="/signup">Sign Up</router-link>
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

.login-container {
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

/* Login card */
.login-card {
  width: 420px;
  padding: 40px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(15px);
  border-radius: 25px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
  color: white;
  text-align: center;
}

.login-card h1 {
  margin-bottom: 10px;
}

.login-card p {
  margin-bottom: 20px;
}

/* Input */
.input-box {
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.2);
  padding: 12px;
  margin: 15px 0;
  border-radius: 12px;
}

.input-box span {
  margin-right: 10px;
}

.input-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: white;
}

.input-box input::placeholder {
  color: #e5e7eb;
}

/* Forgot password */
.forgot {
  text-align: right;
  margin-bottom: 20px;
}

.forgot a {
  color: white;
  text-decoration: none;
  font-size: 14px;
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
}

button:hover {
  background: #dbeafe;
}

/* Signup */
.signup-text {
  margin-top: 20px;
}

.signup-text a {
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>