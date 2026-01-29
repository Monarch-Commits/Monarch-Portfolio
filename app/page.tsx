import React from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Project from './component/Project/Project';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col items-center justify-start md:justify-center">
        <Dashboard />
      </div>
      <div className="flex min-h-screen min-w-full flex-col items-center justify-start md:justify-center">
        <Project />
      </div>
    </>
  );
}
