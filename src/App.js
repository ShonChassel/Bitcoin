import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import './assets/global.scss';


import { BitcoinApp } from './views/BitcoinApp'
import { ContactDetailsPage } from './views/ContactDetailsPage';
import { ContactEdit} from './views/ContactEdit'
import { ContactList } from './cmps/ContactList';
import { AppHeader } from './cmps/AppHeader';
import { Chart} from './cmps/Chart'

function App() {
  return (
    <Router>
        <AppHeader></AppHeader>
      <div>
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEdit} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/contactList" component={ContactList}/>
          <Route path="/chart" component={Chart}/>
          <Route path="/" component={BitcoinApp} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
