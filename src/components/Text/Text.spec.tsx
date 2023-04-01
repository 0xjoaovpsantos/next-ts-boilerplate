//Setup Tests
import { render, cleanup } from '@testing-library/react';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom';

//Components
import { Text } from '@/components/Text/Text';

describe('<Text>', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should be render', () => {
    // ARRANGE
    const element = render(<Text>Test</Text>);

    // ASSERT
    expect(element).toBeDefined();
  });
});
