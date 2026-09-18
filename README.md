# Портфолио e-learning разработчика

Одностраничное портфолио на React + TypeScript + Vite.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовая сборка появится в папке `dist`.

## Публикация на Vercel

1. Создайте репозиторий на GitHub и загрузите туда содержимое проекта.
2. В Vercel выберите **Add New → Project** и импортируйте репозиторий.
3. Vercel автоматически определит Vite.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Нажмите **Deploy**.

## Контакты

Email: `marina_barinova26@mail.ru`

## PDF-портфолио

Кнопки PDF уже предусмотрены в интерфейсе. После подготовки презентации файл можно положить в `public/portfolio.pdf` и заменить ссылки `href="#contact"` на `href="/portfolio.pdf"` с атрибутом `download`.
