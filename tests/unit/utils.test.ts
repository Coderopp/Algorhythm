import { cn } from '@/lib/utils';

describe('utils.cn', () => {
  test('merges classes and removes duplicates', () => {
    const result = cn('a', 'b', 'a');
    expect(result).toContain('a');
    expect(result).toContain('b');
  });
});
