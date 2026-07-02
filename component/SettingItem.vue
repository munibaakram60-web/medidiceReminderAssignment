<template>
  <div class="setting-item">

    <label>{{ title }}</label>

    <!-- Button -->
    <button
      v-if="type === 'button'"
      @click="handleClick"
    >
      {{ buttonText }}
    </button>

    <!-- Checkbox -->
    <input
      v-if="type === 'checkbox'"
      type="checkbox"
      @change="sendEvent"
    />

    <!-- Select -->
    <select
      v-if="type === 'select'"
      @change="sendEvent"
    >
      <option
        v-for="option in options"
        :key="option"
      >
        {{ option }}
      </option>
    </select>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: String,
  type: String,
  buttonText: String,
  link: String,
  options: Array
})

const emit = defineEmits(['settingChanged'])

const handleClick = () => {
  emit('settingChanged')

  // popup force show
  alert("Setting updated successfully")

  // after popup close, navigate
  if (props.link) {
    router.push(props.link)
  }
}

const sendEvent = () => {
  emit('settingChanged')
  alert("Setting updated successfully")
}
</script>

<style scoped>
.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

label {
  font-size: 17px;
}

select {
  padding: 8px;
  border-radius: 8px;
}

button {
  padding: 8px 15px;
  border: none;
  background: #2563eb;
  color: white;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: #1e40af;
}
</style>