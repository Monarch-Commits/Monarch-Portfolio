'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label'; // Gi-add ni para sa accessibility
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator'; // Pang-buwag sa sections

import toast from 'react-hot-toast';
import { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import UpdateProduct from '@/app/actions/post/updateProject.action';
import { Loader2, Pencil } from 'lucide-react'; // Icons para mas nindot

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

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
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
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Pencil className="h-4 w-4" /> Update Project
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-125">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            Edit Project
          </DialogTitle>
          <DialogDescription>
            Make changes to your project here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-muted/30 flex flex-col items-center justify-center rounded-lg border border-dashed py-4">
          <div className="bg-background relative h-32 w-48 overflow-hidden rounded-md border shadow-sm">
            <Image
              src={imageUrl || product.imageUrl}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-muted-foreground mt-2 text-[10px] font-semibold tracking-widest uppercase">
            Image Preview
          </p>
        </div>

        <Separator />

        <form onSubmit={handleSubmit} className="space-y-5 py-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Project Name</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. My Awesome Portfolio"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about this project..."
              className="min-h-25 resize-none"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="imageUrl">Thumbnail URL</Label>
            <Input
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="liveUrl">Live Demo</Label>
              <Input
                id="liveUrl"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://site.com"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="repoUrl">Repository</Label>
              <Input
                id="repoUrl"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                placeholder="GitHub Link"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="min-w-30">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
