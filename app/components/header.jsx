const React = require("react");
function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();
    return isNaN(dayOfWeek) ? null :
      ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][dayOfWeek];
  }

class header extends React.Component{
 
    constructor(props){
        super(props);
    } 
    render() {
        return <div className="header">
            <h1>Расписание на неделю</h1>
            <h2>День недели: {getDayOfWeek( Date.now() )}</h2>
            <hr/>
            <h3>ФИО:</h3>
            </div>;
    }
}
  
module.exports = header;