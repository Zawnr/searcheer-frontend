import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

function HomePage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Home Page</h2>
      <p className="text-gray-700">This is the home page content.</p>
      <ExampleComponent message="This is an example component on the Home Page." />
    </div>
  );
}

export default HomePage;