import { useWindowScroll } from './hooks';

export const App = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <div style={{ height: '200vh', padding: '20px' }}>
        <h2>Демонстрация useWindowScroll</h2>

        <div
          style={{
            position: 'fixed',
            top: 0,
            background: 'white',
            padding: '10px',
          }}
        >
          <p>
            Позиция скролла: x: {scroll.x}, y: {scroll.y}
          </p>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={() => scrollTo({ y: 0 })}>
              В начало (мгновенно)
            </button>

            <button onClick={() => scrollTo({ y: 0, behavior: 'smooth' })}>
              В начало (плавно)
            </button>

            <button onClick={() => scrollTo({ y: 500, behavior: 'smooth' })}>
              К 500px (плавно)
            </button>

            <button
              onClick={() => scrollTo({ y: 1000, x: 100, behavior: 'smooth' })}
            >
              К (100, 1000)
            </button>

            <button onClick={() => scrollTo({ x: 0 })}>Влево</button>
          </div>
        </div>

        <div style={{ marginTop: '100px' }}>
          <p>
            Прокручивайте страницу вниз, чтобы увидеть изменение позиции скролла
          </p>
          <div
            style={{
              height: '1500px',
              background: 'linear-gradient(white, lightblue)',
            }}
          />
        </div>
      </div>
    </>
  );
};
