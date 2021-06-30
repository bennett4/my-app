import { shallow, ShallowWrapper } from 'enzyme';

import App from '@/pages/_app';

describe('_app', () => {
  let wrapper: ShallowWrapper;
  const props: any = {
    pageProps: { myProp: 'value' },
    router: undefined,
    Component: '',
  }

  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  test('should pass pageProps', () => {
    expect(wrapper.props()).toEqual(props.pageProps);
  });
});
