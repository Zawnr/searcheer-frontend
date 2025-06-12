import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobRecommendations } from '../utils/api';

export default function RecommendationsPage() {
  const { id } = useParams();
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError('');
      try {
        // Ganti dengan cara ambil token yang sesuai di project kamu
        const token = localStorage.getItem('token');
        const data = await getJobRecommendations(id, token);
        setJobs(data);
      } catch (err) {
        setError(err.message || 'Gagal mengambil rekomendasi.');
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!jobs || jobs.length === 0)
    return <div className="text-center py-10 text-gray-500">Belum ada rekomendasi pekerjaan untuk hasil analisis ini.</div>;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Job Recommendations</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.job_id} className="mb-4 p-4 border rounded">
            <div className="font-semibold">{job.title}</div>
            <div className="text-sm text-gray-600">{job.location}</div>
            {job.industry && <div className="text-xs text-gray-500">{job.industry}</div>}
            {job.salary_range && <div className="text-xs text-gray-500">Salary: {job.salary_range}</div>}
            {job.employment_type && <div className="text-xs text-gray-500">Type: {job.employment_type}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
