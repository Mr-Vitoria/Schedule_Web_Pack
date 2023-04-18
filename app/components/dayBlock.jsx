const React = require("react");
const LessonString = require("./lessonString.jsx");
function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
      ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
  }

class dayBlock extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return this.props.dayOfWeek==getDayOfWeek( Date.now())?
         <div className="dayBlock active">
            <h2 >{this.props.dayOfWeek}</h2>


            {
                this.props.subjects.map(function (object, index) {
                    return <LessonString time={object.time} key={'lesson-string-'+index}
                     subject={object.subject} />
                })
            }
        </div>:
        <div className="dayBlock">
        <h2 >{this.props.dayOfWeek}</h2>
        {
            this.props.subjects.map(function (object, index) {
                return <LessonString time={object.time} key={'lesson-string-'+index}
                 subject={object.subject} />
            })
        }
    </div>
        
        ;
    }
}

module.exports = dayBlock;