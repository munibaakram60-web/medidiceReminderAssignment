<template>
  <div class="profile-card">

    <!-- Profile Image -->
    <div class="profile-image">
      <img src="/profile.jpeg" alt="Profile" class="profile-img" />

      <!-- Edit Icon -->
      <button class="edit-icon" @click="editProfile">
        ✏️
      </button>
    </div>

    <!-- Profile Details -->
    <div class="profile-details">
      <p><strong>Full Name:</strong> {{ name }}</p>
      <p><strong>Email Address:</strong> {{ email }}</p>
      <p><strong>Phone Number:</strong> {{ phone }}</p>
      <p><strong>Age:</strong> {{ age }}</p>
      <p><strong>Gender:</strong> {{ gender }}</p>
      <p><strong>Blood Group:</strong> {{ bloodGroup }}</p>
      <p><strong>Weight:</strong> {{ weight }}</p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  name: String,
  email: String,
  phone: String,
  age: Number,
  gender: String,
  bloodGroup: String,
  weight: String
})

const emit = defineEmits(['editClicked'])

const editProfile = () => {
  emit('editClicked')
}
</script>

<style scoped>
.profile-card {
  width: 550px;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.profile-image {
  position: relative;
  width: 130px;
  margin: 0 auto 25px auto;
}

.profile-img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2563eb;
}

.edit-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #2563eb;
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

.edit-icon:hover {
  background: #1e40af;
}

.profile-details p {
  margin: 12px 0;
  font-size: 17px;
}
</style>