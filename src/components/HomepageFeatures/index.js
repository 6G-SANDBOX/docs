import { FilePlus, AlertCircle, Lightbulb } from 'lucide-react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          <div className='col col--4'>
            <div className='text--center'>
              <h3>Contributing</h3>
              <FilePlus size={30} className={styles.icon} />
              <p>
                Want to help improve the documentation? <br />
                <a href='https://6g-sandbox.github.io/docs/contributing' target='_blank' rel='noopener noreferrer'>
                  Contribute here
                </a>
              </p>
            </div>
          </div>

          <div className='col col--4'>
            <div className='text--center'>
              <h3>Report an Issue</h3>
              <AlertCircle size={30} className={styles.icon} />
              <p>
                Found a problem with the documentation? <br />
                <a
                  href='https://github.com/6G-SANDBOX/docs/issues/new?assignees=&labels=&projects=&template=bug_report.md'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Report it here
                </a>
              </p>
            </div>
          </div>

          <div className='col col--4'>
            <div className='text--center'>
              <h3>Suggest an Improvement</h3>
              <Lightbulb size={30} className={styles.icon} />
              <p>
                Got an idea to improve the documentation? <br />
                <a
                  href='https://github.com/6G-SANDBOX/docs/issues/new?assignees=&labels=&projects=&template=feature_request.md'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Suggest here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
