import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Calendar from './components/Calendar';
import Family from './components/Family';
import Notifications from './components/Notifications';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/calendar">カレンダー</Link></li>
            <li><Link to="/family">家族登録</Link></li>
            <li><Link to="/notifications">通知</Link></li>
            <li><Link to="/profile">プロフィール</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/calendar" component={Calendar} />
          <Route path="/family" component={Family} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Calendar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
