import slugify from 'react-slugify';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { validatePodcastData } from '@utils/validatePodcastData';
import { cloudinary } from '@services/cloudinary';

interface podcastData {
  data: podcastProps;
}

interface podcastProps {
  readonly _id: string;
  title: string;
  readonly slug: string;
  description: string;
  src: string;
  readonly createdAt: string;
  updatedAt?: string;
  tags: Array<string>;
  image: Promise<string>;
}

export async function insertPodcast(
  title: string,
  description: string,
  src: string,
  tags: Array<string>,
  image: string,
): Promise<podcastData> {
  await validatePodcastData(title, description, src, tags, image);

  const podcast: podcastData = {
    data: {
      _id: uuidv4(),
      title,
      slug: slugify(title),
      description,
      src,
      createdAt: format(new Date(), 'T', { locale: ptBR }),
      tags,
      image: cloudinary(image),
    },
  };

  await fauna.query(q.Create(q.Collection('podcasts'), podcast));

  return podcast;
}
