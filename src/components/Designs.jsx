import React from "react";

const Designs = () => {
  // All your custom colors (light mode)
  const colors = [
    { name: "customBlack", hex: "#111111" },
    { name: "customGray", hex: "#333333" },
    { name: "customBlue", hex: "#3B82F6" },
    { name: "customWhite", hex: "#FFFFFF" },
    { name: "customOffWhite", hex: "#F9FAFB" },
    { name: "customRed", hex: "#DC2626" },
    { name: "customGreen", hex: "#16A34A" },
    { name: "customGold", hex: "#D97706" },
    { name: "customPink", hex: "#DB2777" },
  ];

  // Font classes
  const fonts = [
    { name: "Playfair Display", class: "font-playfair" },
    { name: "Lilita One", class: "font-lilita" },
    { name: "Sevillana", class: "font-sevillana" },
    { name: "Tailwind Sans (default)", class: "font-sans" },
    { name: "Tailwind Serif", class: "font-serif" },
    { name: "Tailwind Mono", class: "font-mono" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-customBlack border-b pb-4">
        Design System Reference
      </h1>

      {/* Colors Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-customGray">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`p-4 rounded-lg border bg-${color.name} ${
                color.name.includes("White")
                  ? "border-gray-300"
                  : "border-transparent"
              }`}
            >
              <div
                className={`p-3 rounded-md mb-2 ${
                  color.name.includes("White") ? "bg-gray-100" : "bg-white/80"
                }`}
              >
                <p className={`text-sm font-mono text-${color.name}`}>
                  .{color.name}
                </p>
                <p className="text-xs mt-1 text-gray-600">{color.hex}</p>
              </div>
              <div className="flex gap-2">
                <span
                  className={`text-xs p-1 rounded bg-${color.name}/10 text-${color.name}`}
                >
                  text
                </span>
                <span
                  className={`text-xs p-1 rounded bg-${color.name}/10 text-${color.name}`}
                >
                  bg
                </span>
                <span
                  className={`text-xs p-1 rounded bg-${color.name}/10 text-${color.name}`}
                >
                  border
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fonts Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-customGray">Fonts</h2>
        <div className="space-y-8">
          {fonts.map((font) => (
            <div key={font.name} className="border-b pb-6 last:border-0">
              <h3 className={`text-3xl mb-4 ${font.class}`}>{font.name}</h3>
              <p className={`${font.class} text-lg`}>
                The quick brown fox jumps over the lazy dog
              </p>
              <p className={`${font.class} text-lg italic`}>
                {font.name.includes("Tailwind") ? "" : "Italic style sample"}
              </p>
              <code className="text-sm bg-gray-100 p-1 mt-2 inline-block rounded font-mono">
                .{font.class}
              </code>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Designs;
