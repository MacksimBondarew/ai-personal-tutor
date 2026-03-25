import { Header } from '@/src/shared/components/header/Header';
import { ChatPage } from '@/src/features/chat/components';

type ChatRoutePageProps = {
  params: Promise<{ conversationId: string }>;
};

export default async function ChatRoutePage({ params }: ChatRoutePageProps) {
  const { conversationId } = await params;

  return (
    <>
      <Header />
      <ChatPage conversationId={conversationId} />
    </>
  );
}
