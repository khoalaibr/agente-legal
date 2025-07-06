import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Un componente auxiliar para organizar las secciones de la guía de estilos.
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold border-b border-secondary-300 pb-2 mb-6 text-secondary-800">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export function StyleGuidePage() {
  return (
    <div className="container mx-auto p-8 bg-secondary-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-secondary-900">Guía de Estilos</h1>

      {/* Sección para los Botones */}
      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium (Default)</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">
            <FontAwesomeIcon icon={faSpinner} className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
        </div>
      </Section>

      {/* Nueva sección para las Tarjetas (Cards) */}
      <Section title="Cards">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-secondary-800">Tarjeta Básica</h3>
            <p className="text-secondary-600">
              Este es un componente Card básico. Sirve como contenedor para
              cualquier tipo de contenido, heredando los estilos base.
            </p>
          </Card>
          <Card className="p-6 bg-primary-800 text-white">
            <h3 className="text-lg font-semibold mb-2">Tarjeta Invertida</h3>
            <p>
              Puedes pasar clases adicionales para sobreescribir o extender los
              estilos base, como cambiar el color de fondo y texto.
            </p>
          </Card>
          <Card className="p-4 border-2 border-dashed border-secondary-300 shadow-none bg-transparent">
            <h3 className="text-lg font-semibold mb-2 text-secondary-800">Tarjeta sin Sombra</h3>
            <p className="text-secondary-600">
              Aquí se removió la sombra (`shadow-none`) y se añadió un borde.
            </p>
          </Card>
        </div>
      </Section>

    </div>
  );
}
