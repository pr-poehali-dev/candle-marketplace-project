import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Коралловая свеча",
      description: "Ароматная свеча из натурального оливкового воска с нотами цитруса",
      price: "1 200 ₽",
      image: "/img/0bb94ccf-8c64-44d0-b233-40b5dd1ed8f7.jpg",
      category: "Ароматные"
    },
    {
      id: 2,
      name: "Набор бирюзовых свечей",
      description: "Три элегантные свечи разных размеров из оливкового воска",
      price: "2 800 ₽",
      image: "/img/e1051f29-bada-4e2d-9b38-a2103f4e166e.jpg",
      category: "Наборы"
    },
    {
      id: 3,
      name: "Лавандовая свеча в банке",
      description: "Успокаивающий аромат лаванды в стильной стеклянной банке",
      price: "1 500 ₽",
      image: "/img/4b448646-6fd5-4fb0-8770-908b9d94df3c.jpg",
      category: "Релакс"
    }
  ];

  const reviews = [
    {
      name: "Анна К.",
      text: "Потрясающее качество! Свечи горят долго и равномерно, аромат ненавязчивый.",
      rating: 5
    },
    {
      name: "Михаил С.",
      text: "Заказал набор в подарок - все в восторге! Упаковка тоже очень красивая.",
      rating: 5
    },
    {
      name: "Елена В.",
      text: "Натуральный воск чувствуется сразу. Никаких химических запахов!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Flame" size={32} className="text-coral" />
            <h1 className="text-2xl font-bold font-montserrat text-dark-blue">Свечи Ручной Работы</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-dark-blue hover:text-coral transition-colors">Главная</a>
            <a href="#catalog" className="text-dark-blue hover:text-coral transition-colors">Каталог</a>
            <a href="#about" className="text-dark-blue hover:text-coral transition-colors">О нас</a>
            <a href="#contacts" className="text-dark-blue hover:text-coral transition-colors">Контакты</a>
            <a href="#delivery" className="text-dark-blue hover:text-coral transition-colors">Доставка</a>
            <a href="#reviews" className="text-dark-blue hover:text-coral transition-colors">Отзывы</a>
          </nav>
          <Button className="bg-coral hover:bg-coral/90 text-white">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-turquoise/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold font-montserrat text-dark-blue mb-6">
              Свечи из натурального 
              <span className="bg-gradient-to-r from-coral to-turquoise bg-clip-text text-transparent"> оливкового воска</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Создаем уютную атмосферу в вашем доме с помощью экологически чистых свечей ручной работы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg">
                <Icon name="ShoppingBag" size={24} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button size="lg" variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-4 text-lg">
                <Icon name="Info" size={24} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-dark-blue mb-4">Наш каталог</h2>
            <p className="text-xl text-gray-600">Выберите свечи для создания идеальной атмосферы</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-coral text-white">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-dark-blue">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-coral">{product.price}</span>
                    <Button className="bg-turquoise hover:bg-turquoise/90 text-white">
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-montserrat text-dark-blue mb-6">О нашем производстве</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создаем свечи из 100% натурального оливкового воска, который горит чище и дольше обычного парафина. 
                Каждая свеча изготавливается вручную с особой заботой о качестве и экологичности.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Icon name="Leaf" size={48} className="text-turquoise mx-auto mb-2" />
                  <h3 className="font-montserrat font-semibold text-dark-blue">Эко-материалы</h3>
                  <p className="text-sm text-gray-600">Натуральный оливковый воск</p>
                </div>
                <div className="text-center p-4">
                  <Icon name="Heart" size={48} className="text-coral mx-auto mb-2" />
                  <h3 className="font-montserrat font-semibold text-dark-blue">Ручная работа</h3>
                  <p className="text-sm text-gray-600">Каждая свеча уникальна</p>
                </div>
                <div className="text-center p-4">
                  <Icon name="Clock" size={48} className="text-turquoise mx-auto mb-2" />
                  <h3 className="font-montserrat font-semibold text-dark-blue">Долгое горение</h3>
                  <p className="text-sm text-gray-600">До 60 часов</p>
                </div>
                <div className="text-center p-4">
                  <Icon name="Shield" size={48} className="text-coral mx-auto mb-2" />
                  <h3 className="font-montserrat font-semibold text-dark-blue">Безопасность</h3>
                  <p className="text-sm text-gray-600">Без токсичных веществ</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-coral/20 to-turquoise/20 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Icon name="Flame" size={120} className="text-coral/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-dark-blue mb-4">Отзывы покупателей</h2>
            <p className="text-xl text-gray-600">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="font-montserrat text-dark-blue">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-dark-blue mb-4">Доставка и оплата</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Icon name="Truck" size={48} className="text-coral mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">По Москве за 1-2 дня, по России за 3-7 дней</p>
            </div>
            <div className="text-center">
              <Icon name="Package" size={48} className="text-turquoise mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Безопасная упаковка</h3>
              <p className="text-gray-600">Специальная упаковка для хрупких товаров</p>
            </div>
            <div className="text-center">
              <Icon name="CreditCard" size={48} className="text-coral mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Удобная оплата</h3>
              <p className="text-gray-600">Картой, наличными или переводом</p>
            </div>
            <div className="text-center">
              <Icon name="Gift" size={48} className="text-turquoise mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Подарочная упаковка</h3>
              <p className="text-gray-600">Красивое оформление в подарок</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-montserrat text-dark-blue mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600">Мы всегда рады ответить на ваши вопросы</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" size={48} className="text-coral mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={48} className="text-turquoise mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Email</h3>
              <p className="text-gray-600">info@candles.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={48} className="text-coral mx-auto mb-4" />
              <h3 className="font-montserrat font-semibold text-dark-blue mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flame" size={24} className="text-coral" />
                <span className="font-montserrat font-semibold">Свечи Ручной Работы</span>
              </div>
              <p className="text-gray-300">Создаем уют в вашем доме с помощью натуральных свечей из оливкового воска</p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-coral transition-colors">Главная</a></li>
                <li><a href="#catalog" className="hover:text-coral transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-coral transition-colors">О нас</a></li>
                <li><a href="#contacts" className="hover:text-coral transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#delivery" className="hover:text-coral transition-colors">Доставка</a></li>
                <li><a href="#reviews" className="hover:text-coral transition-colors">Отзывы</a></li>
                <li>Политика конфиденциальности</li>
                <li>Условия использования</li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Icon name="Instagram" size={24} className="text-gray-300 hover:text-coral transition-colors cursor-pointer" />
                <Icon name="Facebook" size={24} className="text-gray-300 hover:text-coral transition-colors cursor-pointer" />
                <Icon name="Twitter" size={24} className="text-gray-300 hover:text-coral transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Свечи Ручной Работы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;