'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import toast from 'react-hot-toast';
import { useState } from 'react';
import Image from 'next/image';
import UpdateProduct from '@/app/actions/post/updateProject.action';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  liveUrl: string | null;
  repoUrl: string | null;
}

export default function UpdateProjectForm({ product }: { product: Props }) {
  const [title, setTitle] = useState(product.title);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [description, setDescription] = useState(product.description);
  const [liveUrl, setLiveUrl] = useState(product.liveUrl || '');
  const [repoUrl, setRepoUrl] = useState(product.repoUrl || '');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await UpdateProduct({
        id: product.id,
        title,
        imageUrl,
        description,
        liveUrl,
        repoUrl,
      });

      if (result?.success) {
        toast.success('Product updated successfully!');
        setIsOpen(false);
      } else {
        toast.error('May error sa pag update ni dire par');
      }
    } catch (error) {
      console.error('naay mali sa imong modal sa update boy ', error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={'default'}> Update </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              Update this product if only neccessary.
            </DialogDescription>
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={190}
              height={190}
            />

            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name"
                required
              />
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
              />

              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
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

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Loading...' : 'Update'}
              </Button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
