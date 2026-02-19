'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SyntheticEvent, useState } from 'react';
import toast from 'react-hot-toast';
import postProject from '../actions/post/createPostProject.action';

export default function CreatePostProject() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [liveUrl, setLiveUrl] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !title.trim() ||
      !description.trim() ||
      !imageUrl ||
      !liveUrl.trim() ||
      !repoUrl.trim()
    ) {
      return toast.error('Please put valid data');
    }
    setLoading(true);
    try {
      const result = await postProject({
        title,
        description,
        imageUrl,
        liveUrl,
        repoUrl,
      });

      if (result?.success) {
        setTitle('');
        setDescription('');
        setImageUrl(null);
        setLiveUrl('');
        setRepoUrl('');
        toast.success('Created Successfully');
      } else {
        toast.error('Failed to create product');
      }
    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex w-full flex-col items-center justify-center px-1">
      <form
        onSubmit={handleSubmit}
        className="mt-30 flex w-full max-w-lg flex-col items-center justify-center gap-3 rounded-md border p-3"
      >
        <Input
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
          required
        />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
          required
        />

        <Input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImageUrl(e.target.files ? e.target.files[0] : null)
          }
          disabled={loading}
          required
        />
        <Input
          placeholder="Live URL"
          value={liveUrl}
          onChange={(e) => setLiveUrl(e.target.value)}
          disabled={loading}
          required
        />
        <Input
          placeholder="Repository URL"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={loading}
          required
        />

        <Button type="submit" variant={'outline'} disabled={loading}>
          {loading ? 'Adding...' : 'Add Product'}
        </Button>
      </form>
    </div>
  );
}
