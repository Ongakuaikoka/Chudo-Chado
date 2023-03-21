import React, { useState } from "react";
import { GroupsList, AgeGroups, Cell, Courses, Course, GroupsWrapper, Button } from '../css/CoursesSwitcherElements';
import image from '../img/Preschool/01.jpeg';
import {ReactComponent as BrushSVG} from '../logos/brush_stroke.svg';

const CoursesSwitcher = () => {
    const [selectedAgeGroup, setselectedAgeGroup] = useState(1);

    const ageGroups = [
        {
            id: 1,
            name: "2-5 лет",
        },
        {
            id: 2,
            name: "5-7 лет",
        },
        {
            id: 3,
            name: "от 7 лет",
        },
    ];
    const courses = [
        {
            id: 1,
            name: "Школа раннего развития",
            note: "2-5 лет",
            ageGroups: [1], 
        },
        {
            id: 2,
            name: "Обучение чтению",
            note: "4-5 лет",
            ageGroups: [1], 
        },
        {
            id: 2,
            name: "Подготовка к школе",
            note: "5-6 лет",
            ageGroups: [2], 
        },
        {
            id: 3,
            name: "Английский язык",
            note: "с 4-х лет",
            ageGroups: [1,2,3], 
        },
        {
            id: 4,
            name: "Французский язык",
            note: "-",
            ageGroups: [2,3], 
        },
        {
            id: 5,
            name: "Занятия с логопедом",
            note: "-",
            ageGroups: [1,2,3], 
        },
        {
            id: 6,
            name: "Занятия с психологом",
            note: "-",
            ageGroups: [1,2,3], 
        },
        {
            id: 7,
            name: "Изо-прикладное творчество",
            note: "с 3-х лет",
            ageGroups: [1,2,3], 
        },
        {
            id: 8,
            name: "Шахматы",
            note: "с 5-ти лет",
            ageGroups: [2,3], 
        },
        {
            id: 9,
            name: "Ментальная арифметика",
            note: "с 4-х лет",
            ageGroups: [1,2,3], 
        },
    ]

    const handleGroupClick = (ageGroup) => {
        setselectedAgeGroup(ageGroup);
      };

    return (
        <GroupsWrapper>
            <h1>Развивающие программы</h1>
            <p>Занятия, которые раскроют потенциал вашего ребенка</p>
            <GroupsList>
            {ageGroups.map((ageGroup) => (
                    <AgeGroups key={ageGroup.id} onClick={() => handleGroupClick(ageGroup.id)}>
                        {ageGroup.name}
                    </AgeGroups>
            ))}
            </GroupsList>
            <Courses>
            {courses.filter((course) => {console.log(course.ageGroups.includes(selectedAgeGroup)); return course.ageGroups.includes(selectedAgeGroup)}).map((course) => {
                return (
                    <Cell>
                        <img src={image} />
                        <div>
                            <BrushSVG />
                            <p>{course.note}</p>
                        </div>
                        <Course key={course.id}>{course.name}</Course>
                        <Button>Выбрать</Button>
                    </Cell>
                )
            })}
            </Courses>
        </GroupsWrapper>
  );
};
  
export default CoursesSwitcher;