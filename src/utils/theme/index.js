import { createMuiTheme } from '@material-ui/core/styles';
import overrides from './overrides';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#EDEDED',
    },
  },
  overrides,
});

export default theme;
