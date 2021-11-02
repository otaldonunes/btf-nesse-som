import * as yup from 'yup';

const postSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  author: yup.string().required(),
  tags: yup.array().of(yup.string()).required(),
});

export async function validatePostData(
  title: string,
  content: string,
  author: string,
  tags: Array<string>,
): Promise<boolean> {
  const isValid = await postSchema.isValid({ title, content, author, tags });

  if (!isValid) {
    throw new Error('Invalid post data');
  }

  return true;
}
