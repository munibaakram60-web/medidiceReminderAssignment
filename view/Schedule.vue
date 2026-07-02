<script setup>
import Sidebar from '../component/Sidebar.vue'
import MedicineCard from '../component/MedicineCard.vue'

const markDone = (medicine) => {
  alert(medicine + " marked as taken")
}
</script>

<template>
  <div class="main-container">

    <Sidebar title="Medicine App" />

    <div class="content">
      <h1>Today's Schedule</h1>

      <MedicineCard
        medicineName="Panadol"
        medicineTime="8:00 AM"
        @medicineTaken="markDone"
      />

      <MedicineCard
        medicineName="Vitamin C"
        medicineTime="2:00 PM"
        @medicineTaken="markDone"
      />

      <MedicineCard
        medicineName="Calcium"
        medicineTime="9:00 PM"
        @medicineTaken="markDone"
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
</style>