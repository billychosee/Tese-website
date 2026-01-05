import React from "react";

export default function TestPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-green to-yellow-500">
      <div className="p-8 text-center bg-white shadow-2xl rounded-xl">
        <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-brand bg-clip-text">
          Tailwind Test
        </h1>
        <p className="mb-6 text-text-secondary">
          If you can see this with proper styling, Tailwind is working!
        </p>
        <button className="btn-primary">Test Button</button>
      </div>
    </div>
  );
}
