import { render } from '@testing-library/react';
import MediaImg from './MediaImg';

describe('@components/MediaImg', () => {

  it('Given className sent it should be combined with className of the component', () => {
    // arrange
    const src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    const { getByRole } = render(
        <MediaImg alt="fancy image" src={src} />
    );

    // act
    const MediaImgTestAlt = getByRole('img');

    // assert
    expect(MediaImgTestAlt).toBeInTheDocument();
    expect(MediaImgTestAlt).toHaveAttribute("src", src);
    expect(MediaImgTestAlt).toHaveAttribute("alt", 'fancy image');

  });

});