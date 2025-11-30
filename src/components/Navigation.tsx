import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная', icon: 'Home' },
    { path: '/recipes', label: 'Рецепты', icon: 'Wine' },
    { path: '/contacts', label: 'Контакты', icon: 'Mail' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Icon name="Wine" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-xl font-bold text-primary">BarSchool</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? 'default' : 'ghost'}
                  className="flex items-center space-x-2"
                >
                  <Icon name={link.icon as any} size={18} />
                  <span>{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
