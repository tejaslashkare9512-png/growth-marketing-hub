import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp, Search, Mail, Globe, MousePointerClick } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Social Media Growth Campaign',
      type: 'Sample Template',
      description:
        'Comprehensive 12-week Instagram growth strategy for a local lifestyle brand targeting millennials.',
      role: 'Social Media Strategist',
      timeline: '12 weeks',
      tools: ['Instagram', 'Meta Business Suite', 'Canva'],
      challenge: 'Increase organic reach by 150% and engagement by 200%',
      approach:
        'Content calendar with 4 posts/week, strategic hashtag research, engagement pods, and influencer partnerships.',
      results: ['2.5K new followers', '180% engagement increase', '3x story views'],
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO Audit & Optimization',
      type: 'Sample Template',
      description:
        'Complete technical and on-page SEO audit for an e-commerce website with actionable recommendations.',
      role: 'SEO Specialist',
      timeline: '4 weeks',
      tools: ['Google Analytics', 'SEMrush', 'Screaming Frog'],
      challenge: 'Improve organic traffic and keyword rankings for competitive niche',
      approach:
        'Technical audit, keyword gap analysis, on-page optimization, content recommendations.',
      results: ['45+ technical issues fixed', '30 high-value keywords identified', 'Site speed improved by 40%'],
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: 'Google Ads Lead Generation',
      type: 'Sample Template',
      description:
        'High-converting Google Ads campaign for B2B SaaS company targeting decision-makers.',
      role: 'Paid Ads Specialist',
      timeline: '8 weeks',
      tools: ['Google Ads', 'Google Analytics', 'Google Tag Manager'],
      challenge: 'Reduce CPA while maintaining lead quality and volume',
      approach:
        'Keyword research, ad copy testing, landing page optimization, negative keyword refinement.',
      results: ['₹45 CPA achieved', '250+ qualified leads', '4.2% conversion rate'],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Product Launch Landing Page',
      type: 'Sample Template',
      description:
        'High-converting landing page design for tech product launch with pre-order functionality.',
      role: 'Web Designer',
      timeline: '3 weeks',
      tools: ['Figma', 'Webflow', 'Google Analytics'],
      challenge: 'Create compelling landing page that converts visitors to pre-orders',
      approach:
        'Hero-focused design, benefit-driven copy, social proof integration, clear CTA hierarchy.',
      results: ['8.5% conversion rate', '500+ pre-orders', '5-second avg. page load'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Onboarding Sequence',
      type: 'Sample Template',
      description:
        'Automated 5-email welcome sequence for new subscribers with educational content and offers.',
      role: 'Email Marketing Specialist',
      timeline: '2 weeks',
      tools: ['HubSpot', 'Canva', 'A/B Testing Tools'],
      challenge: 'Engage new subscribers and drive first purchase within 7 days',
      approach:
        'Value-first approach, progressive offers, personalization, mobile optimization.',
      results: ['42% open rate', '18% click rate', '12% conversion to purchase'],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <div className="max-w-2xl mx-auto bg-secondary p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> As a fresher, these are sample project templates showcasing my
              approach and methodology. I'm currently building my portfolio with real client work.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-secondary rounded-lg text-primary">{project.icon}</div>
                <Badge variant="secondary">{project.type}</Badge>
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground">Role:</span>
                  <span className="text-muted-foreground">{project.role}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-foreground">Timeline:</span>
                  <span className="text-muted-foreground">{project.timeline}</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="font-semibold text-foreground">Tools:</span>
                  {project.tools.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase mb-1">Challenge</p>
                  <p className="text-sm text-muted-foreground">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase mb-1">Approach</p>
                  <p className="text-sm text-muted-foreground">{project.approach}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground uppercase mb-1">Results</p>
                  <ul className="space-y-1">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button variant="outline" className="w-full group">
                Request Similar Project
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
