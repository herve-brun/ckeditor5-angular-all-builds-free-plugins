import { ckeditor5BuildClassicAllFreePlugins } from './ckeditor5-build-classic-all-free-plugins';

describe('ckeditor5BuildClassicAllFreePlugins', () => {
  it('should work', () => {
    expect(ckeditor5BuildClassicAllFreePlugins()).toEqual(
      'ckeditor5-build-classic-all-free-plugins'
    );
  });
});
