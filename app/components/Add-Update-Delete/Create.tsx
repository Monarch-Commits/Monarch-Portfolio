'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import { SyntheticEvent, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import postProject from '../../actions/post/createPostProject.action';
import { Loader2, PlusCircle, Image as ImageIcon } from 'lucide-react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [liveUrl, setLiveUrl] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [demoUsername, setdemoUsername] = useState('');
  const [demoPassword, setdemoPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle Image Preview cleanup para iwas memory leak
  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(null);
  }, [imageFile]);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !imageFile) {
      return toast.error(
        'Please fill in all required fields and upload an image.',
      );
    }

    setLoading(true);
    try {
      const result = await postProject({
        title,
        description,
        imageUrl: imageFile, // Siguraduhin na ang Server Action mo ay tumatanggap ng File/FormData
        liveUrl,
        repoUrl,
        demoUsername,
        demoPassword,
      });

      if (result?.success) {
        toast.success('Project created successfully!');
        // Reset Form
        setTitle('');
        setDescription('');
        setImageFile(null);
        setLiveUrl('');
        setRepoUrl('');
        setdemoUsername('');
        setdemoPassword('');
        setIsOpen(false);
      } else {
        toast.error('Failed to create project.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="gap-2">
          <PlusCircle className="h-4 w-4" /> Create Project
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[95vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            New Project
          </DialogTitle>
          <DialogDescription>
            Showcase your hard work. Fill out the details below to add a new
            project.
          </DialogDescription>
        </DialogHeader>

        {/* Image Preview Area */}
        <div className="bg-muted/30 flex flex-col items-center justify-center rounded-lg border border-dashed py-6">
          {previewUrl ? (
            <div className="group/image w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                src={previewUrl}
                alt="Preview"
                width={800}
                height={600}
                priority
                className="h-auto w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
              />
            </div>
          ) : (
            <div className="text-muted-foreground flex flex-col items-center">
              <ImageIcon className="h-10 w-10 opacity-20" />
              <p className="mt-2 text-xs font-medium italic">
                No image selected
              </p>
            </div>
          )}
          <p className="text-muted-foreground mt-3 text-[10px] font-bold tracking-widest uppercase">
            Image Preview
          </p>
        </div>

        <Separator />

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              placeholder="e.g. E-commerce Dashboard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="What makes this project special?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
              className="min-h-25 resize-none"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image">Thumbnail Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(e.target.files ? e.target.files[0] : null)
              }
              disabled={loading}
              className="cursor-pointer"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="liveUrl">Live Demo URL</Label>
            <Input
              id="liveUrl"
              placeholder="https://..."
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="repoUrl">Repository Link</Label>
            <Input
              id="repoUrl"
              placeholder="GitHub/GitLab"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demoUsername">Demo Username</Label>
            <Input
              id="demoUsername"
              placeholder="Username"
              value={demoUsername}
              onChange={(e) => setdemoUsername(e.target.value)}
              disabled={loading}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demoPassword">Demo Username</Label>
            <Input
              id="demoPassword"
              placeholder="Password"
              value={demoPassword}
              onChange={(e) => setdemoPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="flex justify-end gap-3 pt-6">
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
                  Creating...
                </>
              ) : (
                'Create Project'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
