import { businessFacts as facts } from '@/config/businessFacts';
import Button from './Button';

interface CtaBandProps {
  /** One sentence under the heading. Defaults to the sentence from the contact page. */
  sentence?: string;
}

/** Final call to action before the footer. Same on every page. */
export default function CtaBand({ sentence }: CtaBandProps) {
  const text =
    sentence ??
    `Tell us what you need and we will reply with a clear quote${
      facts.responseTimeHours ? ` within ${facts.responseTimeHours} hours on working days` : ''
    }.`;

  return (
    <section className="mop-cta">
      <div className="mop-container">
        <div className="mop-cta__grid">
          <div>
            <h2 className="mop-h2">Tell us what you need</h2>
            <p>{text}</p>
          </div>
          <div className="mop-cta__action">
            <Button href="/contact-us" variant="cream">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
