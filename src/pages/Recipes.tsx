import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Все коктейли' },
    { id: 'classic', label: 'Классика' },
    { id: 'modern', label: 'Современные' },
    { id: 'summer', label: 'Летние' }
  ];

  const recipes = [
    {
      id: 1,
      name: 'Old Fashioned',
      category: 'classic',
      difficulty: 'Средний',
      time: '5 мин',
      description: 'Легендарный виски-коктейль с горьким и сахаром',
      ingredients: ['Виски - 60 мл', 'Ангостура - 2-3 дэша', 'Сахар - 1 кубик', 'Апельсин', 'Лед'],
      steps: [
        'Положите сахар на дно стакана',
        'Добавьте ангостуру и немного воды',
        'Разомните сахар до растворения',
        'Добавьте лед и виски',
        'Украсьте апельсиновой цедрой'
      ]
    },
    {
      id: 2,
      name: 'Mojito',
      category: 'summer',
      difficulty: 'Легкий',
      time: '7 мин',
      description: 'Освежающий кубинский коктейль с мятой и лаймом',
      ingredients: ['Белый ром - 50 мл', 'Лайм - 1 шт', 'Мята - 10 листиков', 'Сахар - 2 ч.л.', 'Содовая', 'Лед'],
      steps: [
        'Положите мяту и сахар в хайбол',
        'Добавьте сок лайма',
        'Аккуратно разомните мяту',
        'Добавьте дробленый лед',
        'Влейте ром и содовую',
        'Украсьте веточкой мяты'
      ]
    },
    {
      id: 3,
      name: 'Negroni',
      category: 'classic',
      difficulty: 'Легкий',
      time: '3 мин',
      description: 'Горько-сладкий итальянский аперитив',
      ingredients: ['Джин - 30 мл', 'Кампари - 30 мл', 'Красный вермут - 30 мл', 'Апельсин', 'Лед'],
      steps: [
        'Наполните стакан льдом',
        'Добавьте все ингредиенты',
        'Перемешайте барной ложкой',
        'Украсьте апельсиновой долькой'
      ]
    },
    {
      id: 4,
      name: 'Aperol Spritz',
      category: 'summer',
      difficulty: 'Легкий',
      time: '3 мин',
      description: 'Яркий итальянский коктейль для летних вечеров',
      ingredients: ['Aperol - 60 мл', 'Просекко - 90 мл', 'Содовая - 30 мл', 'Апельсин', 'Лед'],
      steps: [
        'Наполните бокал льдом',
        'Влейте Aperol',
        'Добавьте просекко',
        'Долейте содовую',
        'Украсьте апельсиновой долькой'
      ]
    },
    {
      id: 5,
      name: 'Espresso Martini',
      category: 'modern',
      difficulty: 'Средний',
      time: '5 мин',
      description: 'Энергичный коктейль с кофе и водкой',
      ingredients: ['Водка - 50 мл', 'Кофейный ликер - 30 мл', 'Эспрессо - 30 мл', 'Сахарный сироп - 10 мл', 'Кофейные зерна'],
      steps: [
        'Охладите бокал мартини',
        'В шейкер добавьте лед',
        'Влейте все ингредиенты',
        'Энергично взбейте 15 секунд',
        'Процедите в бокал',
        'Украсьте кофейными зернами'
      ]
    },
    {
      id: 6,
      name: 'Moscow Mule',
      category: 'modern',
      difficulty: 'Легкий',
      time: '4 мин',
      description: 'Пряный и освежающий коктейль с имбирным пивом',
      ingredients: ['Водка - 50 мл', 'Имбирное пиво - 120 мл', 'Лайм - 1/2 шт', 'Мята', 'Лед'],
      steps: [
        'Наполните медную кружку льдом',
        'Выжмите сок половины лайма',
        'Добавьте водку',
        'Долейте имбирным пивом',
        'Украсьте мятой и долькой лайма'
      ]
    }
  ];

  const filteredRecipes = selectedCategory === 'all' 
    ? recipes 
    : recipes.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold text-primary mb-4">Рецепты коктейлей</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Коллекция проверенных рецептов от профессиональных барменов
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="transition-all"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <Card 
                key={recipe.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {recipe.difficulty}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {recipe.time}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{recipe.name}</CardTitle>
                  <CardDescription className="text-base">{recipe.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 flex items-center">
                      <Icon name="Droplets" size={16} className="mr-2" />
                      Ингредиенты
                    </h4>
                    <ul className="space-y-2">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-3 flex items-center">
                      <Icon name="ListOrdered" size={16} className="mr-2" />
                      Приготовление
                    </h4>
                    <ol className="space-y-2">
                      {recipe.steps.map((step, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent font-semibold mr-2 min-w-[20px]">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="BookmarkPlus" className="mr-2" size={18} />
                    Сохранить рецепт
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Icon name="Wine" className="text-accent-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold">BarSchool</span>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Профессиональная школа барменского искусства
          </p>
          <div className="flex justify-center space-x-6 text-sm text-primary-foreground/60">
            <span>© 2025 BarSchool</span>
            <span>•</span>
            <span>Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Recipes;
