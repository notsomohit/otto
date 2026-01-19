import { Download, Scan, FileText } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold">How It Works</h2>
        <p className="text-lg text-primary-text/70 mt-2">In three simple steps.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-10 relative">
        <div className="absolute top-10 left-0 w-full h-0.5 bg-green-500 hidden md:block" />
        <div className="text-center z-10">
          <div className="flex items-center justify-center mx-auto mb-4 w-20 h-20 border-2 border-border-color rounded-full bg-background">
            <Download className="w-10 h-10 text-secondary-accent" />
          </div>
          <h3 className="text-xl font-semibold font-serif mb-2">Install the Extension</h3>
          <p className="text-primary-text/80">
            Soon available on the Chrome Web Store. For now, you can download and install it manually.
          </p>
        </div>
        <div className="text-center z-10">
          <div className="flex items-center justify-center mx-auto mb-4 w-20 h-20 border-2 border-border-color rounded-full bg-background">
            <Scan className="w-10 h-10 text-secondary-accent" />
          </div>
          <h3 className="text-xl font-semibold font-serif mb-2">Browse T&Cs</h3>
          <p className="text-primary-text/80">Navigate to any Terms & Conditions page. Otter will activate automatically.</p>
        </div>
        <div className="text-center z-10">
          <div className="flex items-center justify-center mx-auto mb-4 w-20 h-20 border-2 border-border-color rounded-full bg-background">
            <FileText className="w-10 h-10 text-secondary-accent" />
          </div>
          <h3 className="text-xl font-semibold font-serif mb-2">See the Summary</h3>
          <p className="text-primary-text/80">Get a clear, color-coded breakdown of the terms, right on the page.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;