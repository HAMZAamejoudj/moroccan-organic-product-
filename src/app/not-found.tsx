import type { Metadata } from 'next';
import Button from '@/components/site/Button';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <main className="mop-page mop-notfound" id="main">
      <div className="mop-container">
        <div className="mop-measure">
          <h1 className="mop-h1">Page not found</h1>
          <p className="mop-lead">This page does not exist or has moved.</p>
          <div className="mop-actions">
            <Button href="/">Go to the homepage</Button>
            <Button href="/products" variant="secondary">
              See our oils
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
