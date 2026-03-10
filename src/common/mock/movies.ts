// Моковые данные для фильмов
export const mockMovies = {
  popular: [
    {
      id: 1,
      title: 'Дюна: Часть вторая',
      poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
      backdrop_path: '/xqmldAUa8g1Z9H9WpJx8yRqRQzF.jpg',
      vote_average: 8.5,
      release_date: '2024-03-07',
      overview: 'Пол Атрейдес объединяется с Чани и фрименами, чтобы отомстить заговорщикам, уничтожившим его семью.',
      genres: [878, 12, 18] // Science Fiction, Adventure, Drama
    },
    {
      id: 2,
      title: 'Годзилла и Конг: Новая империя',
      poster_path: '/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      backdrop_path: '/xRd1eJIDiMSLq7V2j7RwP9RdjAR.jpg',
      vote_average: 7.8,
      release_date: '2024-03-28',
      overview: 'Два древних титана объединяются, чтобы сразиться с новой угрозой, скрывающейся в нашем мире.',
      genres: [28, 878, 12] // Action, Science Fiction, Adventure
    },
    {
      id: 3,
      title: 'Мастер и Маргарита',
      poster_path: '/jBkryFmQPAiK70U1SgK4ShbE0Jw.jpg',
      backdrop_path: '/z9p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      vote_average: 8.2,
      release_date: '2024-01-25',
      overview: 'Москва 1930-х годов. Загадочный иностранный маг и его свита переворачивают жизнь города.',
      genres: [18, 14, 53] // Drama, Fantasy, Thriller
    },
    {
      id: 4,
      title: 'Бедные-несчастные',
      poster_path: '/kCGlIMHnMm8Bn4ST9ieKFMnM8Jq.jpg',
      backdrop_path: '/wRd1eJIDiMSLq7V2j7RwP9RdjAR.jpg',
      vote_average: 8.0,
      release_date: '2024-01-18',
      overview: 'История о молодой женщине, возвращенной к жизни гениальным ученым.',
      genres: [35, 18, 10749] // Comedy, Drama, Romance
    },
    {
      id: 5,
      title: 'Аквамен и потерянное царство',
      poster_path: '/7lTnXOy0iNtBAdRP3TZvaKJ77Fv.jpg',
      backdrop_path: '/xRd1eJIDiMSLq7V2j7RwP9RdjAR.jpg',
      vote_average: 6.5,
      release_date: '2023-12-20',
      overview: 'Аквамен объединяется с братом, чтобы защитить Атлантиду от новой угрозы.',
      genres: [28, 12, 14] // Action, Adventure, Fantasy
    },
    {
      id: 6,
      title: 'Миграция',
      poster_path: '/2sfD0Rw2XgZYKPYsMzRchZkFJhH.jpg',
      backdrop_path: '/z9p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      vote_average: 7.5,
      release_date: '2024-02-22',
      overview: 'Семья уток пытается убедить своего сверхзаботливого отца отправиться в путешествие.',
      genres: [16, 35, 12] // Animation, Comedy, Adventure
    },
    {
      id: 7,
      title: 'Кунг-фу Панда 4',
      poster_path: '/1X7M6rXk5nKkq8v9cRyLkCjLfYh.jpg',
      backdrop_path: '/xRd1eJIDiMSLq7V2j7RwP9RdjAR.jpg',
      vote_average: 7.2,
      release_date: '2024-03-14',
      overview: 'По выбирает нового Воина Дракона и готовится стать духовным лидером Долины Мира.',
      genres: [16, 28, 35] // Animation, Action, Comedy
    },
  ],
  
  topRated: [
    {
      id: 101,
      title: 'Побег из Шоушенка',
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
      vote_average: 9.3,
      release_date: '1994-09-10',
      overview: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника.',
      genres: [18] // Drama
    },
    {
      id: 102,
      title: 'Крёстный отец',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
      vote_average: 9.2,
      release_date: '1972-03-14',
      overview: 'Криминальная сага о сицилийской мафиозной семье Корлеоне в Америке 1940-х годов.',
      genres: [18, 80] // Drama, Crime
    },
    {
      id: 103,
      title: 'Тёмный рыцарь',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      backdrop_path: '/hqkIcbrOHyTqudHBYmK0Pqk7bgm.jpg',
      vote_average: 9.0,
      release_date: '2008-07-18',
      overview: 'Бэтмен вступает в смертельную схватку с Джокером, криминальным гением Готэма.',
      genres: [28, 80, 18] // Action, Crime, Drama
    },
    {
      id: 104,
      title: 'Криминальное чтиво',
      poster_path: '/5fnFdmeBg7pL6t7j0wHh2T1qgG0.jpg',
      backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
      vote_average: 8.9,
      release_date: '1994-05-21',
      overview: 'Несколько переплетающихся историй о преступниках в Лос-Анджелесе.',
      genres: [53, 80] // Thriller, Crime
    },
    {
      id: 105,
      title: 'Властелин колец: Возвращение короля',
      poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      backdrop_path: '/xxJHnBZZO2s6MTXj1LQyT6hX8yU.jpg',
      vote_average: 8.9,
      release_date: '2003-12-17',
      overview: 'Фродо и Сэм продолжают путь к Роковой горе, а Арагорн готовится к последней битве.',
      genres: [12, 14, 28] // Adventure, Fantasy, Action
    },
    {
      id: 106,
      title: 'Бойцовский клуб',
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      backdrop_path: '/8uO3S9vQ8W2Fq6YKK3aPxX1zGvE.jpg',
      vote_average: 8.8,
      release_date: '1999-10-15',
      overview: 'Офисный работник встречает загадочного торговца мылом и создает подпольный бойцовский клуб.',
      genres: [18, 53] // Drama, Thriller
    },
  ],
  
  upcoming: [
    {
      id: 201,
      title: 'Дэдпул и Росомаха',
      poster_path: '/yQcE6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 0,
      release_date: '2024-07-26',
      overview: 'Дэдпул путешествует во времени, чтобы завербовать Росомаху для спасения своей вселенной.',
      genres: [28, 35, 878] // Action, Comedy, Science Fiction
    },
    {
      id: 202,
      title: 'Головоломка 2',
      poster_path: '/y7xQ6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 0,
      release_date: '2024-06-14',
      overview: 'Новые эмоции появляются в голове Райли, которая становится подростком.',
      genres: [16, 35, 18] // Animation, Comedy, Drama
    },
    {
      id: 203,
      title: 'Гладиатор 2',
      poster_path: '/z7xQ6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 0,
      release_date: '2024-11-22',
      overview: 'Продолжение истории о гладиаторах в Древнем Риме спустя годы после событий первого фильма.',
      genres: [28, 12, 18] // Action, Adventure, Drama
    },
    {
      id: 204,
      title: 'Ворон',
      poster_path: '/a7xQ6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 0,
      release_date: '2024-06-07',
      overview: 'Рок-музыкант возвращается с того света, чтобы отомстить за смерть своей невесты.',
      genres: [28, 14, 53] // Action, Fantasy, Thriller
    },
    {
      id: 205,
      title: 'Фуриоса: Хроники Безумного Макса',
      poster_path: '/b7xQ6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 0,
      release_date: '2024-05-24',
      overview: 'История происхождения воительницы Фуриосы в мире Безумного Макса.',
      genres: [28, 12, 878] // Action, Adventure, Science Fiction
    },
    {
      id: 206,
      title: 'Плохие парни 4',
      poster_path: '/c7xQ6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 0,
      release_date: '2024-06-14',
      overview: 'Детективы Майк Лоури и Маркус Бёрнетт возвращаются для нового расследования.',
      genres: [28, 35, 80] // Action, Comedy, Crime
    },
  ],
  
  nowPlaying: [
    {
      id: 301,
      title: 'Дюна: Часть вторая',
      poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
      backdrop_path: '/xqmldAUa8g1Z9H9WpJx8yRqRQzF.jpg',
      vote_average: 8.5,
      release_date: '2024-03-07',
      overview: 'Пол Атрейдес объединяется с Чани и фрименами.',
      genres: [878, 12, 18] // Science Fiction, Adventure, Drama
    },
    {
      id: 302,
      title: 'Кунг-фу Панда 4',
      poster_path: '/1X7M6rXk5nKkq8v9cRyLkCjLfYh.jpg',
      backdrop_path: '/xRd1eJIDiMSLq7V2j7RwP9RdjAR.jpg',
      vote_average: 7.2,
      release_date: '2024-03-14',
      overview: 'По выбирает нового Воина Дракона.',
      genres: [16, 28, 35] // Animation, Action, Comedy
    },
    {
      id: 303,
      title: 'Охотники за привидениями',
      poster_path: '/2sfD0Rw2XgZYKPYsMzRchZkFJhH.jpg',
      backdrop_path: '/z9p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      vote_average: 6.8,
      release_date: '2024-03-21',
      overview: 'Новая команда охотников за привидениями берется за дело.',
      genres: [35, 14, 878] // Comedy, Fantasy, Science Fiction
    },
    {
      id: 304,
      title: 'Мастер и Маргарита',
      poster_path: '/jBkryFmQPAiK70U1SgK4ShbE0Jw.jpg',
      backdrop_path: '/z9p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
      vote_average: 8.2,
      release_date: '2024-01-25',
      overview: 'Москва 1930-х годов. Загадочный иностранный маг.',
      genres: [18, 14, 53] // Drama, Fantasy, Thriller
    },
    {
      id: 305,
      title: 'Бедные-несчастные',
      poster_path: '/kCGlIMHnMm8Bn4ST9ieKFMnM8Jq.jpg',
      backdrop_path: '/wRd1eJIDiMSLq7V2j7RwP9RdjAR.jpg',
      vote_average: 8.0,
      release_date: '2024-01-18',
      overview: 'История о молодой женщине, возвращенной к жизни.',
      genres: [35, 18, 10749] // Comedy, Drama, Romance
    },
    {
      id: 306,
      title: 'Лёд 3',
      poster_path: '/l7xQ6XqWX8Zz5JQ3K7qJvL8kZcV.jpg',
      backdrop_path: '/hx7Q6QnQzQyL6X7Q8Q9Q0Q1Q2Q3Q.jpg',
      vote_average: 7.1,
      release_date: '2024-02-14',
      overview: 'Продолжение истории о фигуристах.',
      genres: [18, 10749] // Drama, Romance
    },
  ],
};