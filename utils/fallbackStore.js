const users = []
const medicines = []

const addFallbackUser = (user) => {
  users.push(user)
  return user
}

const findFallbackUserByEmail = (email) => {
  return users.find((user) => user.email === email)
}

const findFallbackUserById = (id) => {
  return users.find((user) => user.id === id || user._id === id)
}

const updateFallbackUser = (id, updates) => {
  const user = findFallbackUserById(id)
  if (!user) return null
  Object.assign(user, updates)
  return user
}

const addFallbackMedicine = (medicine) => {
  medicines.push(medicine)
  return medicine
}

const getFallbackMedicinesForUser = (userId) => {
  return medicines.filter((medicine) => medicine.user === userId)
}

const updateFallbackMedicine = (id, updates) => {
  const medicine = medicines.find((item) => item.id === id || item._id === id)
  if (!medicine) return null
  Object.assign(medicine, updates)
  return medicine
}

const deleteFallbackMedicine = (id) => {
  const index = medicines.findIndex((item) => item.id === id || item._id === id)
  if (index === -1) return false
  medicines.splice(index, 1)
  return true
}

module.exports = {
  addFallbackUser,
  findFallbackUserByEmail,
  findFallbackUserById,
  updateFallbackUser,
  addFallbackMedicine,
  getFallbackMedicinesForUser,
  updateFallbackMedicine,
  deleteFallbackMedicine,
}
