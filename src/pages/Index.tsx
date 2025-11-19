import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const schedule = [
  { day: 'Понедельник', time: '18:00 - 21:00', available: true },
  { day: 'Среда', time: '18:00 - 21:00', available: true },
  { day: 'Пятница', time: '15:00 - 18:00', available: false },
  { day: 'Суббота', time: '12:00 - 15:00', available: true },
  { day: 'Воскресенье', time: '14:00 - 17:00', available: true },
];

const prices = [
  { title: 'Пробное занятие', price: '2 500 ₽', duration: '2 часа', features: ['Все материалы включены', 'Инструменты предоставляются', 'Забираете свою работу'] },
  { title: 'Стандартный курс', price: '12 000 ₽', duration: '4 занятия', features: ['Полный курс тафтинга', 'Все материалы включены', 'Готовые работы домой', 'Сертификат по окончанию'], popular: true },
  { title: 'Индивидуальное занятие', price: '4 500 ₽', duration: '3 часа', features: ['Персональное внимание', 'Гибкий график', 'Все материалы', 'Любой уровень сложности'] },
];

const gallery = [
  { id: 1, alt: 'Тафтинг работа 1' },
  { id: 2, alt: 'Тафтинг работа 2' },
  { id: 3, alt: 'Тафтинг работа 3' },
  { id: 4, alt: 'Тафтинг работа 4' },
  { id: 5, alt: 'Тафтинг работа 5' },
  { id: 6, alt: 'Тафтинг работа 6' },
];

const testimonials = [
  { name: 'Анна Соколова', text: 'Невероятные ощущения! За одно занятие создала свой первый коврик. Юлия — прекрасный мастер, всё объясняет понятно и с душой.', rating: 5 },
  { name: 'Михаил Петров', text: 'Пришёл с девушкой на мастер-класс, оба в восторге! Теперь у нас дома висит наше совместное творение. Однозначно вернёмся ещё.', rating: 5 },
  { name: 'Екатерина Волкова', text: 'Прошла полный курс. Теперь делаю коврики на заказ! Спасибо за знания и вдохновение. Студия уютная, атмосфера творческая.', rating: 5 },
];

export default function Index() {
  const [selectedDay, setSelectedDay] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCw0LTRzNCwyIDQgNHYyYzAgMi0yIDQtNCA0cy00LTItNC00di0yem0wLTMwYzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNC00IDItNC00LTR2LTJ6bS0yMCAwYzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNC00IDItNC00LTR2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-secondary text-primary hover:bg-secondary/90 text-base px-4 py-2">
              Творческая студия в Санкт-Петербурге
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Мастер-классы<br />по тафтингу
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Создавайте уникальные ковры и декор своими руками. Без опыта, с нуля, за одно занятие.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                    Записаться на занятие
                    <Icon name="ArrowRight" className="ml-2" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Запись на мастер-класс</DialogTitle>
                    <DialogDescription>
                      Оставьте заявку, и мы свяжемся с вами в ближайшее время
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Анна" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Комментарий</Label>
                      <Textarea id="message" placeholder="Удобное время для звонка..." />
                    </div>
                    <Button className="w-full" size="lg">Отправить заявку</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                Смотреть работы
                <Icon name="Image" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-lg text-muted-foreground">Выберите удобное время для творчества</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((slot) => (
              <Card 
                key={slot.day} 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedDay === slot.day ? 'ring-2 ring-primary shadow-lg' : ''
                } ${!slot.available ? 'opacity-60' : ''}`}
                onClick={() => slot.available && setSelectedDay(slot.day)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{slot.day}</span>
                    {slot.available ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Есть места</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Занято</Badge>
                    )}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">{slot.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span>Продолжительность: 3 часа</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Стоимость занятий</h2>
            <p className="text-lg text-muted-foreground">Выберите подходящий формат обучения</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : ''}`}>
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{price.title}</CardTitle>
                  <CardDescription>{price.duration}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{price.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" size="lg" variant={price.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
          <p className="text-lg text-muted-foreground">Работы наших учеников</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {gallery.map((item) => (
            <div key={item.id} className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/40 to-primary/30 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <Icon name="Image" size={48} className="text-primary/40" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы учеников</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты и местоположение</h2>
              <p className="text-xl text-white/90">Приходите к нам в студию</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-white/90">Санкт-Петербург, Лиговский пр., 74</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-white/90">+7 (812) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-white/90">hello@tufting-spb.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Icon name="Instagram" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram</h3>
                    <p className="text-white/90">@tufting_spb</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-white/70">Карта студии</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/70">© 2024 Студия тафтинга. Санкт-Петербург</p>
        </div>
      </footer>
    </div>
  );
}