<template>
  <div class="medicine-card">
    <h3>{{ medicineName }}</h3>
    <p>Time: {{ medicineTime }}</p>

    <button @click="markTaken">
      Mark as Taken
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  medicineName: String,
  medicineTime: String
})

const emit = defineEmits(['medicineTaken'])

const markTaken = () => {
  emit('medicineTaken', props.medicineName)
}
</script>

<style scoped>
.medicine-card {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h3 {
  color: #1e3a8a;
  margin-bottom: 8px;
}

p {
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1e40af;
}
</style>