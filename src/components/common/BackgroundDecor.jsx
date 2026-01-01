export default function BackgroundDecor() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base subtle gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#f8faff]
          via-white
          to-[#f3f6ff]
        "
      />

      {/* Top-left main glow */}
      <div
        className="
          absolute -top-48 -left-48
          w-[700px] h-[700px]
          rounded-full
          bg-gradient-to-br
          from-blue-300/40
          via-blue-200/20
          to-transparent
          blur-[120px]
        "
      />

      {/* Top-right accent glow */}
      <div
        className="
          absolute -top-32 -right-48
          w-[600px] h-[600px]
          rounded-full
          bg-gradient-to-bl
          from-indigo-300/35
          via-indigo-200/20
          to-transparent
          blur-[120px]
        "
      />

      {/* Center soft ambient glow */}
      <div
        className="
          absolute top-[35%] left-1/2 -translate-x-1/2
          w-[520px] h-[520px]
          rounded-full
          bg-gradient-to-br
          from-blue-200/25
          via-indigo-200/15
          to-transparent
          blur-[140px]
        "
      />

      {/* Bottom-left subtle glow */}
      <div
        className="
          absolute -bottom-48 -left-40
          w-[520px] h-[520px]
          rounded-full
          bg-gradient-to-tr
          from-blue-200/25
          via-transparent
          to-transparent
          blur-[120px]
        "
      />

      {/* Bottom-right subtle glow */}
      <div
        className="
          absolute -bottom-56 -right-40
          w-[520px] h-[520px]
          rounded-full
          bg-gradient-to-tl
          from-indigo-200/25
          via-transparent
          to-transparent
          blur-[120px]
        "
      />

      {/* Soft vignette (adds premium depth) */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.04)_100%)]
        "
      />
    </div>
  );
}
