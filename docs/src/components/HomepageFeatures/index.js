import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Formación académica',
    Svg: require('@site/static/img/formacion.svg').default,
    description: (
      <>
        Mi formación académica comenzó en las ciencias experimentales y
        evolucionó hacia las ciencias de la educación.
      </>
    ),
  },
  {
    title: 'Experiencia investigadora',
    Svg: require('@site/static/img/investigacion.svg').default,
    description: (
      <>
        Mi experiencia investigadora se ha desarrollado en el área de la
        Didáctica de las Ciencias Experimentales.
      </>
    ),
  },
  {
    title: 'Experiencia docente',
    Svg: require('@site/static/img/docencia.svg').default,
    description: (
      <>
        Mi experiencia docente es en diferentes asignaturas propias del
        área de Didáctica de las Ciencias Experimentales en Grado y Máster.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
