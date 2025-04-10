export const amarilloPersonalizado = "#F5E935";

// Exportando una función
export function generarColor(hex) {
  return {
    hex,
    rgb: hexToRgb(hex),
  };
}
