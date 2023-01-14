import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/shared/Header/Header';

describe('Testing Header component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
