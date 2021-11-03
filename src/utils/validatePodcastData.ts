import * as yup from 'yup';

const postSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  src: yup.string().required(),
  tags: yup.array().of(yup.string()).required(),
  image: yup.string().required(),
});

export async function validatePodcastData(
  title: string,
  description: string,
  src: string,
  tags: Array<string>,
  image: string,
): Promise<boolean> {
  const isValid = await postSchema.isValid({
    title,
    description,
    src,
    tags,
    image,
  });

  if (!isValid) {
    throw new Error('Invalid post data');
  }

  return true;
}
