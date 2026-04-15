import { useEffect, useState } from 'react';
import { subjectsApi } from '../services/subjectsApi.js';

export function useSubjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadSubjects = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await subjectsApi.getAll();
      setSubjects(response.data.data || []);
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Failed to load subjects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubjects();
  }, []);

  return {
    subjects,
    loading,
    error,
    reloadSubjects: loadSubjects,
  };
}

