import React, { useRef } from 'react';

export default function UploadCV({
  selectedFile,
  setSelectedFile,
  error,
  setError,
  showValidation,
}) {
  const fileInputRef = useRef(null);
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateAndSetFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    if (!file) return;
    if (file.type !== 'application/pdf') {
      setError && setError('Only PDF files are allowed.');
      setSelectedFile(null);
      return;
    }
    if (file.size > maxFileSize) {
      setError && setError('File size exceeds 10MB.');
      setSelectedFile(null);
      return;
    }
    setError && setError('');
    setSelectedFile(file);
  };

  const handleDragOver = (event) => event.preventDefault();

  const openFileDialog = () =>
    fileInputRef.current && fileInputRef.current.click();

  // Show warning only if after submit (showValidation)
  const warning =
    showValidation && !selectedFile
      ? 'Please upload your CV (PDF, max 10MB, ATS-friendly & English).'
      : error;

  return (
    <div className="bg-white rounded-xl p-8 text-black flex flex-col items-center justify-center shadow-lg w-full max-w-[430px] min-h-[340px]">
      <h3 className="text-lg font-semibold mb-2 text-center">Upload Your CV</h3>
      <p className="text-center text-gray-500 mb-4 leading-relaxed text-sm max-w-[340px]">
        CV must contain all main sections (Contact, Experience, Skills, etc)
      </p>
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div
        className="border-8 border-dashed border-gray-400 rounded-2xl w-full h-44 flex flex-col items-center justify-center space-y-1 max-w-[340px] transition-colors hover:border-blue-400 cursor-pointer"
        onClick={openFileDialog}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!selectedFile && (
          <>
            <p className="text-blue-600 cursor-pointer mb-1">
              Upload a file <span className="font-bold">or drag and drop</span>
            </p>
            <p className="text-gray-400 text-xs mt-1">PDF up to 10MB</p>
          </>
        )}
        {selectedFile && (
          <p className="text-green-600 font-semibold">
            Selected file: {selectedFile.name}
          </p>
        )}
        {showValidation && warning && (
          <p className="text-red-600 text-xs mt-1">{warning}</p>
        )}
      </div>
    </div>
  );
}
