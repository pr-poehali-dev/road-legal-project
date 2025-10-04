import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: 'ShieldCheck',
      title: 'Помощь при ДТП',
      description: 'Полное юридическое сопровождение после дорожно-транспортного происшествия',
      items: [
        'Оформление документов на месте ДТП',
        'Взаимодействие со страховыми компаниями',
        'Судебная защита ваших интересов',
        'Максимальная компенсация ущерба'
      ]
    },
    {
      icon: 'FileText',
      title: 'Административные правонарушения',
      description: 'Защита ваших прав при административных нарушениях в сфере дорожного движения',
      items: [
        'Обжалование штрафов и постановлений',
        'Защита от лишения прав',
        'Представительство в суде',
        'Консультации по КоАП РФ'
      ]
    },
    {
      icon: 'Scale',
      title: 'Судебное представительство',
      description: 'Профессиональная защита в судах всех инстанций',
      items: [
        'Подготовка процессуальных документов',
        'Участие в судебных заседаниях',
        'Обжалование решений',
        'Исполнение судебных актов'
      ]
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт более 10 лет',
      description: 'Успешно решили более 5000 дел'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Персональный юрист для каждого клиента'
    },
    {
      icon: 'Clock',
      title: 'Работаем 24/7',
      description: 'Консультации в любое время суток'
    },
    {
      icon: 'TrendingUp',
      title: 'Высокий процент успеха',
      description: '92% выигранных дел в пользу клиентов'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">АвтоЮрист</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Услуги
              </a>
              <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">
                Преимущества
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </a>
              <Button className="bg-primary hover:bg-primary/90">
                Получить консультацию
              </Button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Меню"
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <nav className="flex flex-col space-y-4">
                <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                  Услуги
                </a>
                <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">
                  Преимущества
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                  Контакты
                </a>
                <Button className="bg-primary hover:bg-primary/90 w-full">
                  Получить консультацию
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Юридическая помощь при ДТП и административных правонарушениях
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Защита ваших прав. Профессионально и надёжно
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг в сфере автомобильного права
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Получите бесплатную консультацию
              </h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку и наш юрист свяжется с вами в течение 15 минут
              </p>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов" 
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон *
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ivan@example.com" 
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Опишите вашу ситуацию
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашей проблеме..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-lg h-14"
                  >
                    Отправить заявку
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@avtourist.ru</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" size={28} className="text-primary" />
                <span className="text-xl font-bold">АвтоЮрист</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональная юридическая помощь в сфере автомобильного права
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь при ДТП</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Административные дела</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Судебная защита</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Наша команда</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@avtourist.ru</li>
                <li>г. Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 АвтоЮрист. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
