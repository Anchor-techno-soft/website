'use client';

import GeneratorInput from '@/components/generator/generator-input';
import { RenderMessage } from '@/components/generator/render-message';
import { GradientBlob } from '@/components/gradient-blob';
import { useChat } from '@ai-sdk/react';
import { createIdGenerator } from 'ai';
import { useState } from 'react';

export default function Page() {
  const [isThinking, setIsThinking] = useState(false);

  const chatHandler = useChat({
    generateId: createIdGenerator({ prefix: 'msgc' }),
    onFinish: () => setIsThinking(false), // ✅ correct replacement
  });

  return (
    <div className="contents">
      <RenderMessage useChat={chatHandler} isThinking={isThinking} />

     
    </div>
  );
}