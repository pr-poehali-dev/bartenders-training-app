import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const news = [
    {
      id: 1,
      title: 'Открытие нового курса по авторским коктейлям',
      date: '15 ноября 2025',
      description: 'Изучите секреты создания уникальных напитков от ведущих барменов страны',
      image: 'https://cdn.poehali.dev/projects/1a20198e-d839-4fdc-a9ac-e42c8e967ae1/files/0a48d279-5963-4b46-8341-ed8fb51407e4.jpg'
    },
    {
      id: 2,
      title: 'Мастер-класс по классическим коктейлям',
      date: '10 ноября 2025',
      description: 'Научитесь готовить легендарные коктейли: Old Fashioned, Negroni, Martini',
      image: 'https://cdn.poehali.dev/projects/1a20198e-d839-4fdc-a9ac-e42c8e967ae1/files/0a48d279-5963-4b46-8341-ed8fb51407e4.jpg'
    },
    {
      id: 3,
      title: 'Трудоустройство выпускников',
      date: '5 ноября 2025',
      description: 'Наши партнёры — лучшие бары города — ищут талантливых барменов',
      image: 'https://cdn.poehali.dev/projects/1a20198e-d839-4fdc-a9ac-e42c8e967ae1/files/0a48d279-5963-4b46-8341-ed8fb51407e4.jpg'
    }
  ];

  const features = [
    {
      icon: 'Award',
      title: 'Сертификация',
      description: 'Получите международный сертификат бармена'
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Обучение у профессионалов с опытом 10+ лет'
    },
    {
      icon: 'Briefcase',
      title: 'Помощь с трудоустройством',
      description: 'Партнёрская сеть из 50+ заведений'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Искусство барменства начинается здесь
              </h1>
              <p className="text-lg text-white/80">
                Профессиональное обучение барменскому мастерству от практикующих экспертов. 
                Освойте craft-коктейли, классику и современные техники.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="GraduationCap" className="mr-2" size={20} />
                  Начать обучение
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть видео
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/1a20198e-d839-4fdc-a9ac-e42c8e967ae1/files/0a48d279-5963-4b46-8341-ed8fb51407e4.jpg"
                alt="Барменское искусство"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">Новости и события</h2>
            <p className="text-lg text-white/80">Следите за актуальными мероприятиями школы</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white/90 text-sm mb-2">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      {item.date}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group/btn">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 transition-transform group-hover/btn:translate-x-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black/20 backdrop-blur-sm text-white py-12 px-4 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Wine" className="text-accent-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold">BarSchool</span>
          </div>
          <p className="text-white/80 mb-4">
            Профессиональная школа барменского искусства
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white/60">
            <span>© 2025 BarSchool</span>
            <span>•</span>
            <span>Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;