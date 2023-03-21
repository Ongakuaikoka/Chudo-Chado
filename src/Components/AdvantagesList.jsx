import React from "react";
import { Wrapper, Advantages, Advantage } from '../css/AdvantagesElements';

const AdvantagesList = ({  }) => {
    const advantages = [
        {
            id: 1,
            name: 'Индивидуальный подход',
            text: 'Мы учитываем индивидуальные потребности каждого ребёнка, индивидуально корректируя  для него программу развития.',
        },
        {
            id: 2,
            name: 'Уникальные методики',
            text: 'Мы используем уникальные методики, которые помогают детям быстрее и лучше развиваться.',
        },
        {
            id: 3,
            name: 'Расписание',
            text: 'В "Чудо-Чадо" мы постараемся подобрать удобное расписание, чтобы урок приносил максимум пользы, а ученик был вдохновленным и активным.'
        },
        {
            id: 4,
            name: 'Опытные педагоги',
            text: 'Наша команда состоит из высококвалифицированных специалистов, которые имеют опыт работы с детьми разных возрастов',
        },
    ]
  
  return (
    <Wrapper>
        <h1>Почему Чудо-Чадо</h1>
        <p>лучшее место для обучения Вашего ребенка?</p>
        <Advantages>
            {advantages.map((advantage) => (
                <Advantage key={advantage.id}>
                    <h1>{advantage.name}</h1>
                    <p>{advantage.text}</p>
                </Advantage>
            ))}
        </Advantages>
    </Wrapper>
  );
};
  
export default AdvantagesList;