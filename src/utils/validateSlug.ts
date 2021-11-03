import * as yup from 'yup';

const slugSchema = yup.object().shape({
  slug: yup.string().required(),
});

export async function validateSlug(slug: string | string[]): Promise<boolean> {
  const isValid = await slugSchema.isValid({ slug });

  if (!isValid) {
    throw new Error('Invalid slug');
  }

  return true;
}
