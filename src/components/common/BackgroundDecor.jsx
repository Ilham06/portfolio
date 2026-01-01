export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Top left glow */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-blue-200/40 rounded-full blur-3xl" />

      {/* Top right glow */}
      <div className="absolute top-32 -right-40 w-[520px] h-[520px] bg-indigo-200/40 rounded-full blur-3xl" />

      {/* Bottom left glow */}
      <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] bg-blue-100/30 rounded-full blur-3xl" />

      {/* Bottom right glow */}
      <div className="absolute -bottom-32 -right-40 w-[420px] h-[420px] bg-indigo-100/30 rounded-full blur-3xl" />
    </div>
  );
}
