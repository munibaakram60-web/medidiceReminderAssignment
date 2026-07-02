<template>
  <div class="sidebar">
    <h2>{{ title }}</h2>

    <router-link to="/dashboard">🏠 Dashboard</router-link>
    <router-link to="/add-medicine">💊 Add Medicine</router-link>
    <router-link to="/schedule">⏰ Schedule</router-link>
    <router-link to="/profile">👤 Profile</router-link>
    <router-link to="/settings">⚙ Settings</router-link>
    <router-link to="/">🚪 Logout</router-link>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #1e3a8a;
  color: white;
  padding: 30px;
  min-height: 100vh;
}

.sidebar h2 {
  margin-bottom: 30px;
}

.sidebar a {
  display: block;
  color: white;
  text-decoration: none;
  margin: 15px 0;
  padding: 10px;
  border-radius: 8px;
}

.sidebar a:hover {
  background: #2563eb;
}
</style>