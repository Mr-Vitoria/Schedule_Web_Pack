const React = require("react");

class lessonString extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div className="lesson">
            <span>{this.props.time}</span>
            <span className="lessonSubject">{this.props.subject}</span>
        </div>;
    }
}

module.exports = lessonString;