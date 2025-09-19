import { FilePlus, AlertCircle, Lightbulb } from "lucide-react";
import styles from "./styles.module.css";
import { DOCS_REPO_BUG_REPORT, DOCS_REPO_FEATURE_REQUEST, DOCS_CONTRIBUTING } from "../../constants/v1.0.0";

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
                <a href={DOCS_CONTRIBUTING} target='_blank' rel='noopener noreferrer'>
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
                  href={DOCS_REPO_BUG_REPORT}
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
                  href={DOCS_REPO_FEATURE_REQUEST}
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
