# Хук useWindowScroll

Пользовательский хук React для отслеживания позиции скролла окна и программной прокрутки с оптимизацией производительности.

## Быстрый старт

```javascript
import { useWindowScroll } from './hooks/useWindowScroll';

function App() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>Текущий скролл: {scroll.y}px</p>
      <button onClick={() => scrollTo({ y: 0, behavior: 'smooth' })}>
        Наверх
      </button>
    </div>
  );
}
```

## Особенности

- ✅ **Оптимизация производительности** — встроенный throttling (100ms)
- ✅ **Плавная прокрутка** — поддержка `behavior: 'smooth'`
- ✅ **Гибкое API** — работает как нативный `window.scrollTo()`

## API

### Возвращаемое значение

`const [scroll, scrollTo] = useWindowScroll();`

| Параметр   | Тип                        | Описание                          |
| ---------- | -------------------------- | --------------------------------- |
| `scroll`   | `{ x: number, y: number }` | Текущая позиция скролла           |
| `scrollTo` | `function`                 | Функция для программной прокрутки |

### Функция `scrollTo(options)`

```javascript
// Все параметры опциональны
scrollTo({
  x?: number,     // Позиция по горизонтали (px)
  y?: number,     // Позиция по вертикали (px)
  behavior?: 'auto' | 'smooth'  // Тип прокрутки
});
```

## Примеры использования

### Базовый пример

```javascript
// Отслеживание позиции скролла
const [scroll] = useWindowScroll();
console.log(`Позиция: X=${scroll.x}, Y=${scroll.y}`);
```

### Кнопка "Наверх"

```javascript
<button onClick={() => scrollTo({ y: 0, behavior: 'smooth' })}>
  Плавно наверх
</button>
```

### Прокрутка к элементу

```javascript
const scrollToElement = () => {
  const element = document.getElementById('section');
  const y = element.offsetTop;
  scrollTo({ y, behavior: 'smooth' });
};
```
