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
      description: 'Получите максимальную компенсацию без лишних нервов и походов по инстанциям',
      items: [
        'Приедем на место ДТП за 30 минут — всё оформим правильно',
        'Выбьем полную компенсацию со страховой (в среднем +40% к первоначальной оценке)',
        'Вы не потратите ни минуты своего времени — всё сделаем сами',
        'Оплата только при успехе — получили компенсацию, заплатили нам'
      ]
    },
    {
      icon: 'FileText',
      title: 'Спасём ваши права',
      description: 'Отменим штрафы и вернём права даже в сложных ситуациях',
      items: [
        'Отменяем 87% штрафов и постановлений полностью',
        'Возвращаем права в 9 случаях из 10',
        'Работаем без предоплаты — платите при результате',
        'Первая консультация бесплатно — узнаете свои шансы прямо сейчас'
      ]
    },
    {
      icon: 'Scale',
      title: 'Выиграем суд за вас',
      description: 'Победа в суде под ключ — от подачи иска до получения денег на счёт',
      items: [
        'Подготовим все документы — вам не нужно разбираться в законах',
        'Выступим в суде вместо вас — не надо брать отгулы',
        'Добьёмся максимальной компенсации морального вреда',
        'Гарантия результата — 92% выигранных дел'
      ]
    }
  ];

  const advantages = [
    {
      icon: 'DollarSign',
      title: 'Платите только за результат',
      description: 'Не получили компенсацию — не платите нам ни копейки'
    },
    {
      icon: 'Clock',
      title: 'Выезд за 30 минут',
      description: 'Приедем на место ДТП быстрее эвакуатора'
    },
    {
      icon: 'TrendingUp',
      title: '+127% к выплатам',
      description: 'В среднем получаем в 2 раза больше, чем страховая предлагает'
    },
    {
      icon: 'Shield',
      title: 'Гарантия возврата прав',
      description: 'Не вернули права — вернём 100% оплаты'
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

      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-primary/10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-primary/10 px-4 py-2 rounded-full flex items-center gap-2">
                  <Icon name="Star" size={20} className="text-primary fill-primary" />
                  <span className="text-sm font-semibold text-primary">Топ автоюрист 2024</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-primary">5000+ выигранных дел</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-center">
                Получите в <span className="text-primary">2 раза больше</span> со страховой или верните права
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center">
                Платите только за результат. Первая консультация бесплатно
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">30 мин</div>
                  <div className="text-sm text-muted-foreground">Выезд на место ДТП</div>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">92%</div>
                  <div className="text-sm text-muted-foreground">Выигранных дел</div>
                </div>
                <div className="bg-secondary/50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">+127%</div>
                  <div className="text-sm text-muted-foreground">К страховой выплате</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 shadow-lg shadow-primary/30">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Бесплатная консультация за 15 минут
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать компенсацию
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                ⚡ Ответим в течение 5 минут • 📞 Работаем 24/7 • 🎁 Без предоплаты
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Решаем вашу проблему под ключ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Вы получаете деньги или права обратно. Мы — опыт побед в сложных делах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
                <CardHeader className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <Icon name="Check" size={16} className="text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
                    <Icon name="ArrowRight" size={18} className="mr-2" />
                    Заказать услугу
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
              Почему вам выгодно работать с нами
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/40 transition-all">
                  <Icon name={advantage.icon} size={36} className="text-white" />
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
                Узнайте сумму вашей компенсации за 15 минут
              </h2>
              <p className="text-xl text-muted-foreground">
                Бесплатно оценим ваше дело и скажем точную сумму, которую сможем получить
              </p>
            </div>

            <Card className="border-2 border-primary/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary/70 to-primary"></div>
              <CardContent className="pt-8">
                <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Gift" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Специальное предложение</h3>
                      <p className="text-sm text-muted-foreground">При обращении сегодня — бесплатная оценка дела и расчёт компенсации за 15 минут</p>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center gap-1">
                        <Icon name="User" size={16} className="text-primary" />
                        Ваше имя *
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Иван Иванов" 
                        className="h-12 border-2 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium flex items-center gap-1">
                        <Icon name="Phone" size={16} className="text-primary" />
                        Телефон *
                      </label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67" 
                        className="h-12 border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                      <Icon name="Mail" size={16} className="text-primary" />
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ivan@example.com" 
                      className="h-12 border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-1">
                      <Icon name="MessageSquare" size={16} className="text-primary" />
                      Опишите вашу ситуацию
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашей проблеме..."
                      rows={5}
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg h-16 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all"
                  >
                    <Icon name="Sparkles" size={24} className="mr-2" />
                    Узнать сумму компенсации бесплатно
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    🔒 Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <a href="tel:+79991234567" className="text-primary font-semibold hover:underline">+7 (999) 123-45-67</a>
                <p className="text-sm text-muted-foreground mt-1">Звоните 24/7</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:info@avtourist.ru" className="text-primary font-semibold hover:underline">info@avtourist.ru</a>
                <p className="text-sm text-muted-foreground mt-1">Ответим за 15 минут</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-primary font-semibold">г. Москва, ул. Примерная, 1</p>
                <p className="text-sm text-muted-foreground mt-1">Приём по записи</p>
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