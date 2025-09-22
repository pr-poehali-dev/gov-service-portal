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
  const [userProjects, setUserProjects] = useState([
    { id: 1, title: 'Экологическая экспертиза завода', status: 'На рассмотрении', date: '15.09.2025' },
    { id: 2, title: 'Отчет по выбросам предприятия', status: 'Утвержден', date: '10.09.2025' },
  ]);

  const services = [
    {
      title: 'Экологическое проектирование',
      description: 'Разработка проектов природоохранных мероприятий и экологической документации',
      icon: 'TreePine',
      popular: true
    },
    {
      title: 'Экологическая экспертиза',
      description: 'Государственная экологическая экспертиза проектов и документации',
      icon: 'FileSearch',
      popular: true
    },
    {
      title: 'Экологическая отчетность',
      description: 'Подача и проверка отчетов о воздействии на окружающую среду',
      icon: 'BarChart3',
      popular: true
    },
    {
      title: 'Разрешения на выбросы',
      description: 'Получение разрешений на выбросы загрязняющих веществ',
      icon: 'Wind',
      popular: false
    },
    {
      title: 'Экологический мониторинг',
      description: 'Организация и проведение экологического мониторинга территорий',
      icon: 'Activity',
      popular: true
    },
    {
      title: 'Нормирование отходов',
      description: 'Разработка нормативов образования отходов и лимитов на их размещение',
      icon: 'Recycle',
      popular: false
    }
  ];

  const news = [
    {
      title: 'Новые требования к экологической отчетности с 2025 года',
      date: '20.09.2025',
      description: 'Вступили в силу обновленные требования к составлению и подаче экологических отчетов предприятий.'
    },
    {
      title: 'Запуск цифровой платформы экологического мониторинга',
      date: '18.09.2025', 
      description: 'Начала работу новая система онлайн-мониторинга состояния окружающей среды.'
    },
    {
      title: 'Упрощение процедур получения экологических разрешений',
      date: '15.09.2025',
      description: 'Сокращены сроки рассмотрения заявлений на получение разрешений на выбросы и сбросы.'
    }
  ];

  const faq = [
    {
      question: 'Как подать заявку на экологическую экспертизу?',
      answer: 'Заявку можно подать через личный кабинет, приложив необходимые документы согласно техническому заданию.'
    },
    {
      question: 'Какие сроки рассмотрения экологической документации?',
      answer: 'Срок экологической экспертизы не превышает 60 дней со дня регистрации заявления с полным комплектом документов.'
    },
    {
      question: 'Можно ли отслеживать статус экологической экспертизы?',
      answer: 'Да, в личном кабинете доступна информация о текущем статусе рассмотрения всех поданных документов.'
    }
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Icon name="Leaf" size={32} className="text-primary" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">ЭкоПроект</h1>
                <p className="text-sm text-gray-600">Министерство экологии и природных ресурсов</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-primary font-medium">Услуги</a>
              <a href="#expertise" className="text-gray-700 hover:text-primary font-medium">Экспертиза</a>
              <a href="#monitoring" className="text-gray-700 hover:text-primary font-medium">Мониторинг</a>
              <a href="#news" className="text-gray-700 hover:text-primary font-medium">Новости</a>
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
                      <DialogTitle>Личный кабинет эколога</DialogTitle>
                      <DialogDescription>
                        Управление экологическими проектами и отчетностью
                      </DialogDescription>
                    </DialogHeader>
                    <Tabs defaultValue="projects" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="projects">Мои проекты</TabsTrigger>
                        <TabsTrigger value="reports">Отчетность</TabsTrigger>
                      </TabsList>
                      <TabsContent value="projects" className="space-y-4">
                        {userProjects.map((project) => (
                          <Card key={project.id}>
                            <CardHeader className="pb-3">
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-base">{project.title}</CardTitle>
                                <Badge variant={project.status === 'Утвержден' ? 'default' : 'secondary'}>
                                  {project.status}
                                </Badge>
                              </div>
                              <CardDescription>Подано {project.date}</CardDescription>
                            </CardHeader>
                          </Card>
                        ))}
                        <Button className="w-full" size="lg">
                          <Icon name="Plus" size={18} className="mr-2" />
                          Новый проект
                        </Button>
                      </TabsContent>
                      <TabsContent value="reports" className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Экологическая отчетность</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <label className="text-sm font-medium">Организация</label>
                              <Input defaultValue="ООО Экопром" className="mt-1" />
                            </div>
                            <div>
                              <label className="text-sm font-medium">ОКПО</label>
                              <Input defaultValue="12345678" className="mt-1" />
                            </div>
                            <div>
                              <label className="text-sm font-medium">Отчетный период</label>
                              <Input defaultValue="2024 год" className="mt-1" />
                            </div>
                            <Button>
                              <Icon name="Upload" size={16} className="mr-2" />
                              Загрузить отчет
                            </Button>
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
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Экологическое проектирование и нормирование
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Профессиональные услуги в сфере охраны окружающей среды. 
                Экологическая экспертиза, проектирование, отчетность и мониторинг 
                в соответствии с требованиями законодательства.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти услугу
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Нормативы
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/img/7148e574-8a61-4bc6-ba5d-8d0a957b332b.jpg" 
                alt="Экологически чистое здание"
                className="rounded-2xl shadow-2xl w-full max-w-lg ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Экологические услуги</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг в области охраны окружающей среды и экологического нормирования
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

      {/* Environmental Statistics */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Экологические показатели</h2>
            <p className="text-lg text-gray-600">
              Ключевые достижения в области охраны окружающей среды
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center bg-white">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="TreePine" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">2,847</CardTitle>
                <CardDescription>Экологических проектов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">98%</CardTitle>
                <CardDescription>Соответствие нормативам</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Factory" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">1,543</CardTitle>
                <CardDescription>Предприятий под контролем</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center bg-white">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="TrendingDown" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">-23%</CardTitle>
                <CardDescription>Снижение выбросов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Новости экологии</h2>
            <p className="text-lg text-gray-600">
              Последние изменения в экологическом законодательстве и практике
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
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-gray-600">
              Ответы на популярные вопросы по экологическому проектированию и экспертизе
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <Card key={index} className="bg-white">
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
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты и поддержка</h2>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами по вопросам экологического проектирования и экспертизы
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Горячая линия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold text-primary mb-2">8-800-200-30-40</p>
                <p className="text-sm text-gray-600">Пн-Пт: 9:00 - 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Электронная почта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-1">eco@minecology.ru</p>
                <p className="text-sm text-gray-600">Ответ в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Региональные офисы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">85 региональных центров</p>
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
                <Icon name="Leaf" size={24} className="text-primary" />
                <span className="text-xl font-semibold">ЭкоПроект</span>
              </div>
              <p className="text-gray-400 mb-4">
                Министерство экологии и природных ресурсов - защищаем окружающую среду вместе.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Экологическая экспертиза</a></li>
                <li><a href="#" className="hover:text-white">Проектирование</a></li>
                <li><a href="#" className="hover:text-white">Отчетность</a></li>
                <li><a href="#" className="hover:text-white">Мониторинг</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Нормативы</a></li>
                <li><a href="#" className="hover:text-white">Методики</a></li>
                <li><a href="#" className="hover:text-white">Регламенты</a></li>
                <li><a href="#" className="hover:text-white">Формы отчетности</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>8-800-200-30-40</li>
                <li>eco@minecology.ru</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
                <li>Сб: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Министерство экологии и природных ресурсов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;