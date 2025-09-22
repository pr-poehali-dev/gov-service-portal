import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userApplications, setUserApplications] = useState([
    { id: 1, title: 'Получение справки о доходах', status: 'В обработке', date: '15.09.2025' },
    { id: 2, title: 'Регистрация ИП', status: 'Готово', date: '10.09.2025' },
  ]);

  const services = [
    {
      title: 'Социальные выплаты',
      description: 'Оформление пособий, льгот и социальных выплат',
      icon: 'Users',
      popular: true
    },
    {
      title: 'Документы и справки',
      description: 'Получение справок, выписок и других документов',
      icon: 'FileText',
      popular: true
    },
    {
      title: 'Регистрация ИП',
      description: 'Регистрация индивидуального предпринимателя',
      icon: 'Building',
      popular: false
    },
    {
      title: 'Налоговые услуги',
      description: 'Подача деклараций и налоговых уведомлений',
      icon: 'Calculator',
      popular: true
    },
    {
      title: 'Земельные вопросы',
      description: 'Оформление земельных участков и разрешений',
      icon: 'Map',
      popular: false
    },
    {
      title: 'Медицинские услуги',
      description: 'Запись к врачу и получение медицинских справок',
      icon: 'Heart',
      popular: true
    }
  ];

  const news = [
    {
      title: 'Новый порядок оформления социальных выплат',
      date: '20.09.2025',
      description: 'С 1 октября вступают в силу упрощенные процедуры оформления социальных выплат.'
    },
    {
      title: 'График работы в праздничные дни',
      date: '18.09.2025', 
      description: 'Информируем о режиме работы государственных служб в предстоящие праздничные дни.'
    },
    {
      title: 'Запущен новый сервис электронных справок',
      date: '15.09.2025',
      description: 'Теперь большинство справок можно получить в электронном виде через личный кабинет.'
    }
  ];

  const faq = [
    {
      question: 'Как зарегистрироваться в личном кабинете?',
      answer: 'Для регистрации используйте кнопку "Войти" и следуйте инструкциям. Потребуется паспорт и СНИЛС.'
    },
    {
      question: 'Сколько времени занимает рассмотрение заявления?',
      answer: 'Срок рассмотрения зависит от типа услуги. Большинство заявлений рассматривается в течение 10 рабочих дней.'
    },
    {
      question: 'Можно ли отследить статус заявления?',
      answer: 'Да, в личном кабинете вы можете отслеживать статус всех поданных заявлений в режиме реального времени.'
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Building2" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Госуслуги</h1>
                <p className="text-sm text-gray-600">Портал государственных услуг</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-primary font-medium">Услуги</a>
              <a href="#documents" className="text-gray-700 hover:text-primary font-medium">Документы</a>
              <a href="#news" className="text-gray-700 hover:text-primary font-medium">Новости</a>
              <a href="#faq" className="text-gray-700 hover:text-primary font-medium">Вопросы</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary font-medium">Контакты</a>
            </nav>

            <div className="flex items-center space-x-3">
              {isLoggedIn ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" size="lg">
                      <Icon name="User" size={18} className="mr-2" />
                      Личный кабинет
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Личный кабинет</DialogTitle>
                      <DialogDescription>
                        Управление заявками и персональными данными
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="applications" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="applications">Мои заявки</TabsTrigger>
                        <TabsTrigger value="profile">Профиль</TabsTrigger>
                      </TabsList>
                      <TabsContent value="applications" className="space-y-4">
                        {userApplications.map((app) => (
                          <Card key={app.id}>
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-base">{app.title}</CardTitle>
                                <Badge variant={app.status === 'Готово' ? 'default' : 'secondary'}>
                                  {app.status}
                                </Badge>
                              </div>
                              <CardDescription>Подано {app.date}</CardDescription>
                            </CardHeader>
                          </Card>
                        ))}
                        <Button className="w-full" size="lg">
                          <Icon name="Plus" size={18} className="mr-2" />
                          Подать новую заявку
                        </Button>
                      </TabsContent>
                      <TabsContent value="profile" className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Персональные данные</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">ФИО</label>
                              <Input defaultValue="Иванов Иван Иванович" className="mt-1" />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Email</label>
                              <Input defaultValue="ivan@example.com" className="mt-1" />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Телефон</label>
                              <Input defaultValue="+7 (999) 123-45-67" className="mt-1" />
                            </div>
                            <Button>Сохранить изменения</Button>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              ) : (
                <Button onClick={handleLogin} size="lg">
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Войти
                </Button>
              )}
              <Button variant="outline" size="lg">
                <Icon name="Menu" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Государственные услуги онлайн
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Быстро, удобно и безопасно получайте государственные услуги, 
                не выходя из дома. Подавайте заявления и отслеживайте их статус 
                в личном кабинете.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти услугу
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="HelpCircle" size={20} className="mr-2" />
                  Помощь
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/img/9111daff-a157-4f43-b582-988b93541828.jpg" 
                alt="Здание государственных служб"
                className="rounded-2xl shadow-2xl w-full max-w-lg ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наиболее востребованные государственные услуги, доступные в электронном виде
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    {service.popular && (
                      <Badge variant="secondary" className="text-xs">Популярная</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2 text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="mt-4 p-0 text-primary">
                    Подробнее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Новости и объявления</h2>
            <p className="text-lg text-gray-600">
              Актуальная информация об изменениях в работе государственных служб
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {item.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <Button variant="link" size="sm" className="mt-3 p-0 text-primary">
                    Читать полностью →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы о получении государственных услуг
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardHeader className="cursor-pointer">
                  <CardTitle className="text-lg flex items-center justify-between">
                    {item.question}
                    <Icon name="ChevronDown" size={20} className="text-gray-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты и поддержка</h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами для получения помощи или консультации
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон поддержки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary mb-2">8-800-100-70-10</p>
                <p className="text-sm text-gray-600">Круглосуточно, бесплатно</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <CardTitle>Часы работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-1">Пн-Пт: 8:00 - 20:00</p>
                <p className="font-semibold mb-2">Сб: 9:00 - 18:00</p>
                <p className="text-sm text-gray-600">Онлайн - круглосуточно</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Офисы обслуживания</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">120+ отделений</p>
                <Button variant="outline" size="sm">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Найти ближайший
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Building2" size={24} className="text-primary" />
                <span className="text-xl font-semibold">Госуслуги</span>
              </div>
              <p className="text-gray-400 mb-4">
                Портал государственных услуг - ваш надежный помощник в решении любых вопросов.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Социальные выплаты</a></li>
                <li><a href="#" className="hover:text-white">Документы</a></li>
                <li><a href="#" className="hover:text-white">Регистрация ИП</a></li>
                <li><a href="#" className="hover:text-white">Налоговые услуги</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Помощь</a></li>
                <li><a href="#" className="hover:text-white">Инструкции</a></li>
                <li><a href="#" className="hover:text-white">Вопросы и ответы</a></li>
                <li><a href="#" className="hover:text-white">Обратная связь</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8-800-100-70-10</li>
                <li>support@gosuslugi.ru</li>
                <li>Пн-Пт: 8:00 - 20:00</li>
                <li>Сб: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Портал государственных услуг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;