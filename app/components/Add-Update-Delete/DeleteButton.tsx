'use client';

import deleteProject from '@/app/actions/post/deleteProject.action';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function DeleteButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDeleteProduct = async () => {
    toast(
      (t) => (
        <span>
          Are you sure?
          <button
            className="ml-4 rounded bg-red-500 px-2 py-1 text-white"
            onClick={async () => {
              toast.dismiss(t.id);
              await executeDelete();
            }}
          >
            Yes
          </button>
          <button
            className="ml-2 rounded bg-gray-200 px-2 py-1"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </span>
      ),
      { duration: 5000 },
    );
  };

  const executeDelete = async () => {
    setLoading(true);
    try {
      await toast.promise(deleteProject(id), {
        loading: 'Deleting...',
        success: 'Deleted Successfully! 🚀',
        error: 'Minalas, hindi na-delete.',
      });
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (error) {
      console.error('error dire pre sa client', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size={'sm'}
      onClick={handleDeleteProduct}
      disabled={loading}
      variant={'destructive'}
    >
      {loading ? 'Deleting...' : 'Delete'}
    </Button>
  );
}
