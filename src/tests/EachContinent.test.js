import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import EachContinent from '../components/EachContinent';

describe('Testing EachContinent component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <EachContinent />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
