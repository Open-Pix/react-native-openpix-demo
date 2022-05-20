import { render } from '@testing-library/react-native';
import OpenPixDemo from '../OpenPixDemo';

it('render openpix demo', () => {
  const { getByText } = render(
    <OpenPixDemo />
  );

  expect(getByText('OpenPix Demo')).toBeTruthy();
});