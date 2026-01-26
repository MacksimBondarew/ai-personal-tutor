import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/src/shared/lib/supabase';
import { buildPdfPath } from '@/src/shared/lib/storagePath';
import { toast } from 'sonner';

export const useUploadPdf = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ['upload-pdf'],
    mutationFn: async ({ file }: { file: File }) => {
      const { data: userData } = await supabase().auth.getUser();
      const user = userData.user;
      if (!user) throw new Error('Not authenticated');
      const docId = crypto.randomUUID();
      const storagePath = buildPdfPath(user.id, docId);
      const { error: uploadError } = await supabase()
        .storage.from('pdfs')
        .upload(storagePath, file, {
          contentType: file.type || 'application/pdf',
          upsert: false,
        });
      if (uploadError) throw uploadError;
      const { error: insertError } = await supabase()
        .from('documents')
        .insert({
          id: docId,
          user_id: user.id,
          title: file.name.replace(/\.pdf$/i, ''),
          storage_path: storagePath,
          file_name: file.name,
          size_bytes: file.size,
          mime_type: file.type || 'application/pdf',
          status: 'uploaded',
        });

      if (insertError) throw insertError;

      return { id: docId, storage_path: storagePath };
    },
    onSuccess: async () => {
      await qc.invalidateQueries({ queryKey: ['documents'] });
    },
    onError(error: any) {
      toast.error(error.message);
    },
  });
};
