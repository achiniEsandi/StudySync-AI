import { useState } from 'react';

export default function useApiState() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return { loading, setLoading, error, setError };
}

