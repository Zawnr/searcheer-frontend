import React from 'react';

function ExampleComponent({ message }) {
  return (
    <div className="bg-gray-100 p-3 my-2 border border-gray-300 rounded">
      <p className="text-sm text-purple-700">{message}</p>
    </div>
  );
}

export default ExampleComponent;