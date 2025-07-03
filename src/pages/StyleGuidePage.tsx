import { Button } from '../components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Un componente auxiliar para organizar las secciones de la guía de estilos.
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold border-b pb-2 mb-6">{title}</h2>
    <div className="flex flex-wrap items-start gap-4">{children}</div>
  </section>
);

export function StyleGuidePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Guía de Estilos</h1>

      {/* Sección para las variantes de estilo */}
      <Section title="Variants">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </Section>

      {/* Sección para las variantes de tamaño */}
      <Section title="Sizes">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium (Default)</Button>
        <Button variant="primary" size="lg">Large</Button>
      </Section>

      {/* Sección para el estado "disabled" */}
      <Section title="Disabled State">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="danger" disabled>Danger Disabled</Button>
      </Section>

      {/* Sección para botones con iconos */}
      <Section title="With Icon">
        <Button variant="primary">
          <FontAwesomeIcon icon={faSpinner} className="mr-2 h-4 w-4 animate-spin" />
          Loading...
        </Button>
        <Button variant="secondary" size="lg">
          Login
          {/* Aquí podrías añadir un icono de flecha, por ejemplo */}
        </Button>
      </Section>

    </div>
  );
}
