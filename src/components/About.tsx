import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Download } from 'lucide-react';

const About = () => {
  const highlights = [
    'Data-first approach to all marketing decisions',
    'Expert in CRM platforms (Salesforce, HubSpot, Zoho)',
    'Clear reporting & actionable dashboards',
    'Presentation-ready deliverables every time',
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="space-y-8">
            <Card className="p-8 card-hover">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm currently pursuing my MBA with a strong foundation in{' '}
                <span className="text-primary font-semibold">
                  Financial Planning & Analysis, CRM systems, and data analysis
                </span>
                . My passion lies in combining analytical thinking with creative marketing
                strategies to drive measurable business growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a fresher actively building my portfolio through freelance projects and
                internships, I bring fresh perspectives, enthusiasm, and a commitment to
                continuous learning. I'm seeking opportunities to contribute to digital
                marketing, analytics, and financial operations teams.
              </p>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Why Work With Me</h3>
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Education:</span> MBA — In
                    Progress
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Status:</span> Fresher —
                    Actively seeking opportunities
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Availability:</span> Open for
                    freelance & full-time roles
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Focus:</span> Digital
                    Marketing & Financial Analytics
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="gradient-hero">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
