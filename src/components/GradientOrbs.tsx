export default function GradientOrbs() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -top-[25%] -right-[15%] w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[45%] -left-[20%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[5%] right-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
