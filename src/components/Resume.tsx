import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Education */}
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">
                      Master of Business Administration (MBA)
                    </h4>
                    <p className="text-muted-foreground">In Progress • Expected 2025</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Specialization: Marketing & Finance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary rounded-lg text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Professional Status</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">Fresher</h4>
                    <p className="text-muted-foreground">
                      Actively seeking opportunities in Digital Marketing & Financial Analytics
                    </p>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Focus Areas:</strong> Social Media
                        Marketing, SEO, Paid Advertising, CRM Management, Data Analysis
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Available For:</strong> Full-time
                        roles, Internships, Freelance projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills Summary */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Key Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• CRM Platforms: Salesforce, HubSpot, Zoho</li>
                  <li>• Marketing: Google Ads, Meta Ads, SEO</li>
                  <li>• Analytics: Google Analytics, Excel, Data Reporting</li>
                  <li>• Design: PowerPoint, Canva, Figma</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Soft Skills</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strategic Decision Making</li>
                  <li>• Data-Driven Problem Solving</li>
                  <li>• Clear Communication & Presentation</li>
                  <li>• Project Management & Planning</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Download CV */}
          <div className="text-center pt-6">
            <Button size="lg" className="gradient-hero">
              <Download className="mr-2 w-5 h-5" />
              Download Full Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
