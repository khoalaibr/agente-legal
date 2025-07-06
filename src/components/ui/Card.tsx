import React, { forwardRef, type HTMLAttributes } from 'react'; // <-- CORRECCIÓN AQUÍ
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// Las props del Card extienden los atributos de un <div> estándar.
export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    // Usamos twMerge y clsx para combinar las clases de forma segura.
    // El usuario puede pasar clases adicionales si necesita personalizar una tarjeta específica.
    const finalClassName = twMerge(
      clsx('bg-white rounded-lg shadow-custom', className)
    );

    return (
      <div
        ref={ref}
        className={finalClassName}
        {...props} // Pasamos el resto de las props, como 'children'.
      />
    );
  }
);
Card.displayName = 'Card';

export { Card };
