import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Phone, Linkedin, Instagram, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: 'Consent Required',
        description: 'Please agree to the privacy policy to continue.',
        variant: 'destructive',
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      service: '',
      budget: '',
      message: '',
      consent: false,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '8767641585',
      link: 'tel:8767641585',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'tejaslashkare9512@gmail.com',
      link: 'mailto:tejaslashkare9512@gmail.com',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'tejas-lashkare',
      link: 'https://www.linkedin.com/in/tejas-lashkare',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@teja_ane_nenu',
      link: 'https://www.instagram.com/teja_ane_nenu',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how I can help grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="service">Service Interest *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media Marketing</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="paid-ads">Google & Meta Ads</SelectItem>
                    <SelectItem value="content">Content Creation</SelectItem>
                    <SelectItem value="branding">Brand Strategy</SelectItem>
                    <SelectItem value="email">Email Marketing</SelectItem>
                    <SelectItem value="website">Website Design</SelectItem>
                    <SelectItem value="other">Other / Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Budget (Optional)</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="e.g., ₹50,000 - ₹1,00,000"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the storage and processing of my data for this inquiry, in accordance
                  with privacy regulations.
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full gradient-hero">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
                  >
                    <div className="text-primary group-hover:text-primary-foreground">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        {info.label}
                      </p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 gradient-hero text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6">
                I'm always excited to discuss new projects and opportunities. Whether you need a
                full marketing strategy or specific services, I'm here to help your business grow.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ Free initial consultation</li>
                <li>✓ Custom proposals for every project</li>
                <li>✓ Flexible engagement models</li>
                <li>✓ Transparent pricing & deliverables</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
