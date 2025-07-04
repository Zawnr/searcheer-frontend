export const BASE_URL = 'https://searcheer-api.ddns.net';

// LOGIN
export async function login(credential, password) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: credential, password }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Login failed');
  return data;
}

// REGISTER
export async function register({ email, username, password }) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, username, password }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Register failed');
  return data;
}

// UPLOAD CV
export async function uploadCV(file, token) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${BASE_URL}/cvs`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Upload CV failed');
  return data;
}

// START ANALYSIS CV
export async function analyzeCV({ cvId, jobTitle, jobDescription, token }) {
  const response = await fetch(`${BASE_URL}/cvs/${cvId}/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      job_title: jobTitle,
      job_description: jobDescription,
    }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'CV analysis failed');
  return data;
}

// GET ANALYSIS RESULT BY ID
export async function getAnalysisResult(resultId, token) {
  const response = await fetch(`${BASE_URL}/analysis-results/${resultId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.message || 'Failed to fetch analysis result');
  return data.data || data;
}

// GET JOBS (INI PENTING)
export async function getJobs(params = {}) {
  // Build query string dari object params
  const queryString = Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== '' && v !== null)
    .map(([key, value]) =>
      Array.isArray(value)
        ? value
            .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
            .join('&')
        : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
  const url = queryString
    ? `${BASE_URL}/jobs?${queryString}`
    : `${BASE_URL}/jobs`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return await res.json();
}

// GET JOB DETAIL BY ID
export async function getJobDetail(id) {
  const response = await fetch(`${BASE_URL}/jobs/${id}`);
  if (!response.ok) throw new Error('Failed to fetch job detail');
  return await response.json();
}

// GET JOB RECOMMENDATIONS BY ANALYSIS RESULT ID
export async function getJobRecommendations(resultId, token) {
  const response = await fetch(
    `${BASE_URL}/analysis-results/${resultId}/recommendations`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.message || 'Failed to fetch job recommendations');
  return data;
}

// GET ALL USER CVS (HISTORY)
export async function getUserCVs(token) {
  const response = await fetch(`${BASE_URL}/cvs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let data;
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    data = await response.json();
  } else {
    const text = await response.text();
    throw new Error('Server error: ' + text.substring(0, 100));
  }
  if (!response.ok) throw new Error(data.message || 'Failed to fetch user CVs');
  return data;
}
