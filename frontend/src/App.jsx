import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, Users, CreditCard, Receipt, UserCheck, FileText, 
  Briefcase, File, Bell, LogOut, User, Plus, Calendar, Eye, Edit, 
  MoreVertical, CheckCircle, X, ChevronDown, ChevronLeft, ChevronRight, 
  Upload, Paperclip, Search, Menu, Square, CheckSquare
} from 'lucide-react';

// --- ASSET CONFIGURATION ---
const logoImg = "/Logo.png";
const profileImg = "/Animesh Dey.png";

// --- API CONFIGURATION ---
const API_BASE_URL = '/api';

// --- COMPONENTS ---

const Sidebar = ({ activeTab, setActiveTab, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'employee', icon: Users, label: 'Employee', hasSubmenu: true },
    { id: 'payroll', icon: CreditCard, label: 'Payroll' },
    { id: 'payslip', icon: Receipt, label: 'Pay Slip' },
    { id: 'attendance', icon: UserCheck, label: 'Attendance' },
    { id: 'request', icon: FileText, label: 'Request Center' },
    { id: 'career', icon: Briefcase, label: 'Career Database', hasSubmenu: true },
    { id: 'docs', icon: File, label: 'Document manager' },
    { id: 'notice', icon: Bell, label: 'Notice Board' },
    { id: 'activity', icon: LogOut, label: 'Activity Log' },
    { id: 'exit', icon: LogOut, label: 'Exit Interview' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-50 w-[250px] bg-white h-screen flex flex-col border-r border-gray-100 
        transform transition-transform duration-300 ease-in-out flex-shrink-0 font-sans
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        {/* Logo Section */}
        <div className="p-6 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <img 
               src={logoImg} 
               alt="Nebs-IT" 
               className="h-10 w-auto object-contain"
               onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextSibling.style.display = 'block';
               }}
             />
             <span className="hidden text-2xl font-black text-gray-900 tracking-tight">Nebs-IT</span>
          </div>
          <button onClick={toggleSidebar} className="md:hidden text-gray-500 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
  
        <div className="flex-1 overflow-y-auto px-0 space-y-0.5 custom-scrollbar">
          {menuItems.map((item) => (
            <div key={item.id} className="relative">
              <button
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 768) toggleSidebar();
                }}
                className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === item.id 
                    ? 'bg-[#FFF7ED] text-gray-900' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} className={activeTab === item.id ? "text-[#F97316]" : "text-gray-400"} />
                  {item.label}
                </div>
                {item.hasSubmenu && <ChevronDown size={14} className="text-gray-400" />}
                
                {activeTab === item.id && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F97316] rounded-l-full"></div>
                )}
              </button>
              
              {item.id === 'employee' && (
                <div className="pl-[52px] pr-4 space-y-2 py-2 bg-white">
                  <div className="text-[13px] font-semibold text-gray-800 cursor-pointer">Employee Database</div>
                  <div className="text-[13px] text-gray-500 cursor-pointer hover:text-[#F97316]">Add New Employee</div>
                  <div className="text-[13px] text-gray-500 cursor-pointer hover:text-[#F97316]">Performance Report</div>
                  <div className="text-[13px] text-gray-500 cursor-pointer hover:text-[#F97316]">Performance History</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Header = ({ toggleSidebar }) => (
  <header className="bg-white h-[72px] border-b border-gray-100 flex items-center justify-between px-4 md:px-8 flex-shrink-0 sticky top-0 z-20">
    <div className="flex items-center gap-3">
      <button onClick={toggleSidebar} className="md:hidden text-gray-600 p-2 hover:bg-gray-50 rounded-lg">
        <Menu size={24} />
      </button>
      
      <div>
        <h1 className="text-gray-800 font-bold text-base">Good Afternoon Asif</h1>
        <p className="text-xs text-gray-500 mt-0.5">13 June, 2026</p>
      </div>
    </div>

    <div className="flex items-center gap-4 md:gap-6">
      <div className="relative cursor-pointer">
        <Bell className="text-gray-400 hover:text-gray-600 transition-colors" size={20} />
        <span className="absolute -top-1.5 -right-0.5 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
      </div>
      <div className="h-6 w-[1px] bg-gray-200 hidden md:block"></div>
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold text-gray-900">Asif Riaj</p>
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Hr</p>
        </div>
        <img 
          src={profileImg} 
          alt="Profile" 
          className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white shadow-sm object-cover bg-gray-100"
          onError={(e) => { e.target.src = "#"; }}
        />
      </div>
    </div>
  </header>
);

// --- CUSTOM NOTICE TYPE DROPDOWN ---
const NoticeTypeDropdown = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = [
    'Warning / Disciplinary',
    'Performance Improvement',
    'Appreciation / Recognition',
    'Attendance / Leave Issue',
    'Payroll / Compensation',
    'Contract / Role Update',
    'Advisory / Personal Reminder'
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 border border-gray-200 rounded text-sm text-gray-600 flex items-center justify-between cursor-pointer bg-white"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>
          {value || "Select Notice Type"}
        </span>
        <ChevronDown size={16} className="text-gray-400" />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg py-2 animate-fade-in-down max-h-[300px] overflow-y-auto">
          {options.map((option) => (
            <div 
              key={option}
              onClick={() => handleSelect(option)}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="text-gray-400">
                {value === option ? (
                  <CheckSquare size={18} className="text-blue-500" />
                ) : (
                  <Square size={18} />
                )}
              </div>
              <span className={`text-sm ${value === option ? "text-blue-600 font-medium" : "text-gray-600"}`}>
                {option}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CreateNoticeForm = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    targetDepartment: 'Individual',
    title: '',
    employeeId: '',
    employeeName: '',
    position: '',
    noticeType: '',
    publishDate: '',
    body: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-200 m-1 flex flex-col min-h-[calc(100vh-140px)]">
      <div className="px-4 md:px-8 py-5 border-b border-gray-100 flex items-center gap-4">
        <button onClick={onCancel} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600 transition-colors">
          <ChevronLeft size={18} />
        </button>
        <h2 className="text-lg font-bold text-gray-800">Create a Notice</h2>
      </div>

      <div className="p-4 md:p-8 max-w-[1200px]">
        <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-semibold text-gray-800 mb-6 bg-[#F9FAFB] p-3 rounded-md border-l-[3px] border-transparent">
            Please fill in the details below
          </h3>

          <div className="space-y-6">
            {/* Target Department */}
            <div className="bg-[#F4F7FE] p-4 md:p-6 rounded-lg border border-[#F4F7FE]">
              <label className="block text-xs font-bold text-gray-700 mb-2">
                <span className="text-red-500 mr-1">*</span>Target Department(s) or Individual
              </label>
              <div className="relative">
                <select 
                  className="w-full h-10 px-3 bg-white border border-blue-100 rounded text-sm text-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-200 appearance-none cursor-pointer"
                  value={formData.targetDepartment}
                  onChange={(e) => handleChange('targetDepartment', e.target.value)}
                >
                  <option>Individual</option>
                  <option>All Department</option>
                  <option>Sales Team</option>
                  <option>Finance</option>
                  <option>HR</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 text-blue-400 pointer-events-none" size={16}/>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                <span className="text-red-500 mr-1">*</span>Notice Title
              </label>
              <input 
                type="text" 
                placeholder="Write the Title of Notice"
                className="w-full h-10 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-400 placeholder-gray-400 transition-colors"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
              />
            </div>

            {/* Employee Details - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>Select Employee ID
                </label>
                <div className="relative">
                  <select 
                    className="w-full h-10 px-3 border border-gray-200 rounded text-sm text-gray-500 focus:outline-none appearance-none bg-white"
                    value={formData.employeeId}
                    onChange={(e) => handleChange('employeeId', e.target.value)}
                  >
                    <option value="">Select employee designation</option>
                    <option value="EMP-001">EMP-001</option>
                    <option value="EMP-002">EMP-002</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={16}/>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>Employee Name
                </label>
                <input 
                  type="text" 
                  placeholder="Enter employee full name"
                  className="w-full h-10 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-400 placeholder-gray-400"
                  value={formData.employeeName}
                  onChange={(e) => handleChange('employeeName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>Position
                </label>
                <input 
                  type="text" 
                  placeholder="Select employee department"
                  className="w-full h-10 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-400 placeholder-gray-400"
                  value={formData.position}
                  onChange={(e) => handleChange('position', e.target.value)}
                />
              </div>
            </div>

            {/* Type & Date - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>Notice Type
                </label>
                {/* Custom Dropdown used here */}
                <NoticeTypeDropdown 
                  value={formData.noticeType}
                  onChange={(val) => handleChange('noticeType', val)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  <span className="text-red-500 mr-1">*</span>Publish Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full h-10 px-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue-400 placeholder-gray-400 text-gray-600"
                    value={formData.publishDate}
                    onChange={(e) => handleChange('publishDate', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Body */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Notice Body
              </label>
              <textarea 
                placeholder="Write the details about notice"
                className="w-full p-3 border border-gray-200 rounded text-sm h-32 focus:outline-none focus:border-blue-400 resize-none placeholder-gray-400"
                value={formData.body}
                onChange={(e) => handleChange('body', e.target.value)}
              ></textarea>
            </div>

            {/* Upload Area */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Upload Attachments (optional)
              </label>
              <div className="border border-dashed border-[#10B981] bg-[#F0FDF4] rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#DCFCE7] transition-colors">
                <div className="mb-2 text-[#10B981]">
                  <Upload size={24} />
                </div>
                <p className="text-xs text-gray-700">
                  <span className="font-bold text-[#10B981]">Upload</span> nominee profile image or drag and drop.
                </p>
                <p className="text-[10px] text-gray-400 mt-1">Accepted File Type: jpg, png</p>
              </div>
              
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-[#F3F4F6] rounded-full border border-gray-200 max-w-full overflow-hidden">
                <Paperclip size={14} className="text-gray-500 flex-shrink-0"/>
                <span className="text-xs text-gray-600 font-medium truncate">Policy_Document.pdf</span>
                <button className="ml-1 text-red-400 hover:text-red-600 bg-white rounded-full p-0.5 shadow-sm flex-shrink-0">
                  <X size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-4 md:px-8 py-5 border-t border-gray-100 flex flex-col-reverse sm:flex-row justify-end gap-3 mt-auto">
        <button onClick={onCancel} className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto">
          Cancel
        </button>
        <button className="px-6 py-2 rounded-full border border-blue-400 text-blue-500 font-medium text-sm hover:bg-blue-50 transition-colors w-full sm:w-auto">
          Save as Draft
        </button>
        <button onClick={() => onSave(formData)} className="px-6 py-2 rounded-full bg-[#F97316] text-white font-medium text-sm hover:bg-orange-600 shadow-md flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
          <span className="text-xs">✓</span> Publish Notice
        </button>
      </div>
    </div>
  );
};

const NoticeList = ({ notices, onCreateClick, onToggleStatus }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Notice Management</h2>
          <div className="flex gap-3 mt-1.5 text-xs">
            <span className="text-[#10B981] font-medium">Active Notices: {notices.filter(n => n.status === 'Published').length}</span>
            <span className="text-gray-300">|</span>
            <span className="text-orange-400 font-medium">Draft Notice: {notices.filter(n => n.status === 'Draft').length}</span>
          </div>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button 
            onClick={onCreateClick}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F97316] text-white rounded hover:bg-orange-600 font-medium text-sm transition-colors shadow-sm whitespace-nowrap"
          >
            <Plus size={16} /> Create Notice
          </button>
          <button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 border border-orange-200 text-[#F97316] bg-[#FFFBF7] rounded hover:bg-orange-50 font-medium text-sm transition-colors whitespace-nowrap">
             <Edit size={14} /> All Draft Notice
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3">
        <span className="text-sm font-bold text-gray-700 mr-1 hidden md:inline">Filter by:</span>
        
        <div className="relative flex-1 min-w-[140px]">
          <button className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 rounded text-xs text-gray-600 hover:border-gray-300">
            <span className="truncate">Departments or individuals</span>
            <ChevronDown size={14} className="text-gray-400 flex-shrink-0"/>
          </button>
        </div>
        <input 
          placeholder="Employee Id or Name" 
          className="flex-1 min-w-[140px] px-3 py-2 bg-white border border-gray-200 rounded text-xs outline-none text-gray-600 placeholder-gray-400 hover:border-gray-300"
        />
        <div className="relative flex-1 min-w-[100px]">
          <button className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 rounded text-xs text-gray-600 hover:border-gray-300">
            Status
            <ChevronDown size={14} className="text-gray-400 flex-shrink-0"/>
          </button>
        </div>
        <div className="relative flex-1 min-w-[120px]">
          <button className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 rounded text-xs text-gray-600 hover:border-gray-300">
            Published on
            <Calendar size={14} className="text-gray-400 flex-shrink-0"/>
          </button>
        </div>
        
        <button className="text-blue-500 text-xs font-semibold px-2 hover:underline whitespace-nowrap">Reset Filters</button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="bg-[#F8FAFC] border-b border-gray-200">
                <tr>
                <th className="p-4 w-14 text-center">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-0 cursor-pointer"/>
                </th>
                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-wide">Title</th>
                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-wide">Notice Type</th>
                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-wide">Departments/Individual</th>
                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-wide">Published On</th>
                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-wide">Status</th>
                <th className="p-4 text-xs font-bold text-gray-600 uppercase tracking-wide text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {notices.length === 0 ? (
                    <tr>
                        <td colSpan="7" className="p-8 text-center text-gray-400 text-sm">
                            No notices found. Create one to get started.
                        </td>
                    </tr>
                ) : (
                    notices.map((notice) => (
                    <tr key={notice.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="p-4 text-center">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-0 cursor-pointer"/>
                        </td>
                        <td className="p-4">
                        <p className="font-semibold text-gray-800 text-[13px] line-clamp-1 max-w-[220px]" title={notice.title}>{notice.title}</p>
                        </td>
                        <td className="p-4">
                        <span className="text-gray-500 text-[13px]">{notice.noticeType}</span>
                        </td>
                        <td className="p-4">
                        <span className={`text-[12px] font-medium ${
                            notice.targetDepartment === 'All Department' ? 'text-blue-600' : 
                            notice.targetDepartment === 'Finance' ? 'text-[#10B981]' :
                            notice.targetDepartment === 'Sales Team' ? 'text-orange-500' :
                            notice.targetDepartment === 'HR' ? 'text-rose-500' : 
                            notice.targetDepartment === 'Admin' ? 'text-purple-600' :
                            notice.targetDepartment === 'Web Team' ? 'text-blue-400' : 'text-cyan-500'
                        }`}>
                            {notice.targetDepartment}
                        </span>
                        </td>
                        <td className="p-4 text-gray-500 text-[13px] whitespace-nowrap">
                            {new Date(notice.publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).replace(/ /g, '-')}
                        </td>
                        <td className="p-4">
                        <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider w-[85px] text-center ${
                            notice.status === 'Published' ? 'bg-emerald-50 text-[#10B981]' : 
                            notice.status === 'Draft' ? 'bg-[#FFF7ED] text-orange-500' :
                            'bg-gray-100 text-gray-600'
                            }`}>
                            {notice.status}
                            </span>
                            
                            {notice.status !== 'Draft' && (
                                <button 
                                onClick={() => onToggleStatus(notice.id, notice.status)}
                                className={`w-9 h-5 rounded-full relative transition-colors duration-300 ${
                                    notice.status === 'Published' ? 'bg-[#10B981]' : 'bg-gray-300'
                                }`}
                                >
                                <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                                    notice.status === 'Published' ? 'translate-x-4' : 'translate-x-0'
                                }`}></div>
                                </button>
                            )}
                        </div>
                        </td>
                        <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1.5 text-gray-400">
                            <button className="hover:text-blue-500 transition-colors p-1 hover:bg-blue-50 rounded"><Eye size={16} /></button>
                            <button className="hover:text-green-500 transition-colors p-1 hover:bg-green-50 rounded"><Edit size={16} /></button>
                            <button className="hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded"><MoreVertical size={16} /></button>
                        </div>
                        </td>
                    </tr>
                    ))
                )}
            </tbody>
            </table>
        </div>
        
        <div className="flex justify-center items-center p-4 border-t border-gray-200 gap-2 bg-white overflow-x-auto">
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400"><ChevronLeft size={16}/></button>
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 rounded text-xs font-bold">1</button>
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-gray-50 text-gray-500 rounded text-xs font-medium">2</button>
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-gray-50 text-gray-500 rounded text-xs font-medium">3</button>
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-gray-50 text-gray-500 rounded text-xs font-medium">4</button>
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-gray-50 text-gray-500 rounded text-xs font-medium">5</button>
            <button className="w-8 h-8 flex-shrink-0 flex items-center justify-center hover:bg-gray-100 rounded text-gray-400"><ChevronRight size={16}/></button>
        </div>
      </div>
    </div>
  );
};

const SuccessModal = ({ isOpen, onClose, onViewNotice, onCreateAnother }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-[2px]">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-[550px] w-full text-center relative animate-fade-in-up mx-4">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600">
            <X size={20} />
        </button>

        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_10px_20px_rgba(16,185,129,0.2)]">
          <CheckCircle className="text-white w-8 h-8 md:w-10 md:h-10" strokeWidth={3} />
        </div>
        
        <h2 className="text-xl md:text-[26px] font-bold text-gray-800 mb-3 tracking-tight">Notice Published Successfully</h2>
        <p className="text-gray-500 text-sm mb-8 md:mb-10 leading-relaxed max-w-[400px] mx-auto">
          Your notice has been published and is now visible to all selected departments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <button 
            onClick={onViewNotice}
            className="w-full sm:w-auto px-8 py-2.5 border border-blue-500 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors text-sm"
          >
            View Notice
          </button>
          <button 
            onClick={onCreateAnother}
            className="w-full sm:w-auto px-8 py-2.5 border border-orange-500 text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-colors text-sm"
          >
            + Create Another
          </button>
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-2.5 border border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-50 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('notice');
  const [view, setView] = useState('list');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [notices, setNotices] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE_URL}/notices`)
      .then(res => {
          if (!res.ok) throw new Error("Failed to connect");
          return res.json();
      })
      .then(data => {
        const formattedData = data.map(item => ({
            ...item,
            id: item._id
        }));
        setNotices(formattedData);
      })
      .catch(err => {
          console.error("Backend unavailable:", err);
      });
  }, []);

  const handleCreateNotice = (formData) => {
    // --- VALIDATION FOR ALL REQUIRED FIELDS ---
    if(
       !formData.targetDepartment || 
       !formData.title || 
       !formData.employeeId ||
       !formData.employeeName || 
       !formData.position ||
       !formData.noticeType ||
       !formData.publishDate
    ) {
        alert("Please fill in all required fields (marked with *).");
        return;
    }

    const payload = {
        title: formData.title,
        targetDepartment: formData.targetDepartment,
        employeeId: formData.employeeId || "EMP-001",
        employeeName: formData.employeeName || "Asif Riaj",
        position: formData.position || "HR",
        noticeType: formData.noticeType,
        publishDate: formData.publishDate,
        body: formData.body,
        status: "Published"
    };

    fetch(`${API_BASE_URL}/notices`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(async res => {
        if (!res.ok) {
            throw new Error('Server rejected the request');
        }
        return res.json();
    })
    .then(newNotice => {
        setNotices(prev => [{...newNotice, id: newNotice._id}, ...prev]);
        setShowSuccessModal(true);
    })
    .catch(err => {
        console.error("Error creating notice:", err);
        alert("Failed to create notice. Please check backend connection.");
    });
  };

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === 'Published' ? 'Unpublished' : 'Published';
    
    setNotices(prev => prev.map(n => n.id === id ? { ...n, status: newStatus } : n));

    fetch(`${API_BASE_URL}/notices/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    }).catch(err => {
        console.error("Error updating status:", err);
    });
  };

  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans text-gray-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="flex-1 overflow-auto p-4 md:p-8 custom-scrollbar">
            {activeTab === 'notice' ? (
                view === 'list' ? (
                    <NoticeList 
                        notices={notices} 
                        onCreateClick={() => setView('create')} 
                        onToggleStatus={handleToggleStatus}
                    />
                ) : (
                    <CreateNoticeForm 
                        onCancel={() => setView('list')}
                        onSave={handleCreateNotice}
                    />
                )
            ) : (
                <div className="h-full flex items-center justify-center text-gray-400 flex-col gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        <Briefcase size={32} className="opacity-40"/>
                    </div>
                    <p className="font-medium">Module Under Development</p>
                </div>
            )}
        </main>
      </div>

      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => { setShowSuccessModal(false); setView('list'); }}
        onViewNotice={() => { setShowSuccessModal(false); setView('list'); }}
        onCreateAnother={() => { setShowSuccessModal(false); }}
      />
    </div>
  );
}
