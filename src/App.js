import './App.scss';
import Header from '../src/components/header/header'
import YearMonthPicker from '../src/components/date-selection/date-selection'
import useHttp from '../src/hooks/useHttp'
import Content from '../src/components/content/content'
import { useState } from "react";
import moment from 'moment'


// let BASEURL = 'https://api.nasa.gov/planetary/apod?api_key=Xj1Bavdb6geFjFzbzXnPr0r7XCk0hl3L5vnzfzIT'
function App() {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  let formatDate = moment(new Date()).format('YYYY-MM-DD')

  function updateDateState(newDate) {
    formatDate = moment(newDate).format('YYYY-MM-DD');
    setDate(formatDate)
  }
  const data = useHttp(date)

  return (
    <div className="App">
      <Header></Header>
      <YearMonthPicker updateDate={updateDateState} ></YearMonthPicker>
      <Content value={data}></Content>
    </div>
  );
}

export default App;
