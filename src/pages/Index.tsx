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
  const [cart, setCart] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Регистрация ИП',
      description: 'Государственная регистрация индивидуального предпринимателя с получением всех документов',
      price: 800,
      duration: '1-3 рабочих дня',
      icon: 'UserCheck',
      popular: true,
      category: 'Регистрация'
    },
    {
      id: 2,
      title: 'Регистрация ООО',
      description: 'Государственная регистрация общества с ограниченной ответственностью',
      price: 4000,
      duration: '5-7 рабочих дней',
      icon: 'Building2',
      popular: true,
      category: 'Регистрация'
    },
    {
      id: 3,
      title: 'Справка об отсутствии судимости',
      description: 'Официальная справка из МВД об отсутствии судимости для трудоустройства',
      price: 300,
      duration: '7-10 рабочих дней',
      icon: 'Shield',
      popular: false,
      category: 'Справки'
    },
    {
      id: 4,
      title: 'Выписка из ЕГРН',
      description: 'Выписка из Единого государственного реестра недвижимости',
      price: 460,
      duration: '1-2 рабочих дня',
      icon: 'FileText',
      popular: true,
      category: 'Недвижимость'
    },
    {
      id: 5,
      title: 'Получение паспорта РФ',
      description: 'Оформление и получение паспорта гражданина Российской Федерации',
      price: 300,
      duration: '10-30 рабочих дней',
      icon: 'CreditCard',
      popular: false,
      category: 'Документы'
    },
    {
      id: 6,
      title: 'Лицензирование деятельности',
      description: 'Получение лицензий на осуществление различных видов деятельности',
      price: 7500,
      duration: '30-45 рабочих дней',
      icon: 'Award',
      popular: false,
      category: 'Лицензии'
    }
  ];

  const testimonials = [
    {
      name: 'Александр Петров',
      company: 'ИП Петров А.С.',
      text: 'Быстро зарегистрировали ИП онлайн. Все документы получил по почте через 2 дня.',
      rating: 5,
      service: 'Регистрация ИП'
    },
    {
      name: 'Мария Сидорова',
      company: 'ООО "Сидорова и партнеры"',
      text: 'Отличный сервис! Помогли с регистрацией ООО, все прошло без проблем.',
      rating: 5,
      service: 'Регистрация ООО'
    },
    {
      name: 'Игорь Васильев',
      company: 'Частное лицо',
      text: 'Заказал справку об отсутствии судимости. Получил точно в срок, качество отличное.',
      rating: 5,
      service: 'Справка об отсутствии судимости'
    }
  ];

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ГосУслуги+</h1>
                <p className="text-sm text-gray-600">Федеральная служба государственных услуг</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Услуги</a>
              <a href="#prices" className="text-gray-700 hover:text-blue-600 font-medium">Тарифы</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">О нас</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Отзывы</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 font-medium">Контакты</a>
            </nav>

            <div className="flex items-center space-x-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="relative">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Корзина
                    {cart.length > 0 && (
                      <Badge className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 text-xs">
                        {cart.length}
                      </Badge>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Корзина услуг</DialogTitle>
                    <DialogDescription>
                      Выбранные государственные услуги для оплаты
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    {cart.length === 0 ? (
                      <p className="text-gray-500 text-center py-8">Корзина пуста</p>
                    ) : (
                      <>
                        {cart.map((item, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.duration}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="font-bold text-lg">{item.price.toLocaleString()} ₽</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <Icon name="Trash2" size={16} />
                                </Button>
                              </div>
                            </div>
                          </Card>
                        ))}
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-bold">Итого:</span>
                            <span className="text-2xl font-bold text-blue-600">
                              {getTotalPrice().toLocaleString()} ₽
                            </span>
                          </div>
                          <Button className="w-full" size="lg">
                            <Icon name="CreditCard" size={18} className="mr-2" />
                            Оплатить картой
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              {isLoggedIn ? (
                <Button variant="default" size="lg">
                  <Icon name="User" size={18} className="mr-2" />
                  Личный кабинет
                </Button>
              ) : (
                <Button onClick={() => setIsLoggedIn(true)} size="lg">
                  <Icon name="LogIn" size={18} className="mr-2" />
                  Войти
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Государственные услуги онлайн
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Быстро, удобно и официально. Получайте справки, регистрируйте бизнес 
                и оформляйте документы не выходя из дома. Все услуги с гарантией государства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти услугу
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-blue-600 text-blue-600">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Все тарифы
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/img/c0d594e6-f77f-4099-8185-96570f5532cd.jpg" 
                alt="Здание государственных услуг"
                className="rounded-2xl shadow-2xl w-full max-w-lg ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные государственные услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Оформляйте документы и получайте справки онлайн с официальной гарантией
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer group border-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Icon name={service.icon} size={24} className="text-blue-600" />
                    </div>
                    <div className="text-right">
                      {service.popular && (
                        <Badge className="bg-red-500 hover:bg-red-600 mb-2">Популярная</Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="mb-2 text-lg group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Срок:</span>
                      <span className="text-sm font-medium">{service.duration}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Госпошлина:</span>
                      <span className="text-xl font-bold text-blue-600">
                        {service.price.toLocaleString()} ₽
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedService(service)}
                      >
                        Подробнее
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => addToCart(service)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Icon name="Plus" size={16} className="mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши достижения</h2>
            <p className="text-lg text-gray-600">
              Доверие граждан и качество государственных услуг
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">1.2M+</CardTitle>
                <CardDescription>Довольных клиентов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="FileCheck" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">98%</CardTitle>
                <CardDescription>Услуг оказано в срок</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">24/7</CardTitle>
                <CardDescription>Доступность сервиса</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">100%</CardTitle>
                <CardDescription>Гарантия государства</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-gray-600">
              Что говорят граждане о качестве наших государственных услуг
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs bg-blue-50">
                      {testimonial.service}
                    </Badge>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section id="contacts" className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Поддержка и контакты</h2>
            <p className="text-lg text-gray-600">
              Готовы помочь с любыми вопросами по государственным услугам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Горячая линия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-blue-600 mb-2">8-800-100-70-10</p>
                <p className="text-sm text-gray-600">Круглосуточно, бесплатно</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Онлайн-чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">Чат с оператором</p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Открыть чат
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-white border-blue-100">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Офисы в регионах</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">85 региональных центров</p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600">
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Найти офис
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
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">ГосУслуги+</span>
              </div>
              <p className="text-gray-400 mb-4">
                Федеральная служба государственных услуг. Официальные документы с гарантией государства.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Регистрация бизнеса</a></li>
                <li><a href="#" className="hover:text-white">Справки</a></li>
                <li><a href="#" className="hover:text-white">Лицензии</a></li>
                <li><a href="#" className="hover:text-white">Документы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Тарифы</a></li>
                <li><a href="#" className="hover:text-white">Способы оплаты</a></li>
                <li><a href="#" className="hover:text-white">Сроки исполнения</a></li>
                <li><a href="#" className="hover:text-white">Правовая информация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8-800-100-70-10</li>
                <li>support@gosuslugi.ru</li>
                <li>Круглосуточно</li>
                <li>Без выходных</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Федеральная служба государственных услуг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;