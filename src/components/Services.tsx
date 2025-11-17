import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  Search,
  MousePointerClick,
  FileText,
  Lightbulb,
  Mail,
  Globe,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Social Media Marketing',
      description:
        'End-to-end social media management from strategy to execution, content creation, and community engagement.',
      deliverables: ['Content calendar', 'Post scheduling', 'Analytics reports', 'Growth strategy'],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO',
      description:
        'Technical and on-page SEO optimization to improve your search rankings and organic visibility.',
      deliverables: ['SEO audit', 'Keyword research', 'On-page optimization', 'Performance tracking'],
    },
    {
      icon: <MousePointerClick className="w-8 h-8" />,
      title: 'Google & Meta Ads',
      description:
        'Data-driven paid advertising campaigns across Google and Meta platforms with full performance tracking.',
      deliverables: ['Campaign setup', 'Ad creatives', 'Targeting strategy', 'Monthly reports'],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Content Creation',
      description:
        'Compelling copywriting for all your marketing needs, from social posts to landing pages.',
      deliverables: ['Blog posts', 'Ad copy', 'Social captions', 'Landing page content'],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Brand Strategy',
      description:
        'Comprehensive social media strategy and branding guidelines to establish your unique market position.',
      deliverables: ['Brand voice guide', 'Content pillars', 'Visual guidelines', 'Campaign strategy'],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Marketing',
      description:
        'Strategic email campaigns and automation sequences to nurture leads and drive conversions.',
      deliverables: ['Email templates', 'Automation setup', 'Sequence design', 'A/B testing'],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Design',
      description:
        'Modern, responsive website design and development focused on conversion and user experience.',
      deliverables: ['Responsive design', 'Landing pages', 'CMS setup', 'Mobile optimization'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">Includes:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="outline" className="w-full mt-6">
                Get a Quote
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
