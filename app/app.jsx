const ReactDOM = require("react-dom/client");
const React = require("react");
const Schedule = require("./components/schedule.jsx");
const Header = require("./components/header.jsx");
  
// const header = "Мику топ";
// const article = "После одного из заседаний N-ского мирового съезда судьи собрались в совещательной комнате, чтобы снять свои мундиры, минутку отдохнуть и ехать домой обедать.";
  
ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <div className="container">
        <Header />
        <Schedule/>
    </div>
);