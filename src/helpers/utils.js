import client from '../sanity/client'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export const CreateUrl = (source) => {
    return builder.image(source).url();
}