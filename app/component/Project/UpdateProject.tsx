'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/ui/dialog';

import toast from 'react-hot-toast';
import { useState } from 'react';
import Image from 'next/image';
import UpdateProduct from '@/app/actions/post/updateProject.action';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Button } from '@/app/components/ui/button';

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export default function UpdateProductForm({ product }: { product: Props }) {
  const [title, setTitle] = useState(product.title);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);
  const [description, setDescription] = useState(product.description);
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
      });

      if (result?.success) {
        toast.success('Product updated successfully!');
        setDescription('');
        setImageUrl('');
        setTitle('');

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
