import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Унікальний стиль',
    Svg: require('@site/static/img/firstPhoto.jpg').default,
    description: (
      <>
        Стиль поєднує класичні техніки з сучасними тенденціями, створюючи неповторні зображення
      </>
    ),
  },
  {
    title: 'Професійний досвід',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        З багаторічним досвідом роботи в різних жанрах фотографії, від портретів до пейзажів
      </>
    ),
  },
  {
    title: 'Персоналізований підхід',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Кожен клієнт для Олександра - це історія, яку він хоче розповісти через фотографії. 
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
