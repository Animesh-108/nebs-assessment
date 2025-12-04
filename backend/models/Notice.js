const mongoose = require('mongoose');

const NoticeSchema = new mongoose.Schema({
  targetDepartment: { type: String, required: true },
  title: { type: String, required: true },
  employeeId: { type: String, required: true },
  employeeName: { type: String, required: true },
  position: { type: String, required: true },
  noticeType: { 
    type: String, 
    required: true,
    enum: [
      'General / Company-Wide',
      'Warning / Disciplinary',
      'Performance Improvement',
      'Appreciation / Recognition',
      'Holiday & Event',
      'HR & Policy Update',
      'Finance & Payroll',
      'IT / System Maintenance',
      'Department / Team',
      'Emergency / Urgent',
      'Attendance / Leave Issue',
      'Contract / Role Update',
      'Advisory / Personal Reminder'
    ] 
  },
  publishDate: { type: Date, required: true },
  body: { type: String },
  status: { 
    type: String, 
    enum: ['Published', 'Draft', 'Unpublished'], 
    default: 'Published' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Notice', NoticeSchema);
