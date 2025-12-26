import { Code2, Database, Globe, Terminal, GraduationCap, Briefcase, Heart, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const skills = [
    { icon: Code2, label: "Java", level: 85, color: "bg-java" },
    { icon: Terminal, label: "JavaScript", level: 80, color: "bg-javascript" },
    { icon: Database, label: "SQL", level: 75, color: "bg-primary" },
    { icon: Globe, label: "Networking", level: 70, color: "bg-accent" },
  ];

  const experiences = [
    {
      title: "Khóa học Java Core",
      organization: "Học viện Công nghệ",
      period: "2023 - 2024",
      description: "Học các kiến thức nền tảng về Java: OOP, Collections, Multithreading, I/O, Networking."
    },
    {
      title: "Khóa học JavaScript & Web",
      organization: "Trung tâm Đào tạo",
      period: "2024",
      description: "Frontend development với HTML, CSS, JavaScript, React.js và Node.js cơ bản."
    },
    {
      title: "Dự án thực tập",
      organization: "Công ty ABC",
      period: "2024",
      description: "Tham gia phát triển ứng dụng web quản lý nội bộ sử dụng Java Spring Boot."
    }
  ];

  const interests = [
    "Lập trình mạng",
    "Backend Development",
    "Open Source",
    "Học máy (Machine Learning)",
    "DevOps",
    "Cloud Computing"
  ];

  return (
    <Layout>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 mb-6 hover-glow transition-all">
              <span className="font-mono text-4xl font-bold text-primary">NV</span>
            </div>
            <h1 className="font-mono text-4xl md:text-5xl font-bold mb-4">
              Nguyễn Văn <span className="text-gradient">Dev</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Sinh viên Công nghệ thông tin
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Hà Nội, Việt Nam</span>
            </div>
          </div>

          {/* Bio */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-4 text-primary flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Về tôi
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Xin chào! Tôi là một sinh viên năm cuối ngành Công nghệ thông tin với niềm đam mê 
                mãnh liệt dành cho lập trình và công nghệ. Tôi đặc biệt quan tâm đến lập trình mạng, 
                phát triển backend và xây dựng các ứng dụng có khả năng mở rộng.
              </p>
              <p>
                Hành trình học lập trình của tôi bắt đầu từ năm nhất đại học khi tôi lần đầu tiên 
                viết chương trình "Hello World" bằng Java. Từ đó, tôi đã không ngừng học hỏi và 
                khám phá thêm nhiều ngôn ngữ và công nghệ mới.
              </p>
              <p>
                Blog này là nơi tôi chia sẻ những kiến thức đã học được, những bài học từ các dự án 
                thực tế, và những tips hữu ích cho các bạn đang trên con đường trở thành lập trình viên.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Kỹ năng
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className={`h-5 w-5 ${skill.color === 'bg-java' ? 'text-java' : skill.color === 'bg-javascript' ? 'text-javascript' : 'text-primary'}`} />
                      <span className="font-medium">{skill.label}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100 + 300}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Education */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Học vấn & Kinh nghiệm
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                  <div className="mb-1">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-primary">{exp.organization}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div 
            className="bg-card rounded-xl p-6 md:p-8 border border-border opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="font-mono text-xl font-semibold mb-6 text-primary flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Sở thích & Mục tiêu
            </h2>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
