// fonts.ts
import { Lusitana } from 'next/font/google';

// Configuración de la fuente Lusitana
export const lusitana = Lusitana({
  subsets: ['latin'], // Puedes especificar otros subsets si es necesario
  weight: ['400', '700'], // Define los pesos que usarás
  style: ['normal'], // Opcional, si usas estilos
  display: 'swap', // Mejora el rendimiento de la carga de fuentes
});
