import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import PatientForm from './PatientForm';

export default function Dashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      }
    };

    checkUser();
    fetchPatients();
  }, [navigate]);

  const fetchPatients = async () => {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPatients(data || []);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        const { error } = await supabase
          .from('patients')
          .delete()
          .eq('id', id);

        if (error) throw error;
        
        toast.success('Patient deleted successfully');
        fetchPatients();
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  const handleEdit = (patient: any) => {
    setEditingPatient(patient);
    setShowForm(true);
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success('Signed out successfully');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
            <div className="space-x-4">
              <button
                onClick={() => {
                  setEditingPatient(null);
                  setShowForm(!showForm);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {showForm ? 'View Patients' : 'Add New Patient'}
              </button>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Sign out
              </button>
            </div>
          </div>

          {showForm ? (
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-5 sm:p-6">
                <PatientForm
                  initialData={editingPatient}
                  onSuccess={() => {
                    setShowForm(false);
                    setEditingPatient(null);
                    fetchPatients();
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              {loading ? (
                <div className="text-center py-4">Loading...</div>
              ) : patients.length === 0 ? (
                <div className="text-center py-4">No patients found. Add your first patient!</div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {patients.map((patient) => (
                    <li key={patient.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-indigo-600 truncate">
                              {patient.full_name}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              {patient.email} • {patient.contact_number}
                            </p>
                          </div>
                          <div className="flex space-x-4">
                            <button
                              onClick={() => handleEdit(patient)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(patient.id)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {patient.gender} • {new Date(patient.date_of_birth).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <p>
                              {patient.city}, {patient.state} {patient.zip_code}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}