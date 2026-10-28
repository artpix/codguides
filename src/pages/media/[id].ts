import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

export const prerender = false;

export const GET: APIRoute = async ({ params, redirect }) => {
  const pb = new PocketBase(import.meta.env.POCKETBASE_URL);

  try {
    const media = await pb.collection('media').getOne(params.id!);

    if (!media.file) {
      return new Response('Image not found', { status: 404 });
    }

    const fileUrl = pb.files.getURL(media, media.file);

    return redirect(fileUrl, 302);
  } catch {
    return new Response('Image not found', { status: 404 });
  }
};