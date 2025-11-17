import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skills = [
    { name: 'Financial Planning & Analysis', level: 85 },
    { name: 'Decision Making', level: 90 },
    { name: 'CRM Management', level: 88 },
    { name: 'Data Analysis & Reporting', level: 85 },
    { name: 'Presentation Design', level: 92 },
    { name: 'Digital Marketing', level: 80 },
    { name: 'Social Media Strategy', level: 85 },
    { name: 'SEO & Paid Ads', level: 78 },
  ];

  const tools = [
    { category: 'CRM Platforms', items: ['Salesforce', 'HubSpot', 'Zoho CRM'] },
    { category: 'Marketing', items: ['Google Ads', 'Meta Ads', 'Google Analytics'] },
    { category: 'Data & Analysis', items: ['Excel', 'Google Sheets', 'Power BI'] },
    { category: 'Design', items: ['PowerPoint', 'Canva', 'Figma'] },
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Skills */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Tools */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Tools & Platforms</h3>
            <div className="space-y-6">
              {tools.map((toolCategory, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-3">{toolCategory.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.items.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
