import React from 'react';
import "./Home.css"
import GameItem from "../../components/GameItem/GameItem";

const Home = () => {

    const GAMES = [
        {
            image: "https://img.freepik.com/free-psd/gamer-banner-with-glitch-effect_1419-2359.jpg?w=1380",
            title: 'Forza Horizon 5',
            genres: ['Гонки', 'Симулятор', 'Открытый мир'],
            price: 2343,
            video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
            id: 1,
            description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
        },
        {
            image: "https://img.freepik.com/free-vector/video-game-controls-on-neon-style-on-brick-wall_24908-58916.jpg?size=338&ext=jpg&ga=GA1.1.1039566379.1645717468",
            title: 'Battlefield 2042',
            genres: ['Экшен', 'Шутер', 'Война'],
            video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
            price: 2433,
            id: 2,
            description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
        },
        {
            image: "https://img.freepik.com/free-photo/world-collapse-doomsday-scene-digital-painting_456031-63.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468",
            title: 'Life is Strange True Colors',
            genres: ['Глубокий сюжет', 'Протагонистка'],
            video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
            price: 3021,
            id: 3,
            description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
        },
        {
            image: "https://img.freepik.com/free-vector/space-game-background-neon-night-alien-landscape_107791-1624.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468",
            title: 'Grand Theft Auto V',
            genres: ['Открытый мир', 'Экшен'],
            video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
            price: 789,
            id: 4,
            description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
        },
        {
            image: "https://img.freepik.com/free-vector/knight-and-magic-portal-in-stone-frame-on-mountain-landscape-at-night-vector-cartoon-fantasy-illustration-with-man-in-medieval-costume-with-spear-and-ancient-arch-with-mystic-blue-glow_107791-5203.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468",
            title: 'Tom Clancy\'s Rainbow Six® Siege',
            video: 'https://www.youtube.com/embed/6wlvYh0h63k',
            genres: ['Тактика', 'Шутер'],
            price: 982,
            id: 5,
            description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
        },
        {
            image: "https://img.freepik.com/free-vector/mars-landscape-alien-planet-background-red-desert-surface-with-mountains-saturn-and-stars-shine-on-green-sky-martian-extraterrestrial-computer-game-scenery-backdrop-cartoon-vector-illustration_107791-8625.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468",
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 6,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
        {
            image: "https://img.freepik.com/free-vector/shark-and-puffer-fish-in-sea-or-ocean-bottom-with-rocks-around-underwater_107791-6920.jpg?size=626&ext=jpg&ga=GA1.1.1039566379.1645717468",
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 7,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
        {
            image: "https://img.freepik.com/free-photo/portrait-of-a-special-forces-soldier-the-concept-of-military-units-computer-games-mixed-media_392761-11.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468",
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 8,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },
        {
            image: "https://img.freepik.com/free-photo/dialogue-of-survivors-in-the-ruins-after-the-war-3d-illustration_456031-172.jpg?size=626&ext=jpg&ga=GA1.2.1039566379.1645717468",
            title: 'Assassin’s Creed Valhalla',
            genres: ['Паркур', 'РПГ', 'Открытый мир'],
            video: 'https://www.youtube.com/embed/ssrNcwxALS4',
            price: 2863,
            id: 9,
            description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
        },

    ]


    return (
        <div className="home-page">
            {GAMES.map((game)=>
                <GameItem game={game} key={game.id}/>
            )}
        </div>
    );
};

export default Home;