import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '../components/shared/Grid';

describe('Testing Grid component', () => {
  it('Testing with snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Grid />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
