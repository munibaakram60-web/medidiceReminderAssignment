<script setup>
import Sidebar from '../component/Sidebar.vue'
import ProfileCard from '../component/ProfileCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToEditPage = () => {
  router.push('/edit-profile')
}
</script>

<template>
  <div class="main-container">
    
    <!-- Sidebar -->
    <Sidebar title="Medicine App" />

    <!-- Main Content -->
    <div class="content">

      <!-- Header -->
      <div class="profile-header">
        <h1>My Profile</h1>
      </div>

      <!-- Profile Card Component -->
      <ProfileCard
        name="Sabeeha Naveed"
        email="sabeeha@gmail.com"
        phone="03001234567"
        :age="22"
        gender="Female"
        bloodGroup="B+"
        weight="55kg"
        @editClicked="goToEditPage"
      />

    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  display: flex;
  min-height: 100vh;
  background: #f4f6fb;
}

.content {
  flex: 1;
  padding: 40px;
}

.profile-header {
  margin-bottom: 20px;
}

.profile-header h1 {
  color: #1e3a8a;
}
</style>