import { useEffect, useState } from 'react';
import { subjectsApi } from '../services/subjectsApi.js';

export function useSubjectDetails(subjectId) {
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadSubject = async () => {
    if (!subjectId) {
      return;
    }

    try {
      setLoading(true);
      setError('');
      const response = await subjectsApi.getById(subjectId);
      setSubject(response.data.data || null);
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Failed to load subject');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubject();
  }, [subjectId]);

  return {
    subject,
    setSubject,
    loading,
    error,
    reloadSubject: loadSubject,
  };
}

