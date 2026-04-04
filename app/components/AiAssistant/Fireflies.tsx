const OrbitFireflies = () => {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {/* firefly 1 */}
      <span className="orbit orbit-1">
        <span className="dot dot-blue" />
      </span>

      {/* firefly 2 */}
      <span className="orbit orbit-2">
        <span className="dot dot-green" />
      </span>

      {/* firefly 3 */}
      <span className="orbit orbit-3">
        <span className="dot dot-yellow" />
      </span>
    </div>
  );
};

export default OrbitFireflies;
