import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Москва, ул. Бармена, д. 15',
      description: 'Метро Тверская, 5 минут пешком'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      description: 'Ежедневно с 10:00 до 22:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@barschool.ru',
      description: 'Ответим в течение 24 часов'
    }
  ];

  const socialLinks = [
    { icon: 'Instagram', label: 'Instagram', link: '#' },
    { icon: 'Facebook', label: 'Facebook', link: '#' },
    { icon: 'Youtube', label: 'YouTube', link: '#' },
    { icon: 'MessageCircle', label: 'Telegram', link: '#' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">Контакты</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом — мы всегда рады ответить на ваши вопросы
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base font-semibold text-primary">
                    {item.content}
                  </CardDescription>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-none shadow-xl animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ваше имя
                    </label>
                    <Input 
                      placeholder="Иван Иванов" 
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="ivan@example.com" 
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Телефон
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+7 (___) ___-__-__" 
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Расскажите, чем мы можем вам помочь..." 
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground text-base"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Card className="border-none shadow-xl overflow-hidden">
                <div className="h-64 bg-secondary/30 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Icon name="Map" className="mx-auto text-muted-foreground" size={48} />
                    <p className="text-sm text-muted-foreground">Карта загружается...</p>
                  </div>
                </div>
              </Card>

              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Мы в социальных сетях</CardTitle>
                  <CardDescription>
                    Подписывайтесь, чтобы не пропустить новости и акции
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-14 hover:bg-accent hover:text-accent-foreground transition-colors"
                        asChild
                      >
                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                          <Icon name={social.icon as any} className="mr-2" size={20} />
                          {social.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-foreground">
                    Запишитесь на пробное занятие
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Бесплатное первое занятие для новых учеников
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться сейчас
                  </Button>
                </CardContent>
              </Card>
            </div>
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

export default Contacts;