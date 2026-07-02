 <script setup>
import Sidebar from '../component/Sidebar.vue'
</script>

 <template>
  <div class="main-container">

    <Sidebar title="Medicine App" />

    <!-- Content -->
    <div class="content">
      <div class="medicine-card">
        <h1>Add New Medicine</h1>

        <div class="input-box">
          <label>Medicine Name</label>
          <input type="text" placeholder="Enter medicine name">
        </div>

        <div class="input-box">
          <label>Dosage</label>
          <input type="text" placeholder="Enter dosage">
        </div>

        <div class="input-box">
          <label>Reminder Time</label>
          <input type="time">
        </div>

        <div class="input-box">
          <label>Date</label>
          <input type="date">
        </div>

        <div class="input-box">
          <label>Notes</label>
          <textarea placeholder="Write instructions"></textarea>
        </div>

        <router-link to="/schedule">
          <button>Save Medicine</button>
        </router-link>

      </div>
    </div>

  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh;
  background: #f4f6fb;
}

.sidebar {
  width: 250px;
  background: #1e3a8a;
  color: white;
  padding: 30px;
}

.sidebar h2 {
  margin-bottom: 30px;
}

.sidebar a {
  display: block;
  color: white;
  text-decoration: none;
  margin: 15px 0;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.medicine-card {
  width: 500px;
  background: white;
  padding: 30px;
  border-radius: 20px;
}

.input-box {
  margin-bottom: 15px;
}

.input-box label {
  display: block;
  margin-bottom: 8px;
}

.input-box input,
textarea {
  width: 100%;
  padding: 10px;
}

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
}
</style>