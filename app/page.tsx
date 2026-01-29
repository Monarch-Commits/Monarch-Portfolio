import Dashboard from './component/Dashboard/Dashboard';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen min-w-full flex-col items-center justify-start md:justify-center">
        <Dashboard />
      </div>
    </>
  );
}
