const { createMedicine, listMedicinesForUser, updateMedicine: updateStoredMedicine, deleteMedicine: deleteStoredMedicine } = require('../utils/dataStore')

const addMedicine = async (req, res) => {
    try {
        const { name, medicineName, dosage, time, reminderTime, frequency, startDate, endDate, date, notes } = req.body
        const medicineData = {
            medicineName: medicineName || name || 'Medicine',
            dosage: dosage || '',
            time: time || reminderTime || '',
            frequency: frequency || '',
            startDate: startDate || date || new Date(),
            endDate: endDate || date || new Date(),
            notes: notes || '',
            user: req.user?._id || req.user?.id,
        }

        const medicine = await createMedicine(medicineData)
        return res.status(201).json({ success: true, message: 'Medicine Added Successfully', medicine })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const getMedicines = async (req, res) => {
    try {
        const medicines = await listMedicinesForUser(req.user?._id || req.user?.id)
        return res.status(200).json({ success: true, medicines })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const updateMedicine = async (req, res) => {
    try {
        const userId = req.user?._id || req.user?.id
        const medicine = await updateStoredMedicine(req.params.id, req.body, userId)
        if (!medicine) {
            return res.status(404).json({ success: false, message: 'Medicine not found' })
        }
        return res.status(200).json({ success: true, message: 'Medicine Updated Successfully', medicine })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const deleteMedicine = async (req, res) => {
    try {
        const deleted = await deleteStoredMedicine(req.params.id, req.user?._id || req.user?.id)
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Medicine not found' })
        }
        return res.status(200).json({ success: true, message: 'Medicine Deleted Successfully' })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = { addMedicine, getMedicines, updateMedicine, deleteMedicine }