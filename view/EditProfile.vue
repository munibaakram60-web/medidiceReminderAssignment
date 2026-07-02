<template>
  <div class="main-container">

    <Sidebar title="Medicine App" />

    <div class="content">
      <div class="edit-card">
        <h1>Edit Profile</h1>

        <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" />
        </div>

        <div class="input-box">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        <div class="input-box">
          <label>Phone</label>
          <input type="text" placeholder="Enter phone number" />
        </div>

        <div class="input-box">
          <label>Age</label>
          <input type="number" placeholder="Enter age" />
        </div>

        <div class="input-box">
          <label>Gender</label>
          <select>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div class="input-box">
          <label>Blood Group</label>
          <input type="text" placeholder="Enter blood group" />
        </div>

        <div class="input-box">
          <label>Weight</label>
          <input type="text" placeholder="Enter weight" />
        </div>

        <button>Save Changes</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import Sidebar from '../component/Sidebar.vue'
</script>

<style scoped>
.main-container {
  display: flex;
  min-height: 100vh;
  background: #f4f6fb;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-card {
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
.input-box select {
  width: 100%;
  padding: 12px;
}

button {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 10px;
}
</style>