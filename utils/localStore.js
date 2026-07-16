const fs = require('fs')
const path = require('path')
const { Low } = require('lowdb')
const { JSONFile } = require('lowdb/node')

const file = path.join(__dirname, '..', 'data', 'db.json')

const adapter = new JSONFile(file)
const db = new Low(adapter, { users: [], medicines: [] })

const initStore = async () => {
  await db.read()
  db.data ||= { users: [], medicines: [] }
  await db.write()
}

const getUsers = () => db.data.users || []
const getMedicines = () => db.data.medicines || []

const saveUser = async (user) => {
  db.data.users.push(user)
  await db.write()
  return user
}

const findUserByEmail = async (email) => {
  await db.read()
  return (db.data.users || []).find((user) => user.email === email) || null
}

const findUserById = async (id) => {
  await db.read()
  return (db.data.users || []).find((user) => user.id === id || user._id === id) || null
}

const updateUser = async (id, updates) => {
  await db.read()
  const user = (db.data.users || []).find((item) => item.id === id || item._id === id)
  if (!user) return null
  Object.assign(user, updates)
  await db.write()
  return user
}

const addMedicine = async (medicine) => {
  db.data.medicines.push(medicine)
  await db.write()
  return medicine
}

const listMedicinesForUser = async (userId) => {
  await db.read()
  return (db.data.medicines || []).filter((item) => item.user === userId)
}

const updateMedicine = async (id, updates) => {
  await db.read()
  const medicine = (db.data.medicines || []).find((item) => item.id === id || item._id === id)
  if (!medicine) return null
  Object.assign(medicine, updates)
  await db.write()
  return medicine
}

const deleteMedicine = async (id) => {
  await db.read()
  const index = (db.data.medicines || []).findIndex((item) => item.id === id || item._id === id)
  if (index === -1) return false
  db.data.medicines.splice(index, 1)
  await db.write()
  return true
}

module.exports = {
  initStore,
  saveUser,
  findUserByEmail,
  findUserById,
  updateUser,
  addMedicine,
  listMedicinesForUser,
  updateMedicine,
  deleteMedicine,
}
