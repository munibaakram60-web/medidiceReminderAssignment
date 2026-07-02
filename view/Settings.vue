<script setup>
import Sidebar from '../component/Sidebar.vue'
import SettingItem from '../component/SettingItem.vue'

const handleSettingChange = () => {
  alert("Setting updated")
}
</script>

<template>
  <div class="main-container">

    <!-- Sidebar -->
    <Sidebar title="Medicine App" />

    <!-- Content -->
    <div class="content">

      <div class="settings-box">
        <h1>⚙ Settings</h1>

        <!-- Edit Profile -->
        <SettingItem
          title="✏ Edit Profile"
          type="button"
          buttonText="Edit"
          link="/edit-profile"
          @settingChanged="handleSettingChange"
        />

        <!-- Change Password -->
        <SettingItem
          title="🔑 Change Password"
          type="button"
          buttonText="Change"
          @settingChanged="handleSettingChange"
        />

        <!-- Notifications -->
        <SettingItem
          title="🔔 Notification Settings"
          type="checkbox"
          @settingChanged="handleSettingChange"
        />

        <!-- Reminder Sound -->
        <SettingItem
          title="🎵 Reminder Sound"
          type="select"
          :options="['Default', 'Bell', 'Alarm']"
          @settingChanged="handleSettingChange"
        />

        <!-- Dark Mode -->
        <SettingItem
          title="🌙 Dark Mode"
          type="checkbox"
          @settingChanged="handleSettingChange"
        />

        <!-- Language -->
        <SettingItem
          title="🌐 Language"
          type="select"
          :options="['English', 'Urdu']"
          @settingChanged="handleSettingChange"
        />

        <!-- Help -->
        <SettingItem
          title="📞 Help & Support"
          type="button"
          buttonText="Contact"
          @settingChanged="handleSettingChange"
        />

        <button class="save-btn">
          Save Settings
        </button>

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

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.settings-box {
  width: 600px;
  background: white;
  padding: 30px;
  border-radius: 20px;
}

.settings-box h1 {
  margin-bottom: 20px;
  color: #1e3a8a;
}

.save-btn {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 8px;
}
</style>