const React = require("react");
const DayBlock = require("./dayBlock.jsx");

// const subjectsPerDay = [
//     {
//         dayOfWeek: "Понедельник",
//         subjects: [
//             {
//                 time: '07:00',
//                 subject: 'Русский язык'
//             },
//             {
//                 time: '08:00',
//                 subject: 'Математика'
//             },
//             {
//                 time: '09:00',
//                 subject: 'Физкультура'
//             },
//             {
//                 time: '10:00',
//                 subject: 'ОБЖ'
//             },
//             {
//                 time: '11:00',
//                 subject: 'Музыка'
//             },
//             {
//                 time: '12:00',
//                 subject: 'ИЗО'
//             }
//         ]
//     },
//     {
//         dayOfWeek: "Вторник",
//         subjects: [
//             {
//                 time: '07:00',
//                 subject: 'Математика'
//             },
//             {
//                 time: '08:00',
//                 subject: 'Математика'
//             },
//             {
//                 time: '09:00',
//                 subject: 'Физкультура'
//             },
//             {
//                 time: '10:00',
//                 subject: 'ОБЖ'
//             },
//             {
//                 time: '11:00',
//                 subject: 'Музыка'
//             }
//         ]
//     },
//     {
//         dayOfWeek: "Среда",
//         subjects: [
//             {
//                 time: '07:00',
//                 subject: 'Английский язык'
//             },
//             {
//                 time: '08:00',
//                 subject: 'Английский язык'
//             },
//             {
//                 time: '09:00',
//                 subject: 'Английский язык'
//             },
//             {
//                 time: '10:00',
//                 subject: 'Английский язык'
//             },
//             {
//                 time: '11:00',
//                 subject: 'Английский язык'
//             },
//             {
//                 time: '12:00',
//                 subject: 'Английский язык'
//             }
//         ]
//     },
//     {
//         dayOfWeek: "Четверг",
//         subjects: [
//             {
//                 time: '07:00',
//                 subject: 'Химия'
//             },
//             {
//                 time: '08:00',
//                 subject: 'Химия'
//             },
//             {
//                 time: '09:00',
//                 subject: 'Химия'
//             },
//             {
//                 time: '10:00',
//                 subject: 'Биология'
//             },
//             {
//                 time: '11:00',
//                 subject: 'Биология'
//             },
//             {
//                 time: '12:00',
//                 subject: 'Биология'
//             },
//             {
//                 time: '13:00',
//                 subject: 'Биология'
//             },
//         ]
//     },
//     {
//         dayOfWeek: "Пятница",
//         subjects: [
//             {
//                 time: '07:00',
//                 subject: 'Русский язык'
//             },
//             {
//                 time: '08:00',
//                 subject: 'Математика'
//             },
//             {
//                 time: '09:00',
//                 subject: 'Физкультура'
//             },
//             {
//                 time: '10:00',
//                 subject: 'ОБЖ'
//             },
//             {
//                 time: '11:00',
//                 subject: 'Музыка'
//             },
//             {
//                 time: '12:00',
//                 subject: 'ИЗО'
//             }
//         ]
//     },
//     {
//         dayOfWeek: "Суббота",
//         subjects: [
//             {
//                 time: '12:00',
//                 subject: 'ИЗО'
//             }
//         ]
//     }
// ]
const subjectsPerDay = [
    {
        dayOfWeek: "Понедельник",
        subjects: [
            {
                time: '07:00',
                subject: ''
            },{
                time: '08:00',
                subject: ''
            },{
                time: '09:00',
                subject: ''
            },{
                time: '10:00',
                subject: ''
            },{
                time: '11:00',
                subject: ''
            },{
                time: '12:00',
                subject: ''
            },{
                time: '13:00',
                subject: ''
            },{
                time: '14:00',
                subject: ''
            },{
                time: '15:00',
                subject: ''
            },{
                time: '16:00',
                subject: ''
            },{
                time: '17:00',
                subject: ''
            },
        ]
    },
    {
        dayOfWeek: "Вторник",
        subjects: [
            {
                time: '07:00',
                subject: ''
            },{
                time: '08:00',
                subject: ''
            },{
                time: '09:00',
                subject: ''
            },{
                time: '10:00',
                subject: ''
            },{
                time: '11:00',
                subject: ''
            },{
                time: '12:00',
                subject: ''
            },{
                time: '13:00',
                subject: ''
            },{
                time: '14:00',
                subject: ''
            },{
                time: '15:00',
                subject: ''
            },{
                time: '16:00',
                subject: ''
            },{
                time: '17:00',
                subject: ''
            },
        ]
    },
    {
        dayOfWeek: "Среда",
        subjects: [
            {
                time: '07:00',
                subject: ''
            },{
                time: '08:00',
                subject: ''
            },{
                time: '09:00',
                subject: ''
            },{
                time: '10:00',
                subject: ''
            },{
                time: '11:00',
                subject: ''
            },{
                time: '12:00',
                subject: ''
            },{
                time: '13:00',
                subject: ''
            },{
                time: '14:00',
                subject: ''
            },{
                time: '15:00',
                subject: ''
            },{
                time: '16:00',
                subject: ''
            },{
                time: '17:00',
                subject: ''
            },
        ]
    },
    {
        dayOfWeek: "Четверг",
        subjects: [
            {
                time: '07:00',
                subject: ''
            },{
                time: '08:00',
                subject: ''
            },{
                time: '09:00',
                subject: ''
            },{
                time: '10:00',
                subject: ''
            },{
                time: '11:00',
                subject: ''
            },{
                time: '12:00',
                subject: ''
            },{
                time: '13:00',
                subject: ''
            },{
                time: '14:00',
                subject: ''
            },{
                time: '15:00',
                subject: ''
            },{
                time: '16:00',
                subject: ''
            },{
                time: '17:00',
                subject: ''
            },
        ]
    },
    {
        dayOfWeek: "Пятница",
        subjects: [
            {
                time: '07:00',
                subject: ''
            },{
                time: '08:00',
                subject: ''
            },{
                time: '09:00',
                subject: ''
            },{
                time: '10:00',
                subject: ''
            },{
                time: '11:00',
                subject: ''
            },{
                time: '12:00',
                subject: ''
            },{
                time: '13:00',
                subject: ''
            },{
                time: '14:00',
                subject: ''
            },{
                time: '15:00',
                subject: ''
            },{
                time: '16:00',
                subject: ''
            },{
                time: '17:00',
                subject: ''
            },
        ]
    },
    {
        dayOfWeek: "Суббота",
        subjects: [
            {
                time: '07:00',
                subject: ''
            },{
                time: '08:00',
                subject: ''
            },{
                time: '09:00',
                subject: ''
            },{
                time: '10:00',
                subject: ''
            },{
                time: '11:00',
                subject: ''
            },{
                time: '12:00',
                subject: ''
            },{
                time: '13:00',
                subject: ''
            },{
                time: '14:00',
                subject: ''
            },{
                time: '15:00',
                subject: ''
            },{
                time: '16:00',
                subject: ''
            },{
                time: '17:00',
                subject: ''
            },
        ]
    }
]

class dayBlock extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div className="schedule" >
            {
                subjectsPerDay.map(function (object, index) {
                    return <DayBlock key={'day-block-'+index} dayOfWeek={object.dayOfWeek} subjects={object.subjects} />
                })
            }
        </div>;
    }
}

module.exports = dayBlock;