'use client';

import GeneratorInput from '@/components/generator/generator-input';
import { RenderMessage } from '@/components/generator/render-message';
import { GradientBlob } from '@/components/gradient-blob';
import { useChat } from '@ai-sdk/react';
import { createIdGenerator } from 'ai';
import { useState } from 'react';

export default function Page() {
  // const [isThinking, setIsThinking] = useState(false);

  // const chatHandler = useChat({
  //   generateId: createIdGenerator({ prefix: 'msgc' }),
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   setIsThinking(true);
  //   chatHandler.handleSubmit(e);
  // };

  return (
    <div className="contents">
      {/* <RenderMessage useChat={chatHandler} isThinking={isThinking} />

      <div className="px-5 md:px-12">
        <form onSubmit={handleSubmit}>
          <GeneratorInput
            value={chatHandler.input}
            onChange={chatHandler.handleInputChange}
          />
        </form>

        <GradientBlob />
      </div> */}
    </div>
  );
}