import React, { forwardRef, type ButtonHTMLAttributes } from 'react'; // <-- CORRECCIÓN AQUÍ
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// class-variance-authority (cva) nos ayuda a definir variantes de componentes de forma ordenada.
// Es una herramienta muy popular para construir bibliotecas de componentes con Tailwind.
const buttonVariants = cva(
  // Estilos base aplicados a todas las variantes
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      // Define las variantes de estilo del botón
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-600/90',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-200/80',
        danger: 'bg-red-600 text-white hover:bg-red-600/90',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
      },
      // Define las variantes de tamaño del botón
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    // Valores por defecto si no se especifica ninguna prop
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Definimos las props del componente usando TypeScript.
// Extiende los atributos de un botón HTML estándar y las variantes que creamos.
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// Creamos el componente usando forwardRef.
// Esto permite a los componentes padres obtener una referencia al elemento <button> interno,
// lo cual es una buena práctica para componentes de UI reutilizables.
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // Usamos twMerge y clsx para combinar las clases de Tailwind de forma segura.
    // 1. buttonVariants({ variant, size }) obtiene las clases de la variante/tamaño.
    // 2. className permite al usuario pasar clases adicionales desde fuera.
    // 3. twMerge se asegura de que no haya conflictos (ej: si se pasa un 'bg-green-500' desde fuera, sobreescribirá el 'bg-blue-600' de la variante).
    const finalClassName = twMerge(clsx(buttonVariants({ variant, size, className })));

    return (
      <button
        className={finalClassName}
        ref={ref}
        {...props} // Pasamos el resto de las props (como onClick, children, disabled, etc.)
      />
    );
  }
);
Button.displayName = 'Button'; // Asignamos un nombre para facilitar el debugging en las DevTools.

export { Button, buttonVariants };
