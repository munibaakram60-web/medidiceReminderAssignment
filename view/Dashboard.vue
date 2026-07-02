<script setup>
import Sidebar from '../component/Sidebar.vue'
import MedicineCard from '../component/MedicineCard.vue'

const showMessage = (medicine) => {
  alert(medicine + " taken successfully")
}
</script>

<template>
  <div class="main-container">

    <!-- Sidebar Component -->
    <Sidebar title="Medicine App" />

    <!-- Main Content -->
    <div class="content">

      <!-- Welcome Section -->
      <div class="welcome-card">
        <h1>Welcome Back, Sabeeha 👋</h1>
        <p>Stay on track with your medicines and reminders.</p>
      </div>

      <!-- Dashboard Stats -->
      <div class="stats-container">

        <div class="stat-card">
          <h2>💊 6</h2>
          <p>Total Medicines</p>
        </div>

        <div class="stat-card">
          <h2>✅ 4</h2>
          <p>Taken Today</p>
        </div>

        <div class="stat-card">
          <h2>❌ 1</h2>
          <p>Missed</p>
        </div>

        <div class="stat-card">
          <h2>⏰ 8:00 PM</h2>
          <p>Next Dose</p>
        </div>

      </div>

      <!-- Medicine Cards Component -->
      <h2 class="medicine-heading">Today's Medicines</h2>

      <MedicineCard
        medicineName="Panadol"
        medicineTime="8:00 AM"
        @medicineTaken="showMessage"
      />

      <MedicineCard
        medicineName="Vitamin C"
        medicineTime="2:00 PM"
        @medicineTaken="showMessage"
      />

    </div>

  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh;
  background: #f4f6fb;
}

.content {
  flex: 1;
  padding: 40px;
}

/* Welcome Card */
.welcome-card {
  background: linear-gradient(to right, #2563eb, #60a5fa);
  color: white;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 30px;
}

.welcome-card h1 {
  margin-bottom: 10px;
}

/* Stats */
.stats-container {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.stat-card h2 {
  color: #2563eb;
}

.medicine-heading {
  margin-bottom: 20px;
  color: #1e3a8a;
}
</style>