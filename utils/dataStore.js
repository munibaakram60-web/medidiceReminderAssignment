const User = require('../models/User')
const Medicine = require('../models/Medicine')
const localStore = require('./localStore')
const { isUsingLocalFallback } = require('../config/db')

const createUser = async (userData) => {
  if (isUsingLocalFallback()) {
    return localStore.saveUser(userData)
  }

  const user = new User(userData)
  await user.save()
  return user
}

const findUserByEmail = async (email) => {
  if (isUsingLocalFallback()) {
    return localStore.findUserByEmail(email)
  }

  return User.findOne({ email })
}

const findUserById = async (id) => {
  if (isUsingLocalFallback()) {
    return localStore.findUserById(id)
  }

  return User.findById(id)
}

const updateUser = async (id, updates) => {
  if (isUsingLocalFallback()) {
    return localStore.updateUser(id, updates)
  }

  return User.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
}

const createMedicine = async (medicineData) => {
  if (isUsingLocalFallback()) {
    return localStore.addMedicine(medicineData)
  }

  const medicine = new Medicine(medicineData)
  await medicine.save()
  return medicine
}

const listMedicinesForUser = async (userId) => {
  if (isUsingLocalFallback()) {
    return localStore.listMedicinesForUser(userId)
  }

  return Medicine.find({ user: userId }).sort({ createdAt: -1 })
}

const updateMedicine = async (id, updates, userId) => {
  if (isUsingLocalFallback()) {
    return localStore.updateMedicine(id, updates)
  }

  return Medicine.findOneAndUpdate({ _id: id, user: userId }, updates, { new: true, runValidators: true })
}

const deleteMedicine = async (id, userId) => {
  if (isUsingLocalFallback()) {
    return localStore.deleteMedicine(id)
  }

  return Medicine.findOneAndDelete({ _id: id, user: userId })
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateUser,
  createMedicine,
  listMedicinesForUser,
  updateMedicine,
  deleteMedicine,
}
